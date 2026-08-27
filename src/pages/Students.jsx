import React, { useCallback, useEffect, useState } from 'react';
import { supabase } from '../supabase';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [levels, setLevels] = useState([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [newComment, setNewComment] = useState('');

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    full_name: '',
    level_id: '',
    class_id: '',
    parent_name: '',
    parent_phone: '',
    parent_whatsapp: '',
    phone: '',
    original_school: '',
    monthly_fee: '',
    notes: '',
    status: 'active',
    archived: false,
    date_of_birth: '',
  });

  // =====================================================
  // LOAD DATA
  // =====================================================

  const fetchData = useCallback(async () => {
    setLoading(true);
    setErrorMessage('');

    try {
      const [
        studentsResult,
        teachersResult,
        levelsResult,
      ] = await Promise.all([
        supabase
          .from('students')
          .select('*')
          .eq('archived', false)
          .order('full_name', { ascending: true }),

        supabase
          .from('teachers')
          .select('*')
          .eq('status', 'active')
          .order('full_name', { ascending: true }),

        supabase
          .from('levels')
          .select('*')
          .eq('is_active', true)
          .order('name_ar', { ascending: true }),
      ]);

      if (studentsResult.error) throw studentsResult.error;
      if (teachersResult.error) throw teachersResult.error;
      if (levelsResult.error) throw levelsResult.error;

      setStudents(studentsResult.data || []);
      setTeachers(teachersResult.data || []);
      setLevels(levelsResult.data || []);
    } catch (error) {
      console.error('Students loading error:', error);
      setErrorMessage(
        error?.message || 'تعذر تحميل بيانات التلاميذ.'
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // =====================================================
  // HELPER TO GET LEVEL NAME
  // =====================================================

  const getLevelName = (student) => {
    if (student.levels?.name_ar) return student.levels.name_ar;
    if (student.level_id && levels.length > 0) {
      const found = levels.find((l) => l.id === student.level_id);
      if (found) return found.name_ar;
    }
    return student.academic_level || 'المستوى غير محدد';
  };

  // =====================================================
  // FORM
  // =====================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData({
      first_name: '',
      last_name: '',
      full_name: '',
      level_id: '',
      class_id: '',
      parent_name: '',
      parent_phone: '',
      parent_whatsapp: '',
      phone: '',
      original_school: '',
      monthly_fee: '',
      notes: '',
      status: 'active',
      archived: false,
      date_of_birth: '',
    });
  };

  // =====================================================
  // ADD STUDENT
  // =====================================================

  const handleAddStudent = async (e) => {
    e.preventDefault();

    if (!formData.full_name.trim()) {
      alert('المرجو إدخال اسم التلميذ.');
      return;
    }

    if (!formData.parent_phone.trim()) {
      alert('المرجو إدخال رقم هاتف الولي.');
      return;
    }

    setSaving(true);
    setErrorMessage('');

    try {
      const payload = {
        first_name:
          formData.first_name.trim() || null,

        last_name:
          formData.last_name.trim() || null,

        full_name:
          formData.full_name.trim(),

        level_id:
          formData.level_id || null,

        class_id:
          formData.class_id || null,

        parent_name:
          formData.parent_name.trim() || null,

        parent_phone:
          formData.parent_phone.trim(),

        parent_whatsapp:
          formData.parent_whatsapp.trim() ||
          formData.parent_phone.trim(),

        phone:
          formData.phone.trim() || null,

        original_school:
          formData.original_school.trim() || null,

        monthly_fee:
          formData.monthly_fee === ''
            ? 0
            : Number(formData.monthly_fee),

        notes:
          formData.notes.trim() || null,

        status: 'active',
        archived: false,

        date_of_birth:
          formData.date_of_birth || null,
      };

      const { error } = await supabase
        .from('students')
        .insert(payload);

      if (error) throw error;

      alert('تمت إضافة التلميذ بنجاح ✅');

      setShowAddModal(false);
      resetForm();

      await fetchData();
    } catch (error) {
      console.error('Add student error:', error);

      setErrorMessage(
        error?.message ||
          'حدث خطأ أثناء إضافة التلميذ.'
      );
    } finally {
      setSaving(false);
    }
  };

  // =====================================================
  // DELETE / ARCHIVE STUDENT
  // =====================================================

  const handleDeleteStudent = async (
    studentId,
    studentName
  ) => {
    const confirmed = window.confirm(
      `هل أنت متأكد من حذف/أرشفة التلميذ "${studentName}"؟`
    );

    if (!confirmed) return;

    try {
      const { error } = await supabase
        .from('students')
        .update({
          archived: true,
          status: 'inactive',
          updated_at: new Date().toISOString(),
        })
        .eq('id', studentId);

      if (error) throw error;

      if (
        selectedStudent &&
        selectedStudent.id === studentId
      ) {
        setSelectedStudent(null);
      }

      await fetchData();
    } catch (error) {
      console.error('Delete student error:', error);

      setErrorMessage(
        error?.message ||
          'حدث خطأ أثناء أرشفة التلميذ.'
      );
    }
  };

  // =====================================================
  // SESSION COMMENT
  // =====================================================

  const handleAddSessionComment = async (e) => {
    e.preventDefault();

    if (!newComment.trim() || !selectedStudent) {
      return;
    }

    const currentNotes =
      selectedStudent.notes || '';

    const dateText =
      new Date().toLocaleString('ar-MA');

    const updatedNotes =
      currentNotes.trim()
        ? `${currentNotes}\n\n[${dateText}] ${newComment.trim()}`
        : `[${dateText}] ${newComment.trim()}`;

    try {
      const { data, error } = await supabase
        .from('students')
        .update({
          notes: updatedNotes,
          updated_at: new Date().toISOString(),
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
      console.error(
        'Comment save error:',
        error
      );

      setErrorMessage(
        error?.message ||
          'تعذر حفظ الملاحظة.'
      );
    }
  };

  // =====================================================
  // TEACHER
  // =====================================================

  const getTeacherForStudent = (student) => {
    return null;
  };

  // =====================================================
  // WHATSAPP
  // =====================================================

  const sendWhatsApp = (student) => {
    const phone =
      student.parent_whatsapp ||
      student.parent_phone;

    if (!phone) {
      alert(
        'رقم واتساب الولي غير موجود.'
      );
      return;
    }

    let clean = phone
      .trim()
      .replace(/\s+/g, '')
      .replace(/-/g, '');

    if (clean.startsWith('+')) {
      clean = clean.substring(1);
    }

    if (clean.startsWith('0')) {
      clean = `212${clean.substring(1)}`;
    }

    const message =
      `السلام عليكم ورحمة الله وبركاته،\n\n` +
      `تواصل معكم إدارة *أكاديمية إسهام* 🏫 ` +
      `بخصوص التلميذ(ة) *${student.full_name}*.\n\n` +
      `شكراً لتعاونكم. 🌹`;

    window.open(
      `https://wa.me/${clean}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <div className="p-8 text-center text-slate-700 font-bold dir-rtl">
        جاري تحميل ملفات التلاميذ...
      </div>
    );
  }

  // =====================================================
  // UI
  // =====================================================

  return (
    <div className="space-y-6 dir-rtl text-right pb-10">

      {/* HEADER */}

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-5 rounded-xl shadow-md border border-slate-300">

        <div>
          <h2 className="text-2xl font-black text-slate-900">
            إدارة ملفات التلاميذ 👥
          </h2>

          <p className="text-sm font-bold text-slate-600">
            إدارة معلومات التلاميذ والملفات الدراسية
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-black shadow-md"
        >
          ➕ إضافة تلميذ جديد
        </button>
      </div>

      {/* ERROR */}

      {errorMessage && (
        <div className="p-4 bg-red-100 border-2 border-red-400 text-red-900 rounded-xl font-bold">
          ❌ {errorMessage}
        </div>
      )}

      {/* STUDENTS */}

      {students.length === 0 ? (
        <div className="bg-white rounded-xl border p-8 text-center font-bold text-slate-600">
          لا يوجد تلاميذ حالياً.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {students.map((student) => {
            const teacher =
              getTeacherForStudent(student);

            return (
              <div
                key={student.id}
                className="bg-white rounded-xl shadow-md border border-slate-300 p-5 border-t-4 border-t-blue-600"
              >

                <div className="border-b pb-3">
                  <h3 className="text-xl font-black text-slate-900">
                    {student.full_name}
                  </h3>

                  <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-900 rounded-md text-xs font-black">
                    {getLevelName(student)}
                  </span>
                </div>

                <div className="mt-4 space-y-2 text-sm font-bold text-slate-800">

                  <p>
                    📞 هاتف الولي:
                    <span className="text-blue-700">
                      {' '}
                      {student.parent_phone || '—'}
                    </span>
                  </p>

                  <p>
                    🏫 المدرسة:
                    {' '}
                    {student.original_school || '—'}
                  </p>

                  <p>
                    💰 الواجب الشهري:
                    {' '}
                    {student.monthly_fee || 0} درهم
                  </p>

                  <p>
                    👨‍🏫 الأستاذ:
                    {' '}
                    {teacher?.full_name || 'غير محدد'}
                  </p>

                </div>

                <div className="mt-5 flex gap-2">

                  <button
                    onClick={() =>
                      setSelectedStudent(student)
                    }
                    className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-black text-xs"
                  >
                    📂 فتح الملف
                  </button>

                  <button
                    onClick={() =>
                      sendWhatsApp(student)
                    }
                    className="px-3 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-black text-xs"
                  >
                    📲
                  </button>

                  <button
                    onClick={() =>
                      handleDeleteStudent(
                        student.id,
                        student.full_name
                      )
                    }
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
        <div 
          className="fixed inset-0 bg-black/70 z-[9999] p-4 flex items-center justify-center overflow-y-auto"
          style={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0 }}
        >
          <div 
            className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-3xl text-slate-900"
            style={{ maxHeight: '85vh', overflowY: 'auto', margin: 'auto' }}
          >

            <div className="flex justify-between items-center border-b pb-3 mb-5 sticky top-0 bg-white z-20">

              <div>
                <h3 className="text-2xl font-black text-slate-900">
                  ملف التلميذ
                </h3>

                <p className="text-lg font-bold text-blue-700">
                  {selectedStudent.full_name}
                </p>
              </div>

              <button
                onClick={() =>
                  setSelectedStudent(null)
                }
                className="px-3 py-2 bg-slate-200 hover:bg-slate-300 rounded-lg font-black text-slate-700"
              >
                ✖
              </button>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <strong className="text-slate-900">المستوى:</strong>
                <p className="text-slate-800">
                  {getLevelName(selectedStudent)}
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <strong className="text-slate-900">القسم:</strong>
                <p className="text-slate-800">
                  {selectedStudent.classes?.name ||
                    'غير محدد'}
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <strong className="text-slate-900">هاتف الولي:</strong>
                <p className="text-slate-800">
                  {selectedStudent.parent_phone ||
                    'غير موجود'}
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <strong className="text-slate-900">الواجب الشهري:</strong>
                <p className="text-slate-800">
                  {selectedStudent.monthly_fee || 0} درهم
                </p>
              </div>

            </div>

            <div className="mt-5 bg-amber-50 border border-amber-200 rounded-xl p-4">

              <h4 className="font-black text-amber-900 mb-2">
                📝 ملاحظات التلميذ
              </h4>

              <p className="whitespace-pre-line text-slate-800">
                {selectedStudent.notes ||
                  'لا توجد ملاحظات.'}
              </p>

            </div>

            <div className="mt-5 bg-slate-100 p-4 rounded-xl border border-slate-200">

              <h4 className="font-black text-slate-900 mb-3">
                ✍️ إضافة ملاحظة بعد الحصة
              </h4>

              <form
                onSubmit={handleAddSessionComment}
                className="flex flex-col md:flex-row gap-2"
              >

                <input
                  type="text"
                  value={newComment}
                  onChange={(e) =>
                    setNewComment(e.target.value)
                  }
                  placeholder="اكتب الملاحظة..."
                  className="flex-1 p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900"
                />

                <button
                  type="submit"
                  className="px-5 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-black"
                >
                  إضافة ➕
                </button>

              </form>

            </div>

            <div className="mt-5 flex gap-2">

              <button
                onClick={() =>
                  sendWhatsApp(selectedStudent)
                }
                className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-black"
              >
                📲 تواصل مع الولي
              </button>

              <button
                onClick={() =>
                  handleDeleteStudent(
                    selectedStudent.id,
                    selectedStudent.full_name
                  )
                }
                className="px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-black"
              >
                🗑️ أرشفة
              </button>

            </div>

          </div>
        </div>
      )}

      {/* ADD STUDENT MODAL */}

      {showAddModal && (
        <div 
          className="fixed inset-0 bg-black/70 z-[9999] p-4 flex items-center justify-center overflow-y-auto"
          style={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0 }}
        >
          <div 
            className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-2xl text-slate-900"
            style={{ maxHeight: '85vh', overflowY: 'auto', margin: 'auto' }}
          >

            <div className="flex justify-between items-center border-b pb-3 mb-5 sticky top-0 bg-white z-20">
              <h3 className="text-xl font-black text-slate-900">
                إضافة تلميذ جديد 👨‍🎓
              </h3>
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

            <form
              onSubmit={handleAddStudent}
              className="space-y-4"
            >

              <div className="grid md:grid-cols-2 gap-3">

                <div>
                  <label className="font-bold block mb-1 text-slate-800">
                    الاسم الأول
                  </label>

                  <input
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900"
                  />
                </div>

                <div>
                  <label className="font-bold block mb-1 text-slate-800">
                    النسب
                  </label>

                  <input
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900"
                  />
                </div>

              </div>

              <div>
                <label className="font-bold block mb-1 text-slate-800">
                  الاسم الكامل *
                </label>

                <input
                  name="full_name"
                  required
                  value={formData.full_name}
                  onChange={handleChange}
                  className="w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900"
                  placeholder="مثال: محمد العلمي"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-3">

                <div>
                  <label className="font-bold block mb-1 text-slate-800">
                    المستوى الدراسي
                  </label>

                  <select
                    name="level_id"
                    value={formData.level_id}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900"
                  >

                    <option value="">
                      اختيار المستوى
                    </option>

                    {levels.map((level) => (
                      <option
                        key={level.id}
                        value={level.id}
                      >
                        {level.name_ar}
                      </option>
                    ))}

                  </select>
                </div>

                <div>
                  <label className="font-bold block mb-1 text-slate-800">
                    تاريخ الازدياد
                  </label>

                  <input
                    type="date"
                    name="date_of_birth"
                    value={formData.date_of_birth}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900"
                  />
                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-3">

                <div>
                  <label className="font-bold block mb-1 text-slate-800">
                    اسم الولي
                  </label>

                  <input
                    name="parent_name"
                    value={formData.parent_name}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900"
                  />
                </div>

                <div>
                  <label className="font-bold block mb-1 text-slate-800">
                    هاتف الولي *
                  </label>

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

              <div className="grid md:grid-cols-2 gap-3">

                <div>
                  <label className="font-bold block mb-1 text-slate-800">
                    هاتف التلميذ
                  </label>

                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900"
                  />
                </div>

                <div>
                  <label className="font-bold block mb-1 text-slate-800">
                    المدرسة الأصلية
                  </label>

                  <input
                    name="original_school"
                    value={formData.original_school}
                    onChange={handleChange}
                    className="w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900"
                  />
                </div>

              </div>

              <div>
                <label className="font-bold block mb-1 text-slate-800">
                  الواجب الشهري
                </label>

                <input
                  type="number"
                  min="0"
                  name="monthly_fee"
                  value={formData.monthly_fee}
                  onChange={handleChange}
                  className="w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900"
                />
              </div>

              <div>
                <label className="font-bold block mb-1 text-slate-800">
                  📝 ملاحظات
                </label>

                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full p-3 border-2 border-slate-300 rounded-lg bg-white text-slate-900"
                />
              </div>

              <div className="flex gap-2 pt-3 border-t sticky bottom-0 bg-white z-20">

                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-black disabled:opacity-50"
                >
                  {saving
                    ? 'جاري الحفظ...'
                    : 'حفظ التلميذ ✅'}
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