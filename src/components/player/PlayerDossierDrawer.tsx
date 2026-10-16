import React from 'react';
import { Player, PassEvent, PASS_CATEGORY_COLORS } from '../../types/football';
import PlayerHeadshot from '../common/PlayerHeadshot';
import { X, ShieldCheck, Compass, Zap, Target, Award, ArrowUpRight } from 'lucide-react';

export interface PlayerDossierDrawerProps {
  player: Player | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectPass?: (pass: PassEvent) => void;
  selectedPassId?: string | null;
  className?: string;
}

export const PlayerDossierDrawer: React.FC<PlayerDossierDrawerProps> = ({
  player,
  isOpen,
  onClose,
  onSelectPass,
  selectedPassId,
  className = '',
}) => {
  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !player) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Player Scouting Dossier"
      data-testid="player-dossier-drawer"
      className={`fixed inset-0 z-50 flex justify-end ${className}`}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Surface */}
      <div className="relative z-10 w-full sm:w-[480px] md:w-[540px] h-full bg-slate-950/95 border-l border-slate-800 shadow-2xl flex flex-col backdrop-blur-xl overflow-hidden animate-in slide-in-from-right duration-200">
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800/90 bg-slate-900/60">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-sky-500/10 border border-sky-400/30 text-sky-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                Player Scouting Dossier
              </h2>
              <span className="text-[10px] font-mono text-emerald-400 font-semibold uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                Verified Historical Registry
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close Dossier"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Dossier Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6 scrollbar-thin scrollbar-thumb-slate-700">
          {/* Identity & Dominance Zone Card */}
          <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-4 shadow-inner">
            <PlayerHeadshot
              player={player}
              className="w-16 h-16 rounded-full object-cover border-2 border-sky-400/70 shadow-lg bg-slate-800 flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-black text-white truncate">{player.name}</h3>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-slate-800 border border-slate-700 text-sky-400">
                  #{player.number}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">
                {player.position} • {player.club} • {player.nationality}
              </p>

              {/* Dominance Zone */}
              <div className="mt-2.5 flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-300 w-fit">
                <Compass className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                <span>Dominance Zone:</span>
                <span className="text-white font-bold">{player.dominanceZone}</span>
              </div>
            </div>
          </div>

          {/* Verified Career Totals (100% Data Integrity) */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-sky-400" />
                Verified Career Milestones
              </span>
              <span className="text-[10px] font-mono text-slate-500 uppercase">
                Zero Hallucination Standard
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              {/* Direct Free-Kick Goals */}
              <div className="p-3 rounded-xl bg-slate-900/90 border border-red-500/30 shadow-sm flex flex-col">
                <span className="text-[10px] uppercase font-bold text-slate-400 truncate">
                  Direct FK Goals
                </span>
                <span
                  data-testid="stat-career-freekicks"
                  className="text-2xl font-black font-mono text-red-400 mt-0.5"
                >
                  {player.careerFreeKickGoals}
                </span>
                <span className="text-[9px] text-slate-500 mt-1 font-mono">
                  {player.careerFreeKickGoals === 0 ? 'Strictly 0 verified' : 'Official record'}
                </span>
              </div>

              {/* Career Goals */}
              <div className="p-3 rounded-xl bg-slate-900/90 border border-emerald-500/30 shadow-sm flex flex-col">
                <span className="text-[10px] uppercase font-bold text-slate-400 truncate">
                  Career Goals
                </span>
                <span className="text-2xl font-black font-mono text-emerald-400 mt-0.5">
                  {player.careerGoals}
                </span>
                <span className="text-[9px] text-slate-500 mt-1 font-mono">
                  Club & Country
                </span>
              </div>

              {/* Career Assists */}
              <div className="p-3 rounded-xl bg-slate-900/90 border border-sky-500/30 shadow-sm flex flex-col">
                <span className="text-[10px] uppercase font-bold text-slate-400 truncate">
                  Career Assists
                </span>
                <span className="text-2xl font-black font-mono text-sky-400 mt-0.5">
                  {player.careerAssists}
                </span>
                <span className="text-[9px] text-slate-500 mt-1 font-mono">
                  All competitions
                </span>
              </div>
            </div>
          </div>

          {/* Tactical Season Telemetry & Pass Breakdown */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-sky-400" />
                Pass Breakdown & Performance
              </span>
              <span className="text-[10px] font-mono text-sky-400">
                Acc: {player.stats.passAccuracyPct}%
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Normal Passes</span>
                <p className="text-lg font-bold font-mono text-sky-300">{player.stats.normalPasses}</p>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Key Passes</span>
                <p className="text-lg font-bold font-mono text-yellow-400">{player.stats.keyPasses}</p>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Assists</span>
                <p className="text-lg font-bold font-mono text-emerald-400">{player.stats.assists}</p>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Free-Kick Goals</span>
                <p className="text-lg font-bold font-mono text-red-400">{player.stats.freeKickGoals}</p>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Aerial Crosses</span>
                <p className="text-lg font-bold font-mono text-purple-400">{player.stats.aerialCrosses}</p>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Expected xA</span>
                <p className="text-lg font-bold font-mono text-indigo-300">
                  {player.stats.expectedAssists !== undefined ? player.stats.expectedAssists.toFixed(2) : '0.00'}
                </p>
              </div>
            </div>
          </div>

          {/* Recorded Trajectory Events */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                Sampled Trajectory Events ({player.passes.length})
              </span>
              <span className="text-[10px] font-mono text-slate-500">
                Click event to inspect
              </span>
            </div>

            <div className="space-y-2">
              {player.passes.map((pass) => {
                const isSelected = selectedPassId === pass.id;
                const catColor = PASS_CATEGORY_COLORS[pass.category] || '#38bdf8';

                return (
                  <button
                    key={pass.id}
                    type="button"
                    onClick={() => onSelectPass?.(pass)}
                    data-testid={`dossier-pass-${pass.id}`}
                    className={`w-full text-left p-3 rounded-lg border transition-all ${
                      isSelected
                        ? 'border-sky-400 bg-sky-950/30 shadow-md ring-1 ring-sky-400/50'
                        : 'border-slate-800/80 bg-slate-900/60 hover:bg-slate-900 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span
                          className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider"
                          style={{
                            backgroundColor: `${catColor}22`,
                            color: catColor,
                            border: `1px solid ${catColor}66`,
                          }}
                        >
                          {pass.category}
                        </span>
                        <span className="text-xs font-mono font-semibold text-slate-300">
                          {pass.minute}'{pass.second ? `${pass.second}"` : ''}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
                        <span>{pass.velocityKmH} km/h</span>
                        <span>{pass.distanceM}m</span>
                        <ArrowUpRight className="w-3 h-3 text-slate-500" />
                      </div>
                    </div>

                    {pass.description && (
                      <p className="text-[11px] text-slate-400 mt-1.5 font-sans leading-relaxed">
                        {pass.description}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDossierDrawer;
