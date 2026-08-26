import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const [fullName, setFullName] = useState('');
  const [level, setLevel] = useState('الأولى باكالوريا');
  const [parentPhone, setParentPhone] = useState('');
  const [teacherId, setTeacherId] = useState('');

  const fetchData = async () => {
    setLoading(true);
    try {
      const [studentsSnap, teachersSnap] = await Promise.all([
        getDocs(collection(db, 'students')),
        getDocs(collection(db, 'teachers'))
      ]);
      setStudents(studentsSnap.docs.map(d => ({ id: d.id, ...d.data() })).filter(s => !s.archived));
      setTeachers(teachersSnap.docs.map(d => ({ id: d.id, ...d.data() })));
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const handleAddStudent = async (e) => {
    e.preventDefault();
    if (!fullName) return alert('المرجو إدخال اسم التلميذ');

    try {
      await addDoc(collection(db, 'students'), {
        fullName,
        level,
        parentPhone,
        teacherId,
        createdAt: serverTimestamp(),
        archived: false
      });
      setFullName('');
      setParentPhone('');
      setShowAddModal(false);
      fetchData();
    } catch (error) {
      console.error("خطأ في إضافة التلميذ:", error);
    }
  };

  return (
    <div className="space-y-6 dir-rtl text-right pb-10">
      <div className="flex justify-between items-center bg-white p-5 rounded-xl shadow-md border border-slate-300">
        <div>
          <h2 className="text-2xl font-black text-slate-900">إدارة التلاميذ 👥</h2>
          <p className="text-sm font-bold text-slate-600">عرض وإضافة التلاميذ المسجلين في الأكاديمية</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-black shadow-md cursor-pointer"
        >
          ➕ إضافة تلميذ جديد
        </button>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md border-2 border-slate-300">
            <h3 className="text-xl font-black text-slate-900 mb-4">إضافة تلميذ جديد 👨‍🎓</h3>
            <form onSubmit={handleAddStudent} className="space-y-4">
              <div>
                <label className="block text-sm font-extrabold text-slate-800 mb-1">الاسم الكامل</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-slate-300 rounded-lg font-bold text-slate-900 focus:outline-none focus:border-blue-600"
                  placeholder="مثال: محمد العلوي"
                />
              </div>

              <div>
                <label className="block text-sm font-extrabold text-slate-800 mb-1">المستوى الدراسي</label>
                <select
                  value={level}
                  onChange={(e) => setLevel(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-slate-300 rounded-lg font-bold text-slate-900 bg-white"
                >
                  <option value="الأول ابتدائي">الأول ابتدائي</option>
                  <option value="الثاني ابتدائي">الثاني ابتدائي</option>
                  <option value="الثالث ابتدائي">الثالث ابتدائي</option>
                  <option value="الرابع ابتدائي">الرابع ابتدائي</option>
                  <option value="الخامس ابتدائي">الخامس ابتدائي</option>
                  <option value="السادس ابتدائي">السادس ابتدائي</option>
                  <option value="الأولى إعدادي">الأولى إعدادي</option>
                  <option value="الثانية إعدادي">الثانية إعدادي</option>
                  <option value="الثالثة إعدادي">الثالثة إعدادي</option>
                  <option value="الجذع المشترك">الجذع المشترك</option>
                  <option value="الأولى باكالوريا">الأولى باكالوريا</option>
                  <option value="الثانية باكالوريا">الثانية باكالوريا</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-extrabold text-slate-800 mb-1">رقم هاتف الولي (واتساب)</label>
                <input
                  type="text"
                  value={parentPhone}
                  onChange={(e) => setParentPhone(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-slate-300 rounded-lg font-bold text-slate-900 focus:outline-none focus:border-blue-600"
                  placeholder="0612345678"
                />
              </div>

              <div>
                <label className="block text-sm font-extrabold text-slate-800 mb-1">الأستاذ المسؤول</label>
                <select
                  value={teacherId}
                  onChange={(e) => setTeacherId(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-slate-300 rounded-lg font-bold text-slate-900 bg-white"
                >
                  <option value="">بدون أستاذ محدد</option>
                  {teachers.map(t => (
                    <option key={t.id} value={t.id}>{t.name || t.fullName} - ({t.subject || 'مادة غير محدودة'})</option>
                  ))}
                </select>
              </div>

              <div className="flex gap-2 pt-3">
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-black text-sm"
                >
                  حفظ التلميذ ✅
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg font-extrabold text-sm"
                >
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-md border border-slate-300 overflow-hidden">
        {loading ? (
          <div className="p-6 text-center text-slate-700 font-bold">جاري تحميل التلاميذ...</div>
        ) : (
          <table className="w-full text-right border-collapse">
            <thead className="bg-slate-100 border-b-2 border-slate-300 font-bold text-sm text-slate-800">
              <tr>
                <th className="p-4">اسم التلميذ</th>
                <th className="p-4">المستوى</th>
                <th className="p-4">رقم الولي</th>
                <th className="p-4">الأستاذ</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-bold text-sm text-slate-900">
              {students.map(s => (
                <tr key={s.id} className="hover:bg-slate-50">
                  <td className="p-4">{s.fullName}</td>
                  <td className="p-4 text-slate-700">{s.level}</td>
                  <td className="p-4 text-slate-700">{s.parentPhone || '—'}</td>
                  <td className="p-4 text-blue-800">
                    {teachers.find(t => t.id === s.teacherId)?.name || 'غير محدد'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}