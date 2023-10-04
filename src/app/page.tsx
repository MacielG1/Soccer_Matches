import getFinishedMatches from '@/utils/getYesterdayMatches';
import getTodayMatches from '@/utils/getTodayMatches';
import Lists from '@/components/Lists';

export default async function Home() {
  const today = await getTodayMatches();
  const yesterday = await getFinishedMatches();

  return (
    <section className="md:-ml-40 px-2 md:px-4 md:w-[40rem] ">
      <div className="flex justify-between items-center mb-4 md:mb-2">
        <h2 className="text-md lg:text-xl font-semibold">Matches</h2>
      </div>
      <Lists today={today} yesterday={yesterday} />
    </section>
  );
}
