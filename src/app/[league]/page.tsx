import Table from '@/components/Table';
import { Leagues } from '@/lib/data';
import getSpecificLeague from '@/utils/getSpecificLeague';

export default async function page({ params }: { params: { league: string } }) {
  const leagueId = Leagues.find(
    (l) => l.href === params.league
  )?.footballDataId;

  if (!leagueId) return <h1>League Not Found</h1>;

  const data = await getSpecificLeague(leagueId);
  const hasData = data?.matches?.length > 0;

  return (
    <div className="md:-ml-40">
      <div className="flex justify-center items-center mb-4 md:mb-10 self-center">
        <h2 className="text-md lg:text-xl font-semibold">
          {hasData ? 'Matches' : 'No Matches'}
        </h2>
      </div>
      {hasData && <Table data={data} />}
    </div>
  );
}

export async function generateStaticParams() {
  return Leagues.map((i) => {
    return {
      league: i.href,
    };
  });
}
