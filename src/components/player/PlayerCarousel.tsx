import React, { useMemo, useRef, useEffect } from 'react';
import { Player } from '../../types/football';
import { VERIFIED_PLAYERS } from '../../data/players';
import PlayerHeadshot from '../common/PlayerHeadshot';
import { ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';

export interface PlayerCarouselProps {
  players?: Player[] | Record<string, Player>;
  selectedPlayerId?: string;
  onSelectPlayer: (player: Player) => void;
  className?: string;
}

/**
 * PlayerCarousel
 *
 * Horizontal strip of clean player cards with step-by-step navigation controls.
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
  const containerRef = useRef<HTMLDivElement>(null);

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

  const currentIndex = uniquePlayers.findIndex((p) => p.id === selectedPlayerId);

  // Auto-scroll selected card into view smoothly
  useEffect(() => {
    if (!selectedPlayerId || !containerRef.current) return;
    const cardEl = containerRef.current.querySelector(`[data-testid="player-card-${selectedPlayerId}"]`) as HTMLElement;
    if (cardEl && typeof cardEl.scrollIntoView === 'function') {
      cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [selectedPlayerId]);

  // 1-Click Back to Start (no page refresh needed)
  const handleResetToStart = () => {
    if (uniquePlayers.length > 0) {
      onSelectPlayer(uniquePlayers[0]);
      if (containerRef.current && typeof containerRef.current.scrollTo === 'function') {
        containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }
  };

  // Step backward 1-by-1
  const handlePrevPlayer = () => {
    if (currentIndex > 0) {
      onSelectPlayer(uniquePlayers[currentIndex - 1]);
    }
  };

  // Step forward 1-by-1
  const handleNextPlayer = () => {
    if (currentIndex >= 0 && currentIndex < uniquePlayers.length - 1) {
      onSelectPlayer(uniquePlayers[currentIndex + 1]);
    }
  };

  // Smooth scroll strip by delta
  const handleScrollBy = (delta: number) => {
    if (containerRef.current && typeof containerRef.current.scrollBy === 'function') {
      containerRef.current.scrollBy({ left: delta, behavior: 'smooth' });
    }
  };

  return (
    <div
      data-testid="player-carousel"
      className={`w-full bg-slate-950/90 border-t border-slate-800/80 p-3 select-none ${className}`}
    >
      <div className="max-w-7xl mx-auto space-y-2">
        {/* Navigation Toolbar: 1-Click Reset to Start, Prev/Next Step, Scroll controls */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-1 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
              Roster Explorer:
            </span>

            {/* 1-Click Reset to Start */}
            <button
              type="button"
              onClick={handleResetToStart}
              title="1-Click Back to Start (Return to First Player without Refresh)"
              className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-sky-600 text-slate-300 hover:text-white border border-slate-800 transition-colors flex items-center gap-1 font-semibold text-[11px]"
            >
              <RotateCcw className="w-3 h-3 text-sky-400" />
              <span>Reset to Start</span>
            </button>

            {/* Step Prev 1-by-1 */}
            <button
              type="button"
              onClick={handlePrevPlayer}
              disabled={currentIndex <= 0}
              title="Previous Player (Step Backward)"
              className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-sky-600 text-slate-300 hover:text-white border border-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors flex items-center gap-1 font-semibold text-[11px]"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Prev</span>
            </button>

            {/* Counter */}
            <span className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 font-mono text-[11px] text-sky-400 font-bold">
              {currentIndex >= 0 ? currentIndex + 1 : 1} / {uniquePlayers.length}
            </span>

            {/* Step Next 1-by-1 */}
            <button
              type="button"
              onClick={handleNextPlayer}
              disabled={currentIndex >= uniquePlayers.length - 1}
              title="Next Player (Step Forward)"
              className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-sky-600 text-slate-300 hover:text-white border border-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors flex items-center gap-1 font-semibold text-[11px]"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Smooth Scroll Controls */}
          <div className="flex items-center gap-1.5 text-slate-400">
            <span className="text-[11px] text-slate-500 font-medium hidden sm:inline">Scroll:</span>
            <button
              type="button"
              onClick={() => handleScrollBy(-300)}
              title="Scroll Cards Left"
              className="px-2 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-[11px]"
            >
              <ChevronLeft className="w-3 h-3 text-sky-400" />
              <span>Left</span>
            </button>
            <button
              type="button"
              onClick={() => handleScrollBy(300)}
              title="Scroll Cards Right"
              className="px-2 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-[11px]"
            >
              <span>Right</span>
              <ChevronRight className="w-3 h-3 text-sky-400" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Container */}
        <div
          ref={containerRef}
          onWheel={(e) => {
            e.currentTarget.scrollLeft += e.deltaY;
          }}
          className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900 scroll-smooth"
        >
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
    </div>
  );
};

export default PlayerCarousel;
