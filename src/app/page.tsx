import getFinishedMatches from '@/utils/getYesterdayMatches';
import getFutureMatches from '@/utils/getFutureMatches';
import Lists from '@/components/Lists';

export default async function Home() {
  const future = await getFutureMatches();
  const yesterday = await getFinishedMatches();

  return (
    <section className="px-2 md:px-4">
      <Lists future={future} yesterday={yesterday} />
    </section>
  );
}
