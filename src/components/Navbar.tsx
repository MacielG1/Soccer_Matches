import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="ml-12 my-4 flex justify-between items-center">
      <Link
        href="/"
        className="flex items-center gap-4 hover:text-primary-500 transition-colors"
      >
        <div className="rounded-full p-2 bg-gradient-to-r from-primary-400 to-primary-600">
          <Image
            src="/logo.jpg"
            alt="logo"
            width={30}
            height={30}
            priority
            style={{ width: 30, height: 30, borderRadius: '50%' }}
          />
        </div>
        <span className="tracking-wide text-2xl font-bold hidden md:block text-neutral-200">
          Soccer Matches
        </span>
      </Link>
    </nav>
  );
}
