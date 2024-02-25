import { supabase } from '@/lib/supabase';

export const signIn = async (): Promise<void> => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
      redirectTo: `${import.meta.env.VITE_BASE_URL}/`,
    },
  });

  if (error) throw new Error(error.message);
};
