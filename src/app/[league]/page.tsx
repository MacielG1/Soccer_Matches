import Table from '@/components/Table';
import { Leagues } from '@/lib/data';
import getSpecificLeague from '@/utils/getSpecificLeague';

export default async function page({ params }: { params: { league: string } }) {
  const leagueId = Leagues.find(
    (l) => l.href === params.league
  )?.footballDataId;

  if (!leagueId) return <h1>League Not Found</h1>;

  const data = await getSpecificLeague(leagueId);

  return (
    <>
      {data.matches.length === 0 ? (
        <h1>No Matches</h1>
      ) : (
        <div className="md:-ml-40">
          <Table data={data} />
        </div>
      )}
    </>
  );
}
