// src/data/standingsData.ts
export interface TeamStanding {
  rank: number;
  club: string;
  clubId: string;
  crestUrl: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  form: ('W' | 'D' | 'L')[];
}

export interface LeagueStandings {
  id: string;
  name: string;
  country: string;
  flag: string;
  season: string;
  table: TeamStanding[];
}

export const TOP_10_LEAGUES_STANDINGS: LeagueStandings[] = [
  {
    id: 'premier-league',
    name: 'Premier League',
    country: 'England',
    flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    season: '2026/27',
    table: [
      { rank: 1, club: 'Manchester City', clubId: 'manchester-city', crestUrl: '/assets/badges/manchester-city.png', played: 8, won: 6, drawn: 2, lost: 0, goalsFor: 19, goalsAgainst: 8, goalDifference: 11, points: 20, form: ['W', 'W', 'D', 'W', 'W'] },
      { rank: 2, club: 'Liverpool', clubId: 'liverpool', crestUrl: '/assets/badges/liverpool.png', played: 8, won: 6, drawn: 1, lost: 1, goalsFor: 18, goalsAgainst: 6, goalDifference: 12, points: 19, form: ['W', 'W', 'W', 'L', 'W'] },
      { rank: 3, club: 'Arsenal', clubId: 'arsenal', crestUrl: '/assets/badges/arsenal.png', played: 8, won: 5, drawn: 2, lost: 1, goalsFor: 16, goalsAgainst: 7, goalDifference: 9, points: 17, form: ['W', 'D', 'W', 'W', 'L'] },
      { rank: 4, club: 'Chelsea', clubId: 'chelsea', crestUrl: '/assets/badges/chelsea.png', played: 8, won: 4, drawn: 2, lost: 2, goalsFor: 17, goalsAgainst: 10, goalDifference: 7, points: 14, form: ['W', 'W', 'D', 'W', 'L'] },
      { rank: 5, club: 'Aston Villa', clubId: 'aston-villa', crestUrl: '/assets/badges/aston-villa.png', played: 8, won: 4, drawn: 2, lost: 2, goalsFor: 15, goalsAgainst: 11, goalDifference: 4, points: 14, form: ['D', 'W', 'W', 'D', 'W'] },
      { rank: 6, club: 'Tottenham Hotspur', clubId: 'tottenham-hotspur', crestUrl: '/assets/badges/tottenham.png', played: 8, won: 4, drawn: 1, lost: 3, goalsFor: 18, goalsAgainst: 12, goalDifference: 6, points: 13, form: ['W', 'L', 'W', 'W', 'L'] },
      { rank: 7, club: 'Newcastle United', clubId: 'newcastle-united', crestUrl: '/assets/badges/newcastle.png', played: 8, won: 3, drawn: 3, lost: 2, goalsFor: 10, goalsAgainst: 9, goalDifference: 1, points: 12, form: ['D', 'D', 'L', 'W', 'D'] },
      { rank: 8, club: 'Brighton & Hove Albion', clubId: 'brighton', crestUrl: '/assets/badges/brighton.png', played: 8, won: 3, drawn: 3, lost: 2, goalsFor: 13, goalsAgainst: 12, goalDifference: 1, points: 12, form: ['W', 'L', 'D', 'D', 'W'] },
      { rank: 9, club: 'Manchester United', clubId: 'manchester-united', crestUrl: '/assets/badges/manchester-united.png', played: 8, won: 3, drawn: 2, lost: 3, goalsFor: 9, goalsAgainst: 10, goalDifference: -1, points: 11, form: ['D', 'D', 'L', 'W', 'L'] },
      { rank: 10, club: 'West Ham United', clubId: 'west-ham', crestUrl: '/assets/badges/west-ham.png', played: 8, won: 2, drawn: 2, lost: 4, goalsFor: 11, goalsAgainst: 16, goalDifference: -5, points: 8, form: ['L', 'W', 'D', 'L', 'L'] }
    ]
  },
  {
    id: 'la-liga',
    name: 'La Liga',
    country: 'Spain',
    flag: '🇪🇸',
    season: '2026/27',
    table: [
      { rank: 1, club: 'FC Barcelona', clubId: 'fc-barcelona', crestUrl: '/assets/badges/barcelona.png', played: 9, won: 8, drawn: 0, lost: 1, goalsFor: 28, goalsAgainst: 9, goalDifference: 19, points: 24, form: ['W', 'W', 'W', 'L', 'W'] },
      { rank: 2, club: 'Real Madrid', clubId: 'real-madrid', crestUrl: '/assets/badges/real-madrid.png', played: 9, won: 7, drawn: 2, lost: 0, goalsFor: 22, goalsAgainst: 7, goalDifference: 15, points: 23, form: ['W', 'D', 'W', 'W', 'W'] },
      { rank: 3, club: 'Atlético Madrid', clubId: 'atletico-madrid', crestUrl: '/assets/badges/atletico-madrid.png', played: 9, won: 4, drawn: 5, lost: 0, goalsFor: 13, goalsAgainst: 5, goalDifference: 8, points: 17, form: ['D', 'D', 'W', 'D', 'W'] },
      { rank: 4, club: 'Athletic Club', clubId: 'athletic-club', crestUrl: '/assets/badges/athletic-bilbao.png', played: 9, won: 5, drawn: 2, lost: 2, goalsFor: 15, goalsAgainst: 10, goalDifference: 5, points: 17, form: ['L', 'D', 'W', 'W', 'W'] },
      { rank: 5, club: 'Villarreal', clubId: 'villarreal', crestUrl: '/assets/badges/villarreal.png', played: 9, won: 5, drawn: 2, lost: 2, goalsFor: 17, goalsAgainst: 16, goalDifference: 1, points: 17, form: ['L', 'W', 'W', 'L', 'W'] },
      { rank: 6, club: 'Real Betis', clubId: 'real-betis', crestUrl: '/assets/badges/real-betis.png', played: 9, won: 3, drawn: 3, lost: 3, goalsFor: 9, goalsAgainst: 8, goalDifference: 1, points: 12, form: ['L', 'D', 'L', 'W', 'W'] },
      { rank: 7, club: 'Real Sociedad', clubId: 'real-sociedad', crestUrl: '/assets/badges/real-sociedad.png', played: 9, won: 3, drawn: 2, lost: 4, goalsFor: 8, goalsAgainst: 9, goalDifference: -1, points: 11, form: ['D', 'W', 'D', 'L', 'L'] },
      { rank: 8, club: 'Girona FC', clubId: 'girona', crestUrl: '/assets/badges/girona.png', played: 9, won: 3, drawn: 2, lost: 4, goalsFor: 11, goalsAgainst: 13, goalDifference: -2, points: 11, form: ['W', 'D', 'L', 'L', 'D'] },
      { rank: 9, club: 'Sevilla FC', clubId: 'sevilla', crestUrl: '/assets/badges/sevilla.png', played: 9, won: 3, drawn: 2, lost: 4, goalsFor: 10, goalsAgainst: 13, goalDifference: -3, points: 11, form: ['W', 'D', 'W', 'L', 'L'] },
      { rank: 10, club: 'Celta Vigo', clubId: 'celta-vigo', crestUrl: '/assets/badges/celta-vigo.png', played: 9, won: 3, drawn: 1, lost: 5, goalsFor: 16, goalsAgainst: 17, goalDifference: -1, points: 10, form: ['L', 'D', 'L', 'L', 'W'] }
    ]
  },
  {
    id: 'serie-a',
    name: 'Serie A',
    country: 'Italy',
    flag: '🇮🇹',
    season: '2026/27',
    table: [
      { rank: 1, club: 'Napoli', clubId: 'napoli', crestUrl: '/assets/badges/napoli.png', played: 7, won: 5, drawn: 1, lost: 1, goalsFor: 14, goalsAgainst: 5, goalDifference: 9, points: 16, form: ['W', 'W', 'D', 'W', 'W'] },
      { rank: 2, club: 'Inter Milan', clubId: 'inter-milan', crestUrl: '/assets/badges/inter-milan.png', played: 7, won: 4, drawn: 2, lost: 1, goalsFor: 16, goalsAgainst: 9, goalDifference: 7, points: 14, form: ['W', 'W', 'L', 'D', 'W'] },
      { rank: 3, club: 'Juventus', clubId: 'juventus', crestUrl: '/assets/badges/juventus.png', played: 7, won: 3, drawn: 4, lost: 0, goalsFor: 10, goalsAgainst: 1, goalDifference: 9, points: 13, form: ['D', 'W', 'D', 'D', 'D'] },
      { rank: 4, club: 'AC Milan', clubId: 'ac-milan', crestUrl: '/assets/badges/ac-milan.png', played: 7, won: 3, drawn: 2, lost: 2, goalsFor: 15, goalsAgainst: 9, goalDifference: 6, points: 11, form: ['L', 'W', 'W', 'W', 'D'] },
      { rank: 5, club: 'SS Lazio', clubId: 'lazio', crestUrl: '/assets/badges/lazio.png', played: 7, won: 3, drawn: 2, lost: 2, goalsFor: 14, goalsAgainst: 11, goalDifference: 3, points: 11, form: ['W', 'W', 'L', 'W', 'D'] },
      { rank: 6, club: 'Atalanta', clubId: 'atalanta', crestUrl: '/assets/badges/atalanta.png', played: 7, won: 3, drawn: 1, lost: 3, goalsFor: 16, goalsAgainst: 12, goalDifference: 4, points: 10, form: ['W', 'D', 'L', 'W', 'L'] },
      { rank: 7, club: 'AS Roma', clubId: 'as-roma', crestUrl: '/assets/badges/as-roma.png', played: 7, won: 2, drawn: 4, lost: 1, goalsFor: 8, goalsAgainst: 5, goalDifference: 3, points: 10, form: ['D', 'W', 'W', 'D', 'D'] },
      { rank: 8, club: 'Fiorentina', clubId: 'fiorentina', crestUrl: '/assets/badges/fiorentina.png', played: 7, won: 2, drawn: 4, lost: 1, goalsFor: 9, goalsAgainst: 7, goalDifference: 2, points: 10, form: ['W', 'D', 'W', 'L', 'D'] }
    ]
  },
  {
    id: 'bundesliga',
    name: 'Bundesliga',
    country: 'Germany',
    flag: '🇩🇪',
    season: '2026/27',
    table: [
      { rank: 1, club: 'Bayern Munich', clubId: 'bayern-munich', crestUrl: '/assets/badges/bayern-munich.png', played: 6, won: 4, drawn: 2, lost: 0, goalsFor: 20, goalsAgainst: 7, goalDifference: 13, points: 14, form: ['D', 'D', 'W', 'W', 'W'] },
      { rank: 2, club: 'RB Leipzig', clubId: 'rb-leipzig', crestUrl: '/assets/badges/rb-leipzig.png', played: 6, won: 4, drawn: 2, lost: 0, goalsFor: 9, goalsAgainst: 2, goalDifference: 7, points: 14, form: ['W', 'W', 'D', 'D', 'W'] },
      { rank: 3, club: 'Eintracht Frankfurt', clubId: 'eintracht-frankfurt', crestUrl: '/assets/badges/frankfurt.png', played: 6, won: 4, drawn: 1, lost: 1, goalsFor: 14, goalsAgainst: 9, goalDifference: 5, points: 13, form: ['D', 'W', 'W', 'W', 'W'] },
      { rank: 4, club: 'Bayer Leverkusen', clubId: 'bayer-leverkusen', crestUrl: '/assets/badges/bayer-leverkusen.png', played: 6, won: 3, drawn: 2, lost: 1, goalsFor: 16, goalsAgainst: 12, goalDifference: 4, points: 11, form: ['D', 'D', 'W', 'W', 'L'] },
      { rank: 5, club: 'Borussia Dortmund', clubId: 'borussia-dortmund', crestUrl: '/assets/badges/borussia-dortmund.png', played: 6, won: 3, drawn: 1, lost: 2, goalsFor: 12, goalsAgainst: 11, goalDifference: 1, points: 10, form: ['L', 'W', 'L', 'W', 'D'] },
      { rank: 6, club: 'VfB Stuttgart', clubId: 'vfb-stuttgart', crestUrl: '/assets/badges/vfb-stuttgart.png', played: 6, won: 2, drawn: 3, lost: 1, goalsFor: 15, goalsAgainst: 11, goalDifference: 4, points: 9, form: ['D', 'D', 'W', 'D', 'L'] }
    ]
  },
  {
    id: 'ligue-1',
    name: 'Ligue 1',
    country: 'France',
    flag: '🇫🇷',
    season: '2026/27',
    table: [
      { rank: 1, club: 'Paris Saint-Germain', clubId: 'paris-saint-germain', crestUrl: '/assets/badges/psg.png', played: 7, won: 5, drawn: 2, lost: 0, goalsFor: 21, goalsAgainst: 6, goalDifference: 15, points: 17, form: ['D', 'W', 'D', 'W', 'W'] },
      { rank: 2, club: 'AS Monaco', clubId: 'as-monaco', crestUrl: '/assets/badges/monaco.png', played: 7, won: 6, drawn: 1, lost: 0, goalsFor: 14, goalsAgainst: 4, goalDifference: 10, points: 19, form: ['W', 'W', 'W', 'W', 'D'] },
      { rank: 3, club: 'Olympique Marseille', clubId: 'olympique-marseille', crestUrl: '/assets/badges/marseille.png', played: 7, won: 4, drawn: 2, lost: 1, goalsFor: 16, goalsAgainst: 8, goalDifference: 8, points: 14, form: ['D', 'L', 'W', 'W', 'W'] },
      { rank: 4, club: 'Lille OSC', clubId: 'lille-osc', crestUrl: '/assets/badges/lille.png', played: 7, won: 4, drawn: 1, lost: 2, goalsFor: 13, goalsAgainst: 8, goalDifference: 5, points: 13, form: ['W', 'W', 'D', 'L', 'L'] },
      { rank: 5, club: 'Olympique Lyonnais', clubId: 'olympique-lyonnais', crestUrl: '/assets/badges/lyon.png', played: 7, won: 3, drawn: 1, lost: 3, goalsFor: 10, goalsAgainst: 12, goalDifference: -2, points: 10, form: ['W', 'W', 'L', 'D', 'L'] }
    ]
  },
  {
    id: 'eredivisie',
    name: 'Eredivisie',
    country: 'Netherlands',
    flag: '🇳🇱',
    season: '2026/27',
    table: [
      { rank: 1, club: 'PSV Eindhoven', clubId: 'psv-eindhoven', crestUrl: '/assets/badges/psv.png', played: 8, won: 8, drawn: 0, lost: 0, goalsFor: 27, goalsAgainst: 6, goalDifference: 21, points: 24, form: ['W', 'W', 'W', 'W', 'W'] },
      { rank: 2, club: 'FC Utrecht', clubId: 'fc-utrecht', crestUrl: '/assets/badges/utrecht.png', played: 7, won: 6, drawn: 1, lost: 0, goalsFor: 15, goalsAgainst: 8, goalDifference: 7, points: 19, form: ['W', 'W', 'W', 'W', 'D'] },
      { rank: 3, club: 'Feyenoord', clubId: 'feyenoord', crestUrl: '/assets/badges/feyenoord.png', played: 7, won: 3, drawn: 4, lost: 0, goalsFor: 14, goalsAgainst: 6, goalDifference: 8, points: 13, form: ['W', 'D', 'W', 'D', 'D'] },
      { rank: 4, club: 'Ajax', clubId: 'ajax', crestUrl: '/assets/badges/ajax.png', played: 6, won: 4, drawn: 1, lost: 1, goalsFor: 13, goalsAgainst: 4, goalDifference: 9, points: 13, form: ['W', 'W', 'D', 'W', 'L'] },
      { rank: 5, club: 'AZ Alkmaar', clubId: 'az-alkmaar', crestUrl: '/assets/badges/az-alkmaar.png', played: 8, won: 3, drawn: 2, lost: 3, goalsFor: 16, goalsAgainst: 10, goalDifference: 6, points: 11, form: ['L', 'L', 'W', 'W', 'D'] }
    ]
  },
  {
    id: 'liga-portugal',
    name: 'Liga Portugal',
    country: 'Portugal',
    flag: '🇵🇹',
    season: '2026/27',
    table: [
      { rank: 1, club: 'Sporting CP', clubId: 'sporting-cp', crestUrl: '/assets/badges/sporting.png', played: 8, won: 8, drawn: 0, lost: 0, goalsFor: 27, goalsAgainst: 2, goalDifference: 25, points: 24, form: ['W', 'W', 'W', 'W', 'W'] },
      { rank: 2, club: 'FC Porto', clubId: 'fc-porto', crestUrl: '/assets/badges/porto.png', played: 8, won: 7, drawn: 0, lost: 1, goalsFor: 18, goalsAgainst: 4, goalDifference: 14, points: 21, form: ['W', 'W', 'W', 'W', 'L'] },
      { rank: 3, club: 'SL Benfica', clubId: 'sl-benfica', crestUrl: '/assets/badges/benfica.png', played: 7, won: 5, drawn: 1, lost: 1, goalsFor: 17, goalsAgainst: 5, goalDifference: 12, points: 16, form: ['W', 'W', 'W', 'D', 'W'] },
      { rank: 4, club: 'SC Braga', clubId: 'sc-braga', crestUrl: '/assets/badges/braga.png', played: 8, won: 4, drawn: 2, lost: 2, goalsFor: 13, goalsAgainst: 6, goalDifference: 7, points: 14, form: ['L', 'W', 'W', 'D', 'L'] }
    ]
  },
  {
    id: 'super-lig',
    name: 'Trendyol Süper Lig',
    country: 'Turkey',
    flag: '🇹🇷',
    season: '2026/27',
    table: [
      { rank: 1, club: 'Galatasaray', clubId: 'galatasaray', crestUrl: '/assets/badges/galatasaray.png', played: 8, won: 7, drawn: 1, lost: 0, goalsFor: 24, goalsAgainst: 8, goalDifference: 16, points: 22, form: ['W', 'D', 'W', 'W', 'W'] },
      { rank: 2, club: 'Samsunspor', clubId: 'samsunspor', crestUrl: '/assets/badges/samsunspor.png', played: 8, won: 6, drawn: 0, lost: 2, goalsFor: 14, goalsAgainst: 7, goalDifference: 7, points: 18, form: ['W', 'W', 'W', 'W', 'L'] },
      { rank: 3, club: 'Beşiktaş', clubId: 'besiktas', crestUrl: '/assets/badges/besiktas.png', played: 7, won: 5, drawn: 2, lost: 0, goalsFor: 15, goalsAgainst: 5, goalDifference: 10, points: 17, form: ['W', 'W', 'D', 'W', 'D'] },
      { rank: 4, club: 'Fenerbahçe', clubId: 'fenerbahce', crestUrl: '/assets/badges/fenerbahce.png', played: 7, won: 5, drawn: 1, lost: 1, goalsFor: 16, goalsAgainst: 7, goalDifference: 9, points: 16, form: ['W', 'W', 'L', 'W', 'W'] }
    ]
  },
  {
    id: 'belgian-pro-league',
    name: 'Belgian Pro League',
    country: 'Belgium',
    flag: '🇧🇪',
    season: '2026/27',
    table: [
      { rank: 1, club: 'KRC Genk', clubId: 'krc-genk', crestUrl: '/assets/badges/genk.png', played: 10, won: 7, drawn: 1, lost: 2, goalsFor: 21, goalsAgainst: 13, goalDifference: 8, points: 22, form: ['L', 'W', 'W', 'W', 'W'] },
      { rank: 2, club: 'Royal Antwerp', clubId: 'royal-antwerp', crestUrl: '/assets/badges/antwerp.png', played: 10, won: 6, drawn: 2, lost: 2, goalsFor: 21, goalsAgainst: 8, goalDifference: 13, points: 20, form: ['D', 'W', 'W', 'W', 'W'] },
      { rank: 3, club: 'Club Brugge', clubId: 'club-brugge', crestUrl: '/assets/badges/club-brugge.png', played: 10, won: 5, drawn: 3, lost: 2, goalsFor: 18, goalsAgainst: 12, goalDifference: 6, points: 18, form: ['D', 'D', 'L', 'W', 'W'] },
      { rank: 4, club: 'RSC Anderlecht', clubId: 'rsc-anderlecht', crestUrl: '/assets/badges/anderlecht.png', played: 10, won: 4, drawn: 5, lost: 1, goalsFor: 14, goalsAgainst: 8, goalDifference: 6, points: 17, form: ['W', 'D', 'D', 'D', 'L'] }
    ]
  },
  {
    id: 'scottish-premiership',
    name: 'Scottish Premiership',
    country: 'Scotland',
    flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    season: '2026/27',
    table: [
      { rank: 1, club: 'Celtic', clubId: 'celtic', crestUrl: '/assets/badges/celtic.png', played: 7, won: 7, drawn: 0, lost: 0, goalsFor: 22, goalsAgainst: 1, goalDifference: 21, points: 21, form: ['W', 'W', 'W', 'W', 'W'] },
      { rank: 2, club: 'Aberdeen', clubId: 'aberdeen', crestUrl: '/assets/badges/aberdeen.png', played: 7, won: 7, drawn: 0, lost: 0, goalsFor: 15, goalsAgainst: 6, goalDifference: 9, points: 21, form: ['W', 'W', 'W', 'W', 'W'] },
      { rank: 3, club: 'Rangers FC', clubId: 'rangers-fc', crestUrl: '/assets/badges/rangers.png', played: 7, won: 5, drawn: 1, lost: 1, goalsFor: 12, goalsAgainst: 4, goalDifference: 8, points: 16, form: ['W', 'W', 'W', 'L', 'W'] },
      { rank: 4, club: 'Dundee United', clubId: 'dundee-united', crestUrl: '/assets/badges/dundee.png', played: 7, won: 3, drawn: 3, lost: 1, goalsFor: 9, goalsAgainst: 7, goalDifference: 2, points: 12, form: ['W', 'L', 'D', 'W', 'W'] }
    ]
  }
];

export function getStandingsByLeague(leagueId: string): LeagueStandings | undefined {
  return TOP_10_LEAGUES_STANDINGS.find(l => l.id === leagueId);
}
