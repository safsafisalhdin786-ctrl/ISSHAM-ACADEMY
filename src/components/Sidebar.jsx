import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSettings } from '../context/SettingsContext';

export default function Sidebar({ mobileOpen, setMobileOpen }) {
  const { settings } = useSettings ? useSettings() : { settings: {} };

  // جلب إعدادات الهوية واللغة واللون من الـ Context المباشر
  const academyName = settings?.branding?.academyName || 'ISSHAAM ACADEMY';
  const logoUrl = settings?.branding?.logoUrl || '/logo.jpg';
  const primaryColor = settings?.branding?.primaryColor || '#f59e0b';
  const language = settings?.branding?.language || 'ar';
  const isFr = language === 'fr';

  // عناوين القائمة باللغتين (العربية / الفرنسية)
  const menuItems = [
    { title: isFr ? 'Tableau de bord' : 'لوحة التحكم', path: '/dashboard', icon: '📊' },
    { title: isFr ? 'Gestion Élèves' : 'إدارة التلاميذ', path: '/students', icon: '👥' },
    { title: isFr ? 'Présence & Absence' : 'الحضور والغياب', path: '/attendance', icon: '📋' },
    { title: isFr ? 'Gestion Professeurs' : 'إدارة الأساتذة', path: '/teachers', icon: '👨‍🏫' },
    { title: isFr ? 'Finances & Reçus' : 'المالية والأداءات', path: '/payments', icon: '💳' },
    { title: isFr ? 'Rapports Financiers' : 'التقارير المالية', path: '/financials', icon: '📈' },
    { title: isFr ? 'Paramètres Système' : 'إعدادات النظام', path: '/settings', icon: '⚙️' },
  ];

  const handleLinkClick = () => {
    if (setMobileOpen) setMobileOpen(false);
  };

  return (
    <>
      {/* خلفية غامقة عند فتح المنيو فالموبايل */}
      {mobileOpen && (
        <div 
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      <aside 
        style={{ backgroundColor: '#1a3838', color: '#ffffff' }} 
        className={`fixed md:static top-0 right-0 z-50 h-screen w-64 p-4 flex flex-col justify-between shadow-xl shrink-0 transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
        }`}
      >
        <div>
          {/* اللوجو والعنوان الديناميكيين */}
          <div style={{ borderColor: '#2d5555' }} className="flex items-center gap-3 p-3 border-b mb-6">
            <img 
              src={logoUrl} 
              onError={(e) => { e.target.src = '/logo.jpg'; }}
              alt="Logo" 
              className="w-12 h-12 object-contain rounded-full bg-white p-1 shadow-md border-2"
              style={{ borderColor: primaryColor }}
            />
            <div>
              <h1 className="font-bold text-base leading-tight text-white">{academyName}</h1>
              <span className="text-xs text-emerald-300">
                {isFr ? 'Système de Gestion' : 'نظام الإدارة المدرسية'}
              </span>
            </div>
          </div>

          {/* القائمة الرئيسية */}
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={handleLinkClick}
                style={({ isActive }) => ({
                  backgroundColor: isActive ? primaryColor : 'transparent',
                  color: isActive ? '#0f172a' : '#e2e8f0',
                })}
                className="flex items-center gap-3 px-4 py-3 rounded-xl transition duration-200 text-sm font-bold"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.title}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* الهيدر التحتاني */}
        <div style={{ backgroundColor: '#132c2c', borderColor: '#254d4d' }} className="p-3 rounded-xl border text-xs text-center space-y-1">
          <p className="text-slate-200 font-medium">{academyName}</p>
          <p className="text-slate-400">الإصدار 1.0.0</p>
        </div>
      </aside>
    </>
  );
}