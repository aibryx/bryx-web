import { Route, Routes } from 'react-router-dom';

import { AuthLayout } from '@/components/layouts/auth-layout';
import { SignInForm } from '../components/sign-in-form';

export const AuthRoutes = () => {
  return (
    <AuthLayout>
      <Routes>
        <Route path="/sign-in" element={<SignInForm />} />
      </Routes>
    </AuthLayout>
  );
};
