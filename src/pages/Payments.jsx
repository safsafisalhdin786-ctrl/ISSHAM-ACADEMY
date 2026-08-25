import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, addDoc, updateDoc, doc, serverTimestamp } from 'firebase/firestore';

export default function Payments() {
  const [payments, setPayments] = useState([]);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [saving, setSaving] = useState(false);

  const [newPayment, setNewPayment] = useState({
    studentId: '',
    studentName: '',
    amount: '',
    month: new Date().toISOString().substring(0, 7), // الشهر الحالي YYYY-MM
    status: 'مؤدى'
  });

  // جلب التلاميذ والمدفوعات من Firebase
  const fetchData = async () => {
    try {
      const studentsSnap = await getDocs(collection(db, 'students'));
      const studentsList = studentsSnap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setStudents(studentsList);

      const paymentsSnap = await getDocs(collection(db, 'payments'));
      const paymentsList = paymentsSnap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPayments(paymentsList);
    } catch (error) {
      console.error("خطأ في جلب بيانات المالية:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // اختيار تلميذ ملء اسمه ومبلغه تلقائياً
  const handleStudentSelect = (e) => {
    const selectedId = e.target.value;
    const selectedStudent = students.find(s => s.id === selectedId);
    if (selectedStudent) {
      setNewPayment(prev => ({
        ...prev,
        studentId: selectedId,
        studentName: selectedStudent.fullName,
        amount: selectedStudent.monthlyFee || ''
      }));
    } else {
      setNewPayment(prev => ({ ...prev, studentId: '', studentName: '', amount: '' }));
    }
  };

  // تسجيل دفعة جديدة
  const handleAddPayment = async (e) => {
    e.preventDefault();
    if (!newPayment.studentName) return;

    setSaving(true);
    try {
      await addDoc(collection(db, 'payments'), {
        ...newPayment,
        amount: Number(newPayment.amount),
        createdAt: serverTimestamp()
      });
      setShowAddForm(false);
      setNewPayment({
        studentId: '',
        studentName: '',
        amount: '',
        month: new Date().toISOString().substring(0, 7),
        status: 'مؤدى'
      });
      fetchData(); // تحديث اللائحة
    } catch (error) {
      console.error("خطأ في تسجيل الواجب الشهري:", error);
    } finally {
      setSaving(false);
    }
  };

  // تغيير حالة الواجب (مثلاً تحويله من متأخر إلى مؤدى)
  const toggleStatus = async (paymentId, currentStatus) => {
    const newStatus = currentStatus === 'مؤدى' ? 'متأخر' : 'مؤدى';
    try {
      const paymentRef = doc(db, 'payments', paymentId);
      await updateDoc(paymentRef, { status: newStatus });
      fetchData();
    } catch (error) {
      console.error("خطأ في تغيير حالة الدفع:", error);
    }
  };

  return (
    <div className="space-y-6 dir-rtl pb-12">
      {/* الهيدر */}
      <div className="flex justify-between items-center bg-white p-5 rounded-xl shadow-sm border border-slate-200">
        <div>
          <h2 className="text-xl font-bold text-slate-800">المالية والأداءات</h2>
          <p className="text-sm text-slate-500">تتبع واستخلاص الواجبات الشهرية للتلاميذ</p>
        </div>
        <button 
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition shadow-sm font-medium flex items-center gap-2"
        >
          {showAddForm ? 'إلغاء' : '+ تسجيل واجب شهري'}
        </button>
      </div>

      {/* فورم تسجيل دفعة جديدة */}
      {showAddForm && (
        <form onSubmit={handleAddPayment} className="bg-white p-6 rounded-xl shadow-md border border-emerald-100 space-y-6">
          <h3 className="text-lg font-bold text-slate-800 border-b pb-2">تسجيل أداء جديد</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">اختر التلميذ</label>
              <select 
                value={newPayment.studentId}
                onChange={handleStudentSelect}
                required
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white"
              >
                <option value="">-- اختر تلميذاً من القائمة --</option>
                {students.map(s => (
                  <option key={s.id} value={s.id}>{s.fullName} ({s.level})</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">الشهر المستحق</label>
              <input 
                type="month" 
                value={newPayment.month} 
                onChange={(e) => setNewPayment({...newPayment, month: e.target.value})}
                required 
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none" 
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">المبلغ (درهم)</label>
              <input 
                type="number" 
                value={newPayment.amount} 
                onChange={(e) => setNewPayment({...newPayment, amount: e.target.value})}
                placeholder="المبلغ بالدرهم"
                required 
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none" 
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">حالة الدفع</label>
              <select 
                value={newPayment.status}
                onChange={(e) => setNewPayment({...newPayment, status: e.target.value})}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white"
              >
                <option value="مؤدى">مؤدى ✅</option>
                <option value="متأخر">متأخر / غير مؤدى ⏳</option>
              </select>
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
              className="px-6 py-2.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition shadow-md font-medium disabled:opacity-50"
            >
              {saving ? 'جاري الحفظ...' : 'حفظ العملية ✅'}
            </button>
          </div>
        </form>
      )}

      {/* جدول السجلات */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {loading ? (
          <div className="p-6 text-center text-slate-500">جاري تحميل سجلات المالية...</div>
        ) : payments.length === 0 ? (
          <div className="p-6 text-center text-slate-500">لا توجد عمليات دفع مسجلة حالياً.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-3 text-slate-600 font-semibold text-sm">اسم التلميذ</th>
                  <th className="px-6 py-3 text-slate-600 font-semibold text-sm">الشهر</th>
                  <th className="px-6 py-3 text-slate-600 font-semibold text-sm">المبلغ</th>
                  <th className="px-6 py-3 text-slate-600 font-semibold text-sm">الحالة</th>
                  <th className="px-6 py-3 text-slate-600 font-semibold text-sm text-center">إجراء</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {payments.map(p => (
                  <tr key={p.id} className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4 font-medium text-slate-800">{p.studentName}</td>
                    <td className="px-6 py-4 text-slate-600">{p.month}</td>
                    <td className="px-6 py-4 font-bold text-slate-800">{p.amount} درهم</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        p.status === 'مؤدى' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                      }`}>
                        {p.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button 
                        onClick={() => toggleStatus(p.id, p.status)}
                        className="text-xs px-3 py-1.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition font-medium"
                      >
                        تغيير الحالة 🔄
                      </button>
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