'use client';
import { matchesDataType, matchesType } from '@/lib/types';
import { useState } from 'react';
import { cn } from '@/lib/cn';

type Props = {
  today: matchesDataType;
  yesterday: matchesDataType;
};
const modes = ['today', 'yesterday'];

export default function Lists({ today, yesterday }: Props) {
  const [statusMatch, setStatusMatch] = useState(modes[0]);

  return (
    <section>
      <div className="flex gap-x-4 mb-2 md:mb-4 ">
        {modes.map((status) => (
          <button
            key={status}
            onClick={() => setStatusMatch(status)}
            className={cn(
              'px-2 py-1 text-primary text-sm rounded-lg',
              status === statusMatch ? 'bg-indigo-600' : 'bg-neutral-600'
            )}
          >
            {status.toLowerCase()}
          </button>
        ))}
      </div>

      <div className="w-full mb-6  ">{/* {render table} */}</div>
    </section>
  );
}
