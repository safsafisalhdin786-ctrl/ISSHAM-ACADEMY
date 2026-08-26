import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { 
  collection, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  serverTimestamp 
} from 'firebase/firestore';

export default function Payments() {
  const [payments, setPayments] = useState([]);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [saving, setSaving] = useState(false);
  
  // حالة الوصل المحدد للطباعة
  const [selectedReceipt, setSelectedReceipt] = useState(null);

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
      setLoading(true);
      const [studentsSnap, paymentsSnap] = await Promise.all([
        getDocs(collection(db, 'students')),
        getDocs(collection(db, 'payments'))
      ]);

      const studentsList = studentsSnap.docs.map(d => ({
        id: d.id,
        ...d.data()
      }));
      setStudents(studentsList);

      const paymentsList = paymentsSnap.docs.map(d => ({
        id: d.id,
        ...d.data()
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

  // اختيار تلميذ وملء اسمه ومبلغه تلقائياً
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
    if (!newPayment.studentId && !newPayment.studentName) return;

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

  // تغيير حالة الواجب
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

  // حذف سجل الأداء
  const handleDeletePayment = async (paymentId) => {
    if (window.confirm('هل أنت تأكد من حذف هاد سجل الأداء؟')) {
      try {
        await deleteDoc(doc(db, 'payments', paymentId));
        fetchData();
      } catch (error) {
        console.error("خطأ في حذف الدفعة:", error);
      }
    }
  };

  // دالة طباعة الوصل
  const handlePrint = (payment, student) => {
    const today = new Date().toLocaleDateString('ar-MA', { year: 'numeric', month: 'long', day: 'numeric' });
    setSelectedReceipt({
      studentName: student ? student.fullName : payment.studentName,
      level: student?.level || 'غير محدد',
      subjects: Array.isArray(student?.subjects) ? student.subjects.join(', ') : (student?.subjects || 'الدعم المدرسي'),
      amount: payment.amount,
      month: payment.month,
      date: today
    });

    setTimeout(() => {
      window.print();
    }, 200);
  };

  return (
    <div className="space-y-6 dir-rtl pb-12">
      {/* CSS الخاص بالطباعة باش يخرج غير الوصل بوحده */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #printable-receipt, #printable-receipt * {
            visibility: visible;
          }
          #printable-receipt {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            display: block !important;
          }
        }
      `}</style>

      {/* الهيدر */}
      <div className="flex justify-between items-center bg-white p-5 rounded-xl shadow-sm border border-slate-200">
        <div>
          <h2 className="text-xl font-bold text-slate-800">المالية والأداءات 💳</h2>
          <p className="text-sm text-slate-500">تتبع واستخلاص الواجبات الشهرية للتلاميذ</p>
        </div>
        <button 
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition shadow-sm font-medium flex items-center gap-2 text-sm"
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
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white text-sm"
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
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm" 
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
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm" 
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">حالة الدفع</label>
              <select 
                value={newPayment.status}
                onChange={(e) => setNewPayment({...newPayment, status: e.target.value})}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white text-sm"
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
              className="px-5 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition font-medium text-sm"
            >
              إلغاء
            </button>
            <button 
              type="submit" 
              disabled={saving} 
              className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition shadow-md font-medium text-sm disabled:opacity-50"
            >
              {saving ? 'جاري الحفظ...' : 'حفظ العملية ✅'}
            </button>
          </div>
        </form>
      )}

      {/* جدول السجلات */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {loading ? (
          <div className="p-6 text-center text-slate-500 font-bold">جاري تحميل سجلات المالية...</div>
        ) : payments.length === 0 ? (
          <div className="p-6 text-center text-slate-500">لا توجد عمليات دفع مسجلة حالياً.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead className="bg-slate-50 border-b border-slate-200 text-sm">
                <tr>
                  <th className="px-6 py-3 text-slate-600 font-semibold">اسم التلميذ</th>
                  <th className="px-6 py-3 text-slate-600 font-semibold">الشهر</th>
                  <th className="px-6 py-3 text-slate-600 font-semibold">المبلغ</th>
                  <th className="px-6 py-3 text-slate-600 font-semibold">الحالة</th>
                  <th className="px-6 py-3 text-slate-600 font-semibold text-center">إجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {payments.map(p => {
                  const currentStudent = students.find(s => s.id === p.studentId);
                  const displayName = currentStudent ? currentStudent.fullName : (p.studentName || 'تلميذ غير محدد');

                  return (
                    <tr key={p.id} className="hover:bg-slate-50 transition">
                      <td className="px-6 py-4 font-bold text-slate-800">{displayName}</td>
                      <td className="px-6 py-4 text-slate-600">{p.month}</td>
                      <td className="px-6 py-4 font-bold text-emerald-600">{p.amount} درهم</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          p.status === 'مؤدى' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                        }`}>
                          {p.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {p.status === 'مؤدى' && (
                            <button 
                              onClick={() => handlePrint(p, currentStudent)}
                              className="text-xs px-3 py-1.5 rounded bg-amber-50 border border-amber-200 text-amber-800 hover:bg-amber-100 transition font-bold flex items-center gap-1"
                              title="طباعة الوصل"
                            >
                              🖨️ طباعة الوصل
                            </button>
                          )}
                          <button 
                            onClick={() => toggleStatus(p.id, p.status)}
                            className="text-xs px-3 py-1.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition font-medium"
                          >
                            تغيير الحالة 🔄
                          </button>
                          <button 
                            onClick={() => handleDeletePayment(p.id)}
                            className="p-1.5 text-rose-600 hover:bg-rose-50 rounded transition"
                            title="حذف"
                          >
                            🗑️
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* نموذج الوصل المخصص للطباعة فقط */}
      {selectedReceipt && (
        <div id="printable-receipt" className="hidden p-8 max-w-2xl mx-auto border-2 border-slate-900 bg-white text-slate-900 dir-rtl">
          {/* هيدر الوصل */}
          <div className="flex justify-between items-center border-b-2 border-slate-800 pb-4 mb-6">
            <div>
              <h1 className="text-2xl font-black tracking-wide text-slate-900">أكاديمية إسهام</h1>
              <p className="text-sm font-bold text-slate-600 tracking-wider">ISSHAAM ACADEMY</p>
              <p className="text-xs text-slate-500 mt-1">حي مولاي رشيد - الدار البيضاء</p>
            </div>
            <div className="text-left">
              <span className="text-xs font-bold text-slate-500 block">التاريخ: {selectedReceipt.date}</span>
              <span className="text-xs font-bold text-slate-500 block">الشهر المستحق: {selectedReceipt.month}</span>
            </div>
          </div>

          <div className="text-center my-6">
            <h2 className="text-xl font-bold uppercase underline tracking-wider border border-slate-800 inline-block px-6 py-1 rounded">
              وصل أداء واجب التسجيل / REÇU DE PAIEMENT
            </h2>
          </div>

          {/* تفاصيل التلميذ والأداء */}
          <div className="space-y-4 text-base my-8 bg-slate-50 p-4 rounded border border-slate-300">
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span className="font-bold text-slate-600">اسم التلميذ(ة):</span>
              <span className="font-black text-slate-900 text-lg">{selectedReceipt.studentName}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span className="font-bold text-slate-600">المستوى الدراسي:</span>
              <span className="font-bold text-slate-800">{selectedReceipt.level}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-2">
              <span className="font-bold text-slate-600">المواد المسجل فيها:</span>
              <span className="font-bold text-slate-800">{selectedReceipt.subjects}</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="font-bold text-slate-600">المبلغ المستلم:</span>
              <span className="font-black text-emerald-700 text-xl">{selectedReceipt.amount} درهم</span>
            </div>
          </div>

          {/* الكاشي والختم */}
          <div className="flex justify-between items-end mt-12 pt-6 border-t-2 border-slate-800">
            {/* طابع الكاشي */}
            <div className="border-4 border-emerald-600 text-emerald-600 font-black px-6 py-2 rounded-lg transform -rotate-12 tracking-widest text-lg uppercase opacity-90 shadow-sm">
              Payé / تم الأداء ✅
            </div>

            {/* التوقيع والختم */}
            <div className="text-center">
              <p className="font-bold text-slate-800 mb-10">إدارة الأكاديمية</p>
              <p className="text-xs text-slate-400">[ التوقيع والختم ]</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}