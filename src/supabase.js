import { createClient } from '@supabase/supabase-js';
import logger from './utils/logger';

const configuredUrl = import.meta.env.VITE_SUPABASE_URL || '';
const configuredKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
const hasValidConfig =
  /^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(configuredUrl) &&
  configuredKey.length > 20 &&
  !configuredKey.includes('xxxx');

if (!hasValidConfig) {
logger.warn('Supabase', 'Supabase is not configured. Add valid VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY values to enable Supabase-backed pages.');
}

export const supabase = createClient(
  hasValidConfig ? configuredUrl : 'https://placeholder.supabase.co',
  hasValidConfig ? configuredKey : 'placeholder-anon-key'
);