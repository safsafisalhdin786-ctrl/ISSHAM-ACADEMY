import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { DollarSign, CheckCircle2, Clock, Search, CreditCard, Printer } from 'lucide-react';
import { logActivity } from '../utils/localHistory';
import { useStudents } from '../context/StudentsContext';

export default function Financials() {
  const { students } = useStudents();
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('شتنبر');
  const [statusFilter, setStatusFilter] = useState('all');

  const months = ['شتنبر', 'أكتوبر', 'نونبر', 'دجنبر', 'يناير', 'فبراير', 'مارس', 'أبريل', 'ماي', 'يونيو'];

  const formatDate = (dateVal) => {
    if (!dateVal) return new Date().toLocaleDateString('ar-MA');
    if (typeof dateVal === 'string') return dateVal;
    if (dateVal.seconds) return new Date(dateVal.seconds * 1000).toLocaleDateString('ar-MA');
    return String(dateVal);
  };

  const fetchData = async () => {
    try {
      await getDocs(collection(db, 'students'));
      
      const paymentsSnap = await getDocs(collection(db, 'payments'));
      const paymentsList = paymentsSnap.docs.map(doc => doc.data());

      const localPayments = JSON.parse(window.localStorage.getItem('isshaam_payments') || '[]');
      const knownReceipts = new Set(paymentsList.map((payment) => payment.receiptNo).filter(Boolean));
      setPayments([
        ...paymentsList,
        ...localPayments.filter((payment) => !payment.receiptNo || !knownReceipts.has(payment.receiptNo)),
      ]);
    } catch (err) {
      console.error('خطأ في جلب البيانات:', err);
      const localPayments = JSON.parse(window.localStorage.getItem('isshaam_payments') || '[]');
      setPayments(localPayments);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const syncPayments = () => {
      try {
        setPayments(JSON.parse(window.localStorage.getItem('isshaam_payments') || '[]'));
      } catch {
        setPayments([]);
      }
    };
    window.addEventListener('storage', syncPayments);
    window.addEventListener('isshaam:payments-updated', syncPayments);
    return () => {
      window.removeEventListener('storage', syncPayments);
      window.removeEventListener('isshaam:payments-updated', syncPayments);
    };
  }, []);

  const getPaymentInfo = (studentId) => {
    return payments.find(p => String(p.studentId) === String(studentId) && p.month === selectedMonth && (p.status === 'مؤدى' || p.status === 'paid'));
  };

  const handleMarkAsPaid = async (student) => {
    try {
      const formattedDate = new Date().toLocaleDateString('ar-MA');
      const newPayment = {
        studentId: student.id || '',
        studentName: student.fullName || '',
        amount: student.monthlyFee || 0,
        month: selectedMonth,
        status: 'مؤدى',
        paidAt: formattedDate,
      };

      setPayments(prev => [...prev, newPayment]);
      const localPayments = JSON.parse(window.localStorage.getItem('isshaam_payments') || '[]');
      window.localStorage.setItem('isshaam_payments', JSON.stringify([
        { ...newPayment, createdAt: new Date().toISOString() },
        ...localPayments,
      ]));
      window.dispatchEvent(new Event('isshaam:payments-updated'));
      logActivity('تسجيل أداء', `تم تسجيل أداء بقيمة ${newPayment.amount} للطالب ${newPayment.studentName}.`);

      await addDoc(collection(db, 'payments'), {
        ...newPayment,
        paidAtTimestamp: serverTimestamp()
      });

      fetchData();
    } catch (err) {
      console.error('خطأ في تسجيل الأداء:', err);
    }
  };

  const handlePrintReceipt = (student, payment) => {
    const printWindow = window.open('', '_blank', 'width=600,height=700');
    if (!printWindow) return;

    const studentName = student.fullName || 'غير محدد';
    const level = student.level || 'غير محدد';
    const amount = payment?.amount || student.monthlyFee || 0;
    const paidDate = formatDate(payment?.paidAt);

    const htmlContent = `
      <!DOCTYPE html>
      <html dir="rtl" lang="ar">
      <head>
        <meta charset="UTF-8">
        <title>وصل أداء - ${studentName}</title>
        <style>
          body { font-family: sans-serif; padding: 20px; direction: rtl; text-align: right; }
          .box { border: 2px solid #e2e8f0; border-radius: 12px; padding: 20px; max-width: 400px; margin: auto; }
          .header { text-align: center; border-bottom: 1px solid #eee; padding-bottom: 10px; }
          .row { display: flex; justify-content: space-between; margin: 10px 0; }
          .total { font-weight: bold; color: #059669; font-size: 18px; }
        </style>
      </head>
      <body>
        <div class="box">
          <div class="header">
            <h2>أكاديمية إسهام 🏫</h2>
            <p>وصل استلام الواجب الشهري</p>
          </div>
          <div class="row"><span>التلميذ:</span><strong>${studentName}</strong></div>
          <div class="row"><span>المستوى:</span><strong>${level}</strong></div>
          <div class="row"><span>الشهر:</span><strong>${selectedMonth}</strong></div>
          <div class="row total"><span>المبلغ:</span><span>${amount} DH</span></div>
          <hr />
          <p style="font-size:12px; color:#666;">تاريخ الأداء: ${paidDate}</p>
        </div>
        <script>window.onload = function() { window.print(); window.close(); };</script>
      </body>
      </html>
    `;
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  const activeStudents = students.filter((student) => !student.archived);
  const filteredStudents = activeStudents.filter(s => {
    const matchesSearch = (s.fullName || '').toLowerCase().includes(searchTerm.toLowerCase());
    const paid = !!getPaymentInfo(s.id);
    if (statusFilter === 'paid') return matchesSearch && paid;
    if (statusFilter === 'pending') return matchesSearch && !paid;
    return matchesSearch;
  });

  const totalCollected = activeStudents.reduce((acc, s) => getPaymentInfo(s.id) ? acc + Number(s.monthlyFee || 0) : acc, 0);
  const totalPending = activeStudents.reduce((acc, s) => !getPaymentInfo(s.id) ? acc + Number(s.monthlyFee || 0) : acc, 0);

  return (
    <div className="p-6 space-y-6 dir-rtl text-right pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-5 rounded-xl shadow-sm border border-slate-200">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">إدارة المالية والأداءات 💰</h1>
          <p className="text-gray-500 text-sm mt-1">متابعة الواجبات الشهريّة</p>
        </div>

        <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-xl border border-slate-200">
          <label className="text-xs font-bold text-gray-700">الشهر:</label>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-sm font-bold"
          >
            {months.map(m => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400">المداخيل ({selectedMonth})</p>
            <h3 className="text-xl font-extrabold text-emerald-600 mt-1">{totalCollected} DH</h3>
          </div>
          <DollarSign className="w-6 h-6 text-emerald-600" />
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400">المتبقية ({selectedMonth})</p>
            <h3 className="text-xl font-extrabold text-amber-600 mt-1">{totalPending} DH</h3>
          </div>
          <Clock className="w-6 h-6 text-amber-600" />
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400">نسبة التحصيل</p>
            <h3 className="text-xl font-extrabold text-indigo-600 mt-1">
              {activeStudents.length > 0 ? Math.round((activeStudents.filter(s => getPaymentInfo(s.id)).length / activeStudents.length) * 100) : 0}%
            </h3>
          </div>
          <CheckCircle2 className="w-6 h-6 text-indigo-600" />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            placeholder="البحث باسم التلميذ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-xl text-sm"
          />
          <Search className="w-4 h-4 text-gray-400 absolute right-3 top-3" />
        </div>

        <div className="flex items-center gap-2">
          <button onClick={() => setStatusFilter('all')} className="border border-slate-700 bg-slate-900 px-3 py-1.5 rounded-lg text-xs font-bold text-white">الكل</button>
          <button onClick={() => setStatusFilter('paid')} className="border border-emerald-300 bg-emerald-100 px-3 py-1.5 rounded-lg text-xs font-bold text-emerald-800">تم الأداء</button>
          <button onClick={() => setStatusFilter('pending')} className="border border-rose-300 bg-rose-100 px-3 py-1.5 rounded-lg text-xs font-bold text-rose-800">غير مؤدى</button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {loading ? (
          <div className="p-8 text-center text-gray-500 font-bold">جاري تحميل البيانات...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-300 text-slate-900 text-sm">
                  <th className="p-4">اسم التلميذ</th>
                  <th className="p-4">المستوى</th>
                  <th className="p-4">الواجب الشهري</th>
                  <th className="p-4">الحالة</th>
                  <th className="p-4 text-center">الإجراء</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {filteredStudents.map((s) => {
                  const payment = getPaymentInfo(s.id);
                  const paid = !!payment;
                  return (
                    <tr key={s.id} className="hover:bg-gray-50">
                      <td className="p-4 font-semibold">{s.fullName}</td>
                      <td className="p-4">{s.level || 'غير محدد'}</td>
                      <td className="p-4 font-bold text-emerald-600">{s.monthlyFee || 0} DH</td>
                      <td className="p-4">
                        {paid ? (
                          <span className="border border-emerald-300 bg-emerald-100 px-2 py-1 rounded-lg text-xs font-bold text-emerald-800">تم الأداء ✅</span>
                        ) : (
                          <span className="border border-rose-300 bg-rose-100 px-2 py-1 rounded-lg text-xs font-bold text-rose-800">غير مؤدى ⏳</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {paid ? (
                          <button
                            onClick={() => handlePrintReceipt(s, payment)}
                            className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-xl text-xs font-medium inline-flex items-center gap-1"
                          >
                            <Printer className="w-3.5 h-3.5" /> طباعة الوصل
                          </button>
                        ) : (
                          <button
                            onClick={() => handleMarkAsPaid(s)}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-1.5 rounded-xl text-xs font-medium inline-flex items-center gap-1"
                          >
                            <CreditCard className="w-4 h-4" /> تأكيد الأداء
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