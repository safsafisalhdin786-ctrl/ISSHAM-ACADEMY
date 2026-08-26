import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, addDoc, updateDoc, doc, arrayUnion, serverTimestamp } from 'firebase/firestore';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // إدخال تعليق/ملاحظة حية جديدة للحصة
  const [newComment, setNewComment] = useState('');

  // نموذج الإضافة
  const [formData, setFormData] = useState({
    fullName: '',
    level: 'الأولى إعدادي',
    parentPhone: '',
    teacherId: '',
    schoolName: '',
    monthlyFee: '',
    weaknesses: '',
    generalNotes: '' // ملاحظات الأم أو الإدارة
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
    if (!formData.fullName || !formData.parentPhone) return alert('المرجو إدخال اسم التلميذ وهاتف الولي');

    try {
      await addDoc(collection(db, 'students'), {
        ...formData,
        sessionLogs: [], // سجل الحصص والملاحظات اليومية
        attendanceHistory: [], // سجل الحضور والغياب
        createdAt: serverTimestamp(),
        archived: false
      });
      setShowAddModal(false);
      setFormData({
        fullName: '', level: 'الأولى إعدادي', parentPhone: '',
        teacherId: '', schoolName: '', monthlyFee: '',
        weaknesses: '', generalNotes: ''
      });
      fetchData();
    } catch (error) {
      console.error("خطأ في إضافة التلميذ:", error);
    }
  };

  // إضافة تعليق أو ملاحظة جديدة على حصة التلميذ
  const handleAddSessionComment = async (e) => {
    e.preventDefault();
    if (!newComment.trim() || !selectedStudent) return;

    const logEntry = {
      date: new Date().toLocaleDateString('ar-MA', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }),
      time: new Date().toLocaleTimeString('ar-MA', { hour: '2-digit', minute: '2-digit' }),
      text: newComment
    };

    try {
      const studentRef = doc(db, 'students', selectedStudent.id);
      await updateDoc(studentRef, {
        sessionLogs: arrayUnion(logEntry)
      });

      // تحديث الواجهة المباشرة
      const updatedStudent = {
        ...selectedStudent,
        sessionLogs: [logEntry, ...(selectedStudent.sessionLogs || [])]
      };
      setSelectedStudent(updatedStudent);
      setNewComment('');
      fetchData();
    } catch (error) {
      console.error("خطأ في حفظ الملاحظة:", error);
    }
  };

  return (
    <div className="space-y-6 dir-rtl text-right pb-10 font-sans">
      <div className="flex justify-between items-center bg-white p-5 rounded-xl shadow-md border border-slate-300">
        <div>
          <h2 className="text-2xl font-black text-slate-900">إدارة ملفات التلاميذ 👥</h2>
          <p className="text-sm font-bold text-slate-600">عرض الملفات، التقرير الشهري للغياب، وملاحظات الحصص</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg font-black shadow-md cursor-pointer transition"
        >
          ➕ إضافة تلميذ جديد
        </button>
      </div>

      {loading ? (
        <div className="p-8 bg-white rounded-xl text-center text-slate-700 font-bold border border-slate-300">
          جاري تحميل ملفات التلاميذ...
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
                    <span className="text-xs font-black text-emerald-800 bg-emerald-100 px-2 py-1 rounded">
                      {s.monthlyFee ? `${s.monthlyFee} درهم` : '—'}
                    </span>
                  </div>

                  <div className="mt-4 space-y-2 text-xs font-bold text-slate-800">
                    <p><span className="text-slate-500">👨‍🏫 الأستاذ:</span> {teacher ? (teacher.name || teacher.fullName) : 'غير محدد'}</p>
                    <p><span className="text-slate-500">📞 هاتف الولي:</span> {s.parentPhone || '—'}</p>
                    <p><span className="text-slate-500">🏫 المدرسة:</span> {s.schoolName || 'غير محددة'}</p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedStudent(s)}
                  className="mt-5 w-full py-2.5 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-black text-xs text-center flex justify-center items-center gap-2 cursor-pointer"
                >
                  📂 فتح الملف التفصيلي والتقارير
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* نافذة الملف التفصيلي الشامل (التقرير للولي) */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-3xl border-2 border-slate-300 max-h-[90vh] overflow-y-auto">
            
            <div className="flex justify-between items-center border-b pb-3 mb-4">
              <div>
                <h3 className="text-2xl font-black text-slate-900">ملف التلميذ: {selectedStudent.fullName}</h3>
                <p className="text-sm text-slate-600 font-bold">{selectedStudent.level} — {selectedStudent.schoolName || 'المؤسسة الأصلية غير محددة'}</p>
              </div>
              <button onClick={() => setSelectedStudent(null)} className="px-3 py-1 bg-slate-200 text-slate-800 font-black rounded hover:bg-slate-300">✖ إغلاق</button>
            </div>

            <div className="space-y-5 font-bold text-slate-800 text-xs">
              
              {/* معلومات سريعة */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-slate-50 p-3 rounded-lg border border-slate-200 text-sm">
                <p>📞 هاتف الولي: <span className="text-blue-800 font-black">{selectedStudent.parentPhone}</span></p>
                <p>👨‍🏫 الأستاذ: <span className="text-slate-900 font-black">{teachers.find(t => t.id === selectedStudent.teacherId)?.name || 'غير محدد'}</span></p>
                <p>💰 الواجب الشهري: <span className="text-emerald-800 font-black">{selectedStudent.monthlyFee || 0} درهم</span></p>
              </div>

              {/* نقاط الضعف والملاحظات الشخصية */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                  <h4 className="text-amber-900 font-black text-sm mb-1">⚠️ الصعوبات ونقاط الضعف:</h4>
                  <p className="text-amber-950 whitespace-pre-line">{selectedStudent.weaknesses || 'لا توجد صعوبات مسجلة'}</p>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                  <h4 className="text-blue-900 font-black text-sm mb-1">💬 ملاحظات الولي / الإدارة:</h4>
                  <p className="text-blue-950 whitespace-pre-line">{selectedStudent.generalNotes || 'لا توجد ملاحظات خاصة'}</p>
                </div>
              </div>

              {/* قسم إضافة ملاحظة أو تعليق بعد الحصة */}
              <div className="bg-slate-100 p-4 rounded-xl border border-slate-300 space-y-2">
                <h4 className="text-slate-900 font-black text-sm">✍️ إضافة ملاحظة بعد الحصة (مباشرة فـ الملف):</h4>
                <form onSubmit={handleAddSessionComment} className="flex gap-2">
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="مثال: تمت الحصة بنجاح، فهم الدرس جيداً، بدا كيتحسن..."
                    className="flex-1 p-2.5 border-2 border-slate-300 rounded-lg text-xs font-bold text-slate-900 focus:outline-none focus:border-blue-600 bg-white"
                  />
                  <button type="submit" className="px-4 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-black rounded-lg text-xs">
                    إضافة الملاحظة ➕
                  </button>
                </form>
              </div>

              {/* سجل الحصص والملاحظات اليومية */}
              <div className="border rounded-xl p-4 bg-white space-y-3">
                <h4 className="text-sm font-black text-slate-900 border-b pb-2">📜 سجل ملاحظات وتطور الحصص:</h4>
                {selectedStudent.sessionLogs && selectedStudent.sessionLogs.length > 0 ? (
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                    {selectedStudent.sessionLogs.map((log, index) => (
                      <div key={index} className="p-2.5 bg-slate-50 border-r-4 border-r-blue-600 rounded text-xs">
                        <div className="flex justify-between text-slate-500 text-[10px] mb-1 font-bold">
                          <span>📅 {log.date}</span>
                          <span>⏰ {log.time}</span>
                        </div>
                        <p className="text-slate-900 font-extrabold">{log.text}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-500 font-bold text-center py-2">لا توجد ملاحظات مسجلة للحصص بعد</p>
                )}
              </div>

              {/* خلاصة وسجل الحضور والغياب */}
              <div className="border rounded-xl p-4 bg-white space-y-3">
                <h4 className="text-sm font-black text-slate-900 border-b pb-2">📅 سجل الحضور والغياب الشهري:</h4>
                {selectedStudent.attendanceHistory && selectedStudent.attendanceHistory.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-40 overflow-y-auto">
                    {selectedStudent.attendanceHistory.map((att, idx) => (
                      <div key={idx} className={`p-2 rounded font-black text-center border ${att.status === 'حاضر' ? 'bg-emerald-50 text-emerald-800 border-emerald-300' : 'bg-red-50 text-red-800 border-red-300'}`}>
                        <p className="text-[10px] text-slate-600">{att.date}</p>
                        <p>{att.status === 'حاضر' ? '✅ حاضر' : '❌ غائب'}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-500 font-bold text-center py-2">يتم تسجيل غياب وحضور التلميذ تلقائياً من قسم الحضور والغياب</p>
                )}
              </div>

            </div>
          </div>
        </div>
      )}

      {/* نافذة إضافة تلميذ جديد بالخيارات المحددة */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-xl border-2 border-slate-300 max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-black text-slate-900 mb-4 border-b pb-2">إضافة تلميذ جديد 👨‍🎓</h3>
            <form onSubmit={handleAddStudent} className="space-y-4 text-xs font-bold">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block mb-1 text-slate-800">اسم التلميذ الكامل *</label>
                  <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="w-full p-2.5 border-2 rounded-lg text-slate-900" placeholder="مثال: محمد العلمي" />
                </div>
                <div>
                  <label className="block mb-1 text-slate-800">المستوى الدراسي *</label>
                  <select name="level" value={formData.level} onChange={handleChange} className="w-full p-2.5 border-2 rounded-lg bg-white text-slate-900">
                    <optgroup label="التعليم الابتدائي">
                      <option value="الأول ابتدائي">الأول ابتدائي</option>
                      <option value="الثاني ابتدائي">الثاني ابتدائي</option>
                      <option value="الثالث ابتدائي">الثالث ابتدائي</option>
                      <option value="الرابع ابتدائي">الرابع ابتدائي</option>
                      <option value="الخامس ابتدائي">الخامس ابتدائي</option>
                      <option value="السادس ابتدائي">السادس ابتدائي</option>
                    </optgroup>
                    <optgroup label="التعليم الإعدادي">
                      <option value="الأولى إعدادي">الأولى إعدادي</option>
                      <option value="الثانية إعدادي">الثانية إعدادي</option>
                      <option value="الثالثة إعدادي">الثالثة إعدادي</option>
                    </optgroup>
                    <optgroup label="التعليم الثانوي">
                      <option value="الجذع المشترك">الجذع المشترك</option>
                      <option value="الأولى باكالوريا">الأولى باكالوريا</option>
                      <option value="الثانية باكالوريا">الثانية باكالوريا</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block mb-1 text-slate-800">رقم هاتف الولي (واتساب) *</label>
                  <input type="text" name="parentPhone" required value={formData.parentPhone} onChange={handleChange} className="w-full p-2.5 border-2 rounded-lg text-slate-900" placeholder="0612345678" />
                </div>
                <div>
                  <label className="block mb-1 text-slate-800">الأستاذ المسؤول</label>
                  <select name="teacherId" value={formData.teacherId} onChange={handleChange} className="w-full p-2.5 border-2 rounded-lg bg-white text-slate-900">
                    <option value="">اختيار الأستاذ</option>
                    {teachers.map(t => <option key={t.id} value={t.id}>{t.name || t.fullName} ({t.subject || ''})</option>)}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="block mb-1 text-slate-800">المؤسسة الأصلية</label>
                  <input type="text" name="schoolName" value={formData.schoolName} onChange={handleChange} className="w-full p-2.5 border-2 rounded-lg text-slate-900" placeholder="مثال: مدرسة الإمام علي" />
                </div>
                <div>
                  <label className="block mb-1 text-slate-800">الواجب الشهري (درهم)</label>
                  <input type="number" name="monthlyFee" value={formData.monthlyFee} onChange={handleChange} className="w-full p-2.5 border-2 rounded-lg text-slate-900" placeholder="300" />
                </div>
              </div>

              <div>
                <label className="block mb-1 text-slate-800">⚠️ نقط الضعف والمشاكل الدراسية</label>
                <textarea name="weaknesses" rows="2" value={formData.weaknesses} onChange={handleChange} className="w-full p-2 border-2 rounded-lg text-slate-900" placeholder="مثال: ناقص فـ القواعد، تعثر فـ الحساب..." ></textarea>
              </div>

              <div>
                <label className="block mb-1 text-slate-800">💬 ملاحظات إضافية (ملاحظات الأم أو الإدارة)</label>
                <textarea name="generalNotes" rows="2" value={formData.generalNotes} onChange={handleChange} className="w-full p-2 border-2 rounded-lg text-slate-900" placeholder="أي معلومات أو وصايا قالتها الأم عند التسجيل..." ></textarea>
              </div>

              <div className="flex gap-2 pt-3 border-t">
                <button type="submit" className="flex-1 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-black text-sm">حفظ التلميذ ✅</button>
                <button type="button" onClick={() => setShowAddModal(false)} className="px-4 py-2.5 bg-slate-200 text-slate-800 rounded-lg font-bold">إلغاء</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}