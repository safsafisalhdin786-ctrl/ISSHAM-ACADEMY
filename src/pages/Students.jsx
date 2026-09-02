import React, { useCallback, useEffect, useState } from 'react';
import { supabase, describeSupabaseError } from '../supabase';
import { useAuth } from '../context/AuthContext';
import ConfirmDialog from '../components/ConfirmDialog';
import { maskPhone } from '../utils/security';
import { useStudents } from '../context/StudentsContext';
import logger from '../utils/logger';

const MOROCCAN_LEVELS = [
  'الأول ابتدائي',
  'الثاني ابتدائي',
  'الثالث ابتدائي',
  'الرابع ابتدائي',
  'الخامس ابتدائي',
  'السادس ابتدائي',
  'الأولى إعدادي',
  'الثانية إعدادي',
  'الثالثة إعدادي',
  'الجذع المشترك',
  'الأولى باكالوريا',
  'الثانية باكالوريا',
];

const LEVEL_OPTIONS = MOROCCAN_LEVELS.map((name_ar) => ({
  id: name_ar,
  name_ar,
}));

const normalizeTeacher = (teacher) => {
  try {
    const details = typeof teacher.subject === 'string' ? JSON.parse(teacher.subject) : teacher.subject;
    if (details && typeof details === 'object' && Array.isArray(details.subjects)) {
      return { ...teacher, subjects: details.subjects, levels: details.levels || [] };
    }
  } catch {
    // Legacy records use a plain subject value.
  }
  return { ...teacher, subjects: teacher.subject ? [teacher.subject] : [], levels: teacher.levels || [] };
};

export default function Students() {
  const { currentUser } = useAuth();
  const { students, setStudents } = useStudents();
  const [teachers, setTeachers] = useState([]);
  const [levels, setLevels] = useState([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [showAddModal, setShowAddModal] = useState(false);
  const [editingStudentId, setEditingStudentId] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [pendingArchive, setPendingArchive] = useState(null);
  const [levelFilter, setLevelFilter] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    level_id: '',
    teacher_id: '',
    teacher_search: '',
    subjects: [],
    original_school: '',
    parent_phone: '',
    parent_whatsapp: '',
    monthly_fee: '',
    status: 'active',
    archived: false,
  });

  // =====================================================
  // LOAD DATA (SAFE FETCH)
  // =====================================================

  const fetchData = useCallback(async () => {
    setLevels(LEVEL_OPTIONS);
    setErrorMessage('');

    try {
      const [studentsResult, teachersResult, levelsResult] = await Promise.all([
        supabase
          .from('students')
          .select('*')
          .eq('archived', false)
          .order('full_name', { ascending: true }),

        supabase
          .from('teachers')
          .select('*')
          .order('full_name', { ascending: true }),

        supabase
          .from('levels')
          .select('*')
          .eq('is_active', true)
          .order('name_ar', { ascending: true }),
      ]);

      if (studentsResult.error) throw studentsResult.error;

      setStudents(studentsResult.data || []);
      const notices = [];
      if (teachersResult.error) {
        setTeachers([]);
        notices.push(`تعذر تحميل قائمة الأساتذة: ${describeSupabaseError(teachersResult.error)}`);
      } else {
        setTeachers((teachersResult.data || [])
          .filter((teacher) => teacher.status !== 'inactive')
          .map(normalizeTeacher));
      }
      if (levelsResult.error && levelsResult.error.code !== 'PGRST116') {
        setLevels(LEVEL_OPTIONS);
        notices.push(`تعذر تحميل المستويات: ${describeSupabaseError(levelsResult.error)}`);
      } else {
        setLevels(levelsResult.data?.length ? levelsResult.data : LEVEL_OPTIONS);
      }
      setErrorMessage(notices.join(' '));
    } catch (error) {
      logger.error('Students.fetchData', error);
      setTeachers([]);
      setErrorMessage(`تعذر تحميل بيانات التلاميذ من قاعدة البيانات: ${describeSupabaseError(error)}`);
    } finally {
      setLoading(false);
    }
  }, [setStudents]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // =====================================================
  // HELPERS FOR LEVEL & TEACHER
  // =====================================================

  const getLevelName = (student) => {
    if (student.levels?.name_ar) return student.levels.name_ar;
    if (student.level_id && levels.length > 0) {
      const found = levels.find((l) => String(l.id) === String(student.level_id));
      if (found) return found.name_ar;
    }
    return student.academic_level || 'المستوى غير محدد';
  };

  const getTeacherForStudent = (student) => {
    const relation = student.teachers || student.teacher;
    if (relation) {
      const relationName = relation.full_name || relation.fullName || relation.name;
      if (relationName) return relationName;
    }
    if (student.teacher_name) return student.teacher_name;
    if (student.teacher_id && teachers.length > 0) {
      const found = teachers.find((t) => String(t.id) === String(student.teacher_id));
      if (found) return found.full_name || found.fullName || found.name || found.displayName;
    }
    return 'غير محدد';
  };

  const getStudentSchool = (student) => {
    if (student.original_school || student.school) return student.original_school || student.school;
    const match = String(student.notes || '').match(/(?:^|\n)المدرسة:\s*(.+)/);
    return match?.[1]?.trim() || '—';
  };

  // =====================================================
  // FORM
  // =====================================================

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'teacher_search') {
      const selectedTeacher = teachers.find((teacher) => {
        const teacherName = teacher.full_name || teacher.fullName || teacher.name || teacher.displayName;
        return teacherName === value;
      });
      setFormData((prev) => ({
        ...prev,
        teacher_search: value,
        teacher_id: selectedTeacher?.id || '',
        subjects: selectedTeacher?.subjects || [],
      }));
      return;
    }
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'level_id' ? { teacher_id: '', teacher_search: '', subjects: [] } : {}),
      ...(name === 'teacher_id'
        ? { subjects: teachers.find((teacher) => String(teacher.id) === String(value))?.subjects || [] }
        : {}),
    }));
  };

  const resetForm = () => {
    setEditingStudentId(null);
    setFormData({
      first_name: '',
      last_name: '',
      level_id: '',
      teacher_id: '',
      teacher_search: '',
      subjects: [],
      original_school: '',
      parent_phone: '',
      parent_whatsapp: '',
      monthly_fee: '',
      status: 'active',
      archived: false,
    });
  };

  // =====================================================
  // ADD STUDENT
  // =====================================================

  const handleAddStudent = async (e) => {
    e.preventDefault();

    const firstName = formData.first_name.trim();
    const lastName = formData.last_name.trim();
    const fullName = `${firstName} ${lastName}`.trim();

    if (!firstName || !lastName) {
      alert('المرجو إدخال اسم التلميذ.');
      return;
    }

    if (!formData.parent_phone.trim()) {
      alert('المرجو إدخال رقم هاتف الولي.');
      return;
    }

    if (!formData.teacher_id) {
      setErrorMessage('المرجو اختيار الأستاذ قبل حفظ التلميذ.');
      return;
    }

    const duplicate = students.some((student) => (
      student.id !== editingStudentId
      && String(student.full_name || '').trim().toLowerCase() === fullName.toLowerCase()
      && String(student.parent_phone || '').replace(/\D/g, '') === formData.parent_phone.replace(/\D/g, '')
    ));
    if (duplicate) {
      setErrorMessage('هذا التلميذ مسجل مسبقاً بنفس الاسم ورقم الهاتف.');
      return;
    }

    const monthlyFee = formData.monthly_fee === '' ? 0 : Number(formData.monthly_fee);
    if (!Number.isFinite(monthlyFee) || monthlyFee < 0) {
      setErrorMessage('المرجو إدخال واجب شهري صحيح وغير سالب.');
      return;
    }

    setSaving(true);
    setErrorMessage('');

    const payload = {
      full_name: fullName,
      level_id: levels.some((level) => String(level.id) === String(formData.level_id))
        ? formData.level_id
        : null,
      academic_level: levels.some((level) => String(level.id) === String(formData.level_id))
        ? null
        : formData.level_id || null,
      teacher_id: formData.teacher_id || null,
      parent_phone: formData.parent_phone.trim(),
      parent_whatsapp: formData.parent_whatsapp.trim() || formData.parent_phone.trim(),
      monthly_fee: monthlyFee,
      status: 'active',
      archived: false,
    };
    const teacher = teachers.find((item) => String(item.id) === String(payload.teacher_id));
    try {
      const studentFields = {
        full_name: payload.full_name,
        level_id: payload.level_id,
        teacher_id: payload.teacher_id,
        ...(editingStudentId ? {} : { notes: `المدرسة: ${formData.original_school.trim()}` }),
        parent_phone: payload.parent_phone,
        parent_whatsapp: payload.parent_whatsapp,
        monthly_fee: payload.monthly_fee,
        status: payload.status,
        archived: false,
        user_id: currentUser?.uid || null,
      };
      const result = editingStudentId
        ? await supabase.from('students').update(studentFields).eq('id', editingStudentId).select('*').single()
        : await supabase.from('students').insert(studentFields).select('*').single();
      const { data, error } = result;
      if (error) throw error;
      if (!data?.id) throw new Error('لم تُرجع قاعدة البيانات معرف التلميذ بعد الحفظ.');
      const savedStudent = {
        ...data,
        teacher_name: teacher?.full_name || teacher?.fullName || teacher?.name || '',
      };
      setStudents((current) => editingStudentId
        ? current.map((student) => (student.id === editingStudentId ? savedStudent : student))
        : [savedStudent, ...current]);
      setShowAddModal(false);
      resetForm();
    } catch (error) {
      logger.error('Students.save', error);
      setErrorMessage(`تعذر حفظ التلميذ وعلاقة الأستاذ في قاعدة البيانات: ${error.message || 'خطأ غير معروف'}`);
    } finally {
      setSaving(false);
    }
  };

  const openEditStudent = (student) => {
    setSelectedStudent(null);
    setEditingStudentId(student.id);
    setFormData({
      first_name: (student.full_name || student.fullName || '').trim().split(/\s+/)[0] || '',
      last_name: (student.full_name || student.fullName || '').trim().split(/\s+/).slice(1).join(' '),
      level_id: student.level_id || student.academic_level || '',
      teacher_id: student.teacher_id || student.teacherId || '',
      teacher_search: getTeacherForStudent(student) === 'غير محدد' ? '' : getTeacherForStudent(student),
      subjects: Array.isArray(student.subjects) ? student.subjects : [],
      original_school: getStudentSchool(student) === '—' ? '' : getStudentSchool(student),
      parent_phone: student.parent_phone || student.parentPhone || '',
      parent_whatsapp: student.parent_whatsapp || student.parentWhatsapp || '',
      monthly_fee: student.monthly_fee ?? student.monthlyFee ?? '',
      status: student.status || 'active',
      archived: false,
    });
    setShowAddModal(true);
  };

  // =====================================================
  // DELETE / ARCHIVE STUDENT
  // =====================================================

  const handleDeleteStudent = async (studentId) => {
    try {
      const { error } = await supabase
        .from('students')
        .update({ archived: true, status: 'archived' })
        .eq('id', studentId);
      if (error) throw error;
      const updatedStudents = students.filter((item) => item.id !== studentId);
      setStudents(updatedStudents);
    } catch (error) {
      logger.error('Students.archive', error);
      setErrorMessage(`تعذر أرشفة التلميذ في قاعدة البيانات: ${error.message || 'خطأ غير معروف'}`);
      return;
    }
    if (selectedStudent && selectedStudent.id === studentId) {
      setSelectedStudent(null);
    }
  };

  const requestArchive = (studentId, studentName) => {
    setPendingArchive({ id: studentId, name: studentName });
  };


  // =====================================================
  // SESSION COMMENT
  // =====================================================

  const handleAddSessionComment = async (e) => {
    e.preventDefault();

    if (!newComment.trim() || !selectedStudent) return;

    const currentNotes = selectedStudent.notes || '';
    const dateText = new Date().toLocaleString('ar-MA');
    const updatedNotes = currentNotes.trim()
      ? `${currentNotes}\n\n[${dateText}] ${newComment.trim()}`
      : `[${dateText}] ${newComment.trim()}`;

    try {
      const { data, error } = await supabase
        .from('students')
        .update({
          notes: updatedNotes,
        })
        .eq('id', selectedStudent.id)
        .select('*')
        .single();

      if (error) throw error;

      setSelectedStudent({
        ...selectedStudent,
        ...data,
      });

      setNewComment('');
      await fetchData();
    } catch (error) {
      logger.error('Students.comment', error);
      setErrorMessage(`تعذر حفظ الملاحظة في قاعدة البيانات: ${error.message || 'خطأ غير معروف'}`);
    }
  };

  const sendWhatsApp = (student) => {
    const phone = student.parent_whatsapp || student.parent_phone;
    if (!phone) {
      alert('رقم واتساب الولي غير موجود.');
      return;
    }

    let clean = phone.trim().replace(/\s+/g, '').replace(/-/g, '');
    if (clean.startsWith('+')) clean = clean.substring(1);
    if (clean.startsWith('0')) clean = `212${clean.substring(1)}`;

    const message =
      `السلام عليكم ورحمة الله وبركاته،\n\n` +
      `تواصل معكم إدارة *أكاديمية إسهام* 🏫 ` +
      `بخصوص التلميذ(ة) *${student.full_name}*.\n\n` +
      `شكراً لتعاونكم. 🌹`;

    window.open(`https://wa.me/${clean}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  const filteredStudents = students.filter((student) => {
    const levelName = getLevelName(student).toLowerCase();
    const matchesLevel = levelFilter ? levelName.includes(levelFilter.toLowerCase()) : true;
    const matchesSearch = !searchKeyword || [
      student.full_name,
      student.parent_phone,
      student.parent_whatsapp,
      getTeacherForStudent(student),
      getLevelName(student),
    ].some((value) => String(value || '').toLowerCase().includes(searchKeyword.toLowerCase()));

    return matchesLevel && matchesSearch;
  });

  if (loading) {
    return (
      <div className="p-8 text-center text-slate-700 font-bold dir-rtl">
        جاري تحميل ملفات التلاميذ...
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-7xl space-y-6 dir-rtl text-right pb-10">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <h2 className="text-2xl font-black text-slate-900">إدارة ملفات التلاميذ 👥</h2>
          <p className="text-sm font-bold text-slate-600">
            إدارة معلومات التلاميذ والملفات الدراسية
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="w-full md:w-auto px-5 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-black shadow-lg shadow-orange-600/20 transition"
        >
          ➕ إضافة تلميذ جديد
        </button>
      </div>

      {errorMessage && (
        <div className="p-4 bg-red-100 border-2 border-red-400 text-red-900 rounded-xl font-bold">
          ❌ {errorMessage}
        </div>
      )}

      <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1">
            <label className="mb-1 block text-xs font-black uppercase tracking-[0.2em] text-slate-500">بحث سريع</label>
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              placeholder="ابحث باسم التلميذ، الهاتف أو الأستاذ..."
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm font-bold text-slate-800 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
            />
          </div>

          <div className="lg:w-72">
            <label className="mb-1 block text-xs font-black uppercase tracking-[0.2em] text-slate-500">فلتر المستوى</label>
            <select
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm font-bold text-slate-800 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
            >
              <option value="">كل المستويات</option>
              {levels.map((level) => (
                <option key={level.id} value={level.name_ar || level.id}>{level.name_ar || level.id}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* STUDENTS LIST */}
      {filteredStudents.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-600 shadow-inner">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7">
              <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="10" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <p className="text-xl font-black text-slate-800">لا توجد بيانات مطابقة للبحث الحالي.</p>
          <p className="text-sm font-semibold text-slate-500">جرّب تغيير فلتر المستوى أو ابحث باسم تلميذ آخر.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredStudents.map((student) => {
            return (
              <div
                key={student.id}
                className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 border-t-4 border-t-indigo-500 hover:-translate-y-0.5 hover:shadow-lg transition"
              >
                <div className="border-b pb-3">
                  <h3 className="text-xl font-black text-slate-900">{student.full_name}</h3>
                  <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-900 rounded-md text-xs font-black">
                    {getLevelName(student)}
                  </span>
                </div>

                <div className="mt-4 space-y-2 text-sm font-bold text-slate-800">
                  <p>
                    📞 هاتف الولي:
                    <span className="text-blue-700"> {maskPhone(student.parent_phone)}</span>
                  </p>
                  <p>🏫 المدرسة: {getStudentSchool(student)}</p>
                  <p>💰 الواجب الشهري: {student.monthly_fee || 0} درهم</p>
                  <p>👨‍🏫 الأستاذ: {getTeacherForStudent(student)}</p>
                </div>

                <div className="mt-5 flex gap-2">
                  <button
                    onClick={() => setSelectedStudent(student)}
                    className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-black text-xs"
                  >
                    📂 فتح الملف
                  </button>
                  <button
                    onClick={() => sendWhatsApp(student)}
                    className="px-3 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-black text-xs"
                  >
                    📲
                  </button>
                  <button
                    onClick={() => requestArchive(student.id, student.full_name)}
                    className="px-3 py-2.5 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg font-black text-xs"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* STUDENT PROFILE MODAL */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black/70 z-[99999] flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl text-slate-900 max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-5 border-b bg-white rounded-t-xl shrink-0">
              <div>
                <h3 className="text-2xl font-black text-slate-900">ملف التلميذ</h3>
                <p className="text-lg font-bold text-blue-700">{selectedStudent.full_name}</p>
              </div>
              <button
                onClick={() => setSelectedStudent(null)}
                className="px-3 py-2 bg-slate-200 hover:bg-slate-300 rounded-lg font-black text-slate-700"
              >
                ✖
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block mb-1">المستوى:</strong>
                  <p className="text-slate-800">{getLevelName(selectedStudent)}</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block mb-1">الأستاذ المسؤول:</strong>
                  <p className="text-slate-800">{getTeacherForStudent(selectedStudent)}</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block mb-1">هاتف الولي:</strong>
                  <p className="text-slate-800">{maskPhone(selectedStudent.parent_phone)}</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <strong className="text-slate-900 block mb-1">الواجب الشهري:</strong>
                  <p className="text-slate-800">{selectedStudent.monthly_fee || 0} درهم</p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <h4 className="font-black text-amber-900 mb-2">📝 ملاحظات التلميذ</h4>
                <p className="whitespace-pre-line text-slate-800">
                  {selectedStudent.notes || 'لا توجد ملاحظات.'}
                </p>
              </div>

              <div className="bg-slate-100 p-4 rounded-xl border border-slate-200">
                <h4 className="font-black text-slate-900 mb-3">✍️ إضافة ملاحظة بعد الحصة</h4>
                <form onSubmit={handleAddSessionComment} className="flex flex-col md:flex-row gap-2">
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="اكتب الملاحظة..."
                    className="flex-1 p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-black shrink-0"
                  >
                    إضافة ➕
                  </button>
                </form>
              </div>
            </div>

            <div className="p-4 border-t bg-slate-50 rounded-b-xl flex gap-2 shrink-0">
              <button
                onClick={() => sendWhatsApp(selectedStudent)}
                className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-black"
              >
                📲 تواصل مع الولي
              </button>
              <button
                onClick={() => openEditStudent(selectedStudent)}
                className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-black"
              >
                تعديل
              </button>
              <button
                onClick={() => requestArchive(selectedStudent.id, selectedStudent.full_name)}
                className="px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-black"
              >
                🗑️ أرشفة
              </button>
            </div>
          </div>
        </div>
      )}

      <ConfirmDialog
        open={Boolean(pendingArchive)}
        title="تأكيد أرشفة التلميذ"
        message={`هل أنت متأكد من أرشفة التلميذ "${pendingArchive?.name || ''}"؟ يمكنك التراجع عن العملية مباشرة.`}
        confirmLabel="أرشفة"
        onCancel={() => setPendingArchive(null)}
        onConfirm={async () => {
          const archive = pendingArchive;
          setPendingArchive(null);
          await handleDeleteStudent(archive.id);
        }}
      />

      {/* ADD STUDENT MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/70 z-[99999] flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl text-slate-900 max-h-[85vh] overflow-y-auto flex flex-col my-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-5 border-b bg-white rounded-t-xl shrink-0">
              <h3 className="text-xl font-black text-slate-900">{editingStudentId ? 'تعديل بيانات التلميذ' : 'إضافة تلميذ جديد'} 👨‍🎓</h3>
              <button
                type="button"
                onClick={() => {
                  setShowAddModal(false);
                  resetForm();
                }}
                className="px-3 py-1 bg-slate-200 hover:bg-slate-300 rounded-lg font-black text-slate-700"
              >
                ✖
              </button>
            </div>

            {/* Modal Body - Scrollable */}
            <form onSubmit={handleAddStudent} className="flex flex-col flex-1 overflow-hidden">
              <div className="p-6 overflow-y-auto space-y-4 flex-1">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div>
                    <label className="font-bold block mb-1 text-slate-800">الاسم *</label>
                    <input
                      name="first_name"
                      required
                      value={formData.first_name}
                      onChange={handleChange}
                      className="w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900"
                      placeholder="محمد"
                    />
                  </div>
                  <div>
                    <label className="font-bold block mb-1 text-slate-800">النسب *</label>
                    <input
                      name="last_name"
                      required
                      value={formData.last_name}
                      onChange={handleChange}
                      className="w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900"
                      placeholder="العلمي"
                    />
                  </div>
                </div>

                <div>
                    <label className="font-bold block mb-1 text-slate-800">المستوى الدراسي *</label>
                    <select
                      required
                      name="level_id"
                      value={formData.level_id}
                      onChange={handleChange}
                      className="w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900"
                    >
                      <option value="">اختيار المستوى</option>
                      {(levels.length ? levels : MOROCCAN_LEVELS.map((name_ar) => ({ id: name_ar, name_ar }))).map((level) => (
                        <option key={level.id} value={level.id}>{level.name_ar}</option>
                      ))}
                    </select>
                  </div>

                 <div>
                  <label className="font-bold block mb-1 text-slate-800">الأستاذ *</label>
                  <input
                    name="teacher_search"
                    required
                    list="student-teachers"
                    value={formData.teacher_search}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900"
                    placeholder={teachers.length ? 'ابحث واختر الأستاذ' : 'لا يوجد أساتذة مسجلون'}
                  />
                  <datalist id="student-teachers">
                    {teachers.filter((teacher) => {
                      const assignedLevels = Array.isArray(teacher.levels)
                        ? teacher.levels
                        : [];
                      const selectedLevel = levels.find((level) => String(level.id) === String(formData.level_id));
                      const selectedLevelNames = [formData.level_id, selectedLevel?.name_ar].filter(Boolean).map(String);
                      return !formData.level_id || !assignedLevels.length
                        || assignedLevels.map(String).some((level) => selectedLevelNames.includes(level));
                    }).map((teacher) => {
                      const name = teacher.full_name || teacher.fullName || teacher.name || teacher.displayName;
                      return <option key={teacher.id} value={name || 'أستاذ غير مسمى'} />;
                    })}
                  </datalist>
                  {!teachers.length && (
                    <p className="mt-1 text-xs font-bold text-amber-700">أضف أستاذاً من صفحة إدارة الأساتذة أولاً.</p>
                  )}
                </div>

                {formData.teacher_id && formData.subjects.length > 0 && (
                  <div className="rounded-lg border border-blue-100 bg-blue-50 p-3">
                    <p className="mb-2 text-xs font-black text-blue-900">المواد المتاحة مع هذا الأستاذ</p>
                    <div className="flex flex-wrap gap-2">
                      {formData.subjects.map((subject) => (
                        <span key={subject} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-blue-800 shadow-sm">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <label className="font-bold block mb-1 text-slate-800">المدرسة التي يدرس فيها *</label>
                  <input
                    name="original_school"
                    required
                    value={formData.original_school}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900"
                    placeholder="اسم المدرسة"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold block mb-1 text-slate-800">هاتف الولي (WhatsApp) *</label>
                    <input
                      name="parent_phone"
                      required
                      value={formData.parent_phone}
                      onChange={handleChange}
                      className="w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900"
                      placeholder="0612345678"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold block mb-1 text-slate-800">الواجب الشهري (درهم)</label>
                  <input
                    type="number"
                    min="0"
                    name="monthly_fee"
                    value={formData.monthly_fee}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900"
                  />
                </div>

              </div>

              {/* Modal Footer - Fixed Bottom Buttons */}
              <div className="p-4 border-t bg-slate-50 rounded-b-xl flex gap-2 shrink-0">
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-black disabled:opacity-50"
                >
                  {saving ? 'جاري الحفظ...' : editingStudentId ? 'حفظ التعديلات ✅' : 'حفظ التلميذ ✅'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAddModal(false);
                    resetForm();
                  }}
                  className="px-5 py-3 bg-slate-200 hover:bg-slate-300 rounded-lg font-black text-slate-800"
                >
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}