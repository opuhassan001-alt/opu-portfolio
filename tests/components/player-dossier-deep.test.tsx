// tests/components/player-dossier-deep.test.tsx
import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PlayerDossierDrawer from '../../src/components/player/PlayerDossierDrawer';
import { getPlayerById } from '../../src/data/megaFootballRegistry';

describe('Player Dossier Deep Multi-Tab Interface', () => {
  const mbappe = getPlayerById('mbappe')!;
  const messi = getPlayerById('messi')!;

  it('renders Transfermarkt tab with market valuation and strictly 0 career FK goals for Mbappé', () => {
    render(
      <PlayerDossierDrawer
        player={mbappe}
        isOpen={true}
        onClose={vi.fn()}
      />
    );

    // Default or Transfermarkt tab
    expect(screen.getByText('Transfermarkt')).toBeDefined();
    expect(screen.getAllByText(/€180M/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/2029/i)).toBeDefined();
    expect(screen.getByText(/Right/i)).toBeDefined();

    // Data integrity check: Mbappé strictly 0 career free kicks
    const fkStat = screen.getByTestId('stat-career-freekicks');
    expect(fkStat.textContent).toBe('0');
  });

  it('renders verified 67 career free kicks for Lionel Messi', () => {
    render(
      <PlayerDossierDrawer
        player={messi}
        isOpen={true}
        onClose={vi.fn()}
      />
    );

    const fkStat = screen.getByTestId('stat-career-freekicks');
    expect(fkStat.textContent).toBe('67');
  });

  it('renders SofaScore tab with season rating, form guide, and duel win %', () => {
    render(
      <PlayerDossierDrawer
        player={mbappe}
        isOpen={true}
        onClose={vi.fn()}
      />
    );

    const sofaTab = screen.getByRole('button', { name: /SofaScore/i });
    fireEvent.click(sofaTab);

    // Rating and form
    expect(screen.getAllByText(/8.25/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Duel Win/i)).toBeDefined();
    expect(screen.getByText(/Touches \/ 90/i)).toBeDefined();
  });

  it('renders Opta tab with advanced metrics (xG, xA, progressive carries)', () => {
    render(
      <PlayerDossierDrawer
        player={mbappe}
        isOpen={true}
        onClose={vi.fn()}
      />
    );

    const optaTab = screen.getByRole('button', { name: /Opta/i });
    fireEvent.click(optaTab);

    expect(screen.getByText(/Progressive Carries/i)).toBeDefined();
    expect(screen.getByText(/Line-Breaking Passes/i)).toBeDefined();
    expect(screen.getAllByText(/xGOT/i).length).toBeGreaterThan(0);
  });

  it('renders Tactical Maps tab with dominance zone and trajectory list', () => {
    const handleSelectPass = vi.fn();
    render(
      <PlayerDossierDrawer
        player={mbappe}
        isOpen={true}
        onClose={vi.fn()}
        onSelectPass={handleSelectPass}
      />
    );

    const tacticalTab = screen.getByRole('button', { name: /Tactical Maps/i });
    fireEvent.click(tacticalTab);

    expect(screen.getAllByText(/Dominance Zone:/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(mbappe.dominanceZone).length).toBeGreaterThan(0);
  });
});
