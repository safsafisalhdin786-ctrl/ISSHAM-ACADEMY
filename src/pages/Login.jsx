import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  AlertTriangle,
  Eye,
  EyeOff,
  GraduationCap,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const logoUrl = `${import.meta.env.BASE_URL}logo.jpeg`;
const DEMO_EMAIL = 'admin@isshaam.com';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('admin');
  const [forgotOpen, setForgotOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  const [resetLoading, setResetLoading] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(
    () => Number(window.sessionStorage.getItem('isshaam_login_attempts') || 0)
  );
  const [blockedUntil, setBlockedUntil] = useState(
    () => Number(window.sessionStorage.getItem('isshaam_login_blocked_until') || 0)
  );
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [rememberMe, setRememberMe] = useState(
    () => window.localStorage.getItem('isshaam_remember') !== 'false'
  );
  const navigate = useNavigate();
  const { login, resetPassword } = useAuth();

  useEffect(() => {
    const updateCountdown = () => {
      const remaining = Math.max(0, Math.ceil((blockedUntil - Date.now()) / 1000));
      setRemainingSeconds(remaining);
      if (!remaining && blockedUntil) {
        window.sessionStorage.removeItem('isshaam_login_blocked_until');
        window.sessionStorage.setItem('isshaam_login_attempts', '0');
        setBlockedUntil(0);
        setFailedAttempts(0);
      }
    };
    updateCountdown();
    const timer = window.setInterval(updateCountdown, 1000);
    return () => window.clearInterval(timer);
  }, [blockedUntil]);

  useEffect(() => {
    const rememberedEmail = window.localStorage.getItem('isshaam_remembered_email');
    if (rememberedEmail) setEmail(rememberedEmail);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (loading || remainingSeconds > 0) return;

    setError('');
    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail || !password) {
      setError('المرجو إدخال البريد الإلكتروني وكلمة السر.');
      return;
    }

    setLoading(true);

    // Demo access is deliberately local so an unconfigured live host never freezes.
    if (cleanEmail === DEMO_EMAIL) {
      window.localStorage.setItem(
        'user',
        JSON.stringify({ authenticated: true, user: DEMO_EMAIL, email: DEMO_EMAIL })
      );
      window.localStorage.setItem('issham_auth', 'true');
      window.localStorage.setItem('isshaam_demo_auth', 'true');
      window.sessionStorage.removeItem('isshaam_login_attempts');
      window.sessionStorage.removeItem('isshaam_login_blocked_until');
      setFailedAttempts(0);
      setBlockedUntil(0);
      window.localStorage.setItem('isshaam_remember', String(rememberMe));
      if (rememberMe) {
        window.localStorage.setItem('isshaam_remembered_email', cleanEmail);
      } else {
        window.localStorage.removeItem('isshaam_remembered_email');
      }
      void login(cleanEmail, password);
      setLoading(false);
      navigate('/dashboard', { replace: true });
      return;
    }

    try {
      window.localStorage.setItem('isshaam_remember', String(rememberMe));
      if (rememberMe) {
        window.localStorage.setItem('isshaam_remembered_email', cleanEmail);
      }
      await login(cleanEmail, password);
      window.sessionStorage.removeItem('isshaam_login_attempts');
      window.sessionStorage.removeItem('isshaam_login_blocked_until');
      setFailedAttempts(0);
      setBlockedUntil(0);
      navigate('/dashboard', { replace: true });
    } catch (loginError) {
      const nextAttempts = failedAttempts + 1;
      setFailedAttempts(nextAttempts);
      window.sessionStorage.setItem('isshaam_login_attempts', String(nextAttempts));
      if (nextAttempts >= 5) {
        const until = Date.now() + 15 * 60 * 1000;
        setBlockedUntil(until);
        window.sessionStorage.setItem('isshaam_login_blocked_until', String(until));
        setError('تم حظر المحاولات لمدة 15 دقيقة');
      } else {
        setError(
        loginError?.code === 'auth/user-disabled'
          ? 'الحساب معطل، تواصل مع الإدارة'
          : loginError?.code === 'auth/user-not-found'
            ? 'البريد الإلكتروني غير مسجل في النظام'
            : loginError?.code === 'auth/invalid-credential' ||
          loginError?.code === 'auth/user-not-found' ||
          loginError?.code === 'auth/wrong-password'
          ? 'البريد الإلكتروني أو كلمة المرور غير صحيحة'
          : 'حدث خطأ تقني أثناء تسجيل الدخول. يرجى المحاولة مرة أخرى.'
        );
      }
      setLoading(false);
    }
  };

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#071426] px-4 py-6 text-right sm:px-8 sm:py-10"
      dir="rtl"
    >
      <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-blue-500/20 blur-[110px]" />
      <div className="pointer-events-none absolute -bottom-48 -left-32 h-[34rem] w-[34rem] rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.07)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute left-[12%] top-[18%] h-24 w-24 rounded-full border border-amber-400/20" />
      <div className="pointer-events-none absolute bottom-[16%] right-[8%] h-12 w-12 rotate-45 border border-blue-300/20" />

      <div className="relative mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-6xl items-center justify-center sm:min-h-[calc(100vh-5rem)]">
        <section className="w-full overflow-hidden rounded-[2rem] border border-blue-200/20 bg-[#10243b]/80 shadow-[0_30px_100px_rgba(0,0,0,.5)] backdrop-blur-2xl lg:grid lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative flex flex-col justify-between overflow-hidden border-b border-white/10 px-7 py-9 sm:px-12 sm:py-12 lg:order-2 lg:border-b-0 lg:border-l">
            <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full border border-amber-300/10" />
            <div className="pointer-events-none absolute -left-12 top-32 h-40 w-40 rounded-full border border-blue-300/10" />

            <div className="relative">
              <div className="mb-8 flex items-center gap-3 text-amber-300">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-300/30 bg-amber-300/10">
                  <GraduationCap size={21} />
                </span>
                <span className="text-xs font-bold tracking-[0.28em] text-blue-100/80">ACADEMY PORTAL</span>
              </div>
              <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-[2rem] border border-amber-300/30 bg-white p-3 shadow-[0_12px_45px_rgba(0,0,0,.35)] sm:h-48 sm:w-48">
                <img src={logoUrl} alt="ISSHAM ACADEMY Logo" className="h-full w-full rounded-2xl object-contain" />
              </div>
              <div className="mt-8 text-center">
                <p className="text-xs font-black tracking-[0.34em] text-amber-300">ISSHAM ACADEMY</p>
                <h1 className="mt-3 text-2xl font-black text-white sm:text-3xl">أكاديمية إسهام التعليمية</h1>
                <div className="mx-auto mt-5 flex items-center justify-center gap-3">
                  <span className="h-px w-12 bg-amber-300/60" />
                  <Sparkles size={15} className="text-amber-300" />
                  <span className="h-px w-12 bg-amber-300/60" />
                </div>
                <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-blue-100/75">
                  منصة عصرية لمواكبة وإدارة المسار الأكاديمي
                </p>
              </div>
            </div>

            <div className="relative mt-10 hidden items-center justify-center gap-3 text-xs font-semibold text-blue-100/55 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
              تعليم أكثر تنظيماً، ونجاح أكثر وضوحاً
            </div>
          </div>

          <div className="bg-[#f8fbff]/[.97] px-7 py-9 sm:px-12 sm:py-12 lg:order-1 lg:px-14">
            <div className="mb-8">
              <p className="mb-3 text-xs font-black tracking-[0.2em] text-[#2563a6]">WELCOME BACK</p>
              <h2 className="text-3xl font-black text-[#071426]">تسجيل الدخول</h2>
              <p className="mt-2 text-sm font-medium text-slate-600">المرجو إدخال بياناتك للولوج إلى حسابك</p>
            </div>

            {error && (
              <div role="alert" className="mb-6 rounded-xl border border-rose-300 bg-rose-50 px-4 py-3 text-sm font-bold leading-6 text-rose-800">
                <AlertTriangle size={17} className="ml-2 inline-block align-text-bottom" />
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="userType" className="mb-2 block text-sm font-black text-[#071426]">نوع الحساب</label>
                <select
                  id="userType"
                  value={userType}
                  onChange={(event) => setUserType(event.target.value)}
                  className={`h-14 w-full rounded-xl border bg-white px-4 font-bold text-slate-950 outline-none transition focus:ring-4 focus:ring-blue-500/15 ${
                    userType === 'teacher' ? 'border-emerald-400' : userType === 'student' ? 'border-amber-400' : 'border-[#2563a6]'
                  }`}
                >
                  <option value="teacher">👨‍🏫 أستاذ</option>
                  <option value="student">👨‍🎓 طالب</option>
                  <option value="admin">🏛️ إداري</option>
                </select>
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-black text-[#071426]">البريد الإلكتروني</label>
                <div className="relative">
                  <Mail size={19} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#2563a6]" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="admin@isshaam.com"
                    autoComplete="email"
                    className="h-14 w-full rounded-xl border border-slate-300 bg-white px-4 pl-11 text-left font-medium text-slate-950 outline-none transition focus:border-[#2563a6] focus:ring-4 focus:ring-blue-500/15"
                    dir="ltr"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-black text-[#071426]">كلمة السر</label>
                <div className="relative">
                  <LockKeyhole size={19} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#2563a6]" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="••••••••"
                    autoComplete="current-password"
                    className="h-14 w-full rounded-xl border border-slate-300 bg-white px-4 pl-11 pr-12 text-left font-medium text-slate-950 outline-none transition focus:border-[#2563a6] focus:ring-4 focus:ring-blue-500/15"
                    dir="ltr"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((visible) => !visible)}
                    aria-label={showPassword ? 'إخفاء كلمة السر' : 'إظهار كلمة السر'}
                    className="absolute right-3 top-1/2 rounded-lg p-2 text-[#1e3e62] transition hover:bg-blue-50"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 text-sm">
                <button type="button" onClick={() => { setResetEmail(email); setResetMessage(''); setForgotOpen(true); }} className="font-bold text-[#2563a6] transition hover:text-[#071426]">
                  نسيت كلمة السر؟
                </button>
                <label className="flex cursor-pointer items-center gap-2 font-bold text-[#071426]">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(event) => setRememberMe(event.target.checked)}
                    className="h-4 w-4 accent-[#2563a6]"
                  />
                  تذكرني
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-l from-[#173d68] via-[#2563a6] to-[#2d75bd] font-black text-white shadow-[0_12px_24px_rgba(30,78,132,.3)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(30,78,132,.4)] disabled:cursor-not-allowed disabled:brightness-75"
              >
                {loading ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    جاري تسجيل الدخول...
                  </>
                ) : (
                  <>
                    <ArrowLeft size={19} className="transition-transform group-hover:-translate-x-1" />
                    تسجيل الدخول
                  </>
                )}
              </button>
              {remainingSeconds > 0 && (
                <p className="text-center text-sm font-black text-rose-700">
                  تم حظر المحاولات لمدة 15 دقيقة — المتبقي {Math.floor(remainingSeconds / 60)}:{String(remainingSeconds % 60).padStart(2, '0')}
                </p>
              )}
            </form>

            <div className="mt-8 flex items-center gap-3 border-t border-slate-200 pt-5 text-xs font-semibold text-slate-500">
              <ShieldCheck size={16} className="text-emerald-600" />
              بياناتك محمية داخل منصة الأكاديمية
            </div>
            <p className="mt-4 text-center text-xs font-semibold text-slate-500">
              📧 هل تواجه مشكلة في الدخول؟ <a href="mailto:support@issham-academy.com" className="font-black text-[#2563a6]">اتصل بالدعم</a>
            </p>
            <p className="mt-3 text-center text-[11px] text-slate-400">
              © 2026 أكاديمية إسهام - نظام الإدارة المدرسية · <a href="#privacy" className="hover:text-[#2563a6]">سياسة الخصوصية</a> · <a href="#terms" className="hover:text-[#2563a6]">شروط الاستخدام</a>
            </p>
          </div>
        </section>
      </div>
      {forgotOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-md rounded-2xl border border-blue-200/30 bg-white p-6 text-right shadow-2xl" dir="rtl">
            <h3 className="text-xl font-black text-[#071426]">استعادة كلمة السر</h3>
            <p className="mt-2 text-sm text-slate-600">أدخل بريدك الإلكتروني لإرسال رابط إعادة التعيين.</p>
            {resetMessage && <p className="mt-4 rounded-xl bg-emerald-50 p-3 text-sm font-bold text-emerald-700">{resetMessage}</p>}
            <input type="email" value={resetEmail} onChange={(event) => setResetEmail(event.target.value)} placeholder="example@issham.academy" className="mt-5 h-12 w-full rounded-xl border border-slate-300 px-4 text-left" dir="ltr" />
            <div className="mt-5 flex gap-3">
              <button type="button" disabled={resetLoading} onClick={async () => {
                setResetLoading(true);
                try {
                  await resetPassword(resetEmail);
                  setResetMessage('تم إرسال رابط إعادة التعيين إلى بريدك');
                } catch (resetError) {
                  setResetMessage(resetError?.code === 'auth/user-not-found' ? 'البريد الإلكتروني غير مسجل في النظام' : 'تعذر إرسال رابط إعادة التعيين. يرجى المحاولة مرة أخرى.');
                } finally {
                  setResetLoading(false);
                }
              }} className="flex-1 rounded-xl bg-[#1e3a5f] px-4 py-3 font-black text-white">{resetLoading ? 'جاري الإرسال...' : 'إرسال الرابط'}</button>
              <button type="button" onClick={() => setForgotOpen(false)} className="rounded-xl bg-slate-100 px-4 py-3 font-black text-slate-700">إلغاء</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
