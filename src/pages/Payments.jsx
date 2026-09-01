import React, { useCallback, useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { useStudents } from '../context/StudentsContext';
import ConfirmDialog from '../components/ConfirmDialog';

export default function Payments() {
  const { students, setStudents } = useStudents();
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  // اختيار التلميذ وتفاصيل الوصل
  const [selectedStudentId, setSelectedStudentId] = useState('');
  const [amountPaid, setAmountPaid] = useState('');
  const [month, setMonth] = useState(new Date().toLocaleString('ar-MA', { month: 'long' }));
  const [notes, setNotes] = useState('');

  // الوصل الحالي المعروض للطباعة
  const [printedReceipt, setPrintedReceipt] = useState(null);
  const [pendingDelete, setPendingDelete] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [{ data: loadedStudentsData, error: studentsError }, { data: loadedPaymentsData, error: paymentsError }] = await Promise.all([
        supabase.from('students').select('*').eq('archived', false),
        supabase.from('payments').select('*').order('created_at', { ascending: false }),
      ]);
      if (studentsError) throw studentsError;
      if (paymentsError) throw paymentsError;
      const loadedStudents = (loadedStudentsData || []).map(data => {
        return {
          ...data,
          fullName: data.fullName || data.full_name || '',
          parentPhone: data.parentPhone || data.parent_phone || '',
          monthlyFee: data.monthlyFee ?? data.monthly_fee ?? 0,
          level: data.level || data.academic_level || '',
        };
      }).filter(s => !s.archived);
      setStudents((current) => {
        const localIds = new Set(current.map((student) => student.id));
        return [...current, ...loadedStudents.filter((student) => !localIds.has(student.id))];
      });

      setPayments((loadedPaymentsData || []).map((payment) => ({
        ...payment,
        studentId: payment.student_id || payment.studentId,
        studentName: payment.student_name || payment.studentName,
        parentPhone: payment.parent_phone || payment.parentPhone,
        createdAt: payment.created_at || payment.createdAt,
      })));
    } catch (e) {
      console.error("خطأ في جلب البيانات:", e);
      setPayments([]);
    } finally {
      setLoading(false);
    }
  }, [setStudents]);

  useEffect(() => {
    void fetchData();
    const channel = supabase
      .channel('academy-payments-page-sync')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'payments' }, () => void fetchData())
      .subscribe();
    return () => { void supabase.removeChannel(channel); };
  }, [fetchData]);

  const handleStudentSelect = (e) => {
    const sId = e.target.value;
    setSelectedStudentId(sId);
    const st = students.find(s => s.id === sId);
    if (st && st.monthlyFee) {
      setAmountPaid(st.monthlyFee);
    }
  };

  const handleRegisterPayment = async (e) => {
    e.preventDefault();
    if (!selectedStudentId || !amountPaid) return alert('المرجو اختيار التلميذ والمبلغ');

    const student = students.find(s => s.id === selectedStudentId);
    if (!student) return;
    const receiptData = {
      receiptNo: `REC-${Date.now().toString().slice(-6)}`,
      studentId: student.id,
      student_id: student.id,
      studentName: student.fullName,
      parentPhone: student.parentPhone || '',
      level: student.level,
      amount: amountPaid,
      month: month,
      notes: notes,
      date: new Date().toLocaleDateString('ar-MA', { year: 'numeric', month: 'long', day: 'numeric' }),
      time: new Date().toLocaleTimeString('ar-MA', { hour: '2-digit', minute: '2-digit' }),
      createdAt: new Date().toISOString(),
    };

    setPrintedReceipt(receiptData);
    setSelectedStudentId('');
    setAmountPaid('');
    setNotes('');
    try {
      const { data, error } = await supabase.from('payments').insert({
        receipt_no: receiptData.receiptNo,
        student_id: receiptData.studentId,
        student_name: receiptData.studentName,
        parent_phone: receiptData.parentPhone,
        level: receiptData.level,
        amount: Number(receiptData.amount),
        month: receiptData.month,
        notes: receiptData.notes,
        date: new Date().toISOString(),
        status: 'paid',
      }).select().single();
      if (error) throw error;
      setPayments((current) => [{ ...receiptData, ...data, id: data.id }, ...current]);
      setStudents((current) => current.map((item) => (
        item.id === student.id ? { ...item, paymentStatus: 'paid' } : item
      )));
    } catch (error) {
      console.error("خطأ في تسجيل الأداء:", error);
      setPrintedReceipt(null);
      alert(`تعذر حفظ الأداء في قاعدة البيانات: ${error.message || 'خطأ غير معروف'}`);
    }
  };

  // حذف وصل/عملية أداء من Firestore (سلة المهملات)
  const handleDeletePayment = async (paymentId) => {
      try {
        const { error } = await supabase.from('payments').delete().eq('id', paymentId);
        if (error) throw error;
        setPayments(prev => prev.filter(p => p.id !== paymentId));
      } catch (error) {
        console.error("خطأ أثناء حذف الوصل:", error);
        alert("حدث خطأ أثناء عملية الحذف");
      }
  };

 // إرسال وصل الاستلام عبر الواتساب عند تسديد الواجب
 const sendWhatsAppReceipt = (receipt) => {
   if (!receipt.parentPhone) return alert('رقم هاتف الولي غير متوفر لهذا التلميذ');

   const rawPhone = String(receipt.parentPhone).trim();
   const formattedPhone = rawPhone.startsWith('+')
     ? rawPhone.slice(1)
     : rawPhone.startsWith('0')
       ? `212${rawPhone.slice(1)}`
       : rawPhone.replace(/\s+/g, '').replace(/-/g, '');

   const message = `السلام عليكم ورحمة الله وبركاته،\n\n` +
     `تخبركم إدارة *أكاديمية إسهام* 🏫 بأن الواجب الشهري الخاص بالتلميذ *${receipt.studentName || 'التلميذ'}* قد تم استلامه بنجاح.\n\n` +
     `📄 رقم الوصل: *${receipt.receiptNo || '---'}*\n` +
     `📚 المستوى: *${receipt.level || 'غير محدد'}*\n` +
     `📅 الشهر: *${receipt.month || 'غير محدد'}*\n` +
     `💰 المبلغ: *${receipt.amount || 0} درهم*\n` +
     `🗓️ تاريخ الأداء: *${receipt.date || new Date().toLocaleDateString('ar-MA')}*\n\n` +
     `الحالة: ✅ *مدفوع / PAYÉ*\n\n` +
     `شكرًا لتعاونكم، ونتمنى للطالب التوفيق والنجاح. 🌟`;

   const url = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
   window.open(url, '_blank');
 };

  // إرسال تذكير بالدفع للتلاميذ الذين لم يؤدوا بعد
  const sendWhatsAppReminder = (student) => {
    if (!student.parentPhone) return alert('رقم هاتف الولي غير متوفر لهذا التلميذ');

    const formattedPhone = student.parentPhone.startsWith('0') 
      ? '212' + student.parentPhone.slice(1) 
      : student.parentPhone;

    const currentMonthName = new Date().toLocaleString('ar-MA', { month: 'long' });

    const message = `🌸 *تذكير لطيف بالواجب الشهري - ISSHAAM ACADEMY* 🌸

السلام عليكم ورحمة الله وبركاته،
تحية طيبة وبعد من إدارة *ISSHAAM ACADEMY*.

نود تذكير ولي أمر التلميذ(ة): *${student.fullName}* (${student.level}) بأن موعد استيفاء الواجب الشهري الخاص بشهر (*${currentMonthName}*) قد حان.

💰 *الواجب الشهري:* ${student.monthlyFee || '---'} درهم.

شاكرين لكم حسن تعاونكم واهتمامكم الدائم بمستقبل أبنائكم معنا 🌟.
لأي استفسار يرجى التواصل مع الإدارة.`;

    const url = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-6 dir-rtl text-right pb-10 font-sans">
      
      {/* القسم العلوي لتسجيل الواجب الشهري */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-300">
        <h2 className="text-2xl font-black text-slate-900 mb-2">استلام الواجب الشهري وإرسال الوصولات 🧾</h2>
        <p className="text-xs font-bold text-slate-600 mb-6">سجل الأداء الشهري، اطبع الوصل المـكـاشـي، وأرسل الإشعارات عبر الواتساب مباشرة</p>

        <form onSubmit={handleRegisterPayment} className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-bold">
          <div>
            <label className="block mb-1 text-slate-800">اختيار التلميذ *</label>
            <select
              value={selectedStudentId}
              onChange={handleStudentSelect}
              required
              className="w-full p-2.5 border-2 rounded-lg bg-white text-slate-900 focus:outline-none focus:border-blue-600"
            >
              <option value="">-- اختر التلميذ --</option>
              {students.map(s => (
                <option key={s.id} value={s.id}>{s.fullName} ({s.level})</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 text-slate-800">عن شهر *</label>
            <input
              type="text"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              required
              className="w-full p-2.5 border-2 rounded-lg text-slate-900"
              placeholder="مثال: أكتوبر / نونبر"
            />
          </div>

          <div>
            <label className="block mb-1 text-slate-800">المبلغ المدفوع (درهم) *</label>
            <input
              type="number"
              value={amountPaid}
              onChange={(e) => setAmountPaid(e.target.value)}
              required
              className="w-full p-2.5 border-2 rounded-lg text-slate-900"
              placeholder="300"
            />
          </div>

          <div>
            <label className="block mb-1 text-slate-800">ملاحظات (اختياري)</label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-2.5 border-2 rounded-lg text-slate-900"
              placeholder="مثال: تسقيع جزئي، واجب الدورة..."
            />
          </div>

          <div className="md:col-span-4 mt-2">
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-black text-sm shadow-md cursor-pointer transition"
            >
              💳 تسجيل الدفع وإصدار الوصل المـكـاشـي
            </button>
          </div>
        </form>
      </div>

      {/* قائمة التلاميذ والتذكير بالدفع غير المسدد */}
      <div className="bg-white rounded-xl shadow-md border border-slate-300 p-5">
        <h3 className="text-lg font-black text-slate-900 mb-3">📲 قائمة التلاميذ للتذكير السريع بالواتساب:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {students.map(st => (
            <div key={st.id} className="p-3 border rounded-lg bg-slate-50 flex justify-between items-center text-xs font-bold">
              <div>
                <p className="text-slate-900 font-black">{st.fullName}</p>
                <p className="text-slate-500">{st.level} - {st.monthlyFee || 0} درهم</p>
              </div>
              <button
                onClick={() => sendWhatsAppReminder(st)}
                className="px-2.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-lg text-[11px] flex items-center gap-1 cursor-pointer"
              >
                📱 تذكير بالأداء
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* سجل المقبوضات والعمليات السابقة */}
      <div className="bg-white rounded-xl shadow-md border border-slate-300 p-5">
        <h3 className="text-xl font-black text-slate-900 mb-4 border-b pb-2">سجل الوصولات المنجزة والأداءات 📜</h3>

        {loading ? (
          <p className="text-center font-bold text-slate-600 py-4">جاري تحميل سجل الأداءات...</p>
        ) : payments.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse text-xs">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-300 text-slate-800 font-black">
                  <th className="p-3">رقم الوصل</th>
                  <th className="p-3">اسم التلميذ</th>
                  <th className="p-3">المستوى</th>
                  <th className="p-3">عن شهر</th>
                  <th className="p-3">المبلغ المدفوع</th>
                  <th className="p-3">التاريخ والوقت</th>
                  <th className="p-3 text-center">خيارات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-bold text-slate-900">
                {payments.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50">
                    <td className="p-3 font-mono font-black text-blue-800">{p.receiptNo}</td>
                    <td className="p-3 text-sm">{p.studentName}</td>
                    <td className="p-3">{p.level}</td>
                    <td className="p-3 bg-blue-50 text-blue-900 font-black rounded">{p.month}</td>
                    <td className="p-3 text-emerald-800 font-black text-sm">{p.amount} درهم</td>
                    <td className="p-3 text-slate-500 text-[11px]">{p.date} - {p.time}</td>
                    <td className="p-3 text-center flex justify-center gap-2">
                      <button
                        onClick={() => setPrintedReceipt(p)}
                        className="px-3 py-1 bg-slate-800 hover:bg-slate-900 text-white font-black rounded cursor-pointer"
                      >
                        🖨️ معاينة
                      </button>
                      <button
                        onClick={() => sendWhatsAppReceipt(p)}
                        className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded cursor-pointer"
                      >
                        📲 واتساب
                      </button>
                      <button
                        onClick={() => setPendingDelete({ id: p.id, receiptNo: p.receiptNo })}
                        className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white font-black rounded cursor-pointer"
                        title="حذف إلى سلة المهملات"
                      >
                        🗑️ حذف
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 py-12 text-center text-slate-500">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-500 shadow-inner">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-7 w-7">
                <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z"/>
                <path d="M8 9h8M8 12h8M8 15h5"/>
              </svg>
            </div>
            <p className="text-lg font-black text-slate-700">لا توجد أداءات مسجلة بعد.</p>
            <p className="text-sm font-semibold text-slate-500">ابدأ بتسجيل أول دفعة شهرية من التلاميذ.</p>
          </div>
        )}
      </div>

      {/* النافذة المنبثقة للطباعة */}
      {printedReceipt && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-lg border-2 border-slate-400">
            
            <div className="flex justify-between items-center mb-4 print:hidden">
              <span className="font-black text-slate-800 text-sm">معاينة وصل الأداء الرسمية</span>
              <div className="flex gap-2">
                <button
                  onClick={() => sendWhatsAppReceipt(printedReceipt)}
                  className="px-3 py-1.5 bg-emerald-600 text-white font-black text-xs rounded hover:bg-emerald-700 cursor-pointer"
                >
                  📲 إرسال للواتساب
                </button>
                <button
                  onClick={() => window.print()}
                  className="px-3 py-1.5 bg-blue-700 text-white font-black text-xs rounded hover:bg-blue-800 cursor-pointer"
                >
                  🖨️ طباعة الآن
                </button>
                <button
                  onClick={() => setPrintedReceipt(null)}
                  className="px-3 py-1.5 bg-slate-200 text-slate-800 font-black text-xs rounded hover:bg-slate-300 cursor-pointer"
                >
                  إغلاق ✖
                </button>
              </div>
            </div>

            <div className="relative border-4 border-slate-900 p-6 rounded-lg bg-white text-slate-900 space-y-4 text-right overflow-hidden shadow-inner">
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-22deg] pointer-events-none opacity-85">
                <div className="border-4 border-dashed border-red-600 rounded-full w-44 h-44 flex flex-col justify-center items-center text-center p-2 bg-red-50/30">
                  <span className="text-xs font-black text-red-600 tracking-wider">★ ISSHAAM ACADEMY ★</span>
                  <span className="text-2xl font-black text-red-600 my-0.5 border-y-2 border-red-600 px-3">PAYÉ</span>
                  <span className="text-[10px] font-black text-red-600">تم الأداء - مقبوض</span>
                </div>
              </div>

              <div className="border-b-2 border-slate-900 pb-3 flex justify-between items-center relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-900 text-white rounded-xl flex items-center justify-center font-black text-xl shadow">
                    🎓
                  </div>
                  <div>
                    <h2 className="text-xl font-black text-slate-900">ISSHAAM ACADEMY</h2>
                    <p className="text-[11px] font-bold text-blue-900">مؤسسة الدعم والتقوية والتوجيه</p>
                  </div>
                </div>
                <div className="text-left font-mono text-xs font-black">
                  <p className="text-blue-900">{printedReceipt.receiptNo}</p>
                  <p className="text-[10px] text-slate-600">{printedReceipt.date}</p>
                </div>
              </div>

              <div className="text-center bg-slate-900 text-white py-1.5 rounded font-black text-xs tracking-wide relative z-10">
                وصل استلام الواجب الشهري الرسمي — REÇU DE PAIEMENT
              </div>

              <div className="space-y-2 text-xs font-bold pt-1 relative z-10">
                <div className="flex justify-between border-b pb-1 border-slate-200">
                  <span className="text-slate-600">اسم التلميذ(ة):</span>
                  <span className="text-slate-900 font-black text-sm">{printedReceipt.studentName}</span>
                </div>

                <div className="flex justify-between border-b pb-1 border-slate-200">
                  <span className="text-slate-600">المستوى الدراسي:</span>
                  <span>{printedReceipt.level}</span>
                </div>

                <div className="flex justify-between border-b pb-1 border-slate-200">
                  <span className="text-slate-600">واجب شهر:</span>
                  <span className="font-black text-blue-900">{printedReceipt.month}</span>
                </div>

                <div className="flex justify-between border-b pb-1 border-slate-200">
                  <span className="text-slate-600">المبلغ المستلم:</span>
                  <span className="font-black text-emerald-800 text-base">{printedReceipt.amount} درهم مغربي</span>
                </div>

                {printedReceipt.notes && (
                  <div className="flex justify-between border-b pb-1 border-slate-200">
                    <span className="text-slate-600">ملاحظات الإدارة:</span>
                    <span>{printedReceipt.notes}</span>
                  </div>
                )}

              </div>

              <div className="bg-blue-50/80 p-2.5 rounded-lg border border-blue-200 text-center relative z-10">
                <p className="text-[11px] font-black text-blue-950">🌟 نشكركم على ثقتكم الغالية فـ أكاديمية ISSHAAM. نسأل الله التوفيق والنجاح لأبنائنا الكرام! 🌟</p>
              </div>

              <div className="pt-4 flex justify-between text-[11px] font-black text-slate-800 relative z-10">
                <p>توقيع وخاتم الإدارة:</p>
                <p>توقيع الولي(ة):</p>
              </div>

            </div>

          </div>
        </div>
      )}

      <ConfirmDialog
        open={Boolean(pendingDelete)}
        title="تأكيد حذف الوصل"
        message={`هل أنت متأكد من نقل الوصل رقم ${pendingDelete?.receiptNo || ''} إلى سلة المهملات؟`}
        confirmLabel="حذف الوصل"
        onCancel={() => setPendingDelete(null)}
        onConfirm={async () => {
          const payment = pendingDelete;
          setPendingDelete(null);
          await handleDeletePayment(payment.id);
        }}
      />

    </div>
  );
}