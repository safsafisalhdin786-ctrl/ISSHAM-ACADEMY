import React, { useState, useEffect } from 'react';
import { supabase, describeSupabaseError } from '../supabase';
import { DollarSign, CheckCircle2, Clock, Search, CreditCard, Printer, MessageCircle, X } from 'lucide-react';
import { useStudents } from '../context/StudentsContext';
import { useAuth } from '../context/AuthContext';
import logger from '../utils/logger';

export default function Financials() {
  const { currentUser } = useAuth();
  const { students } = useStudents();
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('شتنبر');
  const [statusFilter, setStatusFilter] = useState('all');
  // معرف التلميذ الجاري تأكيد أداءه حالياً (لمنع الضغط المزدوج/التكرار)
  const [confirmingId, setConfirmingId] = useState(null);
  // بيانات آخر أداء تم تأكيده، لعرض بطاقة التأكيد وإرسالها عبر الواتساب
  const [confirmedPayment, setConfirmedPayment] = useState(null);

  const months = ['شتنبر', 'أكتوبر', 'نونبر', 'دجنبر', 'يناير', 'فبراير', 'مارس', 'أبريل', 'ماي', 'يونيو'];

  // عمود "month" في جدول payments الحقيقي في Supabase من نوع integer (رقم الشهر
  // التقويمي 1-12)، وليس نصاً. تم التأكد من ذلك مباشرة عبر خطأ Postgres:
  // "invalid input syntax for type integer" عند إرسال اسم الشهر بالعربية.
  // هذا التطابق يربط كل اسم شهر بالسنة الدراسية برقم الشهر التقويمي الفعلي.
  const monthNameToNumber = {
    'شتنبر': 9, 'أكتوبر': 10, 'نونبر': 11, 'دجنبر': 12,
    'يناير': 1, 'فبراير': 2, 'مارس': 3, 'أبريل': 4, 'ماي': 5, 'يونيو': 6,
  };
  const monthNumberToName = Object.fromEntries(
    Object.entries(monthNameToNumber).map(([name, num]) => [num, name])
  );

  // "year" و"payment_month" (date) عمودان حقيقيان في الجدول تم اكتشافهما مباشرة عبر
  // أخطاء Postgres 23502 (NOT NULL). "payment_month" من نوع date (يقبل فقط تاريخاً
  // كاملاً مثل "2026-09-01")، لذا نحسب أول يوم من الشهر التقويمي المختار ضمن السنة
  // الدراسية الصحيحة: أشهر شتنبر-دجنبر تنتمي لسنة بداية الموسم الدراسي، وأشهر
  // يناير-يونيو تنتمي للسنة الموالية.
  const getAcademicYearForMonth = (monthNumber) => {
    const now = new Date();
    const currentCalendarMonth = now.getMonth() + 1;
    const currentCalendarYear = now.getFullYear();
    const academicStartYear = currentCalendarMonth >= 9 ? currentCalendarYear : currentCalendarYear - 1;
    return monthNumber >= 9 ? academicStartYear : academicStartYear + 1;
  };

  const formatDate = (dateVal) => {
    if (!dateVal) return new Date().toLocaleDateString('ar-MA');
    if (typeof dateVal === 'string') return dateVal;
    if (dateVal.seconds) return new Date(dateVal.seconds * 1000).toLocaleDateString('ar-MA');
    return String(dateVal);
  };

  // تم التحقق مباشرة من مخطط جدول payments الحقيقي في Supabase عبر PostgREST
  // (رسائل خطأ Postgres 42703 القاطعة). الأعمدة الموجودة فعلياً المتعلقة بالتاريخ
  // والاسم هي "payment_date" و"receipt_number"؛ أما "paid_at" و"date" و
  // "student_name" و"receipt_no" فغير موجودة إطلاقاً في الجدول الحقيقي، ولهذا
  // كانت كل عملية كتابة تتضمنها ترفضها قاعدة البيانات فوراً.
  const mapPayment = (payment) => ({
    ...payment,
    studentId: payment.student_id || payment.studentId,
    studentName: payment.student_name || payment.studentName,
    // نحوّل رقم الشهر المخزَّن في قاعدة البيانات إلى اسمه العربي للعرض والمقارنة.
    monthName: monthNumberToName[Number(payment.month)] || payment.month,
    paidAt: payment.payment_date || payment.paid_at || payment.date || payment.paidAt,
  });

  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from('payments').select('*').order('created_at', { ascending: false });
      if (error) throw error;
      setPayments((data || []).map(mapPayment));
    } catch (err) {
      logger.error('Financials.fetchData', new Error(describeSupabaseError(err)));
      setPayments([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const channel = supabase
      .channel('academy-financials-page-sync')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'payments' }, fetchData)
      .subscribe();
    return () => { void supabase.removeChannel(channel); };
  }, []);

  const getPaymentInfo = (studentId) => {
    return payments.find((payment) => (
      String(payment.studentId) === String(studentId)
      && Number(payment.month) === monthNameToNumber[selectedMonth]
      && ['مؤدى', 'paid', 'confirmed'].includes(String(payment.status || '').toLocaleLowerCase('ar-MA'))
    ));
  };

  const handleMarkAsPaid = async (student) => {
    // منع الضغط المزدوج/المتكرر أثناء تنفيذ طلب سابق لنفس التلميذ
    if (confirmingId) return;
    if (!student?.id) {
      alert('تعذر تأكيد الأداء: معرّف التلميذ غير موجود.');
      return;
    }
    const existingPayment = payments.find((payment) => (
      String(payment.studentId) === String(student.id)
      && Number(payment.month) === monthNameToNumber[selectedMonth]
    ));
    if (existingPayment && ['مؤدى', 'paid', 'confirmed'].includes(String(existingPayment.status || '').toLocaleLowerCase('ar-MA'))) {
      setConfirmedPayment({ student, payment: existingPayment });
      return;
    }

    setConfirmingId(student.id);
    try {
      const monthlyFee = student.monthlyFee || 0;
      const monthNumber = monthNameToNumber[selectedMonth];
      const academicYear = getAcademicYearForMonth(monthNumber);
      const paymentValues = {
        student_id: student.id,
        // "student_name" غير موجود في جدول payments الحقيقي (تم التحقق مباشرة)؛
        // اسم التلميذ يُعرض دائماً من جدول students عبر student_id، لذا لا حاجة لتخزينه هنا.
        amount: monthlyFee,
        // "amount_due" و"amount_paid" عمودان NOT NULL تم اكتشافهما مباشرة عبر خطأ
        // Postgres 23502 (كان يُرفض كل تأكيد أداء لأن هذين العمودين لم يكونا يُرسَلان إطلاقاً).
        amount_due: monthlyFee,
        // نعتبر تأكيد الأداء أداءً كاملاً للمبلغ المستحق.
        amount_paid: monthlyFee,
        // عمود "month" integer في قاعدة البيانات الحقيقية؛ نرسل رقم الشهر التقويمي
        // المقابل لاسم الشهر المختار بدل النص العربي (وإلا يرفضه Postgres بخطأ 22P02).
        month: monthNumber,
        // "year" عمود integer حقيقي في الجدول (تم التحقق مباشرة)، يمثل السنة
        // المرتبطة بالشهر المختار ضمن الموسم الدراسي.
        year: academicYear,
        status: 'paid',
        // "payment_month" عمود NOT NULL من نوع date (تم اكتشافه مباشرة عبر خطأ
        // Postgres 23502 ثم تأكيد نوعه date عبر خطأ 22007)؛ نرسل أول يوم من الشهر
        // التقويمي المختار ضمن السنة الصحيحة.
        payment_month: `${academicYear}-${String(monthNumber).padStart(2, '0')}-01`,
        // العمود الحقيقي الموجود في مخطط Supabase هو "payment_date"؛
        // "paid_at" و"date" غير موجودين في الجدول ويتسببان في رفض الطلب (42703).
        payment_date: new Date().toISOString(),
        user_id: currentUser?.uid || null,
      };

      const query = existingPayment
        ? supabase.from('payments').update(paymentValues).eq('id', existingPayment.id)
        : supabase.from('payments').insert(paymentValues);
      const { data, error } = await query.select().single();
      if (error) throw error;

      const savedPayment = mapPayment(data);
      setPayments((current) => existingPayment
        ? current.map((payment) => payment.id === savedPayment.id ? savedPayment : payment)
        : [savedPayment, ...current]);
      setConfirmedPayment({ student, payment: savedPayment });
      await fetchData();
    } catch (err) {
      logger.error('Financials.handleMarkAsPaid', err);
      alert(`تعذر تسجيل الأداء: ${describeSupabaseError(err)}`);
    } finally {
      setConfirmingId(null);
    }
  };

  // تطبيع رقم هاتف الولي إلى الصيغة الدولية المطلوبة لواتساب
  const formatPhoneForWhatsApp = (phone) => {
    const raw = String(phone || '').trim();
    if (!raw) return '';
    if (raw.startsWith('+')) return raw.slice(1).replace(/\s+/g, '');
    if (raw.startsWith('0')) return `212${raw.slice(1)}`.replace(/\s+/g, '');
    return raw.replace(/\s+/g, '').replace(/-/g, '');
  };

  // إرسال إشعار تأكيد الأداء الشهري لولي الأمر عبر الواتساب
  const sendConfirmationWhatsApp = (student, payment) => {
    const phone = student.parent_whatsapp || student.parentPhone || student.parent_phone;
    if (!phone) {
      alert('تنبيه: رقم هاتف ولي الأمر غير متوفر لهذا التلميذ. تم حفظ تأكيد الأداء بنجاح، لكن يتعذر إرسال الإشعار عبر الواتساب.');
      return;
    }
    const formattedPhone = formatPhoneForWhatsApp(phone);
    const studentName = student.fullName || student.full_name || 'التلميذ(ة)';
    const amount = payment?.amount || student.monthlyFee || 0;
    const paidDate = formatDate(payment?.paidAt);

    const message = `السلام عليكم ورحمة الله وبركاته،

ولي أمر التلميذ(ة) ${studentName} المحترم،

نخبركم أن الواجب الشهري الخاص بـ ${studentName} عن شهر ${selectedMonth} قد تم تسجيل أدائه بنجاح.
💰 المبلغ المؤدى: ${amount} درهم
🗓️ تاريخ الأداء: ${paidDate}

نشكر لكم ثقتكم ودعمكم المستمر، ونتمنى لأبنائكم دوام التوفيق والنجاح.

مع خالص الاحترام والتقدير،
ISSHAAM ACADEMY
مع إسهام... نتعلم اليوم لننجح غداً`;

    window.open(`https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  // فتح نافذة طباعة/تصدير بطاقة تأكيد الأداء الشهري (قابلة للحفظ كصورة PDF عبر الطباعة)
  const handlePrintConfirmationCard = (student, payment) => {
    const printWindow = window.open('', '_blank', 'width=480,height=680');
    if (!printWindow) return;

    const studentName = escapeHtml(student.fullName || student.full_name || 'غير محدد');
    const amount = escapeHtml(payment?.amount || student.monthlyFee || 0);
    const paidDate = escapeHtml(formatDate(payment?.paidAt));

    const htmlContent = `
      <!DOCTYPE html>
      <html dir="rtl" lang="ar">
      <head>
        <meta charset="UTF-8">
        <title>إشعار تأكيد الأداء - ${studentName}</title>
        <style>
          body { font-family: sans-serif; padding: 0; margin:0; direction: rtl; text-align: right; background:#f1f5f9; }
          .card { max-width: 420px; margin: 20px auto; border-radius: 18px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,.1); background:#fff; }
          .header { background: linear-gradient(135deg, #059669, #10b981); color:#fff; padding: 24px 20px; text-align:center; }
          .header img { width: 64px; height: 64px; border-radius: 50%; object-fit: cover; border: 3px solid #fff; margin-bottom: 8px; }
          .header h1 { margin: 0; font-size: 16px; font-weight: 800; }
          .header p { margin: 6px 0 0; font-size: 13px; opacity:.9; }
          .body { padding: 20px; }
          .row { display:flex; justify-content:space-between; padding: 10px 0; border-bottom: 1px dashed #e2e8f0; font-size: 14px; }
          .row span:first-child { color:#64748b; font-weight:600; }
          .row span:last-child { color:#0f172a; font-weight:800; }
          .thanks { margin-top: 16px; font-size: 12.5px; color:#334155; line-height:1.8; text-align:center; }
          .footer { background:#0f172a; color:#fff; text-align:center; padding: 14px; font-size: 11px; }
          .footer strong { color:#34d399; }
        </style>
      </head>
      <body>
        <div class="card">
          <div class="header">
            <img src="/logo.jpeg" alt="ISSHAAM ACADEMY" />
            <h1>تم تأكيد الأداء الشهري بنجاح ✓</h1>
            <p>ISSHAAM ACADEMY</p>
          </div>
          <div class="body">
            <div class="row"><span>اسم التلميذ(ة):</span><span>${studentName}</span></div>
            <div class="row"><span>الشهر:</span><span>${escapeHtml(selectedMonth)}</span></div>
            <div class="row"><span>المبلغ المؤدى:</span><span>${amount} DH</span></div>
            <div class="row"><span>تاريخ الأداء:</span><span>${paidDate}</span></div>
            <p class="thanks">نشكر لكم ثقتكم ودعمكم المستمر، ونتمنى لأبنائكم دوام التوفيق والنجاح.</p>
          </div>
          <div class="footer"><strong>ISSHAAM ACADEMY</strong><br/>مع إسهام... نتعلم اليوم لننجح غداً</div>
        </div>
        <script>window.onload = function() { window.print(); };</script>
      </body>
      </html>
    `;
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  const escapeHtml = (value) =>
    String(value ?? '').replace(/[&<>"']/g, (char) => (
      { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]
    ));

  const handlePrintReceipt = (student, payment) => {
    const printWindow = window.open('', '_blank', 'width=600,height=700');
    if (!printWindow) return;

    const studentName = escapeHtml(student.fullName || 'غير محدد');
    const level = escapeHtml(student.level || 'غير محدد');
    const amount = escapeHtml(payment?.amount || student.monthlyFee || 0);
    const paidDate = escapeHtml(formatDate(payment?.paidAt));

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
          <div class="row"><span>الشهر:</span><strong>${escapeHtml(selectedMonth)}</strong></div>
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
                          <div className="flex items-center justify-center gap-2">
                            <button
                              onClick={() => handlePrintReceipt(s, payment)}
                              className="bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-xl text-xs font-medium inline-flex items-center gap-1"
                            >
                              <Printer className="w-3.5 h-3.5" /> طباعة الوصل
                            </button>
                            <button
                              onClick={() => sendConfirmationWhatsApp(s, payment)}
                              className="bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 px-3 py-1.5 rounded-xl text-xs font-medium inline-flex items-center gap-1"
                            >
                              <MessageCircle className="w-3.5 h-3.5" /> إشعار واتساب
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleMarkAsPaid(s)}
                            disabled={confirmingId === s.id}
                            className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed text-white px-3.5 py-1.5 rounded-xl text-xs font-medium inline-flex items-center gap-1"
                          >
                            <CreditCard className="w-4 h-4" /> {confirmingId === s.id ? 'جاري التأكيد...' : 'تأكيد الأداء'}
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

      {confirmedPayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setConfirmedPayment(null)}>
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-500 text-white text-center py-6 px-5 relative">
              <button
                onClick={() => setConfirmedPayment(null)}
                className="absolute top-3 left-3 text-white/80 hover:text-white"
                aria-label="إغلاق"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src="/logo.jpeg"
                alt="ISSHAAM ACADEMY"
                className="w-16 h-16 rounded-full object-cover border-4 border-white mx-auto mb-2 shadow-md"
              />
              <h3 className="font-black text-base">تم تأكيد الأداء الشهري بنجاح ✓</h3>
              <p className="text-xs opacity-90 mt-1">ISSHAAM ACADEMY</p>
            </div>
            <div className="p-5 space-y-2 text-sm">
              <div className="flex justify-between border-b border-dashed border-slate-200 pb-2">
                <span className="text-slate-500 font-semibold">اسم التلميذ(ة):</span>
                <span className="font-black text-slate-900">{confirmedPayment.student.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-dashed border-slate-200 pb-2">
                <span className="text-slate-500 font-semibold">الشهر:</span>
                <span className="font-black text-slate-900">{selectedMonth}</span>
              </div>
              <div className="flex justify-between border-b border-dashed border-slate-200 pb-2">
                <span className="text-slate-500 font-semibold">المبلغ المؤدى:</span>
                <span className="font-black text-emerald-600">{confirmedPayment.payment?.amount || confirmedPayment.student.monthlyFee || 0} DH</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="text-slate-500 font-semibold">تاريخ الأداء:</span>
                <span className="font-black text-slate-900">{formatDate(confirmedPayment.payment?.paidAt)}</span>
              </div>
              <p className="text-center text-xs text-slate-500 pt-2">
                نشكر لكم ثقتكم ودعمكم المستمر، ونتمنى لأبنائكم دوام التوفيق والنجاح.
              </p>
            </div>
            <div className="p-4 pt-0 flex gap-2">
              <button
                onClick={() => sendConfirmationWhatsApp(confirmedPayment.student, confirmedPayment.payment)}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-xl text-xs font-bold inline-flex items-center justify-center gap-1"
              >
                <MessageCircle className="w-4 h-4" /> إرسال إشعار عبر واتساب
              </button>
              <button
                onClick={() => handlePrintConfirmationCard(confirmedPayment.student, confirmedPayment.payment)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 px-3 rounded-xl text-xs font-bold inline-flex items-center justify-center gap-1"
              >
                <Printer className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-slate-900 text-center py-2 text-[11px] text-emerald-400 font-bold">
              ISSHAAM ACADEMY · مع إسهام... نتعلم اليوم لننجح غداً
            </div>
          </div>
        </div>
      )}
    </div>
  );
}