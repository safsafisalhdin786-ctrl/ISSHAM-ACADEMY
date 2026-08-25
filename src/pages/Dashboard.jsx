import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    studentsCount: 0,
    teachersCount: 0,
    presentToday: 0,
    monthlyIncome: 0,
    pendingPayments: 0
  });
  const [recentStudents, setRecentStudents] = useState([]);
  const [recentPayments, setRecentPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const sSnap = await getDocs(collection(db, 'students'));
        const tSnap = await getDocs(collection(db, 'teachers'));
        const pSnap = await getDocs(collection(db, 'payments'));
        const aSnap = await getDocs(collection(db, 'attendance'));

        const todayStr = new Date().toISOString().split('T')[0];
        let presentCount = 0;
        aSnap.forEach(d => { if(d.data().date === todayStr && d.data().status === 'حاضر') presentCount++; });

        let incomeSum = 0;
        let pendingSum = 0;
        const pList = [];
        pSnap.forEach(d => {
          const data = d.data();
          pList.push(data);
          if(data.status === 'مؤدى' || data.status === 'paid') incomeSum += Number(data.amount || 0);
          else pendingSum += Number(data.amount || 0);
        });

        const sList = sSnap.docs.map(d => d.data());

        setStats({
          studentsCount: sSnap.size,
          teachersCount: tSnap.size,
          presentToday: presentCount,
          monthlyIncome: incomeSum,
          pendingPayments: pendingSum
        });

        setRecentStudents(sList.slice(-5).reverse());
        setRecentPayments(pList.slice(-5).reverse());
      } catch(err) { console.error(err); }
      finally { setLoading(false); }
    };

    fetchAll();
  }, []);

  if(loading) return <div className="p-6 text-center text-slate-500 font-bold">جاري تحميل لوحة التحكم...</div>;

  return (
    <div className="space-y-6 dir-rtl pb-10">
      {/* Welcome Bar */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">مرحباً بك 👋</h2>
          <p className="text-sm text-slate-500 mt-1">إليك نظرة عامة على أداء ومداخيل المركز هذا الشهر</p>
        </div>
        <div className="bg-amber-50 text-amber-700 font-bold px-4 py-2 rounded-lg text-sm border border-amber-200 shadow-sm">
          أكاديمية إسهام 🏫
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3">
        <button onClick={() => navigate('/students')} className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs md:text-sm px-4 py-2.5 rounded-lg shadow-sm transition">
          ➕ إضافة / إدارة التلاميذ
        </button>
        <button onClick={() => navigate('/attendance')} className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs md:text-sm px-4 py-2.5 rounded-lg shadow-sm transition">
          ✅ تسجيل الحضور اليومي
        </button>
        <button onClick={() => navigate('/financials')} className="bg-amber-600 hover:bg-amber-700 text-white font-medium text-xs md:text-sm px-4 py-2.5 rounded-lg shadow-sm transition">
          💰 تسجيل الأداءات المالية
        </button>
      </div>

      {/* Alert Card if pending payments exist */}
      {stats.pendingPayments > 0 && (
        <div className="bg-rose-50 border border-rose-200 p-4 rounded-xl text-rose-800 text-sm flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span>⚠️</span>
            <span>تنبيه: هناك واجبات مستحقة غير مدفوعة بقيمة إجمالية قدرها <strong>{stats.pendingPayments} DH</strong>.</span>
          </div>
          <button onClick={() => navigate('/financials')} className="text-xs bg-rose-600 text-white px-3 py-1.5 rounded-md font-bold hover:bg-rose-700 transition">
            مراجعة المالية
          </button>
        </div>
      )}

      {/* Top Cards Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex justify-between items-center">
          <div>
            <p className="text-xs font-semibold text-slate-400">إجمالي التلاميذ</p>
            <h3 className="text-2xl font-extrabold text-slate-800 mt-1">{stats.studentsCount}</h3>
          </div>
          <div className="w-10 h-10 bg-teal-50 text-teal-600 rounded-lg flex items-center justify-center font-bold text-lg">👥</div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex justify-between items-center">
          <div>
            <p className="text-xs font-semibold text-slate-400">عدد الأساتذة</p>
            <h3 className="text-2xl font-extrabold text-slate-800 mt-1">{stats.teachersCount}</h3>
          </div>
          <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center font-bold text-lg">👨‍🏫</div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex justify-between items-center">
          <div>
            <p className="text-xs font-semibold text-slate-400">الحضور اليوم</p>
            <h3 className="text-2xl font-extrabold text-emerald-600 mt-1">{stats.presentToday}</h3>
          </div>
          <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center font-bold text-lg">✅</div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex justify-between items-center">
          <div>
            <p className="text-xs font-semibold text-slate-400">مداخيل الشهر</p>
            <h3 className="text-2xl font-extrabold text-amber-600 mt-1">{stats.monthlyIncome} DH</h3>
          </div>
          <div className="w-10 h-10 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center font-bold text-lg">💰</div>
        </div>
      </div>

      {/* Visual Analytics */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 space-y-4">
        <h3 className="font-bold text-slate-800 border-b pb-2">📊 مؤشرات الأداء السريعة</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
              <span>نسبة الحضور المسجلة اليوم</span>
              <span>{stats.studentsCount > 0 ? Math.round((stats.presentToday / stats.studentsCount) * 100) : 0}%</span>
            </div>
            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
              <div 
                className="bg-emerald-500 h-full rounded-full transition-all duration-500" 
                style={{ width: `${stats.studentsCount > 0 ? (stats.presentToday / stats.studentsCount) * 100 : 0}%` }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
              <span>تحصيل المداخيل المستحقة</span>
              <span>{stats.monthlyIncome + stats.pendingPayments > 0 ? Math.round((stats.monthlyIncome / (stats.monthlyIncome + stats.pendingPayments)) * 100) : 100}%</span>
            </div>
            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
              <div 
                className="bg-amber-500 h-full rounded-full transition-all duration-500" 
                style={{ width: `${stats.monthlyIncome + stats.pendingPayments > 0 ? (stats.monthlyIncome / (stats.monthlyIncome + stats.pendingPayments)) * 100 : 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* أحدث المدفوعات */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-4 border-b pb-2 flex justify-between items-center">
            <span>💳 آخر المدفوعات</span>
            <span className="text-xs text-slate-400 font-normal">آخر 5 عمليات</span>
          </h3>
          <div className="space-y-3">
            {recentPayments.length === 0 ? (
              <p className="text-xs text-slate-400 text-center py-4">لا توجد مدفوعات مسجلة حالياً</p>
            ) : (
              recentPayments.map((p, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg text-sm border border-slate-100">
                  <span className="font-semibold text-slate-700">{p.studentName || 'تلميذ'}</span>
                  <span className="font-bold text-emerald-600">{p.amount} درهم</span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* التسجيلات الجديدة */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-4 border-b pb-2 flex justify-between items-center">
            <span>✨ التسجيلات الجديدة</span>
            <span className="text-xs text-slate-400 font-normal">أحدث المسجلين</span>
          </h3>
          <div className="space-y-3">
            {recentStudents.length === 0 ? (
              <p className="text-xs text-slate-400 text-center py-4">لا يوجد تلاميذ مسجلون حالياً</p>
            ) : (
              recentStudents.map((s, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg text-sm border border-slate-100">
                  <div>
                    <p className="font-semibold text-slate-700">{s.fullName}</p>
                    <p className="text-xs text-slate-400">{s.level || 'غير محدد'}</p>
                  </div>
                  <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs font-bold">{s.monthlyFee || 0} DH</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}