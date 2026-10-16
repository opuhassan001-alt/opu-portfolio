import React from 'react';
import { Timer, MapPin } from 'lucide-react';

export interface ScorebugTeam {
  name: string;
  shortName: string;
  score: number;
  crestUrl?: string;
  color?: string;
}

export interface ScorebugHeaderProps {
  competitionName?: string;
  competitionShort?: string;
  homeTeam?: ScorebugTeam;
  awayTeam?: ScorebugTeam;
  minute?: number;
  second?: number;
  isLive?: boolean;
  scorers?: string[];
  venue?: string;
  className?: string;
}

export const ScorebugHeader: React.FC<ScorebugHeaderProps> = ({
  competitionName = 'UEFA Champions League',
  competitionShort = 'UCL',
  homeTeam = {
    name: 'Real Madrid',
    shortName: 'RMA',
    score: 3,
    color: '#38bdf8',
  },
  awayTeam = {
    name: 'Real Madrid All-Stars',
    shortName: 'RM',
    score: 4,
    color: '#ec4899',
  },
  minute = 74,
  second = 12,
  isLive = true,
  scorers = [
    'Mbappé 12\', 65\'',
    'Messi 38\', 74\' (FK)',
    'De Bruyne 55\' (FK)',
    'Güler 89\' (FK)',
  ],
  venue = 'Santiago Bernabéu • Attendance 81,044',
  className = '',
}) => {
  const formattedTime = `${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}`;

  return (
    <div
      data-testid="scorebug-header"
      className={`w-full bg-slate-950/95 border-b border-slate-800/80 px-4 py-2.5 shadow-xl ${className}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Main TV Scorebug Banner */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Competition Pill */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-gradient-to-r from-sky-900/60 to-indigo-900/60 border border-sky-500/40 text-sky-200 text-xs font-black tracking-wider uppercase">
            <span>{competitionShort}</span>
            <span className="text-slate-400 font-normal hidden sm:inline">•</span>
            <span className="text-[11px] font-semibold text-slate-300 hidden sm:inline">{competitionName}</span>
          </div>

          {/* Teams & Scorebug Display */}
          <div className="flex items-center rounded-lg bg-slate-900 border border-slate-800 overflow-hidden shadow-inner font-mono text-sm">
            {/* Home Team */}
            <div className="flex items-center gap-2 px-3 py-1 bg-slate-900/90 border-r border-slate-800">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-sm" />
              <span className="font-black text-slate-100 tracking-wider">{homeTeam.shortName}</span>
            </div>

            {/* Score */}
            <div className="flex items-center gap-2 px-3 py-1 bg-slate-950 font-black text-base text-white border-r border-slate-800">
              <span className="text-sky-300">{homeTeam.score}</span>
              <span className="text-slate-500 text-xs">-</span>
              <span className="text-emerald-300">{awayTeam.score}</span>
            </div>

            {/* Away Team */}
            <div className="flex items-center gap-2 px-3 py-1 bg-slate-900/90 border-r border-slate-800">
              <span className="font-black text-slate-100 tracking-wider">{awayTeam.shortName}</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm" />
            </div>

            {/* Clock & Live Indicator */}
            <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-900/60 text-slate-300 text-xs font-semibold">
              {isLive ? (
                <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              ) : (
                <Timer className="w-3.5 h-3.5 text-slate-400" />
              )}
              <span className="text-amber-400 font-bold">{formattedTime}</span>
            </div>
          </div>
        </div>

        {/* Scorers / Telemetry Ticker & Venue */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
          {/* Scorers */}
          {scorers && scorers.length > 0 && (
            <div className="flex items-center gap-1.5 bg-slate-900/70 border border-slate-800/80 px-2.5 py-1 rounded-md text-[11px]">
              <span className="text-slate-500 font-semibold uppercase">Goals:</span>
              <span className="text-slate-300 font-medium truncate max-w-[280px] sm:max-w-[400px]">
                {scorers.join(' • ')}
              </span>
            </div>
          )}

          {/* Venue */}
          {venue && (
            <div className="hidden lg:flex items-center gap-1 text-[11px] text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              <span>{venue}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScorebugHeader;
