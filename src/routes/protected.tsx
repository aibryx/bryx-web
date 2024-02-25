import { MainLayout } from '@/components/layouts/main-layout';
import { lazyImport } from '@/utils/lazy';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { FullSpinner } from '@/components/full-spinner';

const { RoomsRoutes } = lazyImport(() => import('@/modules/rooms'), 'RoomsRoutes');
const { UsersRoutes } = lazyImport(() => import('@/modules/users'), 'UsersRoutes');

// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
  return (
    <MainLayout>
      <Suspense fallback={<FullSpinner />}>
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    children: [
      {
        path: 'rooms/*',
        element: <RoomsRoutes />,
      },
      {
        path: 'users/*',
        element: <UsersRoutes />,
      },
    ],
  },
];
