import { matchesType } from '@/lib/types';
import Image from 'next/image';

export default function Match({ data }: { data: matchesType }) {
  const gameDate = new Date(data?.utcDate).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="grid grid-cols-3 px-8 md:px-14 pb-2 ">
      <div className="w-full flex items-center">
        <div className="relative mr-2">
          <Image
            src={data?.homeTeam?.crest!}
            alt={data?.homeTeam?.name!}
            width={20}
            height={20}
            className="object-cover min-w-[16px]"
          />
        </div>
        <p className="text-sm sm:whitespace-nowrap">{data?.homeTeam?.name}</p>
      </div>
      <div className="px-3 m-auto flex justify-center text-sm items-center bg-neutral-800 border border-neutral-600 rounded-lg">
        {data?.status == 'FINISHED' ? (
          <p className="py-1  text-neutral-100 flex gap-2">
            <span>{data?.score?.fullTime.home}</span> :
            <span> {data.score?.fullTime.away}</span>
          </p>
        ) : (
          <p className="py-1 text-neutral-200 ">{gameDate}</p>
        )}
      </div>
      <div className="w-full flex items-center justify-end">
        <p className="text-sm text-right sm:whitespace-nowrap">
          {data.awayTeam?.name}
        </p>
        <div className="relative ml-2">
          <Image
            src={data?.awayTeam?.crest!}
            alt={data.awayTeam?.name!}
            width={20}
            height={20}
            className="object-cover min-w-[16px]"
          />
        </div>
      </div>
    </div>
  );
}