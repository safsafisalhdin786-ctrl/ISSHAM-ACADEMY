import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState({
    branding: {
      academyName: 'ISSHAAM ACADEMY',
      logoUrl: '/logo.jpg',
      bgColor: 'bg-slate-100',
      primaryColor: '#f59e0b',
      language: 'ar'
    },
    general: {
      phone: '',
      address: 'Moulay Rachid, Casablanca',
      academicYear: '2025/2026',
      teacherPercentage: 50,
      notes: 'شكراً لثقتكم بأكاديمية إسهام.'
    },
    adminEmails: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // الاستماع المباشر للتغييرات في Firestore
    const docRef = doc(db, 'settings', 'global');
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setSettings(docSnap.data());
      }
      setLoading(false);
    }, (error) => {
      console.error("خطأ في جلب الإعدادات:", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const updateSettings = async (newSettings) => {
    try {
      const docRef = doc(db, 'settings', 'global');
      const updated = { ...settings, ...newSettings };
      await setDoc(docRef, updated, { merge: true });
      setSettings(updated);
    } catch (error) {
      console.error("خطأ أثناء تحديث الإعدادات:", error);
      throw error;
    }
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings, loading }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}