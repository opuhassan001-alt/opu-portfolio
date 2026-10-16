import React, { useState } from 'react';
import { MatchFixture, MatchAction, Player } from '../../types/football';
import PlayerHeadshot from '../common/PlayerHeadshot';
import MatchEventTimeline from './MatchEventTimeline';

export interface DualTeamMatchCenterProps {
  fixture: MatchFixture;
  onSelectPlayer: (player: Player) => void;
  onSelectAction: (action: MatchAction) => void;
  selectedActionId?: string;
  className?: string;
}

export const DualTeamMatchCenter: React.FC<DualTeamMatchCenterProps> = ({
  fixture,
  onSelectPlayer,
  onSelectAction,
  selectedActionId,
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState<'lineups' | 'timeline' | 'stats'>('lineups');
  const [activeLineupTeam, setActiveLineupTeam] = useState<'both' | 'home' | 'away'>('both');

  const { homeTeam, awayTeam, homeScore, awayScore, homeLineup, awayLineup, events, stats } = fixture;

  return (
    <div className={`flex flex-col bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden shadow-2xl ${className}`}>
      {/* 1. Scorebug Broadcast Header */}
      <div className="relative bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 border-b border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Home Team */}
          <div className="flex items-center gap-4 flex-1">
            <div className="w-16 h-16 rounded-xl bg-slate-800/80 p-2 flex items-center justify-center border border-slate-700/60 shadow-lg">
              <img
                src={homeTeam.crestUrl}
                alt={homeTeam.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/badges/badge-placeholder.svg';
                }}
              />
            </div>
            <div>
              <h2 className="text-xl font-black text-white tracking-wide">{homeTeam.name}</h2>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs px-2 py-0.5 rounded bg-blue-950/80 text-blue-400 font-bold border border-blue-800/40">
                  HOME
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {homeLineup.formation} • Coach: {homeLineup.coach}
                </span>
              </div>
            </div>
          </div>

          {/* Match Score & Status */}
          <div className="flex flex-col items-center px-6 py-2 bg-slate-950/80 rounded-xl border border-slate-800 shadow-inner">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-mono font-black text-white">{homeScore}</span>
              <span className="text-2xl text-slate-500 font-bold">-</span>
              <span className="text-4xl font-mono font-black text-white">{awayScore}</span>
            </div>
            <div className="flex items-center gap-2 mt-1 text-xs">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-emerald-400 uppercase tracking-wider">{fixture.status}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 font-mono">{fixture.minute}'</span>
            </div>
          </div>

          {/* Away Team */}
          <div className="flex items-center justify-end gap-4 flex-1 text-right">
            <div>
              <h2 className="text-xl font-black text-white tracking-wide">{awayTeam.name}</h2>
              <div className="flex items-center justify-end gap-2 mt-1">
                <span className="text-xs font-mono text-slate-400">
                  {awayLineup.formation} • Coach: {awayLineup.coach}
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-amber-950/80 text-amber-400 font-bold border border-amber-800/40">
                  AWAY
                </span>
              </div>
            </div>
            <div className="w-16 h-16 rounded-xl bg-slate-800/80 p-2 flex items-center justify-center border border-slate-700/60 shadow-lg">
              <img
                src={awayTeam.crestUrl}
                alt={awayTeam.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/badges/badge-placeholder.svg';
                }}
              />
            </div>
          </div>
        </div>

        {/* Venue & Attendance Subheader */}
        <div className="flex items-center justify-center gap-3 text-xs text-slate-400 mt-4 pt-3 border-t border-slate-800/60 font-mono">
          <span>📍 {fixture.venue}</span>
          {fixture.attendance && (
            <>
              <span>•</span>
              <span>👥 Attendance: {fixture.attendance.toLocaleString()}</span>
            </>
          )}
          <span>•</span>
          <span>📅 {fixture.date}</span>
        </div>
      </div>

      {/* 2. Navigation Tabs */}
      <div className="flex items-center justify-between px-6 border-b border-slate-800 bg-slate-950/40">
        <div className="flex items-center gap-1 py-3">
          <button
            onClick={() => setActiveTab('lineups')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'lineups'
                ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            📋 Tactical Lineups
          </button>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'timeline'
                ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            ⏱️ Action Timeline ({events.length})
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'stats'
                ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            📊 Head-to-Head Stats
          </button>
        </div>

        {activeTab === 'lineups' && (
          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
            <button
              onClick={() => setActiveLineupTeam('both')}
              className={`px-3 py-1 text-xs font-bold rounded transition ${
                activeLineupTeam === 'both'
                  ? 'bg-sky-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              👥 Both Teams
            </button>
            <button
              onClick={() => setActiveLineupTeam('home')}
              className={`px-3 py-1 text-xs font-bold rounded transition ${
                activeLineupTeam === 'home'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {homeTeam.shortName || homeTeam.name}
            </button>
            <button
              onClick={() => setActiveLineupTeam('away')}
              className={`px-3 py-1 text-xs font-bold rounded transition ${
                activeLineupTeam === 'away'
                  ? 'bg-amber-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {awayTeam.shortName || awayTeam.name}
            </button>
          </div>
        )}
      </div>

      {/* 3. Tab Contents */}
      <div className="p-6">
        {/* Tab 1: Tactical Lineups */}
        {activeTab === 'lineups' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Home Column */}
            {(activeLineupTeam === 'both' || activeLineupTeam === 'home') && (
              <div className="flex flex-col gap-4">
                {/* Home Starting XI */}
                <div className="flex flex-col gap-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800 shadow-md">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                        {homeTeam.name}
                      </span>
                      <span className="text-xs text-slate-400 ml-2 font-mono">
                        ({homeLineup.formation}) • {homeLineup.coach}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-sky-400">Starting XI</span>
                  </div>
                  <div className="divide-y divide-slate-800/60">
                    {homeLineup.startingXI.map(player => (
                      <div
                        key={player.id}
                        onClick={() => onSelectPlayer(player)}
                        className="flex items-center justify-between py-2 px-2 hover:bg-slate-800/60 rounded-lg cursor-pointer transition group"
                      >
                        <div className="flex items-center gap-3">
                          <PlayerHeadshot player={player} size={36} className="ring-1 ring-slate-700 group-hover:ring-sky-500" />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-slate-100 group-hover:text-sky-400">
                                {player.name}
                              </span>
                              <span className="text-[10px] font-mono text-slate-400">#{player.number}</span>
                            </div>
                            <div className="text-[11px] text-slate-400">{player.position}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {player.sofascoreData && (
                            <span className="text-xs font-mono font-bold text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/30">
                              ★ {player.sofascoreData.seasonRating.toFixed(1)}
                            </span>
                          )}
                          <span className="text-xs text-sky-400 opacity-0 group-hover:opacity-100 transition">
                            Inspect →
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Home Substitutes */}
                <div className="flex flex-col gap-3 bg-slate-950/40 p-4 rounded-xl border border-slate-800/60">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800/60">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {homeTeam.name} • Substitutes
                    </span>
                    <span className="text-xs font-mono text-slate-500">Bench</span>
                  </div>
                  <div className="divide-y divide-slate-800/40">
                    {homeLineup.substitutes.map(player => (
                      <div
                        key={player.id}
                        onClick={() => onSelectPlayer(player)}
                        className="flex items-center justify-between py-1.5 px-2 hover:bg-slate-800/40 rounded-lg cursor-pointer transition group"
                      >
                        <div className="flex items-center gap-3">
                          <PlayerHeadshot player={player} size={28} className="ring-1 ring-slate-800" />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-medium text-slate-300 group-hover:text-sky-400">
                                {player.name}
                              </span>
                              <span className="text-[10px] font-mono text-slate-500">#{player.number}</span>
                            </div>
                            <div className="text-[10px] text-slate-500">{player.position}</div>
                          </div>
                        </div>
                        {player.marketInfo && (
                          <span className="text-[11px] font-mono text-emerald-400">
                            {player.marketInfo.marketValueFormatted}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Away Column */}
            {(activeLineupTeam === 'both' || activeLineupTeam === 'away') && (
              <div className="flex flex-col gap-4">
                {/* Away Starting XI */}
                <div className="flex flex-col gap-3 bg-slate-950/60 p-4 rounded-xl border border-slate-800 shadow-md">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                        {awayTeam.name}
                      </span>
                      <span className="text-xs text-slate-400 ml-2 font-mono">
                        ({awayLineup.formation}) • {awayLineup.coach}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-amber-400">Starting XI</span>
                  </div>
                  <div className="divide-y divide-slate-800/60">
                    {awayLineup.startingXI.map(player => (
                      <div
                        key={player.id}
                        onClick={() => onSelectPlayer(player)}
                        className="flex items-center justify-between py-2 px-2 hover:bg-slate-800/60 rounded-lg cursor-pointer transition group"
                      >
                        <div className="flex items-center gap-3">
                          <PlayerHeadshot player={player} size={36} className="ring-1 ring-slate-700 group-hover:ring-amber-500" />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-slate-100 group-hover:text-amber-400">
                                {player.name}
                              </span>
                              <span className="text-[10px] font-mono text-slate-400">#{player.number}</span>
                            </div>
                            <div className="text-[11px] text-slate-400">{player.position}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {player.sofascoreData && (
                            <span className="text-xs font-mono font-bold text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/30">
                              ★ {player.sofascoreData.seasonRating.toFixed(1)}
                            </span>
                          )}
                          <span className="text-xs text-amber-400 opacity-0 group-hover:opacity-100 transition">
                            Inspect →
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Away Substitutes */}
                <div className="flex flex-col gap-3 bg-slate-950/40 p-4 rounded-xl border border-slate-800/60">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800/60">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {awayTeam.name} • Substitutes
                    </span>
                    <span className="text-xs font-mono text-slate-500">Bench</span>
                  </div>
                  <div className="divide-y divide-slate-800/40">
                    {awayLineup.substitutes.map(player => (
                      <div
                        key={player.id}
                        onClick={() => onSelectPlayer(player)}
                        className="flex items-center justify-between py-1.5 px-2 hover:bg-slate-800/40 rounded-lg cursor-pointer transition group"
                      >
                        <div className="flex items-center gap-3">
                          <PlayerHeadshot player={player} size={28} className="ring-1 ring-slate-800" />
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-medium text-slate-300 group-hover:text-amber-400">
                                {player.name}
                              </span>
                              <span className="text-[10px] font-mono text-slate-500">#{player.number}</span>
                            </div>
                            <div className="text-[10px] text-slate-500">{player.position}</div>
                          </div>
                        </div>
                        {player.marketInfo && (
                          <span className="text-[11px] font-mono text-emerald-400">
                            {player.marketInfo.marketValueFormatted}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Action Timeline */}
        {activeTab === 'timeline' && (
          <MatchEventTimeline
            events={events}
            homeTeamId={homeTeam.id}
            awayTeamId={awayTeam.id}
            homeTeamName={homeTeam.name}
            awayTeamName={awayTeam.name}
            selectedActionId={selectedActionId}
            onSelectAction={onSelectAction}
          />
        )}

        {/* Tab 3: Head-to-Head Comparison Stats */}
        {activeTab === 'stats' && stats && (
          <div className="flex flex-col gap-4 max-w-2xl mx-auto">
            {[
              { label: 'Ball Possession (%)', home: stats.possession[0], away: stats.possession[1], isPct: true },
              { label: 'Total Shots', home: stats.totalShots[0], away: stats.totalShots[1] },
              { label: 'Shots on Target', home: stats.shotsOnTarget[0], away: stats.shotsOnTarget[1] },
              { label: 'Expected Goals (xG)', home: stats.xG[0], away: stats.xG[1] },
              { label: 'Passes Completed', home: stats.passesCompleted[0], away: stats.passesCompleted[1] },
              { label: 'Pass Accuracy (%)', home: stats.passAccuracyPct[0], away: stats.passAccuracyPct[1], isPct: true },
              { label: 'Corners', home: stats.corners[0], away: stats.corners[1] },
              { label: 'Tackles Won', home: stats.tacklesWon[0], away: stats.tacklesWon[1] },
              { label: 'Fouls Committed', home: stats.fouls[0], away: stats.fouls[1] }
            ].map(stat => {
              const total = (typeof stat.home === 'number' ? stat.home : 1) + (typeof stat.away === 'number' ? stat.away : 1);
              const homePct = Math.round((stat.home / (total || 1)) * 100);

              return (
                <div key={stat.label} className="flex flex-col gap-1.5 bg-slate-950/40 p-3 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="font-mono text-sky-400">{stat.home}</span>
                    <span className="text-slate-300">{stat.label}</span>
                    <span className="font-mono text-amber-400">{stat.away}</span>
                  </div>
                  {/* Dual comparison progress bar */}
                  <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden flex">
                    <div style={{ width: `${homePct}%` }} className="h-full bg-sky-500 rounded-l-full" />
                    <div style={{ width: `${100 - homePct}%` }} className="h-full bg-amber-500 rounded-r-full" />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default DualTeamMatchCenter;
