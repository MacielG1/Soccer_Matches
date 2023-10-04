import { matchesDataType, matchesType } from '@/lib/types';

export default function Table({ data }: { data: matchesDataType }) {
  console.log('data', data);
  return (
    <div className="py-3 px-2 md:px-3 rounded-md  flex flex-col gap-31  bg-neutral-700 mb-2">
      {data?.matches?.map((match: matchesType) => (
        <>{/* {matches data} */}</>
      ))}
    </div>
  );
}
