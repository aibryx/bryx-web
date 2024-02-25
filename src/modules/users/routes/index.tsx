import { Route, Routes } from 'react-router-dom';
import { User } from './user';

export const UsersRoutes = () => {
  return (
    <Routes>
      <Route path=":id" element={<User />} />
    </Routes>
  );
};
