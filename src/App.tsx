import React, { useState, useMemo, useCallback } from 'react';
import Navbar from './components/layout/Navbar';
import ScorebugHeader from './components/layout/ScorebugHeader';
import PlayerCarousel from './components/player/PlayerCarousel';
import PlayerDossierDrawer from './components/player/PlayerDossierDrawer';
import StadiumArena from './components/arena3d/StadiumArena';
import TacticalPitch2D from './components/tactical2d/TacticalPitch2D';
import { VERIFIED_PLAYERS } from './data/players';
import { Player, PassEvent } from './types/football';
import { TOP_20_COMPETITIONS, COMPETITIONS_BY_ID } from './data/competitions';

export const App: React.FC = () => {
  // Primary application state
  const [viewMode, setViewMode] = useState<'3d' | '2d'>('3d');
  const [selectedPlayer, setSelectedPlayer] = useState<Player>(() => VERIFIED_PLAYERS['messi']);
  const [selectedPass, setSelectedPass] = useState<PassEvent | null>(() => {
    const messi = VERIFIED_PLAYERS['messi'];
    return messi.passes.find((p) => p.category === 'freekick') || messi.passes[0] || null;
  });
  const [selectedCompetitionId, setSelectedCompetitionId] = useState<string>('ucl');
  const [isDossierOpen, setIsDossierOpen] = useState<boolean>(false);

  // Active competition metadata
  const currentCompetition = useMemo(() => {
    return COMPETITIONS_BY_ID[selectedCompetitionId] || TOP_20_COMPETITIONS[0];
  }, [selectedCompetitionId]);

  // Handle player selection from carousel
  const handleSelectPlayer = useCallback((player: Player) => {
    setSelectedPlayer(player);
    // Auto-select free kick pass if exists, else first pass
    const bestPass = player.passes.find((p) => p.category === 'freekick') || player.passes[0] || null;
    setSelectedPass(bestPass);
  }, []);

  // Handle pass selection from 3D HUD, 2D Pitch, or Dossier
  const handleSelectPass = useCallback((pass: PassEvent | null) => {
    setSelectedPass(pass);
  }, []);

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
        minute={74}
        second={12}
        isLive={true}
      />

      {/* 3. Main Stage: Interactive 3D Stadium Arena or 2D Tactical Pitch */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
        {/* Active Telemetry Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="text-slate-400">TELEMETRY TARGET:</span>
            <span className="text-sky-400 font-bold tracking-wider">#{selectedPlayer.number} {selectedPlayer.position.toUpperCase()}</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <div>
              <span>Status: </span>
              <span className="text-emerald-400 font-semibold">FEED ACTIVE</span>
            </div>
            <div>
              <span>Coordinate Frame: </span>
              <span className="text-slate-200 font-mono">UEFA Standard 105m × 68m</span>
            </div>
          </div>
        </div>

        {/* Viewport: 3D Stadium vs 2D Tactical Pitch */}
        <div className="w-full relative min-h-[540px] flex flex-col justify-center">
          {viewMode === '3d' ? (
            <div data-testid="stadium-arena-viewport" className="w-full">
              <StadiumArena
                selectedPlayer={selectedPlayer}
                selectedPass={selectedPass || undefined}
                passes={selectedPlayer.passes}
                onPassSelect={handleSelectPass}
              />
            </div>
          ) : (
            <div data-testid="tactical-pitch-viewport" className="w-full">
              <TacticalPitch2D
                player={selectedPlayer}
                passes={selectedPlayer.passes}
                selectedPassId={selectedPass?.id}
                onSelectPass={handleSelectPass}
              />
            </div>
          )}
        </div>
      </main>

      {/* 4. Player Carousel Strip */}
      <PlayerCarousel
        players={VERIFIED_PLAYERS}
        selectedPlayerId={selectedPlayer.id}
        onSelectPlayer={handleSelectPlayer}
      />

      {/* 5. Deep Player Scouting Dossier Drawer */}
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
