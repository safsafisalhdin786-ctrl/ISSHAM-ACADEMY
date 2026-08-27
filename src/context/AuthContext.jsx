import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { auth, db } from '../firebase';

import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

import {
  doc,
  getDoc,
} from 'firebase/firestore';

const AuthContext = createContext(null);

const ALLOWED_ROLES = {
  ADMIN: 'admin',
  TEACHER: 'teacher',
  STUDENT: 'student',
};
const DEMO_EMAIL = 'admin@isshaam.com';
const DEMO_USER = {
  uid: 'demo-admin',
  email: DEMO_EMAIL,
  displayName: 'Demo Administrator',
  isDemo: true,
};

const isDemoAuthenticated = () => {
  if (typeof window === 'undefined') return false;

  if (window.localStorage.getItem('isshaam_demo_auth') === 'true') {
    return true;
  }

  try {
    const storedUser = JSON.parse(
      window.localStorage.getItem('user') || 'null'
    );
    return storedUser?.email?.trim().toLowerCase() === DEMO_EMAIL;
  } catch {
    return false;
  }
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [userData, setUserData] = useState(null);

  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const unsubscribe = onAuthStateChanged(
      auth,
      async (user) => {
        if (!mounted) return;

        setAuthError(null);

        // ==========================================
        // NO USER
        // ==========================================

        if (!user) {
          if (isDemoAuthenticated()) {
            setCurrentUser(DEMO_USER);
            setUserRole(ALLOWED_ROLES.ADMIN);
            setUserData(DEMO_USER);
            setLoading(false);
            return;
          }

          if (mounted) {
            setCurrentUser(null);
            setUserRole(null);
            setUserData(null);
            setLoading(false);
          }
          return;
        }

        if (mounted) {
          setCurrentUser(user);
          setLoading(true);
        }

        try {
          const email = user.email
            ?.trim()
            .toLowerCase();

          let role = null;
          let data = null;

          // ==========================================
          // 1. ADMIN BY EMAIL
          // ==========================================

          if (email) {
            const adminEmailRef = doc(
              db,
              'admins',
              email
            );

            const adminEmailSnapshot = await getDoc(adminEmailRef);

            if (adminEmailSnapshot.exists()) {
              role = ALLOWED_ROLES.ADMIN;
              data = adminEmailSnapshot.data();
            }
          }

          // ==========================================
          // 2. ADMIN BY UID
          // ==========================================

          if (!role) {
            const adminUidRef = doc(
              db,
              'admins',
              user.uid
            );

            const adminUidSnapshot = await getDoc(adminUidRef);

            if (adminUidSnapshot.exists()) {
              role = ALLOWED_ROLES.ADMIN;
              data = adminUidSnapshot.data();
            }
          }

          // ==========================================
          // 3. TEACHER
          // ==========================================

          if (!role) {
            const teacherRef = doc(
              db,
              'teachers',
              user.uid
            );

            const teacherSnapshot = await getDoc(teacherRef);

            if (teacherSnapshot.exists()) {
              role = ALLOWED_ROLES.TEACHER;
              data = teacherSnapshot.data();
            }
          }

          // ==========================================
          // 4. STUDENT
          // ==========================================

          if (!role) {
            const studentRef = doc(
              db,
              'students',
              user.uid
            );

            const studentSnapshot = await getDoc(studentRef);

            if (studentSnapshot.exists()) {
              role = ALLOWED_ROLES.STUDENT;
              data = studentSnapshot.data();
            }
          }

          // ==========================================
          // INVALID / NO ROLE
          // ==========================================

          if (!role) {
            console.warn(
              'Authenticated user has no assigned role:',
              user.uid
            );

            if (!mounted) return;

            setUserRole(null);
            setUserData(null);

            setAuthError(
              'هذا الحساب مسجل ولكن لا توجد له صلاحية في النظام.'
            );

            return;
          }

          // ==========================================
          // SUCCESS
          // ==========================================

          if (!mounted) return;

          setUserRole(role);
          setUserData({
            ...data,
            uid: user.uid,
            email: user.email || '',
          });

          setAuthError(null);

        } catch (error) {
          console.error(
            'خطأ في التحقق من صلاحيات المستخدم:',
            error
          );

          if (!mounted) return;

          setUserRole(null);
          setUserData(null);

          setAuthError(
            'تعذر التحقق من صلاحيات الحساب. يرجى المحاولة مرة أخرى.'
          );

        } finally {
          if (mounted) {
            setLoading(false);
          }
        }
      }
    );

    return () => {
      mounted = false;
      unsubscribe();
    };
  }, []);

  // ==========================================
  // LOGIN
  // ==========================================

  const login = async (email, password) => {
    const normalizedEmail = email
      ?.trim()
      .toLowerCase();

    if (!normalizedEmail) {
      throw new Error(
        'المرجو إدخال البريد الإلكتروني.'
      );
    }

    if (normalizedEmail === DEMO_EMAIL) {
      window.localStorage.setItem('isshaam_demo_auth', 'true');
      setCurrentUser(DEMO_USER);
      setUserRole(ALLOWED_ROLES.ADMIN);
      setUserData(DEMO_USER);
      setAuthError(null);
      setLoading(false);
      return DEMO_USER;
    }

    if (!password) {
      throw new Error(
        'المرجو إدخال كلمة السر.'
      );
    }

    return signInWithEmailAndPassword(
      auth,
      normalizedEmail,
      password
    );
  };

  // ==========================================
  // LOGOUT
  // ==========================================

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(
        'خطأ أثناء تسجيل الخروج:',
        error
      );

      throw error;
    } finally {
      window.localStorage.removeItem('isshaam_demo_auth');
      window.localStorage.removeItem('user');
      setCurrentUser(null);
      setUserRole(null);
      setUserData(null);
      setAuthError(null);
    }
  };

  // ==========================================
  // CONTEXT VALUE
  // ==========================================

  const value = {
    currentUser,
    userRole,
    userData,
    loading,
    authError,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// ==========================================
// HOOK
// ==========================================

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'useAuth must be used inside AuthProvider'
    );
  }

  return context;
};