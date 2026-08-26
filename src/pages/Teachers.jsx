import React, { useState, useEffect, useCallback } from 'react';
import { db } from '../firebase';
import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  serverTimestamp 
} from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';

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

export default function Teachers() {
  const { userRole } = useAuth ? useAuth() : { userRole: 'admin' };

  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [subjectFilter, setSubjectFilter] = useState('');

  // حالة التحكم في نافذة التأكيد (Modal)
  const [deleteModal, setDeleteModal] = useState({ show: false, id: null, name: '' });
  const [deleting, setDeleting] = useState(false);

  const [form, setForm] = useState({
    fullName: '',
    subject: 'الرياضيات',
    phone: '',
    salary: ''
  });

  // جلب البيانات من Firestore
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const teachersSnap = await getDocs(collection(db, 'teachers'));
      const teachersList = teachersSnap.docs.map(d => ({
        id: d.id,
        ...d.data(),
        displayName: d.data().fullName || d.data().name || 'أستاذ غير مسمى'
      }));
      setTeachers(teachersList);
    } catch (error) {
      console.error("خطأ في جلب البيانات:", error);
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
    setSaving(true);
    try {
      const payload = {
        fullName: form.fullName.trim(),
        name: form.fullName.trim(),
        subject: form.subject,
        phone: form.phone.trim(),
        salary: form.salary ? Number(form.salary) : 0,
        updatedAt: serverTimestamp()
      };

      if (editingId) {
        await updateDoc(doc(db, 'teachers', editingId), payload);
        setEditingId(null);
      } else {
        await addDoc(collection(db, 'teachers'), {
          ...payload,
          createdAt: serverTimestamp()
        });
      }

      setForm({ fullName: '', subject: 'الرياضيات', phone: '', salary: '' });
      setShowAddForm(false);
      fetchData();
    } catch (error) {
      console.error("خطأ في الحفظ:", error);
    } finally {
      setSaving(false);
    }
  };

  // تجهيز النموذج للتعديل
  const handleEdit = (teacher) => {
    setForm({
      fullName: teacher.fullName || teacher.name || '',
      subject: teacher.subject || 'الرياضيات',
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
      await deleteDoc(doc(db, 'teachers', deleteModal.id));
      setDeleteModal({ show: false, id: null, name: '' });
      fetchData();
    } catch (error) {
      console.error("خطأ في الحذف:", error);
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
    const matchesSubject = subjectFilter ? t.subject === subjectFilter : true;
    return matchesSearch && matchesSubject;
  });

  return (
    <div className="space-y-6 dir-rtl text-right max-w-full pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-5 rounded-xl shadow-sm border border-slate-200 gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            إدارة الأساتذة 👨‍🏫
          </h2>
          <p className="text-sm text-slate-500">إضافة وتتبع الطاقم التربوي لأكاديمية إسهام</p>
        </div>
        {userRole === 'admin' && (
          <button 
            onClick={() => {
              setShowAddForm(!showAddForm);
              setEditingId(null);
              setForm({ fullName: '', subject: 'الرياضيات', phone: '', salary: '' });
            }}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition font-bold text-sm shadow-sm cursor-pointer whitespace-nowrap"
          >
            {showAddForm ? 'إلغاء' : '+ إضافة أستاذ'}
          </button>
        )}
      </div>

      {/* Form */}
      {showAddForm && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md border border-indigo-100 space-y-4">
          <h3 className="text-md font-bold text-slate-800 border-b pb-2">
            {editingId ? 'تعديل بيانات الأستاذ' : 'بيانات الأستاذ الجديد'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <label className="block text-slate-700 font-medium mb-1">الاسم الكامل</label>
              <input 
                type="text" 
                value={form.fullName} 
                onChange={e => setForm({ ...form, fullName: e.target.value })} 
                required 
                placeholder="مثال: أستاذ عبد الله"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
              />
            </div>
            <div>
              <label className="block text-slate-700 font-medium mb-1">المادة المدرسة</label>
              <select 
                value={form.subject} 
                onChange={e => setForm({ ...form, subject: e.target.value })} 
                className="w-full px-3 py-2 border border-slate-300 rounded-lg bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none cursor-pointer"
              >
                {SUBJECTS_LIST.map(sub => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-slate-700 font-medium mb-1">رقم الهاتف</label>
              <input 
                type="text" 
                value={form.phone} 
                onChange={e => setForm({ ...form, phone: e.target.value })} 
                required 
                placeholder="06XXXXXXXX"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
              />
            </div>
            <div>
              <label className="block text-slate-700 font-medium mb-1">المستحقات الشهريّة (درهم)</label>
              <input 
                type="number" 
                value={form.salary} 
                onChange={e => setForm({ ...form, salary: e.target.value })} 
                placeholder="مثال: 1500"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button 
              type="submit" 
              disabled={saving} 
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-bold transition shadow-sm cursor-pointer disabled:opacity-50"
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
            className="px-4 py-2 border border-slate-300 rounded-lg w-full md:w-64 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
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

        <div className="text-xs font-bold text-slate-500">
          إجمالي الأساتذة: <span className="text-indigo-600">{filteredTeachers.length}</span>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {loading ? (
          <div className="p-6 text-center text-slate-500 font-bold">جاري تحميل لائحة الأساتذة...</div>
        ) : filteredTeachers.length === 0 ? (
          <div className="p-6 text-center text-slate-400">لا يوجد أساتذة مطابقون للبحث.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse min-w-[650px]">
              <thead className="bg-slate-50 border-b border-slate-200 text-xs text-slate-600 font-bold">
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
                    <td className="p-4 font-bold text-slate-800">{teacher.displayName}</td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded-md text-xs font-semibold border border-indigo-100">
                        {teacher.subject || 'غير محدد'}
                      </span>
                    </td>
                    <td className="p-4 font-mono text-xs" dir="ltr">
                      <div className="flex items-center gap-2">
                        <span>{teacher.phone || '---'}</span>
                        {teacher.phone && (
                          <button
                            onClick={() => openWhatsApp(teacher.phone)}
                            className="text-emerald-600 hover:text-emerald-700 cursor-pointer"
                            title="تواصل عبر الواتساب"
                          >
                            💬
                          </button>
                        )}
                      </div>
                    </td>
                    <td className="p-4 font-semibold text-slate-700">
                      {teacher.salary ? `${teacher.salary} درهم` : '---'}
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button 
                          onClick={() => handleEdit(teacher)} 
                          className="px-2.5 py-1 bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 rounded text-xs font-bold transition cursor-pointer"
                        >
                          ✏️ تعديل
                        </button>
                        {userRole === 'admin' && (
                          <button 
                            onClick={() => confirmDelete(teacher.id, teacher.displayName)} 
                            className="px-2.5 py-1 bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100 rounded text-xs font-bold transition cursor-pointer"
                          >
                            🗑️ حذف
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal التأكيد قبل الحذف */}
      {deleteModal.show && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-xl border border-slate-100 space-y-4">
            <div className="flex items-center gap-3 text-rose-600">
              <span className="text-2xl">⚠️</span>
              <h3 className="text-lg font-bold">تأكيد حذف الأستاذ</h3>
            </div>
            <p className="text-sm text-slate-600">
              هل أنت تأكد من رغبتك في حذف الأستاذ <strong className="text-slate-800">"{deleteModal.name}"</strong>؟ هذا الإجراء لا يمكن التراجع عنه.
            </p>
            <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                onClick={() => setDeleteModal({ show: false, id: null, name: '' })}
                disabled={deleting}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold transition cursor-pointer"
              >
                إلغاء
              </button>
              <button
                onClick={executeDelete}
                disabled={deleting}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-sm font-semibold transition cursor-pointer disabled:opacity-50"
              >
                {deleting ? 'جاري الحذف...' : 'نعم، حذف'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}