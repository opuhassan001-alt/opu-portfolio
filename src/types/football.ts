/**
 * Core Football Analytics & Telemetry Schema
 * Normalized pitch coordinate space:
 * - x: [-52.5, 52.5] (length: defending goal line to attacking goal line)
 * - y: [-34.0, 34.0] (width: left touchline to right touchline)
 * - z: >= 0 (elevation in meters above pitch level)
 */

export interface Coordinate2D {
  x: number; // Pitch X: -52.5 to 52.5
  y: number; // Pitch Y: -34 to 34
}

export interface Coordinate3D extends Coordinate2D {
  z: number; // Elevation in meters (>= 0)
}

export type PassCategory = 'normal' | 'key' | 'assist' | 'freekick' | 'aerial' | 'shot';

export const PASS_CATEGORY_COLORS: Record<PassCategory, string> = {
  normal: '#38bdf8',   // Cyan
  key: '#eab308',      // Gold
  assist: '#22c55e',   // Emerald
  freekick: '#ef4444', // Crimson
  aerial: '#c084fc',   // Purple
  shot: '#f97316'      // Orange Rocket
} as const;

export interface PassEvent {
  id: string;
  playerId: string;
  teamId?: string;
  minute: number;
  second: number;
  start: Coordinate2D;
  end: Coordinate2D;
  apexHeight: number; // Maximum trajectory height in meters
  category: PassCategory;
  velocityKmH: number;
  distanceM: number;
  xGOT?: number;
  description?: string;
  landingQuadrant?: number; // 1-9 for goalmouth quadrant target analysis
  targetQuadrant?: number;
}

export interface MatchAction extends PassEvent {
  actionType: 'pass' | 'through_ball' | 'cross' | 'shot' | 'free_kick' | 'tackle' | 'interception' | 'save' | 'carry' | 'take_on';
  teamId: string;
  teamType: 'home' | 'away';
  playerName: string;
  playerNumber: number;
  outcome: 'successful' | 'unsuccessful' | 'goal' | 'saved' | 'blocked';
  sequenceId?: number;
}

export interface PlayerStats {
  normalPasses: number;
  keyPasses: number;
  assists: number;
  freeKickGoals: number;
  aerialCrosses: number;
  passAccuracyPct: number;
  expectedAssists?: number;
}

/**
 * Transfermarkt financial and biographical metadata
 */
export interface MarketInfo {
  marketValueEur: number;
  marketValueFormatted: string; // e.g. "€180M", "€45M"
  contractUntil: string; // e.g. "2029"
  age: number;
  heightCm: number;
  weightKg?: number;
  nationality: string;
  preferredFoot: 'Left' | 'Right' | 'Both';
  birthDate?: string;
  birthPlace?: string;
  ethnicity?: string;
  religion?: string;
  caste?: string;
  citizenship?: string;
  agent?: string;
  outfitter?: string;
  previousClubs?: string[];
  joinedDate?: string;
}

/**
 * SofaScore & FotMob match ratings and form data
 */
export interface MatchLogEntry {
  matchId: string;
  date: string;
  opponent: string;
  competition?: string;
  rating: number; // e.g. 8.7
  minutesPlayed: number;
  goals: number;
  assists: number;
  touches?: number;
  accuratePassesPct?: number;
  keyPasses: number;
  shots?: number;
}

export interface SofaScoreData {
  seasonRating: number; // e.g. 8.24
  formGuide: ('W' | 'D' | 'L')[];
  matchLogs: MatchLogEntry[];
  duelWinPct: number;
  touchesPer90: number;
}

/**
 * Opta Advanced Performance Metrics
 */
export interface OptaMetrics {
  xG: number;
  xA: number;
  xGOT: number;
  xGPer90: number;
  xAPer90: number;
  progressiveCarries: number;
  lineBreakingPasses: number;
  finalThirdEntries: number;
  tacklesWon: number;
  interceptions: number;
  clearances: number;
  pressuresWon: number;
  aerialDuelsWonPct: number;
}

export interface Player {
  id: string;
  name: string;
  club: string;
  clubId?: string;
  leagueId?: string;
  position: 'Goalkeeper' | 'Defender' | 'Midfielder' | 'Forward';
  nationality: string;
  number: number;
  headshotUrl: string;
  careerFreeKickGoals: number;
  careerAssists: number;
  careerGoals: number;
  dominanceZone: string;
  passes: PassEvent[];
  stats: PlayerStats;
  marketInfo?: MarketInfo;
  sofascoreData?: SofaScoreData;
  optaMetrics?: OptaMetrics;
}

export interface Team {
  id: string;
  name: string;
  shortName: string;
  crestUrl: string;
  competitionId: string;
  stadium: string;
}

export interface TeamLineup {
  teamId: string;
  teamName: string;
  formation: string; // e.g. "4-3-3", "4-2-3-1"
  coach: string;
  startingXI: Player[];
  substitutes: Player[];
}

export interface MatchComparisonStats {
  possession: [number, number]; // [home%, away%]
  totalShots: [number, number];
  shotsOnTarget: [number, number];
  passesCompleted: [number, number];
  passAccuracyPct: [number, number];
  corners: [number, number];
  fouls: [number, number];
  tacklesWon: [number, number];
  xG: [number, number];
}

export interface Competition {
  id: string;
  name: string;
  shortName: string;
  country: string;
  tier: number;
  logoUrl: string;
  season: string;
}

export interface MatchFixture {
  id: string;
  competitionId: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  minute: number;
  second?: number;
  status: 'LIVE' | 'FINISHED' | 'SCHEDULED';
  date: string;
  venue: string;
  attendance?: number;
  featuredPlayerIds?: string[];
  homeLineup: TeamLineup;
  awayLineup: TeamLineup;
  events: MatchAction[];
  stats: MatchComparisonStats;
}
