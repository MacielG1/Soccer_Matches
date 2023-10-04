import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="ml-8 my-2 container flex justify-between items-center">
      <Link href="/" className="flex items-center gap-4">
        <Image
          src="/logo.jpg"
          alt="logo"
          width={30}
          height={30}
          priority
          style={{ width: 30, height: 30 }}
        />
        <span className="tracking-wide text-2xl font-bold hidden md:block text-neutral-200">
          Soccer Matches
        </span>
      </Link>
    </div>
  );
}
