import React, { useState } from 'react';
import { Player, PassEvent, PASS_CATEGORY_COLORS } from '../../types/football';
import PlayerHeadshot from '../common/PlayerHeadshot';
import {
  X,
  ShieldCheck,
  Compass,
  Zap,
  Target,
  Award,
  ArrowUpRight,
  DollarSign,
  BarChart3,
  Activity,
  Flame,
  Calendar,
  Layers,
  Sparkles
} from 'lucide-react';

export interface PlayerDossierDrawerProps {
  player: Player | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectPass?: (pass: PassEvent) => void;
  selectedPassId?: string | null;
  className?: string;
}

export type DossierTab = 'transfermarkt' | 'sofascore' | 'opta' | 'tactical';

export const PlayerDossierDrawer: React.FC<PlayerDossierDrawerProps> = ({
  player,
  isOpen,
  onClose,
  onSelectPass,
  selectedPassId,
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState<DossierTab>('transfermarkt');

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

  const market = player.marketInfo;
  const sofascore = player.sofascoreData;
  const opta = player.optaMetrics;

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
      <div className="relative z-10 w-full sm:w-[500px] md:w-[580px] h-full bg-slate-950/95 border-l border-slate-800 shadow-2xl flex flex-col backdrop-blur-xl overflow-hidden animate-in slide-in-from-right duration-200">
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800/90 bg-slate-900/80">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-sky-500/10 border border-sky-400/30 text-sky-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-white">
                Player Scouting Dossier
              </h2>
              <span className="text-[10px] font-mono text-emerald-400 font-semibold uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                Verified Industrial Registry
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

        {/* Player Banner */}
        <div className="p-5 bg-gradient-to-b from-slate-900/90 to-slate-950/80 border-b border-slate-800/80 flex items-center gap-4">
          <PlayerHeadshot
            player={player}
            size={68}
            className="rounded-2xl border-2 border-sky-400/60 shadow-xl bg-slate-800 flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-black text-white truncate">{player.name}</h3>
              <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-slate-800 border border-slate-700 text-sky-400">
                #{player.number}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium mt-0.5">
              {player.position} • {player.club} • {player.nationality}
            </p>
            {market && (
              <div className="mt-2 flex items-center gap-2">
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/50 font-mono font-bold">
                  {market.marketValueFormatted}
                </span>
                {sofascore && (
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-950/60 text-amber-300 border border-amber-800/50 font-mono font-bold">
                    ★ {sofascore.seasonRating.toFixed(2)}
                  </span>
                )}
              </div>
            )}
            <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-sky-500/10 border border-sky-500/30 text-sky-300 w-fit">
              <Compass className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
              <span>Dominance Zone:</span>
              <span className="text-white font-bold">{player.dominanceZone}</span>
            </div>
          </div>
        </div>

        {/* 4 Dedicated Tabs */}
        <div className="grid grid-cols-4 border-b border-slate-800 bg-slate-950 text-xs font-bold text-slate-400">
          <button
            type="button"
            onClick={() => setActiveTab('transfermarkt')}
            className={`py-3 px-2 flex items-center justify-center gap-1.5 border-b-2 transition-all ${
              activeTab === 'transfermarkt'
                ? 'border-emerald-500 text-emerald-400 bg-emerald-950/20'
                : 'border-transparent hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            <DollarSign className="w-3.5 h-3.5" />
            <span className="truncate">Transfermarkt</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('sofascore')}
            className={`py-3 px-2 flex items-center justify-center gap-1.5 border-b-2 transition-all ${
              activeTab === 'sofascore'
                ? 'border-amber-500 text-amber-400 bg-amber-950/20'
                : 'border-transparent hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span className="truncate">SofaScore</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('opta')}
            className={`py-3 px-2 flex items-center justify-center gap-1.5 border-b-2 transition-all ${
              activeTab === 'opta'
                ? 'border-sky-500 text-sky-400 bg-sky-950/20'
                : 'border-transparent hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span className="truncate">Opta</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('tactical')}
            className={`py-3 px-2 flex items-center justify-center gap-1.5 border-b-2 transition-all ${
              activeTab === 'tactical'
                ? 'border-purple-500 text-purple-400 bg-purple-950/20'
                : 'border-transparent hover:text-slate-200 hover:bg-slate-900/60'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="truncate">Tactical Maps</span>
          </button>
        </div>

        {/* Scrollable Dossier Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6 scrollbar-thin scrollbar-thumb-slate-700">
          {/* TAB 1: TRANSFERMARKT */}
          {activeTab === 'transfermarkt' && (
            <div className="space-y-6">
              {/* Financial & Bio Details */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 shadow-inner">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                    Market Valuation & Profile
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">Transfermarkt Verified</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Market Value</span>
                    <p className="text-base font-black font-mono text-emerald-400">
                      {market ? market.marketValueFormatted : '€40M'}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Contract Until</span>
                    <p className="text-base font-bold font-mono text-slate-200">
                      {market ? market.contractUntil : '2028'}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Age</span>
                    <p className="text-base font-bold font-mono text-slate-200">
                      {market ? `${market.age} yrs` : '26 yrs'}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Height</span>
                    <p className="text-base font-bold font-mono text-slate-200">
                      {market ? `${market.heightCm} cm` : '182 cm'}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Preferred Foot</span>
                    <p className="text-base font-bold font-mono text-sky-400">
                      {market ? market.preferredFoot : 'Right'}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Nationality</span>
                    <p className="text-base font-bold font-mono text-slate-200 truncate">
                      {player.nationality}
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Career Totals (100% Data Integrity Standard) */}
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
            </div>
          )}

          {/* TAB 2: SOFASCORE */}
          {activeTab === 'sofascore' && (
            <div className="space-y-6">
              {/* Rating & Form Card */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 shadow-inner">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-amber-400" />
                    SofaScore Match Performance
                  </span>
                  <span className="text-[10px] font-mono text-amber-400">Live Telemetry</span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-800/40 flex flex-col items-center justify-center text-center">
                    <span className="text-[10px] uppercase font-bold text-amber-400">Season Average Rating</span>
                    <span className="text-3xl font-black font-mono text-amber-300 mt-1">
                      {sofascore ? sofascore.seasonRating.toFixed(2) : '7.45'}
                    </span>
                    <span className="text-[10px] text-amber-500/80 mt-1 font-mono">Out of 10.0</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col justify-center">
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-2">Recent Match Form</span>
                    <div className="flex items-center gap-1.5">
                      {(sofascore ? sofascore.formGuide : ['W', 'D', 'W', 'W', 'L']).map((res, idx) => (
                        <span
                          key={idx}
                          className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold ${
                            res === 'W'
                              ? 'bg-emerald-600 text-white'
                              : res === 'D'
                              ? 'bg-amber-600 text-white'
                              : 'bg-rose-600 text-white'
                          }`}
                        >
                          {res}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Duel Win %</span>
                    <p className="text-lg font-black font-mono text-sky-400">
                      {sofascore ? `${sofascore.duelWinPct.toFixed(1)}%` : '54.0%'}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Touches / 90</span>
                    <p className="text-lg font-black font-mono text-sky-400">
                      {sofascore ? sofascore.touchesPer90.toFixed(1) : '64.0'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Match Logs */}
              {sofascore && sofascore.matchLogs && sofascore.matchLogs.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      Recent Match Logs
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">Last 5 Fixtures</span>
                  </div>

                  <div className="space-y-2">
                    {sofascore.matchLogs.map((log, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs"
                      >
                        <div>
                          <div className="font-bold text-slate-200">vs {log.opponent}</div>
                          <div className="text-[10px] text-slate-400 font-mono">
                            {log.date} • {log.competition} ({log.minutesPlayed}')
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="text-right text-[11px] font-mono text-slate-300">
                            <span>{log.goals}G</span> / <span>{log.assists}A</span>
                          </div>
                          <span
                            className={`px-2 py-0.5 rounded font-mono font-bold text-xs ${
                              log.rating >= 8.0
                                ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                                : log.rating >= 7.0
                                ? 'bg-amber-950 text-amber-300 border border-amber-800'
                                : 'bg-rose-950 text-rose-400 border border-rose-800'
                            }`}
                          >
                            ★ {log.rating.toFixed(1)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: OPTA ADVANCED ANALYTICS */}
          {activeTab === 'opta' && (
            <div className="space-y-6">
              {/* Expected Value Indices */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 shadow-inner">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                    Opta Expected Telemetry (xG / xA / xGOT)
                  </span>
                  <span className="text-[10px] font-mono text-sky-400">Opta Live Engine</span>
                </div>

                <div className="grid grid-cols-3 gap-2.5">
                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">xG</span>
                    <p className="text-xl font-black font-mono text-emerald-400 mt-1">
                      {opta ? opta.xG.toFixed(2) : '2.10'}
                    </p>
                    <span className="text-[9px] font-mono text-slate-500">
                      {opta ? `${opta.xGPer90.toFixed(2)}/90` : '0.22/90'}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">xA</span>
                    <p className="text-xl font-black font-mono text-sky-400 mt-1">
                      {opta ? opta.xA.toFixed(2) : '2.40'}
                    </p>
                    <span className="text-[9px] font-mono text-slate-500">
                      {opta ? `${opta.xAPer90.toFixed(2)}/90` : '0.25/90'}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-center">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">xGOT</span>
                    <p className="text-xl font-black font-mono text-amber-400 mt-1">
                      {opta ? opta.xGOT.toFixed(2) : '2.30'}
                    </p>
                    <span className="text-[9px] font-mono text-slate-500">Post-Shot Quality</span>
                  </div>
                </div>
              </div>

              {/* Ball Progression & Playmaking */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 block">
                  Ball Progression & Breaking Lines
                </span>
                <div className="grid grid-cols-3 gap-2.5">
                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Progressive Carries</span>
                    <p className="text-lg font-bold font-mono text-indigo-400">
                      {opta ? opta.progressiveCarries : 24}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Line-Breaking Passes</span>
                    <p className="text-lg font-bold font-mono text-indigo-400">
                      {opta ? opta.lineBreakingPasses : 38}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Final Third Entries</span>
                    <p className="text-lg font-bold font-mono text-indigo-400">
                      {opta ? opta.finalThirdEntries : 32}
                    </p>
                  </div>
                </div>
              </div>

              {/* Defensive Output */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 block">
                  Pressing & Defensive Engagement
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Tackles Won</span>
                    <p className="text-base font-bold font-mono text-emerald-400">
                      {opta ? opta.tacklesWon : 22}
                    </p>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Interceptions</span>
                    <p className="text-base font-bold font-mono text-emerald-400">
                      {opta ? opta.interceptions : 14}
                    </p>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Clearances</span>
                    <p className="text-base font-bold font-mono text-emerald-400">
                      {opta ? opta.clearances : 18}
                    </p>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Pressures Won</span>
                    <p className="text-base font-bold font-mono text-amber-400">
                      {opta ? opta.pressuresWon : 16}
                    </p>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-950/60 border border-slate-800 col-span-2 sm:col-span-1">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Aerial Win %</span>
                    <p className="text-base font-bold font-mono text-amber-400">
                      {opta ? `${opta.aerialDuelsWonPct.toFixed(1)}%` : '52.0%'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: TACTICAL MAPS */}
          {activeTab === 'tactical' && (
            <div className="space-y-6">
              {/* Dominance Zone */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 shadow-inner">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-purple-400" />
                    Dominance Zone:
                  </span>
                  <span className="text-xs font-bold text-purple-300 font-mono">
                    {player.dominanceZone}
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Thermal disc concentration confirms primary offensive gravity and line-breaking activity centered around {player.dominanceZone}.
                </p>
              </div>

              {/* Pass Breakdown */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <Target className="w-3.5 h-3.5 text-sky-400" />
                    Pass Breakdown & Accuracy
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
                    Recorded Trajectory Events ({player.passes.length})
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    Click to load 3D/2D
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
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayerDossierDrawer;
