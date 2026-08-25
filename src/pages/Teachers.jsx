import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [saving, setSaving] = useState(false);

  const [newTeacher, setNewTeacher] = useState({
    fullName: '',
    subject: 'الرياضيات',
    phone: '',
    salary: ''
  });

  const fetchTeachers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'teachers'));
      const teachersList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTeachers(teachersList);
    } catch (error) {
      console.error("خطأ في جلب بيانات الأساتذة:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTeacher(prev => ({ ...prev, [name]: value }));
  };

  const handleAddTeacher = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await addDoc(collection(db, 'teachers'), {
        ...newTeacher,
        createdAt: serverTimestamp()
      });
      setShowAddForm(false);
      setNewTeacher({ fullName: '', subject: 'الرياضيات', phone: '', salary: '' });
      fetchTeachers();
    } catch (error) {
      console.error("خطأ في إضافة الأستاذ:", error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6 dir-rtl pb-12">
      <div className="flex justify-between items-center bg-white p-5 rounded-xl shadow-sm border border-slate-200">
        <div>
          <h2 className="text-xl font-bold text-slate-800">إدارة الأساتذة</h2>
          <p className="text-sm text-slate-500">إضافة وتتبع الطاقم التربوي للأكاديمية</p>
        </div>
        <button 
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-sm font-medium"
        >
          {showAddForm ? 'إلغاء' : '+ إضافة أستاذ'}
        </button>
      </div>

      {showAddForm && (
        <form onSubmit={handleAddTeacher} className="bg-white p-6 rounded-xl shadow-md border border-indigo-100 space-y-6">
          <h3 className="text-lg font-bold text-slate-800 border-b pb-2">بيانات الأستاذ الجديد</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">الاسم الكامل</label>
              <input 
                type="text" 
                name="fullName" 
                value={newTeacher.fullName} 
                onChange={handleInputChange} 
                placeholder="أدخل اسم الأستاذ"
                required 
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">المادة المدرسة</label>
              <select 
                name="subject" 
                value={newTeacher.subject} 
                onChange={handleInputChange} 
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-white"
              >
                <option value="الرياضيات">الرياضيات</option>
                <option value="الفيزياء والكيمياء">الفيزياء والكيمياء</option>
                <option value="علوم الحياة والأرض">علوم الحياة والأرض</option>
                <option value="اللغة الفرنسية">اللغة الفرنسية</option>
                <option value="اللغة الإنجليزية">اللغة الإنجليزية</option>
                <option value="اللغة العربية">اللغة العربية</option>
                <option value="مادة أخرى">مادة أخرى</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">رقم الهاتف</label>
              <input 
                type="text" 
                name="phone" 
                value={newTeacher.phone} 
                onChange={handleInputChange} 
                placeholder="06XXXXXXXX"
                required 
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">الواجب / المستحقات (اختياري)</label>
              <input 
                type="number" 
                name="salary" 
                value={newTeacher.salary} 
                onChange={handleInputChange} 
                placeholder="المبلغ بالدرهم"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none" 
              />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100">
            <button 
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-5 py-2.5 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition font-medium"
            >
              إلغاء
            </button>
            <button 
              type="submit" 
              disabled={saving} 
              className="px-6 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-md font-medium disabled:opacity-50"
            >
              {saving ? 'جاري الحفظ...' : 'حفظ بيانات الأستاذ ✅'}
            </button>
          </div>
        </form>
      )}

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {loading ? (
          <div className="p-6 text-center text-slate-500">جاري تحميل قائمة الأساتذة...</div>
        ) : teachers.length === 0 ? (
          <div className="p-6 text-center text-slate-500">لا يوجد أساتذة مسجلين حالياً.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-slate-600 font-semibold text-sm">الاسم الكامل</th>
                  <th className="px-6 py-3 text-slate-600 font-semibold text-sm">المادة</th>
                  <th className="px-6 py-3 text-slate-600 font-semibold text-sm">رقم الهاتف</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {teachers.map(teacher => (
                  <tr key={teacher.id} className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 font-medium text-slate-800">{teacher.fullName}</td>
                    <td className="px-6 py-4 text-slate-600">
                      <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-md text-xs font-semibold">
                        {teacher.subject}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600" dir="ltr">{teacher.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}