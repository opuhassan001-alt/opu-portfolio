import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../src/App';

describe('App Shell Integration', () => {
  it('renders clean player cards with [Headshot] [Name] [Club] format only', () => {
    render(<App />);
    expect(screen.getAllByText('Lionel Messi').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Inter Miami').length).toBeGreaterThan(0);
    expect(screen.queryByText(/Maestro/i)).toBeNull();
  });

  it('toggles between 3D Stadium Arena and 2D Tactical Pitch', () => {
    render(<App />);
    const btn2D = screen.getByRole('button', { name: /2D/i });
    fireEvent.click(btn2D);
    expect(screen.getByTestId('tactical-pitch-2d')).toBeDefined();
  });

  it('toggles back to 3D Stadium Arena from 2D mode', () => {
    render(<App />);
    const btn2D = screen.getByRole('button', { name: /2D/i });
    fireEvent.click(btn2D);
    expect(screen.getByTestId('tactical-pitch-2d')).toBeDefined();

    const btn3D = screen.getByRole('button', { name: /3D/i });
    fireEvent.click(btn3D);
    expect(screen.queryByTestId('tactical-pitch-2d')).toBeNull();
  });

  it('selects another player from the carousel and updates active player state', () => {
    render(<App />);
    const kdbBtn = screen.getByText('Kevin De Bruyne').closest('button');
    expect(kdbBtn).not.toBeNull();
    fireEvent.click(kdbBtn!);

    // Manchester City should be active and Kevin De Bruyne selected
    expect(screen.getByText('Manchester City')).toBeDefined();
  });

  it('opens and closes player dossier drawer with verified career stats', () => {
    render(<App />);
    // Open drawer
    const dossierBtn = screen.getByRole('button', { name: /Scouting Dossier|Dossier/i });
    fireEvent.click(dossierBtn);

    const drawer = screen.getByTestId('player-dossier-drawer');
    expect(drawer).toBeDefined();

    // Messi verified stats: 67 FK goals
    expect(screen.getByText('67')).toBeDefined();
    expect(screen.getByText('Right Half-Space')).toBeDefined();

    // Close drawer
    const closeBtn = screen.getByLabelText(/Close Dossier/i);
    fireEvent.click(closeBtn);
    expect(screen.queryByTestId('player-dossier-drawer')).toBeNull();
  });

  it('strictly maintains 0 freekick goals for Mbappé with zero hallucinations', () => {
    render(<App />);
    // Select Mbappé
    const mbappeBtn = screen.getByText('Kylian Mbappé').closest('button');
    expect(mbappeBtn).not.toBeNull();
    fireEvent.click(mbappeBtn!);

    // Open dossier
    const dossierBtn = screen.getByRole('button', { name: /Scouting Dossier|Dossier/i });
    fireEvent.click(dossierBtn);

    // Mbappé dominance zone and strictly 0 FK goals
    expect(screen.getByText('Left Wing Cut-in')).toBeDefined();
    const zeroFkElement = screen.getByTestId('stat-career-freekicks');
    expect(zeroFkElement.textContent).toBe('0');
  });

  it('guarantees zero subjective nickname tags across player cards (no King, GOAT, Maestro, Legend)', () => {
    render(<App />);
    expect(screen.queryByText(/Maestro/i)).toBeNull();
    expect(screen.queryByText(/\bKing\b/i)).toBeNull();
    expect(screen.queryByText(/\bGOAT\b/i)).toBeNull();
    expect(screen.queryByText(/\bLegend\b/i)).toBeNull();
  });

  it('allows switching competition dropdown in navbar', () => {
    render(<App />);
    const compSelect = screen.getByTestId('competition-select') as HTMLSelectElement;
    expect(compSelect).toBeDefined();
    fireEvent.change(compSelect, { target: { value: 'la-liga' } });
    expect(compSelect.value).toBe('la-liga');
  });
});
