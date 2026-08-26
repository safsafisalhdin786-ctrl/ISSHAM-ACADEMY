import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

export default function Settings() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('branding'); // branding | admins | general

  // 1. إعدادات الهوية والألوان
  const [branding, setBranding] = useState({
    academyName: 'أكاديمية إسهام',
    logoUrl: '',
    bgColor: 'bg-slate-100', // لون خلفية الموقع
    primaryColor: '#f59e0b', // اللون الرئيسي للأزرار والهيدر (Default: Amber)
    language: 'ar'
  });

  // 2. قائمة المدراء (Admins)
  const [adminEmails, setAdminEmails] = useState([]);
  const [newAdminEmail, setNewAdminEmail] = useState('');

  // 3. إعدادات عامة ومعلومات التواصل
  const [general, setGeneral] = useState({
    phone: '',
    address: 'حي مولاي رشيد، الدار البيضاء',
    receiptFooterNote: 'شكراً لثقتكم بأكاديمية إسهام.'
  });

  // جلب الإعدادات من Firestore عند فتح الصفحة
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        setLoading(true);
        const docRef = doc(db, 'settings', 'global');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.branding) setBranding(prev => ({ ...prev, ...data.branding }));
          if (data.adminEmails) setAdminEmails(data.adminEmails);
          if (data.general) setGeneral(prev => ({ ...prev, ...data.general }));
        }
      } catch (error) {
        console.error('خطأ في جلب الإعدادات:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  // حفظ الإعدادات العامة والتصميم
  const handleSaveSettings = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await setDoc(doc(db, 'settings', 'global'), {
        branding,
        general,
        adminEmails
      }, { merge: true });

      alert('✅ تم حفظ جميع الإعدادات بنجاح!');
    } catch (error) {
      console.error('خطأ في حفظ الإعدادات:', error);
      alert('❌ حدث خطأ أثناء حفظ الإعدادات');
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
      setAdminEmails([...adminEmails, email]);
      setNewAdminEmail('');
      alert(`✅ تم إضافة ${email} كـ Admin بنجاح`);
    } catch (error) {
      console.error('خطأ في إضافة الأدمن:', error);
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
      setAdminEmails(adminEmails.filter(email => email !== emailToRemove));
    } catch (error) {
      console.error('خطأ في حذف الأدمن:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-100 p-6 flex items-center justify-center font-bold text-slate-600">
        جاري تحميل الإعدادات...
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${branding.bgColor} p-4 md:p-6 space-y-6 dir-rtl text-right max-w-full pb-16 transition-colors duration-300`}>
      
      {/* Header */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            ⚙️ إعدادات النظام (Paramètres)
          </h2>
          <p className="text-sm text-slate-500 mt-1">
            التحكم في اللوغو، الألوان، اللغة، وإدارة صلاحيات المسؤولين (Admins)
          </p>
        </div>
      </div>

      {/* Tabs Menu */}
      <div className="flex border-b border-slate-200 gap-2 bg-white p-2 rounded-xl shadow-sm border">
        <button
          onClick={() => setActiveTab('branding')}
          className={`px-4 py-2 rounded-lg font-bold text-sm transition ${
            activeTab === 'branding' 
              ? 'bg-amber-500 text-white shadow-sm' 
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          🎨 الهوية والألوان واللغة
        </button>
        <button
          onClick={() => setActiveTab('admins')}
          className={`px-4 py-2 rounded-lg font-bold text-sm transition ${
            activeTab === 'admins' 
              ? 'bg-amber-500 text-white shadow-sm' 
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          👥 إدارة المشرفين (Admins)
        </button>
        <button
          onClick={() => setActiveTab('general')}
          className={`px-4 py-2 rounded-lg font-bold text-sm transition ${
            activeTab === 'general' 
              ? 'bg-amber-500 text-white shadow-sm' 
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          📋 معلومات الأكاديمية
        </button>
      </div>

      {/* Tab 1: الهوية والألوان واللغة */}
      {activeTab === 'branding' && (
        <form onSubmit={handleSaveSettings} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6">
          <h3 className="text-md font-bold text-slate-800 border-b pb-2">تخصيص الواجهة واللوغو</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            {/* اسم الأكاديمية */}
            <div>
              <label className="block font-bold text-slate-700 mb-1">اسم الأكاديمية / المؤسسة</label>
              <input
                type="text"
                value={branding.academyName}
                onChange={e => setBranding({ ...branding, academyName: e.target.value })}
                className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            {/* رابط اللوغو */}
            <div>
              <label className="block font-bold text-slate-700 mb-1">رابط اللوغو (Logo URL)</label>
              <input
                type="url"
                placeholder="https://example.com/logo.png"
                value={branding.logoUrl}
                onChange={e => setBranding({ ...branding, logoUrl: e.target.value })}
                className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
              {branding.logoUrl && (
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xs text-slate-500">معاينة:</span>
                  <img src={branding.logoUrl} alt="Logo Preview" className="h-10 w-10 object-contain rounded border" />
                </div>
              )}
            </div>

            {/* اختيار لون خلفية الصفحات */}
            <div>
              <label className="block font-bold text-slate-700 mb-1">لون خلفية الصفحات الرئيسي</label>
              <select
                value={branding.bgColor}
                onChange={e => setBranding({ ...branding, bgColor: e.target.value })}
                className="w-full p-2.5 border rounded-lg bg-white cursor-pointer"
              >
                <option value="bg-slate-100">رمادي فاتح هادئ (Slate Light)</option>
                <option value="bg-gray-50">أبيض عاجي ناعم (Off White)</option>
                <option value="bg-slate-900">وضع مظلم داكن (Dark Slate)</option>
                <option value="bg-amber-50/50">دافئ خفيف (Warm Cream)</option>
              </select>
            </div>

            {/* لغة التطبيق */}
            <div>
              <label className="block font-bold text-slate-700 mb-1">لغة التطبيق الأساسية (Language)</label>
              <select
                value={branding.language}
                onChange={e => setBranding({ ...branding, language: e.target.value })}
                className="w-full p-2.5 border rounded-lg bg-white cursor-pointer"
              >
                <option value="ar">العربية (Arabic)</option>
                <option value="fr">الفرنسية (Français)</option>
                <option value="en">الإنجليزية (English)</option>
              </select>
            </div>

            {/* اللون الرئيسي للأزرار والهيدر */}
            <div>
              <label className="block font-bold text-slate-700 mb-1">اللون الرئيسي للهوية والتمييز</label>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={branding.primaryColor}
                  onChange={e => setBranding({ ...branding, primaryColor: e.target.value })}
                  className="w-12 h-10 p-1 border rounded cursor-pointer"
                />
                <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded border">
                  {branding.primaryColor}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t">
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg shadow-sm transition disabled:opacity-50"
            >
              {saving ? 'جاري الحفظ...' : 'حفظ التغييرات ✅'}
            </button>
          </div>
        </form>
      )}

      {/* Tab 2: إدارة المشرفين (Admins) */}
      {activeTab === 'admins' && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6">
          <h3 className="text-md font-bold text-slate-800 border-b pb-2">إضافة وإدارة المشرفين (Admins)</h3>
          
          {/* إضافة أدمن جديد */}
          <form onSubmit={handleAddAdmin} className="flex gap-2 max-w-md">
            <input
              type="email"
              required
              placeholder="أدخل بريد الأدمن (مثال: admin@gmail.com)"
              value={newAdminEmail}
              onChange={e => setNewAdminEmail(e.target.value)}
              className="flex-1 p-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-lg transition"
            >
              + إضافة Admin
            </button>
          </form>

          {/* قائمة المشرفين الحاليين */}
          <div className="mt-4">
            <h4 className="text-xs font-bold text-slate-500 mb-3">قائمة المسؤولين الذين لديهم صلاحيات كاملة:</h4>
            {adminEmails.length === 0 ? (
              <p className="text-sm text-slate-400 font-semibold">لا يوجد مسؤولون محددون بشكل خاص حالياً.</p>
            ) : (
              <ul className="divide-y border rounded-lg overflow-hidden">
                {adminEmails.map((email, idx) => (
                  <li key={idx} className="p-3.5 flex justify-between items-center hover:bg-slate-50 text-sm">
                    <span className="font-semibold text-slate-800 flex items-center gap-2">
                      👤 {email}
                    </span>
                    <button
                      onClick={() => handleRemoveAdmin(email)}
                      className="px-2.5 py-1 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded border border-rose-200 text-xs font-bold transition"
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

      {/* Tab 3: معلومات الأكاديمية والفواتير */}
      {activeTab === 'general' && (
        <form onSubmit={handleSaveSettings} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6">
          <h3 className="text-md font-bold text-slate-800 border-b pb-2">بيانات التواصل المطبوعة فالمستندات والفواتير</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <label className="block font-bold text-slate-700 mb-1">رقم الهاتف للاتصال</label>
              <input
                type="text"
                value={general.phone}
                onChange={e => setGeneral({ ...general, phone: e.target.value })}
                placeholder="06XXXXXXXX"
                className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">العنوان / المقر</label>
              <input
                type="text"
                value={general.address}
                onChange={e => setGeneral({ ...general, address: e.target.value })}
                className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block font-bold text-slate-700 mb-1">ملاحظة أسفل وصل الأداء (Reçu)</label>
              <textarea
                rows="2"
                value={general.receiptFooterNote}
                onChange={e => setGeneral({ ...general, receiptFooterNote: e.target.value })}
                className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t">
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg shadow-sm transition disabled:opacity-50"
            >
              {saving ? 'جاري الحفظ...' : 'حفظ التغييرات ✅'}
            </button>
          </div>
        </form>
      )}

    </div>
  );
}