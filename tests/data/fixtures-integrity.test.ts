import { describe, it, expect } from 'vitest';
import { DUAL_TEAM_FIXTURES, getAllFixtures, getFixtureById } from '../../src/data/fixturesData';

describe('Official UEFA Champions League Fixtures & Match Action Timelines Integrity', () => {
  it('provides all 4 official blockbuster UEFA Champions League fixtures', () => {
    const fixtures = getAllFixtures();
    expect(fixtures).toHaveLength(4);

    const fixtureIds = fixtures.map(f => f.id);
    expect(fixtureIds).toContain('ucl-psg-mci');
    expect(fixtureIds).toContain('ucl-rma-bvb');
    expect(fixtureIds).toContain('ucl-bar-bay');
    expect(fixtureIds).toContain('ucl-ars-psg');
  });

  it('guarantees every fixture has 10+ granular match action events covering both teams', () => {
    DUAL_TEAM_FIXTURES.forEach(fixture => {
      expect(fixture.events.length).toBeGreaterThanOrEqual(10);

      const homeEvents = fixture.events.filter(e => e.teamType === 'home');
      const awayEvents = fixture.events.filter(e => e.teamType === 'away');

      expect(homeEvents.length).toBeGreaterThanOrEqual(3);
      expect(awayEvents.length).toBeGreaterThanOrEqual(3);
    });
  });

  it('verifies exact goal count matches the fixture score for all 4 official UCL matches', () => {
    // 1. PSG 4 - 2 MCI (Official UCL Match: PSG 4 goals, Man City 2 goals)
    const psgMci = getFixtureById('ucl-psg-mci')!;
    const psgGoals = psgMci.events.filter(e => e.teamType === 'home' && e.outcome === 'goal');
    const mciGoals = psgMci.events.filter(e => e.teamType === 'away' && e.outcome === 'goal');
    expect(psgGoals).toHaveLength(4);
    expect(mciGoals).toHaveLength(2);
    expect(psgGoals.map(g => g.playerName)).toContain('Désiré Doué');
    expect(psgGoals.map(g => g.playerName)).toContain('Ousmane Dembélé');
    expect(psgGoals.map(g => g.playerName)).toContain('Vitinha');
    expect(psgGoals.map(g => g.playerName)).toContain('Bradley Barcola');
    const haalandGoals = mciGoals.filter(g => g.playerName === 'Erling Haaland');
    expect(haalandGoals).toHaveLength(2);

    // 2. RMA 5 - 2 BVB (Official UCL Match: Vinícius Hat-trick, Real Madrid 5, Dortmund 2)
    const rmaBvb = getFixtureById('ucl-rma-bvb')!;
    const rmaGoals = rmaBvb.events.filter(e => e.teamType === 'home' && e.outcome === 'goal');
    const bvbGoals = rmaBvb.events.filter(e => e.teamType === 'away' && e.outcome === 'goal');
    expect(rmaGoals).toHaveLength(5);
    expect(bvbGoals).toHaveLength(2);
    const viniGoals = rmaGoals.filter(g => g.playerName === 'Vinícius Júnior');
    expect(viniGoals).toHaveLength(3); // Hat-trick
    expect(rmaGoals.map(g => g.playerName)).toContain('Antonio Rüdiger');
    expect(rmaGoals.map(g => g.playerName)).toContain('Lucas Vázquez');
    expect(bvbGoals.map(g => g.playerName)).toContain('Donyell Malen');
    expect(bvbGoals.map(g => g.playerName)).toContain('Jamie Bynoe-Gittens');

    // 3. BAR 4 - 1 BAY (Official UCL Match: Raphinha Hat-trick, Barcelona 4, Bayern 1)
    const barBay = getFixtureById('ucl-bar-bay')!;
    const barGoals = barBay.events.filter(e => e.teamType === 'home' && e.outcome === 'goal');
    const bayGoals = barBay.events.filter(e => e.teamType === 'away' && e.outcome === 'goal');
    expect(barGoals).toHaveLength(4);
    expect(bayGoals).toHaveLength(1);
    const raphinhaGoals = barGoals.filter(g => g.playerName === 'Raphinha');
    expect(raphinhaGoals).toHaveLength(3); // Hat-trick
    expect(barGoals.map(g => g.playerName)).toContain('Robert Lewandowski');
    expect(bayGoals.map(g => g.playerName)).toContain('Harry Kane');

    // 4. ARS 2 - 0 PSG (Official UCL Match: Arsenal 2, PSG 0)
    const arsPsg = getFixtureById('ucl-ars-psg')!;
    const arsGoals = arsPsg.events.filter(e => e.teamType === 'home' && e.outcome === 'goal');
    const psgAwayGoals = arsPsg.events.filter(e => e.teamType === 'away' && e.outcome === 'goal');
    expect(arsGoals).toHaveLength(2);
    expect(psgAwayGoals).toHaveLength(0);
    expect(arsGoals.map(g => g.playerName)).toContain('Kai Havertz');
    expect(arsGoals.map(g => g.playerName)).toContain('Bukayo Saka');
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
    const psgMci = getFixtureById('ucl-psg-mci')!;
    expect(psgMci.venue).toContain('Parc des Princes');
    expect(psgMci.attendance).toBe(47926);

    const rmaBvb = getFixtureById('ucl-rma-bvb')!;
    expect(rmaBvb.venue).toContain('Santiago Bernabéu');
    expect(rmaBvb.attendance).toBe(81044);

    const barBay = getFixtureById('ucl-bar-bay')!;
    expect(barBay.venue).toContain('Estadi Olímpic');
    expect(barBay.attendance).toBe(50312);

    const arsPsg = getFixtureById('ucl-ars-psg')!;
    expect(arsPsg.venue).toContain('Emirates Stadium');
    expect(arsPsg.attendance).toBe(60125);
  });
});
