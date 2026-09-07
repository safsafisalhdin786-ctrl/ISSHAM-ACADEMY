-- Policy model:
--   * Data is SHARED: any authenticated user may SELECT all rows
--     (students/teachers/payments/attendance are managed by the admin team).
--   * INSERT: authenticated users only, and the row must be stamped with
--     their own auth.uid() in user_id (or NULL when the column allows it).
--   * UPDATE/DELETE: authenticated users only (any staff member may edit any
--     record; the app always stamps the acting user's uid on update).
-- This fixes the error:
--   'new row violates row-level security policy for table "teachers"'
-- which occurred because the previous INSERT policy did not accept rows
-- stamped with the current auth.uid(), or a stricter per-owner policy
-- blocked rows created by another staff member.
--
-- This script is idempotent and NON-DESTRUCTIVE:
--   * it never drops tables or data, only (re)creates named policies.

BEGIN;

-- 1) Make sure the authenticated role can touch these tables.
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.students   TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.teachers   TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.attendance TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON TABLE public.payments   TO authenticated;

-- 2) RLS stays ENABLED on every application table.
ALTER TABLE IF EXISTS public.students   ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.teachers   ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.payments   ENABLE ROW LEVEL SECURITY;

-- 3) Recreate the policies (idempotent).
DO $$
DECLARE
  t text;
BEGIN
  FOREACH t IN ARRAY ARRAY['students', 'teachers', 'attendance', 'payments'] LOOP
    -- Remove our own previous policies if re-running.
    EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', t || '_select_authenticated', t);
    EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', t || '_insert_authenticated', t);
    EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', t || '_update_authenticated', t);
    EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', t || '_delete_authenticated', t);
    -- Remove the older combined policy from the previous version of this script.
    EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', t || '_authenticated_own_rows', t);

    -- SELECT: shared dataset, visible to every authenticated user.
    EXECUTE format($f$
      CREATE POLICY %I ON public.%I
      FOR SELECT TO authenticated
      USING (auth.uid() IS NOT NULL)
    $f$, t || '_select_authenticated', t);

    -- INSERT: only authenticated users, row must carry their own uid
    -- (or NULL if the app cannot determine it / column is nullable).
    EXECUTE format($f$
      CREATE POLICY %I ON public.%I
      FOR INSERT TO authenticated
      WITH CHECK (auth.uid() IS NOT NULL AND (user_id IS NULL OR user_id = auth.uid()))
    $f$, t || '_insert_authenticated', t);

    -- UPDATE: authenticated staff may update any record; the app restamps
    -- user_id with the acting user's uid.
    EXECUTE format($f$
      CREATE POLICY %I ON public.%I
      FOR UPDATE TO authenticated
      USING (auth.uid() IS NOT NULL)
      WITH CHECK (auth.uid() IS NOT NULL)
    $f$, t || '_update_authenticated', t);

    -- DELETE: authenticated users only (app currently soft-deletes teachers
    -- via status='inactive'; hard delete remains restricted to staff).
    EXECUTE format($f$
      CREATE POLICY %I ON public.%I
      FOR DELETE TO authenticated
      USING (auth.uid() IS NOT NULL)
    $f$, t || '_delete_authenticated', t);
  END LOOP;
END $$;

COMMIT;
