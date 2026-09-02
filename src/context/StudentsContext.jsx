import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { supabase, describeSupabaseError } from '../supabase';
import logger from '../utils/logger';

export const normalizeStudent = (student) => ({
  ...student,
  full_name: student.full_name || student.fullName || '',
  fullName: student.fullName || student.full_name || '',
  parent_phone: student.parent_phone || student.parentPhone || '',
  parentPhone: student.parentPhone || student.parent_phone || '',
  monthly_fee: student.monthly_fee ?? student.monthlyFee ?? 0,
  monthlyFee: student.monthlyFee ?? student.monthly_fee ?? 0,
  academic_level: student.academic_level || student.level || '',
  level: student.level || student.academic_level || '',
  teacher_id: student.teacher_id || student.teacherId || null,
  teacherId: student.teacherId || student.teacher_id || null,
  school: student.school || student.original_school
    || String(student.notes || '').match(/(?:^|\n)المدرسة:\s*(.+)/)?.[1]?.trim()
    || '',
});

const StudentsContext = createContext(null);

export function StudentsProvider({ children }) {
  const [students, setStudentsState] = useState([]);
  const [studentsLoading, setStudentsLoading] = useState(true);
  const [refreshToken, setRefreshToken] = useState(0);

  const setStudents = useCallback((next) => {
    setStudentsState((current) => {
      const value = typeof next === 'function' ? next(current) : next;
      return value.map(normalizeStudent);
    });
  }, []);

  useEffect(() => {
    let active = true;
    const loadStudents = async () => {
      const { data, error } = await supabase
        .from('students')
        .select('*')
        .eq('archived', false)
        .order('full_name', { ascending: true });
      if (error) {
        logger.error('StudentsContext', new Error(describeSupabaseError(error)));
        if (active) setStudentsLoading(false);
        return;
      }
      if (active) {
        setStudentsState((data || []).map(normalizeStudent));
        setStudentsLoading(false);
      }
    };
    void loadStudents();
    const channel = supabase
      .channel('academy-students-sync')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'students' }, () => setRefreshToken((token) => token + 1))
      .subscribe();
    return () => {
      active = false;
      void supabase.removeChannel(channel);
    };
  }, [refreshToken]);

  const value = useMemo(() => ({
    students,
    studentsLoading,
    setStudents,
    refreshStudents: () => setRefreshToken((token) => token + 1),
  }), [students, studentsLoading, setStudents]);
  return <StudentsContext.Provider value={value}>{children}</StudentsContext.Provider>;
}

export function useStudents() {
  const context = useContext(StudentsContext);
  if (!context) throw new Error('useStudents must be used inside StudentsProvider');
  return context;
}
