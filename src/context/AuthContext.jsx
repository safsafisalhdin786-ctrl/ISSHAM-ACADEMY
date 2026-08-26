import React, {
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

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [userData, setUserData] = useState(null);

  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (user) => {
        setLoading(true);
        setAuthError(null);

        if (!user) {
          setCurrentUser(null);
          setUserRole(null);
          setUserData(null);
          setLoading(false);
          return;
        }

        setCurrentUser(user);

        try {
          const email = user.email
            ? user.email.toLowerCase().trim()
            : '';

          let role = null;
          let data = null;

          // =========================
          // 1. ADMIN
          // =========================

          if (email) {
            const adminByEmail = await getDoc(
              doc(db, 'admins', email)
            );

            if (adminByEmail.exists()) {
              role = 'admin';
              data = adminByEmail.data();
            }
          }

          if (!role) {
            const adminByUid = await getDoc(
              doc(db, 'admins', user.uid)
            );

            if (adminByUid.exists()) {
              role = 'admin';
              data = adminByUid.data();
            }
          }

          // =========================
          // 2. TEACHER
          // =========================

          if (!role) {
            const teacherDoc = await getDoc(
              doc(db, 'teachers', user.uid)
            );

            if (teacherDoc.exists()) {
              role = 'teacher';
              data = teacherDoc.data();
            }
          }

          // =========================
          // 3. STUDENT
          // =========================

          if (!role) {
            const studentDoc = await getDoc(
              doc(db, 'students', user.uid)
            );

            if (studentDoc.exists()) {
              role = 'student';
              data = studentDoc.data();
            }
          }

          // =========================
          // 4. NO ROLE
          // =========================

          if (!role) {
            console.warn(
              'Authenticated user has no assigned role:',
              user.uid
            );

            setUserRole(null);
            setUserData(null);

            setAuthError(
              'هذا الحساب مسجل ولكن لا توجد له صلاحية في النظام.'
            );
          } else {
            setUserRole(role);
            setUserData(data);
          }

        } catch (error) {
          console.error(
            'خطأ في التحقق من صلاحيات المستخدم:',
            error
          );

          // IMPORTANT:
          // Never give admin privileges when Firestore fails.
          setUserRole(null);
          setUserData(null);

          setAuthError(
            'تعذر التحقق من صلاحيات الحساب. يرجى المحاولة مرة أخرى.'
          );
        } finally {
          setLoading(false);
        }
      }
    );

    return unsubscribe;
  }, []);

  // =========================
  // LOGIN
  // =========================

  const login = async (email, password) => {
    const normalizedEmail = email
      ?.trim()
      .toLowerCase();

    if (!normalizedEmail || !password) {
      throw new Error(
        'المرجو إدخال البريد الإلكتروني وكلمة المرور.'
      );
    }

    return signInWithEmailAndPassword(
      auth,
      normalizedEmail,
      password
    );
  };

  // =========================
  // LOGOUT
  // =========================

  const logout = async () => {
    await signOut(auth);

    setCurrentUser(null);
    setUserRole(null);
    setUserData(null);
    setAuthError(null);
  };

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

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'useAuth must be used inside an AuthProvider'
    );
  }

  return context;
};