import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

import Sidebar from './components/Sidebar';
import Header from './components/Header';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import Attendance from './pages/Attendance';
import Teachers from './pages/Teachers';
import Payments from './pages/Payments';
import Financials from './pages/Financials';
import AppSettings from './pages/AppSettings';

// مكوّن لحماية المسارات والتأكد من تسجيل الدخول
function ProtectedLayout({ children }) {
  const { currentUser, loading } = useAuth ? useAuth() : { currentUser: null, loading: false };
  const [mobileOpen, setMobileOpen] = useState(false);

  // التحقق من حالة الدخول محلياً كـ Fallback
  const isLocalAuth = localStorage.getItem('isshaam_auth') === 'true';

  // شاشة تحميل أثناء تحقق Firebase من حالة الحساب
  if (loading) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-slate-900 text-white dir-rtl">
        <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-sm font-semibold text-slate-300">جاري التحقق من بيانات الدخول...</p>
      </div>
    );
  }

  // السماح بالدخول إذا كان هناك حساب Firebase أو توثيق محلي في localStorage
  if (!currentUser && !isLocalAuth) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden text-right" dir="rtl">
      {/* Sidebar ثابت جهة اليمين */}
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      
      {/* المساحة الرئيسية المتجاوبة */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header setMobileOpen={setMobileOpen} />
        <main className="flex-1 overflow-y-auto overflow-x-auto p-4 md:p-6 bg-slate-50">
          {children}
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* مسار تسجيل الدخول */}
          <Route path="/login" element={<Login />} />

          {/* المسارات المحمية */}
          <Route
            path="/*"
            element={
              <ProtectedLayout>
                <Routes>
                  <Route path="/" element={<Navigate to="/dashboard" replace />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/students" element={<Students />} />
                  <Route path="/attendance" element={<Attendance />} />
                  <Route path="/teachers" element={<Teachers />} />
                  <Route path="/payments" element={<Payments />} />
                  <Route path="/financials" element={<Financials />} />
                  <Route path="/settings" element={<AppSettings />} />
                  <Route path="*" element={<Navigate to="/dashboard" replace />} />
                </Routes>
              </ProtectedLayout>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}