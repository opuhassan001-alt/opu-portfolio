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

export type PassCategory = 'normal' | 'key' | 'assist' | 'freekick' | 'aerial';

export interface PassEvent {
  id: string;
  playerId: string;
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

export interface Player {
  id: string;
  name: string;
  club: string;
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
}

export interface Team {
  id: string;
  name: string;
  shortName: string;
  crestUrl: string;
  competitionId: string;
  stadium: string;
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
  status: 'LIVE' | 'FINISHED' | 'SCHEDULED';
  date: string;
  venue: string;
  featuredPlayerIds?: string[];
}
