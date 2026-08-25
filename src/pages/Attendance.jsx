import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, doc, setDoc, serverTimestamp } from 'firebase/firestore';

export default function Attendance() {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // جلب قائمة التلاميذ وتفريغ حالة الحضور
  const fetchData = async () => {
    setLoading(true);
    try {
      const studentsSnap = await getDocs(collection(db, 'students'));
      const studentsList = studentsSnap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setStudents(studentsList);

      // جلب الحضور المسجل مسبقاً لهذا التاريخ إن وجد
      const attendanceSnap = await getDocs(collection(db, 'attendance'));
      const initialAttendance = {};

      attendanceSnap.forEach(docSnap => {
        const data = docSnap.data();
        if (data.date === selectedDate) {
          initialAttendance[data.studentId] = data.status;
        }
      });

      // إعطاء حالة "حاضر" كخيار افتراضي للجميع إذا لم تسجل بعد
      const updatedAttendance = {};
      studentsList.forEach(student => {
        updatedAttendance[student.id] = initialAttendance[student.id] || 'حاضر';
      });

      setAttendance(updatedAttendance);
    } catch (error) {
      console.error("خطأ في جلب بيانات الحضور:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedDate]);

  // تغيير حالة تلميذ معين (حاضر / غائب)
  const handleStatusChange = (studentId, status) => {
    setAttendance(prev => ({
      ...prev,
      [studentId]: status
    }));
  };

  // حفظ سجلات الحضور فـ Firebase
  const handleSaveAttendance = async () => {
    setSaving(true);
    setSaveSuccess(false);
    try {
      // حفظ تسجيل كل تلميذ فـ وثيقة خاصة به لتفادي التكرار
      const promises = students.map(student => {
        const docId = `${selectedDate}_${student.id}`;
        return setDoc(doc(db, 'attendance', docId), {
          date: selectedDate,
          studentId: student.id,
          studentName: student.fullName,
          status: attendance[student.id] || 'حاضر',
          updatedAt: serverTimestamp()
        });
      });

      await Promise.all(promises);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 4000);
    } catch (error) {
      console.error("خطأ في حفظ الحضور:", error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6 dir-rtl pb-12">
      {/* الهيدر */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white p-5 rounded-xl shadow-sm border border-slate-200 gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">تتبع الحضور والغياب</h2>
          <p className="text-sm text-slate-500">تسجيل وتأكيد حضور التلاميذ حسب التاريخ</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <input 
            type="date" 
            value={selectedDate} 
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-slate-50 text-slate-700 font-medium"
          />
          <button 
            onClick={handleSaveAttendance}
            disabled={saving || students.length === 0}
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-sm font-medium disabled:opacity-50 whitespace-nowrap"
          >
            {saving ? 'جاري الحفظ...' : 'حفظ السجل ✅'}
          </button>
        </div>
      </div>

      {saveSuccess && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl font-medium text-center">
          تم حفظ سجل الحضور والغياب بنجاح وتحديث لوحة التحكم! 🎉
        </div>
      )}

      {/* الجدول */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {loading ? (
          <div className="p-6 text-center text-slate-500">جاري تحميل قائمة التلاميذ...</div>
        ) : students.length === 0 ? (
          <div className="p-6 text-center text-slate-500">لا يوجد تلاميذ مسجلين حالياً لتسجيل الحضور.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-slate-600 font-semibold text-sm">الاسم الكامل</th>
                  <th className="px-6 py-3 text-slate-600 font-semibold text-sm">المستوى / القسم</th>
                  <th className="px-6 py-3 text-slate-600 font-semibold text-sm text-center">الحالة اليوم</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {students.map(student => (
                  <tr key={student.id} className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 font-medium text-slate-800">{student.fullName}</td>
                    <td className="px-6 py-4 text-slate-600">{student.level}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="inline-flex rounded-lg p-1 bg-slate-100 gap-1">
                        <button
                          type="button"
                          onClick={() => handleStatusChange(student.id, 'حاضر')}
                          className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${
                            attendance[student.id] === 'حاضر'
                              ? 'bg-emerald-600 text-white shadow-sm'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          حاضر ✅
                        </button>
                        <button
                          type="button"
                          onClick={() => handleStatusChange(student.id, 'غائب')}
                          className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${
                            attendance[student.id] === 'غائب'
                              ? 'bg-rose-600 text-white shadow-sm'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          غائب ❌
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
    </div>
  );
}