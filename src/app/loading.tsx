import { Icons } from '@/assets/icons';

export default function loading() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center">
      <Icons.spinIcon className="h-7 w-7 animate-spin text-indigo-500" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
