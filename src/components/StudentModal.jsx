import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

export default function StudentProfileModal({ student, onClose }) {
  const [activeTab, setActiveTab] = useState('info'); // 'info', 'attendance', 'payments'
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [paymentRecords, setPaymentRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudentHistory = async () => {
      if (!student?.id) return;
      setLoading(true);
      try {
        // 1. جلب سجلات الحضور
        const attQuery = query(collection(db, 'attendance'), where('studentId', '==', student.id));
        const attSnap = await getDocs(attQuery);
        const attList = attSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        // 2. جلب سجلات الأداء
        const payQuery = query(collection(db, 'payments'), where('studentId', '==', student.id));
        const paySnap = await getDocs(payQuery);
        const payList = paySnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        // ترتيب البيانات حسب التاريخ (من الأحدث للأقدم) بشكل آمن
        const sortedAtt = attList.sort((a, b) => {
          const dateA = new Date(a.date || a.sessionDate || 0);
          const dateB = new Date(b.date || b.sessionDate || 0);
          return dateB - dateA;
        });

        const sortedPay = payList.sort((a, b) => {
          const dateA = new Date(a.date || 0);
          const dateB = new Date(b.date || 0);
          return dateB - dateA;
        });

        setAttendanceRecords(sortedAtt);
        setPaymentRecords(sortedPay);
      } catch (err) {
        console.error('خطأ في جلب سجلات التلميذ:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudentHistory();
  }, [student]);

  if (!student) return null;

  // إحصائيات سريعة
  const totalPresent = attendanceRecords.filter(r => r.status === 'حاضر').length;
  const attendanceRate = attendanceRecords.length > 0 ? Math.round((totalPresent / attendanceRecords.length) * 100) : 0;
  const totalPaid = paymentRecords.reduce((sum, p) => sum + Number(p.amount || student.monthlyFee || 0), 0);

  const formatPhoneNumber = (phone) => {
    if (!phone) return null;
    let clean = phone.trim().replace(/\s+/g, '').replace(/-/g, '');
    if (clean.startsWith('0')) return '212' + clean.substring(1);
    if (clean.startsWith('+')) return clean.substring(1);
    return clean;
  };

  const handleWhatsAppClick = () => {
    const formattedPhone = formatPhoneNumber(student.parentPhone);
    if (!formattedPhone) return alert('رقم الهاتف غير متوفر!');
    window.open(`https://wa.me/${formattedPhone}`, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 dir-rtl text-right">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 flex justify-between items-start">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center font-bold text-2xl text-white shadow-md shrink-0">
              {student.fullName?.charAt(0) || '🎓'}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold">{student.fullName}</h2>
                {student.archived && (
                  <span className="px-2 py-0.5 bg-slate-700 text-slate-300 text-xs rounded-full">مؤرشف</span>
                )}
              </div>
              <p className="text-xs text-slate-300 mt-1">
                {student.level} • الواجب: <span className="text-emerald-400 font-bold">{student.monthlyFee} درهم</span> (نهار {student.paymentDay || 5} فـ الشهر)
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 text-xl font-bold transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Quick Stats Banner */}
        <div className="grid grid-cols-3 bg-slate-800 text-slate-200 text-center text-xs py-2.5 border-t border-slate-700">
          <div>
            <span className="block text-slate-400 text-[10px]">نسبة الحضور</span>
            <span className="font-bold text-amber-400 text-sm">{attendanceRate}%</span>
          </div>
          <div>
            <span className="block text-slate-400 text-[10px]">مجموع الحصص</span>
            <span className="font-bold text-white text-sm">{attendanceRecords.length} حصة</span>
          </div>
          <div>
            <span className="block text-slate-400 text-[10px]">مجموع المؤدى</span>
            <span className="font-bold text-emerald-400 text-sm">{totalPaid} درهم</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-3 gap-4 overflow-x-auto">
          <button
            onClick={() => setActiveTab('info')}
            className={`pb-3 text-sm font-bold border-b-2 transition whitespace-nowrap cursor-pointer ${
              activeTab === 'info'
                ? 'border-amber-500 text-amber-600'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            📌 البيانات والتتبع الأكاديمي
          </button>
          <button
            onClick={() => setActiveTab('attendance')}
            className={`pb-3 text-sm font-bold border-b-2 transition whitespace-nowrap cursor-pointer ${
              activeTab === 'attendance'
                ? 'border-amber-500 text-amber-600'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            📋 سجل الحضور ({attendanceRecords.length})
          </button>
          <button
            onClick={() => setActiveTab('payments')}
            className={`pb-3 text-sm font-bold border-b-2 transition whitespace-nowrap cursor-pointer ${
              activeTab === 'payments'
                ? 'border-amber-500 text-amber-600'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            💳 سجل الأداءات ({paymentRecords.length})
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {loading ? (
            <div className="text-center py-8 text-slate-500 font-bold">جاري تحميل البيانات...</div>
          ) : activeTab === 'info' ? (
            /* تبويب البيانات الشاملة */
            <div className="space-y-6 text-sm text-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div>
                  <span className="text-xs text-slate-400 block mb-0.5">ولي الأمر:</span>
                  <span className="font-bold text-slate-800">{student.parentName || 'غير محدد'}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block mb-0.5">هاتف التواصل:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-800" dir="ltr">{student.parentPhone || 'غير متوفر'}</span>
                    {student.parentPhone && (
                      <button 
                        onClick={handleWhatsAppClick}
                        className="px-2 py-0.5 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 text-xs rounded font-bold cursor-pointer transition"
                      >
                        💬 واتساب
                      </button>
                    )}
                  </div>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block mb-0.5">المؤسسة التعليمية:</span>
                  <span className="font-semibold text-slate-800">{student.school || 'غير محددة'}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block mb-0.5">المواد المسجل فيها:</span>
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-800 font-bold rounded text-xs inline-block">
                    {Array.isArray(student.subjects) ? student.subjects.join(', ') : (student.subjects || 'الرياضيات')}
                  </span>
                </div>
              </div>

              {/* التتبع الأكاديمي */}
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 border-b pb-1">🎯 التتبع الأكاديمي والتعثرات:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-lg">
                    <span className="block font-bold text-emerald-800 text-xs mb-1">💪 نقاط القوة</span>
                    <p className="text-xs text-emerald-900 leading-relaxed">{student.strengths || 'لا توجد ملاحظات مدونة'}</p>
                  </div>
                  <div className="p-3 bg-rose-50 border border-rose-100 rounded-lg">
                    <span className="block font-bold text-rose-800 text-xs mb-1">⚠️ نقاط الضعف / التعثرات</span>
                    <p className="text-xs text-rose-900 leading-relaxed">{student.weaknesses || 'لا توجد نقاط ضعف مسجلة'}</p>
                  </div>
                  <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
                    <span className="block font-bold text-blue-800 text-xs mb-1">🚀 الأهداف المرجوة</span>
                    <p className="text-xs text-blue-900 leading-relaxed">{student.goals || 'لم تحدد بعد'}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : activeTab === 'attendance' ? (
            /* تبويب سجل الحضور */
            <div>
              {attendanceRecords.length === 0 ? (
                <p className="text-center py-8 text-slate-400">لا يوجد أي سجل حضور مسجل لهذا التلميذ حتى الآن.</p>
              ) : (
                <div className="space-y-2">
                  {attendanceRecords.map((record) => (
                    <div key={record.id} className="flex justify-between items-center p-3 bg-slate-50 border border-slate-200 rounded-lg">
                      <span className="font-semibold text-slate-700 text-sm">{record.date || record.sessionDate || 'تاريخ غير محدد'}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        record.status === 'حاضر' ? 'bg-emerald-100 text-emerald-800' :
                        record.status === 'غائب' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {record.status || 'حاضر'}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* تبويب سجل الاستخلاصات */
            <div>
              {paymentRecords.length === 0 ? (
                <p className="text-center py-8 text-slate-400">لا يوجد أي سجل دفعات مسجل لهذا التلميذ حتى الآن.</p>
              ) : (
                <div className="space-y-2">
                  {paymentRecords.map((pay) => (
                    <div key={pay.id} className="flex justify-between items-center p-3 bg-slate-50 border border-slate-200 rounded-lg">
                      <div>
                        <p className="font-bold text-slate-800 text-sm">شهر: {pay.month || 'غير محدد'}</p>
                        <p className="text-xs text-slate-500">تاريخ الأداء: {pay.date || '---'}</p>
                      </div>
                      <span className="font-bold text-emerald-600 text-sm">{pay.amount || student.monthlyFee} درهم ✅</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t flex justify-end">
          <button 
            onClick={onClose}
            className="px-5 py-2 bg-slate-200 text-slate-700 font-bold text-sm rounded-lg hover:bg-slate-300 transition cursor-pointer"
          >
            إغلاق
          </button>
        </div>

      </div>
    </div>
  );
}