import { Loader2 as Loader } from 'lucide-react';

export const FullSpinner = () => {
  return (
    <div className="h-dvh w-full flex justify-center items-center">
      <Loader className="animate-spin" />
    </div>
  );
};
