import React from 'react';
import { Player, Team } from '../../types/football';
import PlayerHeadshot from '../common/PlayerHeadshot';

export interface TacticalFormationPitchProps {
  homeTeam: Team;
  awayTeam: Team;
  homeFormation: string;
  awayFormation: string;
  homeStartingXI: Player[];
  awayStartingXI: Player[];
  onSelectPlayer: (player: Player) => void;
  selectedPlayerId?: string;
  className?: string;
}

function parseFormation(formation: string): number[] {
  const parts = formation.split('-').map(n => parseInt(n.trim(), 10)).filter(n => !isNaN(n));
  const sum = parts.reduce((a, b) => a + b, 0);
  if (sum === 10) return [1, ...parts];
  return [1, 4, 3, 3]; // fallback
}

function getRatingBadgeColor(rating?: number): { bg: string; text: string; border: string } {
  if (!rating) return { bg: 'bg-slate-700', text: 'text-slate-200', border: 'border-slate-600' };
  if (rating >= 8.0) return { bg: 'bg-emerald-600', text: 'text-white font-bold', border: 'border-emerald-400' };
  if (rating >= 7.0) return { bg: 'bg-amber-500', text: 'text-slate-950 font-bold', border: 'border-amber-300' };
  return { bg: 'bg-orange-600', text: 'text-white font-bold', border: 'border-orange-400' };
}

function getLineXCoordinates(count: number, lineIdx: number, numLines: number): number[] {
  if (count === 1) return [50];
  if (count === 2) return [34, 66];
  if (count === 3) {
    if (lineIdx === 1) return [26, 50, 74]; // 3 Center Backs
    if (lineIdx === numLines - 1) return [16, 50, 84]; // 3 Forwards (LW, ST, RW)
    return [28, 50, 72]; // Midfield 3
  }
  if (count === 4) return [14, 38, 62, 86];
  if (count === 5) return [12, 31, 50, 69, 88];
  return Array.from({ length: count }, (_, i) => 15 + (i / Math.max(1, count - 1)) * 70);
}

function getLineYCoordinate(lineIdx: number, numLines: number): number {
  if (lineIdx === 0) return 9; // GK near goal line
  if (lineIdx === 1) return 24; // Defensive line
  if (numLines === 4) {
    if (lineIdx === 2) return 52; // Midfield
    if (lineIdx === 3) return 82; // Forwards
  }
  if (numLines === 5) {
    if (lineIdx === 2) return 42; // Deep Midfield / Wingbacks
    if (lineIdx === 3) return 65; // Attacking Midfield
    if (lineIdx === 4) return 84; // Striker
  }
  if (numLines === 3) {
    if (lineIdx === 1) return 35;
    if (lineIdx === 2) return 75;
  }
  return 12 + (lineIdx / Math.max(1, numLines - 1)) * 72;
}

export const TacticalFormationPitch: React.FC<TacticalFormationPitchProps> = ({
  homeTeam,
  awayTeam,
  homeFormation,
  awayFormation,
  homeStartingXI,
  awayStartingXI,
  onSelectPlayer,
  selectedPlayerId,
  className = ''
}) => {
  const homeLines = parseFormation(homeFormation);
  const awayLines = parseFormation(awayFormation);

  // Distribute players into lines
  const homePlayerLines: Player[][] = [];
  let homeIdx = 0;
  for (const count of homeLines) {
    homePlayerLines.push(homeStartingXI.slice(homeIdx, homeIdx + count));
    homeIdx += count;
  }

  const awayPlayerLines: Player[][] = [];
  let awayIdx = 0;
  for (const count of awayLines) {
    awayPlayerLines.push(awayStartingXI.slice(awayIdx, awayIdx + count));
    awayIdx += count;
  }

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* Formation Pitch Header Info */}
      <div className="w-full flex items-center justify-between px-4 py-2 bg-slate-950/80 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block" />
          <span className="font-bold text-white">{homeTeam.name}</span>
          <span className="px-2 py-0.5 rounded bg-blue-950/80 border border-blue-800/40 text-blue-300 font-mono">
            {homeFormation}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-mono">
          <span>Click player pin to view SofaScore & Transfermarkt dossier</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-amber-950/80 border border-amber-800/40 text-amber-300 font-mono">
            {awayFormation}
          </span>
          <span className="font-bold text-white">{awayTeam.name}</span>
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
        </div>
      </div>

      {/* 22-Player Tactical Pitch Canvas */}
      <div className="relative w-full max-w-[840px] aspect-[105/68] min-h-[520px] bg-gradient-to-b from-[#155e38] via-[#104e2e] to-[#0c3e24] rounded-xl border-4 border-slate-700/80 shadow-2xl overflow-hidden my-3">
        {/* Pitch Mowing Grass Stripes */}
        <div className="absolute inset-0 flex flex-col pointer-events-none opacity-20">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className={`flex-1 ${i % 2 === 0 ? 'bg-black/25' : 'bg-white/10'}`}
            />
          ))}
        </div>

        {/* Pitch Regulation SVG Markings */}
        <svg
          viewBox="0 0 105 68"
          className="absolute inset-0 w-full h-full pointer-events-none stroke-white/40 fill-none"
          strokeWidth="0.5"
        >
          {/* Outer Boundary */}
          <rect x="2" y="2" width="101" height="64" />
          {/* Halfway Line */}
          <line x1="2" y1="34" x2="103" y2="34" />
          {/* Center Circle */}
          <circle cx="52.5" cy="34" r="9.15" />
          <circle cx="52.5" cy="34" r="0.6" className="fill-white/60" />

          {/* Top Penalty Box (Away side) */}
          <rect x="27.5" y="2" width="50" height="16.5" />
          <rect x="37.5" y="2" width="30" height="5.5" />
          <circle cx="52.5" cy="11" r="0.5" className="fill-white/60" />
          <path d="M 43 18.5 A 9.15 9.15 0 0 0 62 18.5" />

          {/* Bottom Penalty Box (Home side) */}
          <rect x="27.5" y="49.5" width="50" height="16.5" />
          <rect x="37.5" y="60.5" width="30" height="5.5" />
          <circle cx="52.5" cy="57" r="0.5" className="fill-white/60" />
          <path d="M 43 49.5 A 9.15 9.15 0 0 1 62 49.5" />

          {/* Corner Arcs */}
          <path d="M 2 3 A 1 1 0 0 0 3 2" />
          <path d="M 102 2 A 1 1 0 0 0 103 3" />
          <path d="M 2 65 A 1 1 0 0 0 3 66" />
          <path d="M 102 66 A 1 1 0 0 0 103 65" />
        </svg>

        {/* Away Team Players (Top Half, attacking downward) */}
        <div className="absolute inset-x-0 top-0 h-[48%] pointer-events-auto">
          {awayPlayerLines.map((line, lineIdx) => {
            const xCoords = getLineXCoordinates(line.length, lineIdx, awayPlayerLines.length);
            const yPct = getLineYCoordinate(lineIdx, awayPlayerLines.length);

            return line.map((player, pIdx) => {
              const xPct = xCoords[pIdx] ?? 50;
              const rating = player.sofascoreData?.seasonRating;
              const isSelected = selectedPlayerId === player.id;
              const badgeColor = getRatingBadgeColor(rating);

              return (
                <button
                  key={`away-${player.id}-${player.number}-${lineIdx}-${pIdx}`}
                  type="button"
                  onClick={() => onSelectPlayer(player)}
                  className={`group absolute flex flex-col items-center transition-all duration-150 hover:scale-110 focus:outline-none ${
                    isSelected ? 'scale-115 z-30' : 'z-20'
                  }`}
                  style={{ left: `${xPct}%`, top: `${yPct}%`, transform: 'translate(-50%, -50%)' }}
                  title={`${player.name} (${player.position}) - SofaScore: ${rating ?? 'N/A'}`}
                >
                  {/* Avatar / Headshot container */}
                  <div className="relative">
                    <PlayerHeadshot
                      player={player}
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 bg-slate-900 object-cover shadow-lg transition-all ${
                        isSelected
                          ? 'border-sky-400 ring-4 ring-sky-400/40 shadow-sky-500/50'
                          : 'border-amber-400/80 group-hover:border-white shadow-black/60'
                      }`}
                    />
                    {/* Jersey Number */}
                    <span className="absolute -top-1 -left-1 px-1 py-0.2 min-w-[16px] text-center rounded-full bg-slate-900/95 border border-slate-700 text-[10px] font-mono font-black text-amber-300">
                      #{player.number}
                    </span>

                    {/* SofaScore Rating Badge */}
                    {rating && (
                      <span
                        className={`absolute -bottom-1 -right-1 px-1 py-0.2 min-w-[20px] text-center rounded-md text-[9px] font-mono shadow-md border ${badgeColor.bg} ${badgeColor.text} ${badgeColor.border}`}
                      >
                        {rating.toFixed(1)}
                      </span>
                    )}
                  </div>

                  {/* Name Label */}
                  <span className="mt-1 px-1.5 py-0.5 rounded bg-slate-950/80 backdrop-blur-sm border border-slate-800 text-[10px] sm:text-[11px] font-semibold text-white max-w-[95px] truncate text-center shadow group-hover:border-amber-400">
                    {player.name}
                  </span>
                </button>
              );
            });
          })}
        </div>

        {/* Home Team Players (Bottom Half, attacking upward) */}
        <div className="absolute inset-x-0 bottom-0 h-[48%] pointer-events-auto">
          {homePlayerLines.map((line, lineIdx) => {
            const xCoords = getLineXCoordinates(line.length, lineIdx, homePlayerLines.length);
            const yPct = getLineYCoordinate(lineIdx, homePlayerLines.length);

            return line.map((player, pIdx) => {
              const xPct = xCoords[pIdx] ?? 50;
              const rating = player.sofascoreData?.seasonRating;
              const isSelected = selectedPlayerId === player.id;
              const badgeColor = getRatingBadgeColor(rating);

              return (
                <button
                  key={`home-${player.id}-${player.number}-${lineIdx}-${pIdx}`}
                  type="button"
                  onClick={() => onSelectPlayer(player)}
                  className={`group absolute flex flex-col items-center transition-all duration-150 hover:scale-110 focus:outline-none ${
                    isSelected ? 'scale-115 z-30' : 'z-20'
                  }`}
                  style={{ left: `${xPct}%`, bottom: `${yPct}%`, transform: 'translate(-50%, 50%)' }}
                  title={`${player.name} (${player.position}) - SofaScore: ${rating ?? 'N/A'}`}
                >
                  {/* Avatar / Headshot container */}
                  <div className="relative">
                    <PlayerHeadshot
                      player={player}
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 bg-slate-900 object-cover shadow-lg transition-all ${
                        isSelected
                          ? 'border-sky-400 ring-4 ring-sky-400/40 shadow-sky-500/50'
                          : 'border-blue-400/80 group-hover:border-white shadow-black/60'
                      }`}
                    />
                    {/* Jersey Number */}
                    <span className="absolute -top-1 -left-1 px-1 py-0.2 min-w-[16px] text-center rounded-full bg-slate-900/95 border border-slate-700 text-[10px] font-mono font-black text-blue-300">
                      #{player.number}
                    </span>

                    {/* SofaScore Rating Badge */}
                    {rating && (
                      <span
                        className={`absolute -bottom-1 -right-1 px-1 py-0.2 min-w-[20px] text-center rounded-md text-[9px] font-mono shadow-md border ${badgeColor.bg} ${badgeColor.text} ${badgeColor.border}`}
                      >
                        {rating.toFixed(1)}
                      </span>
                    )}
                  </div>

                  {/* Name Label */}
                  <span className="mt-1 px-1.5 py-0.5 rounded bg-slate-950/80 backdrop-blur-sm border border-slate-800 text-[10px] sm:text-[11px] font-semibold text-white max-w-[95px] truncate text-center shadow group-hover:border-blue-400">
                    {player.name}
                  </span>
                </button>
              );
            });
          })}
        </div>
      </div>

      {/* Legend Footer */}
      <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 py-1 font-mono">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-emerald-600 border border-emerald-400 inline-block" />
          <span>8.0+ Outstanding</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-amber-500 border border-amber-300 inline-block" />
          <span>7.0 - 7.9 Good</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded bg-orange-600 border border-orange-400 inline-block" />
          <span>&lt; 7.0 Average</span>
        </span>
      </div>
    </div>
  );
};

export default TacticalFormationPitch;
