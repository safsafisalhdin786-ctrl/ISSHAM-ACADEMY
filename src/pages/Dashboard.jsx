import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function Dashboard() {
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

  if(loading) return <div className="p-6 text-center text-slate-500">جاري تحميل لوحة التحكم...</div>;

  return (
    <div className="space-y-6 dir-rtl pb-10">
      {/* Welcome Bar */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">مرحباً أدمن 👋</h2>
          <p className="text-sm text-slate-500">إليك نظرة عامة على أداء المركز هذا الشهر</p>
        </div>
        <div className="bg-amber-50 text-amber-700 font-bold px-4 py-2 rounded-lg text-sm border border-amber-200">
          أكاديمية إسهام 🏫
        </div>
      </div>

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

      {/* Grid Tables (مثل الصورة تماماً) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* أحدث المدفوعات */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-4 border-b pb-2">💳 آخر المدفوعات</h3>
          <div className="space-y-3">
            {recentPayments.map((p, idx) => (
              <div key={idx} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg text-sm">
                <span className="font-semibold text-slate-700">{p.studentName}</span>
                <span className="font-bold text-emerald-600">{p.amount} درهم</span>
              </div>
            ))}
          </div>
        </div>

        {/* التسجيلات الجديدة */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-4 border-b pb-2">✨ التسجيلات الجديدة</h3>
          <div className="space-y-3">
            {recentStudents.map((s, idx) => (
              <div key={idx} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg text-sm">
                <div>
                  <p className="font-semibold text-slate-700">{s.fullName}</p>
                  <p className="text-xs text-slate-400">{s.level}</p>
                </div>
                <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded text-xs font-bold">{s.monthlyFee} DH</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}