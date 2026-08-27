import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Header({ setMobileOpen }) {
  const navigate = useNavigate();
  const { currentUser, userData, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate('/login', { replace: true });
  };

  return (
    <header className="sticky top-0 z-30 bg-[#0B192C] text-white border-b border-[#1E3E62] px-4 sm:px-6 py-3 shadow-lg">
      <div className="flex items-center justify-between gap-4">

        {/* Mobile menu */}
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="فتح القائمة"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-slate-200 hover:bg-[#1E3E62] active:bg-[#1E3E62] transition"
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

        {/* Academy identity */}
        <div className="flex items-center gap-3 mr-auto">
          <div className="hidden sm:block text-right">
            <h1 className="text-lg font-bold text-white leading-tight">
              ISSHAAM ACADEMY
            </h1>
            <p className="text-xs text-slate-300 mt-0.5">
              نظام إدارة الأكاديمية
            </p>
          </div>
        </div>

        {/* Header actions */}
        <div className="flex items-center gap-2">

          {/* Notifications */}
          <button
            type="button"
            aria-label="الإشعارات"
            className="relative flex items-center justify-center w-10 h-10 rounded-xl text-slate-200 hover:bg-[#1E3E62] transition"
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
              <p className="text-sm font-semibold text-slate-800">
                {userData?.name || userData?.fullName || currentUser?.email || 'المستخدم'}
              </p>
              <p className="text-xs text-slate-500">
                {userData?.email || currentUser?.email || ''}
              </p>
            </div>

            <button
              type="button"
              onClick={handleLogout}
              title="تسجيل الخروج"
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