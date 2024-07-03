import { fetchOptions } from '@/lib/types';

export default async function getSpecificLeague(id: number) {
  const currentDate = new Date();

  const week = new Date(currentDate);
  week.setDate(currentDate.getDate() + 10);

  const from = currentDate.toISOString().split('T')[0];
  const to = week.toISOString().split('T')[0];

  const res = await fetch(
    `https://api.football-data.org/v4/competitions/${id}/matches`
    // fetchOptions
  );
  if (!res) {
    console.log('Error in getVideosData');
    return {};
  }

  const data = await res.json();

  console.log(data);

  return data;
}
