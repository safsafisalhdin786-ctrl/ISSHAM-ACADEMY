import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children, allowedRoles }) {
  const { currentUser, userRole } = useAuth ? useAuth() : { currentUser: null, userRole: 'admin' };

  // التحقق من وجود توثيق محلي كـ Fallback
  const isLocalAuth = localStorage.getItem('isshaam_auth') === 'true';
  const effectiveRole = userRole || (isLocalAuth ? 'admin' : null);

  // 1. إذا لم يكن المستخدم مسجلاً الدخول (لا عبر Firebase ولا عبر localStorage)
  if (!currentUser && !isLocalAuth) {
    return <Navigate to="/login" replace />;
  }

  // 2. إذا كانت هناك رتب محددة، والمستخدم لا يملك إحداها
  if (allowedRoles && !allowedRoles.includes(effectiveRole)) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] dir-rtl text-center p-6">
        <h1 className="text-4xl font-extrabold text-red-600 mb-3">403 - وصول غير مصرح</h1>
        <p className="text-slate-600 font-medium max-w-md">
          عذراً، ليس لديك الصلاحية الكافية للوصول إلى هذه الصفحة. يرجى الاتصال بإدارة أكاديمية إسهام.
        </p>
      </div>
    );
  }

  // 3. كل شيء ممتاز، عرض المحتوى
  return children;
}