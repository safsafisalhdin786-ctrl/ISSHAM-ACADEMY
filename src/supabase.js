import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Supabase is not configured. Define VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY before starting the app.'
  );
}

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);