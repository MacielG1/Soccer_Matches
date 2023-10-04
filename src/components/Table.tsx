import { matchesDataType, matchesType } from '@/lib/types';
import Image from 'next/image';
import Match from './Match';

export default function Table({ data }: { data: matchesDataType }) {
  return (
    <div className="md:w-[40rem] xl:w-[50rem] py-3 mb-10 px-2 md:px-3 rounded-md flex flex-col gap-3 bg-neutral-700">
      {data?.matches?.map((match: matchesType) => {
        const d = new Date(match?.utcDate);
        return (
          <>
            {/* Header */}
            <div
              className=" my-2 flex justify-between items-center px-4 py-1 bg-zinc-600 rounded-lg"
              key={match.id}
            >
              <div className="flex gap-5">
                <Image
                  src={match?.competition?.emblem}
                  alt={match?.competition.name}
                  width={20}
                  height={20}
                />
                <span className="text-sm text-neutral-200">
                  {match?.competition.name}
                </span>
              </div>
              <p className="text-xs">{d.toDateString()}</p>
            </div>
            {/* Match Details */}
            <Match data={match} />
          </>
        );
      })}
    </div>
  );
}
