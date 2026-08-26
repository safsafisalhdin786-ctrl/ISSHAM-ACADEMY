import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { useSettings } from '../context/SettingsContext';

export default function AppSettings() {
  const { settings, updateSettings, loading: contextLoading } = useSettings();

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState('branding'); // branding | admins | general

  // 1. إعدادات الهوية والتصميم واللغة
  const [branding, setBranding] = useState({
    academyName: 'ISSHAAM ACADEMY',
    logoUrl: '/logo.jpg',
    bgColor: 'bg-slate-100',
    primaryColor: '#f59e0b',
    language: 'ar'
  });

  // 2. إعدادات النظام والعامة
  const [general, setGeneral] = useState({
    phone: '',
    address: 'Moulay Rachid, Casablanca',
    academicYear: '2025/2026',
    teacherPercentage: 50,
    notes: 'شكراً لثقتكم بأكاديمية إسهام.'
  });

  // 3. قائمة المشرفين (Admins)
  const [adminEmails, setAdminEmails] = useState([]);
  const [newAdminEmail, setNewAdminEmail] = useState('');

  // مزامنة حالة النموذج مع الإعدادات القادمة من الـ Context
  useEffect(() => {
    if (settings) {
      if (settings.branding) setBranding(prev => ({ ...prev, ...settings.branding }));
      if (settings.general) setGeneral(prev => ({ ...prev, ...settings.general }));
      if (settings.adminEmails) setAdminEmails(settings.adminEmails);
    }
  }, [settings]);

  // حفظ الإعدادات العامة والتصميم وتحديث الـ Context فوراً
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');
    try {
      const updatedData = {
        branding,
        general,
        adminEmails
      };

      await updateSettings(updatedData);
      setMessage('تم حفظ التغييرات وتطبيقها فوراً في الموقع كامل! ✅');
    } catch (error) {
      console.error("خطأ في حفظ الإعدادات:", error);
      setMessage('حدث خطأ أثناء حفظ الإعدادات ❌');
    } finally {
      setSaving(false);
    }
  };

  // إضافة Admin جديد
  const handleAddAdmin = async (e) => {
    e.preventDefault();
    if (!newAdminEmail.trim()) return;

    const email = newAdminEmail.trim().toLowerCase();
    if (adminEmails.includes(email)) {
      alert('هذا البريد الإلكتروني موجود بالفعل في قائمة المشرفين!');
      return;
    }

    try {
      const docRef = doc(db, 'settings', 'global');
      await updateDoc(docRef, {
        adminEmails: arrayUnion(email)
      });
      const updatedAdmins = [...adminEmails, email];
      setAdminEmails(updatedAdmins);
      setNewAdminEmail('');
      await updateSettings({ adminEmails: updatedAdmins });
      setMessage(`تم إضافة ${email} كـ Admin بنجاح ✅`);
    } catch (error) {
      console.error('خطأ في إضافة الأدمن:', error);
      setMessage('حدث خطأ أثناء إضافة الأدمن ❌');
    }
  };

  // حذف Admin
  const handleRemoveAdmin = async (emailToRemove) => {
    if (!window.confirm(`هل أنت تأكد من إزالة صلاحية الأدمن عن ${emailToRemove}؟`)) return;

    try {
      const docRef = doc(db, 'settings', 'global');
      await updateDoc(docRef, {
        adminEmails: arrayRemove(emailToRemove)
      });
      const updatedAdmins = adminEmails.filter(email => email !== emailToRemove);
      setAdminEmails(updatedAdmins);
      await updateSettings({ adminEmails: updatedAdmins });
      setMessage(`تم حذف صلاحية ${emailToRemove} بنجاح ✅`);
    } catch (error) {
      console.error('خطأ في حذف الأدمن:', error);
    }
  };

  if (contextLoading) {
    return (
      <div className="p-8 text-center text-slate-600 font-bold dir-rtl">
        جاري تحميل الإعدادات...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6 dir-rtl text-right pb-12">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            ⚙️ إعدادات الأكاديمية (Paramètres)
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            التحكم في اللوغو، الألوان، اللغة، المشرفين، والنسب المالية للأستاذة.
          </p>
        </div>
      </div>

      {/* التنبيهات */}
      {message && (
        <div className={`p-4 rounded-xl font-medium text-sm shadow-sm transition-all ${
          message.includes('بنجاح') 
            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
            : 'bg-rose-50 text-rose-700 border border-rose-200'
        }`}>
          {message}
        </div>
      )}

      {/* أزرار التنقل بين الأقسام */}
      <div className="flex border-b border-slate-200 gap-2 bg-white p-2 rounded-xl shadow-sm border">
        <button
          onClick={() => setActiveTab('branding')}
          className={`px-4 py-2.5 rounded-lg font-bold text-sm transition ${
            activeTab === 'branding' 
              ? 'bg-amber-500 text-white shadow-sm' 
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          🎨 الهوية والألوان واللغة
        </button>
        <button
          onClick={() => setActiveTab('admins')}
          className={`px-4 py-2.5 rounded-lg font-bold text-sm transition ${
            activeTab === 'admins' 
              ? 'bg-amber-500 text-white shadow-sm' 
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          👥 إدارة المشرفين (Admins)
        </button>
        <button
          onClick={() => setActiveTab('general')}
          className={`px-4 py-2.5 rounded-lg font-bold text-sm transition ${
            activeTab === 'general' 
              ? 'bg-amber-500 text-white shadow-sm' 
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          📋 بيانات المؤسسة والنسب
        </button>
      </div>

      {/* Tab 1: الهوية والألوان واللغة */}
      {activeTab === 'branding' && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6">
          <h3 className="text-md font-bold text-slate-800 border-b pb-3">تخصيص اللوغو، الألوان، واللغة</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
            {/* اسم الأكاديمية */}
            <div>
              <label className="block font-bold text-slate-700 mb-1">اسم المؤسسة / الأكاديمية *</label>
              <input
                type="text"
                value={branding.academyName}
                onChange={e => setBranding({ ...branding, academyName: e.target.value })}
                required
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            {/* رابط اللوغو */}
            <div>
              <label className="block font-bold text-slate-700 mb-1">رابط اللوغو (Logo URL)</label>
              <input
                type="text"
                placeholder="مثال: /logo.jpg أو رابط مباشر"
                value={branding.logoUrl}
                onChange={e => setBranding({ ...branding, logoUrl: e.target.value })}
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
              {branding.logoUrl && (
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xs text-slate-500 font-bold">معاينة اللوغو:</span>
                  <img src={branding.logoUrl} onError={(e) => { e.target.src = '/logo.jpg'; }} alt="Logo" className="h-10 w-10 object-contain rounded-full border border-amber-400 p-0.5" />
                </div>
              )}
            </div>

            {/* اختيار لون خلفية الصفحات */}
            <div>
              <label className="block font-bold text-slate-700 mb-1">لون خلفية الصفحة الرئيسي</label>
              <select
                value={branding.bgColor}
                onChange={e => setBranding({ ...branding, bgColor: e.target.value })}
                className="w-full p-2.5 border border-slate-300 rounded-lg bg-white cursor-pointer focus:ring-2 focus:ring-amber-500 focus:outline-none"
              >
                <option value="bg-slate-100">رمادي فاتح هادئ (Slate Light)</option>
                <option value="bg-gray-50">أبيض عاجي (Off White)</option>
                <option value="bg-slate-900">وضع مظلم (Dark Slate)</option>
                <option value="bg-amber-50/40">دافئ خفيف (Warm Cream)</option>
              </select>
            </div>

            {/* لغة التطبيق */}
            <div>
              <label className="block font-bold text-slate-700 mb-1">لغة النظام (Language)</label>
              <select
                value={branding.language}
                onChange={e => setBranding({ ...branding, language: e.target.value })}
                className="w-full p-2.5 border border-slate-300 rounded-lg bg-white cursor-pointer focus:ring-2 focus:ring-amber-500 focus:outline-none"
              >
                <option value="ar">العربية (Arabic)</option>
                <option value="fr">الفرنسية (Français)</option>
                <option value="en">الإنجليزية (English)</option>
              </select>
            </div>

            {/* اللون الرئيسي الهوية */}
            <div>
              <label className="block font-bold text-slate-700 mb-1">اللون الرئيسي للهوية والتمييز</label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={branding.primaryColor}
                  onChange={e => setBranding({ ...branding, primaryColor: e.target.value })}
                  className="w-12 h-10 p-1 border rounded cursor-pointer"
                />
                <span className="text-xs font-mono bg-slate-100 px-3 py-1.5 rounded-md border font-bold text-slate-700">
                  {branding.primaryColor}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-slate-100">
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg shadow-sm transition disabled:opacity-50 cursor-pointer"
            >
              {saving ? 'جاري الحفظ...' : 'حفظ التغييرات ✅'}
            </button>
          </div>
        </form>
      )}

      {/* Tab 2: إدارة المشرفين (Admins) */}
      {activeTab === 'admins' && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6">
          <h3 className="text-md font-bold text-slate-800 border-b pb-3">تحديد وإدارة حسابات المشرفين (Admins)</h3>
          
          {/* نموذج إضافة أدمن */}
          <form onSubmit={handleAddAdmin} className="flex gap-2 max-w-lg">
            <input
              type="email"
              required
              placeholder="أدخل البريد الإلكتروني (مثال: admin@gmail.com)"
              value={newAdminEmail}
              onChange={e => setNewAdminEmail(e.target.value)}
              className="flex-1 p-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-lg transition cursor-pointer"
            >
              + إضافة Admin
            </button>
          </form>

          {/* القائمة */}
          <div className="mt-4">
            <h4 className="text-xs font-bold text-slate-500 mb-3">الحسابات المعتمدة كـ Admin فالموقع:</h4>
            {adminEmails.length === 0 ? (
              <p className="text-sm text-slate-400 font-semibold bg-slate-50 p-4 rounded-lg border text-center">
                لا يوجد مسؤولون محددون حالياً (الجميع يعمل بالحساب الإفتراضي).
              </p>
            ) : (
              <ul className="divide-y border border-slate-200 rounded-lg overflow-hidden">
                {adminEmails.map((email, idx) => (
                  <li key={idx} className="p-3.5 flex justify-between items-center hover:bg-slate-50 text-sm">
                    <span className="font-bold text-slate-800 flex items-center gap-2">
                      👤 {email}
                    </span>
                    <button
                      onClick={() => handleRemoveAdmin(email)}
                      className="px-3 py-1 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-md border border-rose-200 text-xs font-bold transition cursor-pointer"
                    >
                      حذف الصلاحية 🗑️
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      {/* Tab 3: بيانات الأكاديمية والنسب */}
      {activeTab === 'general' && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6">
          <h3 className="text-md font-bold text-slate-800 border-b pb-3">البيانات العامة والنسب المئوية للأستاذة</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <label className="block font-bold text-slate-700 mb-1">السنة الدراسية</label>
              <input
                type="text"
                value={general.academicYear}
                onChange={e => setGeneral({ ...general, academicYear: e.target.value })}
                placeholder="2025/2026"
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">نسبة الأستاذ الافتراضية (%)</label>
              <input
                type="number"
                min="0"
                max="100"
                value={general.teacherPercentage}
                onChange={e => setGeneral({ ...general, teacherPercentage: e.target.value })}
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">رقم هاتف التواصل</label>
              <input
                type="text"
                value={general.phone}
                onChange={e => setGeneral({ ...general, phone: e.target.value })}
                placeholder="06XXXXXXXX"
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">العنوان / المقر</label>
              <input
                type="text"
                value={general.address}
                onChange={e => setGeneral({ ...general, address: e.target.value })}
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block font-bold text-slate-700 mb-1">ملاحظات / شروط عامة تظهر بأسفل الوصولات المالية</label>
              <textarea
                rows="3"
                value={general.notes}
                onChange={e => setGeneral({ ...general, notes: e.target.value })}
                placeholder="أدخل أي ملاحظات تظهر في أسفل الوصولات المالية..."
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-slate-100">
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg shadow-sm transition disabled:opacity-50 cursor-pointer"
            >
              {saving ? 'جاري الحفظ...' : 'حفظ التغييرات ✅'}
            </button>
          </div>
        </form>
      )}

    </div>
  );
}