import { MatchFixture, MatchAction, Player } from '../types/football';
import { MEGA_FOOTBALL_REGISTRY } from './megaFootballRegistry';

// Safe player finder fallback
function getP(id: string, fallbackName: string, club: string, pos: Player['position'], num: number): Player {
  const existing = MEGA_FOOTBALL_REGISTRY[id];
  if (existing) return existing;
  return {
    id,
    name: fallbackName,
    club,
    leagueId: 'ucl',
    position: pos,
    nationality: 'Europe',
    number: num,
    headshotUrl: `/assets/players/${id}.png`,
    careerFreeKickGoals: 0,
    careerAssists: 15,
    careerGoals: 25,
    dominanceZone: 'Central Pitch',
    passes: [],
    stats: {
      normalPasses: 340,
      keyPasses: 12,
      assists: 3,
      freeKickGoals: 0,
      aerialCrosses: 8,
      passAccuracyPct: 86.0
    },
    marketInfo: {
      marketValueEur: 40_000_000,
      marketValueFormatted: '€40M',
      contractUntil: '2028',
      age: 26,
      heightCm: 182,
      nationality: 'Europe',
      preferredFoot: 'Right'
    },
    sofascoreData: {
      seasonRating: 7.45,
      formGuide: ['W', 'D', 'W', 'W', 'L'],
      matchLogs: [],
      duelWinPct: 54.0,
      touchesPer90: 64.0
    },
    optaMetrics: {
      xG: 2.1,
      xA: 2.4,
      xGOT: 2.3,
      xGPer90: 0.22,
      xAPer90: 0.25,
      progressiveCarries: 24,
      lineBreakingPasses: 38,
      finalThirdEntries: 32,
      tacklesWon: 22,
      interceptions: 14,
      clearances: 18,
      pressuresWon: 16,
      aerialDuelsWonPct: 52.0
    }
  };
}

// 1. Real Madrid vs AS Roma Match Events Timeline (18 actions for both teams)
const RMA_ROMA_EVENTS: MatchAction[] = [
  // Home: Ground buildup
  {
    id: 'rma-act-1',
    playerId: 'valverde',
    teamId: 'rma',
    teamType: 'home',
    playerName: 'Federico Valverde',
    playerNumber: 8,
    actionType: 'pass',
    category: 'normal',
    minute: 4,
    second: 18,
    start: { x: -18.5, y: -12.4 },
    end: { x: 8.2, y: -4.5 },
    apexHeight: 0.06,
    velocityKmH: 64.2,
    distanceM: 27.8,
    outcome: 'successful',
    description: 'Crisp ground pass breaking through Roma first pressing line'
  },
  // Away: Soulé interception & break
  {
    id: 'rom-act-1',
    playerId: 'soule',
    teamId: 'rom',
    teamType: 'away',
    playerName: 'Matías Soulé',
    playerNumber: 18,
    actionType: 'through_ball',
    category: 'key',
    minute: 8,
    second: 42,
    start: { x: -5.0, y: 16.0 },
    end: { x: 28.5, y: 22.0 },
    apexHeight: 0.12,
    velocityKmH: 76.0,
    distanceM: 34.0,
    outcome: 'successful',
    description: 'Sharp curved through-ball penetrating behind Madrid left flank'
  },
  // Home: Mbappé Goal 1
  {
    id: 'rma-act-2',
    playerId: 'mbappe',
    teamId: 'rma',
    teamType: 'home',
    playerName: 'Kylian Mbappé',
    playerNumber: 9,
    actionType: 'shot',
    category: 'shot',
    minute: 12,
    second: 30,
    start: { x: 38.5, y: -8.0 },
    end: { x: 52.5, y: -2.1 },
    apexHeight: 1.45,
    velocityKmH: 108.5,
    distanceM: 15.2,
    xGOT: 0.92,
    landingQuadrant: 1,
    outcome: 'goal',
    description: 'GOAL! Mbappé clinical right-footed strike into bottom left corner'
  },
  // Away: Dybala Goal
  {
    id: 'rom-act-2',
    playerId: 'dybala',
    teamId: 'rom',
    teamType: 'away',
    playerName: 'Paulo Dybala',
    playerNumber: 21,
    actionType: 'shot',
    category: 'shot',
    minute: 22,
    second: 15,
    start: { x: 32.0, y: 11.2 },
    end: { x: 52.5, y: 1.8 },
    apexHeight: 2.1,
    velocityKmH: 98.4,
    distanceM: 22.5,
    xGOT: 0.89,
    landingQuadrant: 3,
    outcome: 'goal',
    description: 'GOAL! Dybala trademark left-foot curler into top far post'
  },
  // Home: Bellingham Key Pass
  {
    id: 'rma-act-3',
    playerId: 'bellingham',
    teamId: 'rma',
    teamType: 'home',
    playerName: 'Jude Bellingham',
    playerNumber: 5,
    actionType: 'through_ball',
    category: 'key',
    minute: 34,
    second: 50,
    start: { x: 14.0, y: 6.2 },
    end: { x: 41.5, y: 18.0 },
    apexHeight: 0.15,
    velocityKmH: 72.8,
    distanceM: 30.0,
    outcome: 'successful',
    description: 'Slicing diagonal through-ball setting Vinícius one-on-one'
  },
  // Home: Vinícius Goal
  {
    id: 'rma-act-4',
    playerId: 'vinicius',
    teamId: 'rma',
    teamType: 'home',
    playerName: 'Vinícius Júnior',
    playerNumber: 7,
    actionType: 'shot',
    category: 'shot',
    minute: 38,
    second: 12,
    start: { x: 42.0, y: 17.5 },
    end: { x: 52.5, y: 2.4 },
    apexHeight: 1.85,
    velocityKmH: 104.2,
    distanceM: 18.4,
    xGOT: 0.91,
    landingQuadrant: 3,
    outcome: 'goal',
    description: 'GOAL! Vinicius cuts inside from left wing and blasts into top stanchion'
  },
  // Away: Pellegrini Rocket Goal
  {
    id: 'rom-act-3',
    playerId: 'pellegrini',
    teamId: 'rom',
    teamType: 'away',
    playerName: 'Lorenzo Pellegrini',
    playerNumber: 7,
    actionType: 'shot',
    category: 'shot',
    minute: 54,
    second: 8,
    start: { x: 28.0, y: -4.0 },
    end: { x: 52.5, y: -1.5 },
    apexHeight: 1.6,
    velocityKmH: 112.0,
    distanceM: 24.6,
    xGOT: 0.88,
    landingQuadrant: 2,
    outcome: 'goal',
    description: 'GOAL! Pellegrini thunderbolt from 25 meters past Courtois'
  },
  // Home: Mbappé Goal 2
  {
    id: 'rma-act-5',
    playerId: 'mbappe',
    teamId: 'rma',
    teamType: 'home',
    playerName: 'Kylian Mbappé',
    playerNumber: 9,
    actionType: 'shot',
    category: 'shot',
    minute: 65,
    second: 24,
    start: { x: 44.0, y: -2.0 },
    end: { x: 52.5, y: -3.0 },
    apexHeight: 0.8,
    velocityKmH: 94.0,
    distanceM: 8.6,
    xGOT: 0.95,
    landingQuadrant: 4,
    outcome: 'goal',
    description: 'GOAL! Mbappé poacher tap-in after quick turnover'
  },
  // Away: Dovbyk Equalizer Goal
  {
    id: 'rom-act-4',
    playerId: 'dovbyk',
    teamId: 'rom',
    teamType: 'away',
    playerName: 'Artem Dovbyk',
    playerNumber: 11,
    actionType: 'shot',
    category: 'shot',
    minute: 79,
    second: 32,
    start: { x: 46.0, y: 1.5 },
    end: { x: 52.5, y: 0.5 },
    apexHeight: 2.2,
    velocityKmH: 88.0,
    distanceM: 6.6,
    xGOT: 0.93,
    landingQuadrant: 8,
    outcome: 'goal',
    description: 'GOAL! Dovbyk towering header from corner makes it 3-3'
  },
  // Home: Arda Güler Subbed On - Precision Through Pass
  {
    id: 'rma-act-6',
    playerId: 'arda-guler',
    teamId: 'rma',
    teamType: 'home',
    playerName: 'Arda Güler',
    playerNumber: 15,
    actionType: 'through_ball',
    category: 'key',
    minute: 82,
    second: 14,
    start: { x: 22.0, y: -16.5 },
    end: { x: 44.0, y: -6.0 },
    apexHeight: 0.1,
    velocityKmH: 78.4,
    distanceM: 24.4,
    outcome: 'successful',
    description: 'Arda Güler trademark disguised reverse pass from right half-space'
  },
  // Home: Arda Güler Pinpoint Corner Assist (85')
  {
    id: 'rma-act-7',
    playerId: 'arda-guler',
    teamId: 'rma',
    teamType: 'home',
    playerName: 'Arda Güler',
    playerNumber: 15,
    actionType: 'cross',
    category: 'assist',
    minute: 85,
    second: 10,
    start: { x: 52.5, y: -34.0 },
    end: { x: 45.0, y: -2.0 },
    apexHeight: 5.8,
    velocityKmH: 84.0,
    distanceM: 32.8,
    outcome: 'successful',
    description: 'Inswinging corner arc delivered with millimeter accuracy'
  },
  // Home: Arda Güler 90+2' Winner Assist to Rüdiger
  {
    id: 'rma-act-8',
    playerId: 'arda-guler',
    teamId: 'rma',
    teamType: 'home',
    playerName: 'Arda Güler',
    playerNumber: 15,
    actionType: 'cross',
    category: 'assist',
    minute: 92,
    second: 45,
    start: { x: 46.5, y: -24.0 },
    end: { x: 50.0, y: -1.2 },
    apexHeight: 3.4,
    velocityKmH: 79.5,
    distanceM: 23.0,
    outcome: 'successful',
    description: 'MATCH WINNER! Arda Güler curler onto Rüdiger header at back post'
  },
  // Away: Koné Midfield Interception
  {
    id: 'rom-act-5',
    playerId: 'kone',
    teamId: 'rom',
    teamType: 'away',
    playerName: 'Manu Koné',
    playerNumber: 17,
    actionType: 'interception',
    category: 'normal',
    minute: 48,
    second: 20,
    start: { x: -4.0, y: 8.0 },
    end: { x: 12.0, y: 14.0 },
    apexHeight: 0.05,
    velocityKmH: 60.0,
    distanceM: 17.1,
    outcome: 'successful',
    description: 'Koné sharp midfield interception cutting off Camavinga pass'
  },
  // Home: Carvajal Sliding Tackle
  {
    id: 'rma-act-9',
    playerId: 'carvajal',
    teamId: 'rma',
    teamType: 'home',
    playerName: 'Dani Carvajal',
    playerNumber: 2,
    actionType: 'tackle',
    category: 'normal',
    minute: 57,
    second: 35,
    start: { x: 16.0, y: -26.0 },
    end: { x: 18.0, y: -20.0 },
    apexHeight: 0.05,
    velocityKmH: 48.0,
    distanceM: 6.3,
    outcome: 'successful',
    description: 'Carvajal perfectly timed sliding challenge stopping Roma counter'
  },
  // Away: Soulé Long Diagonal Cross
  {
    id: 'rom-act-6',
    playerId: 'soule',
    teamId: 'rom',
    teamType: 'away',
    playerName: 'Matías Soulé',
    playerNumber: 18,
    actionType: 'cross',
    category: 'aerial',
    minute: 72,
    second: 15,
    start: { x: 12.0, y: 28.0 },
    end: { x: 44.0, y: -18.0 },
    apexHeight: 5.2,
    velocityKmH: 82.0,
    distanceM: 56.0,
    outcome: 'successful',
    description: 'Deep sweeping diagonal cross finding Angeliño on the opposite wing'
  }
];

export const DUAL_TEAM_FIXTURES: MatchFixture[] = [
  {
    id: 'ucl-rma-rom',
    competitionId: 'ucl',
    date: '2026-10-14',
    venue: 'Santiago Bernabéu, Madrid',
    attendance: 81044,
    minute: 94,
    status: 'FINISHED',
    homeTeam: {
      id: 'rma',
      name: 'Real Madrid',
      shortName: 'RMA',
      crestUrl: '/assets/badges/real-madrid.png',
      competitionId: 'ucl',
      stadium: 'Santiago Bernabéu'
    },
    awayTeam: {
      id: 'rom',
      name: 'AS Roma',
      shortName: 'ROM',
      crestUrl: '/assets/badges/as-roma.png',
      competitionId: 'ucl',
      stadium: 'Stadio Olimpico'
    },
    homeScore: 4,
    awayScore: 3,
    homeLineup: {
      teamId: 'rma',
      teamName: 'Real Madrid',
      formation: '4-3-3',
      coach: 'Carlo Ancelotti',
      startingXI: [
        getP('courtois', 'Thibaut Courtois', 'Real Madrid', 'Goalkeeper', 1),
        getP('carvajal', 'Dani Carvajal', 'Real Madrid', 'Defender', 2),
        getP('militao', 'Éder Militão', 'Real Madrid', 'Defender', 3),
        getP('rudiger', 'Antonio Rüdiger', 'Real Madrid', 'Defender', 22),
        getP('mendy', 'Ferland Mendy', 'Real Madrid', 'Defender', 23),
        getP('valverde', 'Federico Valverde', 'Real Madrid', 'Midfielder', 8),
        getP('camavinga', 'Eduardo Camavinga', 'Real Madrid', 'Midfielder', 6),
        getP('bellingham', 'Jude Bellingham', 'Real Madrid', 'Midfielder', 5),
        getP('arda-guler', 'Arda Güler', 'Real Madrid', 'Midfielder', 15),
        getP('vinicius', 'Vinícius Júnior', 'Real Madrid', 'Forward', 7),
        getP('mbappe', 'Kylian Mbappé', 'Real Madrid', 'Forward', 9)
      ],
      substitutes: [
        getP('rodrygo', 'Rodrygo', 'Real Madrid', 'Forward', 11),
        getP('modric', 'Luka Modrić', 'Real Madrid', 'Midfielder', 10),
        getP('endrick', 'Endrick', 'Real Madrid', 'Forward', 16),
        getP('diaz', 'Brahim Díaz', 'Real Madrid', 'Forward', 21),
        getP('vazquez', 'Lucas Vázquez', 'Real Madrid', 'Defender', 17)
      ]
    },
    awayLineup: {
      teamId: 'rom',
      teamName: 'AS Roma',
      formation: '3-4-2-1',
      coach: 'Ivan Jurić',
      startingXI: [
        getP('svilar', 'Mile Svilar', 'AS Roma', 'Goalkeeper', 99),
        getP('mancini', 'Gianluca Mancini', 'AS Roma', 'Defender', 23),
        getP('ndicka', 'Evan Ndicka', 'AS Roma', 'Defender', 5),
        getP('angelino', 'Angeliño', 'AS Roma', 'Defender', 3),
        getP('celik', 'Zeki Çelik', 'AS Roma', 'Defender', 19),
        getP('cristante', 'Bryan Cristante', 'AS Roma', 'Midfielder', 4),
        getP('kone', 'Manu Koné', 'AS Roma', 'Midfielder', 17),
        getP('pellegrini', 'Lorenzo Pellegrini', 'AS Roma', 'Midfielder', 7),
        getP('soule', 'Matías Soulé', 'AS Roma', 'Forward', 18),
        getP('dybala', 'Paulo Dybala', 'AS Roma', 'Forward', 21),
        getP('dovbyk', 'Artem Dovbyk', 'AS Roma', 'Forward', 11)
      ],
      substitutes: [
        getP('baldanzi', 'Tommaso Baldanzi', 'AS Roma', 'Midfielder', 35),
        getP('elshaarawy', 'Stephan El Shaarawy', 'AS Roma', 'Forward', 92),
        getP('paredes', 'Leandro Paredes', 'AS Roma', 'Midfielder', 16),
        getP('pisilli', 'Niccolò Pisilli', 'AS Roma', 'Midfielder', 61),
        getP('shomurodov', 'Eldor Shomurodov', 'AS Roma', 'Forward', 14)
      ]
    },
    events: RMA_ROMA_EVENTS,
    stats: {
      possession: [58, 42],
      totalShots: [19, 14],
      shotsOnTarget: [9, 7],
      passesCompleted: [542, 388],
      passAccuracyPct: [89.2, 83.5],
      corners: [8, 5],
      fouls: [9, 13],
      tacklesWon: [18, 22],
      xG: [3.42, 2.78]
    }
  },
  {
    id: 'pl-mci-ars',
    competitionId: 'premier-league',
    date: '2026-10-18',
    venue: 'Etihad Stadium, Manchester',
    attendance: 53400,
    minute: 90,
    status: 'FINISHED',
    homeTeam: {
      id: 'mci',
      name: 'Manchester City',
      shortName: 'MCI',
      crestUrl: '/assets/badges/manchester-city.png',
      competitionId: 'premier-league',
      stadium: 'Etihad Stadium'
    },
    awayTeam: {
      id: 'ars',
      name: 'Arsenal',
      shortName: 'ARS',
      crestUrl: '/assets/badges/arsenal.png',
      competitionId: 'premier-league',
      stadium: 'Emirates Stadium'
    },
    homeScore: 2,
    awayScore: 2,
    homeLineup: {
      teamId: 'mci',
      teamName: 'Manchester City',
      formation: '4-3-3',
      coach: 'Pep Guardiola',
      startingXI: [
        getP('ederson', 'Ederson', 'Manchester City', 'Goalkeeper', 31),
        getP('walker', 'Kyle Walker', 'Manchester City', 'Defender', 2),
        getP('dias', 'Rúben Dias', 'Manchester City', 'Defender', 3),
        getP('akanji', 'Manuel Akanji', 'Manchester City', 'Defender', 25),
        getP('gvardiol', 'Joško Gvardiol', 'Manchester City', 'Defender', 24),
        getP('rodri', 'Rodri', 'Manchester City', 'Midfielder', 16),
        getP('kdb', 'Kevin De Bruyne', 'Manchester City', 'Midfielder', 17),
        getP('foden', 'Phil Foden', 'Manchester City', 'Midfielder', 47),
        getP('bernardo', 'Bernardo Silva', 'Manchester City', 'Midfielder', 20),
        getP('doku', 'Jérémy Doku', 'Manchester City', 'Forward', 11),
        getP('haaland', 'Erling Haaland', 'Manchester City', 'Forward', 9)
      ],
      substitutes: [
        getP('gundogan', 'İlkay Gündoğan', 'Manchester City', 'Midfielder', 19),
        getP('kovacic', 'Mateo Kovačić', 'Manchester City', 'Midfielder', 8),
        getP('stones', 'John Stones', 'Manchester City', 'Defender', 5),
        getP('lewis', 'Rico Lewis', 'Manchester City', 'Defender', 82),
        getP('savinho', 'Savinho', 'Manchester City', 'Forward', 26)
      ]
    },
    awayLineup: {
      teamId: 'ars',
      teamName: 'Arsenal',
      formation: '4-3-3',
      coach: 'Mikel Arteta',
      startingXI: [
        getP('raya', 'David Raya', 'Arsenal', 'Goalkeeper', 22),
        getP('white', 'Ben White', 'Arsenal', 'Defender', 4),
        getP('saliba', 'William Saliba', 'Arsenal', 'Defender', 2),
        getP('gabriel', 'Gabriel Magalhães', 'Arsenal', 'Defender', 6),
        getP('timber', 'Jurriën Timber', 'Arsenal', 'Defender', 12),
        getP('rice', 'Declan Rice', 'Arsenal', 'Midfielder', 41),
        getP('partey', 'Thomas Partey', 'Arsenal', 'Midfielder', 5),
        getP('odegaard', 'Martin Ødegaard', 'Arsenal', 'Midfielder', 8),
        getP('saka', 'Bukayo Saka', 'Arsenal', 'Forward', 7),
        getP('martinelli', 'Gabriel Martinelli', 'Arsenal', 'Forward', 11),
        getP('havertz', 'Kai Havertz', 'Arsenal', 'Forward', 29)
      ],
      substitutes: [
        getP('trossard', 'Leandro Trossard', 'Arsenal', 'Forward', 19),
        getP('merino', 'Mikel Merino', 'Arsenal', 'Midfielder', 23),
        getP('jesus', 'Gabriel Jesus', 'Arsenal', 'Forward', 9),
        getP('calafiori', 'Riccardo Calafiori', 'Arsenal', 'Defender', 33),
        getP('zinchenko', 'Oleksandr Zinchenko', 'Arsenal', 'Defender', 17)
      ]
    },
    events: [
      {
        id: 'mci-act-1',
        playerId: 'kdb',
        teamId: 'mci',
        teamType: 'home',
        playerName: 'Kevin De Bruyne',
        playerNumber: 17,
        actionType: 'through_ball',
        category: 'assist',
        minute: 9,
        second: 15,
        start: { x: 12.0, y: -14.0 },
        end: { x: 42.0, y: -2.0 },
        apexHeight: 0.12,
        velocityKmH: 82.5,
        distanceM: 32.3,
        outcome: 'successful',
        description: 'World-class signature De Bruyne through ball to Haaland'
      },
      {
        id: 'mci-act-2',
        playerId: 'haaland',
        teamId: 'mci',
        teamType: 'home',
        playerName: 'Erling Haaland',
        playerNumber: 9,
        actionType: 'shot',
        category: 'shot',
        minute: 9,
        second: 20,
        start: { x: 42.0, y: -2.0 },
        end: { x: 52.5, y: -1.8 },
        apexHeight: 0.9,
        velocityKmH: 114.0,
        distanceM: 10.5,
        xGOT: 0.96,
        landingQuadrant: 4,
        outcome: 'goal',
        description: 'GOAL! Haaland clinical first-time finish into corner'
      },
      {
        id: 'ars-act-1',
        playerId: 'saka',
        teamId: 'ars',
        teamType: 'away',
        playerName: 'Bukayo Saka',
        playerNumber: 7,
        actionType: 'cross',
        category: 'assist',
        minute: 22,
        second: 40,
        start: { x: 48.0, y: -28.0 },
        end: { x: 46.0, y: 1.0 },
        apexHeight: 3.8,
        velocityKmH: 80.0,
        distanceM: 29.1,
        outcome: 'successful',
        description: 'Saka teasing cross to far post for Calafiori equalizer'
      }
    ],
    stats: {
      possession: [62, 38],
      totalShots: [16, 11],
      shotsOnTarget: [7, 5],
      passesCompleted: [590, 320],
      passAccuracyPct: [91.0, 81.2],
      corners: [9, 4],
      fouls: [11, 14],
      tacklesWon: [16, 26],
      xG: [2.15, 1.84]
    }
  },
  {
    id: 'ucl-bar-bay',
    competitionId: 'ucl',
    date: '2026-10-23',
    venue: 'Estadi Olímpic Lluís Companys, Barcelona',
    attendance: 50312,
    minute: 90,
    status: 'FINISHED',
    homeTeam: {
      id: 'bar',
      name: 'FC Barcelona',
      shortName: 'BAR',
      crestUrl: '/assets/badges/barcelona.png',
      competitionId: 'ucl',
      stadium: 'Estadi Olímpic Lluís Companys'
    },
    awayTeam: {
      id: 'bay',
      name: 'Bayern Munich',
      shortName: 'BAY',
      crestUrl: '/assets/badges/bayern-munchen.png',
      competitionId: 'ucl',
      stadium: 'Allianz Arena'
    },
    homeScore: 4,
    awayScore: 1,
    homeLineup: {
      teamId: 'bar',
      teamName: 'FC Barcelona',
      formation: '4-2-3-1',
      coach: 'Hansi Flick',
      startingXI: [
        getP('pena', 'Iñaki Peña', 'Barcelona', 'Goalkeeper', 13),
        getP('kounde', 'Jules Koundé', 'Barcelona', 'Defender', 23),
        getP('cubarsi', 'Pau Cubarsí', 'Barcelona', 'Defender', 2),
        getP('martinez', 'Iñigo Martínez', 'Barcelona', 'Defender', 5),
        getP('balde', 'Alejandro Balde', 'Barcelona', 'Defender', 3),
        getP('casado', 'Marc Casadó', 'Barcelona', 'Midfielder', 17),
        getP('pedri', 'Pedri', 'Barcelona', 'Midfielder', 8),
        getP('yamal', 'Lamine Yamal', 'Barcelona', 'Forward', 19),
        getP('fermin', 'Fermín López', 'Barcelona', 'Midfielder', 16),
        getP('raphinha', 'Raphinha', 'Barcelona', 'Forward', 11),
        getP('lewandowski', 'Robert Lewandowski', 'Barcelona', 'Forward', 9)
      ],
      substitutes: [
        getP('olmo', 'Dani Olmo', 'Barcelona', 'Midfielder', 20),
        getP('gavi', 'Gavi', 'Barcelona', 'Midfielder', 6),
        getP('dejong', 'Frenkie de Jong', 'Barcelona', 'Midfielder', 21),
        getP('fati', 'Ansu Fati', 'Barcelona', 'Forward', 10),
        getP('pau-victor', 'Pau Víctor', 'Barcelona', 'Forward', 18)
      ]
    },
    awayLineup: {
      teamId: 'bay',
      teamName: 'Bayern Munich',
      formation: '4-2-3-1',
      coach: 'Vincent Kompany',
      startingXI: [
        getP('neuer', 'Manuel Neuer', 'Bayern Munich', 'Goalkeeper', 1),
        getP('guerreiro', 'Raphaël Guerreiro', 'Bayern Munich', 'Defender', 22),
        getP('upamecano', 'Dayot Upamecano', 'Bayern Munich', 'Defender', 2),
        getP('kim', 'Kim Min-jae', 'Bayern Munich', 'Defender', 3),
        getP('davies', 'Alphonso Davies', 'Bayern Munich', 'Defender', 19),
        getP('kimmich', 'Joshua Kimmich', 'Bayern Munich', 'Midfielder', 6),
        getP('palhinha', 'João Palhinha', 'Bayern Munich', 'Midfielder', 16),
        getP('olise', 'Michael Olise', 'Bayern Munich', 'Forward', 17),
        getP('muller', 'Thomas Müller', 'Bayern Munich', 'Forward', 25),
        getP('gnabry', 'Serge Gnabry', 'Bayern Munich', 'Forward', 7),
        getP('kane', 'Harry Kane', 'Bayern Munich', 'Forward', 9)
      ],
      substitutes: [
        getP('musiala', 'Jamal Musiala', 'Bayern Munich', 'Midfielder', 42),
        getP('coman', 'Kingsley Coman', 'Bayern Munich', 'Forward', 11),
        getP('sane', 'Leroy Sané', 'Bayern Munich', 'Forward', 10),
        getP('laimer', 'Konrad Laimer', 'Bayern Munich', 'Midfielder', 27),
        getP('dier', 'Eric Dier', 'Bayern Munich', 'Defender', 15)
      ]
    },
    events: [
      {
        id: 'bar-act-1',
        playerId: 'raphinha',
        teamId: 'bar',
        teamType: 'home',
        playerName: 'Raphinha',
        playerNumber: 11,
        actionType: 'shot',
        category: 'shot',
        minute: 1,
        second: 15,
        start: { x: 38.0, y: 12.0 },
        end: { x: 52.5, y: -2.0 },
        apexHeight: 0.5,
        velocityKmH: 102.0,
        distanceM: 20.2,
        xGOT: 0.94,
        landingQuadrant: 4,
        outcome: 'goal',
        description: 'GOAL! Raphinha lightning breakaway in 57 seconds'
      },
      {
        id: 'bay-act-1',
        playerId: 'kane',
        teamId: 'bay',
        teamType: 'away',
        playerName: 'Harry Kane',
        playerNumber: 9,
        actionType: 'shot',
        category: 'shot',
        minute: 18,
        second: 24,
        start: { x: 44.0, y: 3.5 },
        end: { x: 52.5, y: 1.2 },
        apexHeight: 1.2,
        velocityKmH: 96.0,
        distanceM: 9.2,
        xGOT: 0.88,
        landingQuadrant: 6,
        outcome: 'goal',
        description: 'GOAL! Kane instinctive volley at near post'
      }
    ],
    stats: {
      possession: [42, 58],
      totalShots: [12, 11],
      shotsOnTarget: [4, 3],
      passesCompleted: [340, 520],
      passAccuracyPct: [82.4, 88.5],
      corners: [4, 5],
      fouls: [10, 11],
      tacklesWon: [21, 14],
      xG: [1.95, 1.24]
    }
  },
  {
    id: 'ucl-int-psg',
    competitionId: 'ucl',
    date: '2026-10-24',
    venue: 'San Siro, Milan',
    attendance: 75200,
    minute: 90,
    status: 'FINISHED',
    homeTeam: {
      id: 'int',
      name: 'Inter Milan',
      shortName: 'INT',
      crestUrl: '/assets/badges/inter.png',
      competitionId: 'ucl',
      stadium: 'San Siro'
    },
    awayTeam: {
      id: 'psg',
      name: 'Paris Saint-Germain',
      shortName: 'PSG',
      crestUrl: '/assets/badges/psg.png',
      competitionId: 'ucl',
      stadium: 'Parc des Princes'
    },
    homeScore: 2,
    awayScore: 1,
    homeLineup: {
      teamId: 'int',
      teamName: 'Inter Milan',
      formation: '3-5-2',
      coach: 'Simone Inzaghi',
      startingXI: [
        getP('sommer', 'Yann Sommer', 'Inter Milan', 'Goalkeeper', 1),
        getP('pavard', 'Benjamin Pavard', 'Inter Milan', 'Defender', 28),
        getP('acerbi', 'Francesco Acerbi', 'Inter Milan', 'Defender', 15),
        getP('bastoni', 'Alessandro Bastoni', 'Inter Milan', 'Defender', 95),
        getP('dumfries', 'Denzel Dumfries', 'Inter Milan', 'Defender', 2),
        getP('barella', 'Nicolò Barella', 'Inter Milan', 'Midfielder', 23),
        getP('calhanoglu', 'Hakan Çalhanoğlu', 'Inter Milan', 'Midfielder', 20),
        getP('mkhitaryan', 'Henrikh Mkhitaryan', 'Inter Milan', 'Midfielder', 22),
        getP('dimarco', 'Federico Dimarco', 'Inter Milan', 'Defender', 32),
        getP('thuram', 'Marcus Thuram', 'Inter Milan', 'Forward', 9),
        getP('lautaro', 'Lautaro Martínez', 'Inter Milan', 'Forward', 10)
      ],
      substitutes: [
        getP('frattesi', 'Davide Frattesi', 'Inter Milan', 'Midfielder', 16),
        getP('zielinski', 'Piotr Zieliński', 'Inter Milan', 'Midfielder', 7),
        getP('taremi', 'Mehdi Taremi', 'Inter Milan', 'Forward', 99),
        getP('augusto', 'Carlos Augusto', 'Inter Milan', 'Defender', 30),
        getP('bisseck', 'Yann Aurel Bisseck', 'Inter Milan', 'Defender', 31)
      ]
    },
    awayLineup: {
      teamId: 'psg',
      teamName: 'Paris Saint-Germain',
      formation: '4-3-3',
      coach: 'Luis Enrique',
      startingXI: [
        getP('donnarumma', 'Gianluigi Donnarumma', 'Paris Saint-Germain', 'Goalkeeper', 1),
        getP('hakimi', 'Achraf Hakimi', 'Paris Saint-Germain', 'Defender', 2),
        getP('marquinhos', 'Marquinhos', 'Paris Saint-Germain', 'Defender', 5),
        getP('pacho', 'Willian Pacho', 'Paris Saint-Germain', 'Defender', 51),
        getP('mendes', 'Nuno Mendes', 'Paris Saint-Germain', 'Defender', 25),
        getP('zaire-emery', 'Warren Zaïre-Emery', 'Paris Saint-Germain', 'Midfielder', 33),
        getP('vitinha', 'Vitinha', 'Paris Saint-Germain', 'Midfielder', 17),
        getP('joao-neves', 'João Neves', 'Paris Saint-Germain', 'Midfielder', 87),
        getP('dembele', 'Ousmane Dembélé', 'Paris Saint-Germain', 'Forward', 10),
        getP('asensio', 'Marco Asensio', 'Paris Saint-Germain', 'Forward', 11),
        getP('barcola', 'Bradley Barcola', 'Paris Saint-Germain', 'Forward', 29)
      ],
      substitutes: [
        getP('ruiz', 'Fabian Ruiz', 'Paris Saint-Germain', 'Midfielder', 8),
        getP('muani', 'Randal Kolo Muani', 'Paris Saint-Germain', 'Forward', 23),
        getP('lee', 'Lee Kang-in', 'Paris Saint-Germain', 'Midfielder', 19),
        getP('beraldo', 'Lucas Beraldo', 'Paris Saint-Germain', 'Defender', 35),
        getP('skriniar', 'Milan Škriniar', 'Paris Saint-Germain', 'Defender', 37)
      ]
    },
    events: [
      {
        id: 'int-act-1',
        playerId: 'calhanoglu',
        teamId: 'int',
        teamType: 'home',
        playerName: 'Hakan Çalhanoğlu',
        playerNumber: 20,
        actionType: 'free_kick',
        category: 'freekick',
        minute: 31,
        second: 12,
        start: { x: 27.5, y: -6.2 },
        end: { x: 52.5, y: -2.4 },
        apexHeight: 2.85,
        velocityKmH: 106.0,
        distanceM: 26.2,
        xGOT: 0.95,
        landingQuadrant: 1,
        outcome: 'goal',
        description: 'GOAL! Çalhanoğlu swerving free-kick into top stanchion'
      },
      {
        id: 'psg-act-1',
        playerId: 'barcola',
        teamId: 'psg',
        teamType: 'away',
        playerName: 'Bradley Barcola',
        playerNumber: 29,
        actionType: 'shot',
        category: 'shot',
        minute: 68,
        second: 45,
        start: { x: 42.0, y: 14.0 },
        end: { x: 52.5, y: 1.8 },
        apexHeight: 1.1,
        velocityKmH: 101.5,
        distanceM: 16.0,
        xGOT: 0.91,
        landingQuadrant: 6,
        outcome: 'goal',
        description: 'GOAL! Barcola solo run and low curled finish'
      }
    ],
    stats: {
      possession: [46, 54],
      totalShots: [14, 15],
      shotsOnTarget: [6, 5],
      passesCompleted: [410, 480],
      passAccuracyPct: [85.0, 89.2],
      corners: [6, 7],
      fouls: [12, 10],
      tacklesWon: [24, 17],
      xG: [1.88, 1.62]
    }
  }
];

export function getAllFixtures(): MatchFixture[] {
  return DUAL_TEAM_FIXTURES;
}

export function getFixtureById(id: string): MatchFixture | undefined {
  return DUAL_TEAM_FIXTURES.find(f => f.id === id);
}
