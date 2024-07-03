import { Leagues } from '@/lib/data';
import { fetchOptions } from '@/lib/types';

export default async function getTodayMatches() {
  const currentDate = new Date();

  const week = new Date(currentDate);
  week.setDate(currentDate.getDate() + 7);

  const from = currentDate.toISOString().split('T')[0];
  const to = week.toISOString().split('T')[0];

  const competitionIds = [
    '2003',
    '2000',
    '2018',
    '2013',
    Leagues.map((league) => league.footballDataId),
  ];
  const res = await fetch(
    `https://api.football-data.org/v4/matches?dateFrom=${from}&dateTo=${to}&competitions=${competitionIds}`,
    fetchOptions
  );
  if (!res) {
    console.log('Error in getVideosData');
    return {};
  }

  const data = await res.json();
  // console.log(data);
  return data;
}
