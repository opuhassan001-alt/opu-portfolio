import React, { useState, useMemo, useCallback } from 'react';
import Navbar from './components/layout/Navbar';
import ScorebugHeader from './components/layout/ScorebugHeader';
import PlayerCarousel from './components/player/PlayerCarousel';
import PlayerDossierDrawer from './components/player/PlayerDossierDrawer';
import StadiumArena from './components/arena3d/StadiumArena';
import TacticalPitch2D from './components/tactical2d/TacticalPitch2D';
import DualTeamMatchCenter from './components/match/DualTeamMatchCenter';
import LeagueStandingsHub from './components/standings/LeagueStandingsHub';
import UniversalSearchBar from './components/search/UniversalSearchBar';
import PlayerHeadshot from './components/common/PlayerHeadshot';
import { VERIFIED_PLAYERS } from './data/players';
import { getAllPlayers, getPlayerById } from './data/megaFootballRegistry';
import { DUAL_TEAM_FIXTURES } from './data/fixturesData';
import { Player, PassEvent, MatchFixture, MatchAction } from './types/football';
import { TOP_20_COMPETITIONS, COMPETITIONS_BY_ID } from './data/competitions';

export const App: React.FC = () => {
  // Primary application state
  const [viewMode, setViewMode] = useState<'3d' | '2d' | 'match' | 'standings'>('3d');
  const [selectedPlayer, setSelectedPlayer] = useState<Player>(() => VERIFIED_PLAYERS['messi']);
  const [selectedPass, setSelectedPass] = useState<PassEvent | null>(() => {
    const messi = VERIFIED_PLAYERS['messi'];
    return messi.passes.find((p) => p.category === 'freekick') || messi.passes[0] || null;
  });
  const [selectedCompetitionId, setSelectedCompetitionId] = useState<string>('ucl');
  const [isDossierOpen, setIsDossierOpen] = useState<boolean>(false);
  const [selectedFixtureId, setSelectedFixtureId] = useState<string>('ucl-rma-rom');
  const [searchLeague, setSearchLeague] = useState<string>('all');
  const [searchPosition, setSearchPosition] = useState<string>('all');

  // Registry of all 90+ verified players
  const allPlayers = useMemo(() => getAllPlayers(), []);

  // Selected fixture
  const activeFixture = useMemo<MatchFixture>(() => {
    return DUAL_TEAM_FIXTURES.find((f) => f.id === selectedFixtureId) || DUAL_TEAM_FIXTURES[0];
  }, [selectedFixtureId]);

  // Active competition metadata
  const currentCompetition = useMemo(() => {
    return COMPETITIONS_BY_ID[selectedCompetitionId] || TOP_20_COMPETITIONS[0];
  }, [selectedCompetitionId]);

  // Handle player selection from carousel, search, or match center
  const handleSelectPlayer = useCallback((player: Player) => {
    setSelectedPlayer(player);
    const bestPass = player.passes.find((p) => p.category === 'freekick') || player.passes[0] || null;
    setSelectedPass(bestPass);
  }, []);

  // Handle pass selection from 3D HUD, 2D Pitch, or Dossier
  const handleSelectPass = useCallback((pass: PassEvent | null) => {
    setSelectedPass(pass);
  }, []);

  // Handle timeline action selection from Match Center
  const handleSelectMatchAction = useCallback((action: MatchAction) => {
    // Check if player exists in registry, else fallback to match player or active player
    const matchedPlayer = getPlayerById(action.playerId) || selectedPlayer;
    setSelectedPlayer(matchedPlayer);

    // Convert MatchAction to PassEvent compatible trajectory
    const passCompatible: PassEvent = {
      id: action.id,
      playerId: action.playerId,
      minute: action.minute,
      second: action.second,
      start: action.start,
      end: action.end,
      apexHeight: action.apexHeight,
      category: action.category as any,
      velocityKmH: action.velocityKmH,
      distanceM: action.distanceM,
      description: action.description,
      xGOT: action.xGOT,
      targetQuadrant: action.landingQuadrant,
    };

    setSelectedPass(passCompatible);
    // Switch to 3D Arena for live trajectory playback
    setViewMode('3d');
  }, [selectedPlayer]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-sky-500/30 selection:text-white">
      {/* 1. Global Navigation Bar */}
      <Navbar
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        selectedCompetitionId={selectedCompetitionId}
        onSelectCompetition={setSelectedCompetitionId}
        isDossierOpen={isDossierOpen}
        onToggleDossier={() => setIsDossierOpen((prev) => !prev)}
      />

      {/* 2. Broadcast-Grade TV Scorebug Header */}
      <ScorebugHeader
        competitionName={currentCompetition.name}
        competitionShort={currentCompetition.shortName}
        minute={activeFixture.minute}
        second={14}
        isLive={true}
      />

      {/* 3. Universal Search & Filter Hub */}
      <div className="w-full max-w-7xl mx-auto px-4 pt-3">
        <UniversalSearchBar
          players={allPlayers}
          onSelectPlayer={(player) => {
            handleSelectPlayer(player);
            setIsDossierOpen(true);
          }}
          activeLeague={searchLeague}
          onSelectLeague={setSearchLeague}
          activePosition={searchPosition}
          onSelectPosition={setSearchPosition}
        />
      </div>

      {/* 4. Main Stage: Interactive 3D Stadium Arena, 2D Tactical Pitch, or Match Center */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
        {/* Active Telemetry Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="text-slate-400">TELEMETRY TARGET:</span>
            <span className="text-sky-400 font-bold tracking-wider">
              #{selectedPlayer.number} {selectedPlayer.name.toUpperCase()} ({selectedPlayer.position.toUpperCase()})
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <div>
              <span>Mode: </span>
              <span className="text-emerald-400 font-semibold uppercase">{viewMode} VIEW</span>
            </div>
            <div>
              <span>Active Fixture: </span>
              <span className="text-slate-200 font-mono">
                {activeFixture.homeTeam.shortName} vs {activeFixture.awayTeam.shortName} ({activeFixture.homeScore}-{activeFixture.awayScore})
              </span>
            </div>
          </div>
        </div>

        {/* Viewport: 3D Stadium vs 2D Tactical Pitch vs Dual-Team Match Center */}
        <div className="w-full relative min-h-[540px] flex flex-col justify-center">
          {viewMode === '3d' && (
            <div data-testid="stadium-arena-viewport" className="w-full">
              <StadiumArena
                selectedPlayer={selectedPlayer}
                selectedPass={selectedPass || undefined}
                passes={selectedPlayer.passes}
                onPassSelect={handleSelectPass}
              />
            </div>
          )}

          {viewMode === '2d' && (
            <div data-testid="tactical-pitch-viewport" className="w-full">
              <TacticalPitch2D
                player={selectedPlayer}
                passes={selectedPlayer.passes}
                selectedPassId={selectedPass?.id}
                onSelectPass={handleSelectPass}
              />
            </div>
          )}

          {viewMode === 'match' && (
            <div data-testid="dual-team-match-center" className="w-full space-y-4">
              {/* Fixture Selector Strip */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                <span className="text-xs font-mono text-slate-400 flex-shrink-0">Fixtures:</span>
                {DUAL_TEAM_FIXTURES.map((fix) => (
                  <button
                    key={fix.id}
                    onClick={() => setSelectedFixtureId(fix.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-2 flex-shrink-0 border ${
                      selectedFixtureId === fix.id
                        ? 'bg-sky-600 text-white border-sky-400 shadow-md shadow-sky-500/20'
                        : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    <span>{fix.homeTeam.shortName} {fix.homeScore} - {fix.awayScore} {fix.awayTeam.shortName}</span>
                    <span className="text-[10px] text-emerald-400 font-mono">FT</span>
                  </button>
                ))}
              </div>

              {/* Dual-Team Match Center Component */}
              <DualTeamMatchCenter
                fixture={activeFixture}
                onSelectPlayer={(p) => {
                  handleSelectPlayer(p);
                  setIsDossierOpen(true);
                }}
                onSelectAction={handleSelectMatchAction}
                selectedActionId={selectedPass?.id}
              />
            </div>
          )}

          {viewMode === 'standings' && (
            <div data-testid="league-standings-viewport" className="w-full">
              <LeagueStandingsHub
                onSelectPlayer={(p) => {
                  handleSelectPlayer(p);
                  setIsDossierOpen(true);
                }}
              />
            </div>
          )}
        </div>

        {/* 4b. SofaScore & Opta Live Player Intelligence Hub Bar */}
        {(viewMode === '3d' || viewMode === '2d') && (
          <div className="w-full bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-xl p-4 shadow-xl flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <PlayerHeadshot
                player={selectedPlayer}
                className="w-14 h-14 rounded-xl border-2 border-sky-400 bg-slate-950 object-cover shadow-lg"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-black text-white">{selectedPlayer.name}</h3>
                  <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-slate-800 text-sky-400 border border-slate-700">
                    #{selectedPlayer.number}
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-medium mt-0.5">
                  {selectedPlayer.position} • {selectedPlayer.club} • {selectedPlayer.nationality}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              {/* Transfermarkt Value */}
              <div className="px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-400">
                <span className="text-[10px] text-slate-400 block uppercase font-sans">Market Value</span>
                <span className="font-bold text-sm">{selectedPlayer.marketInfo?.marketValueFormatted || 'N/A'}</span>
              </div>

              {/* SofaScore Rating */}
              <div className="px-3 py-1.5 rounded-lg bg-amber-950/60 border border-amber-800/40 text-amber-300">
                <span className="text-[10px] text-slate-400 block uppercase font-sans">SofaScore Rating</span>
                <span className="font-bold text-sm">★ {selectedPlayer.sofascoreData?.seasonRating?.toFixed(2) || 'N/A'}</span>
              </div>

              {/* Opta xG & xA */}
              <div className="px-3 py-1.5 rounded-lg bg-sky-950/60 border border-sky-800/40 text-sky-300">
                <span className="text-[10px] text-slate-400 block uppercase font-sans">Opta xG / xA</span>
                <span className="font-bold text-sm">{selectedPlayer.optaMetrics?.xG ?? 0} / {selectedPlayer.optaMetrics?.xA ?? 0}</span>
              </div>

              {/* Free-Kick Goals */}
              <div className="px-3 py-1.5 rounded-lg bg-rose-950/60 border border-rose-800/40 text-rose-300">
                <span className="text-[10px] text-slate-400 block uppercase font-sans">Career Direct FK</span>
                <span className="font-bold text-sm">{selectedPlayer.careerFreeKickGoals} Goals</span>
              </div>

              {/* Open Dossier Button */}
              <button
                onClick={() => setIsDossierOpen(true)}
                className="px-4 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs tracking-wider uppercase transition shadow-md shadow-sky-500/20 flex items-center gap-1.5 font-sans"
              >
                <span>📋</span>
                <span>Inspect Deep Telemetry →</span>
              </button>
            </div>
          </div>
        )}
      </main>

      {/* 5. Player Carousel Strip */}
      <PlayerCarousel
        players={VERIFIED_PLAYERS}
        selectedPlayerId={selectedPlayer.id}
        onSelectPlayer={handleSelectPlayer}
      />

      {/* 6. Deep Player Scouting Dossier Drawer (4 Tabs) */}
      <PlayerDossierDrawer
        player={selectedPlayer}
        isOpen={isDossierOpen}
        onClose={() => setIsDossierOpen(false)}
        selectedPassId={selectedPass?.id}
        onSelectPass={handleSelectPass}
      />
    </div>
  );
};

export default App;
