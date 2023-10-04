import { Leagues } from '@/lib/data';
import { fetchOptions, matchesDataType, matchesType } from '@/lib/types';

export default async function getTodayMatches() {
  const currentDate = new Date();

  const tomorrowDate = new Date(currentDate);
  tomorrowDate.setDate(currentDate.getDate() + 2);

  const todayDateString = currentDate.toISOString().split('T')[0];
  const tomorrowDateString = tomorrowDate.toISOString().split('T')[0];

  const competitionIds = [
    '2003',
    '2000',
    '2018',
    Leagues.map((league) => league.footballDataId),
  ];
  const res = await fetch(
    `https://api.football-data.org/v4/matches?dateFrom=${todayDateString}&dateTo=${tomorrowDateString}&competitions=${competitionIds}`,
    fetchOptions
  );
  if (!res) {
    console.log('Error in getVideosData');
    return {};
  }

  const data = await res.json();

  return data;
}
