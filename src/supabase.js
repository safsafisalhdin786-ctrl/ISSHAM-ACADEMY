import { createClient } from '@supabase/supabase-js';
import logger from './utils/logger';

const configuredUrl = import.meta.env.VITE_SUPABASE_URL || '';
const configuredKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
export const hasValidConfig =
  /^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(configuredUrl) &&
  configuredKey.length > 20 &&
  !configuredKey.includes('xxxx');

// Non-sensitive message: never logs the actual URL or key values.
export const SUPABASE_CONFIG_ERROR_MESSAGE =
  'إعدادات Supabase غير مكتملة في هذه البيئة. يرجى ضبط المتغيرين VITE_SUPABASE_URL و VITE_SUPABASE_ANON_KEY في إعدادات النشر (Vercel) أو في ملف .env.local للتطوير المحلي.';

if (!hasValidConfig) {
  // Always surface this warning (even in production) since it contains no secrets
  // and is critical to diagnosing "Failed to fetch" style errors caused by a
  // missing/placeholder Supabase configuration for the current environment.
  console.error(`[Supabase] ${SUPABASE_CONFIG_ERROR_MESSAGE}`);
  logger.warn('Supabase', SUPABASE_CONFIG_ERROR_MESSAGE);
}

export const supabase = createClient(
  hasValidConfig ? configuredUrl : 'https://placeholder.supabase.co',
  hasValidConfig ? configuredKey : 'placeholder-anon-key'
);

// Wraps a Supabase query error so pages show the real diagnostic reason
// (e.g. missing environment configuration) instead of a generic
// "TypeError: Failed to fetch" when the client was never configured.
export const describeSupabaseError = (error) => {
  if (!hasValidConfig) {
    return SUPABASE_CONFIG_ERROR_MESSAGE;
  }
  return error?.message || 'خطأ غير معروف';
};