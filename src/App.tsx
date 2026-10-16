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
import { getAllPlayers, getPlayerById, MEGA_FOOTBALL_REGISTRY } from './data/megaFootballRegistry';
import { getAllUclPlayers } from './data/uclCompleteRegistry';
import { DUAL_TEAM_FIXTURES } from './data/fixturesData';
import { Player, PassEvent, MatchFixture, MatchAction } from './types/football';
import { TOP_20_COMPETITIONS, COMPETITIONS_BY_ID } from './data/competitions';
import { RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';

export const App: React.FC = () => {
  // Primary application state
  const [viewMode, setViewMode] = useState<'3d' | '2d' | 'match' | 'standings'>('match');
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

  // Official UCL 36-club registered players (217 players) + verified benchmark stars
  const uclSquadPlayers = useMemo(() => {
    const uclList = getAllUclPlayers();
    const verifiedList = Object.values(VERIFIED_PLAYERS);
    const seen = new Set<string>();
    const combined: Player[] = [];
    [...verifiedList, ...uclList].forEach(p => {
      const key = p.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
      if (!seen.has(key)) {
        seen.add(key);
        combined.push(p);
      }
    });
    return combined;
  }, []);

  // Registry of all verified players
  const allPlayers = useMemo(() => getAllPlayers(), []);

  // Selected fixture
  const activeFixture = useMemo<MatchFixture>(() => {
    return DUAL_TEAM_FIXTURES.find((f) => f.id === selectedFixtureId) || DUAL_TEAM_FIXTURES[0];
  }, [selectedFixtureId]);

  // Derived match scorers for Scorebug Header
  const fixtureScorers = useMemo(() => {
    const goalEvents = activeFixture.events.filter((e) => e.outcome === 'goal');
    if (goalEvents.length === 0) return undefined;
    return goalEvents.map((e) => `${e.playerName} ${e.minute}'${e.category === 'freekick' ? ' (FK)' : ''}`);
  }, [activeFixture]);

  // Filter carousel players based on active search league/position (defaults to all 217 UCL official players)
  const carouselPlayers = useMemo(() => {
    if (searchLeague === 'all' || searchLeague === 'ucl') {
      if (searchPosition === 'all') return uclSquadPlayers;
      return uclSquadPlayers.filter(p => p.position.toLowerCase() === searchPosition.toLowerCase());
    }
    const filtered = allPlayers.filter(p => p.leagueId === searchLeague);
    if (searchPosition === 'all') return filtered;
    return filtered.filter(p => p.position.toLowerCase() === searchPosition.toLowerCase());
  }, [uclSquadPlayers, allPlayers, searchLeague, searchPosition]);

  // Active competition metadata
  const currentCompetition = useMemo(() => {
    return COMPETITIONS_BY_ID[selectedCompetitionId] || TOP_20_COMPETITIONS[0];
  }, [selectedCompetitionId]);

  // Active fixture competition metadata
  const fixtureCompetition = useMemo(() => {
    return COMPETITIONS_BY_ID[activeFixture.competitionId] || currentCompetition;
  }, [activeFixture.competitionId, currentCompetition]);

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
        homeTeam={{
          name: activeFixture.homeTeam.name,
          shortName: activeFixture.homeTeam.shortName,
          score: activeFixture.homeScore,
          crestUrl: activeFixture.homeTeam.crestUrl,
        }}
        awayTeam={{
          name: activeFixture.awayTeam.name,
          shortName: activeFixture.awayTeam.shortName,
          score: activeFixture.awayScore,
          crestUrl: activeFixture.awayTeam.crestUrl,
        }}
        competitionName={fixtureCompetition.name}
        competitionShort={fixtureCompetition.shortName}
        minute={activeFixture.minute}
        second={14}
        isLive={true}
        scorers={fixtureScorers}
        venue={`${activeFixture.venue}${activeFixture.attendance ? ` • Attendance ${activeFixture.attendance.toLocaleString()}` : ''}`}
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
            <span className="text-slate-400">
              {viewMode === 'match' ? 'OFFICIAL UEFA MATCH:' : 'TELEMETRY TARGET:'}
            </span>
            <span className="text-sky-400 font-bold tracking-wider">
              {viewMode === 'match'
                ? `${activeFixture.homeTeam.name} (${activeFixture.homeLineup.formation}) ${activeFixture.homeScore} - ${activeFixture.awayScore} ${activeFixture.awayTeam.name} (${activeFixture.awayLineup.formation})`
                : `#${selectedPlayer.number} ${selectedPlayer.name.toUpperCase()} (${selectedPlayer.position.toUpperCase()})`}
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <div>
              <span>Mode: </span>
              <span className="text-emerald-400 font-semibold uppercase">{viewMode} VIEW</span>
            </div>
            <div>
              <span>Venue: </span>
              <span className="text-slate-200 font-mono">
                {activeFixture.venue}
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
              {/* Fixture Selector Strip with 1-Click Back & Step Navigation */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 shadow-lg">
                {/* Step & 1-Click Reset Navigation */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => setSelectedFixtureId(DUAL_TEAM_FIXTURES[0].id)}
                    title="1-Click Return to Latest Match (No Refresh)"
                    className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 transition shadow-sm"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="hidden sm:inline">Latest</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const idx = DUAL_TEAM_FIXTURES.findIndex(f => f.id === activeFixture.id);
                      if (idx > 0) setSelectedFixtureId(DUAL_TEAM_FIXTURES[idx - 1].id);
                    }}
                    disabled={DUAL_TEAM_FIXTURES.findIndex(f => f.id === activeFixture.id) <= 0}
                    title="Previous Match"
                    className="p-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 disabled:opacity-30 transition"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300 font-bold whitespace-nowrap">
                    Match {DUAL_TEAM_FIXTURES.findIndex(f => f.id === activeFixture.id) + 1} of {DUAL_TEAM_FIXTURES.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      const idx = DUAL_TEAM_FIXTURES.findIndex(f => f.id === activeFixture.id);
                      if (idx < DUAL_TEAM_FIXTURES.length - 1) setSelectedFixtureId(DUAL_TEAM_FIXTURES[idx + 1].id);
                    }}
                    disabled={DUAL_TEAM_FIXTURES.findIndex(f => f.id === activeFixture.id) >= DUAL_TEAM_FIXTURES.length - 1}
                    title="Next Match"
                    className="p-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 disabled:opacity-30 transition"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Fixture Scroll List with Formations & Scores */}
                <div className="flex items-center gap-2 overflow-x-auto pb-0.5 scrollbar-none flex-1 max-w-full">
                  {DUAL_TEAM_FIXTURES.map((fix) => {
                    const isSelected = activeFixture.id === fix.id;
                    return (
                      <button
                        key={fix.id}
                        type="button"
                        onClick={() => setSelectedFixtureId(fix.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-2 flex-shrink-0 border ${
                          isSelected
                            ? 'bg-sky-600 text-white border-sky-400 shadow-md shadow-sky-500/25 ring-1 ring-sky-400/50'
                            : 'bg-slate-950/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                        }`}
                      >
                        <span className="font-semibold">{fix.homeTeam.shortName} {fix.homeScore} - {fix.awayScore} {fix.awayTeam.shortName}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-sky-300 font-medium border border-white/5">
                          {fix.homeLineup.formation} vs {fix.awayLineup.formation}
                        </span>
                        <span className="text-[10px] text-emerald-400 font-mono font-bold">FT</span>
                      </button>
                    );
                  })}
                </div>
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
        players={carouselPlayers}
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
        onSelectPlayer={handleSelectPlayer}
        allPlayers={allPlayers}
      />
    </div>
  );
};

export default App;
