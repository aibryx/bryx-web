import { useRoutes } from 'react-router-dom';
import { protectedRoutes } from './protected';
import { publicRoutes } from './public';
import { NotFound, Welcome } from '@/modules/misc';
import { useSession } from '@/hooks/use-session';
import { FullSpinner } from '@/components/full-spinner';
import { toast } from 'sonner';

export const AppRoutes = () => {
  const { session, error, isLoading } = useSession();
  console.log(session);

  const commonRoutes = [
    { path: '*', element: <NotFound /> },
    { path: '/', element: <Welcome /> },
  ];
  const routes = session ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  if (isLoading) return <FullSpinner />;
  if (error) toast.error(error.message);

  return <>{element}</>;
};
