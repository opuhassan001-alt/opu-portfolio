// tests/components/dual-team-match-center.test.tsx
import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DualTeamMatchCenter from '../../src/components/match/DualTeamMatchCenter';
import { getFixtureById } from '../../src/data/fixturesData';

describe('Dual-Team Match Center & Tactical Lineups', () => {
  const fixture = getFixtureById('ucl-rma-rom')!;

  it('renders both home and away teams with scores and venue', () => {
    render(
      <DualTeamMatchCenter
        fixture={fixture}
        onSelectPlayer={vi.fn()}
        onSelectAction={vi.fn()}
      />
    );

    expect(screen.getAllByText('Real Madrid').length).toBeGreaterThan(0);
    expect(screen.getAllByText('AS Roma').length).toBeGreaterThan(0);
    expect(screen.getByText('4')).toBeDefined();
    expect(screen.getByText('3')).toBeDefined();
    expect(screen.getByText(/Santiago Bernabéu/i)).toBeDefined();
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
    expect(screen.getByText('Kylian Mbappé')).toBeDefined();
    expect(screen.getByText('Paulo Dybala')).toBeDefined();
    expect(screen.getAllByText(/4-3-3/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/3-4-2-1/i).length).toBeGreaterThan(0);
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

    // Timeline should have Mbappé goal event
    const eventEl = screen.getByText(/GOAL! Mbappé clinical right-footed strike/i);
    expect(eventEl).toBeDefined();

    fireEvent.click(eventEl);
    expect(handleSelectAction).toHaveBeenCalledWith(expect.objectContaining({ playerId: 'mbappe' }));
  });
});
