import React, { useMemo } from 'react';
import { Player } from '../../types/football';
import { VERIFIED_PLAYERS } from '../../data/players';
import PlayerHeadshot from '../common/PlayerHeadshot';

export interface PlayerCarouselProps {
  players?: Player[] | Record<string, Player>;
  selectedPlayerId?: string;
  onSelectPlayer: (player: Player) => void;
  className?: string;
}

/**
 * PlayerCarousel
 *
 * Horizontal strip of clean player cards.
 * STRICT GLOBAL CONSTRAINT:
 * Format is strictly [Headshot] [Player Name] [Current Club] ONLY.
 * ZERO subjective nicknames or commentary tags (no "Maestro", "King", "GOAT", "Legend", etc.).
 * Active card is highlighted with a glowing border (#38bdf8).
 */
export const PlayerCarousel: React.FC<PlayerCarouselProps> = ({
  players = VERIFIED_PLAYERS,
  selectedPlayerId,
  onSelectPlayer,
  className = '',
}) => {
  // Normalize and deduplicate player registry by unique ID
  const uniquePlayers = useMemo(() => {
    const list = Array.isArray(players) ? players : Object.values(players);
    const seen = new Set<string>();
    const result: Player[] = [];

    for (const p of list) {
      if (p && p.id && !seen.has(p.id)) {
        seen.add(p.id);
        result.push(p);
      }
    }
    return result;
  }, [players]);

  return (
    <div
      data-testid="player-carousel"
      className={`w-full bg-slate-950/80 border-t border-slate-800/80 p-3 ${className}`}
    >
      <div className="max-w-7xl mx-auto flex items-center gap-3 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900">
        {uniquePlayers.map((player) => {
          const isSelected = selectedPlayerId === player.id;

          return (
            <button
              key={player.id}
              type="button"
              onClick={() => onSelectPlayer(player)}
              aria-pressed={isSelected}
              data-testid={`player-card-${player.id}`}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl border transition-all text-left flex-shrink-0 cursor-pointer ${
                isSelected
                  ? 'border-[#38bdf8] bg-slate-900 shadow-[0_0_15px_rgba(56,189,248,0.45)] ring-1 ring-[#38bdf8]'
                  : 'border-slate-800 bg-slate-900/60 hover:bg-slate-900 hover:border-slate-700'
              }`}
            >
              {/* [Headshot] */}
              <PlayerHeadshot
                player={player}
                className="w-10 h-10 rounded-full object-cover border border-slate-700/80 bg-slate-800 flex-shrink-0"
              />

              {/* [Player Name] & [Current Club] ONLY */}
              <div className="flex flex-col min-w-0 pr-1">
                <span className="text-xs sm:text-sm font-semibold text-white truncate max-w-[140px]">
                  {player.name}
                </span>
                <span className="text-[11px] font-medium text-slate-400 truncate max-w-[140px]">
                  {player.club}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PlayerCarousel;
