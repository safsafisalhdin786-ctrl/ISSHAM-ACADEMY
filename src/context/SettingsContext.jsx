import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { db } from '../firebase';

import {
  doc,
  onSnapshot,
  setDoc,
} from 'firebase/firestore';

const SettingsContext = createContext(null);
const defaultLogoUrl = `${import.meta.env.BASE_URL}logo.jpeg`;

const DEFAULT_SETTINGS = {
  branding: {
    academyName: 'ISSHAAM ACADEMY',
    logoUrl: defaultLogoUrl,
    bgColor: 'bg-slate-100',
    primaryColor: '#2563eb',
    language: 'ar',
  },

  general: {
    phone: '',
    address: 'Moulay Rachid, Casablanca',
    academicYear: '2025/2026',
    teacherPercentage: 50,
    notes: 'شكراً لثقتكم بأكاديمية إسهام.',
  },

  adminEmails: [],
};

const LOCAL_SETTINGS_KEY = 'isshaam_settings';

const readLocalSettings = () => {
  try {
    return mergeSettings(DEFAULT_SETTINGS, JSON.parse(window.localStorage.getItem(LOCAL_SETTINGS_KEY) || '{}'));
  } catch {
    return DEFAULT_SETTINGS;
  }
};

/**
 * دمج الإعدادات الافتراضية مع الإعدادات الحالية
 * والإعدادات الجديدة بدون حذف أي بيانات موجودة.
 */
const mergeSettings = (current = {}, incoming = {}) => {
  const branding = {
    ...DEFAULT_SETTINGS.branding,
    ...(current?.branding || {}),
    ...(incoming?.branding || {}),
  };

  // Migrate the original default without overriding an administrator's custom color.
  if (branding.primaryColor === '#f59e0b') {
    branding.primaryColor = DEFAULT_SETTINGS.branding.primaryColor;
  }

  return {
    ...DEFAULT_SETTINGS,
    ...current,
    ...incoming,

    branding,

    general: {
      ...DEFAULT_SETTINGS.general,
      ...(current?.general || {}),
      ...(incoming?.general || {}),
    },

    adminEmails: Array.isArray(incoming?.adminEmails)
      ? incoming.adminEmails
      : Array.isArray(current?.adminEmails)
        ? current.adminEmails
        : DEFAULT_SETTINGS.adminEmails,
  };
};

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(readLocalSettings);
  const [loading, setLoading] = useState(true);
  const [settingsError, setSettingsError] = useState(null);

  /**
   * الاستماع المباشر لإعدادات الأكاديمية من Firestore
   */
  useEffect(() => {
    const settingsRef = doc(
      db,
      'settings',
      'global'
    );

    const unsubscribe = onSnapshot(
      settingsRef,

      (snapshot) => {
        try {
          if (snapshot.exists()) {
            const firestoreSettings = snapshot.data();

            setSettings(
              mergeSettings(
                DEFAULT_SETTINGS,
                firestoreSettings
              )
            );
            window.localStorage.setItem(LOCAL_SETTINGS_KEY, JSON.stringify(mergeSettings(DEFAULT_SETTINGS, firestoreSettings)));
          } else {
            setSettings(readLocalSettings());
          }

          setSettingsError(null);
          setLoading(false);
        } catch (error) {
          console.error(
            'خطأ أثناء معالجة إعدادات الأكاديمية:',
            error
          );

          setSettings(readLocalSettings());
          setSettingsError(
            'تعذر معالجة إعدادات الأكاديمية.'
          );
          setLoading(false);
        }
      },

      (error) => {
        console.error(
          'خطأ في جلب إعدادات الأكاديمية:',
          error
        );

        setSettingsError(
          'تعذر تحميل إعدادات الأكاديمية.'
        );

        // نخلي التطبيق يخدم بالإعدادات الافتراضية
        // بدل ما يطيح الموقع كامل.
        setSettings(readLocalSettings());
        setLoading(false);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  /**
   * تحديث إعدادات الأكاديمية
   */
  const updateSettings = async (newSettings = {}) => {
    try {
      const updatedSettings = mergeSettings(
        settings,
        newSettings
      );
      setSettings(updatedSettings);
      window.localStorage.setItem(LOCAL_SETTINGS_KEY, JSON.stringify(updatedSettings));

      const settingsRef = doc(
        db,
        'settings',
        'global'
      );

      await setDoc(
        settingsRef,
        updatedSettings,
        {
          merge: true,
        }
      );

      setSettingsError(null);

      return updatedSettings;
    } catch (error) {
      console.error(
        'خطأ أثناء تحديث إعدادات الأكاديمية:',
        error
      );

      setSettingsError(
        'تعذر حفظ إعدادات الأكاديمية.'
      );

      return mergeSettings(settings, newSettings);
    }
  };

  /**
   * إعادة تحميل الإعدادات إلى القيم الافتراضية محلياً
   */
  const resetLocalSettings = () => {
    setSettings(DEFAULT_SETTINGS);
    window.localStorage.setItem(LOCAL_SETTINGS_KEY, JSON.stringify(DEFAULT_SETTINGS));
    setSettingsError(null);
  };

  /**
   * قيمة Context محسوبة بشكل آمن
   */
  const value = {
    settings,
    updateSettings,
    resetLocalSettings,
    loading,
    settingsError,
  };

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

/**
 * Hook للوصول إلى إعدادات الأكاديمية
 */
export function useSettings() {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error(
      'useSettings must be used inside SettingsProvider'
    );
  }

  return context;
}