import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '../supabase';
import { useAuth } from '../context/AuthContext';

export default function Attendance() {
  const authContext = useAuth ? useAuth() : {};

  const {
    userRole = 'admin',
    currentUser = null,
  } = authContext;

  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [attendance, setAttendance] = useState({});

  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0]
  );

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevelFilter, setSelectedLevelFilter] = useState('');

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // =====================================================
  // FETCH DATA
  // =====================================================

  const fetchData = useCallback(async () => {
    setLoading(true);
    setErrorMessage('');

    try {
      // -------------------------------------------------
      // GET STUDENTS
      // -------------------------------------------------

      const { data: studentsData, error: studentsError } =
        await supabase
          .from('students')
          .select(`
            id,
            full_name,
            first_name,
            last_name,
            parent_name,
            parent_phone,
            parent_whatsapp,
            level_id,
            class_id,
            status,
            archived
          `)
          .eq('status', 'active')
          .or('archived.is.null,archived.eq.false')
          .order('full_name', { ascending: true });

      if (studentsError) {
        throw studentsError;
      }

      // -------------------------------------------------
      // GET LEVELS
      // -------------------------------------------------

      const { data: levelsData, error: levelsError } =
        await supabase
          .from('levels')
          .select(`
            id,
            name_ar,
            name_fr
          `)
          .eq('is_active', true)
          .order('name_ar');

      if (levelsError) {
        throw levelsError;
      }

      // -------------------------------------------------
      // GET CLASSES
      // -------------------------------------------------

      const { data: classesData, error: classesError } =
        await supabase
          .from('classes')
          .select(`
            id,
            name,
            level,
            capacity,
            room
          `)
          .order('name');

      if (classesError) {
        throw classesError;
      }

      // -------------------------------------------------
      // GET TEACHERS
      // -------------------------------------------------

      const { data: teachersData, error: teachersError } =
        await supabase
          .from('teachers')
          .select(`
            id,
            full_name,
            user_id,
            status
          `)
          .eq('status', 'active')
          .order('full_name');

      if (teachersError) {
        throw teachersError;
      }

      // -------------------------------------------------
      // GET ATTENDANCE
      // -------------------------------------------------

      const {
        data: attendanceData,
        error: attendanceError,
      } = await supabase
        .from('attendance')
        .select(`
          id,
          student_id,
          class_id,
          teacher_id,
          attendance_date,
          date,
          time_in,
          time_out,
          status,
          notes
        `)
        .eq('attendance_date', selectedDate);

      if (attendanceError) {
        throw attendanceError;
      }

      // -------------------------------------------------
      // MAP LEVELS
      // -------------------------------------------------

      const levelsMap = {};

      (levelsData || []).forEach((level) => {
        levelsMap[level.id] = level;
      });

      // -------------------------------------------------
      // MAP CLASSES
      // -------------------------------------------------

      const classesMap = {};

      (classesData || []).forEach((classItem) => {
        classesMap[classItem.id] = classItem;
      });

      // -------------------------------------------------
      // FORMAT STUDENTS
      // -------------------------------------------------

      const formattedStudents = (studentsData || []).map(
        (student) => {

          const level =
            levelsMap[student.level_id];

          const classItem =
            classesMap[student.class_id];

          return {
            ...student,

            level:
              level?.name_ar ||
              classItem?.level ||
              'غير محدد',

            levelId:
              student.level_id || null,

            className:
              classItem?.name ||
              'عام',

            teacherId:
              null,
          };
        }
      );

      // -------------------------------------------------
      // FIND TEACHER FROM ATTENDANCE / CLASS
      // -------------------------------------------------

      const attendanceTeacherMap = {};

      (attendanceData || []).forEach((record) => {
        if (record.student_id) {
          attendanceTeacherMap[
            record.student_id
          ] = record.teacher_id;
        }
      });

      const finalStudents =
        formattedStudents.map((student) => ({
          ...student,

          teacherId:
            attendanceTeacherMap[student.id] ||
            null,
        }));

      setStudents(finalStudents);
      setTeachers(teachersData || []);

      // -------------------------------------------------
      // ATTENDANCE MAP
      // -------------------------------------------------

      const attendanceMap = {};

      (attendanceData || []).forEach((record) => {
        attendanceMap[record.student_id] =
          record.status;
      });

      // -------------------------------------------------
      // DEFAULT STATUS
      // -------------------------------------------------

      const initialAttendance = {};

      finalStudents.forEach((student) => {
        initialAttendance[student.id] =
          attendanceMap[student.id] ||
          'present';
      });

      setAttendance(initialAttendance);

    } catch (error) {
      console.error(
        'خطأ في جلب بيانات الحضور:',
        error
      );

      setErrorMessage(
        error?.message ||
          'تعذر تحميل بيانات الحضور.'
      );

    } finally {
      setLoading(false);
    }
  }, [selectedDate]);

  // =====================================================
  // LOAD
  // =====================================================

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // =====================================================
  // CHANGE STATUS
  // =====================================================

  const handleStatusChange = (
    studentId,
    status
  ) => {
    setAttendance((prev) => ({
      ...prev,
      [studentId]: status,
    }));
  };

  // =====================================================
  // FILTER
  // =====================================================

  const filteredStudents =
    students.filter((student) => {

      // Teacher filter
      if (
        userRole === 'teacher' &&
        currentUser
      ) {
        const teacherMatches =
          student.teacherId ===
          currentUser.uid;

        if (!teacherMatches) {
          return false;
        }
      }

      const search =
        searchTerm
          .trim()
          .toLowerCase();

      const fullName =
        student.full_name || '';

      const level =
        student.level || '';

      const matchesSearch =
        !search ||
        fullName
          .toLowerCase()
          .includes(search) ||
        level
          .toLowerCase()
          .includes(search);

      const matchesLevel =
        selectedLevelFilter
          ? student.level ===
            selectedLevelFilter
          : true;

      return (
        matchesSearch &&
        matchesLevel
      );
    });

  // =====================================================
  // SET ALL
  // =====================================================

  const setAllStatus = (status) => {
    const updated = {
      ...attendance,
    };

    filteredStudents.forEach((student) => {
      updated[student.id] = status;
    });

    setAttendance(updated);
  };

  // =====================================================
  // SAVE
  // =====================================================

  const handleSaveAttendance =
    async () => {

      if (
        filteredStudents.length === 0
      ) {
        return;
      }

      setSaving(true);
      setSaveSuccess(false);
      setErrorMessage('');

      try {

        const records =
          filteredStudents.map(
            (student) => ({

              student_id:
                student.id,

              class_id:
                student.class_id ||
                null,

              teacher_id:
                student.teacherId ||
                null,

              attendance_date:
                selectedDate,

              date:
                selectedDate,

              status:
                attendance[
                  student.id
                ] || 'present',

              notes:
                null,

            })
          );

        // -------------------------------------------------
        // IMPORTANT:
        // We don't use upsert here because the current
        // database constraint may not match the exact
        // student/class/date combination.
        // -------------------------------------------------

        for (const record of records) {

          const {
            data: existing,
            error: searchError,
          } = await supabase
            .from('attendance')
            .select('id')
            .eq(
              'student_id',
              record.student_id
            )
            .eq(
              'attendance_date',
              selectedDate
            )
            .limit(1)
            .maybeSingle();

          if (searchError) {
            throw searchError;
          }

          if (existing?.id) {

            const {
              error: updateError,
            } = await supabase
              .from('attendance')
              .update({
                class_id:
                  record.class_id,

                teacher_id:
                  record.teacher_id,

                date:
                  record.date,

                status:
                  record.status,

                notes:
                  record.notes,
              })
              .eq(
                'id',
                existing.id
              );

            if (updateError) {
              throw updateError;
            }

          } else {

            const {
              error: insertError,
            } = await supabase
              .from('attendance')
              .insert(record);

            if (insertError) {
              throw insertError;
            }
          }
        }

        setSaveSuccess(true);

        setTimeout(() => {
          setSaveSuccess(false);
        }, 4000);

      } catch (error) {

        console.error(
          'خطأ في حفظ الحضور:',
          error
        );

        setErrorMessage(
          error?.message ||
            'حدث خطأ أثناء حفظ الحضور.'
        );

      } finally {
        setSaving(false);
      }
    };

  // =====================================================
  // WHATSAPP
  // =====================================================

  const sendAbsenceWhatsApp =
    (student) => {

      const phone =
        student.parent_whatsapp ||
        student.parent_phone;

      if (!phone) {
        alert(
          'رقم هاتف الولي غير متوفر!'
        );
        return;
      }

      let clean =
        phone
          .trim()
          .replace(/\s+/g, '')
          .replace(/-/g, '');

      if (
        clean.startsWith('+')
      ) {
        clean =
          clean.substring(1);
      }

      if (
        clean.startsWith('0')
      ) {
        clean =
          '212' +
          clean.substring(1);
      }

      const msg =
        `السلام عليكم ورحمة الله وبركاته،

تخبركم إدارة *أكاديمية إسهام* 🏫 بتسجيل غياب التلميذ(ة) *${
          student.full_name
        }* عن حصة اليوم بتاريخ *${
          selectedDate
        }*.

المرجو التواصل معنا لتأكيد سبب الغياب.

شكراً لتعاونكم. 🌹`;

      window.open(
        `https://wa.me/${clean}?text=${encodeURIComponent(
          msg
        )}`,
        '_blank'
      );
    };

  // =====================================================
  // STATISTICS
  // =====================================================

  const presentCount =
    filteredStudents.filter(
      (student) =>
        attendance[student.id] ===
        'present'
    ).length;

  const absentCount =
    filteredStudents.filter(
      (student) =>
        attendance[student.id] ===
        'absent'
    ).length;

  const lateCount =
    filteredStudents.filter(
      (student) =>
        attendance[student.id] ===
        'late'
    ).length;

  const excusedCount =
    filteredStudents.filter(
      (student) =>
        attendance[student.id] ===
        'excused'
    ).length;

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <div className="p-8 text-center text-slate-700 font-bold dir-rtl">
        جاري تحميل قائمة التلاميذ...
      </div>
    );
  }

  // =====================================================
  // UI
  // =====================================================

  return (
    <div className="space-y-6 dir-rtl pb-12 text-right">

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-5 rounded-xl shadow-md border border-slate-300 gap-4">

        <div>
          <h2 className="text-2xl font-black text-slate-900">
            تتبع الحضور والغياب 📋
          </h2>

          <p className="text-sm font-semibold text-slate-600">
            تسجيل وتأكيد حضور التلاميذ حسب التاريخ والمستوى
          </p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">

          <input
            type="date"
            value={selectedDate}
            onChange={(e) =>
              setSelectedDate(
                e.target.value
              )
            }
            className="px-3.5 py-2 border-2 border-slate-400 rounded-lg bg-white text-slate-900 font-bold text-sm"
          />

          <button
            onClick={
              handleSaveAttendance
            }
            disabled={
              saving ||
              filteredStudents.length === 0
            }
            className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-lg shadow-md text-sm disabled:opacity-50"
          >
            {saving
              ? 'جاري الحفظ...'
              : 'حفظ السجل ✅'}
          </button>

        </div>
      </div>

      {saveSuccess && (
        <div className="p-4 bg-emerald-100 border-2 border-emerald-400 text-emerald-900 rounded-xl font-extrabold text-center">
          🎉 تم حفظ سجل الحضور والغياب بنجاح في Supabase!
        </div>
      )}

      {errorMessage && (
        <div className="p-4 bg-rose-100 border-2 border-rose-400 text-rose-900 rounded-xl font-bold text-center">
          ❌ {errorMessage}
        </div>
      )}

      <div className="bg-white p-4 rounded-xl shadow-md border border-slate-300 flex flex-col md:flex-row justify-between items-center gap-4">

        <div className="flex flex-wrap items-center gap-3">

          <input
            type="text"
            placeholder="🔍 البحث عن تلميذ..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(
                e.target.value
              )
            }
            className="px-4 py-2 border-2 border-slate-300 rounded-lg w-56 text-slate-900 font-bold text-sm"
          />

          <select
            value={selectedLevelFilter}
            onChange={(e) =>
              setSelectedLevelFilter(
                e.target.value
              )
            }
            className="px-3 py-2 border-2 border-slate-300 rounded-lg text-sm bg-white font-bold text-slate-800"
          >

            <option value="">
              كل المستويات
            </option>

            <option value="الأول ابتدائي">
              الأول ابتدائي
            </option>

            <option value="الثاني ابتدائي">
              الثاني ابتدائي
            </option>

            <option value="الثالث ابتدائي">
              الثالث ابتدائي
            </option>

            <option value="الرابع ابتدائي">
              الرابع ابتدائي
            </option>

            <option value="الخامس ابتدائي">
              الخامس ابتدائي
            </option>

            <option value="السادس ابتدائي">
              السادس ابتدائي
            </option>

            <option value="الأولى إعدادي">
              الأولى إعدادي
            </option>

            <option value="الثانية إعدادي">
              الثانية إعدادي
            </option>

            <option value="الثالثة إعدادي">
              الثالثة إعدادي
            </option>

            <option value="الجذع المشترك">
              الجذع المشترك
            </option>

            <option value="الأولى باكالوريا">
              الأولى باكالوريا
            </option>

            <option value="الثانية باكالوريا">
              الثانية باكالوريا
            </option>

          </select>

        </div>

        <div className="flex items-center gap-2 flex-wrap">

          <span className="text-xs font-black">
            تحديد سريع:
          </span>

          <button
            onClick={() =>
              setAllStatus('present')
            }
            className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-black"
          >
            الجميع حاضر ✅
          </button>

          <button
            onClick={() =>
              setAllStatus('absent')
            }
            className="px-4 py-2 bg-rose-600 text-white rounded-lg text-xs font-black"
          >
            الجميع غائب ❌
          </button>

        </div>

        <div className="flex items-center gap-2 text-xs font-black flex-wrap">

          <span className="text-emerald-900 bg-emerald-100 px-3 py-1.5 rounded-lg">
            حاضر:
            <strong> {presentCount}</strong>
          </span>

          <span className="text-rose-900 bg-rose-100 px-3 py-1.5 rounded-lg">
            غائب:
            <strong> {absentCount}</strong>
          </span>

          <span className="text-blue-900 bg-blue-100 px-3 py-1.5 rounded-lg">
            متأخر:
            <strong> {lateCount}</strong>
          </span>

          <span className="text-amber-900 bg-amber-100 px-3 py-1.5 rounded-lg">
            مبرر:
            <strong> {excusedCount}</strong>
          </span>

        </div>

      </div>

      <div className="bg-white rounded-xl shadow-md border border-slate-300 overflow-hidden">

        {filteredStudents.length === 0 ? (

          <div className="p-6 text-center text-slate-500 font-bold">
            لا يوجد تلاميذ مطابقون للفلترة الحالية.
          </div>

        ) : (

          <div className="overflow-x-auto">

            <table className="w-full text-right border-collapse min-w-[850px]">

              <thead className="bg-slate-100 border-b-2 border-slate-300 text-slate-800 font-bold text-sm">

                <tr>

                  <th className="px-6 py-4">
                    الاسم الكامل
                  </th>

                  <th className="px-6 py-4">
                    المستوى
                  </th>

                  <th className="px-6 py-4">
                    القسم
                  </th>

                  <th className="px-6 py-4">
                    الأستاذ المسؤول
                  </th>

                  <th className="px-6 py-4 text-center">
                    حالة الحضور
                  </th>

                  <th className="px-6 py-4 text-center">
                    تواصل
                  </th>

                </tr>

              </thead>

              <tbody className="divide-y divide-slate-200 text-sm">

                {filteredStudents.map(
                  (student) => {

                    const assignedTeacher =
                      teachers.find(
                        (teacher) =>
                          teacher.id ===
                          student.teacherId
                      );

                    const status =
                      attendance[
                        student.id
                      ] || 'present';

                    return (

                      <tr
                        key={student.id}
                        className="hover:bg-slate-50 transition"
                      >

                        <td className="px-6 py-4 font-black text-slate-900">
                          {student.full_name}
                        </td>

                        <td className="px-6 py-4 text-slate-700 font-bold">
                          {student.level}
                        </td>

                        <td className="px-6 py-4 text-slate-700 font-bold">
                          {student.className}
                        </td>

                        <td className="px-6 py-4 text-slate-800 font-bold">
                          {assignedTeacher
                            ? assignedTeacher.full_name
                            : 'عام'}
                        </td>

                        <td className="px-6 py-4 text-center">

                          <div className="inline-flex rounded-lg p-1 bg-slate-200 gap-1 border border-slate-300 flex-wrap justify-center">

                            <button
                              type="button"
                              onClick={() =>
                                handleStatusChange(
                                  student.id,
                                  'present'
                                )
                              }
                              className={`px-3 py-1.5 rounded-md text-xs font-black ${
                                status === 'present'
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-slate-100 text-slate-800'
                              }`}
                            >
                              حاضر ✅
                            </button>

                            <button
                              type="button"
                              onClick={() =>
                                handleStatusChange(
                                  student.id,
                                  'absent'
                                )
                              }
                              className={`px-3 py-1.5 rounded-md text-xs font-black ${
                                status === 'absent'
                                  ? 'bg-rose-600 text-white'
                                  : 'bg-slate-100 text-slate-800'
                              }`}
                            >
                              غائب ❌
                            </button>

                            <button
                              type="button"
                              onClick={() =>
                                handleStatusChange(
                                  student.id,
                                  'late'
                                )
                              }
                              className={`px-3 py-1.5 rounded-md text-xs font-black ${
                                status === 'late'
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-slate-100 text-slate-800'
                              }`}
                            >
                              متأخر ⏰
                            </button>

                            <button
                              type="button"
                              onClick={() =>
                                handleStatusChange(
                                  student.id,
                                  'excused'
                                )
                              }
                              className={`px-3 py-1.5 rounded-md text-xs font-black ${
                                status === 'excused'
                                  ? 'bg-amber-600 text-white'
                                  : 'bg-slate-100 text-slate-800'
                              }`}
                            >
                              مبرر ⚠️
                            </button>

                          </div>

                        </td>

                        <td className="px-6 py-4 text-center">

                          {status === 'absent' && (

                            <button
                              type="button"
                              onClick={() =>
                                sendAbsenceWhatsApp(
                                  student
                                )
                              }
                              className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-black"
                            >
                              📲 إشعار الغياب
                            </button>

                          )}

                        </td>

                      </tr>

                    );
                  }
                )}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </div>
  );
}