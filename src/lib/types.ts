export type teamData = {
  id: number;
  name: string;
  crest: string;
};
export type matches = {
  id: number;
  competition: matchesCompetition;
  homeTeam: teamData;
  awayTeam: teamData;
  score: Scores;
};

export type matchesCompetition = {
  id: number;
  name: string;
  emblem: string;
};

export type Scores = {
  fullTime: { home: number; away: number };
  halfTime: { home: number; away: number };
};

export type matchesType = {
  competition: matchesCompetition;
  id: number;
  utcDate: string;
  status: string;
  homeTeam: teamData;
  awayTeam: teamData;
  scores: Scores;
};

export type matchesDataType = {
  matches: matchesType[];
};

export const fetchOptions = {
  headers: {
    'X-Auth-Token': process.env.FOOTBALL_DATA_API || '',
    'Content-Type': 'application/json',
  },
  next: { revalidate: 60 },
};
