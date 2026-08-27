import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("تحذير: VITE_SUPABASE_URL أو VITE_SUPABASE_ANON_KEY غير معرفة في متغيرات البيئة.");
}

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);