import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { db } from '../firebase';
import { 
  collection, 
  getDocs, 
  addDoc, 
  doc, 
  updateDoc, 
  query, 
  where, 
  serverTimestamp,
  writeBatch 
} from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import StudentProfileModal from '../components/StudentModal';

const AVAILABLE_SUBJECTS = [
  'الرياضيات',
  'الفيزياء والكيمياء',
  'علوم الحياة والأرض',
  'اللغة الفرنسية',
  'اللغة العربية',
  'اللغة الإنجليزية',
  'الفلسفة'
];

const INITIAL_FORM_STATE = {
  fullName: '',
  studentId: '',
  gender: 'ذكر',
  level: 'الأول ابتدائي',
  subjects: ['الرياضيات'],
  teacherId: '',
  parentName: '',
  parentPhone: '',
  address: '',
  school: '',
  monthlyFee: '',
  paymentDay: '5',
  strengths: '',
  weaknesses: '',
  goals: '',
  academicNotes: '',
  needsSupport: false,
  archived: false
};

export default function Students() {
  const location = useLocation();
  const { userRole, currentUser } = useAuth ? useAuth() : { userRole: 'admin', currentUser: null };
  
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevelFilter, setSelectedLevelFilter] = useState('');
  const [selectedTeacherFilter, setSelectedTeacherFilter] = useState('');
  const [showArchived, setShowArchived] = useState(false);
  const [loading, setLoading] = useState(true);
  
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [selectedStudentForProfile, setSelectedStudentForProfile] = useState(null);

  const [confirmModal, setConfirmModal] = useState({ show: false, action: null, student: null });
  const [processingAction, setProcessingAction] = useState(false);

  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const currentDay = new Date().getDate();

  // جلب البيانات من Firestore
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const [studentsSnap, teachersSnap] = await Promise.all([
        getDocs(collection(db, 'students')),
        getDocs(collection(db, 'teachers'))
      ]);

      setStudents(studentsSnap.docs.map(d => ({ id: d.id, ...d.data() })));
      setTeachers(teachersSnap.docs.map(d => ({ 
        id: d.id, 
        ...d.data(),
        name: d.data().fullName || d.data().name || ''
      })));
    } catch (err) {
      console.error('خطأ في جلب البيانات:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { 
    fetchData(); 
  }, [fetchData]);

  // الاستجابة للتنقل المباشر لفتح إضافة تلميذ
  useEffect(() => {
    if (location.state?.openAddModal) {
      setEditingId(null);
      setForm(INITIAL_FORM_STATE);
      setShowAddForm(true);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const handleOpenAddForm = () => {
    if (showAddForm && !editingId) {
      setShowAddForm(false);
    } else {
      setEditingId(null);
      setForm(INITIAL_FORM_STATE);
      setShowAddForm(true);
    }
  };

  const handleSubjectChange = (subject) => {
    setForm(prev => {
      const currentSubjects = Array.isArray(prev.subjects) 
        ? prev.subjects 
        : (typeof prev.subjects === 'string' && prev.subjects ? prev.subjects.split(', ') : []);
      
      const updated = currentSubjects.includes(subject)
        ? currentSubjects.filter(s => s !== subject)
        : [...currentSubjects, subject];

      return { ...prev, subjects: updated };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = {
        ...form,
        monthlyFee: Number(form.monthlyFee) || 0,
        paymentDay: Number(form.paymentDay) || 5,
        subjects: Array.isArray(form.subjects) ? form.subjects.join(', ') : form.subjects,
        archived: form.archived || false,
        needsSupport: !!(form.weaknesses && form.weaknesses.trim() !== '') || form.needsSupport
      };

      if (editingId) {
        await updateDoc(doc(db, 'students', editingId), payload);
        setEditingId(null);
      } else {
        await addDoc(collection(db, 'students'), { ...payload, createdAt: serverTimestamp() });
      }

      setForm(INITIAL_FORM_STATE);
      setShowAddForm(false);
      fetchData();
    } catch (err) {
      console.error('خطأ في حفظ بيانات التلميذ:', err);
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (s) => {
    let parsedSubjects = [];
    if (Array.isArray(s.subjects)) {
      parsedSubjects = s.subjects;
    } else if (typeof s.subjects === 'string' && s.subjects.length > 0) {
      parsedSubjects = s.subjects.split(', ');
    } else {
      parsedSubjects = ['الرياضيات'];
    }

    setForm({
      fullName: s.fullName || '',
      studentId: s.studentId || '',
      gender: s.gender || 'ذكر',
      level: s.level || 'الأول ابتدائي',
      subjects: parsedSubjects,
      teacherId: s.teacherId || '',
      parentName: s.parentName || '',
      parentPhone: s.parentPhone || '',
      address: s.address || '',
      school: s.school || '',
      monthlyFee: s.monthlyFee || '',
      paymentDay: s.paymentDay || '5',
      strengths: s.strengths || '',
      weaknesses: s.weaknesses || '',
      goals: s.goals || '',
      academicNotes: s.academicNotes || '',
      needsSupport: s.needsSupport || false,
      archived: s.archived || false
    });
    setEditingId(s.id);
    setShowAddForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const executeArchive = async () => {
    const student = confirmModal.student;
    if (!student) return;
    setProcessingAction(true);
    try {
      await updateDoc(doc(db, 'students', student.id), { archived: !student.archived });
      setConfirmModal({ show: false, action: null, student: null });
      fetchData();
    } catch (err) {
      console.error('خطأ في أرشفة التلميذ:', err);
    } finally {
      setProcessingAction(false);
    }
  };

  const executeDelete = async () => {
    const student = confirmModal.student;
    if (!student) return;
    setProcessingAction(true);
    try {
      const batch = writeBatch(db);
      batch.delete(doc(db, 'students', student.id));

      const [attendanceSnap, paymentsSnap] = await Promise.all([
        getDocs(query(collection(db, 'attendance'), where('studentId', '==', student.id))),
        getDocs(query(collection(db, 'payments'), where('studentId', '==', student.id)))
      ]);

      attendanceSnap.forEach(d => batch.delete(d.ref));
      paymentsSnap.forEach(d => batch.delete(d.ref));

      await batch.commit();

      setConfirmModal({ show: false, action: null, student: null });
      fetchData();
    } catch (err) {
      console.error('خطأ في حذف التلميذ:', err);
    } finally {
      setProcessingAction(false);
    }
  };

  const formatPhoneNumber = (phone) => {
    if (!phone) return null;
    let clean = phone.trim().replace(/\s+/g, '').replace(/-/g, '');
    if (clean.startsWith('0')) return '212' + clean.substring(1);
    if (clean.startsWith('+')) return clean.substring(1);
    return clean;
  };

  const sendWhatsApp = (phone, message) => {
    const formattedPhone = formatPhoneNumber(phone);
    if (!formattedPhone) return alert('رقم الهاتف غير متوفر!');
    window.open(`https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const sendReminder = (s) => {
    const msg = `السلام عليكم ورحمة الله وبركاته،\n\nتحية طيبة من إدارة *أكاديمية إسهام* 🏫.\nنود تذكيركم المحترم بحلول موعد الواجب الشهري الخاص بالتلميذ(ة) *${s.fullName}* (المحدد في يوم ${s.paymentDay || 5} من كل شهر) وقدره *${s.monthlyFee} درهم*.\n\nنشكركم على حسن تعاونكم ونتمنى لابنكم/ابنتكم دوام التوفيق والنجاح. 🌹`;
    sendWhatsApp(s.parentPhone, msg);
  };

  const sendReceipt = (s) => {
    const msg = `السلام عليكم ورحمة الله وبركاته،\n\nتؤكد لكم إدارة *أكاديمية إسهام* 🏫 استلام الواجب الشهري الخاص بالتلميذ(ة) *${s.fullName}* وقدره *${s.monthlyFee} درهم* بنجاح.\n\nشكراً جزيلاً لثقتكم بنا وبمؤسستنا! 🌹`;
    sendWhatsApp(s.parentPhone, msg);
  };

  const filteredStudents = students.filter(s => {
    // تصفية حسب الدور إيلا كان أستاذ
    if (userRole === 'teacher' && currentUser) {
      if (s.teacherId !== currentUser.uid) return false;
    }

    const matchesArchive = showArchived ? s.archived === true : !s.archived;
    const matchesSearch = s.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          s.level?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = selectedLevelFilter ? s.level === selectedLevelFilter : true;
    const matchesTeacher = selectedTeacherFilter ? s.teacherId === selectedTeacherFilter : true;
    return matchesArchive && matchesSearch && matchesLevel && matchesTeacher;
  });

  const exportToCSV = () => {
    if (filteredStudents.length === 0) return alert('لا توجد بيانات للتصدير');
    const headers = ['الاسم الكامل', 'المستوى', 'الأستاذ المسؤول', 'المواد', 'الهاتف', 'الواجب الشهري', 'يوم الأداء'];
    const rows = filteredStudents.map(s => {
      const assignedTeacher = teachers.find(t => t.id === s.teacherId);
      const subj = Array.isArray(s.subjects) ? s.subjects.join(' - ') : (s.subjects || '');
      return [
        `"${(s.fullName || '').replace(/"/g, '""')}"`,
        `"${(s.level || '').replace(/"/g, '""')}"`,
        `"${assignedTeacher ? assignedTeacher.name.replace(/"/g, '""') : ''}"`,
        `"${subj.replace(/"/g, '""')}"`,
        `"${(s.parentPhone || '').replace(/"/g, '""')}"`,
        `"${s.monthlyFee || 0}"`,
        `"${s.paymentDay || 5}"`
      ];
    });

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const link = document.createElement('a');
    link.setAttribute('href', encodeURI(csvContent));
    link.setAttribute('download', `لائحة_تلاميذ_أكاديمية_إسهام_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-6 dir-rtl pb-12 text-right">
      {/* Header & Controls */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 print:hidden">
        <div>
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            إدارة التلاميذ 👥
            {showArchived && <span className="px-2 py-0.5 bg-slate-200 text-slate-700 text-xs rounded-full">الأرشيف</span>}
          </h2>
          <p className="text-sm text-slate-500">{filteredStudents.length} تلميذ مسجل فـ القائمة الحالية</p>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <input 
            type="text" 
            placeholder="🔍 البحث عن تلميذ..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded-lg w-full md:w-48 focus:ring-2 focus:ring-amber-500 text-sm focus:outline-none"
          />

          <select value={selectedLevelFilter} onChange={(e) => setSelectedLevelFilter(e.target.value)} className="px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white cursor-pointer">
            <option value="">كل المستويات</option>
            <option value="الأول ابتدائي">الأول ابتدائي</option>
            <option value="الثاني ابتدائي">الثاني ابتدائي</option>
            <option value="الثالث ابتدائي">الثالث ابتدائي</option>
            <option value="الرابع ابتدائي">الرابع ابتدائي</option>
            <option value="الخامس ابتدائي">الخامس ابتدائي</option>
            <option value="السادس ابتدائي">السادس ابتدائي</option>
            <option value="الأولى إعدادي">الأولى إعدادي</option>
            <option value="الثانية إعدادي">الثانية إعدادي</option>
            <option value="الثالثة إعدادي">الثالثة إعدادي</option>
            <option value="الجذع المشترك">الجذع المشترك</option>
            <option value="الأولى باكالوريا">الأولى باكالوريا</option>
            <option value="الثانية باكالوريا">الثانية باكالوريا</option>
          </select>

          {userRole === 'admin' && (
            <select value={selectedTeacherFilter} onChange={(e) => setSelectedTeacherFilter(e.target.value)} className="px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white cursor-pointer">
              <option value="">كل الأساتذة</option>
              {teachers.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
            </select>
          )}

          <button onClick={() => setShowArchived(!showArchived)} className={`px-3 py-2 rounded-lg text-xs font-bold border cursor-pointer transition ${showArchived ? 'bg-slate-700 text-white border-slate-700' : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'}`}>
            {showArchived ? '📂 النشطين' : '📁 الأرشيف'}
          </button>

          <button onClick={exportToCSV} className="px-3 py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-xs font-bold hover:bg-emerald-100 cursor-pointer transition">
            📊 Excel
          </button>

          <button onClick={() => window.print()} className="px-3 py-2 bg-slate-100 text-slate-700 border border-slate-300 rounded-lg text-xs font-bold hover:bg-slate-200 cursor-pointer transition">
            🖨️ طباعة
          </button>

          <button 
            type="button"
            onClick={handleOpenAddForm} 
            className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition font-semibold text-sm cursor-pointer shadow-sm"
          >
            {showAddForm ? 'إلغاء' : '+ تسجيل تلميذ'}
          </button>
        </div>
      </div>

      {/* Form */}
      {showAddForm && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md border border-amber-200 space-y-4 print:hidden">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <h3 className="text-lg font-bold text-slate-800">{editingId ? 'تعديل بيانات التلميذ' : 'إضافة تلميذ جديد'}</h3>
            <button 
              type="button" 
              onClick={() => { setShowAddForm(false); setEditingId(null); }}
              className="text-xs text-rose-600 hover:underline font-bold cursor-pointer"
            >
              إغلاق ✖
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">الاسم الكامل *</label>
              <input type="text" value={form.fullName} onChange={e=>setForm({...form, fullName: e.target.value})} required className="w-full p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">المستوى الدراسي *</label>
              <select value={form.level} onChange={e=>setForm({...form, level: e.target.value})} className="w-full p-2.5 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option value="الأول ابتدائي">الأول ابتدائي</option>
                <option value="الثاني ابتدائي">الثاني ابتدائي</option>
                <option value="الثالث ابتدائي">الثالث ابتدائي</option>
                <option value="الرابع ابتدائي">الرابع ابتدائي</option>
                <option value="الخامس ابتدائي">الخامس ابتدائي</option>
                <option value="السادس ابتدائي">السادس ابتدائي</option>
                <option value="الأولى إعدادي">الأولى إعدادي</option>
                <option value="الثانية إعدادي">الثانية إعدادي</option>
                <option value="الثالثة إعدادي">الثالثة إعدادي</option>
                <option value="الجذع المشترك">الجذع المشترك</option>
                <option value="الأولى باكالوريا">الأولى باكالوريا</option>
                <option value="الثانية باكالوريا">الثانية باكالوريا</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">الأستاذ(ة) المسؤول(ة)</label>
              <select value={form.teacherId} onChange={e=>setForm({...form, teacherId: e.target.value})} className="w-full p-2.5 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option value="">-- اختر الأستاذ --</option>
                {teachers.map(t => <option key={t.id} value={t.id}>{t.name} ({t.subject || 'عام'})</option>)}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">هاتف الولي (واتساب) *</label>
              <input type="text" value={form.parentPhone} onChange={e=>setForm({...form, parentPhone: e.target.value})} required className="w-full p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">اسم الولي / الوصي</label>
              <input type="text" value={form.parentName} onChange={e=>setForm({...form, parentName: e.target.value})} className="w-full p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">الواجب الشهري (درهم) *</label>
              <input type="number" value={form.monthlyFee} onChange={e=>setForm({...form, monthlyFee: e.target.value})} required className="w-full p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">يوم الأداء من كل شهر</label>
              <input type="number" min="1" max="31" value={form.paymentDay} onChange={e=>setForm({...form, paymentDay: e.target.value})} required className="w-full p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">اسم المؤسسة التعليمية</label>
              <input type="text" value={form.school} onChange={e=>setForm({...form, school: e.target.value})} className="w-full p-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">الجنس</label>
              <select value={form.gender} onChange={e=>setForm({...form, gender: e.target.value})} className="w-full p-2.5 border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-amber-500">
                <option value="ذكر">ذكر</option>
                <option value="أنثى">أنثى</option>
              </select>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-3 space-y-3">
            <h4 className="text-sm font-bold text-amber-800">🎯 التتبع الأكاديمي وحصص الدعم:</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div>
                <label className="block font-semibold text-emerald-700 mb-1">نقاط القوة</label>
                <input type="text" value={form.strengths} onChange={e=>setForm({...form, strengths: e.target.value})} className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              </div>
              <div>
                <label className="block font-semibold text-rose-700 mb-1">نقاط الضعف والتعثرات</label>
                <input type="text" value={form.weaknesses} onChange={e=>setForm({...form, weaknesses: e.target.value})} className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500" />
              </div>
              <div>
                <label className="block font-semibold text-blue-700 mb-1">الأهداف المرجوة</label>
                <input type="text" value={form.goals} onChange={e=>setForm({...form, goals: e.target.value})} className="w-full p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 mb-2">مواد الدعم المسجل فيها:</label>
            <div className="flex flex-wrap gap-2">
              {AVAILABLE_SUBJECTS.map(subj => {
                const isSelected = Array.isArray(form.subjects) && form.subjects.includes(subj);
                return (
                  <button
                    type="button"
                    key={subj}
                    onClick={() => handleSubjectChange(subj)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition cursor-pointer ${
                      isSelected ? 'bg-amber-500 text-white border-amber-500 shadow-sm' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {isSelected ? '✓ ' : '+ '}{subj}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-2 flex items-center gap-3">
            <button type="submit" disabled={saving} className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold transition text-sm disabled:opacity-50 cursor-pointer shadow-sm">
              {saving ? 'جاري الحفظ...' : (editingId ? 'تحديث البيانات 🔄' : 'حفظ البيانات ✅')}
            </button>
            <button type="button" onClick={() => { setShowAddForm(false); setEditingId(null); }} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-semibold text-sm hover:bg-slate-200 cursor-pointer">
              إلغاء
            </button>
          </div>
        </form>
      )}

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-x-auto">
        {loading ? <div className="p-6 text-center text-slate-500 font-bold">جاري التحميل...</div> : (
          <table className="w-full text-right border-collapse min-w-[800px]">
            <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 text-sm">
              <tr>
                <th className="p-4">الاسم الكامل</th>
                <th className="p-4">المستوى</th>
                <th className="p-4">الأستاذ المسؤول</th>
                <th className="p-4">المواد</th>
                <th className="p-4">يوم الأداء</th>
                <th className="p-4">الهاتف</th>
                <th className="p-4">الواجب الشهري</th>
                <th className="p-4 text-center print:hidden">التواصل والعمليات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredStudents.length === 0 ? (
                <tr>
                  <td colSpan="8" className="p-6 text-center text-slate-400">لا يوجد تلاميذ مطابقون للبحث</td>
                </tr>
              ) : (
                filteredStudents.map(s => {
                  const payDay = Number(s.paymentDay || 5);
                  const isDue = currentDay >= payDay;
                  const assignedTeacher = teachers.find(t => t.id === s.teacherId);
                  const hasWeakness = s.weaknesses && s.weaknesses.trim() !== '';

                  return (
                    <tr key={s.id} className={`hover:bg-slate-50 transition ${s.archived ? 'bg-slate-50 opacity-75' : ''}`}>
                      <td className="p-4 font-bold text-slate-800">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                            <span>{s.fullName}</span>
                            {isDue && !s.archived && (
                              <span className="px-2 py-0.5 bg-rose-100 text-rose-700 text-[10px] font-bold rounded-full animate-pulse">
                                ⚠️ موعد الخلاص
                              </span>
                            )}
                            {hasWeakness && (
                              <span className="px-1.5 py-0.5 bg-amber-100 text-amber-800 text-[10px] font-bold rounded">
                                🎯 محتاج دعم
                              </span>
                            )}
                          </div>
                          {s.parentName && <span className="text-[11px] font-normal text-slate-400">الولي: {s.parentName}</span>}
                        </div>
                      </td>
                      <td className="p-4 text-slate-600">{s.level}</td>
                      <td className="p-4 text-slate-700 font-medium">{assignedTeacher ? assignedTeacher.name : 'غير محدد'}</td>
                      <td className="p-4">
                        <span className="px-2.5 py-1 bg-amber-100 text-amber-800 rounded-md font-semibold text-xs inline-block">
                          {Array.isArray(s.subjects) ? s.subjects.join(', ') : (s.subjects || 'الرياضيات')}
                        </span>
                      </td>
                      <td className="p-4 text-slate-700 font-bold">نهار {s.paymentDay || 5} فـ الشهر</td>
                      <td className="p-4 text-slate-600" dir="ltr">{s.parentPhone}</td>
                      <td className="p-4 font-bold text-emerald-600">{s.monthlyFee} درهم</td>
                      <td className="p-4 text-center print:hidden">
                        <div className="flex items-center justify-center gap-1.5 flex-wrap">
                          <button onClick={() => setSelectedStudentForProfile(s)} className="px-2 py-1 bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-200 rounded-lg text-xs font-bold transition cursor-pointer">
                            📋 الملف
                          </button>
                          <button onClick={() => sendReminder(s)} className="px-2 py-1 bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200 rounded-lg text-xs font-bold transition cursor-pointer">
                            🔔 تذكير
                          </button>
                          <button onClick={() => sendReceipt(s)} className="px-2 py-1 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 rounded-lg text-xs font-bold transition cursor-pointer">
                            ✅ وصل
                          </button>
                          <button onClick={() => setConfirmModal({ show: true, action: 'archive', student: s })} className="p-1.5 text-slate-600 hover:bg-slate-100 rounded transition cursor-pointer" title={s.archived ? "استعادة" : "أرشفة"}>
                            {s.archived ? '📂' : '📁'}
                          </button>
                          <button onClick={() => handleEdit(s)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition cursor-pointer" title="تعديل">✏️</button>
                          <button onClick={() => setConfirmModal({ show: true, action: 'delete', student: s })} className="p-1.5 text-rose-600 hover:bg-rose-50 rounded transition cursor-pointer" title="حذف">🗑️</button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* Modal الملف الشامل */}
      {selectedStudentForProfile && (
        <StudentProfileModal student={selectedStudentForProfile} onClose={() => setSelectedStudentForProfile(null)} />
      )}

      {/* Modal التأكيد للحذف / الأرشفة */}
      {confirmModal.show && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-xl border border-slate-100 space-y-4">
            <div className={`flex items-center gap-3 ${confirmModal.action === 'delete' ? 'text-rose-600' : 'text-amber-600'}`}>
              <span className="text-2xl">{confirmModal.action === 'delete' ? '⚠️' : '📂'}</span>
              <h3 className="text-lg font-bold">
                {confirmModal.action === 'delete' ? 'تأكيد مسح التلميذ' : (confirmModal.student?.archived ? 'تأكيد استعادة التلميذ' : 'تأكيد أرشفة التلميذ')}
              </h3>
            </div>
            
            <p className="text-sm text-slate-600">
              {confirmModal.action === 'delete' ? (
                <>هل أنت تأكد من مسح التلميذ(ة) <strong className="text-slate-800">"{confirmModal.student?.fullName}"</strong> وكل البيانات المرتبطة بيه (الحضور، الأداءات)؟ الإجراء لا يمكن التراجع عنه.</>
              ) : confirmModal.student?.archived ? (
                <>هل تريد استعادة التلميذ(ة) <strong className="text-slate-800">"{confirmModal.student?.fullName}"</strong> للقائمة النشطة؟</>
              ) : (
                <>هل تريد نقل التلميذ(ة) <strong className="text-slate-800">"{confirmModal.student?.fullName}"</strong> للأرشيف؟</>
              )}
            </p>

            <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                onClick={() => setConfirmModal({ show: false, action: null, student: null })}
                disabled={processingAction}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold transition cursor-pointer"
              >
                إلغاء
              </button>
              <button
                onClick={confirmModal.action === 'delete' ? executeDelete : executeArchive}
                disabled={processingAction}
                className={`px-4 py-2 text-white rounded-lg text-sm font-semibold transition disabled:opacity-50 cursor-pointer ${
                  confirmModal.action === 'delete' ? 'bg-rose-600 hover:bg-rose-700' : 'bg-amber-600 hover:bg-amber-700'
                }`}
              >
                {processingAction ? 'جاري المعالجة...' : (confirmModal.action === 'delete' ? 'نعم، حذف' : 'تأكيد')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}