// tests/components/dual-team-match-center.test.tsx
import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DualTeamMatchCenter from '../../src/components/match/DualTeamMatchCenter';
import { getFixtureById } from '../../src/data/fixturesData';

describe('Dual-Team Match Center & Tactical Lineups', () => {
  const fixture = getFixtureById('ucl-psg-mci')!;

  it('renders both home and away teams with scores and venue', () => {
    render(
      <DualTeamMatchCenter
        fixture={fixture}
        onSelectPlayer={vi.fn()}
        onSelectAction={vi.fn()}
      />
    );

    expect(screen.getAllByText('Paris Saint-Germain').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Manchester City').length).toBeGreaterThan(0);
    expect(screen.getByText('4')).toBeDefined();
    expect(screen.getByText('2')).toBeDefined();
    expect(screen.getByText(/Parc des Princes/i)).toBeDefined();
  });

  it('renders tactical starting lineups for both clubs', () => {
    render(
      <DualTeamMatchCenter
        fixture={fixture}
        onSelectPlayer={vi.fn()}
        onSelectAction={vi.fn()}
      />
    );

    // Starting XI players
    expect(screen.getByText('Bradley Barcola')).toBeDefined();
    expect(screen.getByText('Erling Haaland')).toBeDefined();
    expect(screen.getAllByText(/4-3-3|4-2-3-1/i).length).toBeGreaterThan(0);
  });

  it('renders minute-by-minute match action events and handles selection', () => {
    const handleSelectAction = vi.fn();
    render(
      <DualTeamMatchCenter
        fixture={fixture}
        onSelectPlayer={vi.fn()}
        onSelectAction={handleSelectAction}
      />
    );

    // Switch to Timeline tab
    const timelineTab = screen.getByText(/Action Timeline/i);
    fireEvent.click(timelineTab);

    // Timeline should have Dembélé goal event
    const eventEl = screen.getByText(/GOAL! Dembélé cuts inside Gvardiol/i);
    expect(eventEl).toBeDefined();

    fireEvent.click(eventEl);
    expect(handleSelectAction).toHaveBeenCalledWith(expect.objectContaining({ playerId: 'dembele' }));
  });

  it('switches to 22-player formation pitch tab and displays both squads on turf', () => {
    const handleSelectPlayer = vi.fn();
    render(
      <DualTeamMatchCenter
        fixture={fixture}
        onSelectPlayer={handleSelectPlayer}
        onSelectAction={vi.fn()}
      />
    );

    const pitchTab = screen.getByText(/22-Player Formation Pitch/i);
    fireEvent.click(pitchTab);

    expect(screen.getByText(/Outstanding/i)).toBeDefined();
    expect(screen.getByText(/Average/i)).toBeDefined();
  });
});
