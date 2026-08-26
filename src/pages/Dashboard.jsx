import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalStudents: 0,
    totalTeachers: 0,
    todayAttendance: 0,
    monthlyRevenue: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        const today = new Date().toISOString().split('T')[0];

        // جلب البيانات الأساسية بالتوازي
        const [studentsSnap, teachersSnap, attendanceSnap, paymentsSnap] = await Promise.all([
          getDocs(collection(db, 'students')),
          getDocs(collection(db, 'teachers')),
          getDocs(query(collection(db, 'attendance'), where('date', '==', today), where('status', '==', 'حاضر'))),
          getDocs(collection(db, 'payments'))
        ]);

        const activeStudents = studentsSnap.docs.filter(doc => !doc.data().archived);
        
        // حساب مداخيل الشهر الحالي
        const currentMonth = new Date().getMonth();
        const currentYear = new Date().getFullYear();
        let currentMonthRevenue = 0;

        paymentsSnap.forEach(doc => {
          const data = doc.data();
          if (data.date) {
            const pDate = new Date(data.date);
            if (pDate.getMonth() === currentMonth && pDate.getFullYear() === currentYear) {
              currentMonthRevenue += Number(data.amount || 0);
            }
          }
        });

        setStats({
          totalStudents: activeStudents.length,
          totalTeachers: teachersSnap.size,
          todayAttendance: attendanceSnap.size,
          monthlyRevenue: currentMonthRevenue
        });
      } catch (error) {
        console.error("خطأ في جلب إحصائيات لوحة التحكم:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardStats();
  }, []);

  return (
    <div className="space-y-6 dir-rtl text-right pb-10">
      {/* الترويسة وأزرار الإجراءات السريعة بالوان واضحة ومتباينة */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-6 rounded-xl shadow-md border border-slate-300 gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
            مرحباً بك 👋 <span className="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full border border-emerald-300 font-bold">أونلاين</span>
          </h1>
          <p className="text-sm font-bold text-slate-600 mt-1">نظرة عامة على أداء ومداخيل المركز هذا الشهر</p>
        </div>

        {/* أزرار الإجراءات السريعة - بألوان واضحة وجريئة */}
        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <Link
            to="/students"
            className="flex-1 md:flex-none px-4 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-extrabold text-sm shadow-md transition text-center"
          >
            إضافة / إدارة التلاميذ 👥
          </Link>
          <Link
            to="/attendance"
            className="flex-1 md:flex-none px-4 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-extrabold text-sm shadow-md transition text-center"
          >
            تسجيل الحضور اليومي ✅
          </Link>
          <Link
            to="/financial"
            className="flex-1 md:flex-none px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-extrabold text-sm shadow-md transition text-center"
          >
            تسجيل الأداءات المالية 💰
          </Link>
        </div>
      </div>

      {/* بطاقات الإحصائيات الرئيسية */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-xl shadow-md border border-slate-300 flex items-center justify-between">
          <div>
            <p className="text-sm font-extrabold text-slate-600">إجمالي التلاميذ</p>
            <h3 className="text-3xl font-black text-slate-900 mt-2">{loading ? '...' : stats.totalStudents}</h3>
          </div>
          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 text-2xl font-black">
            👨‍🎓
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-md border border-slate-300 flex items-center justify-between">
          <div>
            <p className="text-sm font-extrabold text-slate-600">عدد الأساتذة</p>
            <h3 className="text-3xl font-black text-slate-900 mt-2">{loading ? '...' : stats.totalTeachers}</h3>
          </div>
          <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-700 text-2xl font-black">
            👨‍🏫
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-md border border-slate-300 flex items-center justify-between">
          <div>
            <p className="text-sm font-extrabold text-slate-600">الحضور اليوم</p>
            <h3 className="text-3xl font-black text-slate-900 mt-2">{loading ? '...' : stats.todayAttendance}</h3>
          </div>
          <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-700 text-2xl font-black">
            ✅
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-md border border-slate-300 flex items-center justify-between">
          <div>
            <p className="text-sm font-extrabold text-slate-600">مداخيل الشهر</p>
            <h3 className="text-3xl font-black text-emerald-700 mt-2">{loading ? '...' : `${stats.monthlyRevenue} DH`}</h3>
          </div>
          <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-700 text-2xl font-black">
            💵
          </div>
        </div>
      </div>

      {/* مؤشرات الأداء السريعة */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-300">
        <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
          مؤشرات الأداء السريعة 📊
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <span className="text-sm font-bold text-slate-700">نسبة الحضور المسجلة اليوم</span>
            <div className="w-full bg-slate-200 rounded-full h-4 mt-2 overflow-hidden">
              <div 
                className="bg-emerald-600 h-4 rounded-full transition-all duration-500" 
                style={{ width: `${stats.totalStudents > 0 ? (stats.todayAttendance / stats.totalStudents) * 100 : 0}%` }}
              ></div>
            </div>
            <p className="text-xs font-black text-slate-600 mt-1 text-left">
              {stats.totalStudents > 0 ? Math.round((stats.todayAttendance / stats.totalStudents) * 100) : 0}%
            </p>
          </div>

          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
            <span className="text-sm font-bold text-slate-700">حالة المداخيل المستحقة</span>
            <p className="text-xs font-extrabold text-slate-600 mt-1">تأكد من متابعة أداءات التلاميذ المتبقية عبر صفحة الأداءات المالية.</p>
          </div>
        </div>
      </div>
    </div>
  );
}