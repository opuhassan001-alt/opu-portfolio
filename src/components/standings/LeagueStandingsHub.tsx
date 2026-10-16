import React, { useState } from 'react';
import { TOP_10_LEAGUES_STANDINGS, LeagueStandings, TeamStanding } from '../../data/standingsData';
import { getAllPlayers, getPlayersByLeague } from '../../data/megaFootballRegistry';
import { Player } from '../../types/football';
import PlayerHeadshot from '../common/PlayerHeadshot';

export interface LeagueStandingsHubProps {
  onSelectPlayer: (player: Player) => void;
  className?: string;
}

export const LeagueStandingsHub: React.FC<LeagueStandingsHubProps> = ({
  onSelectPlayer,
  className = ''
}) => {
  const [selectedLeagueId, setSelectedLeagueId] = useState<string>('premier-league');
  const [activeLeaderboardTab, setActiveLeaderboardTab] = useState<'scorers' | 'assists' | 'rating' | 'freekicks'>('scorers');

  const currentLeague: LeagueStandings =
    TOP_10_LEAGUES_STANDINGS.find(l => l.id === selectedLeagueId) || TOP_10_LEAGUES_STANDINGS[0];

  // Get players in this league for leaderboards
  const leaguePlayers = getPlayersByLeague(selectedLeagueId);
  const allPlayers = getAllPlayers();
  const pool = leaguePlayers.length >= 6 ? leaguePlayers : allPlayers;

  // Sorted leaderboards
  const topScorers = [...pool].sort((a, b) => b.careerGoals - a.careerGoals).slice(0, 5);
  const topAssists = [...pool].sort((a, b) => b.careerAssists - a.careerAssists).slice(0, 5);
  const topRatings = [...pool]
    .sort((a, b) => (b.sofascoreData?.seasonRating ?? 0) - (a.sofascoreData?.seasonRating ?? 0))
    .slice(0, 5);
  const topFreekicks = [...allPlayers]
    .filter(p => p.careerFreeKickGoals > 0)
    .sort((a, b) => b.careerFreeKickGoals - a.careerFreeKickGoals)
    .slice(0, 5);

  return (
    <div className={`flex flex-col bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden shadow-2xl ${className}`}>
      {/* 1. Header with League Selector */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 border-b border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{currentLeague.flag}</span>
              <h2 className="text-2xl font-black text-white tracking-wide">
                {currentLeague.name}
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-sky-500/10 text-sky-400 border border-sky-500/30">
                {currentLeague.season} Official
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              Live standings, European qualification zone & SofaScore player performance metrics
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Opta & SofaScore Telemetry Synced</span>
          </div>
        </div>

        {/* 10 Leagues Pill Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 mt-5 scrollbar-thin scrollbar-thumb-slate-700">
          {TOP_10_LEAGUES_STANDINGS.map(league => (
            <button
              key={league.id}
              onClick={() => setSelectedLeagueId(league.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                selectedLeagueId === league.id
                  ? 'bg-sky-500 text-white shadow-md shadow-sky-500/20 ring-1 ring-sky-300'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700/80'
              }`}
            >
              <span>{league.flag}</span>
              <span>{league.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 2. Main Body: Table + Leaderboards Grid */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* League Table (2 columns wide on large screens) */}
        <div className="lg:col-span-2 flex flex-col bg-slate-950/70 rounded-xl border border-slate-800 overflow-hidden shadow-lg">
          <div className="px-4 py-3 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-white uppercase tracking-wider">
                Official Standings
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                ({currentLeague.table.length} Clubs)
              </span>
            </div>
            <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-500" /> UCL
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-amber-500" /> UEL
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800/80 bg-slate-900/40 text-[11px] font-mono uppercase text-slate-400">
                  <th className="py-2.5 px-3 text-center w-10">#</th>
                  <th className="py-2.5 px-3">Club</th>
                  <th className="py-2.5 px-2 text-center">P</th>
                  <th className="py-2.5 px-2 text-center">W</th>
                  <th className="py-2.5 px-2 text-center">D</th>
                  <th className="py-2.5 px-2 text-center">L</th>
                  <th className="py-2.5 px-2 text-center hidden sm:table-cell">GF</th>
                  <th className="py-2.5 px-2 text-center hidden sm:table-cell">GA</th>
                  <th className="py-2.5 px-2 text-center">GD</th>
                  <th className="py-2.5 px-3 text-center font-bold text-white">PTS</th>
                  <th className="py-2.5 px-3 text-center hidden md:table-cell">Form</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/40 text-xs">
                {currentLeague.table.map(row => {
                  const isUCL = row.rank <= 4;
                  const isUEL = row.rank === 5;

                  return (
                    <tr
                      key={row.clubId}
                      className="hover:bg-slate-800/40 transition-colors group"
                    >
                      {/* Rank */}
                      <td className="py-3 px-3 text-center font-mono">
                        <span
                          className={`inline-block w-5 h-5 leading-5 rounded text-center font-bold text-[11px] ${
                            isUCL
                              ? 'bg-blue-600/30 text-blue-300 border border-blue-500/40'
                              : isUEL
                              ? 'bg-amber-600/30 text-amber-300 border border-amber-500/40'
                              : 'text-slate-400'
                          }`}
                        >
                          {row.rank}
                        </span>
                      </td>

                      {/* Club Name & Badge */}
                      <td className="py-3 px-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-6 h-6 rounded bg-slate-800 p-0.5 flex items-center justify-center flex-shrink-0">
                            <img
                              src={row.crestUrl}
                              alt={row.club}
                              className="w-full h-full object-contain"
                              onError={e => {
                                (e.target as HTMLImageElement).src = '/assets/badges/badge-placeholder.svg';
                              }}
                            />
                          </div>
                          <span className="font-semibold text-white group-hover:text-sky-400 transition truncate max-w-[140px] sm:max-w-none">
                            {row.club}
                          </span>
                        </div>
                      </td>

                      {/* Stats */}
                      <td className="py-3 px-2 text-center font-mono text-slate-300">{row.played}</td>
                      <td className="py-3 px-2 text-center font-mono text-slate-300">{row.won}</td>
                      <td className="py-3 px-2 text-center font-mono text-slate-400">{row.drawn}</td>
                      <td className="py-3 px-2 text-center font-mono text-slate-400">{row.lost}</td>
                      <td className="py-3 px-2 text-center font-mono text-slate-400 hidden sm:table-cell">{row.goalsFor}</td>
                      <td className="py-3 px-2 text-center font-mono text-slate-400 hidden sm:table-cell">{row.goalsAgainst}</td>
                      <td className="py-3 px-2 text-center font-mono font-semibold">
                        <span className={row.goalDifference > 0 ? 'text-emerald-400' : row.goalDifference < 0 ? 'text-rose-400' : 'text-slate-400'}>
                          {row.goalDifference > 0 ? `+${row.goalDifference}` : row.goalDifference}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-center font-mono font-black text-sm text-sky-400 bg-slate-900/30">
                        {row.points}
                      </td>

                      {/* Form Guide */}
                      <td className="py-3 px-3 text-center hidden md:table-cell">
                        <div className="flex items-center justify-center gap-1">
                          {row.form.map((res, idx) => (
                            <span
                              key={idx}
                              className={`w-4 h-4 rounded text-[9px] font-mono font-black flex items-center justify-center ${
                                res === 'W'
                                  ? 'bg-emerald-600 text-white'
                                  : res === 'D'
                                  ? 'bg-slate-600 text-slate-200'
                                  : 'bg-rose-600 text-white'
                              }`}
                            >
                              {res}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Leaderboards Sidebar (1 column wide) */}
        <div className="flex flex-col gap-4">
          {/* Leaderboard Category Tabs */}
          <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800 shadow-md">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2 font-bold">
              Player Leaderboards
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={() => setActiveLeaderboardTab('scorers')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1 ${
                  activeLeaderboardTab === 'scorers'
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                ⚽ Goals
              </button>
              <button
                onClick={() => setActiveLeaderboardTab('assists')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1 ${
                  activeLeaderboardTab === 'assists'
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                🎯 Assists
              </button>
              <button
                onClick={() => setActiveLeaderboardTab('rating')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1 ${
                  activeLeaderboardTab === 'rating'
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                ⭐ Rating
              </button>
              <button
                onClick={() => setActiveLeaderboardTab('freekicks')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1 ${
                  activeLeaderboardTab === 'freekicks'
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                🔥 Free-Kicks
              </button>
            </div>
          </div>

          {/* Active Leaderboard List */}
          <div className="bg-slate-950/70 rounded-xl border border-slate-800 overflow-hidden shadow-md flex-1">
            <div className="px-4 py-3 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between">
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                {activeLeaderboardTab === 'scorers' && 'Top Goalscorers'}
                {activeLeaderboardTab === 'assists' && 'Top Playmakers (Assists)'}
                {activeLeaderboardTab === 'rating' && 'Highest SofaScore Rating'}
                {activeLeaderboardTab === 'freekicks' && 'All-Time Direct Free-Kick Kings'}
              </span>
              <span className="text-[10px] font-mono text-emerald-400 font-semibold">
                Click to inspect
              </span>
            </div>

            <div className="divide-y divide-slate-800/60 p-2">
              {(activeLeaderboardTab === 'scorers'
                ? topScorers
                : activeLeaderboardTab === 'assists'
                ? topAssists
                : activeLeaderboardTab === 'rating'
                ? topRatings
                : topFreekicks
              ).map((player, idx) => (
                <div
                  key={player.id}
                  onClick={() => onSelectPlayer(player)}
                  className="flex items-center justify-between p-2 hover:bg-slate-800/60 rounded-lg cursor-pointer transition group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-slate-500 w-4 text-center">
                      {idx + 1}
                    </span>
                    <PlayerHeadshot
                      player={player}
                      className="w-8 h-8 rounded-full border border-slate-700 group-hover:border-sky-400"
                    />
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-sky-400 transition truncate max-w-[130px]">
                        {player.name}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate max-w-[130px]">
                        {player.club}
                      </div>
                    </div>
                  </div>

                  <div className="text-right font-mono">
                    {activeLeaderboardTab === 'scorers' && (
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                        {player.careerGoals} G
                      </span>
                    )}
                    {activeLeaderboardTab === 'assists' && (
                      <span className="text-xs font-bold text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800/40">
                        {player.careerAssists} A
                      </span>
                    )}
                    {activeLeaderboardTab === 'rating' && (
                      <span className="text-xs font-bold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">
                        ★ {player.sofascoreData?.seasonRating.toFixed(2)}
                      </span>
                    )}
                    {activeLeaderboardTab === 'freekicks' && (
                      <span className="text-xs font-bold text-rose-400 bg-rose-950/60 px-2 py-0.5 rounded border border-rose-800/40">
                        {player.careerFreeKickGoals} FK
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeagueStandingsHub;
