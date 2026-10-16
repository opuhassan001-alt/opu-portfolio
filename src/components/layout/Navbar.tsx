import React from 'react';
import { TOP_20_COMPETITIONS } from '../../data/competitions';
import { Activity, UserCheck, Eye, Layers } from 'lucide-react';

export interface NavbarProps {
  viewMode: '3d' | '2d' | 'match' | 'standings';
  onViewModeChange: (mode: '3d' | '2d' | 'match' | 'standings') => void;
  selectedCompetitionId?: string;
  onSelectCompetition?: (competitionId: string) => void;
  isDossierOpen?: boolean;
  onToggleDossier?: () => void;
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  viewMode,
  onViewModeChange,
  selectedCompetitionId = 'ucl',
  onSelectCompetition,
  isDossierOpen = false,
  onToggleDossier,
  className = '',
}) => {
  return (
    <header className={`w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800/90 px-4 py-3 sticky top-0 z-40 ${className}`}>
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Official UEFA Champions League Brand & Telemetry Badge */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-sky-500/20 border border-sky-400/40 text-sky-400 shadow-md shadow-sky-500/20">
            <span className="text-lg">⭐</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black tracking-wider text-white text-base sm:text-lg">
                UEFA <span className="text-sky-400">CHAMPIONS LEAGUE</span>
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-sky-500/20 text-sky-300 border border-sky-500/40">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-ping mr-0.5" />
                36-TEAM LEAGUE PHASE
              </span>
            </div>
            <p className="text-[11px] text-slate-400 font-mono tracking-wide hidden sm:block">
              Official UEFA Match Center • 22-Player Tactical Pitch • 36-Club Squads
            </p>
          </div>
        </div>

        {/* View Mode Switcher: 3D Arena vs 2D Pitch vs Match Center */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-xl border border-slate-800 shadow-inner">
          <button
            type="button"
            onClick={() => onViewModeChange('3d')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
              viewMode === '3d'
                ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
            aria-pressed={viewMode === '3d'}
          >
            <span role="img" aria-label="3D Arena">🏟️</span>
            <span>3D Arena</span>
          </button>
          <button
            type="button"
            onClick={() => onViewModeChange('2d')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
              viewMode === '2d'
                ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
            aria-pressed={viewMode === '2d'}
          >
            <span role="img" aria-label="2D Pitch">📐</span>
            <span>2D Pitch</span>
          </button>
          <button
            type="button"
            onClick={() => onViewModeChange('match')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
              viewMode === 'match'
                ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
            aria-pressed={viewMode === 'match'}
          >
            <span role="img" aria-label="Match Center">🏆</span>
            <span>Match Center</span>
          </button>
          <button
            type="button"
            onClick={() => onViewModeChange('standings')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
              viewMode === 'standings'
                ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
            }`}
            aria-pressed={viewMode === 'standings'}
          >
            <span role="img" aria-label="Standings">📊</span>
            <span>Standings</span>
          </button>
        </div>

        {/* Competition Dropdown & Dossier Toggle */}
        <div className="flex items-center gap-2.5">
          {/* Competition Selector */}
          <div className="relative">
            <select
              data-testid="competition-select"
              aria-label="Competition Selector"
              value={selectedCompetitionId}
              onChange={(e) => onSelectCompetition?.(e.target.value)}
              className="appearance-none bg-slate-900 border border-slate-700/80 rounded-lg px-3 py-1.5 text-xs font-semibold text-slate-200 hover:border-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-400 transition-colors cursor-pointer pr-8"
            >
              {TOP_20_COMPETITIONS.map((comp) => (
                <option key={comp.id} value={comp.id} className="bg-slate-900 text-slate-200">
                  {comp.shortName} • {comp.name}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-slate-400">
              ▼
            </span>
          </div>

          {/* Player Dossier Drawer Button */}
          {onToggleDossier && (
            <button
              type="button"
              onClick={onToggleDossier}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                isDossierOpen
                  ? 'bg-sky-500/20 text-sky-300 border-sky-400/50 shadow-md shadow-sky-500/10'
                  : 'bg-slate-900 text-slate-300 border-slate-700/80 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>Scouting Dossier</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
