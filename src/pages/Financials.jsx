import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { DollarSign, CheckCircle2, Clock, Search, CreditCard, Printer, X } from 'lucide-react';

export default function Financials() {
  const [students, setStudents] = useState([]);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('شتنبر');
  const [statusFilter, setStatusFilter] = useState('all'); // all, paid, pending
  const [selectedReceipt, setSelectedReceipt] = useState(null);

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
      const newPayment = {
        studentId: student.id,
        studentName: student.fullName,
        amount: student.monthlyFee,
        month: selectedMonth,
        status: 'مؤدى',
        paidAt: new Date().toLocaleDateString('ar-MA'),
      };
      await addDoc(collection(db, 'payments'), {
        ...newPayment,
        paidAtTimestamp: serverTimestamp()
      });
      fetchData(); // تحديث اللائحة
      setSelectedReceipt({ ...newPayment, level: student.level });
    } catch (err) {
      console.error('خطأ فـ تسجيل الأداء:', err);
    }
  };

  const getPaymentInfo = (studentId) => {
    return payments.find(p => p.studentId === studentId && p.month === selectedMonth && (p.status === 'مؤدى' || p.status === 'paid'));
  };

  const filteredStudents = students.filter(s => {
    const matchesSearch = s.fullName?.toLowerCase().includes(searchTerm.toLowerCase());
    const paid = !!getPaymentInfo(s.id);
    if (statusFilter === 'paid') return matchesSearch && paid;
    if (statusFilter === 'pending') return matchesSearch && !paid;
    return matchesSearch;
  });

  const totalCollected = students.reduce((acc, s) => getPaymentInfo(s.id) ? acc + Number(s.monthlyFee || 0) : acc, 0);
  const totalPending = students.reduce((acc, s) => !getPaymentInfo(s.id) ? acc + Number(s.monthlyFee || 0) : acc, 0);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-6 space-y-6 dir-rtl text-right pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-5 rounded-xl shadow-sm border border-slate-200">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">إدارة المالية والأداءات 💰</h1>
          <p className="text-gray-500 text-sm mt-1">متابعة الواجبات الشهريّة واستخلاص الواجبات</p>
        </div>

        {/* الشهر المحدد */}
        <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl border border-slate-200">
          <label className="text-xs font-bold text-gray-700">تحديد الشهر:</label>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="px-3 py-1.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none font-bold text-gray-800 text-sm"
          >
            {months.map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400">المداخيل المستخلصة ({selectedMonth})</p>
            <h3 className="text-xl font-extrabold text-emerald-600 mt-1">{totalCollected} DH</h3>
          </div>
          <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center font-bold">
            <DollarSign className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400">المستحقات المتبقية ({selectedMonth})</p>
            <h3 className="text-xl font-extrabold text-amber-600 mt-1">{totalPending} DH</h3>
          </div>
          <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center font-bold">
            <Clock className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400">نسبة التحصيل</p>
            <h3 className="text-xl font-extrabold text-indigo-600 mt-1">
              {students.length > 0 ? Math.round((students.filter(s => getPaymentInfo(s.id)).length / students.length) * 100) : 0}%
            </h3>
          </div>
          <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center font-bold">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            placeholder="البحث باسم التلميذ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm"
          />
          <Search className="w-4 h-4 text-gray-400 absolute right-3 top-3" />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <button
            onClick={() => setStatusFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${statusFilter === 'all' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            الكل
          </button>
          <button
            onClick={() => setStatusFilter('paid')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${statusFilter === 'paid' ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'}`}
          >
            تم الأداء ✅
          </button>
          <button
            onClick={() => setStatusFilter('pending')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${statusFilter === 'pending' ? 'bg-amber-600 text-white' : 'bg-amber-50 text-amber-700 hover:bg-amber-100'}`}
          >
            غير مؤدى ⏳
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500 font-bold">جاري تحميل البيانات المالية...</div>
        ) : filteredStudents.length === 0 ? (
          <div className="p-8 text-center text-gray-500">لا يوجد تلاميذ مطابقون للبحث.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 text-sm">
                  <th className="p-4">اسم التلميذ</th>
                  <th className="p-4">المستوى</th>
                  <th className="p-4">الواجب الشهري</th>
                  <th className="p-4">حالة أداء شهر ({selectedMonth})</th>
                  <th className="p-4 text-center">الإجراء والوصل</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                {filteredStudents.map((s) => {
                  const payment = getPaymentInfo(s.id);
                  const paid = !!payment;
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
                        {paid ? (
                          <button
                            onClick={() => setSelectedReceipt({ ...payment, level: s.level, monthlyFee: s.monthlyFee })}
                            className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-xl font-medium text-xs inline-flex items-center gap-1 transition"
                          >
                            <Printer className="w-3.5 h-3.5" />
                            <span>معاينة الوصل</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => handleMarkAsPaid(s)}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-1.5 rounded-xl font-medium text-xs inline-flex items-center gap-1 transition shadow-sm"
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

      {/* Modal الوصل للطباعة */}
      {selectedReceipt && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 max-w-md w-full p-6 space-y-4 relative">
            <button 
              onClick={() => setSelectedReceipt(null)}
              className="absolute left-4 top-4 p-1 text-slate-400 hover:text-slate-600 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <div id="printable-receipt" className="space-y-4 text-right">
              <div className="text-center border-b pb-3">
                <h2 className="text-xl font-extrabold text-slate-800">أكاديمية إسهام 🏫</h2>
                <p className="text-xs text-slate-500 mt-1">وصل أداء واجبات الدعم المدرسي</p>
              </div>

              <div className="space-y-2 text-sm bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="flex justify-between">
                  <span className="text-slate-500">اسم التلميذ:</span>
                  <span className="font-bold text-slate-800">{selectedReceipt.studentName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">المستوى:</span>
                  <span className="font-medium text-slate-700">{selectedReceipt.level || 'غير محدد'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">الشهر المستخلص:</span>
                  <span className="font-bold text-indigo-600">{selectedReceipt.month}</span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-2 mt-2">
                  <span className="text-slate-500">المبلغ المؤدى:</span>
                  <span className="font-extrabold text-emerald-600 text-base">{selectedReceipt.amount} DH</span>
                </div>
              </div>

              <div className="text-xs text-slate-400 text-center space-y-1">
                <p>تاريخ الأداء: {selectedReceipt.paidAt || new Date().toLocaleDateString('ar-MA')}</p>
                <p>شكراً لثقتكم بأكاديمية إسهام 🌹</p>
              </div>
            </div>

            <div className="flex gap-2 pt-2 border-t">
              <button 
                onClick={handlePrint}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-xl text-sm flex items-center justify-center gap-2 transition"
              >
                <Printer className="w-4 h-4" /> طباعة الوصل
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}