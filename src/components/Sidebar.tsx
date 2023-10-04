import { Leagues } from '@/lib/data';
import SidebarItem from './SidebarItem';
export default function Sidebar() {
  return (
    <aside className="mb-2 md:px-5 py-3 rounded-md bg-neutral-700 h-fit max-w-xs">
      <h2 className="text-indigo-400 tracking-wider text-center text-md font-semibold pb-1 ">
        Leagues
      </h2>
      <ul className="gap-2">
        {Leagues.map((l) => (
          <SidebarItem key={l.id} league={l} />
        ))}
      </ul>
    </aside>
  );
}
