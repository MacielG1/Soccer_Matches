import { fetchOptions } from '@/lib/types';

const currentDate = new Date();

const yesterdayDate = new Date(currentDate);
yesterdayDate.setDate(currentDate.getDate() - 1);
const yesterdayDateString = yesterdayDate.toISOString().split('T')[0];

export default async function getFinishedMatches() {
  const data = await fetch(
    `https://api.football-data.org/v4/matches?date=${yesterdayDateString}`,
    fetchOptions
  );

  if (!data) {
    console.log('Error in getVideosData');
    return {};
  }
  return data.json();
}
