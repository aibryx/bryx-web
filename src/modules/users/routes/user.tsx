import { useParams } from 'react-router-dom';

export const User = () => {
  const { id } = useParams();
  return <div> user with id = {id}</div>;
};
