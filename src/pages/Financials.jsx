import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { DollarSign, CheckCircle2, Clock, Search, CreditCard } from 'lucide-react';

export default function Financials() {
  const [students, setStudents] = useState([]);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('شتنبر');

  const months = ['شتنبر', 'أكتوبر', 'نونبر', 'دجنبر', 'يناير', 'فبراير', 'مارس', 'أبريل', 'ماي', 'يونيو'];

  // جلب البيانات من Firestore
  const fetchData = async () => {
    try {
      const studentsSnap = await getDocs(collection(db, 'students'));
      const studentsList = studentsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      const paymentsSnap = await getDocs(collection(db, 'payments'));
      const paymentsList = paymentsSnap.docs.map(doc => doc.data());

      setStudents(studentsList);
      setPayments(paymentsList);
    } catch (err) {
      console.error('خطأ فـ جلب البيانات المالية:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // تسجيل أداء الشهر لتلميذ
  const handleMarkAsPaid = async (student) => {
    try {
      await addDoc(collection(db, 'payments'), {
        studentId: student.id,
        studentName: student.fullName,
        amount: student.monthlyFee,
        month: selectedMonth,
        status: 'مؤدى',
        paidAt: serverTimestamp(),
      });
      fetchData(); // تحديث اللائحة
    } catch (err) {
      console.error('خطأ فـ تسجيل الأداء:', err);
    }
  };

  const isPaid = (studentId) => {
    return payments.some(p => p.studentId === studentId && p.month === selectedMonth && p.status === 'مؤدى');
  };

  const filteredStudents = students.filter(s =>
    s.fullName?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6 dir-rtl text-right">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">إدارة المالية والأداءات</h1>
          <p className="text-gray-500 text-sm">متابعة الواجبات الشهريّة واستخلاص الواجبات</p>
        </div>

        {/* الشهر المحدد */}
        <div className="flex items-center gap-2">
          <label className="text-sm font-semibold text-gray-700">تحديد الشهر:</label>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none font-bold text-gray-800"
          >
            {months.map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <input
          type="text"
          placeholder="البحث باسم التلميذ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pr-10 pl-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
        />
        <Search className="w-5 h-5 text-gray-400 absolute right-3 top-3" />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500">جاري تحميل البيانات المالية...</div>
        ) : filteredStudents.length === 0 ? (
          <div className="p-8 text-center text-gray-500">لا يوجد تلاميذ للعرص.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 text-sm">
                  <th className="p-4">اسم التلميذ</th>
                  <th className="p-4">المستوى</th>
                  <th className="p-4">الواجب الشهري</th>
                  <th className="p-4">حالة أداء شهر ({selectedMonth})</th>
                  <th className="p-4 text-center">الإجراء</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                {filteredStudents.map((s) => {
                  const paid = isPaid(s.id);
                  return (
                    <tr key={s.id} className="hover:bg-gray-50/50 transition">
                      <td className="p-4 font-semibold text-gray-800">{s.fullName}</td>
                      <td className="p-4"><span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-lg text-xs font-medium">{s.level}</span></td>
                      <td className="p-4 font-bold text-emerald-600">{s.monthlyFee} DH</td>
                      <td className="p-4">
                        {paid ? (
                          <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-xl text-xs font-bold border border-green-200">
                            <CheckCircle2 className="w-4 h-4" /> تم الأداء
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 px-3 py-1 rounded-xl text-xs font-bold border border-amber-200">
                            <Clock className="w-4 h-4" /> غير مؤدى
                          </span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {!paid && (
                          <button
                            onClick={() => handleMarkAsPaid(s)}
                            className="bg-green-600 hover:bg-green-700 text-white px-3.5 py-1.5 rounded-xl font-medium text-xs flex items-center gap-1 mx-auto transition shadow-sm"
                          >
                            <CreditCard className="w-4 h-4" />
                            <span>تأكيد الأداء</span>
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