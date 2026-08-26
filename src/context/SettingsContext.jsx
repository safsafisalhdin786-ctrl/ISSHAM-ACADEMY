import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, onSnapshot } from 'firebase/firestore';

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
      notes: ''
    }
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // الاستماع المباشر للتغييرات في Firestore
    const unsub = onSnapshot(doc(db, 'settings', 'global'), (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setSettings(prev => ({
          branding: { ...prev.branding, ...data.branding },
          general: { ...prev.general, ...data.general }
        }));
      }
      setLoading(false);
    }, (err) => {
      console.error("خطأ جلب الإعدادات:", err);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, setSettings, loading }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return useContext(SettingsContext);
}