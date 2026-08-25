import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

export default function AppSettings() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const [settings, setSettings] = useState({
    academyName: 'ISSHAAM ACADEMY',
    phone: '',
    address: 'Moulay Rachid, Casablanca',
    teacherPercentage: 50,
    academicYear: '2025/2026',
    notes: ''
  });

  // جلب البيانات من Firestore عند فتح الصفحة
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const docRef = doc(db, 'settings', 'general');
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setSettings(docSnap.data());
        }
      } catch (error) {
        console.error("خطأ في جلب الإعدادات:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');
    try {
      await setDoc(doc(db, 'settings', 'general'), settings);
      setMessage('تم حفظ الإعدادات بنجاح! ✅');
    } catch (error) {
      console.error("خطأ في حفظ الإعدادات:", error);
      setMessage('حدث خطأ أثناء الحفظ ❌');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="p-6 text-center text-slate-600">جاري تحميل الإعدادات...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 dir-rtl">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">إعدادات الأكاديمية</h2>
        <p className="text-slate-500 text-sm mb-6">إدارة البيانات العامة ونسب الأرباح والنسب المئوية للأستاذة.</p>

        {message && (
          <div className={`p-4 mb-6 rounded-lg font-medium text-sm ${message.includes('بنجاح') ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">اسم المؤسسة / الأكاديمية</label>
              <input
                type="text"
                name="academyName"
                value={settings.academyName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">السنة الدراسية</label>
              <input
                type="text"
                name="academicYear"
                value={settings.academicYear}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">رقم الهاتف التواصل</label>
              <input
                type="text"
                name="phone"
                value={settings.phone}
                onChange={handleChange}
                placeholder="06XXXXXXXX"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">نسبة الأستاذ الافتراضية (%)</label>
              <input
                type="number"
                name="teacherPercentage"
                value={settings.teacherPercentage}
                onChange={handleChange}
                min="0"
                max="100"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">العنوان / المقر</label>
            <input
              type="text"
              name="address"
              value={settings.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">ملاحظات / شروط عامة للاستدعاءات والوصولات</label>
            <textarea
              name="notes"
              rows="3"
              value={settings.notes}
              onChange={handleChange}
              placeholder="أدخل أي ملاحظات تظهر في أسفل الوصولات المالية..."
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            ></textarea>
          </div>

          <div className="flex justify-end pt-4 border-t border-slate-100">
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium shadow-sm transition disabled:opacity-50"
            >
              {saving ? 'جاري الحفظ...' : 'حفظ التغييرات'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}