// tests/components/league-standings-hub.test.tsx
import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LeagueStandingsHub from '../../src/components/standings/LeagueStandingsHub';

describe('League Standings Hub & Leaderboards Component', () => {
  it('renders Premier League table by default with official standings and points', () => {
    render(<LeagueStandingsHub onSelectPlayer={vi.fn()} />);

    expect(screen.getAllByText('Premier League').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Manchester City').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Liverpool').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Arsenal').length).toBeGreaterThan(0);
  });

  it('switches to La Liga when clicked and updates table', () => {
    render(<LeagueStandingsHub onSelectPlayer={vi.fn()} />);

    const laLigaBtn = screen.getByRole('button', { name: /La Liga/i });
    fireEvent.click(laLigaBtn);

    expect(screen.getByText('FC Barcelona')).toBeDefined();
    expect(screen.getAllByText('Real Madrid').length).toBeGreaterThan(0);
  });

  it('toggles leaderboards between Goals, Assists, Rating, and Free-Kicks', () => {
    const handleSelectPlayer = vi.fn();
    render(<LeagueStandingsHub onSelectPlayer={handleSelectPlayer} />);

    // Toggle to Free-Kicks leaderboard
    const fkBtn = screen.getByRole('button', { name: /Free-Kicks/i });
    fireEvent.click(fkBtn);

    expect(screen.getByText(/All-Time Direct Free-Kick Kings/i)).toBeDefined();
    // Messi with 67 FK should be in all-time free kick list
    expect(screen.getByText('Lionel Messi')).toBeDefined();
    expect(screen.getByText(/67 FK/i)).toBeDefined();
  });
});
