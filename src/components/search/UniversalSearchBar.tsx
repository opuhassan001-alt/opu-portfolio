import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Player } from '../../types/football';
import PlayerHeadshot from '../common/PlayerHeadshot';

export interface UniversalSearchBarProps {
  players: Player[];
  onSelectPlayer: (player: Player) => void;
  activeLeague?: string;
  onSelectLeague?: (leagueId: string) => void;
  activePosition?: string;
  onSelectPosition?: (position: string) => void;
  className?: string;
}

export const LEAGUES_LIST = [
  { id: 'all', label: 'All Leagues', icon: '🌍' },
  { id: 'ucl', label: 'Champions League', icon: '🏆' },
  { id: 'premier-league', label: 'Premier League', icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
  { id: 'la-liga', label: 'La Liga', icon: '🇪🇸' },
  { id: 'serie-a', label: 'Serie A', icon: '🇮🇹' },
  { id: 'bundesliga', label: 'Bundesliga', icon: '🇩🇪' },
  { id: 'ligue-1', label: 'Ligue 1', icon: '🇫🇷' },
];

export const POSITIONS_LIST = [
  { id: 'all', label: 'All' },
  { id: 'Forward', label: 'FW' },
  { id: 'Midfielder', label: 'MF' },
  { id: 'Defender', label: 'DF' },
  { id: 'Goalkeeper', label: 'GK' },
];

export const UniversalSearchBar: React.FC<UniversalSearchBarProps> = ({
  players = [],
  onSelectPlayer,
  activeLeague = 'all',
  onSelectLeague,
  activePosition = 'all',
  onSelectPosition,
  className = ''
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Global keyboard shortcut: Ctrl+K or '/' focuses search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.key.toLowerCase() === 'k') || (e.key === '/' && document.activeElement?.tagName !== 'INPUT')) {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      } else if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filtered players based on search query, league, and position
  const searchResults = useMemo(() => {
    const normalize = (str: string) => (str || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const qNorm = normalize(searchTerm.trim());
    if (!qNorm && !isOpen) return [];

    return players.filter(player => {
      // 1. Diacritic-insensitive text matching: Name, Club, Position, Nationality, League
      const matchesQuery = !qNorm ||
        normalize(player.name).includes(qNorm) ||
        normalize(player.club).includes(qNorm) ||
        normalize(player.position).includes(qNorm) ||
        normalize(player.nationality).includes(qNorm);

      // 2. League matching
      const matchesLeague = activeLeague === 'all' || player.leagueId === activeLeague;

      // 3. Position matching
      const matchesPosition = activePosition === 'all' || player.position === activePosition;

      return matchesQuery && matchesLeague && matchesPosition;
    }).slice(0, 12); // Limit to top 12 matches for fast rendering
  }, [players, searchTerm, activeLeague, activePosition, isOpen]);

  const handleSelect = useCallback((player: Player) => {
    onSelectPlayer(player);
    setSearchTerm('');
    setIsOpen(false);
  }, [onSelectPlayer]);

  return (
    <div ref={containerRef} className={`relative flex flex-col gap-2 w-full max-w-4xl ${className}`}>
      {/* Top Search Input & Filter Row */}
      <div className="flex flex-wrap items-center gap-2">
        {/* Search Input Container */}
        <div className="relative flex-1 min-w-[280px]">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 1114 0z" />
            </svg>
          </div>

          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder="Search player, team, league, or nationality..."
            className="w-full pl-10 pr-20 py-2.5 bg-slate-900/90 hover:bg-slate-900 focus:bg-slate-900 text-slate-100 placeholder-slate-400 text-sm rounded-xl border border-slate-700/80 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/20 shadow-inner transition-all"
          />

          {/* Keyboard shortcut pill & clear button */}
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-1.5 pointer-events-auto">
            {searchTerm && (
              <button
                onClick={() => {
                  setSearchTerm('');
                  inputRef.current?.focus();
                }}
                className="text-slate-400 hover:text-slate-200 text-xs p-1"
                title="Clear search"
              >
                ✕
              </button>
            )}
            <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-800 border border-slate-700 rounded shadow">
              Ctrl+K | /
            </kbd>
          </div>
        </div>

        {/* League Filter Badges */}
        {onSelectLeague && (
          <div className="flex items-center gap-1 overflow-x-auto py-1 scrollbar-none">
            {LEAGUES_LIST.map(league => (
              <button
                key={league.id}
                onClick={() => onSelectLeague(league.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-all ${
                  activeLeague === league.id
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                    : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 border border-slate-700/50'
                }`}
              >
                <span className="mr-1">{league.icon}</span>
                {league.label}
              </button>
            ))}
          </div>
        )}

        {/* Position Filter Pills */}
        {onSelectPosition && (
          <div className="flex items-center gap-1 bg-slate-900/80 p-0.5 rounded-lg border border-slate-800">
            {POSITIONS_LIST.map(pos => (
              <button
                key={pos.id}
                onClick={() => onSelectPosition(pos.id)}
                className={`px-2 py-1 text-[11px] font-bold rounded transition ${
                  activePosition === pos.id
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {pos.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Instant Autocomplete Results Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50 bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 rounded-xl shadow-2xl overflow-hidden max-h-96 overflow-y-auto divide-y divide-slate-800/80 animate-in fade-in slide-in-from-top-2 duration-150">
          {searchResults.length > 0 ? (
            <div>
              <div className="px-3.5 py-1.5 text-[11px] font-mono text-slate-400 uppercase tracking-wider bg-slate-950/60 flex items-center justify-between">
                <span>Matched Players ({searchResults.length})</span>
                <span>Transfermarkt Value • SofaScore</span>
              </div>
              {searchResults.map(player => (
                <div
                  key={player.id}
                  onClick={() => handleSelect(player)}
                  className="flex items-center justify-between px-3.5 py-2.5 hover:bg-slate-800/70 cursor-pointer transition group"
                >
                  <div className="flex items-center gap-3">
                    <PlayerHeadshot player={player} size={38} className="ring-1 ring-slate-700 group-hover:ring-sky-500 transition" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-100 group-hover:text-sky-400 transition">
                          {player.name}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                          #{player.number}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-950/60 text-sky-400 border border-sky-800/40">
                          {player.position}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400 flex items-center gap-2 mt-0.5">
                        <span>{player.club}</span>
                        <span>•</span>
                        <span>{player.nationality}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-right">
                    {player.marketInfo && (
                      <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/30">
                        {player.marketInfo.marketValueFormatted}
                      </span>
                    )}
                    {player.sofascoreData && (
                      <span className="text-xs font-mono font-bold text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/30 flex items-center gap-1">
                        ★ {player.sofascoreData.seasonRating.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-slate-400">
              <p className="text-sm">No players found matching "{searchTerm}"</p>
              <p className="text-xs text-slate-500 mt-1">Try searching by player name, club, position, or league</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UniversalSearchBar;
