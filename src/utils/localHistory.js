const ACTIVITY_KEY = 'isshaam_activity_log';
const ATTENDANCE_KEY = 'isshaam_attendance_history';
const ARCHIVED_STUDENTS_KEY = 'isshaam_archived_students';

const readArray = (key) => {
  try {
    const value = JSON.parse(window.localStorage.getItem(key) || '[]');
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
};

export const logActivity = (type, details) => {
  const entries = [
    {
      id: `activity-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      type,
      details,
      timestamp: new Date().toISOString(),
    },
    ...readArray(ACTIVITY_KEY),
  ].slice(0, 500);
  window.localStorage.setItem(ACTIVITY_KEY, JSON.stringify(entries));
};

export const readActivityLog = () => readArray(ACTIVITY_KEY);

export const saveAttendanceHistory = (records) => {
  const current = readArray(ATTENDANCE_KEY);
  const withoutSameDate = current.filter(
    (item) => item.date !== records[0]?.date
  );
  window.localStorage.setItem(
    ATTENDANCE_KEY,
    JSON.stringify([...records, ...withoutSameDate].slice(0, 2000))
  );
};

export const readAttendanceHistory = () => readArray(ATTENDANCE_KEY);

export const archiveStudent = (student) => {
  const archived = [
    { ...student, archived: true, archivedAt: new Date().toISOString() },
    ...readArray(ARCHIVED_STUDENTS_KEY).filter((item) => item.id !== student.id),
  ];
  window.localStorage.setItem(ARCHIVED_STUDENTS_KEY, JSON.stringify(archived));
};

export const readArchivedStudents = () => readArray(ARCHIVED_STUDENTS_KEY);

export const restoreStudent = (id) => {
  const archived = readArray(ARCHIVED_STUDENTS_KEY);
  const student = archived.find((item) => item.id === id);
  window.localStorage.setItem(
    ARCHIVED_STUDENTS_KEY,
    JSON.stringify(archived.filter((item) => item.id !== id))
  );
  return student ? { ...student, archived: false } : null;
};
