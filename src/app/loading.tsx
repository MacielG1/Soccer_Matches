import { Icons } from '@/assets/icons';
export const revalidate = 3600;
export default function loading() {
  return (
    <div className="absolute flex flex-col justify-center">
      <Icons.spinIcon className="h-7 w-7 -ml-40 animate-spin text-indigo-500" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
