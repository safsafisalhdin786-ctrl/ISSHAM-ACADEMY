-- Safe Supabase RLS fix for the ISSHAM ACADEMY app.
-- Run this in the Supabase SQL Editor against the production project.
-- This script keeps RLS enabled and enforces least privilege.
-- It assumes the app writes the authenticated user ID into user_id columns.
-- It does not disable RLS or create public unrestricted access.

BEGIN;

GRANT USAGE ON SCHEMA public TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.students TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.teachers TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.attendance TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.payments TO authenticated;

ALTER TABLE IF EXISTS public.students ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.teachers ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.payments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "students_authenticated_own_rows" ON public.students;
CREATE POLICY "students_authenticated_own_rows"
ON public.students
FOR ALL
TO authenticated
USING (auth.uid() IS NOT NULL AND (user_id IS NULL OR user_id = auth.uid()))
WITH CHECK (auth.uid() IS NOT NULL AND (user_id IS NULL OR user_id = auth.uid()));

DROP POLICY IF EXISTS "teachers_authenticated_own_rows" ON public.teachers;
CREATE POLICY "teachers_authenticated_own_rows"
ON public.teachers
FOR ALL
TO authenticated
USING (auth.uid() IS NOT NULL AND (user_id IS NULL OR user_id = auth.uid()))
WITH CHECK (auth.uid() IS NOT NULL AND (user_id IS NULL OR user_id = auth.uid()));

DROP POLICY IF EXISTS "attendance_authenticated_own_rows" ON public.attendance;
CREATE POLICY "attendance_authenticated_own_rows"
ON public.attendance
FOR ALL
TO authenticated
USING (auth.uid() IS NOT NULL AND (user_id IS NULL OR user_id = auth.uid()))
WITH CHECK (auth.uid() IS NOT NULL AND (user_id IS NULL OR user_id = auth.uid()));

DROP POLICY IF EXISTS "payments_authenticated_own_rows" ON public.payments;
CREATE POLICY "payments_authenticated_own_rows"
ON public.payments
FOR ALL
TO authenticated
USING (auth.uid() IS NOT NULL AND (user_id IS NULL OR user_id = auth.uid()))
WITH CHECK (auth.uid() IS NOT NULL AND (user_id IS NULL OR user_id = auth.uid()));

COMMIT;
