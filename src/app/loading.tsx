import { Icons } from '@/assets/icons';

export default function loading() {
  return (
    <div className="absolute flex flex-col justify-center">
      <Icons.spinIcon className="h-7 w-7 animate-spin text-indigo-500" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
