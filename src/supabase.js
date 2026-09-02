import { createClient } from '@supabase/supabase-js';
import logger from './utils/logger';

const configuredUrl = (import.meta.env.VITE_SUPABASE_URL || '').trim();
const configuredKey = (
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  ''
).trim();

const isValidSupabaseUrl = (value = '') => {
  const safeValue = value.trim();
  if (!safeValue) return false;

  return (
    /^https:\/\/[a-z0-9-]+\.supabase\.co(?:\/.+)?$/i.test(safeValue)
    || /^http:\/\/localhost:\d+(?:\/.+)?$/i.test(safeValue)
    || /^https?:\/\/127\.0\.0\.1:\d+(?:\/.+)?$/i.test(safeValue)
  );
};

const isLikelyValidAnonKey = (value = '') => value.length >= 20 && !value.includes('xxxx');

export const hasValidConfig = isValidSupabaseUrl(configuredUrl) && isLikelyValidAnonKey(configuredKey);

export const SUPABASE_CONFIG_ERROR_MESSAGE =
  'إعدادات Supabase غير مكتملة في هذه البيئة. يرجى ضبط VITE_SUPABASE_URL و VITE_SUPABASE_ANON_KEY (أو VITE_SUPABASE_PUBLISHABLE_KEY) في إعدادات النشر (Vercel) أو في ملف .env.local للتطوير المحلي.';

const INVALID_SUPABASE_URL = 'https://invalid.supabase.co';
const INVALID_SUPABASE_ANON_KEY = 'invalid-anon-key';

if (!hasValidConfig) {
  console.error(`[Supabase] ${SUPABASE_CONFIG_ERROR_MESSAGE}`);
  logger.warn('Supabase', SUPABASE_CONFIG_ERROR_MESSAGE);
}

export const supabase = createClient(
  hasValidConfig ? configuredUrl : INVALID_SUPABASE_URL,
  hasValidConfig ? configuredKey : INVALID_SUPABASE_ANON_KEY,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  }
);

export const describeSupabaseError = (error) => {
  if (!hasValidConfig) {
    return SUPABASE_CONFIG_ERROR_MESSAGE;
  }

  if (error?.code === 'PGRST301' || error?.message?.includes('JWT')) {
    return 'جلسة Supabase غير صالحة أو منتهية. يرجى تسجيل الدخول مرة أخرى.';
  }

  if (error?.code === '42501' || error?.message?.includes('row-level security')) {
    return 'تم رفض العملية من قبل سياسة الأمان (RLS) في قاعدة البيانات. تحقق من صلاحيات المستخدم وتسجيل الدخول والحقول المطلوبة مثل user_id.';
  }

  if (error?.message) {
    return error.message;
  }

  return 'خطأ غير معروف في قاعدة البيانات.';
};