import React from 'react';

export default function Header({ setMobileOpen }) {
  return (
    <header className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
      <button 
        onClick={() => setMobileOpen(true)}
        className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
      >
        ☰
      </button>
      <div className="text-xl font-bold text-slate-800">
        ISSHAAM ACADEMY
      </div>
    </header>
  );
}