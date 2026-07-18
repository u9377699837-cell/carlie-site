CREATE TABLE public.quit_sessions (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  started_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.quit_sessions TO authenticated;
GRANT ALL ON public.quit_sessions TO service_role;

ALTER TABLE public.quit_sessions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own quit session"
  ON public.quit_sessions FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own quit session"
  ON public.quit_sessions FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own quit session"
  ON public.quit_sessions FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own quit session"
  ON public.quit_sessions FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);