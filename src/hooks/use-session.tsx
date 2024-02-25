import { supabase } from '@/lib/supabase';
import { AuthError, Session } from '@supabase/supabase-js';
import { useQuery } from '@tanstack/react-query';

type GetSessionReponse = {
  session: Session | null;
};

const getSession = async (): Promise<GetSessionReponse> => {
  const { data, error } = await supabase.auth.getSession();
  if (error) throw new Error(error.message);
  return data;
};

export const useSession = () => {
  const { data, error, isLoading } = useQuery<GetSessionReponse, AuthError>({
    queryKey: ['session'],
    queryFn: getSession,
  });

  const session = data?.session;
  const user = session?.user;

  return { isLoading, session, user, error };
};
