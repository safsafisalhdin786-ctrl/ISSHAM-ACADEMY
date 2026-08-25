import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, doc, setDoc, serverTimestamp } from 'firebase/firestore';

export default function Attendance() {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [searchTerm, setSearchTerm] = useState('');
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

  // تحديد الجميع بحالة واحدة (حاضر أو غائب)
  const setAllStatus = (status) => {
    const updated = {};
    students.forEach(s => {
      updated[s.id] = status;
    });
    setAttendance(updated);
  };

  // حفظ سجلات الحضور فـ Firebase
  const handleSaveAttendance = async () => {
    setSaving(true);
    setSaveSuccess(false);
    try {
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

  const filteredStudents = students.filter(s => 
    s.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.level?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const presentCount = Object.values(attendance).filter(v => v === 'حاضر').length;
  const absentCount = Object.values(attendance).filter(v => v === 'غائب').length;

  return (
    <div className="space-y-6 dir-rtl pb-12">
      {/* الهيدر وتحديد التاريخ */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-5 rounded-xl shadow-sm border border-slate-200 gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">تتبع الحضور والغياب 📋</h2>
          <p className="text-sm text-slate-500">تسجيل وتأكيد حضور التلاميذ حسب التاريخ</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <input 
            type="date" 
            value={selectedDate} 
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none bg-slate-50 text-slate-700 font-medium text-sm"
          />
          <button 
            onClick={handleSaveAttendance}
            disabled={saving || students.length === 0}
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-sm font-medium text-sm disabled:opacity-50 whitespace-nowrap"
          >
            {saving ? 'جاري الحفظ...' : 'حفظ السجل ✅'}
          </button>
        </div>
      </div>

      {saveSuccess && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl font-medium text-center text-sm">
          تم حفظ سجل الحضور والغياب بنجاح وتحديث لوحة التحكم! 🎉
        </div>
      )}

      {/* شريط الإجراءات السريعة والإحصائيات */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <input 
            type="text" 
            placeholder="🔍 البحث عن تلميذ..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded-lg w-full md:w-64 focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
          />
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-slate-500">تحديد سريع:</span>
          <button 
            onClick={() => setAllStatus('حاضر')}
            className="px-3 py-1.5 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 rounded-lg text-xs font-bold transition"
          >
            الجميع حاضر ✅
          </button>
          <button 
            onClick={() => setAllStatus('غائب')}
            className="px-3 py-1.5 bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 rounded-lg text-xs font-bold transition"
          >
            الجميع غائب ❌
          </button>
        </div>

        <div className="flex items-center gap-4 text-xs font-bold border-t md:border-t-0 pt-2 md:pt-0 w-full md:w-auto justify-end">
          <span className="text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
            الحاضرون: {presentCount}
          </span>
          <span className="text-rose-600 bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-100">
            الغائبون: {absentCount}
          </span>
        </div>
      </div>

      {/* الجدول */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {loading ? (
          <div className="p-6 text-center text-slate-500 font-bold">جاري تحميل قائمة التلاميذ...</div>
        ) : filteredStudents.length === 0 ? (
          <div className="p-6 text-center text-slate-500">لا يوجد تلاميذ مطابقون لتسجيل الحضور.</div>
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
              <tbody className="divide-y divide-slate-100 text-sm">
                {filteredStudents.map(student => (
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