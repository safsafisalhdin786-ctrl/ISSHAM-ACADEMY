import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabase';
import ConfirmDialog from '../components/ConfirmDialog';
import { maskPhone } from '../utils/security';
import logger from '../utils/logger';

const SUBJECTS_LIST = [
  'الرياضيات',
  'الفيزياء والكيمياء',
  'علوم الحياة والأرض',
  'اللغة الفرنسية',
  'اللغة الإنجليزية',
  'اللغة العربية',
  'الفلسفة',
  'الاجتماعيات',
  'مادة أخرى'
];
const TEACHER_TYPES = [
  { value: 'primary', label: 'التعليم الابتدائي' },
  { value: 'middle', label: 'التعليم الإعدادي / الثانوي' },
];
const LEVELS_LIST = [
  'الأول ابتدائي', 'الثاني ابتدائي', 'الثالث ابتدائي', 'الرابع ابتدائي',
  'الخامس ابتدائي', 'السادس ابتدائي', 'الأولى إعدادي', 'الثانية إعدادي',
  'الثالثة إعدادي', 'الجذع المشترك', 'الأولى باكالوريا', 'الثانية باكالوريا',
];

const decodeTeacherDetails = (teacher) => {
  try {
    const details = typeof teacher.subject === 'string' ? JSON.parse(teacher.subject) : teacher.subject;
    if (details && typeof details === 'object' && Array.isArray(details.subjects)) {
      return {
        teacherType: details.teacherType || 'middle',
        subjects: details.subjects,
        levels: Array.isArray(details.levels) ? details.levels : [],
      };
    }
  } catch {
    // Legacy records store a single subject as plain text.
  }
  return {
    teacherType: 'middle',
    subjects: teacher.subject ? [teacher.subject] : [],
    levels: Array.isArray(teacher.levels) ? teacher.levels : [],
  };
};

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('');

  // حالة التحكم في نافذة التأكيد (Modal)
  const [deleteModal, setDeleteModal] = useState({ show: false, id: null, name: '' });
  const [deleting, setDeleting] = useState(false);

  const [form, setForm] = useState({
    fullName: '',
    teacherType: 'middle',
    subjects: ['الرياضيات'],
    levels: [],
    phone: '',
    salary: ''
  });

  // جلب البيانات من قاعدة الأكاديمية المركزية
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from('teachers').select('*').order('full_name', { ascending: true });
      if (error) throw error;
      const teachersList = (data || []).map((teacher) => ({
        ...teacher,
        ...decodeTeacherDetails(teacher),
        displayName: teacher.full_name || teacher.fullName || teacher.name || 'أستاذ غير مسمى',
      }));
      setTeachers(teachersList);
    } catch (error) {
      logger.error('Teachers.fetchData', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // حفظ أو تعديل أستاذ
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.phone.trim() || form.subjects.length === 0) {
      setErrorMessage('المرجو إدخال الاسم والهاتف واختيار مادة واحدة على الأقل.');
      return;
    }
    const duplicate = teachers.some((teacher) => (
      teacher.id !== editingId
      && teacher.phone?.replace(/\D/g, '') === form.phone.replace(/\D/g, '')
    ));
    if (duplicate) {
      setErrorMessage('هذا الأستاذ مسجل مسبقاً بنفس رقم الهاتف.');
      return;
    }
    setSaving(true);
    setErrorMessage('');
    try {
      const payload = {
        full_name: form.fullName.trim(),
        subject: JSON.stringify({
          teacherType: form.teacherType,
          subjects: form.subjects,
          levels: form.levels,
        }),
        phone: form.phone.trim(),
        salary: form.salary ? Number(form.salary) : 0,
        status: 'active',
      };

      if (editingId) {
        const { error } = await supabase.from('teachers').update(payload).eq('id', editingId);
        if (error) throw error;
        setEditingId(null);
      } else {
        const { error } = await supabase.from('teachers').insert(payload);
        if (error) throw error;
      }

      setForm({ fullName: '', teacherType: 'middle', subjects: ['الرياضيات'], levels: [], phone: '', salary: '' });
      setShowAddForm(false);
      fetchData();
    } catch (error) {
      logger.error('Teachers.save', error);
      setErrorMessage(`تعذر حفظ بيانات الأستاذ: ${error.message || 'خطأ غير معروف'}`);
    } finally {
      setSaving(false);
    }
  };

  // تجهيز النموذج للتعديل
  const handleEdit = (teacher) => {
    setForm({
      fullName: teacher.full_name || teacher.fullName || teacher.name || '',
      teacherType: teacher.teacherType || 'middle',
      subjects: teacher.subjects?.length ? teacher.subjects : ['الرياضيات'],
      levels: teacher.levels || [],
      phone: teacher.phone || '',
      salary: teacher.salary || ''
    });
    setEditingId(teacher.id);
    setShowAddForm(true);
  };

  // فتح نافذة التأكيد
  const confirmDelete = (id, name) => {
    setDeleteModal({ show: true, id, name });
  };

  // تنفيذ الحذف النهائي
  const executeDelete = async () => {
    if (!deleteModal.id) return;
    setDeleting(true);
    try {
      const { error } = await supabase.from('teachers').update({
        status: 'inactive',
      }).eq('id', deleteModal.id);
      if (error) throw error;
      setDeleteModal({ show: false, id: null, name: '' });
      fetchData();
    } catch (error) {
      logger.error('Teachers.delete', error);
    } finally {
      setDeleting(false);
    }
  };

  // فتح المحادثة المباشرة عبر الواتساب
  const openWhatsApp = (phone) => {
    if (!phone) return alert('رقم الهاتف غير متوفر!');
    let clean = phone.trim().replace(/\s+/g, '').replace(/-/g, '');
    if (clean.startsWith('0')) clean = '212' + clean.substring(1);
    if (clean.startsWith('+')) clean = clean.substring(1);
    window.open(`https://wa.me/${clean}`, '_blank');
  };

  // تصفية الأساتذة حسب البحث والمادة
  const filteredTeachers = teachers.filter(t => {
    const matchesSearch = t.displayName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          t.phone?.includes(searchTerm);
    const matchesSubject = subjectFilter ? (t.subjects || []).includes(subjectFilter) : true;
    return matchesSearch && matchesSubject;
  });

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-6 space-y-6 dir-rtl text-right max-w-full pb-12">
      {/* Header Card */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-5 rounded-xl shadow-sm border border-slate-200 gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            إدارة الأساتذة 👨‍🏫
          </h2>
          <p className="text-sm text-slate-500 mt-1">إضافة وتتبع الطاقم التربوي لأكاديمية إسهام</p>
        </div>
        {errorMessage && (
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm font-bold text-rose-800">
            {errorMessage}
          </div>
        )}
        
        {/* زر إضافة أستاذ جديد بارز */}
        <button 
          onClick={() => {
            setShowAddForm(!showAddForm);
            setEditingId(null);
            setForm({ fullName: '', teacherType: 'middle', subjects: ['الرياضيات'], levels: [], phone: '', salary: '' });
          }}
          className={`px-5 py-2.5 text-white rounded-lg transition font-bold text-sm shadow-md flex items-center gap-2 cursor-pointer ${
            showAddForm 
              ? 'bg-slate-700 hover:bg-slate-800' 
              : 'bg-orange-600 hover:bg-orange-700'
          }`}
        >
          <span>{showAddForm ? '✕' : '+'}</span>
          <span>{showAddForm ? 'إلغاء النافذة' : 'إضافة أستاذ جديد'}</span>
        </button>
      </div>

      {/* Form Card */}
      {showAddForm && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md border-2 border-amber-300 space-y-4 transition-all">
          <div className="flex justify-between items-center border-b border-slate-200 pb-3">
            <h3 className="text-md font-bold text-slate-800 flex items-center gap-2">
              <span>{editingId ? '✏️' : '➕'}</span>
              {editingId ? 'تعديل بيانات الأستاذ' : 'إضافة أستاذ جديد'}
            </h3>
            <button 
              type="button" 
              onClick={() => setShowAddForm(false)}
              className="text-slate-400 hover:text-slate-600 text-sm font-bold"
            >
              إغلاق ✕
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <label className="block text-slate-700 font-bold mb-1">الاسم الكامل *</label>
              <input 
                type="text" 
                value={form.fullName} 
                onChange={e => setForm({ ...form, fullName: e.target.value })} 
                required 
                placeholder="مثال: أستاذ عبد الله"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none" 
              />
            </div>
            <div>
              <label className="block text-slate-700 font-bold mb-1">نوع الأستاذ</label>
              <select
                value={form.teacherType}
                onChange={e => setForm({ ...form, teacherType: e.target.value })}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white focus:ring-2 focus:ring-amber-500 focus:outline-none cursor-pointer"
              >
                {TEACHER_TYPES.map(type => <option key={type.value} value={type.value}>{type.label}</option>)}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-slate-700 font-bold mb-2">المواد التي يدرسها</label>
              <div className="grid grid-cols-2 gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3 sm:grid-cols-3">
                {SUBJECTS_LIST.map((subject) => (
                  <label key={subject} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <input
                      type="checkbox"
                      checked={form.subjects.includes(subject)}
                      onChange={() => setForm((current) => ({
                        ...current,
                        subjects: current.subjects.includes(subject)
                          ? current.subjects.filter((item) => item !== subject)
                          : [...current.subjects, subject],
                      }))}
                    />
                    {subject}
                  </label>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="block text-slate-700 font-bold mb-2">المستويات المسندة</label>
              <div className="grid grid-cols-2 gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3 sm:grid-cols-3">
                {LEVELS_LIST.map((level) => (
                  <label key={level} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <input
                      type="checkbox"
                      checked={form.levels.includes(level)}
                      onChange={() => setForm((current) => ({
                        ...current,
                        levels: current.levels.includes(level)
                          ? current.levels.filter((item) => item !== level)
                          : [...current.levels, level],
                      }))}
                    />
                    {level}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-slate-700 font-bold mb-1">رقم الهاتف *</label>
              <input 
                type="text" 
                value={form.phone} 
                onChange={e => setForm({ ...form, phone: e.target.value })} 
                required 
                placeholder="06XXXXXXXX"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none" 
              />
            </div>
            <div>
              <label className="block text-slate-700 font-bold mb-1">المستحقات الشهريّة (درهم)</label>
              <input 
                type="number" 
                value={form.salary} 
                onChange={e => setForm({ ...form, salary: e.target.value })} 
                placeholder="مثال: 1500"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none" 
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
            <button 
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold transition cursor-pointer"
            >
              إلغاء
            </button>
            <button 
              type="submit" 
              disabled={saving} 
              className="px-5 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm font-bold transition shadow-sm cursor-pointer disabled:opacity-50 flex items-center gap-2"
            >
              {saving ? 'جاري الحفظ...' : 'حفظ البيانات ✅'}
            </button>
          </div>
        </form>
      )}

      {/* Control Bar (البحث والفلترة) */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <input 
            type="text" 
            placeholder="🔍 البحث باسم الأستاذ أو الهاتف..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded-lg w-full md:w-64 focus:ring-2 focus:ring-amber-500 focus:outline-none text-sm"
          />

          <select 
            value={subjectFilter} 
            onChange={(e) => setSubjectFilter(e.target.value)}
            className="px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white cursor-pointer"
          >
            <option value="">جميع المواد</option>
            {SUBJECTS_LIST.map(sub => (
              <option key={sub} value={sub}>{sub}</option>
            ))}
          </select>
        </div>

        <div className="text-xs font-bold text-slate-600">
          إجمالي الأساتذة: <span className="text-amber-600 font-bold text-sm bg-amber-50 px-2 py-1 rounded-md border border-amber-200">{filteredTeachers.length}</span>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-slate-500 font-bold">جاري تحميل لائحة الأساتذة...</div>
        ) : filteredTeachers.length === 0 ? (
          <div className="p-10 text-center text-slate-500 space-y-3">
            <p className="text-base font-bold text-slate-700">لا يوجد أساتذة مطابقون للبحث.</p>
            {!showAddForm && (
              <button 
                onClick={() => setShowAddForm(true)}
                className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-xs font-bold transition shadow-sm"
              >
                + إضافة أستاذ الآن
              </button>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse min-w-[650px]">
              <thead className="bg-slate-100 border-b border-slate-200 text-xs text-slate-700 font-bold">
                <tr>
                  <th className="p-4">الاسم الكامل</th>
                  <th className="p-4">المادة</th>
                  <th className="p-4">رقم الهاتف</th>
                  <th className="p-4">المستحقات الشهريّة</th>
                  <th className="p-4 text-center">الإجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {filteredTeachers.map(teacher => (
                  <tr key={teacher.id} className="hover:bg-slate-50 transition">
                    <td className="p-4 font-bold text-slate-900">{teacher.displayName}</td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 bg-amber-50 text-amber-800 rounded-md text-xs font-semibold border border-amber-200">
                        {teacher.subjects?.length ? teacher.subjects.join('، ') : 'غير محدد'}
                      </span>
                    </td>
                    <td className="p-4 font-mono text-xs" dir="ltr">
                      <div className="flex items-center gap-2 justify-end">
                        <span className="font-semibold text-slate-800">{maskPhone(teacher.phone)}</span>
                        {teacher.phone && (
                          <button
                            onClick={() => openWhatsApp(teacher.phone)}
                            className="text-emerald-600 hover:text-emerald-700 text-base cursor-pointer"
                            title="تواصل عبر الواتساب"
                          >
                            💬
                          </button>
                        )}
                      </div>
                    </td>
                    <td className="p-4 font-semibold text-slate-800">
                      {teacher.salary ? `${teacher.salary} درهم` : '---'}
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button 
                          onClick={() => handleEdit(teacher)} 
                          className="px-2.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 rounded text-xs font-bold transition cursor-pointer"
                        >
                          ✏️ تعديل
                        </button>
                        <button 
                          onClick={() => confirmDelete(teacher.id, teacher.displayName)} 
                          className="px-2.5 py-1 bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100 rounded text-xs font-bold transition cursor-pointer"
                        >
                          🗑️ حذف
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <ConfirmDialog
        open={deleteModal.show}
        title="تأكيد تعطيل الأستاذ"
        message={`هل أنت متأكد من تعطيل الأستاذ "${deleteModal.name}"؟ سيبقى السجل محفوظاً ولن تُحذف العلاقات.`}
        confirmLabel="تعطيل"
        busy={deleting}
        onCancel={() => setDeleteModal({ show: false, id: null, name: '' })}
        onConfirm={executeDelete}
      />
    </div>
  );
}