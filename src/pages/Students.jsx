import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    fullName: '',
    level: 'الأول ابتدائي',
    subjects: 'الرياضيات',
    parentPhone: '',
    monthlyFee: ''
  });

  const fetchStudents = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'students'));
      const list = querySnapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      setStudents(list);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchStudents(); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editingId) {
        await updateDoc(doc(db, 'students', editingId), form);
        setEditingId(null);
      } else {
        await addDoc(collection(db, 'students'), { ...form, createdAt: serverTimestamp() });
      }
      setForm({ fullName: '', level: 'الأول ابتدائي', subjects: 'الرياضيات', parentPhone: '', monthlyFee: '' });
      setShowAddForm(false);
      fetchStudents();
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (s) => {
    setForm(s);
    setEditingId(s.id);
    setShowAddForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('هل أنت تأكد من مسح هاد التلميذ؟')) {
      await deleteDoc(doc(db, 'students', id));
      fetchStudents();
    }
  };

  const filteredStudents = students.filter(s => 
    s.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.level?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 dir-rtl pb-12">
      {/* Header & Search Bar */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-slate-800">إدارة التلاميذ 👥</h2>
          <p className="text-sm text-slate-500">{students.length} تلميذ مسجل فـ الأكاديمية</p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <input 
            type="text" 
            placeholder="🔍 البحث عن تلميذ أو مستوى..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-slate-300 rounded-lg w-full md:w-64 focus:ring-2 focus:ring-amber-500 focus:outline-none"
          />
          <button 
            onClick={() => { setShowAddForm(!showAddForm); setEditingId(null); }}
            className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition shadow-sm font-semibold whitespace-nowrap"
          >
            {showAddForm ? 'إلغاء' : '+ تسجيل تلميذ'}
          </button>
        </div>
      </div>

      {/* Form */}
      {showAddForm && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md border border-amber-200 space-y-4">
          <h3 className="text-lg font-bold text-slate-800 border-b pb-2">{editingId ? 'تعديل بيانات التلميذ' : 'إضافة تلميذ جديد'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <input type="text" placeholder="الاسم الكامل" value={form.fullName} onChange={e=>setForm({...form, fullName: e.target.value})} required className="p-2.5 border rounded-lg" />
            
            <select value={form.level} onChange={e=>setForm({...form, level: e.target.value})} className="p-2.5 border rounded-lg bg-white">
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

            <input type="text" placeholder="المواد (مثال: الرياضيات، الفيزياء)" value={form.subjects} onChange={e=>setForm({...form, subjects: e.target.value})} className="p-2.5 border rounded-lg" />
            <input type="text" placeholder="هاتف الولي" value={form.parentPhone} onChange={e=>setForm({...form, parentPhone: e.target.value})} required className="p-2.5 border rounded-lg" />
            <input type="number" placeholder="واجب الانخراط الشهري" value={form.monthlyFee} onChange={e=>setForm({...form, monthlyFee: e.target.value})} required className="p-2.5 border rounded-lg" />
          </div>
          <button type="submit" disabled={saving} className="px-6 py-2 bg-emerald-600 text-white rounded-lg font-bold hover:bg-emerald-700">
            {saving ? 'جاري الحفظ...' : 'حفظ البيانات ✅'}
          </button>
        </form>
      )}

      {/* Table Design matching Image */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {loading ? <div className="p-6 text-center">جاري التحميل...</div> : (
          <table className="w-full text-right border-collapse">
            <thead className="bg-slate-50 text-slate-600 font-semibold border-b text-sm">
              <tr>
                <th className="p-4">الاسم الكامل</th>
                <th className="p-4">المستوى</th>
                <th className="p-4">المواد</th>
                <th className="p-4">الهاتف</th>
                <th className="p-4">الواجب الشهري</th>
                <th className="p-4 text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filteredStudents.map(s => (
                <tr key={s.id} className="hover:bg-slate-50 transition">
                  <td className="p-4 font-bold text-slate-800">{s.fullName}</td>
                  <td className="p-4 text-slate-600">{s.level}</td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 bg-amber-100 text-amber-800 rounded-md font-semibold text-xs">
                      {s.subjects || 'الرياضيات'}
                    </span>
                  </td>
                  <td className="p-4 text-slate-600" dir="ltr">{s.parentPhone}</td>
                  <td className="p-4 font-bold text-emerald-600">{s.monthlyFee} درهم</td>
                  <td className="p-4 text-center">
                    <button onClick={() => handleEdit(s)} className="p-1.5 text-blue-600 hover:bg-blue-50 rounded ml-2">✏️</button>
                    <button onClick={() => handleDelete(s.id)} className="p-1.5 text-rose-600 hover:bg-rose-50 rounded">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}