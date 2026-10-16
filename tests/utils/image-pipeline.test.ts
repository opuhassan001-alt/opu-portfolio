// tests/utils/image-pipeline.test.ts
import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { getHeadshotUrlLadder, generateInitialsAvatarSvg } from '../../src/utils/image-pipeline';
import { PlayerHeadshot } from '../../src/components/common/PlayerHeadshot';
import { VERIFIED_PLAYERS } from '../../src/data/players';

describe('Headshot Fallback Ladder', () => {
  it('returns a multi-source fallback array containing local, primary CDN, and fallback', () => {
    const ladder = getHeadshotUrlLadder(VERIFIED_PLAYERS['messi']);
    expect(ladder.length).toBeGreaterThanOrEqual(3);
    expect(ladder[0]).toContain('/assets/players/messi.png');
    expect(ladder[1]).toContain('api-sports.io');
    expect(ladder[ladder.length - 1]).toContain('data:image/svg+xml');
  });

  it('generates a clean SVG avatar with player initials and emerald/slate gradient', () => {
    const svgDataUri = generateInitialsAvatarSvg('Lionel Messi');
    expect(svgDataUri).toContain('data:image/svg+xml');

    const decoded = decodeURIComponent(svgDataUri);
    expect(decoded).toContain('LM');
    // Check for emerald/slate gradient stops
    expect(decoded).toMatch(/#064e3b|#065f46|#047857/);
    expect(decoded).toMatch(/#0f172a|#020617|#1e293b/);
  });

  it('extracts initials accurately across single or multi-part names', () => {
    const gulerSvg = decodeURIComponent(generateInitialsAvatarSvg('Arda Güler'));
    expect(gulerSvg).toContain('AG');

    const viniSvg = decodeURIComponent(generateInitialsAvatarSvg('Vinicius Junior'));
    expect(viniSvg).toContain('VJ');

    const singleSvg = decodeURIComponent(generateInitialsAvatarSvg('Pelé'));
    expect(singleSvg).toContain('P');
  });

  it('provides a resilient ladder for all verified players', () => {
    Object.values(VERIFIED_PLAYERS).forEach(player => {
      const ladder = getHeadshotUrlLadder(player);
      expect(ladder.length).toBeGreaterThanOrEqual(3);
      expect(ladder[0]).toContain(player.id);
      expect(ladder[1]).toContain('api-sports.io');
      expect(ladder[ladder.length - 1]).toContain('data:image/svg+xml');
    });
  });
});

describe('PlayerHeadshot Component', () => {
  it('renders initial image from ladder[0] with correct alt text', () => {
    const player = VERIFIED_PLAYERS['messi'];
    render(React.createElement(PlayerHeadshot, { player }));

    const img = screen.getByRole('img');
    expect(img).toBeDefined();
    expect(img.getAttribute('src')).toContain('/assets/players/messi.png');
    expect(img.getAttribute('alt')).toBe('Lionel Messi');
  });

  it('progresses to next ladder source on image error', () => {
    const player = VERIFIED_PLAYERS['messi'];
    render(React.createElement(PlayerHeadshot, { player }));

    const img = screen.getByRole('img');
    expect(img.getAttribute('src')).toContain('/assets/players/messi.png');

    // Simulate first failure (e.g. local asset missing)
    fireEvent.error(img);
    expect(img.getAttribute('src')).toContain('api-sports.io');

    // Simulate second failure (e.g. CDN offline)
    fireEvent.error(img);
    expect(img.getAttribute('src')).toContain('data:image/svg+xml');
  });

  it('stops error propagation and stays on SVG fallback to guarantee zero broken images', () => {
    const player = VERIFIED_PLAYERS['kdb'];
    render(React.createElement(PlayerHeadshot, { player }));

    const img = screen.getByRole('img');
    const ladder = getHeadshotUrlLadder(player);

    // Fire error for every step in ladder
    for (let i = 0; i < ladder.length + 2; i++) {
      fireEvent.error(img);
    }

    // Should remain on the SVG fallback
    expect(img.getAttribute('src')).toBe(ladder[ladder.length - 1]);
    expect(img.getAttribute('src')).toContain('data:image/svg+xml');
  });

  it('renders with clean rounded avatar styling and transparent background', () => {
    const player = VERIFIED_PLAYERS['saka'];
    render(React.createElement(PlayerHeadshot, { player, className: 'w-16 h-16 rounded-full' }));

    const img = screen.getByRole('img');
    expect(img.className).toContain('rounded-full');
    expect(img.className).toContain('w-16');
  });
});
