// tests/data/football-schema.test.ts
import { describe, it, expect } from 'vitest';
import { VERIFIED_PLAYERS } from '../../src/data/players';
import { TOP_20_COMPETITIONS, COMPETITIONS_BY_ID } from '../../src/data/competitions';

describe('Verified Football Data Integrity', () => {
  it('enforces exact verified free-kick counts without hallucination', () => {
    const mbappe = VERIFIED_PLAYERS['mbappe'];
    expect(mbappe).toBeDefined();
    expect(mbappe.careerFreeKickGoals).toBe(0);
    expect(mbappe.passes.filter(p => p.category === 'freekick')).toHaveLength(0);

    const messi = VERIFIED_PLAYERS['messi'];
    expect(messi).toBeDefined();
    expect(messi.careerFreeKickGoals).toBe(67);

    const kdb = VERIFIED_PLAYERS['kdb'];
    expect(kdb.careerFreeKickGoals).toBe(18);

    const guler = VERIFIED_PLAYERS['arda-guler'];
    expect(guler).toBeDefined();
    expect(guler.careerFreeKickGoals).toBe(4);

    const saka = VERIFIED_PLAYERS['saka'];
    expect(saka).toBeDefined();
    expect(saka.careerFreeKickGoals).toBe(2);

    const bellingham = VERIFIED_PLAYERS['bellingham'];
    expect(bellingham).toBeDefined();
    expect(bellingham.careerFreeKickGoals).toBe(0);

    const vinicius = VERIFIED_PLAYERS['vinicius'];
    expect(vinicius).toBeDefined();
    expect(vinicius.careerFreeKickGoals).toBe(0);
  });

  it('guarantees all coordinates reside within normalized pitch bounds', () => {
    Object.values(VERIFIED_PLAYERS).forEach(player => {
      expect(player.passes.length).toBeGreaterThan(0);
      player.passes.forEach(pass => {
        expect(pass.start.x).toBeGreaterThanOrEqual(-52.5);
        expect(pass.start.x).toBeLessThanOrEqual(52.5);
        expect(pass.start.y).toBeGreaterThanOrEqual(-34);
        expect(pass.start.y).toBeLessThanOrEqual(34);

        expect(pass.end.x).toBeGreaterThanOrEqual(-52.5);
        expect(pass.end.x).toBeLessThanOrEqual(52.5);
        expect(pass.end.y).toBeGreaterThanOrEqual(-34);
        expect(pass.end.y).toBeLessThanOrEqual(34);

        expect(pass.apexHeight).toBeGreaterThanOrEqual(0);
        expect(pass.velocityKmH).toBeGreaterThan(0);
        expect(pass.distanceM).toBeGreaterThan(0);
      });
    });
  });

  it('provides verified coverage of top 20 global competitions', () => {
    expect(TOP_20_COMPETITIONS).toHaveLength(20);
    expect(COMPETITIONS_BY_ID['ucl']).toBeDefined();
    expect(COMPETITIONS_BY_ID['premier-league']).toBeDefined();
    expect(COMPETITIONS_BY_ID['la-liga']).toBeDefined();
    expect(COMPETITIONS_BY_ID['serie-a']).toBeDefined();
    expect(COMPETITIONS_BY_ID['bundesliga']).toBeDefined();
    expect(COMPETITIONS_BY_ID['mls']).toBeDefined();
    expect(COMPETITIONS_BY_ID['saudi-pro-league']).toBeDefined();
  });

  it('maintains clean player card contract with name, club, and headshotUrl', () => {
    Object.values(VERIFIED_PLAYERS).forEach(player => {
      expect(player.name.trim().length).toBeGreaterThan(0);
      expect(player.club.trim().length).toBeGreaterThan(0);
      expect(player.headshotUrl.trim().length).toBeGreaterThan(0);
      expect(player.dominanceZone.trim().length).toBeGreaterThan(0);
      // Ensure no subjective nickname pollution in name or club
      expect(player.name).not.toMatch(/maestro|king|legend|goat|magician/i);
    });
  });
});
