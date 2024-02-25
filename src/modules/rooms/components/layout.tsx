import { PropsWithChildren } from 'react';
import { RoomsList } from './rooms-list';
import { useSession } from '@/hooks/use-session';

export const RoomsLayout = ({ children }: PropsWithChildren) => {
  const { user } = useSession();

  if (!user) return null;
  return (
    <>
      {user.user_metadata?.name}
      <RoomsList />
      {children}
    </>
  );
};
