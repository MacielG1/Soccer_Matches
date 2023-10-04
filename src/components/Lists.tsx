'use client';
import { matchesDataType, matchesType } from '@/lib/types';
import { useState } from 'react';
import { cn } from '@/lib/cn';
import Table from './Table';
import capitalize from '@/utils/Capitalize';

type Props = {
  today: matchesDataType;
  yesterday: matchesDataType;
};
const modes = ['today', 'yesterday'];

export default function Lists({ today, yesterday }: Props) {
  const [statusMatch, setStatusMatch] = useState(modes[0]);

  return (
    <section className="flex flex-col">
      <div className="flex justify-between items-center mb-4 md:mb-2 self-center">
        <h2 className="text-md lg:text-xl font-semibold">Matches</h2>
      </div>
      <div className="flex gap-x-4 mb-2 md:mb-4 self-end">
        {modes.map((status) => (
          <button
            key={status}
            onClick={() => setStatusMatch(status)}
            className={cn(
              'px-2 py-1   text-primary text-sm rounded-lg',
              status === statusMatch
                ? 'bg-indigo-600'
                : 'bg-neutral-600 hover:bg-neutral-700 transition-colors duration-300'
            )}
          >
            {capitalize(status)}
          </button>
        ))}
      </div>

      <div className="w-full mb-6">
        {statusMatch === 'today' && <Table key="today" data={today} />}
        {statusMatch === 'yesterday' && (
          <Table key="yesterday" data={yesterday} />
        )}
      </div>
    </section>
  );
}
