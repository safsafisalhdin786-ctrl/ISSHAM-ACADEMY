import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // بيانات الدخول الإدارية الآمنة
  const DEFAULT_EMAIL = 'admin@isshaam.com';
  const DEFAULT_PASS = 'Assham2026@Admin';

  const handleLoginSuccess = () => {
    localStorage.setItem('isshaam_auth', 'true');
    navigate('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const cleanEmail = email.trim().toLowerCase();

    // 1. التحقق المباشر من الحساب الافتراضي للتمرير الفوري دون انتظار Firebase
    if (cleanEmail === DEFAULT_EMAIL && password === DEFAULT_PASS) {
      handleLoginSuccess();
      setLoading(false);
      return;
    }

    // 2. المحاولة عبر Firebase للحسابات الأخرى
    try {
      await signInWithEmailAndPassword(auth, cleanEmail, password);
      handleLoginSuccess();
    } catch (err) {
      console.error('Login error:', err);
      
      // التمرير في حال تطابق البيانات الافتراضية مع وجود أي خطأ في Firebase
      if (cleanEmail === DEFAULT_EMAIL && password === DEFAULT_PASS) {
        handleLoginSuccess();
        return;
      }

      if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError('البريد الإلكتروني أو كلمة السر غير صحيحة.');
      } else if (err.code === 'auth/too-many-requests') {
        setError('تم حظر المحاولات مؤقتاً بسبب كثرة الأخطاء. حاول لاحقاً.');
      } else {
        setError('حدث خطأ أثناء تسجيل الدخول. يمكنك استخدام زر الدخول السريع.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleQuickLogin = () => {
    setEmail(DEFAULT_EMAIL);
    setPassword(DEFAULT_PASS);
    localStorage.setItem('isshaam_auth', 'true');
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4 dir-rtl" dir="rtl">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-200">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">أكاديمية إسهام 🏫</h1>
          <p className="text-slate-500 text-sm">Groupe Assham - نظام الإدارة المدرسية</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-rose-50 border border-rose-200 text-rose-700 text-sm rounded-lg font-medium text-center">
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-slate-700 font-medium mb-1 text-sm">البريد الإلكتروني</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@isshaam.com"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-left"
              dir="ltr"
              required
            />
          </div>

          <div>
            <label className="block text-slate-700 font-medium mb-1 text-sm">كلمة السر</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-left"
              dir="ltr"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-lg transition duration-200 shadow-md flex justify-center items-center cursor-pointer ${
              loading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                جاري تسجيل الدخول...
              </span>
            ) : (
              'تسجيل الدخول'
            )}
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-slate-100 text-center">
          <button
            type="button"
            onClick={handleQuickLogin}
            className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-4 py-2 rounded-lg transition border border-slate-300 w-full cursor-pointer"
          >
            ⚡ دخول سريع للمدير (Admin)
          </button>
        </div>
      </div>
    </div>
  );
}