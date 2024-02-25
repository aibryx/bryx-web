import { User } from '@supabase/supabase-js';

export const serialize = (user: User | null) =>
  user
    ? {
        id: user.id,
        email: user.email as string,
        username: user.user_metadata.name as string,
        avatar_url: user.user_metadata.avatar_url as string,
      }
    : null;
