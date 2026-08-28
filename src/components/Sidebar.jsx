import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSettings } from '../context/SettingsContext';
import { useAuth } from '../context/AuthContext';
import { LogOut } from 'lucide-react';

const defaultLogoUrl = `${import.meta.env.BASE_URL}logo.jpeg`;

export default function Sidebar({ mobileOpen, setMobileOpen }) {
  const { settings } = useSettings();
  const { currentUser, userData, userRole, logout } = useAuth();
  const navigate = useNavigate();

  const academyName =
    settings?.branding?.academyName || 'ISSHAAM ACADEMY';

  const logoUrl =
    settings?.branding?.logoUrl || defaultLogoUrl;

  const primaryColor =
    settings?.branding?.primaryColor || 'var(--secondary)';

  const language =
    settings?.branding?.language || 'ar';

  const isFr = language === 'fr';

  const menuItems = [
    {
      title: isFr ? 'Tableau de bord' : 'لوحة التحكم',
      path: '/dashboard',
      icon: '▦',
    },
    {
      title: isFr ? 'Gestion Élèves' : 'إدارة التلاميذ',
      path: '/students',
      icon: '♙',
    },
    {
      title: isFr ? 'Présence & Absence' : 'الحضور والغياب',
      path: '/attendance',
      icon: '✓',
    },
    {
      title: isFr ? 'Gestion Professeurs' : 'إدارة الأساتذة',
      path: '/teachers',
      icon: '♟',
    },
    {
      title: isFr ? 'Finances & Reçus' : 'المالية والأداءات',
      path: '/payments',
      icon: '◆',
    },
    {
      title: isFr ? 'Rapports Financiers' : 'التقارير المالية',
      path: '/financials',
      icon: '◫',
    },
    {
      title: isFr ? 'Paramètres Système' : 'إعدادات النظام',
      path: '/settings',
      icon: '⚙',
    },
    {
      title: isFr ? 'Archives & Historique' : 'الأرشيف والسجلات',
      path: '/archive',
      icon: '▤',
    },
  ];

  const handleLinkClick = () => {
    setMobileOpen?.(false);
  };

  const handleLogout = async () => {
    await logout();
    navigate('/login', { replace: true });
  };

  const handleLogoError = (event) => {
    if (event.currentTarget.dataset.fallback === 'true') {
      return;
    }

    event.currentTarget.dataset.fallback = 'true';
    event.currentTarget.src = defaultLogoUrl;
  };

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <button
          type="button"
          aria-label={isFr ? 'Fermer le menu' : 'إغلاق القائمة'}
          onClick={() => setMobileOpen?.(false)}
          className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm md:hidden cursor-default"
        />
      )}

      <aside
        dir={isFr ? 'ltr' : 'rtl'}
        style={{
          backgroundColor: '#1e3a5f',
          color: '#ffffff',
        }}
        className={`
          fixed md:static
          top-0 right-0
          z-50
          h-screen
          w-64
          p-4
          flex flex-col
          justify-between
          shadow-xl
          shrink-0
          transition-transform duration-300 ease-in-out
          ${
            mobileOpen
              ? 'translate-x-0'
              : 'translate-x-full md:translate-x-0'
          }
        `}
      >
        <div className="min-h-0 flex flex-col">

          {/* Academy branding */}
          <div
            style={{             borderColor: 'var(--primary)' }}
            className="relative flex items-center gap-3 p-3 border-b mb-5"
          >
            <img
              src={logoUrl}
              onError={handleLogoError}
              alt={academyName}
              className="w-12 h-12 object-contain rounded-full bg-white p-1 shadow-md border-2 shrink-0"
              style={{ borderColor: primaryColor }}
            />

            <div className="min-w-0">
              <h1 className="font-bold text-sm leading-tight text-white truncate">
                {academyName}
              </h1>

              <span className="block text-xs text-amber-300 mt-1">
                {isFr
                  ? 'Système de Gestion'
                  : 'نظام إدارة الأكاديمية'}
              </span>
            </div>

            {/* Mobile close */}
            <button
              type="button"
              onClick={() => setMobileOpen?.(false)}
              aria-label={isFr ? 'Fermer' : 'إغلاق'}
              className="md:hidden absolute top-2 left-2 w-8 h-8 rounded-lg text-slate-300 hover:bg-white/10 hover:text-white transition"
            >
              ×
            </button>
          </div>

          {/* Navigation */}
          <nav
            aria-label={isFr ? 'Navigation principale' : 'القائمة الرئيسية'}
            className="space-y-1.5 overflow-y-auto pr-1"
          >
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={handleLinkClick}
                className="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-bold"
                style={({ isActive }) => ({
                  backgroundColor: isActive
                    ? '#e67e22'
                    : 'transparent',
                  color: isActive
                    ? '#ffffff'
                    : '#e2e8f0',
                  boxShadow: isActive
                    ? '0 4px 12px rgba(0,0,0,0.15)'
                    : 'none',
                })}
              >
                <span
                  className="w-7 h-7 flex items-center justify-center rounded-lg text-base shrink-0 transition-transform group-hover:scale-110"
                >
                  {item.icon}
                </span>

                <span className="truncate">
                  {item.title}
                </span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div
          style={{
            backgroundColor: '#1e3a5f',
            borderColor: 'var(--primary)',
          }}
          className="mt-4 p-3 rounded-xl border text-xs text-center space-y-1 shrink-0"
        >
          <div className="mb-3 flex items-center gap-2 text-right">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-400 font-black text-[#0B192C]">
              {(userData?.name || currentUser?.email || 'U').charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs font-bold text-white">
                {userData?.name || userData?.fullName || currentUser?.email || (isFr ? 'Utilisateur' : 'المستخدم')}
              </p>
              <p className="text-[11px] text-blue-200">
                {userRole === 'admin' ? (isFr ? 'Administrateur' : 'مدير النظام') : userRole || ''}
              </p>
            </div>
          </div>
          <p className="text-slate-200 font-medium truncate">
            {academyName}
          </p>

          <p className="text-slate-500">
            {isFr ? 'Version 1.0.0' : 'الإصدار 1.0.0'}
          </p>
          <button
            type="button"
            onClick={handleLogout}
            className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg border border-amber-400/40 px-3 py-2 font-bold text-amber-200 transition hover:bg-amber-400 hover:text-[#0B192C]"
          >
            <LogOut size={14} />
            {isFr ? 'Déconnexion' : 'تسجيل الخروج'}
          </button>
        </div>
      </aside>
    </>
  );
}