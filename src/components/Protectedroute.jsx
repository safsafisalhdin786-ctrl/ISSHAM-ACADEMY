import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children, allowedRoles = [] }) {
  const { currentUser, userRole, loading } = useAuth();
  const location = useLocation();

  // Wait until authentication state has been resolved
  if (loading) {
    return (
      <div
        dir="rtl"
        className="min-h-[60vh] flex items-center justify-center p-6"
      >
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-slate-200 border-t-slate-700 rounded-full animate-spin mx-auto mb-4" />

          <p className="text-slate-600 font-medium">
            جاري التحقق من تسجيل الدخول...
          </p>
        </div>
      </div>
    );
  }

  // User is not authenticated
  if (!currentUser) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: location.pathname }}
      />
    );
  }

  // If this route has role restrictions, verify the user's role
  if (
    allowedRoles.length > 0 &&
    (!userRole || !allowedRoles.includes(userRole))
  ) {
    return (
      <div
        dir="rtl"
        className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6"
      >
        <div className="max-w-md">
          <div className="text-6xl mb-5">🔒</div>

          <h1 className="text-4xl font-extrabold text-red-600 mb-3">
            403
          </h1>

          <h2 className="text-xl font-bold text-slate-800 mb-3">
            وصول غير مصرح
          </h2>

          <p className="text-slate-600 font-medium leading-7">
            عذراً، ليس لديك الصلاحية الكافية للوصول إلى هذه الصفحة.
            يرجى التواصل مع إدارة أكاديمية إسهام.
          </p>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="mt-6 px-5 py-2.5 rounded-xl bg-slate-800 text-white font-semibold hover:bg-slate-700 transition"
          >
            العودة
          </button>
        </div>
      </div>
    );
  }

  // Authentication and authorization successful
  return children;
}