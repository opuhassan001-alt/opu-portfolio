// tests/data/mega-registry.test.ts
import { describe, it, expect } from 'vitest';
import { MEGA_FOOTBALL_REGISTRY, getAllPlayers, getPlayersByLeague, getPlayersByClub } from '../../src/data/megaFootballRegistry';
import { DUAL_TEAM_FIXTURES, getFixtureById } from '../../src/data/fixturesData';

describe('Mega Football Registry & Multi-Source Data Depth', () => {
  it('contains comprehensive roster of 90+ verified star players across top 6 competitions', () => {
    const allPlayers = getAllPlayers();
    expect(allPlayers.length).toBeGreaterThanOrEqual(90);

    const leagues = ['ucl', 'premier-league', 'la-liga', 'bundesliga', 'serie-a', 'ligue-1'];
    leagues.forEach(league => {
      const leaguePlayers = getPlayersByLeague(league);
      expect(leaguePlayers.length).toBeGreaterThanOrEqual(8);
    });
  });

  it('guarantees Transfermarkt financial and biographical metadata integrity', () => {
    const allPlayers = getAllPlayers();
    allPlayers.forEach(player => {
      expect(player.marketInfo).toBeDefined();
      expect(player.marketInfo!.marketValueEur).toBeGreaterThan(0);
      expect(player.marketInfo!.marketValueFormatted).toMatch(/€\d+M/);
      expect(player.marketInfo!.age).toBeGreaterThanOrEqual(16);
      expect(player.marketInfo!.age).toBeLessThanOrEqual(42);
      expect(player.marketInfo!.nationality).toBeTruthy();
      expect(player.marketInfo!.preferredFoot).toMatch(/left|right|both/i);
    });

    const haaland = MEGA_FOOTBALL_REGISTRY['haaland'];
    expect(haaland).toBeDefined();
    expect(haaland.marketInfo!.marketValueEur).toBe(200_000_000);
    expect(haaland.marketInfo!.marketValueFormatted).toBe('€200M');

    const mbappe = MEGA_FOOTBALL_REGISTRY['mbappe'];
    expect(mbappe).toBeDefined();
    expect(mbappe.marketInfo!.marketValueEur).toBe(180_000_000);
  });

  it('provides SofaScore & FotMob match ratings and form guides', () => {
    const allPlayers = getAllPlayers();
    allPlayers.forEach(player => {
      expect(player.sofascoreData).toBeDefined();
      expect(player.sofascoreData!.seasonRating).toBeGreaterThanOrEqual(6.5);
      expect(player.sofascoreData!.seasonRating).toBeLessThanOrEqual(9.5);
      expect(player.sofascoreData!.formGuide.length).toBeGreaterThanOrEqual(3);
      expect(player.sofascoreData!.matchLogs.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('includes comprehensive Opta advanced metrics (xG, xA, Line-Breaks, Tackles)', () => {
    const allPlayers = getAllPlayers();
    allPlayers.forEach(player => {
      expect(player.optaMetrics).toBeDefined();
      expect(player.optaMetrics!.xG).toBeGreaterThanOrEqual(0);
      expect(player.optaMetrics!.xA).toBeGreaterThanOrEqual(0);
      expect(player.optaMetrics!.progressiveCarries).toBeGreaterThanOrEqual(0);
      expect(player.optaMetrics!.lineBreakingPasses).toBeGreaterThanOrEqual(0);
      expect(player.optaMetrics!.tacklesWon).toBeGreaterThanOrEqual(0);
      expect(player.optaMetrics!.interceptions).toBeGreaterThanOrEqual(0);
    });
  });

  it('strictly preserves historical verified free-kick integrity', () => {
    const mbappe = MEGA_FOOTBALL_REGISTRY['mbappe'];
    expect(mbappe.careerFreeKickGoals).toBe(0);
    expect(mbappe.passes.filter(p => p.category === 'freekick')).toHaveLength(0);

    const messi = MEGA_FOOTBALL_REGISTRY['messi'];
    expect(messi.careerFreeKickGoals).toBe(67);

    const kdb = MEGA_FOOTBALL_REGISTRY['kdb'];
    expect(kdb.careerFreeKickGoals).toBe(18);

    const guler = MEGA_FOOTBALL_REGISTRY['arda-guler'];
    expect(guler.careerFreeKickGoals).toBe(4);
  });

  it('contains diverse action types (ground passes, through balls, aerial crosses, shots)', () => {
    const allPlayers = getAllPlayers();
    const categoriesFound = new Set<string>();

    allPlayers.forEach(player => {
      player.passes.forEach(pass => {
        categoriesFound.add(pass.category);
      });
    });

    expect(categoriesFound.has('normal')).toBe(true);
    expect(categoriesFound.has('key')).toBe(true);
    expect(categoriesFound.has('assist')).toBe(true);
    expect(categoriesFound.has('freekick')).toBe(true);
    expect(categoriesFound.has('aerial')).toBe(true);
  });
});

describe('Dual-Team Match Center & Fixtures Data', () => {
  it('contains rich dual-team fixtures with Home and Away squads', () => {
    expect(DUAL_TEAM_FIXTURES.length).toBeGreaterThanOrEqual(4);

    const uclFixture = getFixtureById('ucl-rma-rom');
    expect(uclFixture).toBeDefined();
    expect(uclFixture?.homeTeam.name).toBe('Real Madrid');
    expect(uclFixture?.awayTeam.name).toBe('AS Roma');
    expect(uclFixture?.homeScore).toBe(4);
    expect(uclFixture?.awayScore).toBe(3);

    // Lineups for both teams
    expect(uclFixture?.homeLineup.startingXI.length).toBe(11);
    expect(uclFixture?.awayLineup.startingXI.length).toBe(11);
    expect(uclFixture?.homeLineup.substitutes.length).toBeGreaterThanOrEqual(5);
    expect(uclFixture?.awayLineup.substitutes.length).toBeGreaterThanOrEqual(5);

    // Minute-by-minute action timeline for both teams
    expect(uclFixture?.events.length).toBeGreaterThanOrEqual(15);
    const homeEvents = uclFixture?.events.filter(e => e.teamId === uclFixture.homeTeam.id);
    const awayEvents = uclFixture?.events.filter(e => e.teamId === uclFixture.awayTeam.id);
    expect(homeEvents?.length).toBeGreaterThan(0);
    expect(awayEvents?.length).toBeGreaterThan(0);
  });
});
