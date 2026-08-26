import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null); // 'admin' | 'teacher' | 'student'
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      if (user) {
        try {
          const userEmail = user.email ? user.email.toLowerCase() : '';
          
          // 1. تحقق واش Admin (سواء بالإيميل أو الـ UID)
          let adminDoc = await getDoc(doc(db, 'admins', userEmail));
          if (!adminDoc.exists()) {
            adminDoc = await getDoc(doc(db, 'admins', user.uid));
          }

          if (adminDoc.exists()) {
            setUserRole('admin');
            setUserData(adminDoc.data());
          } else {
            // 2. تحقق واش Teacher
            const teacherDoc = await getDoc(doc(db, 'teachers', user.uid));
            if (teacherDoc.exists()) {
              setUserRole('teacher');
              setUserData(teacherDoc.data());
            } else {
              // 3. التخلف العادي: Student
              setUserRole('student');
              const studentDoc = await getDoc(doc(db, 'students', user.uid));
              if (studentDoc.exists()) setUserData(studentDoc.data());
            }
          }
        } catch (error) {
          console.error("خطأ فـ جلب بيانات المستخدم:", error);
          // فـ حالة الخطأ نفترض صلاحية أدمن مبدئياً إيلا كان مسجل فـ Auth باش ما يتبلوكاش
          setUserRole('admin');
        }
      } else {
        setUserRole(null);
        setUserData(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ currentUser, userRole, userData, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);