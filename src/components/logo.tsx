import { cn } from '@/utils/tw-merge';
import { Link } from 'react-router-dom';

export const Logo = ({ classes }: { classes?: string }) => {
  return (
    <Link to="/">
      <span className={cn('relative z-20 flex items-center text-lg font-medium', classes ?? '')}>
        bryx
      </span>
    </Link>
  );
};
