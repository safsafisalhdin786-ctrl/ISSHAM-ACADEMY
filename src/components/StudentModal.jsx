import React, { useEffect, useMemo, useState } from 'react';
import { supabase } from '../supabase';

export default function StudentProfileModal({ student, onClose }) {
  const [activeTab, setActiveTab] = useState('info');
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [paymentRecords, setPaymentRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    const fetchStudentHistory = async () => {
      if (!student?.id) {
        setAttendanceRecords([]);
        setPaymentRecords([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError('');

      try {
        const [{ data: attendance, error: attendanceError }, { data: payments, error: paymentsError }] = await Promise.all([
          supabase.from('attendance').select('*').eq('student_id', student.id),
          supabase.from('payments').select('*').eq('student_id', student.id),
        ]);
        if (attendanceError) throw attendanceError;
        if (paymentsError) throw paymentsError;

        if (cancelled) return;

        const getRecordDate = (record) => {
          const value =
            record?.date ||
            record?.sessionDate ||
            record?.createdAt ||
            null;

          if (!value) return 0;

          if (typeof value?.toDate === 'function') {
            return value.toDate().getTime();
          }

          const timestamp = new Date(value).getTime();

          return Number.isNaN(timestamp) ? 0 : timestamp;
        };

        attendance.sort(
          (a, b) => getRecordDate(b) - getRecordDate(a)
        );

        payments.sort(
          (a, b) => getRecordDate(b) - getRecordDate(a)
        );

        setAttendanceRecords(attendance);
        setPaymentRecords(payments);
      } catch (err) {
        console.error(
          'خطأ في جلب سجلات التلميذ:',
          err
        );

        if (!cancelled) {
          setAttendanceRecords([]);
          setPaymentRecords([]);
          setError(`تعذر تحميل سجلات التلميذ من قاعدة البيانات: ${err.message || 'خطأ غير معروف'}`);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchStudentHistory();

    return () => {
      cancelled = true;
    };
  }, [student?.id]);

  const attendanceStats = useMemo(() => {
    const present = attendanceRecords.filter((record) => {
      const status = String(record.status || '').toLowerCase();

      return [
        'حاضر',
        'present',
        'présent',
        'presenté',
      ].includes(status);
    }).length;

    const late = attendanceRecords.filter((record) => {
      const status = String(record.status || '').toLowerCase();

      return [
        'متأخر',
        'متأخرة',
        'late',
        'retard',
      ].includes(status);
    }).length;

    const absent = attendanceRecords.filter((record) => {
      const status = String(record.status || '').toLowerCase();

      return [
        'غائب',
        'غائبة',
        'absent',
        'absence',
      ].includes(status);
    }).length;

    const total = attendanceRecords.length;

    const rate =
      total > 0
        ? Math.round((present / total) * 100)
        : 0;

    return {
      present,
      absent,
      late,
      total,
      rate,
    };
  }, [attendanceRecords]);

  const totalPaid = useMemo(() => {
    return paymentRecords.reduce((total, payment) => {
      const amount = Number(payment?.amount);

      return total + (Number.isFinite(amount) ? amount : 0);
    }, 0);
  }, [paymentRecords]);

  const formatMoney = (amount) => {
    return new Intl.NumberFormat('fr-MA').format(
      Number(amount) || 0
    );
  };

  const formatDate = (value) => {
    if (!value) return 'تاريخ غير محدد';

    try {
      const date =
        typeof value?.toDate === 'function'
          ? value.toDate()
          : new Date(value);

      if (Number.isNaN(date.getTime())) {
        return String(value);
      }

      return new Intl.DateTimeFormat('ar-MA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      }).format(date);
    } catch {
      return String(value);
    }
  };

  const formatPhoneNumber = (phone) => {
    if (!phone) return null;

    let clean = String(phone)
      .trim()
      .replace(/[^\d+]/g, '');

    if (clean.startsWith('+')) {
      clean = clean.substring(1);
    }

    if (clean.startsWith('0')) {
      clean = `212${clean.substring(1)}`;
    }

    if (!/^212\d{9}$/.test(clean)) {
      return null;
    }

    return clean;
  };

  const handleWhatsAppClick = () => {
    const phone = formatPhoneNumber(student?.parentPhone);

    if (!phone) {
      setError(
        'رقم هاتف ولي الأمر غير صالح أو غير متوفر.'
      );
      return;
    }

    window.open(
      `https://wa.me/${phone}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  const getAttendanceStatus = (status) => {
    const normalized = String(status || '')
      .trim()
      .toLowerCase();

    if (
      ['حاضر', 'present', 'présent'].includes(normalized)
    ) {
      return {
        label: 'حاضر',
        className:
          'bg-emerald-100 text-emerald-800',
      };
    }

    if (
      ['غائب', 'absent', 'absence'].includes(normalized)
    ) {
      return {
        label: 'غائب',
        className:
          'bg-rose-100 text-rose-800',
      };
    }

    if (
      ['متأخر', 'متأخرة', 'late', 'retard'].includes(
        normalized
      )
    ) {
      return {
        label: 'متأخر',
        className:
          'bg-amber-100 text-amber-800',
      };
    }

    return {
      label: status || 'غير محدد',
      className:
        'bg-slate-100 text-slate-700',
    };
  };

  if (!student) return null;

  return (
    <div
      dir="rtl"
      className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="student-profile-title"
    >
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[94vh]">

        {/* Header */}
        <div className="bg-slate-900 text-white p-4 sm:p-6">
          <div className="flex items-start justify-between gap-4">

            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-amber-500 rounded-full flex items-center justify-center font-bold text-xl sm:text-2xl text-white shadow-md shrink-0">
                {student.fullName?.charAt(0) || '🎓'}
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2
                    id="student-profile-title"
                    className="text-lg sm:text-xl font-bold truncate"
                  >
                    {student.fullName || 'تلميذ بدون اسم'}
                  </h2>

                  {student.archived && (
                    <span className="px-2 py-0.5 bg-slate-700 text-slate-300 text-xs rounded-full">
                      مؤرشف
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-300 mt-1">
                  {student.level || 'المستوى غير محدد'}
                  {' • '}
                  الأستاذ:{' '}
                  <span className="text-blue-200 font-bold">
                    {student.teacher_name || student.teacherName || student.teacher?.full_name || 'غير محدد'}
                  </span>
                  {' • '}
                  الواجب:{' '}
                  <span className="text-emerald-400 font-bold">
                    {formatMoney(student.monthlyFee)} درهم
                  </span>
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="إغلاق"
              className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition shrink-0"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 bg-slate-800 text-center py-3">
          <div>
            <span className="block text-slate-400 text-[10px]">
              نسبة الحضور
            </span>
            <span className="font-bold text-amber-400 text-sm">
              {attendanceStats.rate}%
            </span>
          </div>

          <div className="border-x border-slate-700">
            <span className="block text-slate-400 text-[10px]">
              مجموع الحصص
            </span>
            <span className="font-bold text-white text-sm">
              {attendanceStats.total}
            </span>
          </div>

          <div>
            <span className="block text-slate-400 text-[10px]">
              مجموع المؤدى
            </span>
            <span className="font-bold text-emerald-400 text-sm">
              {formatMoney(totalPaid)} درهم
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-4 sm:px-6 pt-3 gap-4 overflow-x-auto">
          {[
            {
              id: 'info',
              label: '📌 البيانات والتتبع الأكاديمي',
            },
            {
              id: 'attendance',
              label: `📋 الحضور (${attendanceRecords.length})`,
            },
            {
              id: 'payments',
              label: `💳 الأداءات (${paymentRecords.length})`,
            },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`pb-3 text-sm font-bold border-b-2 whitespace-nowrap transition ${
                activeTab === tab.id
                  ? 'border-amber-500 text-amber-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">

          {error && (
            <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm font-medium">
              {error}
            </div>
          )}

          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-9 h-9 border-4 border-slate-200 border-t-amber-500 rounded-full animate-spin mb-4" />
              <p className="text-slate-500 font-bold">
                جاري تحميل البيانات...
              </p>
            </div>
          ) : activeTab === 'info' ? (
            <div className="space-y-6">

              {/* Basic information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">

                <div>
                  <span className="text-xs text-slate-400 block mb-1">
                    ولي الأمر
                  </span>
                  <span className="font-bold text-slate-800">
                    {student.parentName || 'غير محدد'}
                  </span>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block mb-1">
                    هاتف التواصل
                  </span>

                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      dir="ltr"
                      className="font-bold text-slate-800"
                    >
                      {student.parentPhone || 'غير متوفر'}
                    </span>

                    {student.parentPhone && (
                      <button
                        type="button"
                        onClick={handleWhatsAppClick}
                        className="px-2.5 py-1 bg-emerald-100 text-emerald-800 hover:bg-emerald-200 text-xs rounded-lg font-bold transition"
                      >
                        💬 واتساب
                      </button>
                    )}
                  </div>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block mb-1">
                    المؤسسة التعليمية
                  </span>
                  <span className="font-semibold text-slate-800">
                    {student.school || 'غير محددة'}
                  </span>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block mb-1">
                    المواد
                  </span>

                  <div className="flex flex-wrap gap-1">
                    {Array.isArray(student.subjects)
                      ? student.subjects.map((subject) => (
                          <span
                            key={subject}
                            className="px-2 py-1 bg-amber-100 text-amber-800 font-bold rounded-lg text-xs"
                          >
                            {subject}
                          </span>
                        ))
                      : (
                        <span className="px-2 py-1 bg-amber-100 text-amber-800 font-bold rounded-lg text-xs">
                          {student.subjects || 'الرياضيات'}
                        </span>
                      )}
                  </div>
                </div>

              </div>

              {/* Academic tracking */}
              <div>
                <h4 className="font-bold text-slate-900 border-b pb-2 mb-3">
                  🎯 التتبع الأكاديمي والتعثرات
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

                  <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl">
                    <span className="block font-bold text-emerald-800 text-xs mb-1">
                      💪 نقاط القوة
                    </span>
                    <p className="text-xs text-emerald-900 leading-relaxed">
                      {student.strengths ||
                        'لا توجد ملاحظات مدونة'}
                    </p>
                  </div>

                  <div className="p-3 bg-rose-50 border border-rose-100 rounded-xl">
                    <span className="block font-bold text-rose-800 text-xs mb-1">
                      ⚠️ نقاط الضعف
                    </span>
                    <p className="text-xs text-rose-900 leading-relaxed">
                      {student.weaknesses ||
                        'لا توجد نقاط ضعف مسجلة'}
                    </p>
                  </div>

                  <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl">
                    <span className="block font-bold text-blue-800 text-xs mb-1">
                      🚀 الأهداف
                    </span>
                    <p className="text-xs text-blue-900 leading-relaxed">
                      {student.goals || 'لم تحدد بعد'}
                    </p>
                  </div>

                </div>
              </div>

            </div>
          ) : activeTab === 'attendance' ? (
            <div>

              {attendanceRecords.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-3">📋</div>
                  <p className="text-slate-400">
                    لا يوجد أي سجل حضور مسجل لهذا التلميذ.
                  </p>
                </div>
              ) : (
                <div className="space-y-2">

                  {attendanceRecords.map((record) => {
                    const status = getAttendanceStatus(
                      record.status
                    );

                    return (
                      <div
                        key={record.id}
                        className="flex justify-between items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl"
                      >
                        <span className="font-semibold text-slate-700 text-sm">
                          {formatDate(
                            record.date ||
                              record.sessionDate ||
                              record.createdAt
                          )}
                        </span>

                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${status.className}`}
                        >
                          {status.label}
                        </span>
                      </div>
                    );
                  })}

                </div>
              )}

            </div>
          ) : (
            <div>

              {paymentRecords.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-3">💳</div>
                  <p className="text-slate-400">
                    لا يوجد أي سجل دفعات مسجل لهذا التلميذ.
                  </p>
                </div>
              ) : (
                <div className="space-y-2">

                  {paymentRecords.map((payment) => (
                    <div
                      key={payment.id}
                      className="flex justify-between items-center gap-4 p-3 bg-slate-50 border border-slate-200 rounded-xl"
                    >
                      <div>
                        <p className="font-bold text-slate-800 text-sm">
                          شهر: {payment.month || 'غير محدد'}
                        </p>

                        <p className="text-xs text-slate-500 mt-1">
                          تاريخ الأداء:{' '}
                          {formatDate(payment.date)}
                        </p>
                      </div>

                      <span className="font-bold text-emerald-600 text-sm whitespace-nowrap">
                        {formatMoney(payment.amount)} درهم
                      </span>
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
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-200 text-slate-700 font-bold text-sm rounded-xl hover:bg-slate-300 transition"
          >
            إغلاق
          </button>
        </div>

      </div>
    </div>
  );
}