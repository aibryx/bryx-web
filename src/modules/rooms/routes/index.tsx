import { Route, Routes } from 'react-router-dom';

import { RoomsLayout } from '../components/layout';
import { RoomId } from '../components/room-id';
import { RoomEmpty } from '../components/room-empty';

export const RoomsRoutes = () => {
  return (
    <RoomsLayout>
      <Routes>
        <Route path="" element={<RoomEmpty />} />
        <Route path=":roomId" element={<RoomId />} />
      </Routes>
    </RoomsLayout>
  );
};
