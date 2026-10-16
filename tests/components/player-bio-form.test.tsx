import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PlayerDossierDrawer from '../../src/components/player/PlayerDossierDrawer';
import { getPlayerById } from '../../src/data/megaFootballRegistry';

describe('Player Bio & Cultural Heritage Form Integration', () => {
  const mbappe = getPlayerById('mbappe')!;
  const guler = getPlayerById('guler')!;
  const messi = getPlayerById('messi')!;
  const haaland = getPlayerById('haaland')!;

  it('renders official personal identity, age, caste, and religion for Kylian Mbappé', () => {
    render(
      <PlayerDossierDrawer
        player={mbappe}
        isOpen={true}
        onClose={vi.fn()}
      />
    );

    expect(screen.getByText(/Official Player Identity & Cultural Heritage Form/i)).toBeDefined();
    expect(screen.getByText(/25 Years Old/i)).toBeDefined();
    expect(screen.getAllByText(/General \/ European Registry/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Christianity/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/French/i).length).toBeGreaterThan(0);
  });

  it('renders Turkish heritage, Islam faith, and Ankara birthplace for Arda Güler', () => {
    render(
      <PlayerDossierDrawer
        player={guler}
        isOpen={true}
        onClose={vi.fn()}
      />
    );

    expect(screen.getByText(/19 Years Old/i)).toBeDefined();
    expect(screen.getAllByText(/Islam/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Turkish/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Ankara/i).length).toBeGreaterThan(0);
  });

  it('renders 35+ performance metrics tab with distance, sprints, xG, chances created', () => {
    render(
      <PlayerDossierDrawer
        player={mbappe}
        isOpen={true}
        onClose={vi.fn()}
      />
    );

    const metricsTab = screen.getByRole('button', { name: /35\+ Metrics/i });
    fireEvent.click(metricsTab);

    // Verify requested 35+ metrics are all displayed
    expect(screen.getByText(/Complete 35\+ Official Performance Metrics Form/i)).toBeDefined();
    expect(screen.getByText(/Goals Scored/i)).toBeDefined();
    expect(screen.getByText(/Goals \/ 90 min/i)).toBeDefined();
    expect(screen.getAllByText(/Expected Goals \(xG\)/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/xGOT \(On Target\)/i)).toBeDefined();
    expect(screen.getByText(/Shots \/ 90 min/i)).toBeDefined();
    expect(screen.getByText(/^Chances Created$/i)).toBeDefined();
    expect(screen.getByText(/^Big Chances Created$/i)).toBeDefined();
    expect(screen.getByText(/Distance Covered/i)).toBeDefined();
    expect(screen.getByText(/Number of Sprints/i)).toBeDefined();
    expect(screen.getByText(/Sprints per 90 min/i)).toBeDefined();
    expect(screen.getByText(/Number of Speedings/i)).toBeDefined();
    expect(screen.getByText(/Top Speed Recorded/i)).toBeDefined();
    expect(screen.getByText(/Tackles \/ 90 min/i)).toBeDefined();
    expect(screen.getByText(/Interceptions \/ 90 min/i)).toBeDefined();
    expect(screen.getByText(/Clearances \/ 90 min/i)).toBeDefined();
    expect(screen.getByText(/Ball Recoveries \/ 90/i)).toBeDefined();
    expect(screen.getByText(/GK Save %/i)).toBeDefined();
  });
});
