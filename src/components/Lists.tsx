'use client';
import { matchesDataType, matchesType } from '@/lib/types';
import { useState } from 'react';
import { cn } from '@/lib/cn';
import Table from './Table';
import capitalizeText from '@/utils/capitalizeText';

type Props = {
  future: matchesDataType;
  yesterday: matchesDataType;
};
const modes = ['future', 'yesterday'];

export default function Lists({ future, yesterday }: Props) {
  const [statusMatch, setStatusMatch] = useState('future');

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
              'px-2 py-1 text-primary text-sm rounded-lg',
              status === statusMatch
                ? 'bg-indigo-600'
                : 'bg-neutral-600 hover:bg-neutral-700 transition-colors duration-300'
            )}
          >
            {capitalizeText(status)}
          </button>
        ))}
      </div>

      <div className="w-full mb-6">
        {statusMatch === 'future' && <Table key="future" data={future} />}
        {statusMatch === 'yesterday' && (
          <Table key="yesterday" data={yesterday} />
        )}
      </div>
    </section>
  );
}
