import { describe, it, expect } from 'vitest';
import { DUAL_TEAM_FIXTURES, getAllFixtures, getFixtureById } from '../../src/data/fixturesData';

describe('Dual-Team Fixtures & Match Action Timelines Integrity', () => {
  it('provides all 4 blockbuster fixtures with complete lineup and statistical datasets', () => {
    const fixtures = getAllFixtures();
    expect(fixtures).toHaveLength(4);

    const fixtureIds = fixtures.map(f => f.id);
    expect(fixtureIds).toContain('ucl-rma-rom');
    expect(fixtureIds).toContain('pl-mci-ars');
    expect(fixtureIds).toContain('ucl-bar-bay');
    expect(fixtureIds).toContain('ucl-int-psg');
  });

  it('guarantees every fixture has 10+ granular match action events covering both teams', () => {
    DUAL_TEAM_FIXTURES.forEach(fixture => {
      expect(fixture.events.length).toBeGreaterThanOrEqual(10);

      const homeEvents = fixture.events.filter(e => e.teamType === 'home');
      const awayEvents = fixture.events.filter(e => e.teamType === 'away');

      expect(homeEvents.length).toBeGreaterThanOrEqual(4);
      expect(awayEvents.length).toBeGreaterThanOrEqual(4);
    });
  });

  it('verifies exact goal count matches the fixture score for all 4 matches', () => {
    // 1. RMA 4 - 3 ROM
    const rmaRom = getFixtureById('ucl-rma-rom')!;
    const rmaGoals = rmaRom.events.filter(e => e.teamType === 'home' && e.outcome === 'goal');
    const romGoals = rmaRom.events.filter(e => e.teamType === 'away' && e.outcome === 'goal');
    expect(rmaGoals).toHaveLength(4);
    expect(romGoals).toHaveLength(3);

    // 2. MCI 2 - 2 ARS
    const mciArs = getFixtureById('pl-mci-ars')!;
    const mciGoals = mciArs.events.filter(e => e.teamType === 'home' && e.outcome === 'goal');
    const arsGoals = mciArs.events.filter(e => e.teamType === 'away' && e.outcome === 'goal');
    expect(mciGoals).toHaveLength(2);
    expect(arsGoals).toHaveLength(2);
    expect(mciGoals.map(g => g.playerName)).toContain('Erling Haaland');
    expect(mciGoals.map(g => g.playerName)).toContain('John Stones');
    expect(arsGoals.map(g => g.playerName)).toContain('Riccardo Calafiori');
    expect(arsGoals.map(g => g.playerName)).toContain('Gabriel Magalhães');

    // 3. BAR 4 - 1 BAY (Raphinha Hat-trick!)
    const barBay = getFixtureById('ucl-bar-bay')!;
    const barGoals = barBay.events.filter(e => e.teamType === 'home' && e.outcome === 'goal');
    const bayGoals = barBay.events.filter(e => e.teamType === 'away' && e.outcome === 'goal');
    expect(barGoals).toHaveLength(4);
    expect(bayGoals).toHaveLength(1);
    const raphinhaGoals = barGoals.filter(g => g.playerName === 'Raphinha');
    expect(raphinhaGoals).toHaveLength(3); // Hat-trick
    expect(barGoals.map(g => g.playerName)).toContain('Robert Lewandowski');
    expect(bayGoals.map(g => g.playerName)).toContain('Harry Kane');

    // 4. INT 2 - 1 PSG
    const intPsg = getFixtureById('ucl-int-psg')!;
    const intGoals = intPsg.events.filter(e => e.teamType === 'home' && e.outcome === 'goal');
    const psgGoals = intPsg.events.filter(e => e.teamType === 'away' && e.outcome === 'goal');
    expect(intGoals).toHaveLength(2);
    expect(psgGoals).toHaveLength(1);
    expect(intGoals.map(g => g.playerName)).toContain('Hakan Çalhanoğlu');
    expect(intGoals.map(g => g.playerName)).toContain('Lautaro Martínez');
    expect(psgGoals.map(g => g.playerName)).toContain('Bradley Barcola');
  });

  it('guarantees valid normalized pitch coordinates for all match action trajectories', () => {
    DUAL_TEAM_FIXTURES.forEach(fixture => {
      fixture.events.forEach(action => {
        expect(action.start.x).toBeGreaterThanOrEqual(-52.5);
        expect(action.start.x).toBeLessThanOrEqual(52.5);
        expect(action.start.y).toBeGreaterThanOrEqual(-34.0);
        expect(action.start.y).toBeLessThanOrEqual(34.0);

        expect(action.end.x).toBeGreaterThanOrEqual(-52.5);
        expect(action.end.x).toBeLessThanOrEqual(52.5);
        expect(action.end.y).toBeGreaterThanOrEqual(-34.0);
        expect(action.end.y).toBeLessThanOrEqual(34.0);

        expect(action.velocityKmH).toBeGreaterThan(0);
        expect(action.distanceM).toBeGreaterThan(0);
        expect(action.apexHeight).toBeGreaterThanOrEqual(0.04);
      });
    });
  });

  it('binds authentic venues and attendances for all fixtures', () => {
    const rmaRom = getFixtureById('ucl-rma-rom')!;
    expect(rmaRom.venue).toContain('Santiago Bernabéu');
    expect(rmaRom.attendance).toBe(81044);

    const mciArs = getFixtureById('pl-mci-ars')!;
    expect(mciArs.venue).toContain('Etihad Stadium');
    expect(mciArs.attendance).toBe(53400);

    const barBay = getFixtureById('ucl-bar-bay')!;
    expect(barBay.venue).toContain('Estadi Olímpic');
    expect(barBay.attendance).toBe(50312);

    const intPsg = getFixtureById('ucl-int-psg')!;
    expect(intPsg.venue).toContain('San Siro');
    expect(intPsg.attendance).toBe(75200);
  });
});
