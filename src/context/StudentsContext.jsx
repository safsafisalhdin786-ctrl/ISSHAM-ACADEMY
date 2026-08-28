import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const STUDENTS_KEY = 'isshaam_students';
const STUDENTS_EVENT = 'isshaam:students-updated';

const readStudents = () => {
  try {
    const value = JSON.parse(window.localStorage.getItem(STUDENTS_KEY) || '[]');
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
};

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
});

const StudentsContext = createContext(null);

export function StudentsProvider({ children }) {
  const [students, setStudentsState] = useState(() => readStudents().map(normalizeStudent));

  const setStudents = useCallback((next) => {
    setStudentsState((current) => {
      const value = typeof next === 'function' ? next(current) : next;
      const normalized = value.map(normalizeStudent);
      window.localStorage.setItem(STUDENTS_KEY, JSON.stringify(normalized));
      window.dispatchEvent(new Event(STUDENTS_EVENT));
      return normalized;
    });
  }, []);

  useEffect(() => {
    const sync = () => setStudentsState(readStudents().map(normalizeStudent));
    window.addEventListener(STUDENTS_EVENT, sync);
    window.addEventListener('storage', sync);
    return () => {
      window.removeEventListener(STUDENTS_EVENT, sync);
      window.removeEventListener('storage', sync);
    };
  }, []);

  const value = useMemo(() => ({ students, setStudents, refreshStudents: () => setStudentsState(readStudents().map(normalizeStudent)) }), [students, setStudents]);
  return <StudentsContext.Provider value={value}>{children}</StudentsContext.Provider>;
}

export function useStudents() {
  const context = useContext(StudentsContext);
  if (!context) throw new Error('useStudents must be used inside StudentsProvider');
  return context;
}
