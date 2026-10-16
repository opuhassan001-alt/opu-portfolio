// tests/integration/master-shell.test.tsx
import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../src/App';

describe('Master Application Shell Integration', () => {
  it('renders all three view mode switchers: 3D Arena, 2D Pitch, and Match Center', () => {
    render(<App />);

    expect(screen.getByRole('button', { name: /3D Arena/i })).toBeDefined();
    expect(screen.getByRole('button', { name: /2D Pitch/i })).toBeDefined();
    expect(screen.getByRole('button', { name: /Match Center/i })).toBeDefined();
  });

  it('switches to Match Center view and displays dual-team fixture scorebug and lineups', () => {
    render(<App />);

    const matchBtn = screen.getByRole('button', { name: /Match Center/i });
    fireEvent.click(matchBtn);

    // Expect Match Center viewport
    expect(screen.getByTestId('dual-team-match-center')).toBeDefined();
    expect(screen.getAllByText('Real Madrid').length).toBeGreaterThan(0);
    expect(screen.getAllByText('AS Roma').length).toBeGreaterThan(0);
  });

  it('allows universal search filtering across 90+ players and clubs', () => {
    render(<App />);

    const searchInput = screen.getByPlaceholderText(/Search player, team, league/i);
    expect(searchInput).toBeDefined();

    // Type "Mbappe"
    fireEvent.change(searchInput, { target: { value: 'Mbappe' } });

    // Expect search result to appear
    expect(screen.getAllByText('Kylian Mbappé').length).toBeGreaterThan(0);
  });

  it('selecting a timeline action from Match Center loads into 3D Arena', () => {
    render(<App />);

    // Go to Match Center
    const matchBtn = screen.getByRole('button', { name: /Match Center/i });
    fireEvent.click(matchBtn);

    // Switch to Timeline
    const timelineTab = screen.getByRole('button', { name: /Action Timeline/i });
    fireEvent.click(timelineTab);

    // Find a 3D view button or action
    const play3dButtons = screen.getAllByRole('button', { name: /3D/i });
    expect(play3dButtons.length).toBeGreaterThan(0);

    // Click first action's 3D trigger
    fireEvent.click(play3dButtons[0]);

    // View mode should switch to 3D Arena
    expect(screen.getByTestId('stadium-arena-viewport')).toBeDefined();
  });
});
