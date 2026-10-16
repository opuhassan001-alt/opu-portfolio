// tests/components/universal-search.test.tsx
import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UniversalSearchBar from '../../src/components/search/UniversalSearchBar';
import { getAllPlayers } from '../../src/data/megaFootballRegistry';

describe('Universal Real-Time Search & Multi-League Filter Hub', () => {
  const players = getAllPlayers();

  it('renders search input with keyboard shortcut indicator', () => {
    render(
      <UniversalSearchBar
        players={players}
        onSelectPlayer={vi.fn()}
        activeLeague="all"
        onSelectLeague={vi.fn()}
      />
    );

    const input = screen.getByPlaceholderText(/search player, team, league/i);
    expect(input).toBeDefined();
    expect(screen.getByText(/Ctrl\+K|\//i)).toBeDefined();
  });

  it('filters results dynamically by player name with instant autocomplete', () => {
    const handleSelect = vi.fn();
    render(
      <UniversalSearchBar
        players={players}
        onSelectPlayer={handleSelect}
        activeLeague="all"
        onSelectLeague={vi.fn()}
      />
    );

    const input = screen.getByPlaceholderText(/search player, team, league/i);
    fireEvent.change(input, { target: { value: 'Mbappé' } });

    // Should display search result for Mbappé
    const resultItem = screen.getByText('Kylian Mbappé');
    expect(resultItem).toBeDefined();

    fireEvent.click(resultItem);
    expect(handleSelect).toHaveBeenCalledWith(expect.objectContaining({ name: 'Kylian Mbappé' }));
  });

  it('filters results by club name (e.g. "Arsenal")', () => {
    render(
      <UniversalSearchBar
        players={players}
        onSelectPlayer={vi.fn()}
        activeLeague="all"
        onSelectLeague={vi.fn()}
      />
    );

    const input = screen.getByPlaceholderText(/search player, team, league/i);
    fireEvent.change(input, { target: { value: 'Arsenal' } });

    expect(screen.getByText('Bukayo Saka')).toBeDefined();
  });

  it('renders multi-league tabs and position filters', () => {
    const handleLeagueSelect = vi.fn();
    render(
      <UniversalSearchBar
        players={players}
        onSelectPlayer={vi.fn()}
        activeLeague="all"
        onSelectLeague={handleLeagueSelect}
      />
    );

    expect(screen.getByText(/All Leagues/i)).toBeDefined();
    expect(screen.getByText(/Premier League/i)).toBeDefined();
    expect(screen.getByText(/La Liga/i)).toBeDefined();
    expect(screen.getByText(/Serie A/i)).toBeDefined();
    expect(screen.getByText(/Bundesliga/i)).toBeDefined();
    expect(screen.getByText(/Ligue 1/i)).toBeDefined();

    fireEvent.click(screen.getByText(/La Liga/i));
    expect(handleLeagueSelect).toHaveBeenCalledWith('la-liga');
  });
});
