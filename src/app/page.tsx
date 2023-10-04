import getFinishedMatches from '@/utils/getYesterdayMatches';
import getTodayMatches from '@/utils/getTodayMatches';
import Lists from '@/components/Lists';

export default async function Home() {
  const today = await getTodayMatches();
  const yesterday = await getFinishedMatches();

  return (
    <section className="md:-ml-40 px-2 md:px-4  ">
      <Lists today={today} yesterday={yesterday} />
    </section>
  );
}
