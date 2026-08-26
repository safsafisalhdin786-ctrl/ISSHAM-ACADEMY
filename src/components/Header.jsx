import React from 'react';

export default function Header({ setMobileOpen }) {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-slate-200 px-4 sm:px-6 py-3">
      <div className="flex items-center justify-between gap-4">

        {/* Mobile menu */}
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="فتح القائمة"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-slate-600 hover:bg-slate-100 active:bg-slate-200 transition"
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
            <h1 className="text-lg font-bold text-slate-800 leading-tight">
              ISSHAAM ACADEMY
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">
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
            className="relative flex items-center justify-center w-10 h-10 rounded-xl text-slate-600 hover:bg-slate-100 transition"
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
                الإدارة
              </p>
              <p className="text-xs text-slate-500">
                Administrateur
              </p>
            </div>

            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 font-bold">
              A
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}