import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children, allowedRoles }) {
  const { currentUser, userRole } = useAuth();

  // 1. إلا كان المستخدم ما مسجلش الدخول بالمرة
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  // 2. إلا كان مسموح برتب معينة، والمستخدم ما عندوش ديك الرتبة
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] dir-rtl text-center p-6">
        <h1 className="text-4xl font-extrabold text-red-600 mb-3">403 - وصول غير مصرح</h1>
        <p className="text-slate-600 font-medium max-w-md">
          عذراً، ليس لديك الصلاحية الكافية للوصول إلى هذه الصفحة. يرجى الاتصال بإدارة أكاديمية إسهام.
        </p>
      </div>
    );
  }

  // 3. كلشي هو هذاك، عرض الصفحة
  return children;
}