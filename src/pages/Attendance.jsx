import React, { useState, useEffect, useCallback } from 'react';
import { db } from '../firebase';
import { 
  collection, 
  getDocs, 
  doc, 
  setDoc, 
  query, 
  where, 
  serverTimestamp,
  writeBatch 
} from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';

export default function Attendance() {
  const { userRole, currentUser } = useAuth ? useAuth() : { userRole: 'admin', currentUser: null };

  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevelFilter, setSelectedLevelFilter] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // جلب البيانات من Firestore
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [studentsSnap, teachersSnap, attendanceSnap] = await Promise.all([
        getDocs(collection(db, 'students')),
        getDocs(collection(db, 'teachers')),
        getDocs(query(collection(db, 'attendance'), where('date', '==', selectedDate)))
      ]);

      const activeStudents = studentsSnap.docs
        .map(d => ({ id: d.id, ...d.data() }))
        .filter(student => !student.archived);

      setStudents(activeStudents);
      setTeachers(teachersSnap.docs.map(d => ({ id: d.id, ...d.data(), name: d.data().fullName || d.data().name || '' })));

      const initialAttendance = {};
      attendanceSnap.forEach(docSnap => {
        const data = docSnap.data();
        initialAttendance[data.studentId] = data.status;
      });

      const updatedAttendance = {};
      activeStudents.forEach(student => {
        updatedAttendance[student.id] = initialAttendance[student.id] || 'حاضر';
      });

      setAttendance(updatedAttendance);
    } catch (error) {
      console.error("خطأ في جلب بيانات الحضور:", error);
    } finally {
      setLoading(false);
    }
  }, [selectedDate]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleStatusChange = (studentId, status) => {
    setAttendance(prev => ({
      ...prev,
      [studentId]: status
    }));
  };

  const filteredStudents = students.filter(s => {
    if (userRole === 'teacher' && currentUser) {
      if (s.teacherId !== currentUser.uid) return false;
    }

    const matchesSearch = s.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          s.level?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevelFilter ? s.level === selectedLevelFilter : true;

    return matchesSearch && matchesLevel;
  });

  const setAllStatus = (status) => {
    const updated = { ...attendance };
    filteredStudents.forEach(s => {
      updated[s.id] = status;
    });
    setAttendance(updated);
  };

  const handleSaveAttendance = async () => {
    if (filteredStudents.length === 0) return;
    setSaving(true);
    setSaveSuccess(false);

    try {
      const batch = writeBatch(db);

      filteredStudents.forEach(student => {
        const docId = `${selectedDate}_${student.id}`;
        const ref = doc(db, 'attendance', docId);
        batch.set(ref, {
          date: selectedDate,
          studentId: student.id,
          studentName: student.fullName,
          level: student.level || '',
          teacherId: student.teacherId || '',
          status: attendance[student.id] || 'حاضر',
          updatedAt: serverTimestamp()
        });
      });

      await batch.commit();
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 4000);
    } catch (error) {
      console.error("خطأ في حفظ الحضور:", error);
    } finally {
      setSaving(false);
    }
  };

  const sendAbsenceWhatsApp = (student) => {
    if (!student.parentPhone) return alert('رقم هاتف الولي غير متوفر!');
    let clean = student.parentPhone.trim().replace(/\s+/g, '').replace(/-/g, '');
    if (clean.startsWith('0')) clean = '212' + clean.substring(1);
    if (clean.startsWith('+')) clean = clean.substring(1);

    const msg = `السلام عليكم ورحمة الله وبركاته،\n\nتخبركم إدارة *أكاديمية إسهام* 🏫 بتسجيل غياب التلميذ(ة) *${student.fullName}* عن حصة اليوم بتاريخ *${selectedDate}*.\n\nالمرجو التواصل معنا لتأكيد سبب الغياب. شكراً لتعاونكم. 🌹`;
    window.open(`https://wa.me/${clean}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const presentCount = filteredStudents.filter(s => attendance[s.id] === 'حاضر').length;
  const absentCount = filteredStudents.filter(s => attendance[s.id] === 'غائب').length;
  const excusedCount = filteredStudents.filter(s => attendance[s.id] === 'مبرر').length;

  return (
    <div className="space-y-6 dir-rtl pb-12 text-right">
      {/* الترويسة وتحديد التاريخ */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-5 rounded-xl shadow-md border border-slate-300 gap-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
            تتبع الحضور والغياب 📋
          </h2>
          <p className="text-sm font-semibold text-slate-600">تسجيل وتأكيد حضور التلاميذ حسب التاريخ والمستوى</p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <input 
            type="date" 
            value={selectedDate} 
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-3.5 py-2 border-2 border-slate-400 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none bg-white text-slate-900 font-bold text-sm cursor-pointer shadow-sm"
          />
          <button 
            onClick={handleSaveAttendance}
            disabled={saving || filteredStudents.length === 0}
            className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-lg shadow-md transition text-sm disabled:opacity-50 whitespace-nowrap cursor-pointer"
          >
            {saving ? 'جاري الحفظ...' : 'حفظ السجل ✅'}
          </button>
        </div>
      </div>

      {saveSuccess && (
        <div className="p-4 bg-emerald-100 border-2 border-emerald-400 text-emerald-900 rounded-xl font-extrabold text-center text-sm shadow-sm">
          🎉 تم حفظ سجل الحضور والغياب بنجاح وتحديث قاعدة البيانات!
        </div>
      )}

      {/* شريط الإجراءات والإحصائيات */}
      <div className="bg-white p-4 rounded-xl shadow-md border border-slate-300 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <input 
            type="text" 
            placeholder="🔍 البحث عن تلميذ..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border-2 border-slate-300 rounded-lg w-full md:w-56 focus:ring-2 focus:ring-blue-600 text-slate-900 font-bold text-sm shadow-sm"
          />

          <select 
            value={selectedLevelFilter} 
            onChange={(e) => setSelectedLevelFilter(e.target.value)}
            className="px-3 py-2 border-2 border-slate-300 rounded-lg text-sm bg-white font-bold text-slate-800 shadow-sm cursor-pointer"
          >
            <option value="">كل المستويات</option>
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

        {/* أزرار التحديد السريع */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-black text-slate-800">تحديد سريع:</span>
          <button 
            onClick={() => setAllStatus('حاضر')}
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-black shadow-md transition cursor-pointer"
          >
            الجميع حاضر ✅
          </button>
          <button 
            onClick={() => setAllStatus('غائب')}
            className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-black shadow-md transition cursor-pointer"
          >
            الجميع غائب ❌
          </button>
        </div>

        {/* بطاقات الإحصائيات */}
        <div className="flex items-center gap-2 text-xs font-black border-t md:border-t-0 pt-2 md:pt-0 w-full md:w-auto justify-end">
          <span className="text-emerald-900 bg-emerald-100 px-3 py-1.5 rounded-lg border-2 border-emerald-300 shadow-sm">
            حاضر: <strong className="text-sm font-black">{presentCount}</strong>
          </span>
          <span className="text-rose-900 bg-rose-100 px-3 py-1.5 rounded-lg border-2 border-rose-300 shadow-sm">
            غائب: <strong className="text-sm font-black">{absentCount}</strong>
          </span>
          <span className="text-amber-900 bg-amber-100 px-3 py-1.5 rounded-lg border-2 border-amber-300 shadow-sm">
            مبرر: <strong className="text-sm font-black">{excusedCount}</strong>
          </span>
        </div>
      </div>

      {/* الجدول */}
      <div className="bg-white rounded-xl shadow-md border border-slate-300 overflow-hidden">
        {loading ? (
          <div className="p-6 text-center text-slate-700 font-bold">جاري تحميل قائمة التلاميذ...</div>
        ) : filteredStudents.length === 0 ? (
          <div className="p-6 text-center text-slate-500 font-bold">لا يوجد تلاميذ مطابقون للفلترة الحالية.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse min-w-[700px]">
              <thead className="bg-slate-100 border-b-2 border-slate-300 text-slate-800 font-bold text-sm">
                <tr>
                  <th className="px-6 py-4">الاسم الكامل</th>
                  <th className="px-6 py-4">المستوى</th>
                  <th className="px-6 py-4">الأستاذ المسؤول</th>
                  <th className="px-6 py-3.5 text-center">حالة الحضور اليوم</th>
                  <th className="px-6 py-3.5 text-center">تواصل</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {filteredStudents.map(student => {
                  const assignedTeacher = teachers.find(t => t.id === student.teacherId);
                  const status = attendance[student.id] || 'حاضر';

                  return (
                    <tr key={student.id} className="hover:bg-slate-50 transition">
                      <td className="px-6 py-4 font-black text-slate-900">{student.fullName}</td>
                      <td className="px-6 py-4 text-slate-700 font-bold">{student.level || 'غير محدد'}</td>
                      <td className="px-6 py-4 text-slate-800 font-bold">{assignedTeacher ? assignedTeacher.name : 'عام'}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="inline-flex rounded-lg p-1 bg-slate-200 gap-1 border border-slate-300">
                          <button
                            type="button"
                            onClick={() => handleStatusChange(student.id, 'حاضر')}
                            className={`px-3 py-1.5 rounded-md text-xs font-black transition cursor-pointer ${
                              status === 'حاضر'
                                ? 'bg-emerald-600 text-white shadow-md'
                                : 'bg-slate-100 text-slate-800 hover:bg-slate-300'
                            }`}
                          >
                            حاضر ✅
                          </button>
                          <button
                            type="button"
                            onClick={() => handleStatusChange(student.id, 'غائب')}
                            className={`px-3 py-1.5 rounded-md text-xs font-black transition cursor-pointer ${
                              status === 'غائب'
                                ? 'bg-rose-600 text-white shadow-md'
                                : 'bg-slate-100 text-slate-800 hover:bg-slate-300'
                            }`}
                          >
                            غائب ❌
                          </button>
                          <button
                            type="button"
                            onClick={() => handleStatusChange(student.id, 'مبرر')}
                            className={`px-3 py-1.5 rounded-md text-xs font-black transition cursor-pointer ${
                              status === 'مبرر'
                                ? 'bg-amber-600 text-white shadow-md'
                                : 'bg-slate-100 text-slate-800 hover:bg-slate-300'
                            }`}
                          >
                            مبرر ⚠️
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        {status === 'غائب' && (
                          <button
                            onClick={() => sendAbsenceWhatsApp(student)}
                            className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-black shadow-md transition cursor-pointer"
                            title="إشعارات الغياب عبر الواتساب"
                          >
                            📲 إشعار الغياب
                          </button>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}