import { fetchOptions } from '@/lib/types';

export default async function getTodayMatches() {
  const currentDate = new Date();

  const yesterdayDate = new Date(currentDate);
  yesterdayDate.setDate(currentDate.getDate() - 1);

  const todayDateString = currentDate.toISOString().split('T')[0];
  const res = await fetch(
    `https://api.football-data.org/v4/matches?date=${todayDateString}`,
    fetchOptions
  );
  if (!res) {
    console.log('Error in getVideosData');
    return {};
  }

  const data = await res.json();
  return data;
}
