import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { db } from '../firebase';
import { supabase } from '../supabase';
import logger from '../utils/logger';

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

const getConfiguredAdminEmails = () => {
  const rawConfig = [
    import.meta.env.VITE_ADMIN_EMAIL,
    import.meta.env.VITE_ADMIN_EMAILS,
  ]
    .filter(Boolean)
    .join(',');

  return rawConfig
    .split(',')
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);
};

const withTimeout = (promise, timeout = 12000) => Promise.race([
  promise,
  new Promise((_, reject) => {
    window.setTimeout(() => reject(new Error('AUTH_TIMEOUT')), timeout);
  }),
]);

const normalizeSupabaseUser = (user) => {
  if (!user) return null;
  return {
    uid: user.id,
    email: user.email || '',
    ...user,
  };
};

const resolveUserRoleFromFirestore = async (supabaseUser, expectedRole = null) => {
  if (!supabaseUser) {
    return { role: null, data: null };
  }

  const email = supabaseUser.email?.trim().toLowerCase();
  const configuredAdminEmails = getConfiguredAdminEmails();

  let role = null;
  let data = null;

  if (email) {
    const adminEmailRef = doc(db, 'admins', email);
    const adminEmailSnapshot = await withTimeout(getDoc(adminEmailRef));
    if (adminEmailSnapshot.exists()) {
      role = ALLOWED_ROLES.ADMIN;
      data = adminEmailSnapshot.data();
    }
  }

  if (!role) {
    const adminUidRef = doc(db, 'admins', supabaseUser.uid);
    const adminUidSnapshot = await withTimeout(getDoc(adminUidRef));
    if (adminUidSnapshot.exists()) {
      role = ALLOWED_ROLES.ADMIN;
      data = adminUidSnapshot.data();
    }
  }

  if (!role) {
    const teacherRef = doc(db, 'teachers', supabaseUser.uid);
    const teacherSnapshot = await withTimeout(getDoc(teacherRef));
    if (teacherSnapshot.exists()) {
      role = ALLOWED_ROLES.TEACHER;
      data = teacherSnapshot.data();
    }
  }

  if (!role) {
    const studentRef = doc(db, 'students', supabaseUser.uid);
    const studentSnapshot = await withTimeout(getDoc(studentRef));
    if (studentSnapshot.exists()) {
      role = ALLOWED_ROLES.STUDENT;
      data = studentSnapshot.data();
    }
  }

  if (!role && configuredAdminEmails.length > 0 && email && configuredAdminEmails.includes(email)) {
    role = ALLOWED_ROLES.ADMIN;
    data = {
      email,
      uid: supabaseUser.uid,
      source: 'configured-admin-email',
    };
  }

  if (expectedRole && role && role !== expectedRole) {
    throw new Error(`ACCOUNT_TYPE_MISMATCH:${role}:${expectedRole}`);
  }

  return { role, data };
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [userData, setUserData] = useState(null);

  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const resolveAuthState = async (supabaseUser) => {
      if (!mounted) return;

      setAuthError(null);

      if (!supabaseUser) {
        setCurrentUser(null);
        setUserRole(null);
        setUserData(null);
        setLoading(false);
        return;
      }

      setCurrentUser(supabaseUser);
      setLoading(true);

      try {
        const { role, data } = await resolveUserRoleFromFirestore(supabaseUser);

        if (!role) {
          logger.warn('AuthContext', `Authenticated Supabase user has no assigned role: ${supabaseUser.uid}`);
          if (!mounted) return;
          setUserRole(null);
          setUserData(null);
          setAuthError('هذا الحساب مسجل ولكن لا توجد له صلاحية في النظام.');
          return;
        }

        if (!mounted) return;
        setUserRole(role);
        setUserData({
          ...data,
          uid: supabaseUser.uid,
          email: supabaseUser.email || '',
        });
        setAuthError(null);
      } catch (error) {
        logger.error('AuthContext', error);
        if (!mounted) return;
        setUserRole(null);
        setUserData(null);
        setAuthError('تعذر التحقق من صلاحيات الحساب. يرجى المحاولة مرة أخرى.');
      } finally {
        if (mounted) setLoading(false);
      }
    };

    const initializeSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) throw error;

      if (!session?.user) {
        await resolveAuthState(null);
        return;
      }

      const { data: userData, error: userError } = await supabase.auth.getUser();
      if (userError) {
        logger.warn('AuthContext.getUser', userError);
      }

      const activeUser = normalizeSupabaseUser(userData?.user || session.user);
      await resolveAuthState(activeUser);
    };

    void initializeSession().catch((error) => {
      logger.error('AuthContext.initSession', error);
      if (mounted) {
        setCurrentUser(null);
        setUserRole(null);
        setUserData(null);
        setLoading(false);
        setAuthError('تعذر التحقق من جلسة المستخدم. يرجى تسجيل الدخول مرة أخرى.');
      }
    });

    const { data: authSubscription } = supabase.auth.onAuthStateChange(async (_event, session) => {
      await resolveAuthState(normalizeSupabaseUser(session?.user));
    });

    return () => {
      mounted = false;
      authSubscription?.subscription?.unsubscribe?.();
    };
  }, []);

  const login = async (email, password, expectedRole = null) => {
    const normalizedEmail = email?.trim().toLowerCase();

    if (!normalizedEmail) {
      throw new Error('المرجو إدخال البريد الإلكتروني.');
    }

    if (!password) {
      throw new Error('المرجو إدخال كلمة السر.');
    }

    console.info('[Auth] Attempting Supabase sign-in', {
      email: normalizedEmail,
      hasPassword: Boolean(password),
      hasValidConfig: !!(import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY),
    });

    const result = await withTimeout(
      supabase.auth.signInWithPassword({
        email: normalizedEmail,
        password,
      })
    );

    if (result.error) {
      console.error('[Auth] Supabase sign-in failed', {
        code: result.error.code,
        message: result.error.message,
        status: result.error.status,
      });
      throw result.error;
    }

    const authenticatedUser = normalizeSupabaseUser(result.data?.user);
    console.info('[Auth] Supabase sign-in succeeded', {
      userId: authenticatedUser?.uid,
      email: authenticatedUser?.email,
    });

    const { data: userRecord, error: userError } = await supabase.auth.getUser();
    if (userError) {
      logger.warn('AuthContext.login.getUser', userError);
    }

    const finalUser = normalizeSupabaseUser(userRecord?.user || authenticatedUser);

    try {
      const { role, data } = await resolveUserRoleFromFirestore(finalUser, expectedRole);
      if (!role) {
        throw new Error('NO_ROLE_FOR_ACCOUNT');
      }
      if (expectedRole && role !== expectedRole) {
        throw new Error(`ACCOUNT_TYPE_MISMATCH:${role}:${expectedRole}`);
      }
      setCurrentUser(finalUser);
      setUserRole(role);
      setUserData({
        ...data,
        uid: finalUser.uid,
        email: finalUser.email || '',
      });
      setAuthError(null);
      setLoading(false);
    } catch (roleError) {
      logger.error('AuthContext.loginRoleCheck', roleError);
      setCurrentUser(finalUser);
      setUserRole(null);
      setUserData(null);
      setAuthError('الحساب مسجل في Supabase لكنه لا يطابق نوع المستخدم المختار أو لا توجد له صلاحية في النظام.');
      throw roleError;
    }

    return result;
  };

  const resetPassword = async (email) => {
    const normalizedEmail = email?.trim().toLowerCase();
    if (!normalizedEmail) throw new Error('المرجو إدخال البريد الإلكتروني.');
    const { error } = await withTimeout(
      supabase.auth.resetPasswordForEmail(normalizedEmail)
    );
    if (error) throw error;
  };

  // ==========================================
  // LOGOUT
  // ==========================================

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.error('خطأ أثناء تسجيل الخروج:', error);
      throw error;
    } finally {
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
    resetPassword,
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