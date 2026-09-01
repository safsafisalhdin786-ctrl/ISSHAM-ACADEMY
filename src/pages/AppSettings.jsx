import React, { useState, useEffect } from 'react';
import { useSettings } from '../context/SettingsContext';
import { maskEmail } from '../utils/security';
import ConfirmDialog from '../components/ConfirmDialog';
import logger from '../utils/logger';

const defaultLogoUrl = `${import.meta.env.BASE_URL}logo.jpeg`;

export default function AppSettings() {
  const {
    settings,
    updateSettings,
    loading: contextLoading,
  } = useSettings();

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState('branding');

  // ==========================================
  // 1. BRANDING / الهوية
  // ==========================================

  const [branding, setBranding] = useState({
    academyName: 'ISSHAAM ACADEMY',
    logoUrl: defaultLogoUrl,
    bgColor: 'bg-slate-100',
    primaryColor: '#f59e0b',
    language: 'ar',
  });

  // ==========================================
  // 2. GENERAL / الإعدادات العامة
  // ==========================================

  const [general, setGeneral] = useState({
    phone: '',
    address: 'Moulay Rachid, Casablanca',
    academicYear: '2025/2026',
    teacherPercentage: 50,
    notes: 'شكراً لثقتكم بأكاديمية إسهام.',
  });

  // ==========================================
  // 3. ADMINS / المشرفين
  // ==========================================

  const [adminEmails, setAdminEmails] = useState([]);
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [pendingAdminRemoval, setPendingAdminRemoval] = useState(null);

  // ==========================================
  // Synchronize Context → Form
  // ==========================================

  useEffect(() => {
    if (!settings) return;

    setBranding((prev) => ({
      ...prev,
      ...(settings.branding || {}),
    }));

    setGeneral((prev) => ({
      ...prev,
      ...(settings.general || {}),
    }));

    setAdminEmails(
      Array.isArray(settings.adminEmails)
        ? settings.adminEmails
        : []
    );
  }, [settings]);

  // ==========================================
  // SAVE BRANDING / GENERAL SETTINGS
  // ==========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);
      setMessage('');

      await updateSettings({
        branding,
        general,
        adminEmails,
      });

      setMessage(
        'تم حفظ التغييرات وتطبيقها فوراً في الموقع كامل! ✅'
      );
    } catch (error) {
      logger.error('AppSettings', error);

      setMessage(
        'حدث خطأ أثناء حفظ الإعدادات ❌'
      );
    } finally {
      setSaving(false);
    }
  };

  // ==========================================
  // ADD ADMIN EMAIL
  // ==========================================

  const handleAddAdmin = async (e) => {
    e.preventDefault();

    const email = newAdminEmail
      .trim()
      .toLowerCase();

    if (!email) return;

    if (adminEmails.includes(email)) {
      setMessage(
        'هذا البريد الإلكتروني موجود بالفعل ❌'
      );
      return;
    }

    try {
      setSaving(true);
      setMessage('');

      const updatedAdmins = [
        ...adminEmails,
        email,
      ];

      await updateSettings({
        adminEmails: updatedAdmins,
      });

      setAdminEmails(updatedAdmins);
      setNewAdminEmail('');

      setMessage(
        `تمت إضافة ${email} إلى قائمة المشرفين ✅`
      );
    } catch (error) {
      logger.error('AppSettings', error);

      setMessage(
        'حدث خطأ أثناء إضافة المشرف ❌'
      );
    } finally {
      setSaving(false);
    }
  };

  // ==========================================
  // REMOVE ADMIN EMAIL
  // ==========================================

  const handleRemoveAdmin = async (emailToRemove) => {
    try {
      setSaving(true);
      setMessage('');

      const updatedAdmins =
        adminEmails.filter(
          (email) =>
            email !== emailToRemove
        );

      await updateSettings({
        adminEmails: updatedAdmins,
      });

      setAdminEmails(updatedAdmins);

      setMessage(
        `تمت إزالة ${emailToRemove} من قائمة المشرفين ✅`
      );
    } catch (error) {
      logger.error('AppSettings', error);

      setMessage(
        'حدث خطأ أثناء حذف المشرف ❌'
      );
    } finally {
      setSaving(false);
    }
  };

  // ==========================================
  // LOADING
  // ==========================================

  if (contextLoading) {
    return (
      <div className="p-8 text-center text-slate-600 font-bold dir-rtl">
        جاري تحميل الإعدادات...
      </div>
    );
  }

  // ==========================================
  // MESSAGE TYPE
  // ==========================================

  const isSuccess =
    message.includes('✅');

  // ==========================================
  // UI
  // ==========================================

  return (
    <div className="max-w-5xl mx-auto space-y-6 dir-rtl text-right pb-12">

      {/* ======================================
          HEADER
      ====================================== */}

      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">

        <div>
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            ⚙️ إعدادات الأكاديمية
          </h2>

          <p className="text-slate-500 text-sm mt-1">
            التحكم في الهوية، الألوان، اللغة،
            المشرفين، وبيانات المؤسسة.
          </p>
        </div>

      </div>

      {/* ======================================
          MESSAGE
      ====================================== */}

      {message && (
        <div
          className={`p-4 rounded-xl font-medium text-sm shadow-sm ${
            isSuccess
              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
              : 'bg-rose-50 text-rose-700 border border-rose-200'
          }`}
        >
          {message}
        </div>
      )}

      {/* ======================================
          TABS
      ====================================== */}

      <div className="flex flex-wrap border border-slate-200 gap-2 bg-white p-2 rounded-xl shadow-sm">

        <button
          type="button"
          onClick={() =>
            setActiveTab('branding')
          }
          className={`px-4 py-2.5 rounded-lg font-bold text-sm transition ${
            activeTab === 'branding'
              ? 'bg-amber-500 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          🎨 الهوية والألوان واللغة
        </button>

        <button
          type="button"
          onClick={() =>
            setActiveTab('admins')
          }
          className={`px-4 py-2.5 rounded-lg font-bold text-sm transition ${
            activeTab === 'admins'
              ? 'bg-amber-500 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          👥 إدارة المشرفين
        </button>

        <button
          type="button"
          onClick={() =>
            setActiveTab('general')
          }
          className={`px-4 py-2.5 rounded-lg font-bold text-sm transition ${
            activeTab === 'general'
              ? 'bg-amber-500 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          📋 بيانات المؤسسة
        </button>

      </div>

      {/* ======================================
          TAB 1 - BRANDING
      ====================================== */}

      {activeTab === 'branding' && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6"
        >

          <h3 className="text-md font-bold text-slate-800 border-b pb-3">
            تخصيص اللوغو، الألوان، واللغة
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">

            {/* Academy Name */}

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                اسم المؤسسة / الأكاديمية *
              </label>

              <input
                type="text"
                value={branding.academyName}
                onChange={(e) =>
                  setBranding({
                    ...branding,
                    academyName:
                      e.target.value,
                  })
                }
                required
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            {/* Logo */}

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                رابط اللوغو
              </label>

              <input
                type="text"
                placeholder={`${defaultLogoUrl} أو رابط مباشر`}
                value={branding.logoUrl}
                onChange={(e) =>
                  setBranding({
                    ...branding,
                    logoUrl:
                      e.target.value,
                  })
                }
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />

              {branding.logoUrl && (
                <div className="mt-3 flex items-center gap-3">

                  <span className="text-xs text-slate-500 font-bold">
                    معاينة اللوغو:
                  </span>

                  <img
                    src={branding.logoUrl}
                    onError={(e) => {
                      e.currentTarget.src =
                        defaultLogoUrl;
                    }}
                    alt="Logo"
                    className="h-12 w-12 object-contain rounded-full border-2 border-amber-400 p-1"
                  />

                </div>
              )}
            </div>

            {/* Background */}

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                لون خلفية الصفحة
              </label>

              <select
                value={branding.bgColor}
                onChange={(e) =>
                  setBranding({
                    ...branding,
                    bgColor:
                      e.target.value,
                  })
                }
                className="w-full p-2.5 border border-slate-300 rounded-lg bg-white cursor-pointer focus:ring-2 focus:ring-amber-500 focus:outline-none"
              >
                <option value="bg-slate-100">
                  رمادي فاتح هادئ
                </option>

                <option value="bg-gray-50">
                  أبيض عاجي
                </option>

                <option value="bg-slate-900">
                  وضع مظلم
                </option>

                <option value="bg-amber-50/40">
                  دافئ خفيف
                </option>
              </select>
            </div>

            {/* Language */}

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                لغة النظام
              </label>

              <select
                value={branding.language}
                onChange={(e) =>
                  setBranding({
                    ...branding,
                    language:
                      e.target.value,
                  })
                }
                className="w-full p-2.5 border border-slate-300 rounded-lg bg-white cursor-pointer focus:ring-2 focus:ring-amber-500 focus:outline-none"
              >
                <option value="ar">
                  العربية
                </option>

                <option value="fr">
                  Français
                </option>

                <option value="en">
                  English
                </option>
              </select>
            </div>

            {/* Primary Color */}

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                اللون الرئيسي للهوية
              </label>

              <div className="flex items-center gap-3">

                <input
                  type="color"
                  value={
                    branding.primaryColor
                  }
                  onChange={(e) =>
                    setBranding({
                      ...branding,
                      primaryColor:
                        e.target.value,
                    })
                  }
                  className="w-12 h-10 p-1 border rounded cursor-pointer"
                />

                <span className="text-xs font-mono bg-slate-100 px-3 py-1.5 rounded-md border font-bold text-slate-700">
                  {branding.primaryColor}
                </span>

              </div>
            </div>

          </div>

          {/* Save */}

          <div className="flex justify-end pt-4 border-t border-slate-100">

            <button
              type="submit"
              disabled={saving}
              className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg shadow-sm transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving
                ? 'جاري الحفظ...'
                : 'حفظ التغييرات ✅'}
            </button>

          </div>

        </form>
      )}

      {/* ======================================
          TAB 2 - ADMINS
      ====================================== */}

      {activeTab === 'admins' && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6">

          <div>
            <h3 className="text-md font-bold text-slate-800 border-b pb-3">
              إدارة المشرفين
            </h3>

            <p className="text-xs text-slate-500 mt-2">
              هذه القائمة مخصصة لتسجيل الحسابات
              المعتمدة كمشرفين داخل إعدادات الأكاديمية.
            </p>
          </div>

          {/* Add */}

          <form
            onSubmit={handleAddAdmin}
            className="flex flex-col sm:flex-row gap-2 max-w-xl"
          >

            <input
              type="email"
              required
              placeholder="admin@gmail.com"
              value={newAdminEmail}
              onChange={(e) =>
                setNewAdminEmail(
                  e.target.value
                )
              }
              className="flex-1 p-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />

            <button
              type="submit"
              disabled={saving}
              className="px-5 py-2.5 bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving
                ? 'جاري الحفظ...'
                : '+ إضافة Admin'}
            </button>

          </form>

          {/* Admin List */}

          <div className="mt-4">

            <h4 className="text-xs font-bold text-slate-500 mb-3">
              الحسابات المسجلة:
            </h4>

            {adminEmails.length === 0 ? (
              <p className="text-sm text-slate-400 font-semibold bg-slate-50 p-4 rounded-lg border text-center">
                لا يوجد مسؤولون محددون حالياً.
              </p>
            ) : (
              <ul className="divide-y border border-slate-200 rounded-lg overflow-hidden">

                {adminEmails.map(
                  (email) => (
                    <li
                      key={email}
                      className="p-3.5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 hover:bg-slate-50 text-sm"
                    >

                      <span className="font-bold text-slate-800 flex items-center gap-2">
                        👤 {maskEmail(email)}
                      </span>

                      <button
                        type="button"
                        onClick={() => setPendingAdminRemoval(email)}
                        disabled={saving}
                        className="px-3 py-1.5 bg-rose-50 text-rose-600 hover:bg-rose-100 rounded-md border border-rose-200 text-xs font-bold transition disabled:opacity-50"
                      >
                        حذف الصلاحية 🗑️
                      </button>

                    </li>
                  )
                )}

              </ul>
            )}

          </div>

        </div>
      )}

      {/* ======================================
          TAB 3 - GENERAL
      ====================================== */}

      {activeTab === 'general' && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 space-y-6"
        >

          <h3 className="text-md font-bold text-slate-800 border-b pb-3">
            البيانات العامة والنسب
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">

            {/* Academic Year */}

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                السنة الدراسية
              </label>

              <input
                type="text"
                value={
                  general.academicYear
                }
                onChange={(e) =>
                  setGeneral({
                    ...general,
                    academicYear:
                      e.target.value,
                  })
                }
                placeholder="2025/2026"
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            {/* Teacher Percentage */}

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                نسبة الأستاذ الافتراضية (%)
              </label>

              <input
                type="number"
                min="0"
                max="100"
                value={
                  general.teacherPercentage
                }
                onChange={(e) =>
                  setGeneral({
                    ...general,
                    teacherPercentage:
                      Number(
                        e.target.value
                      ),
                  })
                }
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            {/* Phone */}

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                رقم هاتف التواصل
              </label>

              <input
                type="tel"
                value={general.phone}
                onChange={(e) =>
                  setGeneral({
                    ...general,
                    phone: e.target.value,
                  })
                }
                placeholder="06XXXXXXXX"
                dir="ltr"
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            {/* Address */}

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                العنوان / المقر
              </label>

              <input
                type="text"
                value={
                  general.address
                }
                onChange={(e) =>
                  setGeneral({
                    ...general,
                    address:
                      e.target.value,
                  })
                }
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            {/* Notes */}

            <div className="md:col-span-2">

              <label className="block font-bold text-slate-700 mb-1">
                ملاحظات / شروط عامة
              </label>

              <textarea
                rows="4"
                value={general.notes}
                onChange={(e) =>
                  setGeneral({
                    ...general,
                    notes: e.target.value,
                  })
                }
                placeholder="أدخل الملاحظات التي تظهر في الوصولات..."
                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none resize-y"
              />

            </div>

          </div>

          {/* Save */}

          <div className="flex justify-end pt-4 border-t border-slate-100">

            <button
              type="submit"
              disabled={saving}
              className="px-6 py-2.5 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg shadow-sm transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving
                ? 'جاري الحفظ...'
                : 'حفظ التغييرات ✅'}
            </button>

          </div>

        </form>
      )}

      <ConfirmDialog
        open={Boolean(pendingAdminRemoval)}
        title="تأكيد إزالة صلاحية المشرف"
        message={`هل أنت متأكد من إزالة ${maskEmail(pendingAdminRemoval || '')} من قائمة المشرفين؟`}
        confirmLabel="إزالة الصلاحية"
        busy={saving}
        onCancel={() => setPendingAdminRemoval(null)}
        onConfirm={async () => {
          const email = pendingAdminRemoval;
          setPendingAdminRemoval(null);
          await handleRemoveAdmin(email);
        }}
      />

    </div>
  );
}