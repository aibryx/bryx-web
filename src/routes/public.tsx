import { FullSpinner } from '@/components/full-spinner';
import { lazyImport } from '@/utils/lazy';
import { Suspense } from 'react';

const { AuthRoutes } = lazyImport(() => import('@/modules/auth'), 'AuthRoutes');

export const publicRoutes = [
  {
    path: '/auth/*',
    element: (
      <Suspense fallback={<FullSpinner />}>
        <AuthRoutes />
      </Suspense>
    ),
  },
];
