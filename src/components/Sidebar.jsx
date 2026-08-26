import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const menuItems = [
    { title: 'لوحة التحكم', path: '/dashboard', icon: '📊' },
    { title: 'إدارة التلاميذ', path: '/students', icon: '👥' },
    { title: 'الحضور والغياب', path: '/attendance', icon: '📋' },
    { title: 'إدارة الأساتذة', path: '/teachers', icon: '👨‍🏫' },
    { title: 'المالية والأداءات', path: '/payments', icon: '💳' },
  ];

  return (
    <aside 
      style={{ backgroundColor: '#1a3838', color: '#ffffff' }} 
      className="w-64 min-h-screen p-4 flex flex-col justify-between shadow-xl dir-rtl shrink-0"
    >
      <div>
        {/* اللوجو والعنوان */}
        <div style={{ borderColor: '#2d5555' }} className="flex items-center gap-3 p-3 border-b mb-6">
          <img 
            src="/logo.jpg" 
            alt="ISSHAAM ACADEMY Logo" 
            className="w-12 h-12 object-contain rounded-full bg-white p-1 shadow-md border-2 border-amber-400"
          />
          <div>
            <h1 className="font-bold text-lg leading-tight text-white">أكاديمية إسهام</h1>
            <span className="text-xs text-emerald-300">نظام الإدارة المدرسية</span>
          </div>
        </div>

        {/* القائمة الرئيسية */}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              style={({ isActive }) => ({
                backgroundColor: isActive ? '#f59e0b' : 'transparent',
                color: isActive ? '#0f172a' : '#e2e8f0',
              })}
              className="flex items-center gap-3 px-4 py-3 rounded-xl transition duration-200 text-sm font-semibold"
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.title}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* الهادر التحتاني */}
      <div style={{ backgroundColor: '#132c2c', borderColor: '#254d4d' }} className="p-3 rounded-xl border text-xs text-center space-y-1">
        <p className="text-slate-200 font-medium">ISSHAAM ACADEMY</p>
        <p className="text-slate-400">الإصدار 1.0.0</p>
      </div>
    </aside>
  );
}