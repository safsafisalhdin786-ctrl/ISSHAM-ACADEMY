import { useEffect, useMemo, useState } from 'react';
import { supabase } from '../supabase';
import { Link } from 'react-router-dom';
import logger from '../utils/logger';
import {
  Activity,
  ArrowLeft,
  Banknote,
  CalendarCheck,
  CheckCircle2,
  CircleAlert,
  Clock3,
  GraduationCap,
  UserRound,
  Users,
  UserRoundCheck,
  UserRoundX,
} from 'lucide-react';
import { useStudents } from '../context/StudentsContext';

const todayKey = () => new Date().toISOString().slice(0, 10);
const monthKey = () => new Date().toISOString().slice(0, 7);

const isPresent = (status) => ['حاضر', 'present'].includes(String(status).toLowerCase());
const isLate = (status) => ['متأخر', 'late'].includes(String(status).toLowerCase());
const formatActivity = (entry) => {
  if (entry.type === 'student_created') return `تم تسجيل التلميذ ${entry.details?.name || ''}`;
  if (entry.type === 'payment_created') return `تم تسجيل أداء مالي ${entry.details?.studentName || ''}`;
  if (entry.type === 'attendance_saved') return 'تم حفظ سجل الحضور اليومي';
  return entry.details?.message || 'نشاط جديد في النظام';
};

function StatCard({ label, value, helper, icon: Icon, tone }) {
  const tones = {
    blue: 'bg-blue-50 text-blue-700 ring-blue-100',
    navy: 'bg-slate-100 text-slate-800 ring-slate-200',
    green: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
    gold: 'bg-amber-50 text-amber-700 ring-amber-100',
  };

  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm font-bold text-slate-600">{label}</p>
          <p className="mt-3 text-3xl font-black tracking-tight text-slate-950">{value}</p>
          <p className="mt-2 text-xs font-semibold text-slate-500">{helper}</p>
        </div>
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-4 ${tones[tone]}`}>
          <Icon size={23} strokeWidth={2.2} />
        </div>
      </div>
    </article>
  );
}

function Section({ title, icon: Icon, children, action }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
            <Icon size={18} />
          </span>
          <h2 className="text-base font-black text-slate-950">{title}</h2>
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

export default function Dashboard() {
  const { students } = useStudents();
  const [remote, setRemote] = useState({ teachers: 0, attendance: [], payments: [] });
  const activities = [];

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      try {
        const today = todayKey();
        const [{ data: teachers, error: teachersError }, { data: attendance, error: attendanceError }, { data: payments, error: paymentsError }] = await Promise.all([
          supabase.from('teachers').select('id'),
          supabase.from('attendance').select('*').or(`date.eq.${today},attendance_date.eq.${today}`),
          supabase.from('payments').select('*'),
        ]);
        if (teachersError) throw teachersError;
        if (attendanceError) throw attendanceError;
        if (paymentsError) throw paymentsError;
        if (mounted) {
          setRemote({
            teachers: (teachers || []).length,
            attendance: attendance || [],
            payments: payments || [],
          });
        }
      } catch (error) {
        logger.error('Dashboard', error);
      }
    };
    load();

    const refreshData = () => load();
    window.addEventListener('isshaam:students-updated', refreshData);
    window.addEventListener('isshaam:payments-updated', refreshData);
    window.addEventListener('isshaam:attendance-updated', refreshData);
    const channel = supabase
      .channel('academy-dashboard-sync')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'students' }, refreshData)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'teachers' }, refreshData)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'payments' }, refreshData)
      .on('postgres_changes', { event: '*', schema: 'public', table: 'attendance' }, refreshData)
      .subscribe();
    return () => {
      mounted = false;
      window.removeEventListener('isshaam:students-updated', refreshData);
      window.removeEventListener('isshaam:payments-updated', refreshData);
      window.removeEventListener('isshaam:attendance-updated', refreshData);
      void supabase.removeChannel(channel);
    };
  }, []);

  const metrics = useMemo(() => {
    const activeStudents = students.filter((student) => !student.archived);
    const attendance = remote.attendance;
    const payments = remote.payments;
    const currentPayments = payments.filter((payment) => {
      const date = payment.date || payment.created_at || payment.createdAt || '';
      return String(date).slice(0, 7) === monthKey();
    });
    const present = attendance.filter((item) => isPresent(item.status)).length;
    const late = attendance.filter((item) => isLate(item.status)).length;
    const absent = Math.max(activeStudents.length - present - late, 0);

    return {
      activeStudents,
      present,
      late,
      absent,
      revenue: currentPayments.reduce((sum, payment) => sum + Number(payment.amount || 0), 0),
      paidStudents: new Set(currentPayments.map((payment) => payment.studentId || payment.student_id)).size,
    };
  }, [remote, students]);

  const attendanceRate = metrics.activeStudents.length
    ? Math.round((metrics.present / metrics.activeStudents.length) * 100)
    : 0;
  const outstanding = Math.max(
    metrics.activeStudents.reduce((sum, student) => sum + Number(student.monthly_fee || student.monthlyFee || 0), 0) -
      metrics.revenue,
    0
  );

  return (
    <div className="space-y-6 pb-10 text-right" dir="rtl">
      <section className="dashboard-hero relative overflow-hidden rounded-2xl bg-slate-900 p-6 text-white shadow-lg sm:p-8">
        <div className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="relative flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-400/10 px-3 py-1 text-xs font-bold text-blue-100">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              النظام يعمل بشكل طبيعي
            </div>
            <h1 className="text-2xl font-black sm:text-3xl">مرحباً بك في لوحة التحكم 👋</h1>
            <p className="mt-2 max-w-xl text-sm font-medium leading-6 text-slate-300">
              نظرة مركزة على نشاط الأكاديمية، الحضور، والتحصيل المالي لهذا الشهر.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3 text-sm font-bold text-slate-300">
            <CalendarCheck size={18} className="text-amber-300" />
            {new Intl.DateTimeFormat('ar-MA', { dateStyle: 'long' }).format(new Date())}
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="التلاميذ النشطون" value={metrics.activeStudents.length} helper="الملفات المسجلة حالياً" icon={Users} tone="blue" />
        <StatCard label="الأساتذة" value={remote.teachers} helper="أعضاء الطاقم التعليمي" icon={GraduationCap} tone="navy" />
        <StatCard label="الحضور اليوم" value={`${metrics.present} / ${metrics.activeStudents.length}`} helper={`${attendanceRate}% من التلاميذ`} icon={UserRoundCheck} tone="green" />
        <StatCard label="مداخيل الشهر" value={`${metrics.revenue} DH`} helper={`${metrics.paidStudents} أداء مسجل`} icon={Banknote} tone="gold" />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.15fr_.85fr]">
        <Section
          title="ملخص الحضور اليومي"
          icon={CalendarCheck}
          action={<Link to="/attendance" className="inline-flex items-center gap-1 text-xs font-black text-blue-700 hover:text-blue-900">فتح السجل <ArrowLeft size={14} /></Link>}
        >
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <CheckCircle2 className="mb-3 text-emerald-600" size={20} />
              <p className="text-xs font-bold text-emerald-800">حاضرون</p>
              <p className="mt-1 text-2xl font-black text-emerald-900">{metrics.present}</p>
            </div>
            <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
              <Clock3 className="mb-3 text-orange-600" size={20} />
              <p className="text-xs font-bold text-orange-800">متأخرون</p>
              <p className="mt-1 text-2xl font-black text-orange-900">{metrics.late}</p>
            </div>
            <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
              <UserRoundX className="mb-3 text-rose-600" size={20} />
              <p className="text-xs font-bold text-rose-800">غائبون</p>
              <p className="mt-1 text-2xl font-black text-rose-900">{metrics.absent}</p>
            </div>
          </div>
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-xs font-bold text-slate-600">
              <span>نسبة الحضور المسجلة</span>
              <strong className="text-slate-950">{attendanceRate}%</strong>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
              <div className="h-full rounded-full bg-emerald-500 transition-all" style={{ width: `${attendanceRate}%` }} />
            </div>
          </div>
        </Section>

        <Section
          title="الوضع المالي"
          icon={Banknote}
          action={<Link to="/financials" className="inline-flex items-center gap-1 text-xs font-black text-blue-700 hover:text-blue-900">التقارير <ArrowLeft size={14} /></Link>}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-xl bg-blue-50 p-4">
              <span className="text-sm font-bold text-blue-900">المداخيل المحصلة</span>
              <strong className="text-lg font-black text-blue-800">{metrics.revenue} DH</strong>
            </div>
            <div className="flex items-center justify-between rounded-xl bg-amber-50 p-4">
              <span className="text-sm font-bold text-amber-900">المتبقي المتوقع</span>
              <strong className="text-lg font-black text-amber-800">{outstanding} DH</strong>
            </div>
            <p className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <CircleAlert size={15} className="text-amber-600" />
              راجع صفحة الأداءات لتحديث التحصيل الشهري.
            </p>
          </div>
        </Section>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[.9fr_1.1fr]">
        <Section title="إجراءات سريعة" icon={Activity}>
          <div className="grid grid-cols-2 gap-3">
            <Link to="/students" className="rounded-xl border border-blue-200 bg-blue-50 p-4 text-sm font-black text-blue-900 transition hover:bg-blue-100">
              <Users size={20} className="mb-3 text-blue-700" /> إدارة التلاميذ
            </Link>
            <Link to="/attendance" className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-black text-emerald-900 transition hover:bg-emerald-100">
              <CalendarCheck size={20} className="mb-3 text-emerald-700" /> تسجيل الحضور
            </Link>
            <Link to="/payments" className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm font-black text-amber-900 transition hover:bg-amber-100">
              <Banknote size={20} className="mb-3 text-amber-700" /> إضافة أداء
            </Link>
            <Link to="/teachers" className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-black text-slate-900 transition hover:bg-slate-100">
              <UserRound size={20} className="mb-3 text-slate-700" /> الأساتذة
            </Link>
          </div>
        </Section>

        <Section title="آخر الأنشطة" icon={Activity} action={<Link to="/archive" className="text-xs font-black text-blue-700 hover:text-blue-900">السجل الكامل</Link>}>
          {activities.length ? (
            <div className="divide-y divide-slate-100">
              {activities.map((entry) => (
                <div key={entry.id} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-blue-700"><Activity size={16} /></span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-slate-800">{formatActivity(entry)}</p>
                    <p className="mt-1 text-xs font-medium text-slate-500">{new Date(entry.timestamp).toLocaleString('ar-MA')}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
              <p className="text-sm font-bold text-slate-600">لا توجد أنشطة مسجلة بعد.</p>
              <p className="mt-1 text-xs text-slate-500">ستظهر هنا عمليات التسجيل والأداء والحضور.</p>
            </div>
          )}
        </Section>
      </div>
    </div>
  );
}
