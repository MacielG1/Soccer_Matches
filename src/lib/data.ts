import { v4 as uuid } from 'uuid';

export const Leagues = [
  {
    id: uuid(),
    title: 'Brasileirão',
    href: 'brasileirao',
    logo: '/leagues/serie_a_brasil.webp',
    footballDataId: 2032,
  },
  {
    id: uuid(),
    title: 'Copa Libertadores',
    href: 'libertadores',
    logo: '/leagues/libertadores.webp',
    footballDataId: 2152,
  },
  {
    id: uuid(),
    title: 'Champions League',
    href: 'champions-league',
    logo: '/leagues/championsLeague.webp',
    footballDataId: 2001,
  },
  {
    id: uuid(),
    title: 'Premier League',
    href: 'premier-league',
    logo: '/leagues/premier_league.webp',
    footballDataId: 2021,
  },
  {
    id: uuid(),
    title: 'La Liga',
    href: 'la-liga',
    logo: '/leagues/laliga.webp',
    footballDataId: 2014,
  },
  {
    id: uuid(),
    title: 'Bundesliga',
    href: 'bundesliga',
    logo: '/leagues/bundesliga.webp',
    footballDataId: 2002,
  },
  {
    id: uuid(),
    title: 'Serie A',
    href: 'serie-a-italia',
    logo: '/leagues/serie_a_italia.webp',
    footballDataId: 2019,
  },
  {
    id: uuid(),
    title: 'Ligue 1',
    href: 'ligue-1',
    logo: '/leagues/ligue_1.webp',
    footballDataId: 2015,
  },

  {
    id: uuid(),
    title: 'Primeira Liga',
    href: 'primeira-liga',
    logo: '/leagues/liga_portugal.webp',
    footballDataId: 2017,
  },
];
