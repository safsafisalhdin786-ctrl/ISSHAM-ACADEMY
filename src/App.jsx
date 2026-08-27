import { useState } from 'react';
import {
  HashRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { SettingsProvider, useSettings } from './context/SettingsContext';

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
import Archive from './pages/Archive';

// Protect the application routes and provide the shared application shell.
function ProtectedLayout() {
  const { currentUser, userRole, loading } = useAuth();
  const { settings } = useSettings();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  // جلب لون الخلفية واللغة من الإعدادات
  const bgColor = settings?.branding?.bgColor || 'bg-slate-50';
  const language = settings?.branding?.language || 'ar';
  const isRtl = language !== 'fr';

  // التحقق من حالة الدخول محلياً كـ Fallback
  // شاشة تحميل أثناء تحقق Firebase من حالة الحساب
  if (loading) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-slate-900 text-white dir-rtl">
        <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-sm font-semibold text-slate-300">جاري التحقق من بيانات الدخول...</p>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  if (!userRole) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 p-6 text-center" dir="rtl">
        <div className="max-w-md rounded-2xl bg-white p-8 shadow-xl">
          <h1 className="text-xl font-bold text-slate-900">لا توجد صلاحية لهذا الحساب</h1>
          <p className="mt-3 text-sm text-slate-600">يرجى التواصل مع إدارة الأكاديمية لمنح الحساب صلاحية مناسبة.</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`flex min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 ${isRtl ? 'text-right dir-rtl' : 'text-left dir-ltr'}`} 
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      
      <div className="flex-1 flex flex-col min-w-0 min-h-screen overflow-hidden">
        <Header setMobileOpen={setMobileOpen} />
        <main className={`flex-1 overflow-y-auto overflow-x-auto p-3 sm:p-4 md:p-6 ${bgColor}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <SettingsProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route element={<ProtectedLayout />}>
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="students" element={<Students />} />
              <Route path="attendance" element={<Attendance />} />
              <Route path="teachers" element={<Teachers />} />
              <Route path="payments" element={<Payments />} />
              <Route path="financials" element={<Financials />} />
              <Route path="settings" element={<AppSettings />} />
              <Route path="archive" element={<Archive />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Route>
          </Routes>
        </Router>
      </SettingsProvider>
    </AuthProvider>
  );
}