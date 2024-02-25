import { useParams } from 'react-router-dom';

export const RoomId = () => {
  const { roomId } = useParams();
  return <>room with id = {roomId}</>;
};
