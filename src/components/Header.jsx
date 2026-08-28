import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useSettings } from '../context/SettingsContext';
import { maskEmail } from '../utils/security';

export default function Header({ setMobileOpen }) {
  const navigate = useNavigate();
  const { currentUser, userData, logout } = useAuth();
  const { settings } = useSettings();
  const location = useLocation();
  const isFrench = settings?.branding?.language === 'fr';

  const pageTitles = {
    '/dashboard': isFrench ? 'Tableau de bord' : 'لوحة التحكم',
    '/students': isFrench ? 'Gestion des élèves' : 'إدارة التلاميذ',
    '/attendance': isFrench ? 'Présence et absence' : 'الحضور والغياب',
    '/teachers': isFrench ? 'Gestion des professeurs' : 'إدارة الأساتذة',
    '/payments': isFrench ? 'Paiements et reçus' : 'المالية والأداءات',
    '/financials': isFrench ? 'Rapports financiers' : 'التقارير المالية',
    '/settings': isFrench ? 'Paramètres' : 'إعدادات النظام',
    '/archive': isFrench ? 'Archives et historique' : 'الأرشيف والسجلات',
  };
  const pageTitle = pageTitles[location.pathname] || (isFrench ? 'Académie' : 'الأكاديمية');

  const handleLogout = async () => {
    await logout();
    navigate('/login', { replace: true });
  };

  return (
    <header dir={isFrench ? 'ltr' : 'rtl'} className="app-header sticky top-0 z-30 bg-white text-[#0B192C] border-b border-slate-200 px-4 sm:px-6 py-3 shadow-sm">
      <div className="flex items-center justify-between gap-4">

        {/* Mobile menu */}
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label={isFrench ? 'Ouvrir le menu' : 'فتح القائمة'}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-[#0B192C] hover:bg-slate-100 active:bg-slate-200 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Current page and academy identity */}
        <div className="flex min-w-0 items-center gap-3 mr-auto">
          <div className={`block min-w-0 ${isFrench ? 'text-left' : 'text-right'}`}>
            <h1 className="truncate text-lg font-black leading-tight text-[#0B192C] sm:text-2xl">
              {pageTitle}
            </h1>
            <p className="text-xs text-slate-600 mt-0.5">
              {isFrench ? 'Accueil / Système de gestion de l’académie' : 'الرئيسية / إدارة الأكاديمية بكفاءة ووضوح'}
            </p>
          </div>
        </div>

        {/* Header actions */}
        <div className="flex items-center gap-2">

          {/* Notifications */}
          <button
            type="button"
            aria-label={isFrench ? 'Notifications' : 'الإشعارات'}
            className="relative flex items-center justify-center w-10 h-10 rounded-xl text-[#0B192C] hover:bg-slate-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.5-1.5V11a6.5 6.5 0 10-13 0v4.5L4 17h5m6 0a3 3 0 01-6 0"
              />
            </svg>

            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </button>

          {/* User */}
          <div className="hidden sm:flex items-center gap-3 pr-2">
            <div className="text-right">
              <p className="text-sm font-semibold text-[#0B192C]">
                {userData?.name || userData?.fullName || currentUser?.email || (isFrench ? 'Utilisateur' : 'المستخدم')}
              </p>
              <p className="text-xs text-slate-500">
                {maskEmail(userData?.email || currentUser?.email)}
              </p>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              title={isFrench ? 'Se déconnecter' : 'تسجيل الخروج'}
              className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-[#0B192C] font-bold hover:bg-amber-300 transition"
            >
              {(userData?.name || currentUser?.email || 'U').charAt(0).toUpperCase()}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}