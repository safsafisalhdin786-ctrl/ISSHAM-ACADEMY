import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // النموذج الشامل للبيانات
  const [formData, setFormData] = useState({
    fullName: '',
    level: 'الأولى باكالوريا',
    schoolName: '',
    parentName: '',
    parentPhone: '',
    studentPhone: '',
    teacherId: '',
    subject: '',
    monthlyFee: '',
    strengths: '',
    weaknesses: '',
    notes: ''
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const [studentsSnap, teachersSnap] = await Promise.all([
        getDocs(collection(db, 'students')),
        getDocs(collection(db, 'teachers'))
      ]);
      setStudents(studentsSnap.docs.map(d => ({ id: d.id, ...d.data() })).filter(s => !s.archived));
      setTeachers(teachersSnap.docs.map(d => ({ id: d.id, ...d.data() })));
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    if (!formData.fullName) return alert('المرجو إدخال اسم التلميذ');

    try {
      await addDoc(collection(db, 'students'), {
        ...formData,
        createdAt: serverTimestamp(),
        archived: false,
        paymentStatus: 'غير مؤدى'
      });
      setShowAddModal(false);
      setFormData({
        fullName: '', level: 'الأولى باكالوريا', schoolName: '',
        parentName: '', parentPhone: '', studentPhone: '',
        teacherId: '', subject: '', monthlyFee: '',
        strengths: '', weaknesses: '', notes: ''
      });
      fetchData();
    } catch (error) {
      console.error("خطأ في إضافة التلميذ:", error);
    }
  };

  return (
    <div className="space-y-6 dir-rtl text-right pb-10 font-sans">
      <div className="flex justify-between items-center bg-white p-5 rounded-xl shadow-md border border-slate-300">
        <div>
          <h2 className="text-2xl font-black text-slate-900">إدارة التلاميذ والملفات 👥</h2>
          <p className="text-sm font-bold text-slate-600">التتبع الشامل للمسار الدراسي، السلوك، والأداء المالي</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-black shadow-md transition"
        >
          ➕ إضافة تلميذ بملف متكامل
        </button>
      </div>

      {loading ? (
        <div className="p-8 bg-white rounded-xl text-center text-slate-700 font-bold border border-slate-300">
          جاري تحميل البيانات...
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {students.map(s => {
            const teacher = teachers.find(t => t.id === s.teacherId);
            return (
              <div key={s.id} className="bg-white rounded-xl shadow-md border border-slate-300 p-5 flex flex-col justify-between hover:shadow-lg transition border-t-4 border-t-blue-600">
                <div>
                  <div className="flex justify-between items-start border-b pb-3 border-slate-200">
                    <div>
                      <h3 className="text-xl font-black text-slate-900">{s.fullName}</h3>
                      <span className="inline-block mt-1 px-2.5 py-0.5 bg-blue-100 text-blue-900 rounded-md font-bold text-xs">
                        {s.level}
                      </span>
                    </div>
                    <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-2 py-1 rounded">
                      {s.monthlyFee ? `${s.monthlyFee} درهم/شهر` : 'غير محدد'}
                    </span>
                  </div>

                  <div className="mt-4 space-y-2 text-xs font-bold text-slate-800">
                    <p><span className="text-slate-500">👨‍🏫 الأستاذ:</span> {teacher ? (teacher.name || teacher.fullName) : 'غير محدد'}</p>
                    <p><span className="text-slate-500">📞 هاتف الولي:</span> {s.parentPhone || '—'}</p>
                    <p><span className="text-slate-500">🏫 المدرسة الأصلية:</span> {s.schoolName || '—'}</p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedStudent(s)}
                  className="mt-4 w-full py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-bold text-xs text-center"
                >
                  👁️ فتح الملف الشامل للتلميذ
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal عرض الملف التفصيلي */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-2xl border-2 border-slate-300 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <div>
                <h3 className="text-2xl font-black text-slate-900">{selectedStudent.fullName}</h3>
                <p className="text-sm text-slate-600 font-bold">{selectedStudent.level} — {selectedStudent.schoolName || 'المؤسسة غير محددة'}</p>
              </div>
              <button onClick={() => setSelectedStudent(null)} className="px-3 py-1 bg-slate-200 text-slate-800 font-black rounded">✖ إغلاق</button>
            </div>

            <div className="space-y-4 font-bold text-slate-800 text-sm">
              <div className="grid grid-cols-2 gap-3 bg-slate-50 p-3 rounded-lg border">
                <p>👨‍👩‍👦 الولي: <span className="text-slate-900">{selectedStudent.parentName || 'غير مسجل'}</span></p>
                <p>📞 هاتف الولي: <span className="text-blue-700">{selectedStudent.parentPhone || '—'}</span></p>
                <p>📱 هاتف التلميذ: <span className="text-slate-900">{selectedStudent.studentPhone || '—'}</span></p>
                <p>💰 الواجب الشهري: <span className="text-emerald-700 font-black">{selectedStudent.monthlyFee || 0} درهم</span></p>
              </div>

              <div className="bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                <h4 className="text-emerald-900 font-black mb-1">💪 نقاط القوة والتفوق:</h4>
                <p className="text-emerald-950 text-xs whitespace-pre-line">{selectedStudent.strengths || 'لا توجد ملاحظات'}</p>
              </div>

              <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                <h4 className="text-amber-900 font-black mb-1">⚠️ نقاط الضعف والمصاعب:</h4>
                <p className="text-amber-950 text-xs whitespace-pre-line">{selectedStudent.weaknesses || 'لا توجد ملاحظات'}</p>
              </div>

              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                <h4 className="text-blue-900 font-black mb-1">📝 تقرير المسار والملاحظات الإدارية:</h4>
                <p className="text-blue-950 text-xs whitespace-pre-line">{selectedStudent.notes || 'لا يوجد تقرير بعد'}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal إضافة تلميذ كامل */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-2xl border-2 border-slate-300 max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-black text-slate-900 mb-4 border-b pb-2">إضافة تلميذ جديد بالملف الشامل 👨‍🎓</h3>
            <form onSubmit={handleAddStudent} className="space-y-4 text-xs font-bold">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block mb-1 text-slate-800">اسم التلميذ الكامل *</label>
                  <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full p-2 border rounded-lg" placeholder="محمد العلمي" />
                </div>
                <div>
                  <label className="block mb-1 text-slate-800">المستوى الدراسي</label>
                  <select name="level" value={formData.level} onChange={handleChange} className="w-full p-2 border rounded-lg bg-white">
                    <option value="الأولى باكالوريا">الأولى باكالوريا</option>
                    <option value="الثانية باكالوريا">الثانية باكالوريا</option>
                    <option value="الثالثة إعدادي">الثالثة إعدادي</option>
                    <option value="الجذع المشترك">الجذع المشترك</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="block mb-1 text-slate-800">اسم ولي الأمر</label>
                  <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} className="w-full p-2 border rounded-lg" placeholder="الأب / الأم" />
                </div>
                <div>
                  <label className="block mb-1 text-slate-800">هاتف الولي (واتساب)</label>
                  <input type="text" name="parentPhone" value={formData.parentPhone} onChange={handleChange} className="w-full p-2 border rounded-lg" placeholder="0600000000" />
                </div>
                <div>
                  <label className="block mb-1 text-slate-800">هاتف التلميذ</label>
                  <input type="text" name="studentPhone" value={formData.studentPhone} onChange={handleChange} className="w-full p-2 border rounded-lg" placeholder="0600000000" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div>
                  <label className="block mb-1 text-slate-800">الأستاذ المسؤول</label>
                  <select name="teacherId" value={formData.teacherId} onChange={handleChange} className="w-full p-2 border rounded-lg bg-white">
                    <option value="">اختيار الأستاذ</option>
                    {teachers.map(t => <option key={t.id} value={t.id}>{t.name || t.fullName}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block mb-1 text-slate-800">المؤسسة الأصلية</label>
                  <input type="text" name="schoolName" value={formData.schoolName} onChange={handleChange} className="w-full p-2 border rounded-lg" placeholder="ثانوية الحسن الثاني" />
                </div>
                <div>
                  <label className="block mb-1 text-slate-800">الواجب الشهري (درهم)</label>
                  <input type="number" name="monthlyFee" value={formData.monthlyFee} onChange={handleChange} className="w-full p-2 border rounded-lg" placeholder="300" />
                </div>
              </div>

              <div>
                <label className="block mb-1 text-slate-800">💪 نقاط القوة</label>
                <textarea name="strengths" rows="2" value={formData.strengths} onChange={handleChange} className="w-full p-2 border rounded-lg" placeholder="سريع الفهم، ملتزم..."></textarea>
              </div>

              <div>
                <label className="block mb-1 text-slate-800">⚠️ نقاط الضعف / مجالات التحسين</label>
                <textarea name="weaknesses" rows="2" value={formData.weaknesses} onChange={handleChange} className="w-full p-2 border rounded-lg" placeholder="ضعف فـ القواعد الأساسية..."></textarea>
              </div>

              <div>
                <label className="block mb-1 text-slate-800">📝 ملاحظات المسار</label>
                <textarea name="notes" rows="2" value={formData.notes} onChange={handleChange} className="w-full p-2 border rounded-lg" placeholder="ملاحظات الحضور والانضباط..."></textarea>
              </div>

              <div className="flex gap-2 pt-3 border-t">
                <button type="submit" className="flex-1 py-2.5 bg-emerald-700 text-white rounded-lg font-black">حفظ الملف ✅</button>
                <button type="button" onClick={() => setShowAddModal(false)} className="px-4 py-2.5 bg-slate-200 text-slate-800 rounded-lg font-bold">إلغاء</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}