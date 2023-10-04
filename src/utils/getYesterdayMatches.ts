import { Leagues } from '@/lib/data';
import { fetchOptions } from '@/lib/types';

const currentDate = new Date();

const yesterdayDate = new Date(currentDate);
yesterdayDate.setDate(currentDate.getDate() - 1);
const yesterdayDateString = yesterdayDate.toISOString().split('T')[0];
const competitionIds = [
  '2003',
  '2000',
  '2018',
  Leagues.map((league) => league.footballDataId),
];
export default async function getFinishedMatches() {
  const data = await fetch(
    `https://api.football-data.org/v4/matches?date=${yesterdayDateString}&competitions=${competitionIds}`,
    fetchOptions
  );

  if (!data) {
    console.log('Error in getVideosData');
    return {};
  }
  return data.json();
}
