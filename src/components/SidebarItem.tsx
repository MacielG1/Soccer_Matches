import Image from 'next/image';
import Link from 'next/link';

type SidebarItemProps = {
  league: {
    id: number;
    title: string;
    href: string;
    logo: string;
  };
};

export default function SidebarItem({
  league: { title, href, logo },
}: SidebarItemProps) {
  return (
    <Link href={href}>
      <li className="flex hover:text-white items-center gap-4 p-2 rounded-md hover:bg-neutral-600 duration-300 transition-colors">
        <Image src={logo} alt={title} width={18} height={18} />
        <span className="text-sm md:text-lg">{title}</span>
      </li>
    </Link>
  );
}
