import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';

const SUBJECTS_LIST = [
  'الرياضيات',
  'الفيزياء والكيمياء',
  'علوم الحياة والأرض',
  'اللغة الفرنسية',
  'اللغة الإنجليزية',
  'اللغة العربية',
  'الفلسفة',
  'مادة أخرى'
];

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);

  // حالة التحكم في نافذة التأكيد (Modal)
  const [deleteModal, setDeleteModal] = useState({ show: false, id: null, name: '' });
  const [deleting, setDeleting] = useState(false);

  const [form, setForm] = useState({
    fullName: '',
    subject: 'الرياضيات',
    phone: '',
    salary: ''
  });

  const fetchData = async () => {
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
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = {
        fullName: form.fullName,
        name: form.fullName,
        subject: form.subject,
        phone: form.phone,
        salary: form.salary
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

  return (
    <div className="p-4 space-y-6 dir-rtl text-right max-w-full">
      {/* Header */}
      <div className="flex justify-between items-center bg-white p-5 rounded-xl shadow-sm border border-slate-200">
        <div>
          <h2 className="text-xl font-bold text-slate-800">إدارة الأساتذة 👨‍🏫</h2>
          <p className="text-xs text-slate-500">إضافة وتتبع الطاقم التربوي للأكاديمية</p>
        </div>
        <button 
          onClick={() => {
            setShowAddForm(!showAddForm);
            setEditingId(null);
            setForm({ fullName: '', subject: 'الرياضيات', phone: '', salary: '' });
          }}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-bold text-sm"
        >
          {showAddForm ? 'إلغاء' : '+ إضافة أستاذ'}
        </button>
      </div>

      {/* Form */}
      {showAddForm && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md border border-indigo-100 space-y-4">
          <h3 className="text-md font-bold text-slate-800 border-b pb-2">
            {editingId ? 'تعديل بيانات الأستاذ' : 'بيانات الأستاذ الجديد'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <label className="block text-slate-700 mb-1">الاسم الكامل</label>
              <input 
                type="text" 
                value={form.fullName} 
                onChange={e => setForm({ ...form, fullName: e.target.value })} 
                required 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none" 
              />
            </div>
            <div>
              <label className="block text-slate-700 mb-1">المادة</label>
              <select 
                value={form.subject} 
                onChange={e => setForm({ ...form, subject: e.target.value })} 
                className="w-full px-3 py-2 border rounded-lg bg-white focus:outline-none"
              >
                {SUBJECTS_LIST.map(sub => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-slate-700 mb-1">رقم الهاتف</label>
              <input 
                type="text" 
                value={form.phone} 
                onChange={e => setForm({ ...form, phone: e.target.value })} 
                required 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none" 
              />
            </div>
            <div>
              <label className="block text-slate-700 mb-1">المستحقات (درهم)</label>
              <input 
                type="number" 
                value={form.salary} 
                onChange={e => setForm({ ...form, salary: e.target.value })} 
                className="w-full px-3 py-2 border rounded-lg focus:outline-none" 
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button type="submit" disabled={saving} className="px-5 py-2 bg-indigo-600 text-white rounded-lg text-sm font-bold">
              {saving ? 'جاري الحفظ...' : 'حفظ ✅'}
            </button>
          </div>
        </form>
      )}

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-x-auto">
        {loading ? (
          <div className="p-6 text-center text-slate-500 font-bold">جاري التحميل...</div>
        ) : teachers.length === 0 ? (
          <div className="p-6 text-center text-slate-400">لا يوجد أساتذة.</div>
        ) : (
          <table className="w-full text-right border-collapse">
            <thead className="bg-slate-50 border-b border-slate-200 text-xs text-slate-600 font-bold">
              <tr>
                <th className="p-3">الاسم الكامل</th>
                <th className="p-3">المادة</th>
                <th className="p-3">رقم الهاتف</th>
                <th className="p-3 text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {teachers.map(teacher => (
                <tr key={teacher.id} className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-800">{teacher.displayName}</td>
                  <td className="p-3">
                    <span className="px-2.5 py-1 bg-indigo-50 text-indigo-700 rounded text-xs font-semibold">
                      {teacher.subject || 'غير محدد'}
                    </span>
                  </td>
                  <td className="p-3 font-mono text-xs" dir="ltr">{teacher.phone || '---'}</td>
                  <td className="p-3 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button 
                        onClick={() => handleEdit(teacher)} 
                        className="px-2.5 py-1 bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 rounded text-xs font-bold transition"
                      >
                        ✏️ تعديل
                      </button>
                      <button 
                        onClick={() => confirmDelete(teacher.id, teacher.displayName)} 
                        className="px-2.5 py-1 bg-rose-50 text-rose-600 border border-rose-200 hover:bg-rose-100 rounded text-xs font-bold transition"
                      >
                        🗑️ حذف
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold transition"
              >
                إلغاء
              </button>
              <button
                onClick={executeDelete}
                disabled={deleting}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-sm font-semibold transition disabled:opacity-50"
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