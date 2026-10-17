import { describe, it, expect } from 'vitest';
import { DUAL_TEAM_FIXTURES, getAllFixtures, getFixtureById } from '../../src/data/fixturesData';

describe('Official UEFA Champions League Fixtures & Match Action Timelines Integrity', () => {
  it('provides all 10 official blockbuster UEFA Champions League fixtures', () => {
    const fixtures = getAllFixtures();
    expect(fixtures).toHaveLength(10);

    const fixtureIds = fixtures.map(f => f.id);
    expect(fixtureIds).toContain('ucl-psg-mci');
    expect(fixtureIds).toContain('ucl-rma-acm');
    expect(fixtureIds).toContain('ucl-int-ars');
    expect(fixtureIds).toContain('ucl-rma-bvb');
    expect(fixtureIds).toContain('ucl-bar-bay');
    expect(fixtureIds).toContain('ucl-ars-psg');
    expect(fixtureIds).toContain('ucl-rma-rom');
    expect(fixtureIds).toContain('ucl-mci-spa');
    expect(fixtureIds).toContain('ucl-ars-sha');
    expect(fixtureIds).toContain('ucl-rbl-liv');
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

  it('verifies exact goal count matches the fixture score for all 10 official UCL matches', () => {
    // 1. PSG 4 - 2 MCI (Official UCL Match: PSG 4 goals, Man City 2 goals)
    const psgMci = getFixtureById('ucl-psg-mci')!;
    const psgGoals = psgMci.events.filter(e => e.teamType === 'home' && e.outcome === 'goal');
    const mciGoals = psgMci.events.filter(e => e.teamType === 'away' && e.outcome === 'goal');
    expect(psgGoals).toHaveLength(4);
    expect(mciGoals).toHaveLength(2);
    expect(psgGoals.map(g => g.playerName)).toContain('Ousmane Dembélé');
    expect(psgGoals.map(g => g.playerName)).toContain('Bradley Barcola');
    expect(psgGoals.map(g => g.playerName)).toContain('João Neves');
    expect(psgGoals.map(g => g.playerName)).toContain('Gonçalo Ramos');
    expect(mciGoals.map(g => g.playerName)).toContain('Jack Grealish');
    expect(mciGoals.map(g => g.playerName)).toContain('Erling Haaland');

    // 2. RMA 1 - 3 ACM (Official UCL Match: Real Madrid 1, AC Milan 3)
    const rmaAcm = getFixtureById('ucl-rma-acm')!;
    const rmaAcmHomeGoals = rmaAcm.events.filter(e => e.teamType === 'home' && e.outcome === 'goal');
    const rmaAcmAwayGoals = rmaAcm.events.filter(e => e.teamType === 'away' && e.outcome === 'goal');
    expect(rmaAcmHomeGoals).toHaveLength(1);
    expect(rmaAcmAwayGoals).toHaveLength(3);
    expect(rmaAcmHomeGoals[0].playerName).toBe('Vinícius Júnior');
    expect(rmaAcmAwayGoals.map(g => g.playerName)).toContain('Malick Thiaw');
    expect(rmaAcmAwayGoals.map(g => g.playerName)).toContain('Álvaro Morata');
    expect(rmaAcmAwayGoals.map(g => g.playerName)).toContain('Tijjani Reijnders');

    // 3. INT 1 - 0 ARS (Official UCL Match: Inter Milan 1, Arsenal 0)
    const intArs = getFixtureById('ucl-int-ars')!;
    const intArsHomeGoals = intArs.events.filter(e => e.teamType === 'home' && e.outcome === 'goal');
    const intArsAwayGoals = intArs.events.filter(e => e.teamType === 'away' && e.outcome === 'goal');
    expect(intArsHomeGoals).toHaveLength(1);
    expect(intArsAwayGoals).toHaveLength(0);
    expect(intArsHomeGoals[0].playerName).toBe('Hakan Çalhanoğlu');

    // 4. RMA 5 - 2 BVB (Official UCL Match: Vinícius Hat-trick, Real Madrid 5, Dortmund 2)
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

    // 5. BAR 4 - 1 BAY (Official UCL Match: Raphinha Hat-trick, Barcelona 4, Bayern 1)
    const barBay = getFixtureById('ucl-bar-bay')!;
    const barGoals = barBay.events.filter(e => e.teamType === 'home' && e.outcome === 'goal');
    const bayGoals = barBay.events.filter(e => e.teamType === 'away' && e.outcome === 'goal');
    expect(barGoals).toHaveLength(4);
    expect(bayGoals).toHaveLength(1);
    const raphinhaGoals = barGoals.filter(g => g.playerName === 'Raphinha');
    expect(raphinhaGoals).toHaveLength(3); // Hat-trick
    expect(barGoals.map(g => g.playerName)).toContain('Robert Lewandowski');
    expect(bayGoals.map(g => g.playerName)).toContain('Harry Kane');

    // 6. ARS 2 - 0 PSG (Official UCL Match: Arsenal 2, PSG 0)
    const arsPsg = getFixtureById('ucl-ars-psg')!;
    const arsGoals = arsPsg.events.filter(e => e.teamType === 'home' && e.outcome === 'goal');
    const psgAwayGoals = arsPsg.events.filter(e => e.teamType === 'away' && e.outcome === 'goal');
    expect(arsGoals).toHaveLength(2);
    expect(psgAwayGoals).toHaveLength(0);
    expect(arsGoals.map(g => g.playerName)).toContain('Kai Havertz');
    expect(arsGoals.map(g => g.playerName)).toContain('Bukayo Saka');

    // 7. ROM 1 - 3 RMA (Official UCL Match: AS Roma 1, Real Madrid 3)
    const rmaRom = getFixtureById('ucl-rma-rom')!;
    const romGoals = rmaRom.events.filter(e => e.teamType === 'home' && e.outcome === 'goal');
    const rmaAwayGoals = rmaRom.events.filter(e => e.teamType === 'away' && e.outcome === 'goal');
    expect(romGoals).toHaveLength(1);
    expect(rmaAwayGoals).toHaveLength(3);
    expect(romGoals[0].playerName).toBe('Paulo Dybala');
    const mbappeGoals = rmaAwayGoals.filter(g => g.playerName === 'Kylian Mbappé');
    expect(mbappeGoals).toHaveLength(2); // Brace
    expect(rmaAwayGoals.map(g => g.playerName)).toContain('Arda Güler');

    // 8. MCI 4 - 1 SPA (Official UCL Match: Man City 4, Sparta Praha 1)
    const mciSpa = getFixtureById('ucl-mci-spa')!;
    const mciHomeGoals = mciSpa.events.filter(e => e.teamType === 'home' && e.outcome === 'goal');
    const spaGoals = mciSpa.events.filter(e => e.teamType === 'away' && e.outcome === 'goal');
    expect(mciHomeGoals).toHaveLength(4);
    expect(spaGoals).toHaveLength(1);
    const haalandGoals = mciHomeGoals.filter(g => g.playerName === 'Erling Haaland');
    expect(haalandGoals).toHaveLength(3); // Hat-trick
    expect(mciHomeGoals.map(g => g.playerName)).toContain('Phil Foden');
    expect(spaGoals[0].playerName).toBe('Lukáš Haraslín');

    // 9. ARS 2 - 0 SHA (Official UCL Match: Arsenal 2, Shakhtar Donetsk 0)
    const arsSha = getFixtureById('ucl-ars-sha')!;
    const arsShaHomeGoals = arsSha.events.filter(e => e.teamType === 'home' && e.outcome === 'goal');
    const shaAwayGoals = arsSha.events.filter(e => e.teamType === 'away' && e.outcome === 'goal');
    expect(arsShaHomeGoals).toHaveLength(2);
    expect(shaAwayGoals).toHaveLength(0);
    expect(arsShaHomeGoals.map(g => g.playerName)).toContain('Bukayo Saka');
    expect(arsShaHomeGoals.map(g => g.playerName)).toContain('Gabriel Martinelli');

    // 10. RBL 0 - 1 LIV (Official UCL Match: RB Leipzig 0, Liverpool 1)
    const rblLiv = getFixtureById('ucl-rbl-liv')!;
    const rblGoals = rblLiv.events.filter(e => e.teamType === 'home' && e.outcome === 'goal');
    const livGoals = rblLiv.events.filter(e => e.teamType === 'away' && e.outcome === 'goal');
    expect(rblGoals).toHaveLength(0);
    expect(livGoals).toHaveLength(1);
    expect(livGoals[0].playerName).toBe('Darwin Núñez');
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

    const rmaAcm = getFixtureById('ucl-rma-acm')!;
    expect(rmaAcm.venue).toContain('Santiago Bernabéu');
    expect(rmaAcm.attendance).toBe(75561);

    const intArs = getFixtureById('ucl-int-ars')!;
    expect(intArs.venue).toContain('San Siro');
    expect(intArs.attendance).toBe(75222);

    const rmaBvb = getFixtureById('ucl-rma-bvb')!;
    expect(rmaBvb.venue).toContain('Santiago Bernabéu');
    expect(rmaBvb.attendance).toBe(81044);

    const barBay = getFixtureById('ucl-bar-bay')!;
    expect(barBay.venue).toContain('Estadi Olímpic');
    expect(barBay.attendance).toBe(50312);

    const arsPsg = getFixtureById('ucl-ars-psg')!;
    expect(arsPsg.venue).toContain('Emirates Stadium');
    expect(arsPsg.attendance).toBe(60125);

    const rmaRom = getFixtureById('ucl-rma-rom')!;
    expect(rmaRom.venue).toContain('Stadio Olimpico');
    expect(rmaRom.attendance).toBe(64220);

    const mciSpa = getFixtureById('ucl-mci-spa')!;
    expect(mciSpa.venue).toContain('Etihad Stadium');
    expect(mciSpa.attendance).toBe(51240);

    const arsSha = getFixtureById('ucl-ars-sha')!;
    expect(arsSha.venue).toContain('Emirates Stadium');
    expect(arsSha.attendance).toBe(60112);

    const rblLiv = getFixtureById('ucl-rbl-liv')!;
    expect(rblLiv.venue).toContain('Red Bull Arena');
    expect(rblLiv.attendance).toBe(45228);
  });
});
