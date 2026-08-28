import { useEffect, useMemo, useState } from 'react';
import { useStudents } from '../context/StudentsContext';
import { supabase } from '../supabase';

const formatDate = (value) =>
  new Date(value).toLocaleString('ar-MA', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

export default function Archive() {
  const [tab, setTab] = useState('attendance');
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [attendance, setAttendance] = useState([]);
  const [archived, setArchived] = useState([]);
  const [activities] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const { setStudents } = useStudents();

  useEffect(() => {
    let mounted = true;
    const loadArchive = async () => {
      const [{ data: archivedStudents, error: studentsError }, { data: attendanceRows, error: attendanceError }, { data: teacherRows, error: teachersError }] = await Promise.all([
        supabase.from('students').select('*').eq('archived', true).order('updated_at', { ascending: false }),
        supabase.from('attendance').select('*').order('date', { ascending: false }),
        supabase.from('teachers').select('id, full_name'),
      ]);
      if (studentsError) throw studentsError;
      if (attendanceError) throw attendanceError;
      if (teachersError) throw teachersError;
      if (mounted) {
        setArchived(archivedStudents || []);
        setAttendance(attendanceRows || []);
        setTeachers(teacherRows || []);
      }
    };
    void loadArchive().catch((error) => {
      console.error('تعذر تحميل الأرشيف المركزي.', error);
      if (mounted) setErrorMessage(`تعذر تحميل الأرشيف: ${error.message || 'خطأ غير معروف'}`);
    });
    const channel = supabase
      .channel('academy-archive-sync')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'students' }, () => void loadArchive())
      .on('postgres_changes', { event: '*', schema: 'public', table: 'attendance' }, () => void loadArchive())
      .subscribe();
    return () => {
      mounted = false;
      void supabase.removeChannel(channel);
    };
  }, []);

  const getTeacherName = (student) => {
    const relation = student.teachers || student.teacher;
    const relationName = relation?.full_name || relation?.fullName || relation?.name;
    if (relationName) return relationName;
    const teacher = teachers.find((item) => String(item.id) === String(student.teacher_id || student.teacherId));
    return teacher?.full_name || teacher?.fullName || teacher?.name || 'غير محدد';
  };

  const filteredAttendance = useMemo(
    () => attendance.filter((record) => (!date || record.date === date) && (!month || record.date?.startsWith(month))),
    [attendance, date, month]
  );

  const exportAttendance = () => {
    const rows = filteredAttendance.map((item) => ({
      التاريخ: item.date,
      التلميذ: item.studentName,
      الحالة: item.status,
      الوقت: formatDate(item.timestamp),
    }));
    const blob = new Blob([JSON.stringify(rows, null, 2)], {
      type: 'application/json;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `attendance-${date || 'history'}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const restore = async (id) => {
    const archivedStudent = archived.find((item) => item.id === id);
    if (!archivedStudent) return;
    setErrorMessage('');
    try {
      const { data, error } = await supabase
        .from('students')
        .update({ archived: false, status: 'active', updated_at: new Date().toISOString() })
        .eq('id', id)
        .select('*')
        .single();
      if (error) throw error;
      if (!data?.id) throw new Error('لم يتم العثور على سجل التلميذ في قاعدة البيانات.');
      setArchived((current) => current.filter((item) => item.id !== id));
      setStudents((current) => [...current.filter((item) => item.id !== id), { ...data, archived: false, status: 'active' }]);
    } catch (error) {
      console.error('Student restore failed:', error);
      setErrorMessage(`تعذر استعادة التلميذ: ${error.message || 'خطأ غير معروف'}`);
    }
  };

  return (
    <div className="mx-auto w-full max-w-7xl space-y-6 pb-10" dir="rtl">
      <header className="rounded-2xl bg-gradient-to-br from-[#0B192C] to-[#1E3E62] p-6 text-white shadow-xl">
        <p className="text-sm font-bold text-amber-300">ISSHAAM ACADEMY</p>
        <h1 className="mt-2 text-3xl font-black">الأرشيف والسجلات</h1>
        <p className="mt-2 text-sm text-slate-200">مراجعة الحضور والطلاب المؤرشفين وسجل العمليات.</p>
      </header>
      {errorMessage && <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-bold text-red-800">{errorMessage}</div>}

      <div className="flex gap-2 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
        {[
          ['attendance', 'أرشيف الحضور'],
          ['students', 'الطلاب المؤرشفون'],
          ['activity', 'سجل النشاط'],
        ].map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-black transition ${
              tab === id ? 'bg-orange-600 text-white' : 'text-slate-500 hover:bg-slate-100'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === 'attendance' && (
        <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <label className="text-sm font-bold text-slate-700">
              اختر تاريخا مخصصا
              <input
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                className="mt-2 block rounded-xl border border-slate-300 px-3 py-2"
              />
              <span className="mt-3 block">أو اختر شهرا</span>
              <input
                type="month"
                value={month}
                onChange={(event) => setMonth(event.target.value)}
                className="mt-2 block rounded-xl border border-slate-300 px-3 py-2"
              />
            </label>
            <button type="button" onClick={exportAttendance} className="rounded-lg bg-orange-600 px-4 py-2.5 font-bold text-white hover:bg-orange-700">
              تصدير السجل
            </button>
          </div>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[620px] text-right text-sm">
              <thead className="bg-slate-100 text-slate-700"><tr><th className="p-3">التاريخ</th><th className="p-3">التلميذ</th><th className="p-3">الحالة</th><th className="p-3">وقت التسجيل</th></tr></thead>
              <tbody>{filteredAttendance.map((item) => <tr key={item.id} className="border-b border-slate-100"><td className="p-3">{item.date}</td><td className="p-3 font-bold">{item.studentName}</td><td className="p-3">{item.status}</td><td className="p-3">{formatDate(item.timestamp)}</td></tr>)}</tbody>
            </table>
            {!filteredAttendance.length && <p className="p-8 text-center font-bold text-slate-500">لا توجد سجلات محلية لهذا التاريخ.</p>}
          </div>
        </section>
      )}

      {tab === 'students' && (
        <section className="grid gap-4 md:grid-cols-2">
          {archived.map((student) => (
            <article key={student.id} className="rounded-2xl border border-amber-200 bg-white p-5 shadow-sm">
              <h2 className="font-black text-slate-900">{student.full_name}</h2>
              <p className="mt-1 text-sm text-slate-500">{student.academic_level || student.level_id || 'المستوى غير محدد'}</p>
              <p className="mt-2 text-sm font-bold text-slate-700">الأستاذ: {getTeacherName(student)}</p>
              <p className="mt-2 text-xs text-slate-400">أرشف في {formatDate(student.archivedAt)}</p>
              <button type="button" onClick={() => restore(student.id)} className="mt-4 rounded-lg bg-orange-600 px-4 py-2 text-sm font-bold text-white hover:bg-orange-700">إعادة تفعيل</button>
            </article>
          ))}
          {!archived.length && <p className="rounded-2xl bg-white p-8 text-center font-bold text-slate-500">لا توجد ملفات مؤرشفة.</p>}
        </section>
      )}

      {tab === 'activity' && (
        <section className="space-y-3">
          {activities.map((item) => <article key={item.id} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"><div className="flex justify-between gap-3"><strong className="text-[#1E3E62]">{item.type}</strong><time className="text-xs text-slate-400">{formatDate(item.timestamp)}</time></div><p className="mt-2 text-sm text-slate-600">{item.details}</p></article>)}
          {!activities.length && <p className="rounded-2xl bg-white p-8 text-center font-bold text-slate-500">لا توجد أنشطة مسجلة بعد.</p>}
        </section>
      )}
    </div>
  );
}
