import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { db } from '../firebase';

import {
  doc,
  onSnapshot,
  setDoc,
} from 'firebase/firestore';

const SettingsContext = createContext(null);

const DEFAULT_SETTINGS = {
  branding: {
    academyName: 'ISSHAAM ACADEMY',
    logoUrl: '/logo.jpg',
    bgColor: 'bg-slate-100',
    primaryColor: '#f59e0b',
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

const mergeSettings = (current, incoming = {}) => ({
  ...DEFAULT_SETTINGS,
  ...current,
  ...incoming,

  branding: {
    ...DEFAULT_SETTINGS.branding,
    ...(current?.branding || {}),
    ...(incoming?.branding || {}),
  },

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
});

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [loading, setLoading] = useState(true);
  const [settingsError, setSettingsError] = useState(null);

  useEffect(() => {
    const settingsRef = doc(
      db,
      'settings',
      'global'
    );

    const unsubscribe = onSnapshot(
      settingsRef,

      (snapshot) => {
        if (snapshot.exists()) {
          setSettings(
            mergeSettings(
              DEFAULT_SETTINGS,
              snapshot.data()
            )
          );
        } else {
          setSettings(DEFAULT_SETTINGS);
        }

        setSettingsError(null);
        setLoading(false);
      },

      (error) => {
        console.error(
          'خطأ في جلب إعدادات الأكاديمية:',
          error
        );

        setSettingsError(
          'تعذر تحميل إعدادات الأكاديمية.'
        );

        // Keep the default configuration
        // instead of breaking the entire application.
        setSettings(DEFAULT_SETTINGS);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const updateSettings = async (newSettings = {}) => {
    try {
      const updatedSettings = mergeSettings(
        settings,
        newSettings
      );

      const settingsRef = doc(
        db,
        'settings',
        'global'
      );

      await setDoc(
        settingsRef,
        updatedSettings,
        { merge: true }
      );

      setSettings(updatedSettings);
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

      throw error;
    }
  };

  const value = useMemo(
    () => ({
      settings,
      updateSettings,
      loading,
      settingsError,
    }),
    [
      settings,
      loading,
      settingsError,
    ]
  );

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error(
      'useSettings must be used inside SettingsProvider'
    );
  }

  return context;
}