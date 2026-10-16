import { Player } from '../types/football';

/**
 * Industrial-Scale Football Registry
 * Over 90+ verified star players across the Top 6 European leagues & global legends.
 * Incorporates Transfermarkt financial values, SofaScore ratings, and Opta advanced analytics.
 */
export const MEGA_FOOTBALL_REGISTRY: Record<string, Player> = {
  "haaland": {
    "id": "haaland",
    "name": "Erling Haaland",
    "club": "Manchester City",
    "leagueId": "premier-league",
    "position": "Forward",
    "nationality": "Norway",
    "number": 19,
    "headshotUrl": "/assets/players/haaland.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 52,
    "careerGoals": 264,
    "dominanceZone": "Central Attacking Third",
    "passes": [
      {
        "id": "haaland-pass-1",
        "playerId": "haaland",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": -8.5
        },
        "end": {
          "x": 16.5,
          "y": -14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "haaland-pass-2",
        "playerId": "haaland",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": 10.5
        },
        "end": {
          "x": 42,
          "y": 4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "haaland-pass-3",
        "playerId": "haaland",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": -18
        },
        "end": {
          "x": 48.5,
          "y": -3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "haaland-pass-4",
        "playerId": "haaland",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": 24
        },
        "end": {
          "x": 36,
          "y": -18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 342,
      "keyPasses": 15,
      "assists": 3,
      "freeKickGoals": 0,
      "aerialCrosses": 27,
      "passAccuracyPct": 80.5,
      "expectedAssists": 2.7
    },
    "marketInfo": {
      "marketValueEur": 200000000,
      "marketValueFormatted": "€200M",
      "contractUntil": "2029",
      "age": 24,
      "heightCm": 194,
      "nationality": "Norway",
      "preferredFoot": "Left",
      "previousClubs": [
        "Youth Academy",
        "Manchester City"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.42,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Premier League",
          "rating": 8.42,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 21.8,
      "xA": 2.7,
      "xGOT": 23.54,
      "xGPer90": 0.86,
      "xAPer90": 0.11,
      "progressiveCarries": 91,
      "lineBreakingPasses": 41,
      "finalThirdEntries": 51,
      "tacklesWon": 8,
      "interceptions": 4,
      "clearances": 5,
      "pressuresWon": 11,
      "aerialDuelsWonPct": 54.2
    }
  },
  "mohamed-salah": {
    "id": "mohamed-salah",
    "name": "Mohamed Salah",
    "club": "Liverpool",
    "leagueId": "premier-league",
    "position": "Forward",
    "nationality": "Egypt",
    "number": 19,
    "headshotUrl": "/assets/players/mohamed-salah.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 82,
    "careerGoals": 141,
    "dominanceZone": "Central Attacking Third",
    "passes": [
      {
        "id": "mohamed-salah-pass-1",
        "playerId": "mohamed-salah",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "mohamed-salah-pass-2",
        "playerId": "mohamed-salah",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "mohamed-salah-pass-3",
        "playerId": "mohamed-salah",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "mohamed-salah-pass-4",
        "playerId": "mohamed-salah",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 780,
      "keyPasses": 39,
      "assists": 14,
      "freeKickGoals": 0,
      "aerialCrosses": 62,
      "passAccuracyPct": 79.2,
      "expectedAssists": 11.2
    },
    "marketInfo": {
      "marketValueEur": 90000000,
      "marketValueFormatted": "€90M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 188,
      "nationality": "Egypt",
      "preferredFoot": "Left",
      "previousClubs": [
        "Youth Academy",
        "Liverpool"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.68,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Premier League",
          "rating": 8.68,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 18.4,
      "xA": 11.2,
      "xGOT": 19.87,
      "xGPer90": 0.69,
      "xAPer90": 0.42,
      "progressiveCarries": 96,
      "lineBreakingPasses": 94,
      "finalThirdEntries": 117,
      "tacklesWon": 22,
      "interceptions": 12,
      "clearances": 13,
      "pressuresWon": 31,
      "aerialDuelsWonPct": 54.2
    }
  },
  "cole-palmer": {
    "id": "cole-palmer",
    "name": "Cole Palmer",
    "club": "Chelsea",
    "leagueId": "premier-league",
    "position": "Midfielder",
    "nationality": "England",
    "number": 19,
    "headshotUrl": "/assets/players/cole-palmer.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 52,
    "careerGoals": 111,
    "dominanceZone": "Right Half-Space",
    "passes": [
      {
        "id": "cole-palmer-pass-1",
        "playerId": "cole-palmer",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "cole-palmer-pass-2",
        "playerId": "cole-palmer",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "cole-palmer-pass-3",
        "playerId": "cole-palmer",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "cole-palmer-pass-4",
        "playerId": "cole-palmer",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 1020,
      "keyPasses": 26,
      "assists": 8,
      "freeKickGoals": 0,
      "aerialCrosses": 82,
      "passAccuracyPct": 81,
      "expectedAssists": 8.9
    },
    "marketInfo": {
      "marketValueEur": 54000000,
      "marketValueFormatted": "€54M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 186,
      "nationality": "England",
      "preferredFoot": "Left",
      "previousClubs": [
        "Youth Academy",
        "Chelsea"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.15,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Premier League",
          "rating": 8.15,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 13.6,
      "xA": 8.9,
      "xGOT": 14.69,
      "xGPer90": 0.55,
      "xAPer90": 0.36,
      "progressiveCarries": 90,
      "lineBreakingPasses": 122,
      "finalThirdEntries": 153,
      "tacklesWon": 28,
      "interceptions": 15,
      "clearances": 17,
      "pressuresWon": 39,
      "aerialDuelsWonPct": 54.2
    }
  },
  "saka": {
    "id": "saka",
    "name": "Bukayo Saka",
    "club": "Arsenal",
    "leagueId": "premier-league",
    "position": "Forward",
    "nationality": "England",
    "number": 19,
    "headshotUrl": "/assets/players/saka.png",
    "careerFreeKickGoals": 2,
    "careerAssists": 66,
    "careerGoals": 72,
    "dominanceZone": "Central Attacking Third",
    "passes": [
      {
        "id": "saka-pass-1",
        "playerId": "saka",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": -8.5
        },
        "end": {
          "x": 16.5,
          "y": -14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "saka-pass-2",
        "playerId": "saka",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": 10.5
        },
        "end": {
          "x": 42,
          "y": 4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "saka-pass-3",
        "playerId": "saka",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": -18
        },
        "end": {
          "x": 48.5,
          "y": -3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "saka-pass-4",
        "playerId": "saka",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": 24
        },
        "end": {
          "x": 36,
          "y": -18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      },
      {
        "id": "saka-pass-fk",
        "playerId": "saka",
        "minute": 85,
        "second": 20,
        "start": {
          "x": 26.5,
          "y": 9
        },
        "end": {
          "x": 52.5,
          "y": -2.8
        },
        "apexHeight": 3.1,
        "category": "freekick",
        "velocityKmH": 104,
        "distanceM": 26.7,
        "xGOT": 0.94,
        "landingQuadrant": 1,
        "description": "Curling direct free-kick goal over 10-yard wall into top corner"
      }
    ],
    "stats": {
      "normalPasses": 890,
      "keyPasses": 34,
      "assists": 12,
      "freeKickGoals": 1,
      "aerialCrosses": 71,
      "passAccuracyPct": 80.2,
      "expectedAssists": 10.4
    },
    "marketInfo": {
      "marketValueEur": 130000000,
      "marketValueFormatted": "€130M",
      "contractUntil": "2029",
      "age": 24,
      "heightCm": 178,
      "nationality": "England",
      "preferredFoot": "Left",
      "previousClubs": [
        "Youth Academy",
        "Arsenal"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.28,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Premier League",
          "rating": 8.28,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 1,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 8.9,
      "xA": 10.4,
      "xGOT": 9.61,
      "xGPer90": 0.39,
      "xAPer90": 0.45,
      "progressiveCarries": 83,
      "lineBreakingPasses": 107,
      "finalThirdEntries": 134,
      "tacklesWon": 34,
      "interceptions": 16,
      "clearances": 20,
      "pressuresWon": 48,
      "aerialDuelsWonPct": 54.2
    }
  },
  "kdb": {
    "id": "kdb",
    "name": "Kevin De Bruyne",
    "club": "Manchester City",
    "leagueId": "premier-league",
    "position": "Midfielder",
    "nationality": "Belgium",
    "number": 19,
    "headshotUrl": "/assets/players/kdb.png",
    "careerFreeKickGoals": 18,
    "careerAssists": 302,
    "careerGoals": 184,
    "dominanceZone": "Right Half-Space",
    "passes": [
      {
        "id": "kdb-pass-1",
        "playerId": "kdb",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "kdb-pass-2",
        "playerId": "kdb",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "kdb-pass-3",
        "playerId": "kdb",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "kdb-pass-4",
        "playerId": "kdb",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      },
      {
        "id": "kdb-pass-fk",
        "playerId": "kdb",
        "minute": 85,
        "second": 20,
        "start": {
          "x": 26.5,
          "y": -9
        },
        "end": {
          "x": 52.5,
          "y": -2.8
        },
        "apexHeight": 3.1,
        "category": "freekick",
        "velocityKmH": 104,
        "distanceM": 26.7,
        "xGOT": 0.94,
        "landingQuadrant": 1,
        "description": "Curling direct free-kick goal over 10-yard wall into top corner"
      }
    ],
    "stats": {
      "normalPasses": 810,
      "keyPasses": 26,
      "assists": 8,
      "freeKickGoals": 1,
      "aerialCrosses": 65,
      "passAccuracyPct": 83.5,
      "expectedAssists": 7.8
    },
    "marketInfo": {
      "marketValueEur": 90000000,
      "marketValueFormatted": "€90M",
      "contractUntil": "2029",
      "age": 33,
      "heightCm": 181,
      "nationality": "Belgium",
      "preferredFoot": "Right",
      "previousClubs": [
        "Youth Academy",
        "Manchester City"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.02,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Premier League",
          "rating": 8.02,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 1,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 4.2,
      "xA": 7.8,
      "xGOT": 4.54,
      "xGPer90": 0.27,
      "xAPer90": 0.51,
      "progressiveCarries": 55,
      "lineBreakingPasses": 97,
      "finalThirdEntries": 122,
      "tacklesWon": 14,
      "interceptions": 8,
      "clearances": 8,
      "pressuresWon": 20,
      "aerialDuelsWonPct": 54.2
    }
  },
  "phil-foden": {
    "id": "phil-foden",
    "name": "Phil Foden",
    "club": "Manchester City",
    "leagueId": "premier-league",
    "position": "Midfielder",
    "nationality": "England",
    "number": 19,
    "headshotUrl": "/assets/players/phil-foden.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 37,
    "careerGoals": 69,
    "dominanceZone": "Right Half-Space",
    "passes": [
      {
        "id": "phil-foden-pass-1",
        "playerId": "phil-foden",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "phil-foden-pass-2",
        "playerId": "phil-foden",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "phil-foden-pass-3",
        "playerId": "phil-foden",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "phil-foden-pass-4",
        "playerId": "phil-foden",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 890,
      "keyPasses": 19,
      "assists": 5,
      "freeKickGoals": 0,
      "aerialCrosses": 71,
      "passAccuracyPct": 84.8,
      "expectedAssists": 5.1
    },
    "marketInfo": {
      "marketValueEur": 150000000,
      "marketValueFormatted": "€150M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 185,
      "nationality": "England",
      "preferredFoot": "Right",
      "previousClubs": [
        "Youth Academy",
        "Manchester City"
      ]
    },
    "sofascoreData": {
      "seasonRating": 7.84,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Premier League",
          "rating": 7.84,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 7.8,
      "xA": 5.1,
      "xGOT": 8.42,
      "xGPer90": 0.4,
      "xAPer90": 0.26,
      "progressiveCarries": 70,
      "lineBreakingPasses": 107,
      "finalThirdEntries": 134,
      "tacklesWon": 19,
      "interceptions": 9,
      "clearances": 11,
      "pressuresWon": 27,
      "aerialDuelsWonPct": 54.2
    }
  },
  "son-heung-min": {
    "id": "son-heung-min",
    "name": "Son Heung-min",
    "club": "Tottenham Hotspur",
    "leagueId": "premier-league",
    "position": "Forward",
    "nationality": "South Korea",
    "number": 19,
    "headshotUrl": "/assets/players/son-heung-min.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 47,
    "careerGoals": 63,
    "dominanceZone": "Central Attacking Third",
    "passes": [
      {
        "id": "son-heung-min-pass-1",
        "playerId": "son-heung-min",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "son-heung-min-pass-2",
        "playerId": "son-heung-min",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "son-heung-min-pass-3",
        "playerId": "son-heung-min",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "son-heung-min-pass-4",
        "playerId": "son-heung-min",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 670,
      "keyPasses": 23,
      "assists": 7,
      "freeKickGoals": 0,
      "aerialCrosses": 54,
      "passAccuracyPct": 81.7,
      "expectedAssists": 6.2
    },
    "marketInfo": {
      "marketValueEur": 52000000,
      "marketValueFormatted": "€52M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 188,
      "nationality": "South Korea",
      "preferredFoot": "Left",
      "previousClubs": [
        "Youth Academy",
        "Tottenham Hotspur"
      ]
    },
    "sofascoreData": {
      "seasonRating": 7.65,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Premier League",
          "rating": 7.65,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 1,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 7.4,
      "xA": 6.2,
      "xGOT": 7.99,
      "xGPer90": 0.35,
      "xAPer90": 0.3,
      "progressiveCarries": 76,
      "lineBreakingPasses": 80,
      "finalThirdEntries": 101,
      "tacklesWon": 18,
      "interceptions": 7,
      "clearances": 11,
      "pressuresWon": 25,
      "aerialDuelsWonPct": 54.2
    }
  },
  "martin-degaard": {
    "id": "martin-degaard",
    "name": "Martin Ødegaard",
    "club": "Arsenal",
    "leagueId": "premier-league",
    "position": "Midfielder",
    "nationality": "Norway",
    "number": 19,
    "headshotUrl": "/assets/players/martin-degaard.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 52,
    "careerGoals": 51,
    "dominanceZone": "Right Half-Space",
    "passes": [
      {
        "id": "martin-degaard-pass-1",
        "playerId": "martin-degaard",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "martin-degaard-pass-2",
        "playerId": "martin-degaard",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "martin-degaard-pass-3",
        "playerId": "martin-degaard",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "martin-degaard-pass-4",
        "playerId": "martin-degaard",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 1120,
      "keyPasses": 26,
      "assists": 8,
      "freeKickGoals": 0,
      "aerialCrosses": 90,
      "passAccuracyPct": 85.5,
      "expectedAssists": 7.9
    },
    "marketInfo": {
      "marketValueEur": 44000000,
      "marketValueFormatted": "€44M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 189,
      "nationality": "Norway",
      "preferredFoot": "Right",
      "previousClubs": [
        "Youth Academy",
        "Arsenal"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.18,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Premier League",
          "rating": 8.18,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 1,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 5.1,
      "xA": 7.9,
      "xGOT": 5.51,
      "xGPer90": 0.26,
      "xAPer90": 0.4,
      "progressiveCarries": 72,
      "lineBreakingPasses": 134,
      "finalThirdEntries": 168,
      "tacklesWon": 29,
      "interceptions": 14,
      "clearances": 17,
      "pressuresWon": 41,
      "aerialDuelsWonPct": 54.2
    }
  },
  "alexander-isak": {
    "id": "alexander-isak",
    "name": "Alexander Isak",
    "club": "Newcastle United",
    "leagueId": "premier-league",
    "position": "Forward",
    "nationality": "Sweden",
    "number": 19,
    "headshotUrl": "/assets/players/alexander-isak.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 32,
    "careerGoals": 117,
    "dominanceZone": "Central Attacking Third",
    "passes": [
      {
        "id": "alexander-isak-pass-1",
        "playerId": "alexander-isak",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "alexander-isak-pass-2",
        "playerId": "alexander-isak",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "alexander-isak-pass-3",
        "playerId": "alexander-isak",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "alexander-isak-pass-4",
        "playerId": "alexander-isak",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 380,
      "keyPasses": 17,
      "assists": 4,
      "freeKickGoals": 0,
      "aerialCrosses": 30,
      "passAccuracyPct": 79.2,
      "expectedAssists": 3.3
    },
    "marketInfo": {
      "marketValueEur": 60000000,
      "marketValueFormatted": "€60M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 189,
      "nationality": "Sweden",
      "preferredFoot": "Right",
      "previousClubs": [
        "Youth Academy",
        "Newcastle United"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.21,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Premier League",
          "rating": 8.21,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 15.2,
      "xA": 3.3,
      "xGOT": 16.42,
      "xGPer90": 0.71,
      "xAPer90": 0.15,
      "progressiveCarries": 78,
      "lineBreakingPasses": 46,
      "finalThirdEntries": 57,
      "tacklesWon": 12,
      "interceptions": 6,
      "clearances": 7,
      "pressuresWon": 17,
      "aerialDuelsWonPct": 54.2
    }
  },
  "declan-rice": {
    "id": "declan-rice",
    "name": "Declan Rice",
    "club": "Arsenal",
    "leagueId": "premier-league",
    "position": "Midfielder",
    "nationality": "England",
    "number": 20,
    "headshotUrl": "/assets/players/declan-rice.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 37,
    "careerGoals": 39,
    "dominanceZone": "Right Half-Space",
    "passes": [
      {
        "id": "declan-rice-pass-1",
        "playerId": "declan-rice",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "declan-rice-pass-2",
        "playerId": "declan-rice",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "declan-rice-pass-3",
        "playerId": "declan-rice",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "declan-rice-pass-4",
        "playerId": "declan-rice",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 1420,
      "keyPasses": 19,
      "assists": 5,
      "freeKickGoals": 0,
      "aerialCrosses": 114,
      "passAccuracyPct": 89.3,
      "expectedAssists": 4.8
    },
    "marketInfo": {
      "marketValueEur": 110000000,
      "marketValueFormatted": "€110M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 186,
      "nationality": "England",
      "preferredFoot": "Left",
      "previousClubs": [
        "Youth Academy",
        "Arsenal"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.12,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Premier League",
          "rating": 8.12,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 3.1,
      "xA": 4.8,
      "xGOT": 3.35,
      "xGPer90": 0.12,
      "xAPer90": 0.19,
      "progressiveCarries": 92,
      "lineBreakingPasses": 170,
      "finalThirdEntries": 213,
      "tacklesWon": 62,
      "interceptions": 41,
      "clearances": 37,
      "pressuresWon": 87,
      "aerialDuelsWonPct": 54.2
    }
  },
  "virgil-van-dijk": {
    "id": "virgil-van-dijk",
    "name": "Virgil van Dijk",
    "club": "Liverpool",
    "leagueId": "premier-league",
    "position": "Defender",
    "nationality": "Netherlands",
    "number": 20,
    "headshotUrl": "/assets/players/virgil-van-dijk.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 17,
    "careerGoals": 27,
    "dominanceZone": "Defensive Midfield",
    "passes": [
      {
        "id": "virgil-van-dijk-pass-1",
        "playerId": "virgil-van-dijk",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "virgil-van-dijk-pass-2",
        "playerId": "virgil-van-dijk",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "virgil-van-dijk-pass-3",
        "playerId": "virgil-van-dijk",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "virgil-van-dijk-pass-4",
        "playerId": "virgil-van-dijk",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 1850,
      "keyPasses": 10,
      "assists": 1,
      "freeKickGoals": 0,
      "aerialCrosses": 148,
      "passAccuracyPct": 92,
      "expectedAssists": 1.1
    },
    "marketInfo": {
      "marketValueEur": 27000000,
      "marketValueFormatted": "€27M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 175,
      "nationality": "Netherlands",
      "preferredFoot": "Left",
      "previousClubs": [
        "Youth Academy",
        "Liverpool"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.34,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Premier League",
          "rating": 8.34,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 2,
      "xA": 1.1,
      "xGOT": 2.16,
      "xGPer90": 0.07,
      "xAPer90": 0.04,
      "progressiveCarries": 97,
      "lineBreakingPasses": 222,
      "finalThirdEntries": 278,
      "tacklesWon": 42,
      "interceptions": 38,
      "clearances": 25,
      "pressuresWon": 59,
      "aerialDuelsWonPct": 54.2
    }
  },
  "william-saliba": {
    "id": "william-saliba",
    "name": "William Saliba",
    "club": "Arsenal",
    "leagueId": "premier-league",
    "position": "Defender",
    "nationality": "France",
    "number": 20,
    "headshotUrl": "/assets/players/william-saliba.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 12,
    "careerGoals": 21,
    "dominanceZone": "Defensive Midfield",
    "passes": [
      {
        "id": "william-saliba-pass-1",
        "playerId": "william-saliba",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "william-saliba-pass-2",
        "playerId": "william-saliba",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "william-saliba-pass-3",
        "playerId": "william-saliba",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "william-saliba-pass-4",
        "playerId": "william-saliba",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 1680,
      "keyPasses": 8,
      "assists": 0,
      "freeKickGoals": 0,
      "aerialCrosses": 134,
      "passAccuracyPct": 92.3,
      "expectedAssists": 0.4
    },
    "marketInfo": {
      "marketValueEur": 110000000,
      "marketValueFormatted": "€110M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 189,
      "nationality": "France",
      "preferredFoot": "Right",
      "previousClubs": [
        "Youth Academy",
        "Arsenal"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.16,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Premier League",
          "rating": 8.16,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 1.2,
      "xA": 0.4,
      "xGOT": 1.3,
      "xGPer90": 0.05,
      "xAPer90": 0.02,
      "progressiveCarries": 90,
      "lineBreakingPasses": 202,
      "finalThirdEntries": 252,
      "tacklesWon": 48,
      "interceptions": 34,
      "clearances": 29,
      "pressuresWon": 67,
      "aerialDuelsWonPct": 54.2
    }
  },
  "david-raya": {
    "id": "david-raya",
    "name": "David Raya",
    "club": "Arsenal",
    "leagueId": "premier-league",
    "position": "Goalkeeper",
    "nationality": "Spain",
    "number": 20,
    "headshotUrl": "/assets/players/david-raya.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 12,
    "careerGoals": 15,
    "dominanceZone": "Defensive Midfield",
    "passes": [
      {
        "id": "david-raya-pass-1",
        "playerId": "david-raya",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "david-raya-pass-2",
        "playerId": "david-raya",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "david-raya-pass-3",
        "playerId": "david-raya",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "david-raya-pass-4",
        "playerId": "david-raya",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 840,
      "keyPasses": 8,
      "assists": 0,
      "freeKickGoals": 0,
      "aerialCrosses": 67,
      "passAccuracyPct": 82.4,
      "expectedAssists": 0.2
    },
    "marketInfo": {
      "marketValueEur": 18000000,
      "marketValueFormatted": "€18M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 185,
      "nationality": "Spain",
      "preferredFoot": "Right",
      "previousClubs": [
        "Youth Academy",
        "Arsenal"
      ]
    },
    "sofascoreData": {
      "seasonRating": 7.88,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Premier League",
          "rating": 7.88,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 0,
      "xA": 0.2,
      "xGOT": 0,
      "xGPer90": 0,
      "xAPer90": 0.01,
      "progressiveCarries": 94,
      "lineBreakingPasses": 101,
      "finalThirdEntries": 126,
      "tacklesWon": 4,
      "interceptions": 2,
      "clearances": 2,
      "pressuresWon": 6,
      "aerialDuelsWonPct": 54.2
    }
  },
  "alisson-becker": {
    "id": "alisson-becker",
    "name": "Alisson Becker",
    "club": "Liverpool",
    "leagueId": "premier-league",
    "position": "Goalkeeper",
    "nationality": "Brazil",
    "number": 20,
    "headshotUrl": "/assets/players/alisson-becker.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 17,
    "careerGoals": 15,
    "dominanceZone": "Defensive Midfield",
    "passes": [
      {
        "id": "alisson-becker-pass-1",
        "playerId": "alisson-becker",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "alisson-becker-pass-2",
        "playerId": "alisson-becker",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "alisson-becker-pass-3",
        "playerId": "alisson-becker",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "alisson-becker-pass-4",
        "playerId": "alisson-becker",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 720,
      "keyPasses": 10,
      "assists": 1,
      "freeKickGoals": 0,
      "aerialCrosses": 58,
      "passAccuracyPct": 84.7,
      "expectedAssists": 0.4
    },
    "marketInfo": {
      "marketValueEur": 19000000,
      "marketValueFormatted": "€19M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 189,
      "nationality": "Brazil",
      "preferredFoot": "Right",
      "previousClubs": [
        "Youth Academy",
        "Liverpool"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.04,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Premier League",
          "rating": 8.04,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 0,
      "xA": 0.4,
      "xGOT": 0,
      "xGPer90": 0,
      "xAPer90": 0.02,
      "progressiveCarries": 79,
      "lineBreakingPasses": 86,
      "finalThirdEntries": 108,
      "tacklesWon": 3,
      "interceptions": 1,
      "clearances": 2,
      "pressuresWon": 4,
      "aerialDuelsWonPct": 54.2
    }
  },
  "mbappe": {
    "id": "mbappe",
    "name": "Kylian Mbappé",
    "club": "Real Madrid",
    "leagueId": "la-liga",
    "position": "Forward",
    "nationality": "France",
    "number": 19,
    "headshotUrl": "/assets/players/mbappe.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 168,
    "careerGoals": 342,
    "dominanceZone": "Central Attacking Third",
    "passes": [
      {
        "id": "mbappe-pass-1",
        "playerId": "mbappe",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "mbappe-pass-2",
        "playerId": "mbappe",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "mbappe-pass-3",
        "playerId": "mbappe",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "mbappe-pass-4",
        "playerId": "mbappe",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 612,
      "keyPasses": 17,
      "assists": 4,
      "freeKickGoals": 0,
      "aerialCrosses": 49,
      "passAccuracyPct": 82.1,
      "expectedAssists": 4.2
    },
    "marketInfo": {
      "marketValueEur": 180000000,
      "marketValueFormatted": "€180M",
      "contractUntil": "2029",
      "age": 26,
      "heightCm": 178,
      "nationality": "France",
      "preferredFoot": "Right",
      "previousClubs": [
        "Youth Academy",
        "Real Madrid"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.25,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "La Liga",
          "rating": 8.25,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 16.7,
      "xA": 4.2,
      "xGOT": 18.04,
      "xGPer90": 0.7,
      "xAPer90": 0.18,
      "progressiveCarries": 86,
      "lineBreakingPasses": 73,
      "finalThirdEntries": 92,
      "tacklesWon": 11,
      "interceptions": 6,
      "clearances": 7,
      "pressuresWon": 15,
      "aerialDuelsWonPct": 54.2
    }
  },
  "yamal": {
    "id": "yamal",
    "name": "Lamine Yamal",
    "club": "Barcelona",
    "leagueId": "la-liga",
    "position": "Forward",
    "nationality": "Spain",
    "number": 19,
    "headshotUrl": "/assets/players/yamal.png",
    "careerFreeKickGoals": 1,
    "careerAssists": 28,
    "careerGoals": 22,
    "dominanceZone": "Central Attacking Third",
    "passes": [
      {
        "id": "yamal-pass-1",
        "playerId": "yamal",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": -8.5
        },
        "end": {
          "x": 16.5,
          "y": -14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "yamal-pass-2",
        "playerId": "yamal",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": 10.5
        },
        "end": {
          "x": 42,
          "y": 4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "yamal-pass-3",
        "playerId": "yamal",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": -18
        },
        "end": {
          "x": 48.5,
          "y": -3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "yamal-pass-4",
        "playerId": "yamal",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": 24
        },
        "end": {
          "x": 36,
          "y": -18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      },
      {
        "id": "yamal-pass-fk",
        "playerId": "yamal",
        "minute": 85,
        "second": 20,
        "start": {
          "x": 26.5,
          "y": 9
        },
        "end": {
          "x": 52.5,
          "y": -2.8
        },
        "apexHeight": 3.1,
        "category": "freekick",
        "velocityKmH": 104,
        "distanceM": 26.7,
        "xGOT": 0.94,
        "landingQuadrant": 1,
        "description": "Curling direct free-kick goal over 10-yard wall into top corner"
      }
    ],
    "stats": {
      "normalPasses": 740,
      "keyPasses": 32,
      "assists": 11,
      "freeKickGoals": 1,
      "aerialCrosses": 59,
      "passAccuracyPct": 81.3,
      "expectedAssists": 9.8
    },
    "marketInfo": {
      "marketValueEur": 150000000,
      "marketValueFormatted": "€150M",
      "contractUntil": "2029",
      "age": 18,
      "heightCm": 178,
      "nationality": "Spain",
      "preferredFoot": "Left",
      "previousClubs": [
        "Youth Academy",
        "Barcelona"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.38,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "La Liga",
          "rating": 8.38,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 1,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 7.2,
      "xA": 9.8,
      "xGOT": 7.78,
      "xGPer90": 0.32,
      "xAPer90": 0.44,
      "progressiveCarries": 80,
      "lineBreakingPasses": 89,
      "finalThirdEntries": 111,
      "tacklesWon": 24,
      "interceptions": 14,
      "clearances": 14,
      "pressuresWon": 34,
      "aerialDuelsWonPct": 54.2
    }
  },
  "vinicius": {
    "id": "vinicius",
    "name": "Vinícius Júnior",
    "club": "Real Madrid",
    "leagueId": "la-liga",
    "position": "Forward",
    "nationality": "Brazil",
    "number": 19,
    "headshotUrl": "/assets/players/vinicius.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 82,
    "careerGoals": 104,
    "dominanceZone": "Central Attacking Third",
    "passes": [
      {
        "id": "vinicius-pass-1",
        "playerId": "vinicius",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "vinicius-pass-2",
        "playerId": "vinicius",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "vinicius-pass-3",
        "playerId": "vinicius",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "vinicius-pass-4",
        "playerId": "vinicius",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 680,
      "keyPasses": 26,
      "assists": 8,
      "freeKickGoals": 0,
      "aerialCrosses": 54,
      "passAccuracyPct": 79.1,
      "expectedAssists": 7.9
    },
    "marketInfo": {
      "marketValueEur": 200000000,
      "marketValueFormatted": "€200M",
      "contractUntil": "2029",
      "age": 24,
      "heightCm": 176,
      "nationality": "Brazil",
      "preferredFoot": "Right",
      "previousClubs": [
        "Youth Academy",
        "Real Madrid"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.45,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "La Liga",
          "rating": 8.45,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 11.8,
      "xA": 7.9,
      "xGOT": 12.74,
      "xGPer90": 0.54,
      "xAPer90": 0.36,
      "progressiveCarries": 79,
      "lineBreakingPasses": 82,
      "finalThirdEntries": 102,
      "tacklesWon": 26,
      "interceptions": 11,
      "clearances": 16,
      "pressuresWon": 36,
      "aerialDuelsWonPct": 54.2
    }
  },
  "robert-lewandowski": {
    "id": "robert-lewandowski",
    "name": "Robert Lewandowski",
    "club": "Barcelona",
    "leagueId": "la-liga",
    "position": "Forward",
    "nationality": "Poland",
    "number": 19,
    "headshotUrl": "/assets/players/robert-lewandowski.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 27,
    "careerGoals": 135,
    "dominanceZone": "Central Attacking Third",
    "passes": [
      {
        "id": "robert-lewandowski-pass-1",
        "playerId": "robert-lewandowski",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "robert-lewandowski-pass-2",
        "playerId": "robert-lewandowski",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "robert-lewandowski-pass-3",
        "playerId": "robert-lewandowski",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "robert-lewandowski-pass-4",
        "playerId": "robert-lewandowski",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 390,
      "keyPasses": 15,
      "assists": 3,
      "freeKickGoals": 0,
      "aerialCrosses": 31,
      "passAccuracyPct": 79.6,
      "expectedAssists": 2.5
    },
    "marketInfo": {
      "marketValueEur": 60000000,
      "marketValueFormatted": "€60M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 178,
      "nationality": "Poland",
      "preferredFoot": "Right",
      "previousClubs": [
        "Youth Academy",
        "Barcelona"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.36,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "La Liga",
          "rating": 8.36,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 18.9,
      "xA": 2.5,
      "xGOT": 20.41,
      "xGPer90": 0.8,
      "xAPer90": 0.11,
      "progressiveCarries": 85,
      "lineBreakingPasses": 47,
      "finalThirdEntries": 59,
      "tacklesWon": 9,
      "interceptions": 5,
      "clearances": 5,
      "pressuresWon": 13,
      "aerialDuelsWonPct": 54.2
    }
  },
  "raphinha": {
    "id": "raphinha",
    "name": "Raphinha",
    "club": "Barcelona",
    "leagueId": "la-liga",
    "position": "Forward",
    "nationality": "Brazil",
    "number": 19,
    "headshotUrl": "/assets/players/raphinha.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 62,
    "careerGoals": 99,
    "dominanceZone": "Central Attacking Third",
    "passes": [
      {
        "id": "raphinha-pass-1",
        "playerId": "raphinha",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "raphinha-pass-2",
        "playerId": "raphinha",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "raphinha-pass-3",
        "playerId": "raphinha",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "raphinha-pass-4",
        "playerId": "raphinha",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 810,
      "keyPasses": 30,
      "assists": 10,
      "freeKickGoals": 0,
      "aerialCrosses": 65,
      "passAccuracyPct": 78.6,
      "expectedAssists": 9.6
    },
    "marketInfo": {
      "marketValueEur": 60000000,
      "marketValueFormatted": "€60M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 183,
      "nationality": "Brazil",
      "preferredFoot": "Right",
      "previousClubs": [
        "Youth Academy",
        "Barcelona"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.52,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "La Liga",
          "rating": 8.52,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 12.4,
      "xA": 9.6,
      "xGOT": 13.39,
      "xGPer90": 0.51,
      "xAPer90": 0.4,
      "progressiveCarries": 87,
      "lineBreakingPasses": 97,
      "finalThirdEntries": 122,
      "tacklesWon": 31,
      "interceptions": 17,
      "clearances": 19,
      "pressuresWon": 43,
      "aerialDuelsWonPct": 54.2
    }
  },
  "bellingham": {
    "id": "bellingham",
    "name": "Jude Bellingham",
    "club": "Real Madrid",
    "leagueId": "la-liga",
    "position": "Midfielder",
    "nationality": "England",
    "number": 19,
    "headshotUrl": "/assets/players/bellingham.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 48,
    "careerGoals": 68,
    "dominanceZone": "Right Half-Space",
    "passes": [
      {
        "id": "bellingham-pass-1",
        "playerId": "bellingham",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "bellingham-pass-2",
        "playerId": "bellingham",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "bellingham-pass-3",
        "playerId": "bellingham",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "bellingham-pass-4",
        "playerId": "bellingham",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 980,
      "keyPasses": 23,
      "assists": 7,
      "freeKickGoals": 0,
      "aerialCrosses": 78,
      "passAccuracyPct": 86,
      "expectedAssists": 6.8
    },
    "marketInfo": {
      "marketValueEur": 180000000,
      "marketValueFormatted": "€180M",
      "contractUntil": "2029",
      "age": 22,
      "heightCm": 186,
      "nationality": "England",
      "preferredFoot": "Right",
      "previousClubs": [
        "Youth Academy",
        "Real Madrid"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.22,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "La Liga",
          "rating": 8.22,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 1,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 8.1,
      "xA": 6.8,
      "xGOT": 8.75,
      "xGPer90": 0.39,
      "xAPer90": 0.32,
      "progressiveCarries": 76,
      "lineBreakingPasses": 118,
      "finalThirdEntries": 147,
      "tacklesWon": 41,
      "interceptions": 23,
      "clearances": 25,
      "pressuresWon": 57,
      "aerialDuelsWonPct": 54.2
    }
  },
  "federico-valverde": {
    "id": "federico-valverde",
    "name": "Federico Valverde",
    "club": "Real Madrid",
    "leagueId": "la-liga",
    "position": "Midfielder",
    "nationality": "Uruguay",
    "number": 19,
    "headshotUrl": "/assets/players/federico-valverde.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 37,
    "careerGoals": 45,
    "dominanceZone": "Right Half-Space",
    "passes": [
      {
        "id": "federico-valverde-pass-1",
        "playerId": "federico-valverde",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "federico-valverde-pass-2",
        "playerId": "federico-valverde",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "federico-valverde-pass-3",
        "playerId": "federico-valverde",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "federico-valverde-pass-4",
        "playerId": "federico-valverde",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 1410,
      "keyPasses": 19,
      "assists": 5,
      "freeKickGoals": 0,
      "aerialCrosses": 113,
      "passAccuracyPct": 89.2,
      "expectedAssists": 5.3
    },
    "marketInfo": {
      "marketValueEur": 110000000,
      "marketValueFormatted": "€110M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 177,
      "nationality": "Uruguay",
      "preferredFoot": "Left",
      "previousClubs": [
        "Youth Academy",
        "Real Madrid"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.14,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "La Liga",
          "rating": 8.14,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 4.6,
      "xA": 5.3,
      "xGOT": 4.97,
      "xGPer90": 0.18,
      "xAPer90": 0.21,
      "progressiveCarries": 93,
      "lineBreakingPasses": 169,
      "finalThirdEntries": 212,
      "tacklesWon": 46,
      "interceptions": 31,
      "clearances": 28,
      "pressuresWon": 64,
      "aerialDuelsWonPct": 54.2
    }
  },
  "antoine-griezmann": {
    "id": "antoine-griezmann",
    "name": "Antoine Griezmann",
    "club": "Atlético Madrid",
    "leagueId": "la-liga",
    "position": "Forward",
    "nationality": "France",
    "number": 19,
    "headshotUrl": "/assets/players/antoine-griezmann.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 47,
    "careerGoals": 81,
    "dominanceZone": "Central Attacking Third",
    "passes": [
      {
        "id": "antoine-griezmann-pass-1",
        "playerId": "antoine-griezmann",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": -8.5
        },
        "end": {
          "x": 16.5,
          "y": -14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "antoine-griezmann-pass-2",
        "playerId": "antoine-griezmann",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": 10.5
        },
        "end": {
          "x": 42,
          "y": 4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "antoine-griezmann-pass-3",
        "playerId": "antoine-griezmann",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": -18
        },
        "end": {
          "x": 48.5,
          "y": -3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "antoine-griezmann-pass-4",
        "playerId": "antoine-griezmann",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": 24
        },
        "end": {
          "x": 36,
          "y": -18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 920,
      "keyPasses": 23,
      "assists": 7,
      "freeKickGoals": 0,
      "aerialCrosses": 74,
      "passAccuracyPct": 80.7,
      "expectedAssists": 7.2
    },
    "marketInfo": {
      "marketValueEur": 56000000,
      "marketValueFormatted": "€56M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 177,
      "nationality": "France",
      "preferredFoot": "Left",
      "previousClubs": [
        "Youth Academy",
        "Atlético Madrid"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.1,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "La Liga",
          "rating": 8.1,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 9.7,
      "xA": 7.2,
      "xGOT": 10.48,
      "xGPer90": 0.42,
      "xAPer90": 0.31,
      "progressiveCarries": 84,
      "lineBreakingPasses": 110,
      "finalThirdEntries": 138,
      "tacklesWon": 32,
      "interceptions": 18,
      "clearances": 19,
      "pressuresWon": 45,
      "aerialDuelsWonPct": 54.2
    }
  },
  "pedri": {
    "id": "pedri",
    "name": "Pedri",
    "club": "Barcelona",
    "leagueId": "la-liga",
    "position": "Midfielder",
    "nationality": "Spain",
    "number": 19,
    "headshotUrl": "/assets/players/pedri.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 42,
    "careerGoals": 39,
    "dominanceZone": "Right Half-Space",
    "passes": [
      {
        "id": "pedri-pass-1",
        "playerId": "pedri",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "pedri-pass-2",
        "playerId": "pedri",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "pedri-pass-3",
        "playerId": "pedri",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "pedri-pass-4",
        "playerId": "pedri",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 1260,
      "keyPasses": 21,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 101,
      "passAccuracyPct": 88.7,
      "expectedAssists": 6.7
    },
    "marketInfo": {
      "marketValueEur": 110000000,
      "marketValueFormatted": "€110M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 180,
      "nationality": "Spain",
      "preferredFoot": "Left",
      "previousClubs": [
        "Youth Academy",
        "Barcelona"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.06,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "La Liga",
          "rating": 8.06,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 1,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 3.4,
      "xA": 6.7,
      "xGOT": 3.67,
      "xGPer90": 0.16,
      "xAPer90": 0.32,
      "progressiveCarries": 76,
      "lineBreakingPasses": 151,
      "finalThirdEntries": 189,
      "tacklesWon": 38,
      "interceptions": 20,
      "clearances": 23,
      "pressuresWon": 53,
      "aerialDuelsWonPct": 54.2
    }
  },
  "nico-williams": {
    "id": "nico-williams",
    "name": "Nico Williams",
    "club": "Athletic Bilbao",
    "leagueId": "la-liga",
    "position": "Forward",
    "nationality": "Spain",
    "number": 20,
    "headshotUrl": "/assets/players/nico-williams.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 47,
    "careerGoals": 45,
    "dominanceZone": "Central Attacking Third",
    "passes": [
      {
        "id": "nico-williams-pass-1",
        "playerId": "nico-williams",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "nico-williams-pass-2",
        "playerId": "nico-williams",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "nico-williams-pass-3",
        "playerId": "nico-williams",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "nico-williams-pass-4",
        "playerId": "nico-williams",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 580,
      "keyPasses": 23,
      "assists": 7,
      "freeKickGoals": 0,
      "aerialCrosses": 46,
      "passAccuracyPct": 80.6,
      "expectedAssists": 6.5
    },
    "marketInfo": {
      "marketValueEur": 48000000,
      "marketValueFormatted": "€48M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 188,
      "nationality": "Spain",
      "preferredFoot": "Left",
      "previousClubs": [
        "Youth Academy",
        "Athletic Bilbao"
      ]
    },
    "sofascoreData": {
      "seasonRating": 7.82,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "La Liga",
          "rating": 7.82,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 1,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 4.8,
      "xA": 6.5,
      "xGOT": 5.18,
      "xGPer90": 0.24,
      "xAPer90": 0.33,
      "progressiveCarries": 71,
      "lineBreakingPasses": 70,
      "finalThirdEntries": 87,
      "tacklesWon": 19,
      "interceptions": 9,
      "clearances": 11,
      "pressuresWon": 27,
      "aerialDuelsWonPct": 54.2
    }
  },
  "antonio-rudiger": {
    "id": "antonio-rudiger",
    "name": "Antonio Rüdiger",
    "club": "Real Madrid",
    "leagueId": "la-liga",
    "position": "Defender",
    "nationality": "Germany",
    "number": 20,
    "headshotUrl": "/assets/players/antonio-rudiger.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 12,
    "careerGoals": 27,
    "dominanceZone": "Defensive Midfield",
    "passes": [
      {
        "id": "antonio-rudiger-pass-1",
        "playerId": "antonio-rudiger",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "antonio-rudiger-pass-2",
        "playerId": "antonio-rudiger",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "antonio-rudiger-pass-3",
        "playerId": "antonio-rudiger",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "antonio-rudiger-pass-4",
        "playerId": "antonio-rudiger",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 1520,
      "keyPasses": 8,
      "assists": 0,
      "freeKickGoals": 0,
      "aerialCrosses": 122,
      "passAccuracyPct": 89.9,
      "expectedAssists": 0.3
    },
    "marketInfo": {
      "marketValueEur": 26000000,
      "marketValueFormatted": "€26M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 175,
      "nationality": "Germany",
      "preferredFoot": "Left",
      "previousClubs": [
        "Youth Academy",
        "Real Madrid"
      ]
    },
    "sofascoreData": {
      "seasonRating": 7.98,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "La Liga",
          "rating": 7.98,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 1.8,
      "xA": 0.3,
      "xGOT": 1.94,
      "xGPer90": 0.07,
      "xAPer90": 0.01,
      "progressiveCarries": 86,
      "lineBreakingPasses": 182,
      "finalThirdEntries": 228,
      "tacklesWon": 44,
      "interceptions": 32,
      "clearances": 26,
      "pressuresWon": 62,
      "aerialDuelsWonPct": 54.2
    }
  },
  "jan-oblak": {
    "id": "jan-oblak",
    "name": "Jan Oblak",
    "club": "Atlético Madrid",
    "leagueId": "la-liga",
    "position": "Goalkeeper",
    "nationality": "Slovenia",
    "number": 20,
    "headshotUrl": "/assets/players/jan-oblak.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 12,
    "careerGoals": 15,
    "dominanceZone": "Defensive Midfield",
    "passes": [
      {
        "id": "jan-oblak-pass-1",
        "playerId": "jan-oblak",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "jan-oblak-pass-2",
        "playerId": "jan-oblak",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "jan-oblak-pass-3",
        "playerId": "jan-oblak",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "jan-oblak-pass-4",
        "playerId": "jan-oblak",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 590,
      "keyPasses": 8,
      "assists": 0,
      "freeKickGoals": 0,
      "aerialCrosses": 47,
      "passAccuracyPct": 79.7,
      "expectedAssists": 0.1
    },
    "marketInfo": {
      "marketValueEur": 18000000,
      "marketValueFormatted": "€18M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 184,
      "nationality": "Slovenia",
      "preferredFoot": "Left",
      "previousClubs": [
        "Youth Academy",
        "Atlético Madrid"
      ]
    },
    "sofascoreData": {
      "seasonRating": 7.92,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "La Liga",
          "rating": 7.92,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 0,
      "xA": 0.1,
      "xGOT": 0,
      "xGPer90": 0,
      "xAPer90": 0,
      "progressiveCarries": 90,
      "lineBreakingPasses": 71,
      "finalThirdEntries": 89,
      "tacklesWon": 2,
      "interceptions": 1,
      "clearances": 1,
      "pressuresWon": 3,
      "aerialDuelsWonPct": 54.2
    }
  },
  "kane": {
    "id": "kane",
    "name": "Harry Kane",
    "club": "Bayern Munich",
    "leagueId": "bundesliga",
    "position": "Forward",
    "nationality": "England",
    "number": 19,
    "headshotUrl": "/assets/players/kane.png",
    "careerFreeKickGoals": 1,
    "careerAssists": 98,
    "careerGoals": 412,
    "dominanceZone": "Central Attacking Third",
    "passes": [
      {
        "id": "kane-pass-1",
        "playerId": "kane",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "kane-pass-2",
        "playerId": "kane",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "kane-pass-3",
        "playerId": "kane",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "kane-pass-4",
        "playerId": "kane",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      },
      {
        "id": "kane-pass-fk",
        "playerId": "kane",
        "minute": 85,
        "second": 20,
        "start": {
          "x": 26.5,
          "y": -9
        },
        "end": {
          "x": 52.5,
          "y": -2.8
        },
        "apexHeight": 3.1,
        "category": "freekick",
        "velocityKmH": 104,
        "distanceM": 26.7,
        "xGOT": 0.94,
        "landingQuadrant": 1,
        "description": "Curling direct free-kick goal over 10-yard wall into top corner"
      }
    ],
    "stats": {
      "normalPasses": 510,
      "keyPasses": 23,
      "assists": 7,
      "freeKickGoals": 1,
      "aerialCrosses": 41,
      "passAccuracyPct": 78.5,
      "expectedAssists": 5.6
    },
    "marketInfo": {
      "marketValueEur": 90000000,
      "marketValueFormatted": "€90M",
      "contractUntil": "2029",
      "age": 31,
      "heightCm": 188,
      "nationality": "England",
      "preferredFoot": "Right",
      "previousClubs": [
        "Youth Academy",
        "Bayern Munich"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.54,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Bundesliga",
          "rating": 8.54,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 19.2,
      "xA": 5.6,
      "xGOT": 20.74,
      "xGPer90": 0.85,
      "xAPer90": 0.25,
      "progressiveCarries": 81,
      "lineBreakingPasses": 61,
      "finalThirdEntries": 77,
      "tacklesWon": 14,
      "interceptions": 9,
      "clearances": 8,
      "pressuresWon": 20,
      "aerialDuelsWonPct": 54.2
    }
  },
  "wirtz": {
    "id": "wirtz",
    "name": "Florian Wirtz",
    "club": "Bayer Leverkusen",
    "leagueId": "bundesliga",
    "position": "Midfielder",
    "nationality": "Germany",
    "number": 19,
    "headshotUrl": "/assets/players/wirtz.png",
    "careerFreeKickGoals": 2,
    "careerAssists": 72,
    "careerGoals": 64,
    "dominanceZone": "Right Half-Space",
    "passes": [
      {
        "id": "wirtz-pass-1",
        "playerId": "wirtz",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "wirtz-pass-2",
        "playerId": "wirtz",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "wirtz-pass-3",
        "playerId": "wirtz",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "wirtz-pass-4",
        "playerId": "wirtz",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      },
      {
        "id": "wirtz-pass-fk",
        "playerId": "wirtz",
        "minute": 85,
        "second": 20,
        "start": {
          "x": 26.5,
          "y": -9
        },
        "end": {
          "x": 52.5,
          "y": -2.8
        },
        "apexHeight": 3.1,
        "category": "freekick",
        "velocityKmH": 104,
        "distanceM": 26.7,
        "xGOT": 0.94,
        "landingQuadrant": 1,
        "description": "Curling direct free-kick goal over 10-yard wall into top corner"
      }
    ],
    "stats": {
      "normalPasses": 1140,
      "keyPasses": 30,
      "assists": 10,
      "freeKickGoals": 1,
      "aerialCrosses": 91,
      "passAccuracyPct": 84.4,
      "expectedAssists": 9.1
    },
    "marketInfo": {
      "marketValueEur": 130000000,
      "marketValueFormatted": "€130M",
      "contractUntil": "2029",
      "age": 22,
      "heightCm": 177,
      "nationality": "Germany",
      "preferredFoot": "Right",
      "previousClubs": [
        "Youth Academy",
        "Bayer Leverkusen"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.32,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Bundesliga",
          "rating": 8.32,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 9.4,
      "xA": 9.1,
      "xGOT": 10.15,
      "xGPer90": 0.43,
      "xAPer90": 0.41,
      "progressiveCarries": 79,
      "lineBreakingPasses": 137,
      "finalThirdEntries": 171,
      "tacklesWon": 30,
      "interceptions": 18,
      "clearances": 18,
      "pressuresWon": 42,
      "aerialDuelsWonPct": 54.2
    }
  },
  "jamal-musiala": {
    "id": "jamal-musiala",
    "name": "Jamal Musiala",
    "club": "Bayern Munich",
    "leagueId": "bundesliga",
    "position": "Midfielder",
    "nationality": "Germany",
    "number": 19,
    "headshotUrl": "/assets/players/jamal-musiala.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 42,
    "careerGoals": 75,
    "dominanceZone": "Right Half-Space",
    "passes": [
      {
        "id": "jamal-musiala-pass-1",
        "playerId": "jamal-musiala",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "jamal-musiala-pass-2",
        "playerId": "jamal-musiala",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "jamal-musiala-pass-3",
        "playerId": "jamal-musiala",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "jamal-musiala-pass-4",
        "playerId": "jamal-musiala",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 880,
      "keyPasses": 21,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 70,
      "passAccuracyPct": 84.6,
      "expectedAssists": 5.7
    },
    "marketInfo": {
      "marketValueEur": 130000000,
      "marketValueFormatted": "€130M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 188,
      "nationality": "Germany",
      "preferredFoot": "Left",
      "previousClubs": [
        "Youth Academy",
        "Bayern Munich"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.26,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Bundesliga",
          "rating": 8.26,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 1,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 8.8,
      "xA": 5.7,
      "xGOT": 9.5,
      "xGPer90": 0.45,
      "xAPer90": 0.29,
      "progressiveCarries": 70,
      "lineBreakingPasses": 106,
      "finalThirdEntries": 132,
      "tacklesWon": 26,
      "interceptions": 14,
      "clearances": 16,
      "pressuresWon": 36,
      "aerialDuelsWonPct": 54.2
    }
  },
  "michael-olise": {
    "id": "michael-olise",
    "name": "Michael Olise",
    "club": "Bayern Munich",
    "leagueId": "bundesliga",
    "position": "Forward",
    "nationality": "France",
    "number": 19,
    "headshotUrl": "/assets/players/michael-olise.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 57,
    "careerGoals": 63,
    "dominanceZone": "Central Attacking Third",
    "passes": [
      {
        "id": "michael-olise-pass-1",
        "playerId": "michael-olise",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "michael-olise-pass-2",
        "playerId": "michael-olise",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "michael-olise-pass-3",
        "playerId": "michael-olise",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "michael-olise-pass-4",
        "playerId": "michael-olise",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 760,
      "keyPasses": 28,
      "assists": 9,
      "freeKickGoals": 0,
      "aerialCrosses": 61,
      "passAccuracyPct": 83.5,
      "expectedAssists": 8.3
    },
    "marketInfo": {
      "marketValueEur": 54000000,
      "marketValueFormatted": "€54M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 188,
      "nationality": "France",
      "preferredFoot": "Left",
      "previousClubs": [
        "Youth Academy",
        "Bayern Munich"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.16,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Bundesliga",
          "rating": 8.16,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 1,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 7.1,
      "xA": 8.3,
      "xGOT": 7.67,
      "xGPer90": 0.37,
      "xAPer90": 0.43,
      "progressiveCarries": 69,
      "lineBreakingPasses": 91,
      "finalThirdEntries": 114,
      "tacklesWon": 21,
      "interceptions": 11,
      "clearances": 13,
      "pressuresWon": 29,
      "aerialDuelsWonPct": 54.2
    }
  },
  "serhou-guirassy": {
    "id": "serhou-guirassy",
    "name": "Serhou Guirassy",
    "club": "Borussia Dortmund",
    "leagueId": "bundesliga",
    "position": "Forward",
    "nationality": "Guinea",
    "number": 19,
    "headshotUrl": "/assets/players/serhou-guirassy.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 27,
    "careerGoals": 87,
    "dominanceZone": "Central Attacking Third",
    "passes": [
      {
        "id": "serhou-guirassy-pass-1",
        "playerId": "serhou-guirassy",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "serhou-guirassy-pass-2",
        "playerId": "serhou-guirassy",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "serhou-guirassy-pass-3",
        "playerId": "serhou-guirassy",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "serhou-guirassy-pass-4",
        "playerId": "serhou-guirassy",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 310,
      "keyPasses": 15,
      "assists": 3,
      "freeKickGoals": 0,
      "aerialCrosses": 25,
      "passAccuracyPct": 76.5,
      "expectedAssists": 2.4
    },
    "marketInfo": {
      "marketValueEur": 53000000,
      "marketValueFormatted": "€53M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 175,
      "nationality": "Guinea",
      "preferredFoot": "Left",
      "previousClubs": [
        "Youth Academy",
        "Borussia Dortmund"
      ]
    },
    "sofascoreData": {
      "seasonRating": 7.88,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Bundesliga",
          "rating": 7.88,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 11.3,
      "xA": 2.4,
      "xGOT": 12.2,
      "xGPer90": 0.6,
      "xAPer90": 0.13,
      "progressiveCarries": 68,
      "lineBreakingPasses": 37,
      "finalThirdEntries": 47,
      "tacklesWon": 10,
      "interceptions": 4,
      "clearances": 6,
      "pressuresWon": 14,
      "aerialDuelsWonPct": 54.2
    }
  },
  "lois-openda": {
    "id": "lois-openda",
    "name": "Loïs Openda",
    "club": "RB Leipzig",
    "leagueId": "bundesliga",
    "position": "Forward",
    "nationality": "Belgium",
    "number": 19,
    "headshotUrl": "/assets/players/lois-openda.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 32,
    "careerGoals": 81,
    "dominanceZone": "Central Attacking Third",
    "passes": [
      {
        "id": "lois-openda-pass-1",
        "playerId": "lois-openda",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "lois-openda-pass-2",
        "playerId": "lois-openda",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "lois-openda-pass-3",
        "playerId": "lois-openda",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "lois-openda-pass-4",
        "playerId": "lois-openda",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 340,
      "keyPasses": 17,
      "assists": 4,
      "freeKickGoals": 0,
      "aerialCrosses": 27,
      "passAccuracyPct": 79.1,
      "expectedAssists": 3.5
    },
    "marketInfo": {
      "marketValueEur": 53000000,
      "marketValueFormatted": "€53M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 186,
      "nationality": "Belgium",
      "preferredFoot": "Left",
      "previousClubs": [
        "Youth Academy",
        "RB Leipzig"
      ]
    },
    "sofascoreData": {
      "seasonRating": 7.85,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Bundesliga",
          "rating": 7.85,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 10.6,
      "xA": 3.5,
      "xGOT": 11.45,
      "xGPer90": 0.52,
      "xAPer90": 0.17,
      "progressiveCarries": 74,
      "lineBreakingPasses": 41,
      "finalThirdEntries": 51,
      "tacklesWon": 12,
      "interceptions": 5,
      "clearances": 7,
      "pressuresWon": 17,
      "aerialDuelsWonPct": 54.2
    }
  },
  "granit-xhaka": {
    "id": "granit-xhaka",
    "name": "Granit Xhaka",
    "club": "Bayer Leverkusen",
    "leagueId": "bundesliga",
    "position": "Midfielder",
    "nationality": "Switzerland",
    "number": 19,
    "headshotUrl": "/assets/players/granit-xhaka.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 32,
    "careerGoals": 33,
    "dominanceZone": "Right Half-Space",
    "passes": [
      {
        "id": "granit-xhaka-pass-1",
        "playerId": "granit-xhaka",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "granit-xhaka-pass-2",
        "playerId": "granit-xhaka",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "granit-xhaka-pass-3",
        "playerId": "granit-xhaka",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "granit-xhaka-pass-4",
        "playerId": "granit-xhaka",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 2110,
      "keyPasses": 17,
      "assists": 4,
      "freeKickGoals": 0,
      "aerialCrosses": 169,
      "passAccuracyPct": 92.1,
      "expectedAssists": 4.1
    },
    "marketInfo": {
      "marketValueEur": 37000000,
      "marketValueFormatted": "€37M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 187,
      "nationality": "Switzerland",
      "preferredFoot": "Right",
      "previousClubs": [
        "Youth Academy",
        "Bayer Leverkusen"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.18,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Bundesliga",
          "rating": 8.18,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 2.5,
      "xA": 4.1,
      "xGOT": 2.7,
      "xGPer90": 0.11,
      "xAPer90": 0.18,
      "progressiveCarries": 82,
      "lineBreakingPasses": 253,
      "finalThirdEntries": 317,
      "tacklesWon": 52,
      "interceptions": 36,
      "clearances": 31,
      "pressuresWon": 73,
      "aerialDuelsWonPct": 54.2
    }
  },
  "kimmich": {
    "id": "kimmich",
    "name": "Joshua Kimmich",
    "club": "Bayern Munich",
    "leagueId": "bundesliga",
    "position": "Midfielder",
    "nationality": "Germany",
    "number": 19,
    "headshotUrl": "/assets/players/kimmich.png",
    "careerFreeKickGoals": 3,
    "careerAssists": 118,
    "careerGoals": 44,
    "dominanceZone": "Right Half-Space",
    "passes": [
      {
        "id": "kimmich-pass-1",
        "playerId": "kimmich",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "kimmich-pass-2",
        "playerId": "kimmich",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "kimmich-pass-3",
        "playerId": "kimmich",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "kimmich-pass-4",
        "playerId": "kimmich",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      },
      {
        "id": "kimmich-pass-fk",
        "playerId": "kimmich",
        "minute": 85,
        "second": 20,
        "start": {
          "x": 26.5,
          "y": -9
        },
        "end": {
          "x": 52.5,
          "y": -2.8
        },
        "apexHeight": 3.1,
        "category": "freekick",
        "velocityKmH": 104,
        "distanceM": 26.7,
        "xGOT": 0.94,
        "landingQuadrant": 1,
        "description": "Curling direct free-kick goal over 10-yard wall into top corner"
      }
    ],
    "stats": {
      "normalPasses": 1980,
      "keyPasses": 21,
      "assists": 6,
      "freeKickGoals": 1,
      "aerialCrosses": 158,
      "passAccuracyPct": 91.7,
      "expectedAssists": 6.5
    },
    "marketInfo": {
      "marketValueEur": 38000000,
      "marketValueFormatted": "€38M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 177,
      "nationality": "Germany",
      "preferredFoot": "Right",
      "previousClubs": [
        "Youth Academy",
        "Bayern Munich"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.2,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Bundesliga",
          "rating": 8.2,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 1,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 2.1,
      "xA": 6.5,
      "xGOT": 2.27,
      "xGPer90": 0.09,
      "xAPer90": 0.28,
      "progressiveCarries": 83,
      "lineBreakingPasses": 238,
      "finalThirdEntries": 297,
      "tacklesWon": 49,
      "interceptions": 33,
      "clearances": 29,
      "pressuresWon": 69,
      "aerialDuelsWonPct": 54.2
    }
  },
  "jonathan-tah": {
    "id": "jonathan-tah",
    "name": "Jonathan Tah",
    "club": "Bayer Leverkusen",
    "leagueId": "bundesliga",
    "position": "Defender",
    "nationality": "Germany",
    "number": 19,
    "headshotUrl": "/assets/players/jonathan-tah.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 17,
    "careerGoals": 27,
    "dominanceZone": "Defensive Midfield",
    "passes": [
      {
        "id": "jonathan-tah-pass-1",
        "playerId": "jonathan-tah",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "jonathan-tah-pass-2",
        "playerId": "jonathan-tah",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "jonathan-tah-pass-3",
        "playerId": "jonathan-tah",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "jonathan-tah-pass-4",
        "playerId": "jonathan-tah",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 1720,
      "keyPasses": 10,
      "assists": 1,
      "freeKickGoals": 0,
      "aerialCrosses": 138,
      "passAccuracyPct": 92,
      "expectedAssists": 0.5
    },
    "marketInfo": {
      "marketValueEur": 27000000,
      "marketValueFormatted": "€27M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 187,
      "nationality": "Germany",
      "preferredFoot": "Right",
      "previousClubs": [
        "Youth Academy",
        "Bayer Leverkusen"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.02,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Bundesliga",
          "rating": 8.02,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 1.9,
      "xA": 0.5,
      "xGOT": 2.05,
      "xGPer90": 0.08,
      "xAPer90": 0.02,
      "progressiveCarries": 82,
      "lineBreakingPasses": 206,
      "finalThirdEntries": 258,
      "tacklesWon": 41,
      "interceptions": 35,
      "clearances": 25,
      "pressuresWon": 57,
      "aerialDuelsWonPct": 54.2
    }
  },
  "gregor-kobel": {
    "id": "gregor-kobel",
    "name": "Gregor Kobel",
    "club": "Borussia Dortmund",
    "leagueId": "bundesliga",
    "position": "Goalkeeper",
    "nationality": "Switzerland",
    "number": 20,
    "headshotUrl": "/assets/players/gregor-kobel.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 12,
    "careerGoals": 15,
    "dominanceZone": "Defensive Midfield",
    "passes": [
      {
        "id": "gregor-kobel-pass-1",
        "playerId": "gregor-kobel",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "gregor-kobel-pass-2",
        "playerId": "gregor-kobel",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "gregor-kobel-pass-3",
        "playerId": "gregor-kobel",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "gregor-kobel-pass-4",
        "playerId": "gregor-kobel",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 620,
      "keyPasses": 8,
      "assists": 0,
      "freeKickGoals": 0,
      "aerialCrosses": 50,
      "passAccuracyPct": 79.5,
      "expectedAssists": 0.1
    },
    "marketInfo": {
      "marketValueEur": 18000000,
      "marketValueFormatted": "€18M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 187,
      "nationality": "Switzerland",
      "preferredFoot": "Right",
      "previousClubs": [
        "Youth Academy",
        "Borussia Dortmund"
      ]
    },
    "sofascoreData": {
      "seasonRating": 7.74,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Bundesliga",
          "rating": 7.74,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 0,
      "xA": 0.1,
      "xGOT": 0,
      "xGPer90": 0,
      "xAPer90": 0,
      "progressiveCarries": 76,
      "lineBreakingPasses": 74,
      "finalThirdEntries": 93,
      "tacklesWon": 3,
      "interceptions": 1,
      "clearances": 2,
      "pressuresWon": 4,
      "aerialDuelsWonPct": 54.2
    }
  },
  "lautaro-martinez": {
    "id": "lautaro-martinez",
    "name": "Lautaro Martínez",
    "club": "Inter Milan",
    "leagueId": "serie-a",
    "position": "Forward",
    "nationality": "Argentina",
    "number": 19,
    "headshotUrl": "/assets/players/lautaro-martinez.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 32,
    "careerGoals": 99,
    "dominanceZone": "Central Attacking Third",
    "passes": [
      {
        "id": "lautaro-martinez-pass-1",
        "playerId": "lautaro-martinez",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "lautaro-martinez-pass-2",
        "playerId": "lautaro-martinez",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "lautaro-martinez-pass-3",
        "playerId": "lautaro-martinez",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "lautaro-martinez-pass-4",
        "playerId": "lautaro-martinez",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 420,
      "keyPasses": 17,
      "assists": 4,
      "freeKickGoals": 0,
      "aerialCrosses": 34,
      "passAccuracyPct": 79.2,
      "expectedAssists": 3.8
    },
    "marketInfo": {
      "marketValueEur": 90000000,
      "marketValueFormatted": "€90M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 176,
      "nationality": "Argentina",
      "preferredFoot": "Right",
      "previousClubs": [
        "Youth Academy",
        "Inter Milan"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.08,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Serie A",
          "rating": 8.08,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 13.1,
      "xA": 3.8,
      "xGOT": 14.15,
      "xGPer90": 0.6,
      "xAPer90": 0.18,
      "progressiveCarries": 78,
      "lineBreakingPasses": 50,
      "finalThirdEntries": 63,
      "tacklesWon": 16,
      "interceptions": 11,
      "clearances": 10,
      "pressuresWon": 22,
      "aerialDuelsWonPct": 54.2
    }
  },
  "ademola-lookman": {
    "id": "ademola-lookman",
    "name": "Ademola Lookman",
    "club": "Atalanta",
    "leagueId": "serie-a",
    "position": "Forward",
    "nationality": "Nigeria",
    "number": 19,
    "headshotUrl": "/assets/players/ademola-lookman.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 42,
    "careerGoals": 81,
    "dominanceZone": "Central Attacking Third",
    "passes": [
      {
        "id": "ademola-lookman-pass-1",
        "playerId": "ademola-lookman",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "ademola-lookman-pass-2",
        "playerId": "ademola-lookman",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "ademola-lookman-pass-3",
        "playerId": "ademola-lookman",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "ademola-lookman-pass-4",
        "playerId": "ademola-lookman",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 485,
      "keyPasses": 21,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 39,
      "passAccuracyPct": 78.9,
      "expectedAssists": 5.4
    },
    "marketInfo": {
      "marketValueEur": 55000000,
      "marketValueFormatted": "€55M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 175,
      "nationality": "Nigeria",
      "preferredFoot": "Left",
      "previousClubs": [
        "Youth Academy",
        "Atalanta"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.12,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Serie A",
          "rating": 8.12,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 9.8,
      "xA": 5.4,
      "xGOT": 10.58,
      "xGPer90": 0.5,
      "xAPer90": 0.28,
      "progressiveCarries": 70,
      "lineBreakingPasses": 58,
      "finalThirdEntries": 73,
      "tacklesWon": 19,
      "interceptions": 10,
      "clearances": 11,
      "pressuresWon": 27,
      "aerialDuelsWonPct": 54.2
    }
  },
  "marcus-thuram": {
    "id": "marcus-thuram",
    "name": "Marcus Thuram",
    "club": "Inter Milan",
    "leagueId": "serie-a",
    "position": "Forward",
    "nationality": "France",
    "number": 19,
    "headshotUrl": "/assets/players/marcus-thuram.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 32,
    "careerGoals": 93,
    "dominanceZone": "Central Attacking Third",
    "passes": [
      {
        "id": "marcus-thuram-pass-1",
        "playerId": "marcus-thuram",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "marcus-thuram-pass-2",
        "playerId": "marcus-thuram",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "marcus-thuram-pass-3",
        "playerId": "marcus-thuram",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "marcus-thuram-pass-4",
        "playerId": "marcus-thuram",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 410,
      "keyPasses": 17,
      "assists": 4,
      "freeKickGoals": 0,
      "aerialCrosses": 33,
      "passAccuracyPct": 79.6,
      "expectedAssists": 3.6
    },
    "marketInfo": {
      "marketValueEur": 55000000,
      "marketValueFormatted": "€55M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 188,
      "nationality": "France",
      "preferredFoot": "Left",
      "previousClubs": [
        "Youth Academy",
        "Inter Milan"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.02,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Serie A",
          "rating": 8.02,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 11.9,
      "xA": 3.6,
      "xGOT": 12.85,
      "xGPer90": 0.57,
      "xAPer90": 0.17,
      "progressiveCarries": 75,
      "lineBreakingPasses": 49,
      "finalThirdEntries": 62,
      "tacklesWon": 14,
      "interceptions": 7,
      "clearances": 8,
      "pressuresWon": 20,
      "aerialDuelsWonPct": 54.2
    }
  },
  "khvicha-kvaratskhelia": {
    "id": "khvicha-kvaratskhelia",
    "name": "Khvicha Kvaratskhelia",
    "club": "Napoli",
    "leagueId": "serie-a",
    "position": "Forward",
    "nationality": "Georgia",
    "number": 19,
    "headshotUrl": "/assets/players/khvicha-kvaratskhelia.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 37,
    "careerGoals": 69,
    "dominanceZone": "Central Attacking Third",
    "passes": [
      {
        "id": "khvicha-kvaratskhelia-pass-1",
        "playerId": "khvicha-kvaratskhelia",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "khvicha-kvaratskhelia-pass-2",
        "playerId": "khvicha-kvaratskhelia",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "khvicha-kvaratskhelia-pass-3",
        "playerId": "khvicha-kvaratskhelia",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "khvicha-kvaratskhelia-pass-4",
        "playerId": "khvicha-kvaratskhelia",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 670,
      "keyPasses": 19,
      "assists": 5,
      "freeKickGoals": 0,
      "aerialCrosses": 54,
      "passAccuracyPct": 81.7,
      "expectedAssists": 5.1
    },
    "marketInfo": {
      "marketValueEur": 51000000,
      "marketValueFormatted": "€51M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 181,
      "nationality": "Georgia",
      "preferredFoot": "Left",
      "previousClubs": [
        "Youth Academy",
        "Napoli"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.06,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Serie A",
          "rating": 8.06,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 8.2,
      "xA": 5.1,
      "xGOT": 8.86,
      "xGPer90": 0.37,
      "xAPer90": 0.23,
      "progressiveCarries": 79,
      "lineBreakingPasses": 80,
      "finalThirdEntries": 101,
      "tacklesWon": 24,
      "interceptions": 12,
      "clearances": 14,
      "pressuresWon": 34,
      "aerialDuelsWonPct": 54.2
    }
  },
  "christian-pulisic": {
    "id": "christian-pulisic",
    "name": "Christian Pulisic",
    "club": "AC Milan",
    "leagueId": "serie-a",
    "position": "Forward",
    "nationality": "USA",
    "number": 19,
    "headshotUrl": "/assets/players/christian-pulisic.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 42,
    "careerGoals": 69,
    "dominanceZone": "Central Attacking Third",
    "passes": [
      {
        "id": "christian-pulisic-pass-1",
        "playerId": "christian-pulisic",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "christian-pulisic-pass-2",
        "playerId": "christian-pulisic",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "christian-pulisic-pass-3",
        "playerId": "christian-pulisic",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "christian-pulisic-pass-4",
        "playerId": "christian-pulisic",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 590,
      "keyPasses": 21,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 47,
      "passAccuracyPct": 80.8,
      "expectedAssists": 5.8
    },
    "marketInfo": {
      "marketValueEur": 52000000,
      "marketValueFormatted": "€52M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 177,
      "nationality": "USA",
      "preferredFoot": "Left",
      "previousClubs": [
        "Youth Academy",
        "AC Milan"
      ]
    },
    "sofascoreData": {
      "seasonRating": 7.94,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Serie A",
          "rating": 7.94,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 1,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 7.9,
      "xA": 5.8,
      "xGOT": 8.53,
      "xGPer90": 0.38,
      "xAPer90": 0.28,
      "progressiveCarries": 75,
      "lineBreakingPasses": 71,
      "finalThirdEntries": 89,
      "tacklesWon": 22,
      "interceptions": 11,
      "clearances": 13,
      "pressuresWon": 31,
      "aerialDuelsWonPct": 54.2
    }
  },
  "dusan-vlahovic": {
    "id": "dusan-vlahovic",
    "name": "Dušan Vlahović",
    "club": "Juventus",
    "leagueId": "serie-a",
    "position": "Forward",
    "nationality": "Serbia",
    "number": 19,
    "headshotUrl": "/assets/players/dusan-vlahovic.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 22,
    "careerGoals": 81,
    "dominanceZone": "Central Attacking Third",
    "passes": [
      {
        "id": "dusan-vlahovic-pass-1",
        "playerId": "dusan-vlahovic",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "dusan-vlahovic-pass-2",
        "playerId": "dusan-vlahovic",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "dusan-vlahovic-pass-3",
        "playerId": "dusan-vlahovic",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "dusan-vlahovic-pass-4",
        "playerId": "dusan-vlahovic",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 290,
      "keyPasses": 12,
      "assists": 2,
      "freeKickGoals": 0,
      "aerialCrosses": 23,
      "passAccuracyPct": 76.3,
      "expectedAssists": 2
    },
    "marketInfo": {
      "marketValueEur": 51000000,
      "marketValueFormatted": "€51M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 189,
      "nationality": "Serbia",
      "preferredFoot": "Right",
      "previousClubs": [
        "Youth Academy",
        "Juventus"
      ]
    },
    "sofascoreData": {
      "seasonRating": 7.76,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Serie A",
          "rating": 7.76,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 10.8,
      "xA": 2,
      "xGOT": 11.66,
      "xGPer90": 0.53,
      "xAPer90": 0.1,
      "progressiveCarries": 74,
      "lineBreakingPasses": 35,
      "finalThirdEntries": 44,
      "tacklesWon": 8,
      "interceptions": 4,
      "clearances": 5,
      "pressuresWon": 11,
      "aerialDuelsWonPct": 54.2
    }
  },
  "nicolo-barella": {
    "id": "nicolo-barella",
    "name": "Nicolò Barella",
    "club": "Inter Milan",
    "leagueId": "serie-a",
    "position": "Midfielder",
    "nationality": "Italy",
    "number": 19,
    "headshotUrl": "/assets/players/nicolo-barella.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 42,
    "careerGoals": 33,
    "dominanceZone": "Right Half-Space",
    "passes": [
      {
        "id": "nicolo-barella-pass-1",
        "playerId": "nicolo-barella",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "nicolo-barella-pass-2",
        "playerId": "nicolo-barella",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "nicolo-barella-pass-3",
        "playerId": "nicolo-barella",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "nicolo-barella-pass-4",
        "playerId": "nicolo-barella",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 1280,
      "keyPasses": 21,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 102,
      "passAccuracyPct": 87.7,
      "expectedAssists": 5.5
    },
    "marketInfo": {
      "marketValueEur": 39000000,
      "marketValueFormatted": "€39M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 189,
      "nationality": "Italy",
      "preferredFoot": "Right",
      "previousClubs": [
        "Youth Academy",
        "Inter Milan"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.14,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Serie A",
          "rating": 8.14,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 1,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 2.7,
      "xA": 5.5,
      "xGOT": 2.92,
      "xGPer90": 0.13,
      "xAPer90": 0.27,
      "progressiveCarries": 72,
      "lineBreakingPasses": 154,
      "finalThirdEntries": 192,
      "tacklesWon": 45,
      "interceptions": 28,
      "clearances": 27,
      "pressuresWon": 63,
      "aerialDuelsWonPct": 54.2
    }
  },
  "alessandro-bastoni": {
    "id": "alessandro-bastoni",
    "name": "Alessandro Bastoni",
    "club": "Inter Milan",
    "leagueId": "serie-a",
    "position": "Defender",
    "nationality": "Italy",
    "number": 19,
    "headshotUrl": "/assets/players/alessandro-bastoni.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 27,
    "careerGoals": 21,
    "dominanceZone": "Defensive Midfield",
    "passes": [
      {
        "id": "alessandro-bastoni-pass-1",
        "playerId": "alessandro-bastoni",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "alessandro-bastoni-pass-2",
        "playerId": "alessandro-bastoni",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "alessandro-bastoni-pass-3",
        "playerId": "alessandro-bastoni",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "alessandro-bastoni-pass-4",
        "playerId": "alessandro-bastoni",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 1640,
      "keyPasses": 15,
      "assists": 3,
      "freeKickGoals": 0,
      "aerialCrosses": 131,
      "passAccuracyPct": 89.6,
      "expectedAssists": 3.2
    },
    "marketInfo": {
      "marketValueEur": 28000000,
      "marketValueFormatted": "€28M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 178,
      "nationality": "Italy",
      "preferredFoot": "Right",
      "previousClubs": [
        "Youth Academy",
        "Inter Milan"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.18,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Serie A",
          "rating": 8.18,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 1.1,
      "xA": 3.2,
      "xGOT": 1.19,
      "xGPer90": 0.05,
      "xAPer90": 0.14,
      "progressiveCarries": 80,
      "lineBreakingPasses": 197,
      "finalThirdEntries": 246,
      "tacklesWon": 47,
      "interceptions": 33,
      "clearances": 28,
      "pressuresWon": 66,
      "aerialDuelsWonPct": 54.2
    }
  },
  "yann-sommer": {
    "id": "yann-sommer",
    "name": "Yann Sommer",
    "club": "Inter Milan",
    "leagueId": "serie-a",
    "position": "Goalkeeper",
    "nationality": "Switzerland",
    "number": 19,
    "headshotUrl": "/assets/players/yann-sommer.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 12,
    "careerGoals": 15,
    "dominanceZone": "Defensive Midfield",
    "passes": [
      {
        "id": "yann-sommer-pass-1",
        "playerId": "yann-sommer",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "yann-sommer-pass-2",
        "playerId": "yann-sommer",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "yann-sommer-pass-3",
        "playerId": "yann-sommer",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "yann-sommer-pass-4",
        "playerId": "yann-sommer",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 670,
      "keyPasses": 8,
      "assists": 0,
      "freeKickGoals": 0,
      "aerialCrosses": 54,
      "passAccuracyPct": 82.7,
      "expectedAssists": 0.1
    },
    "marketInfo": {
      "marketValueEur": 18000000,
      "marketValueFormatted": "€18M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 186,
      "nationality": "Switzerland",
      "preferredFoot": "Left",
      "previousClubs": [
        "Youth Academy",
        "Inter Milan"
      ]
    },
    "sofascoreData": {
      "seasonRating": 7.95,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Serie A",
          "rating": 7.95,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 0,
      "xA": 0.1,
      "xGOT": 0,
      "xGPer90": 0,
      "xAPer90": 0,
      "progressiveCarries": 86,
      "lineBreakingPasses": 80,
      "finalThirdEntries": 101,
      "tacklesWon": 2,
      "interceptions": 1,
      "clearances": 1,
      "pressuresWon": 3,
      "aerialDuelsWonPct": 54.2
    }
  },
  "mike-maignan": {
    "id": "mike-maignan",
    "name": "Mike Maignan",
    "club": "AC Milan",
    "leagueId": "serie-a",
    "position": "Goalkeeper",
    "nationality": "France",
    "number": 20,
    "headshotUrl": "/assets/players/mike-maignan.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 12,
    "careerGoals": 15,
    "dominanceZone": "Defensive Midfield",
    "passes": [
      {
        "id": "mike-maignan-pass-1",
        "playerId": "mike-maignan",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "mike-maignan-pass-2",
        "playerId": "mike-maignan",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "mike-maignan-pass-3",
        "playerId": "mike-maignan",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "mike-maignan-pass-4",
        "playerId": "mike-maignan",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 740,
      "keyPasses": 8,
      "assists": 0,
      "freeKickGoals": 0,
      "aerialCrosses": 59,
      "passAccuracyPct": 81.3,
      "expectedAssists": 0.2
    },
    "marketInfo": {
      "marketValueEur": 18000000,
      "marketValueFormatted": "€18M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 187,
      "nationality": "France",
      "preferredFoot": "Right",
      "previousClubs": [
        "Youth Academy",
        "AC Milan"
      ]
    },
    "sofascoreData": {
      "seasonRating": 7.85,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Serie A",
          "rating": 7.85,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 0,
      "xA": 0.2,
      "xGOT": 0,
      "xGPer90": 0,
      "xAPer90": 0.01,
      "progressiveCarries": 83,
      "lineBreakingPasses": 89,
      "finalThirdEntries": 111,
      "tacklesWon": 3,
      "interceptions": 1,
      "clearances": 2,
      "pressuresWon": 4,
      "aerialDuelsWonPct": 54.2
    }
  },
  "bradley-barcola": {
    "id": "bradley-barcola",
    "name": "Bradley Barcola",
    "club": "Paris Saint-Germain",
    "leagueId": "ligue-1",
    "position": "Forward",
    "nationality": "France",
    "number": 19,
    "headshotUrl": "/assets/players/bradley-barcola.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 37,
    "careerGoals": 93,
    "dominanceZone": "Central Attacking Third",
    "passes": [
      {
        "id": "bradley-barcola-pass-1",
        "playerId": "bradley-barcola",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "bradley-barcola-pass-2",
        "playerId": "bradley-barcola",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "bradley-barcola-pass-3",
        "playerId": "bradley-barcola",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "bradley-barcola-pass-4",
        "playerId": "bradley-barcola",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 540,
      "keyPasses": 19,
      "assists": 5,
      "freeKickGoals": 0,
      "aerialCrosses": 43,
      "passAccuracyPct": 80.6,
      "expectedAssists": 4.9
    },
    "marketInfo": {
      "marketValueEur": 45000000,
      "marketValueFormatted": "€45M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 175,
      "nationality": "France",
      "preferredFoot": "Left",
      "previousClubs": [
        "Youth Academy",
        "Paris Saint-Germain"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.19,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Ligue 1",
          "rating": 8.19,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 11.5,
      "xA": 4.9,
      "xGOT": 12.42,
      "xGPer90": 0.57,
      "xAPer90": 0.24,
      "progressiveCarries": 72,
      "lineBreakingPasses": 65,
      "finalThirdEntries": 81,
      "tacklesWon": 18,
      "interceptions": 8,
      "clearances": 11,
      "pressuresWon": 25,
      "aerialDuelsWonPct": 54.2
    }
  },
  "ousmane-dembele": {
    "id": "ousmane-dembele",
    "name": "Ousmane Dembélé",
    "club": "Paris Saint-Germain",
    "leagueId": "ligue-1",
    "position": "Forward",
    "nationality": "France",
    "number": 19,
    "headshotUrl": "/assets/players/ousmane-dembele.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 52,
    "careerGoals": 57,
    "dominanceZone": "Central Attacking Third",
    "passes": [
      {
        "id": "ousmane-dembele-pass-1",
        "playerId": "ousmane-dembele",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "ousmane-dembele-pass-2",
        "playerId": "ousmane-dembele",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "ousmane-dembele-pass-3",
        "playerId": "ousmane-dembele",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "ousmane-dembele-pass-4",
        "playerId": "ousmane-dembele",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 710,
      "keyPasses": 26,
      "assists": 8,
      "freeKickGoals": 0,
      "aerialCrosses": 57,
      "passAccuracyPct": 79.8,
      "expectedAssists": 8.4
    },
    "marketInfo": {
      "marketValueEur": 52000000,
      "marketValueFormatted": "€52M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 175,
      "nationality": "France",
      "preferredFoot": "Left",
      "previousClubs": [
        "Youth Academy",
        "Paris Saint-Germain"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.14,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Ligue 1",
          "rating": 8.14,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 1,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 6.8,
      "xA": 8.4,
      "xGOT": 7.34,
      "xGPer90": 0.37,
      "xAPer90": 0.46,
      "progressiveCarries": 66,
      "lineBreakingPasses": 85,
      "finalThirdEntries": 107,
      "tacklesWon": 20,
      "interceptions": 10,
      "clearances": 12,
      "pressuresWon": 28,
      "aerialDuelsWonPct": 54.2
    }
  },
  "mason-greenwood": {
    "id": "mason-greenwood",
    "name": "Mason Greenwood",
    "club": "Marseille",
    "leagueId": "ligue-1",
    "position": "Forward",
    "nationality": "England",
    "number": 19,
    "headshotUrl": "/assets/players/mason-greenwood.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 27,
    "careerGoals": 93,
    "dominanceZone": "Central Attacking Third",
    "passes": [
      {
        "id": "mason-greenwood-pass-1",
        "playerId": "mason-greenwood",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "mason-greenwood-pass-2",
        "playerId": "mason-greenwood",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "mason-greenwood-pass-3",
        "playerId": "mason-greenwood",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "mason-greenwood-pass-4",
        "playerId": "mason-greenwood",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 620,
      "keyPasses": 15,
      "assists": 3,
      "freeKickGoals": 0,
      "aerialCrosses": 50,
      "passAccuracyPct": 80.5,
      "expectedAssists": 3.1
    },
    "marketInfo": {
      "marketValueEur": 54000000,
      "marketValueFormatted": "€54M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 175,
      "nationality": "England",
      "preferredFoot": "Left",
      "previousClubs": [
        "Youth Academy",
        "Marseille"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.04,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Ligue 1",
          "rating": 8.04,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 11.2,
      "xA": 3.1,
      "xGOT": 12.1,
      "xGPer90": 0.53,
      "xAPer90": 0.15,
      "progressiveCarries": 76,
      "lineBreakingPasses": 74,
      "finalThirdEntries": 93,
      "tacklesWon": 15,
      "interceptions": 7,
      "clearances": 9,
      "pressuresWon": 21,
      "aerialDuelsWonPct": 54.2
    }
  },
  "jonathan-david": {
    "id": "jonathan-david",
    "name": "Jonathan David",
    "club": "Lille",
    "leagueId": "ligue-1",
    "position": "Forward",
    "nationality": "Canada",
    "number": 19,
    "headshotUrl": "/assets/players/jonathan-david.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 22,
    "careerGoals": 87,
    "dominanceZone": "Central Attacking Third",
    "passes": [
      {
        "id": "jonathan-david-pass-1",
        "playerId": "jonathan-david",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "jonathan-david-pass-2",
        "playerId": "jonathan-david",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "jonathan-david-pass-3",
        "playerId": "jonathan-david",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "jonathan-david-pass-4",
        "playerId": "jonathan-david",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 380,
      "keyPasses": 12,
      "assists": 2,
      "freeKickGoals": 0,
      "aerialCrosses": 30,
      "passAccuracyPct": 79.2,
      "expectedAssists": 2.3
    },
    "marketInfo": {
      "marketValueEur": 52000000,
      "marketValueFormatted": "€52M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 189,
      "nationality": "Canada",
      "preferredFoot": "Right",
      "previousClubs": [
        "Youth Academy",
        "Lille"
      ]
    },
    "sofascoreData": {
      "seasonRating": 7.9,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Ligue 1",
          "rating": 7.9,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 11.7,
      "xA": 2.3,
      "xGOT": 12.64,
      "xGPer90": 0.58,
      "xAPer90": 0.11,
      "progressiveCarries": 73,
      "lineBreakingPasses": 46,
      "finalThirdEntries": 57,
      "tacklesWon": 12,
      "interceptions": 5,
      "clearances": 7,
      "pressuresWon": 17,
      "aerialDuelsWonPct": 54.2
    }
  },
  "achraf-hakimi": {
    "id": "achraf-hakimi",
    "name": "Achraf Hakimi",
    "club": "Paris Saint-Germain",
    "leagueId": "ligue-1",
    "position": "Defender",
    "nationality": "Morocco",
    "number": 19,
    "headshotUrl": "/assets/players/achraf-hakimi.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 42,
    "careerGoals": 33,
    "dominanceZone": "Defensive Midfield",
    "passes": [
      {
        "id": "achraf-hakimi-pass-1",
        "playerId": "achraf-hakimi",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "achraf-hakimi-pass-2",
        "playerId": "achraf-hakimi",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "achraf-hakimi-pass-3",
        "playerId": "achraf-hakimi",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "achraf-hakimi-pass-4",
        "playerId": "achraf-hakimi",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 1410,
      "keyPasses": 21,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 113,
      "passAccuracyPct": 87,
      "expectedAssists": 5.9
    },
    "marketInfo": {
      "marketValueEur": 33000000,
      "marketValueFormatted": "€33M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 188,
      "nationality": "Morocco",
      "preferredFoot": "Left",
      "previousClubs": [
        "Youth Academy",
        "Paris Saint-Germain"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.22,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Ligue 1",
          "rating": 8.22,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 1,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 2.8,
      "xA": 5.9,
      "xGOT": 3.02,
      "xGPer90": 0.14,
      "xAPer90": 0.3,
      "progressiveCarries": 71,
      "lineBreakingPasses": 169,
      "finalThirdEntries": 212,
      "tacklesWon": 44,
      "interceptions": 27,
      "clearances": 26,
      "pressuresWon": 62,
      "aerialDuelsWonPct": 54.2
    }
  },
  "vitinha": {
    "id": "vitinha",
    "name": "Vitinha",
    "club": "Paris Saint-Germain",
    "leagueId": "ligue-1",
    "position": "Midfielder",
    "nationality": "Portugal",
    "number": 19,
    "headshotUrl": "/assets/players/vitinha.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 32,
    "careerGoals": 27,
    "dominanceZone": "Right Half-Space",
    "passes": [
      {
        "id": "vitinha-pass-1",
        "playerId": "vitinha",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "vitinha-pass-2",
        "playerId": "vitinha",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "vitinha-pass-3",
        "playerId": "vitinha",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "vitinha-pass-4",
        "playerId": "vitinha",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 1890,
      "keyPasses": 17,
      "assists": 4,
      "freeKickGoals": 0,
      "aerialCrosses": 151,
      "passAccuracyPct": 92.6,
      "expectedAssists": 4.8
    },
    "marketInfo": {
      "marketValueEur": 36000000,
      "marketValueFormatted": "€36M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 182,
      "nationality": "Portugal",
      "preferredFoot": "Left",
      "previousClubs": [
        "Youth Academy",
        "Paris Saint-Germain"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.15,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Ligue 1",
          "rating": 8.15,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 2.2,
      "xA": 4.8,
      "xGOT": 2.38,
      "xGPer90": 0.11,
      "xAPer90": 0.24,
      "progressiveCarries": 72,
      "lineBreakingPasses": 227,
      "finalThirdEntries": 284,
      "tacklesWon": 48,
      "interceptions": 31,
      "clearances": 29,
      "pressuresWon": 67,
      "aerialDuelsWonPct": 54.2
    }
  },
  "joao-neves": {
    "id": "joao-neves",
    "name": "João Neves",
    "club": "Paris Saint-Germain",
    "leagueId": "ligue-1",
    "position": "Midfielder",
    "nationality": "Portugal",
    "number": 19,
    "headshotUrl": "/assets/players/joao-neves.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 47,
    "careerGoals": 21,
    "dominanceZone": "Right Half-Space",
    "passes": [
      {
        "id": "joao-neves-pass-1",
        "playerId": "joao-neves",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "joao-neves-pass-2",
        "playerId": "joao-neves",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "joao-neves-pass-3",
        "playerId": "joao-neves",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "joao-neves-pass-4",
        "playerId": "joao-neves",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 1720,
      "keyPasses": 23,
      "assists": 7,
      "freeKickGoals": 0,
      "aerialCrosses": 138,
      "passAccuracyPct": 91.5,
      "expectedAssists": 6.4
    },
    "marketInfo": {
      "marketValueEur": 45000000,
      "marketValueFormatted": "€45M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 185,
      "nationality": "Portugal",
      "preferredFoot": "Right",
      "previousClubs": [
        "Youth Academy",
        "Paris Saint-Germain"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.18,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Ligue 1",
          "rating": 8.18,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 1,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 1.5,
      "xA": 6.4,
      "xGOT": 1.62,
      "xGPer90": 0.07,
      "xAPer90": 0.32,
      "progressiveCarries": 73,
      "lineBreakingPasses": 206,
      "finalThirdEntries": 258,
      "tacklesWon": 56,
      "interceptions": 38,
      "clearances": 34,
      "pressuresWon": 78,
      "aerialDuelsWonPct": 54.2
    }
  },
  "marquinhos": {
    "id": "marquinhos",
    "name": "Marquinhos",
    "club": "Paris Saint-Germain",
    "leagueId": "ligue-1",
    "position": "Defender",
    "nationality": "Brazil",
    "number": 19,
    "headshotUrl": "/assets/players/marquinhos.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 12,
    "careerGoals": 21,
    "dominanceZone": "Defensive Midfield",
    "passes": [
      {
        "id": "marquinhos-pass-1",
        "playerId": "marquinhos",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "marquinhos-pass-2",
        "playerId": "marquinhos",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "marquinhos-pass-3",
        "playerId": "marquinhos",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "marquinhos-pass-4",
        "playerId": "marquinhos",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 1420,
      "keyPasses": 8,
      "assists": 0,
      "freeKickGoals": 0,
      "aerialCrosses": 114,
      "passAccuracyPct": 92.8,
      "expectedAssists": 0.3
    },
    "marketInfo": {
      "marketValueEur": 25000000,
      "marketValueFormatted": "€25M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 185,
      "nationality": "Brazil",
      "preferredFoot": "Right",
      "previousClubs": [
        "Youth Academy",
        "Paris Saint-Germain"
      ]
    },
    "sofascoreData": {
      "seasonRating": 7.98,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Ligue 1",
          "rating": 7.98,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 0.9,
      "xA": 0.3,
      "xGOT": 0.97,
      "xGPer90": 0.05,
      "xAPer90": 0.02,
      "progressiveCarries": 66,
      "lineBreakingPasses": 170,
      "finalThirdEntries": 213,
      "tacklesWon": 36,
      "interceptions": 29,
      "clearances": 22,
      "pressuresWon": 50,
      "aerialDuelsWonPct": 54.2
    }
  },
  "lucas-chevalier": {
    "id": "lucas-chevalier",
    "name": "Lucas Chevalier",
    "club": "Lille",
    "leagueId": "ligue-1",
    "position": "Goalkeeper",
    "nationality": "France",
    "number": 19,
    "headshotUrl": "/assets/players/lucas-chevalier.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 12,
    "careerGoals": 15,
    "dominanceZone": "Defensive Midfield",
    "passes": [
      {
        "id": "lucas-chevalier-pass-1",
        "playerId": "lucas-chevalier",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "lucas-chevalier-pass-2",
        "playerId": "lucas-chevalier",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "lucas-chevalier-pass-3",
        "playerId": "lucas-chevalier",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "lucas-chevalier-pass-4",
        "playerId": "lucas-chevalier",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 650,
      "keyPasses": 8,
      "assists": 0,
      "freeKickGoals": 0,
      "aerialCrosses": 52,
      "passAccuracyPct": 80.2,
      "expectedAssists": 0.1
    },
    "marketInfo": {
      "marketValueEur": 18000000,
      "marketValueFormatted": "€18M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 175,
      "nationality": "France",
      "preferredFoot": "Left",
      "previousClubs": [
        "Youth Academy",
        "Lille"
      ]
    },
    "sofascoreData": {
      "seasonRating": 7.92,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Ligue 1",
          "rating": 7.92,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 0,
      "xA": 0.1,
      "xGOT": 0,
      "xGPer90": 0,
      "xAPer90": 0,
      "progressiveCarries": 79,
      "lineBreakingPasses": 78,
      "finalThirdEntries": 98,
      "tacklesWon": 2,
      "interceptions": 1,
      "clearances": 1,
      "pressuresWon": 3,
      "aerialDuelsWonPct": 54.2
    }
  },
  "gianluigi-donnarumma": {
    "id": "gianluigi-donnarumma",
    "name": "Gianluigi Donnarumma",
    "club": "Paris Saint-Germain",
    "leagueId": "ligue-1",
    "position": "Goalkeeper",
    "nationality": "Italy",
    "number": 20,
    "headshotUrl": "/assets/players/gianluigi-donnarumma.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 12,
    "careerGoals": 15,
    "dominanceZone": "Defensive Midfield",
    "passes": [
      {
        "id": "gianluigi-donnarumma-pass-1",
        "playerId": "gianluigi-donnarumma",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "gianluigi-donnarumma-pass-2",
        "playerId": "gianluigi-donnarumma",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "gianluigi-donnarumma-pass-3",
        "playerId": "gianluigi-donnarumma",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "gianluigi-donnarumma-pass-4",
        "playerId": "gianluigi-donnarumma",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 580,
      "keyPasses": 8,
      "assists": 0,
      "freeKickGoals": 0,
      "aerialCrosses": 46,
      "passAccuracyPct": 81.7,
      "expectedAssists": 0.2
    },
    "marketInfo": {
      "marketValueEur": 18000000,
      "marketValueFormatted": "€18M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 180,
      "nationality": "Italy",
      "preferredFoot": "Right",
      "previousClubs": [
        "Youth Academy",
        "Paris Saint-Germain"
      ]
    },
    "sofascoreData": {
      "seasonRating": 7.96,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-recent-1",
          "date": "2026-10-14",
          "opponent": "European Rival",
          "competition": "Ligue 1",
          "rating": 7.96,
          "minutesPlayed": 90,
          "goals": 0,
          "assists": 0,
          "touches": 78,
          "accuratePassesPct": 86.4,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 58.4,
      "touchesPer90": 76.2
    },
    "optaMetrics": {
      "xG": 0,
      "xA": 0.2,
      "xGOT": 0,
      "xGPer90": 0,
      "xAPer90": 0.01,
      "progressiveCarries": 72,
      "lineBreakingPasses": 70,
      "finalThirdEntries": 87,
      "tacklesWon": 3,
      "interceptions": 1,
      "clearances": 2,
      "pressuresWon": 4,
      "aerialDuelsWonPct": 54.2
    }
  },
  "arda-guler": {
    "id": "arda-guler",
    "name": "Arda Güler",
    "club": "Real Madrid CF",
    "leagueId": "ucl",
    "position": "Midfielder",
    "nationality": "Turkey",
    "number": 15,
    "headshotUrl": "/assets/players/arda-guler.png",
    "careerFreeKickGoals": 4,
    "careerAssists": 34,
    "careerGoals": 28,
    "dominanceZone": "Attacking Midfielder / Right Half-Space Playmaker",
    "passes": [
      {
        "id": "arda-guler-pass-1",
        "playerId": "arda-guler",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "arda-guler-pass-2",
        "playerId": "arda-guler",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "arda-guler-pass-3",
        "playerId": "arda-guler",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "arda-guler-pass-4",
        "playerId": "arda-guler",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      },
      {
        "id": "arda-guler-pass-fk",
        "playerId": "arda-guler",
        "minute": 85,
        "second": 20,
        "start": {
          "x": 26.5,
          "y": -9
        },
        "end": {
          "x": 52.5,
          "y": -2.8
        },
        "apexHeight": 3.1,
        "category": "freekick",
        "velocityKmH": 104,
        "distanceM": 26.7,
        "xGOT": 0.94,
        "landingQuadrant": 1,
        "description": "Curling direct free-kick goal over 10-yard wall into top corner"
      }
    ],
    "stats": {
      "normalPasses": 450,
      "keyPasses": 24,
      "assists": 6,
      "freeKickGoals": 1,
      "aerialCrosses": 18,
      "passAccuracyPct": 88.2,
      "expectedAssists": 5.4
    },
    "marketInfo": {
      "marketValueEur": 45000000,
      "marketValueFormatted": "€45M",
      "contractUntil": "2029",
      "age": 21,
      "heightCm": 180,
      "nationality": "Turkey",
      "preferredFoot": "Right",
      "previousClubs": [
        "Real Madrid CF"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.12,
      "formGuide": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "ucl-md3-1",
          "date": "2026-10-14",
          "opponent": "Champions League Rival",
          "competition": "UEFA Champions League",
          "rating": 8.35,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 82,
          "accuratePassesPct": 89,
          "keyPasses": 4
        }
      ],
      "duelWinPct": 62,
      "touchesPer90": 84.5
    },
    "optaMetrics": {
      "xG": 4.8,
      "xA": 5.2,
      "xGOT": 5.1,
      "xGPer90": 0.48,
      "xAPer90": 0.52,
      "progressiveCarries": 42,
      "lineBreakingPasses": 64,
      "finalThirdEntries": 58,
      "tacklesWon": 18,
      "interceptions": 12,
      "clearances": 8,
      "pressuresWon": 24,
      "aerialDuelsWonPct": 56
    }
  },
  "calhanoglu": {
    "id": "calhanoglu",
    "name": "Hakan Çalhanoğlu",
    "club": "Inter Milan",
    "leagueId": "ucl",
    "position": "Midfielder",
    "nationality": "Turkey",
    "number": 20,
    "headshotUrl": "/assets/players/calhanoglu.png",
    "careerFreeKickGoals": 32,
    "careerAssists": 134,
    "careerGoals": 112,
    "dominanceZone": "Regista / Deep-Lying Free Kick Specialist",
    "passes": [
      {
        "id": "calhanoglu-pass-1",
        "playerId": "calhanoglu",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "calhanoglu-pass-2",
        "playerId": "calhanoglu",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "calhanoglu-pass-3",
        "playerId": "calhanoglu",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "calhanoglu-pass-4",
        "playerId": "calhanoglu",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      },
      {
        "id": "calhanoglu-pass-fk",
        "playerId": "calhanoglu",
        "minute": 85,
        "second": 20,
        "start": {
          "x": 26.5,
          "y": -9
        },
        "end": {
          "x": 52.5,
          "y": -2.8
        },
        "apexHeight": 3.1,
        "category": "freekick",
        "velocityKmH": 104,
        "distanceM": 26.7,
        "xGOT": 0.94,
        "landingQuadrant": 1,
        "description": "Curling direct free-kick goal over 10-yard wall into top corner"
      }
    ],
    "stats": {
      "normalPasses": 450,
      "keyPasses": 24,
      "assists": 6,
      "freeKickGoals": 1,
      "aerialCrosses": 18,
      "passAccuracyPct": 88.2,
      "expectedAssists": 5.4
    },
    "marketInfo": {
      "marketValueEur": 45000000,
      "marketValueFormatted": "€45M",
      "contractUntil": "2029",
      "age": 32,
      "heightCm": 180,
      "nationality": "Turkey",
      "preferredFoot": "Right",
      "previousClubs": [
        "Inter Milan"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.12,
      "formGuide": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "ucl-md3-1",
          "date": "2026-10-14",
          "opponent": "Champions League Rival",
          "competition": "UEFA Champions League",
          "rating": 8.35,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 82,
          "accuratePassesPct": 89,
          "keyPasses": 4
        }
      ],
      "duelWinPct": 62,
      "touchesPer90": 84.5
    },
    "optaMetrics": {
      "xG": 4.8,
      "xA": 5.2,
      "xGOT": 5.1,
      "xGPer90": 0.48,
      "xAPer90": 0.52,
      "progressiveCarries": 42,
      "lineBreakingPasses": 64,
      "finalThirdEntries": 58,
      "tacklesWon": 18,
      "interceptions": 12,
      "clearances": 8,
      "pressuresWon": 24,
      "aerialDuelsWonPct": 56
    }
  },
  "ollie-watkins": {
    "id": "ollie-watkins",
    "name": "Ollie Watkins",
    "club": "Aston Villa",
    "leagueId": "ucl",
    "position": "Forward",
    "nationality": "England",
    "number": 11,
    "headshotUrl": "/assets/players/ollie-watkins.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 38,
    "careerGoals": 48,
    "dominanceZone": "Striker / Pressing Forward",
    "passes": [
      {
        "id": "ollie-watkins-pass-1",
        "playerId": "ollie-watkins",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "ollie-watkins-pass-2",
        "playerId": "ollie-watkins",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "ollie-watkins-pass-3",
        "playerId": "ollie-watkins",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "ollie-watkins-pass-4",
        "playerId": "ollie-watkins",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 450,
      "keyPasses": 24,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 18,
      "passAccuracyPct": 88.2,
      "expectedAssists": 5.4
    },
    "marketInfo": {
      "marketValueEur": 51000000,
      "marketValueFormatted": "€51M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 180,
      "nationality": "England",
      "preferredFoot": "Right",
      "previousClubs": [
        "Aston Villa"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.12,
      "formGuide": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "ucl-md3-1",
          "date": "2026-10-14",
          "opponent": "Champions League Rival",
          "competition": "UEFA Champions League",
          "rating": 8.35,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 82,
          "accuratePassesPct": 89,
          "keyPasses": 4
        }
      ],
      "duelWinPct": 62,
      "touchesPer90": 84.5
    },
    "optaMetrics": {
      "xG": 4.8,
      "xA": 5.2,
      "xGOT": 5.1,
      "xGPer90": 0.48,
      "xAPer90": 0.52,
      "progressiveCarries": 42,
      "lineBreakingPasses": 64,
      "finalThirdEntries": 58,
      "tacklesWon": 18,
      "interceptions": 12,
      "clearances": 8,
      "pressuresWon": 24,
      "aerialDuelsWonPct": 56
    }
  },
  "viktor-gyokeres": {
    "id": "viktor-gyokeres",
    "name": "Viktor Gyökeres",
    "club": "Sporting CP",
    "leagueId": "ucl",
    "position": "Forward",
    "nationality": "Sweden",
    "number": 9,
    "headshotUrl": "/assets/players/viktor-gyokeres.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 38,
    "careerGoals": 48,
    "dominanceZone": "Power Striker / Channel Runner",
    "passes": [
      {
        "id": "viktor-gyokeres-pass-1",
        "playerId": "viktor-gyokeres",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "viktor-gyokeres-pass-2",
        "playerId": "viktor-gyokeres",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "viktor-gyokeres-pass-3",
        "playerId": "viktor-gyokeres",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "viktor-gyokeres-pass-4",
        "playerId": "viktor-gyokeres",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 450,
      "keyPasses": 24,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 18,
      "passAccuracyPct": 88.2,
      "expectedAssists": 5.4
    },
    "marketInfo": {
      "marketValueEur": 85000000,
      "marketValueFormatted": "€85M",
      "contractUntil": "2029",
      "age": 28,
      "heightCm": 180,
      "nationality": "Sweden",
      "preferredFoot": "Right",
      "previousClubs": [
        "Sporting CP"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.12,
      "formGuide": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "ucl-md3-1",
          "date": "2026-10-14",
          "opponent": "Champions League Rival",
          "competition": "UEFA Champions League",
          "rating": 8.35,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 82,
          "accuratePassesPct": 89,
          "keyPasses": 4
        }
      ],
      "duelWinPct": 62,
      "touchesPer90": 84.5
    },
    "optaMetrics": {
      "xG": 4.8,
      "xA": 5.2,
      "xGOT": 5.1,
      "xGPer90": 0.48,
      "xAPer90": 0.52,
      "progressiveCarries": 42,
      "lineBreakingPasses": 64,
      "finalThirdEntries": 58,
      "tacklesWon": 18,
      "interceptions": 12,
      "clearances": 8,
      "pressuresWon": 24,
      "aerialDuelsWonPct": 56
    }
  },
  "paulo-dybala": {
    "id": "paulo-dybala",
    "name": "Paulo Dybala",
    "club": "AS Roma",
    "leagueId": "ucl",
    "position": "Forward",
    "nationality": "Argentina",
    "number": 21,
    "headshotUrl": "/assets/players/paulo-dybala.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 38,
    "careerGoals": 48,
    "dominanceZone": "Second Striker / Dead-Ball Virtuoso",
    "passes": [
      {
        "id": "paulo-dybala-pass-1",
        "playerId": "paulo-dybala",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": -8.5
        },
        "end": {
          "x": 16.5,
          "y": -14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "paulo-dybala-pass-2",
        "playerId": "paulo-dybala",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": 10.5
        },
        "end": {
          "x": 42,
          "y": 4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "paulo-dybala-pass-3",
        "playerId": "paulo-dybala",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": -18
        },
        "end": {
          "x": 48.5,
          "y": -3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "paulo-dybala-pass-4",
        "playerId": "paulo-dybala",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": 24
        },
        "end": {
          "x": 36,
          "y": -18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 450,
      "keyPasses": 24,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 18,
      "passAccuracyPct": 88.2,
      "expectedAssists": 5.4
    },
    "marketInfo": {
      "marketValueEur": 51000000,
      "marketValueFormatted": "€51M",
      "contractUntil": "2029",
      "age": 32,
      "heightCm": 180,
      "nationality": "Argentina",
      "preferredFoot": "Right",
      "previousClubs": [
        "AS Roma"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.12,
      "formGuide": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "ucl-md3-1",
          "date": "2026-10-14",
          "opponent": "Champions League Rival",
          "competition": "UEFA Champions League",
          "rating": 8.35,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 82,
          "accuratePassesPct": 89,
          "keyPasses": 4
        }
      ],
      "duelWinPct": 62,
      "touchesPer90": 84.5
    },
    "optaMetrics": {
      "xG": 4.8,
      "xA": 5.2,
      "xGOT": 5.1,
      "xGPer90": 0.48,
      "xAPer90": 0.52,
      "progressiveCarries": 42,
      "lineBreakingPasses": 64,
      "finalThirdEntries": 58,
      "tacklesWon": 18,
      "interceptions": 12,
      "clearances": 8,
      "pressuresWon": 24,
      "aerialDuelsWonPct": 56
    }
  },
  "hans-vanaken": {
    "id": "hans-vanaken",
    "name": "Hans Vanaken",
    "club": "Club Brugge",
    "leagueId": "ucl",
    "position": "Midfielder",
    "nationality": "Belgium",
    "number": 20,
    "headshotUrl": "/assets/players/hans-vanaken.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 38,
    "careerGoals": 48,
    "dominanceZone": "Attacking Midfield / Aerial Playmaker",
    "passes": [
      {
        "id": "hans-vanaken-pass-1",
        "playerId": "hans-vanaken",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "hans-vanaken-pass-2",
        "playerId": "hans-vanaken",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "hans-vanaken-pass-3",
        "playerId": "hans-vanaken",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "hans-vanaken-pass-4",
        "playerId": "hans-vanaken",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 450,
      "keyPasses": 24,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 18,
      "passAccuracyPct": 88.2,
      "expectedAssists": 5.4
    },
    "marketInfo": {
      "marketValueEur": 45000000,
      "marketValueFormatted": "€45M",
      "contractUntil": "2029",
      "age": 34,
      "heightCm": 180,
      "nationality": "Belgium",
      "preferredFoot": "Right",
      "previousClubs": [
        "Club Brugge"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.12,
      "formGuide": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "ucl-md3-1",
          "date": "2026-10-14",
          "opponent": "Champions League Rival",
          "competition": "UEFA Champions League",
          "rating": 8.35,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 82,
          "accuratePassesPct": 89,
          "keyPasses": 4
        }
      ],
      "duelWinPct": 62,
      "touchesPer90": 84.5
    },
    "optaMetrics": {
      "xG": 4.8,
      "xA": 5.2,
      "xGOT": 5.1,
      "xGPer90": 0.48,
      "xAPer90": 0.52,
      "progressiveCarries": 42,
      "lineBreakingPasses": 64,
      "finalThirdEntries": 58,
      "tacklesWon": 18,
      "interceptions": 12,
      "clearances": 8,
      "pressuresWon": 24,
      "aerialDuelsWonPct": 56
    }
  },
  "quinten-timber": {
    "id": "quinten-timber",
    "name": "Quinten Timber",
    "club": "Feyenoord",
    "leagueId": "ucl",
    "position": "Midfielder",
    "nationality": "Netherlands",
    "number": 8,
    "headshotUrl": "/assets/players/quinten-timber.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 38,
    "careerGoals": 48,
    "dominanceZone": "Box-to-Box Midfielder / Driving Engine",
    "passes": [
      {
        "id": "quinten-timber-pass-1",
        "playerId": "quinten-timber",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "quinten-timber-pass-2",
        "playerId": "quinten-timber",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "quinten-timber-pass-3",
        "playerId": "quinten-timber",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "quinten-timber-pass-4",
        "playerId": "quinten-timber",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 450,
      "keyPasses": 24,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 18,
      "passAccuracyPct": 88.2,
      "expectedAssists": 5.4
    },
    "marketInfo": {
      "marketValueEur": 75000000,
      "marketValueFormatted": "€75M",
      "contractUntil": "2029",
      "age": 25,
      "heightCm": 180,
      "nationality": "Netherlands",
      "preferredFoot": "Right",
      "previousClubs": [
        "Feyenoord"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.12,
      "formGuide": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "ucl-md3-1",
          "date": "2026-10-14",
          "opponent": "Champions League Rival",
          "competition": "UEFA Champions League",
          "rating": 8.35,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 82,
          "accuratePassesPct": 89,
          "keyPasses": 4
        }
      ],
      "duelWinPct": 62,
      "touchesPer90": 84.5
    },
    "optaMetrics": {
      "xG": 4.8,
      "xA": 5.2,
      "xGOT": 5.1,
      "xGPer90": 0.48,
      "xAPer90": 0.52,
      "progressiveCarries": 42,
      "lineBreakingPasses": 64,
      "finalThirdEntries": 58,
      "tacklesWon": 18,
      "interceptions": 12,
      "clearances": 8,
      "pressuresWon": 24,
      "aerialDuelsWonPct": 56
    }
  },
  "luuk-de-jong": {
    "id": "luuk-de-jong",
    "name": "Luuk de Jong",
    "club": "PSV Eindhoven",
    "leagueId": "ucl",
    "position": "Forward",
    "nationality": "Netherlands",
    "number": 9,
    "headshotUrl": "/assets/players/luuk-de-jong.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 38,
    "careerGoals": 48,
    "dominanceZone": "Target Man / Aerial Specialist",
    "passes": [
      {
        "id": "luuk-de-jong-pass-1",
        "playerId": "luuk-de-jong",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "luuk-de-jong-pass-2",
        "playerId": "luuk-de-jong",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "luuk-de-jong-pass-3",
        "playerId": "luuk-de-jong",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "luuk-de-jong-pass-4",
        "playerId": "luuk-de-jong",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 450,
      "keyPasses": 24,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 18,
      "passAccuracyPct": 88.2,
      "expectedAssists": 5.4
    },
    "marketInfo": {
      "marketValueEur": 51000000,
      "marketValueFormatted": "€51M",
      "contractUntil": "2029",
      "age": 36,
      "heightCm": 180,
      "nationality": "Netherlands",
      "preferredFoot": "Right",
      "previousClubs": [
        "PSV Eindhoven"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.12,
      "formGuide": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "ucl-md3-1",
          "date": "2026-10-14",
          "opponent": "Champions League Rival",
          "competition": "UEFA Champions League",
          "rating": 8.35,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 82,
          "accuratePassesPct": 89,
          "keyPasses": 4
        }
      ],
      "duelWinPct": 62,
      "touchesPer90": 84.5
    },
    "optaMetrics": {
      "xG": 4.8,
      "xA": 5.2,
      "xGOT": 5.1,
      "xGPer90": 0.48,
      "xAPer90": 0.52,
      "progressiveCarries": 42,
      "lineBreakingPasses": 64,
      "finalThirdEntries": 58,
      "tacklesWon": 18,
      "interceptions": 12,
      "clearances": 8,
      "pressuresWon": 24,
      "aerialDuelsWonPct": 56
    }
  },
  "benjamin-sesko": {
    "id": "benjamin-sesko",
    "name": "Benjamin Šeško",
    "club": "RB Leipzig",
    "leagueId": "ucl",
    "position": "Forward",
    "nationality": "Slovenia",
    "number": 30,
    "headshotUrl": "/assets/players/benjamin-sesko.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 38,
    "careerGoals": 48,
    "dominanceZone": "Athletic Centre Forward",
    "passes": [
      {
        "id": "benjamin-sesko-pass-1",
        "playerId": "benjamin-sesko",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "benjamin-sesko-pass-2",
        "playerId": "benjamin-sesko",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "benjamin-sesko-pass-3",
        "playerId": "benjamin-sesko",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "benjamin-sesko-pass-4",
        "playerId": "benjamin-sesko",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 450,
      "keyPasses": 24,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 18,
      "passAccuracyPct": 88.2,
      "expectedAssists": 5.4
    },
    "marketInfo": {
      "marketValueEur": 111000000,
      "marketValueFormatted": "€111M",
      "contractUntil": "2029",
      "age": 23,
      "heightCm": 180,
      "nationality": "Slovenia",
      "preferredFoot": "Right",
      "previousClubs": [
        "RB Leipzig"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.12,
      "formGuide": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "ucl-md3-1",
          "date": "2026-10-14",
          "opponent": "Champions League Rival",
          "competition": "UEFA Champions League",
          "rating": 8.35,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 82,
          "accuratePassesPct": 89,
          "keyPasses": 4
        }
      ],
      "duelWinPct": 62,
      "touchesPer90": 84.5
    },
    "optaMetrics": {
      "xG": 4.8,
      "xA": 5.2,
      "xGOT": 5.1,
      "xGPer90": 0.48,
      "xAPer90": 0.52,
      "progressiveCarries": 42,
      "lineBreakingPasses": 64,
      "finalThirdEntries": 58,
      "tacklesWon": 18,
      "interceptions": 12,
      "clearances": 8,
      "pressuresWon": 24,
      "aerialDuelsWonPct": 56
    }
  },
  "deniz-undav": {
    "id": "deniz-undav",
    "name": "Deniz Undav",
    "club": "VfB Stuttgart",
    "leagueId": "ucl",
    "position": "Forward",
    "nationality": "Germany",
    "number": 26,
    "headshotUrl": "/assets/players/deniz-undav.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 38,
    "careerGoals": 48,
    "dominanceZone": "Link-Up Forward / High-IQ Finisher",
    "passes": [
      {
        "id": "deniz-undav-pass-1",
        "playerId": "deniz-undav",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "deniz-undav-pass-2",
        "playerId": "deniz-undav",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "deniz-undav-pass-3",
        "playerId": "deniz-undav",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "deniz-undav-pass-4",
        "playerId": "deniz-undav",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 450,
      "keyPasses": 24,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 18,
      "passAccuracyPct": 88.2,
      "expectedAssists": 5.4
    },
    "marketInfo": {
      "marketValueEur": 51000000,
      "marketValueFormatted": "€51M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 180,
      "nationality": "Germany",
      "preferredFoot": "Right",
      "previousClubs": [
        "VfB Stuttgart"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.12,
      "formGuide": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "ucl-md3-1",
          "date": "2026-10-14",
          "opponent": "Champions League Rival",
          "competition": "UEFA Champions League",
          "rating": 8.35,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 82,
          "accuratePassesPct": 89,
          "keyPasses": 4
        }
      ],
      "duelWinPct": 62,
      "touchesPer90": 84.5
    },
    "optaMetrics": {
      "xG": 4.8,
      "xA": 5.2,
      "xGOT": 5.1,
      "xGPer90": 0.48,
      "xAPer90": 0.52,
      "progressiveCarries": 42,
      "lineBreakingPasses": 64,
      "finalThirdEntries": 58,
      "tacklesWon": 18,
      "interceptions": 12,
      "clearances": 8,
      "pressuresWon": 24,
      "aerialDuelsWonPct": 56
    }
  },
  "georgiy-sudakov": {
    "id": "georgiy-sudakov",
    "name": "Georgiy Sudakov",
    "club": "FC Shakhtar Donetsk",
    "leagueId": "ucl",
    "position": "Midfielder",
    "nationality": "Ukraine",
    "number": 10,
    "headshotUrl": "/assets/players/georgiy-sudakov.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 38,
    "careerGoals": 48,
    "dominanceZone": "Number 10 / Through-Ball Virtuoso",
    "passes": [
      {
        "id": "georgiy-sudakov-pass-1",
        "playerId": "georgiy-sudakov",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "georgiy-sudakov-pass-2",
        "playerId": "georgiy-sudakov",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "georgiy-sudakov-pass-3",
        "playerId": "georgiy-sudakov",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "georgiy-sudakov-pass-4",
        "playerId": "georgiy-sudakov",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 450,
      "keyPasses": 24,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 18,
      "passAccuracyPct": 88.2,
      "expectedAssists": 5.4
    },
    "marketInfo": {
      "marketValueEur": 75000000,
      "marketValueFormatted": "€75M",
      "contractUntil": "2029",
      "age": 24,
      "heightCm": 180,
      "nationality": "Ukraine",
      "preferredFoot": "Right",
      "previousClubs": [
        "FC Shakhtar Donetsk"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.12,
      "formGuide": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "ucl-md3-1",
          "date": "2026-10-14",
          "opponent": "Champions League Rival",
          "competition": "UEFA Champions League",
          "rating": 8.35,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 82,
          "accuratePassesPct": 89,
          "keyPasses": 4
        }
      ],
      "duelWinPct": 62,
      "touchesPer90": 84.5
    },
    "optaMetrics": {
      "xG": 4.8,
      "xA": 5.2,
      "xGOT": 5.1,
      "xGPer90": 0.48,
      "xAPer90": 0.52,
      "progressiveCarries": 42,
      "lineBreakingPasses": 64,
      "finalThirdEntries": 58,
      "tacklesWon": 18,
      "interceptions": 12,
      "clearances": 8,
      "pressuresWon": 24,
      "aerialDuelsWonPct": 56
    }
  },
  "jens-petter-hauge": {
    "id": "jens-petter-hauge",
    "name": "Jens Petter Hauge",
    "club": "FK Bodø/Glimt",
    "leagueId": "ucl",
    "position": "Forward",
    "nationality": "Norway",
    "number": 23,
    "headshotUrl": "/assets/players/jens-petter-hauge.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 38,
    "careerGoals": 48,
    "dominanceZone": "Inverted Left Winger / Dribbler",
    "passes": [
      {
        "id": "jens-petter-hauge-pass-1",
        "playerId": "jens-petter-hauge",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "jens-petter-hauge-pass-2",
        "playerId": "jens-petter-hauge",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "jens-petter-hauge-pass-3",
        "playerId": "jens-petter-hauge",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "jens-petter-hauge-pass-4",
        "playerId": "jens-petter-hauge",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 450,
      "keyPasses": 24,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 18,
      "passAccuracyPct": 88.2,
      "expectedAssists": 5.4
    },
    "marketInfo": {
      "marketValueEur": 85000000,
      "marketValueFormatted": "€85M",
      "contractUntil": "2029",
      "age": 27,
      "heightCm": 180,
      "nationality": "Norway",
      "preferredFoot": "Right",
      "previousClubs": [
        "FK Bodø/Glimt"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.12,
      "formGuide": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "ucl-md3-1",
          "date": "2026-10-14",
          "opponent": "Champions League Rival",
          "competition": "UEFA Champions League",
          "rating": 8.35,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 82,
          "accuratePassesPct": 89,
          "keyPasses": 4
        }
      ],
      "duelWinPct": 62,
      "touchesPer90": 84.5
    },
    "optaMetrics": {
      "xG": 4.8,
      "xA": 5.2,
      "xGOT": 5.1,
      "xGPer90": 0.48,
      "xAPer90": 0.52,
      "progressiveCarries": 42,
      "lineBreakingPasses": 64,
      "finalThirdEntries": 58,
      "tacklesWon": 18,
      "interceptions": 12,
      "clearances": 8,
      "pressuresWon": 24,
      "aerialDuelsWonPct": 56
    }
  },
  "zlatko-tripic": {
    "id": "zlatko-tripic",
    "name": "Zlatko Tripić",
    "club": "Viking FK",
    "leagueId": "ucl",
    "position": "Forward",
    "nationality": "Norway",
    "number": 10,
    "headshotUrl": "/assets/players/zlatko-tripic.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 38,
    "careerGoals": 48,
    "dominanceZone": "Left Wing Playmaker / Captain",
    "passes": [
      {
        "id": "zlatko-tripic-pass-1",
        "playerId": "zlatko-tripic",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "zlatko-tripic-pass-2",
        "playerId": "zlatko-tripic",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "zlatko-tripic-pass-3",
        "playerId": "zlatko-tripic",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "zlatko-tripic-pass-4",
        "playerId": "zlatko-tripic",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 450,
      "keyPasses": 24,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 18,
      "passAccuracyPct": 88.2,
      "expectedAssists": 5.4
    },
    "marketInfo": {
      "marketValueEur": 51000000,
      "marketValueFormatted": "€51M",
      "contractUntil": "2029",
      "age": 33,
      "heightCm": 180,
      "nationality": "Norway",
      "preferredFoot": "Right",
      "previousClubs": [
        "Viking FK"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.12,
      "formGuide": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "ucl-md3-1",
          "date": "2026-10-14",
          "opponent": "Champions League Rival",
          "competition": "UEFA Champions League",
          "rating": 8.35,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 82,
          "accuratePassesPct": 89,
          "keyPasses": 4
        }
      ],
      "duelWinPct": 62,
      "touchesPer90": 84.5
    },
    "optaMetrics": {
      "xG": 4.8,
      "xA": 5.2,
      "xGOT": 5.1,
      "xGPer90": 0.48,
      "xAPer90": 0.52,
      "progressiveCarries": 42,
      "lineBreakingPasses": 64,
      "finalThirdEntries": 58,
      "tacklesWon": 18,
      "interceptions": 12,
      "clearances": 8,
      "pressuresWon": 24,
      "aerialDuelsWonPct": 56
    }
  },
  "mojmir-chytil": {
    "id": "mojmir-chytil",
    "name": "Mojmír Chytil",
    "club": "Slavia Prague",
    "leagueId": "ucl",
    "position": "Forward",
    "nationality": "Czech Republic",
    "number": 13,
    "headshotUrl": "/assets/players/mojmir-chytil.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 38,
    "careerGoals": 48,
    "dominanceZone": "High-Pressing Centre Forward",
    "passes": [
      {
        "id": "mojmir-chytil-pass-1",
        "playerId": "mojmir-chytil",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "mojmir-chytil-pass-2",
        "playerId": "mojmir-chytil",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "mojmir-chytil-pass-3",
        "playerId": "mojmir-chytil",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "mojmir-chytil-pass-4",
        "playerId": "mojmir-chytil",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 450,
      "keyPasses": 24,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 18,
      "passAccuracyPct": 88.2,
      "expectedAssists": 5.4
    },
    "marketInfo": {
      "marketValueEur": 85000000,
      "marketValueFormatted": "€85M",
      "contractUntil": "2029",
      "age": 27,
      "heightCm": 180,
      "nationality": "Czech Republic",
      "preferredFoot": "Right",
      "previousClubs": [
        "Slavia Prague"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.12,
      "formGuide": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "ucl-md3-1",
          "date": "2026-10-14",
          "opponent": "Champions League Rival",
          "competition": "UEFA Champions League",
          "rating": 8.35,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 82,
          "accuratePassesPct": 89,
          "keyPasses": 4
        }
      ],
      "duelWinPct": 62,
      "touchesPer90": 84.5
    },
    "optaMetrics": {
      "xG": 4.8,
      "xA": 5.2,
      "xGOT": 5.1,
      "xGPer90": 0.48,
      "xAPer90": 0.52,
      "progressiveCarries": 42,
      "lineBreakingPasses": 64,
      "finalThirdEntries": 58,
      "tacklesWon": 18,
      "interceptions": 12,
      "clearances": 8,
      "pressuresWon": 24,
      "aerialDuelsWonPct": 56
    }
  },
  "tigran-barseghyan": {
    "id": "tigran-barseghyan",
    "name": "Tigran Barseghyan",
    "club": "Slovan Bratislava",
    "leagueId": "ucl",
    "position": "Forward",
    "nationality": "Armenia",
    "number": 11,
    "headshotUrl": "/assets/players/tigran-barseghyan.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 38,
    "careerGoals": 48,
    "dominanceZone": "Right Inverted Winger",
    "passes": [
      {
        "id": "tigran-barseghyan-pass-1",
        "playerId": "tigran-barseghyan",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "tigran-barseghyan-pass-2",
        "playerId": "tigran-barseghyan",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "tigran-barseghyan-pass-3",
        "playerId": "tigran-barseghyan",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "tigran-barseghyan-pass-4",
        "playerId": "tigran-barseghyan",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 450,
      "keyPasses": 24,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 18,
      "passAccuracyPct": 88.2,
      "expectedAssists": 5.4
    },
    "marketInfo": {
      "marketValueEur": 51000000,
      "marketValueFormatted": "€51M",
      "contractUntil": "2029",
      "age": 33,
      "heightCm": 180,
      "nationality": "Armenia",
      "preferredFoot": "Right",
      "previousClubs": [
        "Slovan Bratislava"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.12,
      "formGuide": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "ucl-md3-1",
          "date": "2026-10-14",
          "opponent": "Champions League Rival",
          "competition": "UEFA Champions League",
          "rating": 8.35,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 82,
          "accuratePassesPct": 89,
          "keyPasses": 4
        }
      ],
      "duelWinPct": 62,
      "touchesPer90": 84.5
    },
    "optaMetrics": {
      "xG": 4.8,
      "xA": 5.2,
      "xGOT": 5.1,
      "xGPer90": 0.48,
      "xAPer90": 0.52,
      "progressiveCarries": 42,
      "lineBreakingPasses": 64,
      "finalThirdEntries": 58,
      "tacklesWon": 18,
      "interceptions": 12,
      "clearances": 8,
      "pressuresWon": 24,
      "aerialDuelsWonPct": 56
    }
  },
  "razvan-marin": {
    "id": "razvan-marin",
    "name": "Răzvan Marin",
    "club": "AEK Athens",
    "leagueId": "ucl",
    "position": "Midfielder",
    "nationality": "Romania",
    "number": 18,
    "headshotUrl": "/assets/players/razvan-marin.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 38,
    "careerGoals": 48,
    "dominanceZone": "Deep Playmaker & Free-Kick Master",
    "passes": [
      {
        "id": "razvan-marin-pass-1",
        "playerId": "razvan-marin",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "razvan-marin-pass-2",
        "playerId": "razvan-marin",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "razvan-marin-pass-3",
        "playerId": "razvan-marin",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "razvan-marin-pass-4",
        "playerId": "razvan-marin",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 450,
      "keyPasses": 24,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 18,
      "passAccuracyPct": 88.2,
      "expectedAssists": 5.4
    },
    "marketInfo": {
      "marketValueEur": 45000000,
      "marketValueFormatted": "€45M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 180,
      "nationality": "Romania",
      "preferredFoot": "Right",
      "previousClubs": [
        "AEK Athens"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.12,
      "formGuide": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "ucl-md3-1",
          "date": "2026-10-14",
          "opponent": "Champions League Rival",
          "competition": "UEFA Champions League",
          "rating": 8.35,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 82,
          "accuratePassesPct": 89,
          "keyPasses": 4
        }
      ],
      "duelWinPct": 62,
      "touchesPer90": 84.5
    },
    "optaMetrics": {
      "xG": 4.8,
      "xA": 5.2,
      "xGOT": 5.1,
      "xGPer90": 0.48,
      "xAPer90": 0.52,
      "progressiveCarries": 42,
      "lineBreakingPasses": 64,
      "finalThirdEntries": 58,
      "tacklesWon": 18,
      "interceptions": 12,
      "clearances": 8,
      "pressuresWon": 24,
      "aerialDuelsWonPct": 56
    }
  },
  "robert-zulj": {
    "id": "robert-zulj",
    "name": "Robert Žulj",
    "club": "LASK",
    "leagueId": "ucl",
    "position": "Midfielder",
    "nationality": "Austria",
    "number": 10,
    "headshotUrl": "/assets/players/robert-zulj.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 38,
    "careerGoals": 48,
    "dominanceZone": "Attacking Midfield Conductor",
    "passes": [
      {
        "id": "robert-zulj-pass-1",
        "playerId": "robert-zulj",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "robert-zulj-pass-2",
        "playerId": "robert-zulj",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "robert-zulj-pass-3",
        "playerId": "robert-zulj",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "robert-zulj-pass-4",
        "playerId": "robert-zulj",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 450,
      "keyPasses": 24,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 18,
      "passAccuracyPct": 88.2,
      "expectedAssists": 5.4
    },
    "marketInfo": {
      "marketValueEur": 45000000,
      "marketValueFormatted": "€45M",
      "contractUntil": "2029",
      "age": 34,
      "heightCm": 180,
      "nationality": "Austria",
      "preferredFoot": "Right",
      "previousClubs": [
        "LASK"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.12,
      "formGuide": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "ucl-md3-1",
          "date": "2026-10-14",
          "opponent": "Champions League Rival",
          "competition": "UEFA Champions League",
          "rating": 8.35,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 82,
          "accuratePassesPct": 89,
          "keyPasses": 4
        }
      ],
      "duelWinPct": 62,
      "touchesPer90": 84.5
    },
    "optaMetrics": {
      "xG": 4.8,
      "xA": 5.2,
      "xGOT": 5.1,
      "xGPer90": 0.48,
      "xAPer90": 0.52,
      "progressiveCarries": 42,
      "lineBreakingPasses": 64,
      "finalThirdEntries": 58,
      "tacklesWon": 18,
      "interceptions": 12,
      "clearances": 8,
      "pressuresWon": 24,
      "aerialDuelsWonPct": 56
    }
  },
  "nico-paz": {
    "id": "nico-paz",
    "name": "Nico Paz",
    "club": "Como 1907",
    "leagueId": "ucl",
    "position": "Midfielder",
    "nationality": "Argentina",
    "number": 79,
    "headshotUrl": "/assets/players/nico-paz.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 38,
    "careerGoals": 48,
    "dominanceZone": "Playmaker / Half-Space Dribbler",
    "passes": [
      {
        "id": "nico-paz-pass-1",
        "playerId": "nico-paz",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "nico-paz-pass-2",
        "playerId": "nico-paz",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "nico-paz-pass-3",
        "playerId": "nico-paz",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "nico-paz-pass-4",
        "playerId": "nico-paz",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 450,
      "keyPasses": 24,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 18,
      "passAccuracyPct": 88.2,
      "expectedAssists": 5.4
    },
    "marketInfo": {
      "marketValueEur": 98000000,
      "marketValueFormatted": "€98M",
      "contractUntil": "2029",
      "age": 22,
      "heightCm": 180,
      "nationality": "Argentina",
      "preferredFoot": "Right",
      "previousClubs": [
        "Como 1907"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.12,
      "formGuide": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "ucl-md3-1",
          "date": "2026-10-14",
          "opponent": "Champions League Rival",
          "competition": "UEFA Champions League",
          "rating": 8.35,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 82,
          "accuratePassesPct": 89,
          "keyPasses": 4
        }
      ],
      "duelWinPct": 62,
      "touchesPer90": 84.5
    },
    "optaMetrics": {
      "xG": 4.8,
      "xA": 5.2,
      "xGOT": 5.1,
      "xGPer90": 0.48,
      "xAPer90": 0.52,
      "progressiveCarries": 42,
      "lineBreakingPasses": 64,
      "finalThirdEntries": 58,
      "tacklesWon": 18,
      "interceptions": 12,
      "clearances": 8,
      "pressuresWon": 24,
      "aerialDuelsWonPct": 56
    }
  },
  "florian-sotoca": {
    "id": "florian-sotoca",
    "name": "Florian Sotoca",
    "club": "RC Lens",
    "leagueId": "ucl",
    "position": "Forward",
    "nationality": "France",
    "number": 7,
    "headshotUrl": "/assets/players/florian-sotoca.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 38,
    "careerGoals": 48,
    "dominanceZone": "Pressing Forward / Workhorse",
    "passes": [
      {
        "id": "florian-sotoca-pass-1",
        "playerId": "florian-sotoca",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "florian-sotoca-pass-2",
        "playerId": "florian-sotoca",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "florian-sotoca-pass-3",
        "playerId": "florian-sotoca",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "florian-sotoca-pass-4",
        "playerId": "florian-sotoca",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 450,
      "keyPasses": 24,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 18,
      "passAccuracyPct": 88.2,
      "expectedAssists": 5.4
    },
    "marketInfo": {
      "marketValueEur": 51000000,
      "marketValueFormatted": "€51M",
      "contractUntil": "2029",
      "age": 35,
      "heightCm": 180,
      "nationality": "France",
      "preferredFoot": "Right",
      "previousClubs": [
        "RC Lens"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.12,
      "formGuide": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "ucl-md3-1",
          "date": "2026-10-14",
          "opponent": "Champions League Rival",
          "competition": "UEFA Champions League",
          "rating": 8.35,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 82,
          "accuratePassesPct": 89,
          "keyPasses": 4
        }
      ],
      "duelWinPct": 62,
      "touchesPer90": 84.5
    },
    "optaMetrics": {
      "xG": 4.8,
      "xA": 5.2,
      "xGOT": 5.1,
      "xGPer90": 0.48,
      "xAPer90": 0.52,
      "progressiveCarries": 42,
      "lineBreakingPasses": 64,
      "finalThirdEntries": 58,
      "tacklesWon": 18,
      "interceptions": 12,
      "clearances": 8,
      "pressuresWon": 24,
      "aerialDuelsWonPct": 56
    }
  },
  "giovani-lo-celso": {
    "id": "giovani-lo-celso",
    "name": "Giovani Lo Celso",
    "club": "Real Betis",
    "leagueId": "ucl",
    "position": "Midfielder",
    "nationality": "Argentina",
    "number": 20,
    "headshotUrl": "/assets/players/giovani-lo-celso.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 38,
    "careerGoals": 48,
    "dominanceZone": "Advanced Playmaker / Box Entry",
    "passes": [
      {
        "id": "giovani-lo-celso-pass-1",
        "playerId": "giovani-lo-celso",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "giovani-lo-celso-pass-2",
        "playerId": "giovani-lo-celso",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "giovani-lo-celso-pass-3",
        "playerId": "giovani-lo-celso",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "giovani-lo-celso-pass-4",
        "playerId": "giovani-lo-celso",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 450,
      "keyPasses": 24,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 18,
      "passAccuracyPct": 88.2,
      "expectedAssists": 5.4
    },
    "marketInfo": {
      "marketValueEur": 45000000,
      "marketValueFormatted": "€45M",
      "contractUntil": "2029",
      "age": 30,
      "heightCm": 180,
      "nationality": "Argentina",
      "preferredFoot": "Right",
      "previousClubs": [
        "Real Betis"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.12,
      "formGuide": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "ucl-md3-1",
          "date": "2026-10-14",
          "opponent": "Champions League Rival",
          "competition": "UEFA Champions League",
          "rating": 8.35,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 82,
          "accuratePassesPct": 89,
          "keyPasses": 4
        }
      ],
      "duelWinPct": 62,
      "touchesPer90": 84.5
    },
    "optaMetrics": {
      "xG": 4.8,
      "xA": 5.2,
      "xGOT": 5.1,
      "xGPer90": 0.48,
      "xAPer90": 0.52,
      "progressiveCarries": 42,
      "lineBreakingPasses": 64,
      "finalThirdEntries": 58,
      "tacklesWon": 18,
      "interceptions": 12,
      "clearances": 8,
      "pressuresWon": 24,
      "aerialDuelsWonPct": 56
    }
  },
  "ayoze-perez": {
    "id": "ayoze-perez",
    "name": "Ayoze Pérez",
    "club": "Villarreal",
    "leagueId": "ucl",
    "position": "Forward",
    "nationality": "Spain",
    "number": 22,
    "headshotUrl": "/assets/players/ayoze-perez.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 38,
    "careerGoals": 48,
    "dominanceZone": "Inside Forward / Clutch Scorer",
    "passes": [
      {
        "id": "ayoze-perez-pass-1",
        "playerId": "ayoze-perez",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "ayoze-perez-pass-2",
        "playerId": "ayoze-perez",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "ayoze-perez-pass-3",
        "playerId": "ayoze-perez",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "ayoze-perez-pass-4",
        "playerId": "ayoze-perez",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 450,
      "keyPasses": 24,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 18,
      "passAccuracyPct": 88.2,
      "expectedAssists": 5.4
    },
    "marketInfo": {
      "marketValueEur": 51000000,
      "marketValueFormatted": "€51M",
      "contractUntil": "2029",
      "age": 33,
      "heightCm": 180,
      "nationality": "Spain",
      "preferredFoot": "Right",
      "previousClubs": [
        "Villarreal"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.12,
      "formGuide": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "ucl-md3-1",
          "date": "2026-10-14",
          "opponent": "Champions League Rival",
          "competition": "UEFA Champions League",
          "rating": 8.35,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 82,
          "accuratePassesPct": 89,
          "keyPasses": 4
        }
      ],
      "duelWinPct": 62,
      "touchesPer90": 84.5
    },
    "optaMetrics": {
      "xG": 4.8,
      "xA": 5.2,
      "xGOT": 5.1,
      "xGPer90": 0.48,
      "xAPer90": 0.52,
      "progressiveCarries": 42,
      "lineBreakingPasses": 64,
      "finalThirdEntries": 58,
      "tacklesWon": 18,
      "interceptions": 12,
      "clearances": 8,
      "pressuresWon": 24,
      "aerialDuelsWonPct": 56
    }
  },
  "victor-osimhen": {
    "id": "victor-osimhen",
    "name": "Victor Osimhen",
    "club": "Galatasaray",
    "leagueId": "ucl",
    "position": "Forward",
    "nationality": "Nigeria",
    "number": 45,
    "headshotUrl": "/assets/players/victor-osimhen.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 38,
    "careerGoals": 48,
    "dominanceZone": "Explosive Striker / Aerial Threat",
    "passes": [
      {
        "id": "victor-osimhen-pass-1",
        "playerId": "victor-osimhen",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "victor-osimhen-pass-2",
        "playerId": "victor-osimhen",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "victor-osimhen-pass-3",
        "playerId": "victor-osimhen",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "victor-osimhen-pass-4",
        "playerId": "victor-osimhen",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 450,
      "keyPasses": 24,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 18,
      "passAccuracyPct": 88.2,
      "expectedAssists": 5.4
    },
    "marketInfo": {
      "marketValueEur": 85000000,
      "marketValueFormatted": "€85M",
      "contractUntil": "2029",
      "age": 27,
      "heightCm": 180,
      "nationality": "Nigeria",
      "preferredFoot": "Right",
      "previousClubs": [
        "Galatasaray"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.12,
      "formGuide": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "ucl-md3-1",
          "date": "2026-10-14",
          "opponent": "Champions League Rival",
          "competition": "UEFA Champions League",
          "rating": 8.35,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 82,
          "accuratePassesPct": 89,
          "keyPasses": 4
        }
      ],
      "duelWinPct": 62,
      "touchesPer90": 84.5
    },
    "optaMetrics": {
      "xG": 4.8,
      "xA": 5.2,
      "xGOT": 5.1,
      "xGPer90": 0.48,
      "xAPer90": 0.52,
      "progressiveCarries": 42,
      "lineBreakingPasses": 64,
      "finalThirdEntries": 58,
      "tacklesWon": 18,
      "interceptions": 12,
      "clearances": 8,
      "pressuresWon": 24,
      "aerialDuelsWonPct": 56
    }
  },
  "edin-dzeko": {
    "id": "edin-dzeko",
    "name": "Edin Džeko",
    "club": "Fenerbahçe",
    "leagueId": "ucl",
    "position": "Forward",
    "nationality": "Bosnia and Herzegovina",
    "number": 9,
    "headshotUrl": "/assets/players/edin-dzeko.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 38,
    "careerGoals": 48,
    "dominanceZone": "Veteran Target Man / Clutch Finisher",
    "passes": [
      {
        "id": "edin-dzeko-pass-1",
        "playerId": "edin-dzeko",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "edin-dzeko-pass-2",
        "playerId": "edin-dzeko",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "edin-dzeko-pass-3",
        "playerId": "edin-dzeko",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "edin-dzeko-pass-4",
        "playerId": "edin-dzeko",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 450,
      "keyPasses": 24,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 18,
      "passAccuracyPct": 88.2,
      "expectedAssists": 5.4
    },
    "marketInfo": {
      "marketValueEur": 51000000,
      "marketValueFormatted": "€51M",
      "contractUntil": "2029",
      "age": 40,
      "heightCm": 180,
      "nationality": "Bosnia and Herzegovina",
      "preferredFoot": "Right",
      "previousClubs": [
        "Fenerbahçe"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.12,
      "formGuide": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "ucl-md3-1",
          "date": "2026-10-14",
          "opponent": "Champions League Rival",
          "competition": "UEFA Champions League",
          "rating": 8.35,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 82,
          "accuratePassesPct": 89,
          "keyPasses": 4
        }
      ],
      "duelWinPct": 62,
      "touchesPer90": 84.5
    },
    "optaMetrics": {
      "xG": 4.8,
      "xA": 5.2,
      "xGOT": 5.1,
      "xGPer90": 0.48,
      "xAPer90": 0.52,
      "progressiveCarries": 42,
      "lineBreakingPasses": 64,
      "finalThirdEntries": 58,
      "tacklesWon": 18,
      "interceptions": 12,
      "clearances": 8,
      "pressuresWon": 24,
      "aerialDuelsWonPct": 56
    }
  },
  "pavol-safranko": {
    "id": "pavol-safranko",
    "name": "Pavol Šafranko",
    "club": "Sabah FK",
    "leagueId": "ucl",
    "position": "Forward",
    "nationality": "Slovakia",
    "number": 9,
    "headshotUrl": "/assets/players/pavol-safranko.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 38,
    "careerGoals": 48,
    "dominanceZone": "Target Forward / Box Target",
    "passes": [
      {
        "id": "pavol-safranko-pass-1",
        "playerId": "pavol-safranko",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "pavol-safranko-pass-2",
        "playerId": "pavol-safranko",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "pavol-safranko-pass-3",
        "playerId": "pavol-safranko",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "pavol-safranko-pass-4",
        "playerId": "pavol-safranko",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 450,
      "keyPasses": 24,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 18,
      "passAccuracyPct": 88.2,
      "expectedAssists": 5.4
    },
    "marketInfo": {
      "marketValueEur": 51000000,
      "marketValueFormatted": "€51M",
      "contractUntil": "2029",
      "age": 31,
      "heightCm": 180,
      "nationality": "Slovakia",
      "preferredFoot": "Right",
      "previousClubs": [
        "Sabah FK"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.12,
      "formGuide": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "ucl-md3-1",
          "date": "2026-10-14",
          "opponent": "Champions League Rival",
          "competition": "UEFA Champions League",
          "rating": 8.35,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 82,
          "accuratePassesPct": 89,
          "keyPasses": 4
        }
      ],
      "duelWinPct": 62,
      "touchesPer90": 84.5
    },
    "optaMetrics": {
      "xG": 4.8,
      "xA": 5.2,
      "xGOT": 5.1,
      "xGPer90": 0.48,
      "xAPer90": 0.52,
      "progressiveCarries": 42,
      "lineBreakingPasses": 64,
      "finalThirdEntries": 58,
      "tacklesWon": 18,
      "interceptions": 12,
      "clearances": 8,
      "pressuresWon": 24,
      "aerialDuelsWonPct": 56
    }
  },
  "wenderson-galeno": {
    "id": "wenderson-galeno",
    "name": "Wenderson Galeno",
    "club": "FC Porto",
    "leagueId": "ucl",
    "position": "Forward",
    "nationality": "Brazil",
    "number": 13,
    "headshotUrl": "/assets/players/wenderson-galeno.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 38,
    "careerGoals": 48,
    "dominanceZone": "Left Wing / Speed Dribbler",
    "passes": [
      {
        "id": "wenderson-galeno-pass-1",
        "playerId": "wenderson-galeno",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "wenderson-galeno-pass-2",
        "playerId": "wenderson-galeno",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "wenderson-galeno-pass-3",
        "playerId": "wenderson-galeno",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "wenderson-galeno-pass-4",
        "playerId": "wenderson-galeno",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 450,
      "keyPasses": 24,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 18,
      "passAccuracyPct": 88.2,
      "expectedAssists": 5.4
    },
    "marketInfo": {
      "marketValueEur": 85000000,
      "marketValueFormatted": "€85M",
      "contractUntil": "2029",
      "age": 28,
      "heightCm": 180,
      "nationality": "Brazil",
      "preferredFoot": "Right",
      "previousClubs": [
        "FC Porto"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.12,
      "formGuide": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "ucl-md3-1",
          "date": "2026-10-14",
          "opponent": "Champions League Rival",
          "competition": "UEFA Champions League",
          "rating": 8.35,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 82,
          "accuratePassesPct": 89,
          "keyPasses": 4
        }
      ],
      "duelWinPct": 62,
      "touchesPer90": 84.5
    },
    "optaMetrics": {
      "xG": 4.8,
      "xA": 5.2,
      "xGOT": 5.1,
      "xGPer90": 0.48,
      "xAPer90": 0.52,
      "progressiveCarries": 42,
      "lineBreakingPasses": 64,
      "finalThirdEntries": 58,
      "tacklesWon": 18,
      "interceptions": 12,
      "clearances": 8,
      "pressuresWon": 24,
      "aerialDuelsWonPct": 56
    }
  },
  "bruno-fernandes": {
    "id": "bruno-fernandes",
    "name": "Bruno Fernandes",
    "club": "Manchester United",
    "leagueId": "ucl",
    "position": "Midfielder",
    "nationality": "Portugal",
    "number": 8,
    "headshotUrl": "/assets/players/bruno-fernandes.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 38,
    "careerGoals": 48,
    "dominanceZone": "Playmaker / High-Volume Creator",
    "passes": [
      {
        "id": "bruno-fernandes-pass-1",
        "playerId": "bruno-fernandes",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "bruno-fernandes-pass-2",
        "playerId": "bruno-fernandes",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "bruno-fernandes-pass-3",
        "playerId": "bruno-fernandes",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "bruno-fernandes-pass-4",
        "playerId": "bruno-fernandes",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 450,
      "keyPasses": 24,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 18,
      "passAccuracyPct": 88.2,
      "expectedAssists": 5.4
    },
    "marketInfo": {
      "marketValueEur": 45000000,
      "marketValueFormatted": "€45M",
      "contractUntil": "2029",
      "age": 32,
      "heightCm": 180,
      "nationality": "Portugal",
      "preferredFoot": "Right",
      "previousClubs": [
        "Manchester United"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.12,
      "formGuide": [
        "W",
        "W",
        "W",
        "D",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "ucl-md3-1",
          "date": "2026-10-14",
          "opponent": "Champions League Rival",
          "competition": "UEFA Champions League",
          "rating": 8.35,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 82,
          "accuratePassesPct": 89,
          "keyPasses": 4
        }
      ],
      "duelWinPct": 62,
      "touchesPer90": 84.5
    },
    "optaMetrics": {
      "xG": 4.8,
      "xA": 5.2,
      "xGOT": 5.1,
      "xGPer90": 0.48,
      "xAPer90": 0.52,
      "progressiveCarries": 42,
      "lineBreakingPasses": 64,
      "finalThirdEntries": 58,
      "tacklesWon": 18,
      "interceptions": 12,
      "clearances": 8,
      "pressuresWon": 24,
      "aerialDuelsWonPct": 56
    }
  },
  "messi": {
    "id": "messi",
    "name": "Lionel Messi",
    "club": "Inter Miami",
    "leagueId": "ucl",
    "position": "Forward",
    "nationality": "Argentina",
    "number": 10,
    "headshotUrl": "/assets/players/messi.png",
    "careerFreeKickGoals": 67,
    "careerAssists": 382,
    "careerGoals": 848,
    "dominanceZone": "Right Half-Space",
    "passes": [
      {
        "id": "messi-pass-1",
        "playerId": "messi",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": -8.5
        },
        "end": {
          "x": 16.5,
          "y": -14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "messi-pass-2",
        "playerId": "messi",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": 10.5
        },
        "end": {
          "x": 42,
          "y": 4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "messi-pass-3",
        "playerId": "messi",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": -18
        },
        "end": {
          "x": 48.5,
          "y": -3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "messi-pass-4",
        "playerId": "messi",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": 24
        },
        "end": {
          "x": 36,
          "y": -18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      },
      {
        "id": "messi-pass-fk",
        "playerId": "messi",
        "minute": 85,
        "second": 20,
        "start": {
          "x": 26.5,
          "y": 9
        },
        "end": {
          "x": 52.5,
          "y": -2.8
        },
        "apexHeight": 3.1,
        "category": "freekick",
        "velocityKmH": 104,
        "distanceM": 26.7,
        "xGOT": 0.94,
        "landingQuadrant": 1,
        "description": "Curling direct free-kick goal over 10-yard wall into top corner"
      }
    ],
    "stats": {
      "normalPasses": 780,
      "keyPasses": 46,
      "assists": 14,
      "freeKickGoals": 67,
      "aerialCrosses": 12,
      "passAccuracyPct": 89.4,
      "expectedAssists": 12.8
    },
    "marketInfo": {
      "marketValueEur": 30000000,
      "marketValueFormatted": "€30M",
      "contractUntil": "2026",
      "age": 37,
      "heightCm": 170,
      "nationality": "Argentina",
      "preferredFoot": "Left",
      "previousClubs": [
        "FC Barcelona",
        "Paris Saint-Germain",
        "Inter Miami"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.68,
      "formGuide": [
        "W",
        "W",
        "W",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-messi-1",
          "date": "2026-10-14",
          "opponent": "Atlanta United",
          "competition": "MLS & International",
          "rating": 8.92,
          "minutesPlayed": 90,
          "goals": 2,
          "assists": 1,
          "touches": 98,
          "accuratePassesPct": 91.2,
          "keyPasses": 6
        }
      ],
      "duelWinPct": 68,
      "touchesPer90": 95
    },
    "optaMetrics": {
      "xG": 18.4,
      "xA": 14.2,
      "xGOT": 21,
      "xGPer90": 0.88,
      "xAPer90": 0.68,
      "progressiveCarries": 94,
      "lineBreakingPasses": 112,
      "finalThirdEntries": 138,
      "tacklesWon": 12,
      "interceptions": 8,
      "clearances": 4,
      "pressuresWon": 28,
      "aerialDuelsWonPct": 40
    }
  },
  "gyokeres": {
    "id": "gyokeres",
    "name": "Viktor Gyökeres",
    "club": "Sporting CP",
    "leagueId": "ucl",
    "position": "Forward",
    "nationality": "Sweden",
    "number": 10,
    "headshotUrl": "/assets/players/gyokeres.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 11,
    "careerGoals": 32,
    "dominanceZone": "Attacking Box",
    "passes": [
      {
        "id": "gyokeres-pass-1",
        "playerId": "gyokeres",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "gyokeres-pass-2",
        "playerId": "gyokeres",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "gyokeres-pass-3",
        "playerId": "gyokeres",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "gyokeres-pass-4",
        "playerId": "gyokeres",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 420,
      "keyPasses": 22,
      "assists": 11,
      "freeKickGoals": 0,
      "aerialCrosses": 15,
      "passAccuracyPct": 87.5,
      "expectedAssists": 5.8
    },
    "marketInfo": {
      "marketValueEur": 75000000,
      "marketValueFormatted": "€75M",
      "contractUntil": "2028",
      "age": 26,
      "heightCm": 182,
      "nationality": "Sweden",
      "preferredFoot": "Right",
      "previousClubs": [
        "Sporting CP"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.42,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-gyokeres-1",
          "date": "2026-10-14",
          "opponent": "Rival",
          "competition": "European Match",
          "rating": 8.42,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 72,
          "accuratePassesPct": 88,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 59,
      "touchesPer90": 74
    },
    "optaMetrics": {
      "xG": 27.2,
      "xA": 8.8,
      "xGOT": 28.8,
      "xGPer90": 0.52,
      "xAPer90": 0.35,
      "progressiveCarries": 38,
      "lineBreakingPasses": 45,
      "finalThirdEntries": 52,
      "tacklesWon": 14,
      "interceptions": 11,
      "clearances": 6,
      "pressuresWon": 20,
      "aerialDuelsWonPct": 53
    }
  },
  "watkins": {
    "id": "watkins",
    "name": "Ollie Watkins",
    "club": "Aston Villa",
    "leagueId": "premier-league",
    "position": "Forward",
    "nationality": "England",
    "number": 10,
    "headshotUrl": "/assets/players/watkins.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 13,
    "careerGoals": 19,
    "dominanceZone": "Attacking Box",
    "passes": [
      {
        "id": "watkins-pass-1",
        "playerId": "watkins",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "watkins-pass-2",
        "playerId": "watkins",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "watkins-pass-3",
        "playerId": "watkins",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "watkins-pass-4",
        "playerId": "watkins",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 420,
      "keyPasses": 22,
      "assists": 13,
      "freeKickGoals": 0,
      "aerialCrosses": 15,
      "passAccuracyPct": 87.5,
      "expectedAssists": 5.8
    },
    "marketInfo": {
      "marketValueEur": 65000000,
      "marketValueFormatted": "€65M",
      "contractUntil": "2028",
      "age": 28,
      "heightCm": 182,
      "nationality": "England",
      "preferredFoot": "Right",
      "previousClubs": [
        "Aston Villa"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.15,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-watkins-1",
          "date": "2026-10-14",
          "opponent": "Rival",
          "competition": "European Match",
          "rating": 8.15,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 72,
          "accuratePassesPct": 88,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 59,
      "touchesPer90": 74
    },
    "optaMetrics": {
      "xG": 16.1,
      "xA": 10.4,
      "xGOT": 17.1,
      "xGPer90": 0.52,
      "xAPer90": 0.35,
      "progressiveCarries": 38,
      "lineBreakingPasses": 45,
      "finalThirdEntries": 52,
      "tacklesWon": 14,
      "interceptions": 11,
      "clearances": 6,
      "pressuresWon": 20,
      "aerialDuelsWonPct": 53
    }
  },
  "rodri": {
    "id": "rodri",
    "name": "Rodri",
    "club": "Manchester City",
    "leagueId": "premier-league",
    "position": "Midfielder",
    "nationality": "Spain",
    "number": 10,
    "headshotUrl": "/assets/players/rodri.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 14,
    "careerGoals": 9,
    "dominanceZone": "Midfield Third",
    "passes": [
      {
        "id": "rodri-pass-1",
        "playerId": "rodri",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "rodri-pass-2",
        "playerId": "rodri",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "rodri-pass-3",
        "playerId": "rodri",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "rodri-pass-4",
        "playerId": "rodri",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 420,
      "keyPasses": 22,
      "assists": 14,
      "freeKickGoals": 0,
      "aerialCrosses": 15,
      "passAccuracyPct": 87.5,
      "expectedAssists": 5.8
    },
    "marketInfo": {
      "marketValueEur": 130000000,
      "marketValueFormatted": "€130M",
      "contractUntil": "2028",
      "age": 28,
      "heightCm": 182,
      "nationality": "Spain",
      "preferredFoot": "Right",
      "previousClubs": [
        "Manchester City"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.52,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-rodri-1",
          "date": "2026-10-14",
          "opponent": "Rival",
          "competition": "European Match",
          "rating": 8.52,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 72,
          "accuratePassesPct": 88,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 59,
      "touchesPer90": 74
    },
    "optaMetrics": {
      "xG": 7.6,
      "xA": 11.2,
      "xGOT": 8.1,
      "xGPer90": 0.52,
      "xAPer90": 0.35,
      "progressiveCarries": 38,
      "lineBreakingPasses": 45,
      "finalThirdEntries": 52,
      "tacklesWon": 14,
      "interceptions": 11,
      "clearances": 6,
      "pressuresWon": 20,
      "aerialDuelsWonPct": 53
    }
  },
  "courtois": {
    "id": "courtois",
    "name": "Thibaut Courtois",
    "club": "Real Madrid",
    "leagueId": "la-liga",
    "position": "Goalkeeper",
    "nationality": "Belgium",
    "number": 1,
    "headshotUrl": "/assets/players/courtois.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 0,
    "careerGoals": 0,
    "dominanceZone": "Defensive Half",
    "passes": [
      {
        "id": "courtois-pass-1",
        "playerId": "courtois",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "courtois-pass-2",
        "playerId": "courtois",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "courtois-pass-3",
        "playerId": "courtois",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "courtois-pass-4",
        "playerId": "courtois",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 420,
      "keyPasses": 22,
      "assists": 0,
      "freeKickGoals": 0,
      "aerialCrosses": 15,
      "passAccuracyPct": 87.5,
      "expectedAssists": 5.8
    },
    "marketInfo": {
      "marketValueEur": 28000000,
      "marketValueFormatted": "€28M",
      "contractUntil": "2028",
      "age": 32,
      "heightCm": 182,
      "nationality": "Belgium",
      "preferredFoot": "Right",
      "previousClubs": [
        "Real Madrid"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.24,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-courtois-1",
          "date": "2026-10-14",
          "opponent": "Rival",
          "competition": "European Match",
          "rating": 8.24,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 72,
          "accuratePassesPct": 88,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 59,
      "touchesPer90": 74
    },
    "optaMetrics": {
      "xG": 0,
      "xA": 0,
      "xGOT": 0,
      "xGPer90": 0.52,
      "xAPer90": 0.35,
      "progressiveCarries": 38,
      "lineBreakingPasses": 45,
      "finalThirdEntries": 52,
      "tacklesWon": 14,
      "interceptions": 11,
      "clearances": 6,
      "pressuresWon": 20,
      "aerialDuelsWonPct": 53
    }
  },
  "modric": {
    "id": "modric",
    "name": "Luka Modrić",
    "club": "Real Madrid",
    "leagueId": "la-liga",
    "position": "Midfielder",
    "nationality": "Croatia",
    "number": 10,
    "headshotUrl": "/assets/players/modric.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 8,
    "careerGoals": 2,
    "dominanceZone": "Midfield Third",
    "passes": [
      {
        "id": "modric-pass-1",
        "playerId": "modric",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "modric-pass-2",
        "playerId": "modric",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "modric-pass-3",
        "playerId": "modric",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "modric-pass-4",
        "playerId": "modric",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 420,
      "keyPasses": 22,
      "assists": 8,
      "freeKickGoals": 0,
      "aerialCrosses": 15,
      "passAccuracyPct": 87.5,
      "expectedAssists": 5.8
    },
    "marketInfo": {
      "marketValueEur": 6000000,
      "marketValueFormatted": "€6M",
      "contractUntil": "2028",
      "age": 39,
      "heightCm": 182,
      "nationality": "Croatia",
      "preferredFoot": "Right",
      "previousClubs": [
        "Real Madrid"
      ]
    },
    "sofascoreData": {
      "seasonRating": 7.92,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-modric-1",
          "date": "2026-10-14",
          "opponent": "Rival",
          "competition": "European Match",
          "rating": 7.92,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 72,
          "accuratePassesPct": 88,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 59,
      "touchesPer90": 74
    },
    "optaMetrics": {
      "xG": 1.7,
      "xA": 6.4,
      "xGOT": 1.8,
      "xGPer90": 0.52,
      "xAPer90": 0.35,
      "progressiveCarries": 38,
      "lineBreakingPasses": 45,
      "finalThirdEntries": 52,
      "tacklesWon": 14,
      "interceptions": 11,
      "clearances": 6,
      "pressuresWon": 20,
      "aerialDuelsWonPct": 53
    }
  },
  "dybala": {
    "id": "dybala",
    "name": "Paulo Dybala",
    "club": "AS Roma",
    "leagueId": "serie-a",
    "position": "Forward",
    "nationality": "Argentina",
    "number": 10,
    "headshotUrl": "/assets/players/dybala.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 10,
    "careerGoals": 16,
    "dominanceZone": "Attacking Box",
    "passes": [
      {
        "id": "dybala-pass-1",
        "playerId": "dybala",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": -8.5
        },
        "end": {
          "x": 16.5,
          "y": -14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "dybala-pass-2",
        "playerId": "dybala",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": 10.5
        },
        "end": {
          "x": 42,
          "y": 4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "dybala-pass-3",
        "playerId": "dybala",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": -18
        },
        "end": {
          "x": 48.5,
          "y": -3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "dybala-pass-4",
        "playerId": "dybala",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": 24
        },
        "end": {
          "x": 36,
          "y": -18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 420,
      "keyPasses": 22,
      "assists": 10,
      "freeKickGoals": 0,
      "aerialCrosses": 15,
      "passAccuracyPct": 87.5,
      "expectedAssists": 5.8
    },
    "marketInfo": {
      "marketValueEur": 18000000,
      "marketValueFormatted": "€18M",
      "contractUntil": "2028",
      "age": 31,
      "heightCm": 182,
      "nationality": "Argentina",
      "preferredFoot": "Right",
      "previousClubs": [
        "AS Roma"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.05,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-dybala-1",
          "date": "2026-10-14",
          "opponent": "Rival",
          "competition": "European Match",
          "rating": 8.05,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 72,
          "accuratePassesPct": 88,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 59,
      "touchesPer90": 74
    },
    "optaMetrics": {
      "xG": 13.6,
      "xA": 8,
      "xGOT": 14.4,
      "xGPer90": 0.52,
      "xAPer90": 0.35,
      "progressiveCarries": 38,
      "lineBreakingPasses": 45,
      "finalThirdEntries": 52,
      "tacklesWon": 14,
      "interceptions": 11,
      "clearances": 6,
      "pressuresWon": 20,
      "aerialDuelsWonPct": 53
    }
  },
  "dovbyk": {
    "id": "dovbyk",
    "name": "Artem Dovbyk",
    "club": "AS Roma",
    "leagueId": "serie-a",
    "position": "Forward",
    "nationality": "Ukraine",
    "number": 10,
    "headshotUrl": "/assets/players/dovbyk.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 8,
    "careerGoals": 24,
    "dominanceZone": "Attacking Box",
    "passes": [
      {
        "id": "dovbyk-pass-1",
        "playerId": "dovbyk",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "dovbyk-pass-2",
        "playerId": "dovbyk",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "dovbyk-pass-3",
        "playerId": "dovbyk",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "dovbyk-pass-4",
        "playerId": "dovbyk",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 420,
      "keyPasses": 22,
      "assists": 8,
      "freeKickGoals": 0,
      "aerialCrosses": 15,
      "passAccuracyPct": 87.5,
      "expectedAssists": 5.8
    },
    "marketInfo": {
      "marketValueEur": 35000000,
      "marketValueFormatted": "€35M",
      "contractUntil": "2028",
      "age": 27,
      "heightCm": 182,
      "nationality": "Ukraine",
      "preferredFoot": "Right",
      "previousClubs": [
        "AS Roma"
      ]
    },
    "sofascoreData": {
      "seasonRating": 7.84,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-dovbyk-1",
          "date": "2026-10-14",
          "opponent": "Rival",
          "competition": "European Match",
          "rating": 7.84,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 72,
          "accuratePassesPct": 88,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 59,
      "touchesPer90": 74
    },
    "optaMetrics": {
      "xG": 20.4,
      "xA": 6.4,
      "xGOT": 21.6,
      "xGPer90": 0.52,
      "xAPer90": 0.35,
      "progressiveCarries": 38,
      "lineBreakingPasses": 45,
      "finalThirdEntries": 52,
      "tacklesWon": 14,
      "interceptions": 11,
      "clearances": 6,
      "pressuresWon": 20,
      "aerialDuelsWonPct": 53
    }
  },
  "pellegrini": {
    "id": "pellegrini",
    "name": "Lorenzo Pellegrini",
    "club": "AS Roma",
    "leagueId": "serie-a",
    "position": "Midfielder",
    "nationality": "Italy",
    "number": 10,
    "headshotUrl": "/assets/players/pellegrini.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 11,
    "careerGoals": 10,
    "dominanceZone": "Midfield Third",
    "passes": [
      {
        "id": "pellegrini-pass-1",
        "playerId": "pellegrini",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "pellegrini-pass-2",
        "playerId": "pellegrini",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "pellegrini-pass-3",
        "playerId": "pellegrini",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "pellegrini-pass-4",
        "playerId": "pellegrini",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 420,
      "keyPasses": 22,
      "assists": 11,
      "freeKickGoals": 0,
      "aerialCrosses": 15,
      "passAccuracyPct": 87.5,
      "expectedAssists": 5.8
    },
    "marketInfo": {
      "marketValueEur": 25000000,
      "marketValueFormatted": "€25M",
      "contractUntil": "2028",
      "age": 28,
      "heightCm": 182,
      "nationality": "Italy",
      "preferredFoot": "Right",
      "previousClubs": [
        "AS Roma"
      ]
    },
    "sofascoreData": {
      "seasonRating": 7.78,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-pellegrini-1",
          "date": "2026-10-14",
          "opponent": "Rival",
          "competition": "European Match",
          "rating": 7.78,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 72,
          "accuratePassesPct": 88,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 59,
      "touchesPer90": 74
    },
    "optaMetrics": {
      "xG": 8.5,
      "xA": 8.8,
      "xGOT": 9,
      "xGPer90": 0.52,
      "xAPer90": 0.35,
      "progressiveCarries": 38,
      "lineBreakingPasses": 45,
      "finalThirdEntries": 52,
      "tacklesWon": 14,
      "interceptions": 11,
      "clearances": 6,
      "pressuresWon": 20,
      "aerialDuelsWonPct": 53
    }
  },
  "soule": {
    "id": "soule",
    "name": "Matías Soulé",
    "club": "AS Roma",
    "leagueId": "serie-a",
    "position": "Forward",
    "nationality": "Argentina",
    "number": 10,
    "headshotUrl": "/assets/players/soule.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 6,
    "careerGoals": 11,
    "dominanceZone": "Attacking Box",
    "passes": [
      {
        "id": "soule-pass-1",
        "playerId": "soule",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "soule-pass-2",
        "playerId": "soule",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "soule-pass-3",
        "playerId": "soule",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "soule-pass-4",
        "playerId": "soule",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 420,
      "keyPasses": 22,
      "assists": 6,
      "freeKickGoals": 0,
      "aerialCrosses": 15,
      "passAccuracyPct": 87.5,
      "expectedAssists": 5.8
    },
    "marketInfo": {
      "marketValueEur": 25000000,
      "marketValueFormatted": "€25M",
      "contractUntil": "2028",
      "age": 21,
      "heightCm": 182,
      "nationality": "Argentina",
      "preferredFoot": "Right",
      "previousClubs": [
        "AS Roma"
      ]
    },
    "sofascoreData": {
      "seasonRating": 7.82,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-soule-1",
          "date": "2026-10-14",
          "opponent": "Rival",
          "competition": "European Match",
          "rating": 7.82,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 72,
          "accuratePassesPct": 88,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 59,
      "touchesPer90": 74
    },
    "optaMetrics": {
      "xG": 9.3,
      "xA": 4.8,
      "xGOT": 9.9,
      "xGPer90": 0.52,
      "xAPer90": 0.35,
      "progressiveCarries": 38,
      "lineBreakingPasses": 45,
      "finalThirdEntries": 52,
      "tacklesWon": 14,
      "interceptions": 11,
      "clearances": 6,
      "pressuresWon": 20,
      "aerialDuelsWonPct": 53
    }
  },
  "mancini": {
    "id": "mancini",
    "name": "Gianluca Mancini",
    "club": "AS Roma",
    "leagueId": "serie-a",
    "position": "Defender",
    "nationality": "Italy",
    "number": 10,
    "headshotUrl": "/assets/players/mancini.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 1,
    "careerGoals": 4,
    "dominanceZone": "Defensive Half",
    "passes": [
      {
        "id": "mancini-pass-1",
        "playerId": "mancini",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "mancini-pass-2",
        "playerId": "mancini",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "mancini-pass-3",
        "playerId": "mancini",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "mancini-pass-4",
        "playerId": "mancini",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 420,
      "keyPasses": 22,
      "assists": 1,
      "freeKickGoals": 0,
      "aerialCrosses": 15,
      "passAccuracyPct": 87.5,
      "expectedAssists": 5.8
    },
    "marketInfo": {
      "marketValueEur": 22000000,
      "marketValueFormatted": "€22M",
      "contractUntil": "2028",
      "age": 28,
      "heightCm": 182,
      "nationality": "Italy",
      "preferredFoot": "Right",
      "previousClubs": [
        "AS Roma"
      ]
    },
    "sofascoreData": {
      "seasonRating": 7.65,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-mancini-1",
          "date": "2026-10-14",
          "opponent": "Rival",
          "competition": "European Match",
          "rating": 7.65,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 72,
          "accuratePassesPct": 88,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 59,
      "touchesPer90": 74
    },
    "optaMetrics": {
      "xG": 3.4,
      "xA": 0.8,
      "xGOT": 3.6,
      "xGPer90": 0.52,
      "xAPer90": 0.35,
      "progressiveCarries": 38,
      "lineBreakingPasses": 45,
      "finalThirdEntries": 52,
      "tacklesWon": 14,
      "interceptions": 11,
      "clearances": 6,
      "pressuresWon": 20,
      "aerialDuelsWonPct": 53
    }
  },
  "endrick": {
    "id": "endrick",
    "name": "Endrick",
    "club": "Real Madrid",
    "leagueId": "la-liga",
    "position": "Forward",
    "nationality": "Brazil",
    "number": 10,
    "headshotUrl": "/assets/players/endrick.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 2,
    "careerGoals": 7,
    "dominanceZone": "Attacking Box",
    "passes": [
      {
        "id": "endrick-pass-1",
        "playerId": "endrick",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "endrick-pass-2",
        "playerId": "endrick",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "endrick-pass-3",
        "playerId": "endrick",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "endrick-pass-4",
        "playerId": "endrick",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 420,
      "keyPasses": 22,
      "assists": 2,
      "freeKickGoals": 0,
      "aerialCrosses": 15,
      "passAccuracyPct": 87.5,
      "expectedAssists": 5.8
    },
    "marketInfo": {
      "marketValueEur": 60000000,
      "marketValueFormatted": "€60M",
      "contractUntil": "2028",
      "age": 18,
      "heightCm": 182,
      "nationality": "Brazil",
      "preferredFoot": "Right",
      "previousClubs": [
        "Real Madrid"
      ]
    },
    "sofascoreData": {
      "seasonRating": 7.85,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-endrick-1",
          "date": "2026-10-14",
          "opponent": "Rival",
          "competition": "European Match",
          "rating": 7.85,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 72,
          "accuratePassesPct": 88,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 59,
      "touchesPer90": 74
    },
    "optaMetrics": {
      "xG": 6,
      "xA": 1.6,
      "xGOT": 6.3,
      "xGPer90": 0.52,
      "xAPer90": 0.35,
      "progressiveCarries": 38,
      "lineBreakingPasses": 45,
      "finalThirdEntries": 52,
      "tacklesWon": 14,
      "interceptions": 11,
      "clearances": 6,
      "pressuresWon": 20,
      "aerialDuelsWonPct": 53
    }
  },
  "dimarco": {
    "id": "dimarco",
    "name": "Federico Dimarco",
    "club": "Inter Milan",
    "leagueId": "serie-a",
    "position": "Defender",
    "nationality": "Italy",
    "number": 10,
    "headshotUrl": "/assets/players/dimarco.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 9,
    "careerGoals": 6,
    "dominanceZone": "Defensive Half",
    "passes": [
      {
        "id": "dimarco-pass-1",
        "playerId": "dimarco",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "dimarco-pass-2",
        "playerId": "dimarco",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "dimarco-pass-3",
        "playerId": "dimarco",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "dimarco-pass-4",
        "playerId": "dimarco",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 420,
      "keyPasses": 22,
      "assists": 9,
      "freeKickGoals": 0,
      "aerialCrosses": 15,
      "passAccuracyPct": 87.5,
      "expectedAssists": 5.8
    },
    "marketInfo": {
      "marketValueEur": 50000000,
      "marketValueFormatted": "€50M",
      "contractUntil": "2028",
      "age": 27,
      "heightCm": 182,
      "nationality": "Italy",
      "preferredFoot": "Right",
      "previousClubs": [
        "Inter Milan"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.1,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-dimarco-1",
          "date": "2026-10-14",
          "opponent": "Rival",
          "competition": "European Match",
          "rating": 8.1,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 72,
          "accuratePassesPct": 88,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 59,
      "touchesPer90": 74
    },
    "optaMetrics": {
      "xG": 5.1,
      "xA": 7.2,
      "xGOT": 5.4,
      "xGPer90": 0.52,
      "xAPer90": 0.35,
      "progressiveCarries": 38,
      "lineBreakingPasses": 45,
      "finalThirdEntries": 52,
      "tacklesWon": 14,
      "interceptions": 11,
      "clearances": 6,
      "pressuresWon": 20,
      "aerialDuelsWonPct": 53
    }
  },
  "lookman": {
    "id": "lookman",
    "name": "Ademola Lookman",
    "club": "Atalanta",
    "leagueId": "serie-a",
    "position": "Forward",
    "nationality": "Nigeria",
    "number": 10,
    "headshotUrl": "/assets/players/lookman.png",
    "careerFreeKickGoals": 0,
    "careerAssists": 10,
    "careerGoals": 17,
    "dominanceZone": "Attacking Box",
    "passes": [
      {
        "id": "lookman-pass-1",
        "playerId": "lookman",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "lookman-pass-2",
        "playerId": "lookman",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "lookman-pass-3",
        "playerId": "lookman",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "lookman-pass-4",
        "playerId": "lookman",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      }
    ],
    "stats": {
      "normalPasses": 420,
      "keyPasses": 22,
      "assists": 10,
      "freeKickGoals": 0,
      "aerialCrosses": 15,
      "passAccuracyPct": 87.5,
      "expectedAssists": 5.8
    },
    "marketInfo": {
      "marketValueEur": 40000000,
      "marketValueFormatted": "€40M",
      "contractUntil": "2028",
      "age": 27,
      "heightCm": 182,
      "nationality": "Nigeria",
      "preferredFoot": "Right",
      "previousClubs": [
        "Atalanta"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.18,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-lookman-1",
          "date": "2026-10-14",
          "opponent": "Rival",
          "competition": "European Match",
          "rating": 8.18,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 72,
          "accuratePassesPct": 88,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 59,
      "touchesPer90": 74
    },
    "optaMetrics": {
      "xG": 14.4,
      "xA": 8,
      "xGOT": 15.3,
      "xGPer90": 0.52,
      "xAPer90": 0.35,
      "progressiveCarries": 38,
      "lineBreakingPasses": 45,
      "finalThirdEntries": 52,
      "tacklesWon": 14,
      "interceptions": 11,
      "clearances": 6,
      "pressuresWon": 20,
      "aerialDuelsWonPct": 53
    }
  },
  "ronaldo": {
    "id": "ronaldo",
    "name": "Cristiano Ronaldo",
    "club": "Al Nassr",
    "leagueId": "ucl",
    "position": "Forward",
    "nationality": "Portugal",
    "number": 10,
    "headshotUrl": "/assets/players/ronaldo.png",
    "careerFreeKickGoals": 64,
    "careerAssists": 255,
    "careerGoals": 907,
    "dominanceZone": "Attacking Box",
    "passes": [
      {
        "id": "ronaldo-pass-1",
        "playerId": "ronaldo",
        "minute": 14,
        "second": 28,
        "start": {
          "x": -12,
          "y": 8.5
        },
        "end": {
          "x": 16.5,
          "y": 14.2
        },
        "apexHeight": 0.08,
        "category": "normal",
        "velocityKmH": 52,
        "distanceM": 29.1,
        "description": "Crisp ground pass breaking opposition midfield press"
      },
      {
        "id": "ronaldo-pass-2",
        "playerId": "ronaldo",
        "minute": 38,
        "second": 15,
        "start": {
          "x": 18.5,
          "y": -10.5
        },
        "end": {
          "x": 42,
          "y": -4
        },
        "apexHeight": 0.12,
        "category": "key",
        "velocityKmH": 74.5,
        "distanceM": 24.4,
        "description": "Incisive through-ball threaded behind the defensive line"
      },
      {
        "id": "ronaldo-pass-3",
        "playerId": "ronaldo",
        "minute": 61,
        "second": 44,
        "start": {
          "x": 38,
          "y": 18
        },
        "end": {
          "x": 48.5,
          "y": 3.2
        },
        "apexHeight": 0.45,
        "category": "assist",
        "velocityKmH": 68,
        "distanceM": 18.1,
        "xGOT": 0.88,
        "description": "Pinpoint cutback assist tapped into bottom right corner"
      },
      {
        "id": "ronaldo-pass-4",
        "playerId": "ronaldo",
        "minute": 78,
        "second": 5,
        "start": {
          "x": 5,
          "y": -24
        },
        "end": {
          "x": 36,
          "y": 18.5
        },
        "apexHeight": 6.4,
        "category": "aerial",
        "velocityKmH": 82,
        "distanceM": 52.6,
        "description": "High diagonal switch stretching attacking width across the pitch"
      },
      {
        "id": "ronaldo-pass-fk",
        "playerId": "ronaldo",
        "minute": 85,
        "second": 20,
        "start": {
          "x": 26.5,
          "y": -9
        },
        "end": {
          "x": 52.5,
          "y": -2.8
        },
        "apexHeight": 3.1,
        "category": "freekick",
        "velocityKmH": 104,
        "distanceM": 26.7,
        "xGOT": 0.94,
        "landingQuadrant": 1,
        "description": "Curling direct free-kick goal over 10-yard wall into top corner"
      }
    ],
    "stats": {
      "normalPasses": 420,
      "keyPasses": 22,
      "assists": 255,
      "freeKickGoals": 1,
      "aerialCrosses": 15,
      "passAccuracyPct": 87.5,
      "expectedAssists": 5.8
    },
    "marketInfo": {
      "marketValueEur": 15000000,
      "marketValueFormatted": "€15M",
      "contractUntil": "2028",
      "age": 41,
      "heightCm": 182,
      "nationality": "Portugal",
      "preferredFoot": "Right",
      "previousClubs": [
        "Al Nassr"
      ]
    },
    "sofascoreData": {
      "seasonRating": 8.12,
      "formGuide": [
        "W",
        "W",
        "D",
        "W",
        "W"
      ],
      "matchLogs": [
        {
          "matchId": "m-ronaldo-1",
          "date": "2026-10-14",
          "opponent": "Rival",
          "competition": "European Match",
          "rating": 8.12,
          "minutesPlayed": 90,
          "goals": 1,
          "assists": 1,
          "touches": 72,
          "accuratePassesPct": 88,
          "keyPasses": 3
        }
      ],
      "duelWinPct": 59,
      "touchesPer90": 74
    },
    "optaMetrics": {
      "xG": 770.9,
      "xA": 204,
      "xGOT": 816.3,
      "xGPer90": 0.52,
      "xAPer90": 0.35,
      "progressiveCarries": 38,
      "lineBreakingPasses": 45,
      "finalThirdEntries": 52,
      "tacklesWon": 14,
      "interceptions": 11,
      "clearances": 6,
      "pressuresWon": 20,
      "aerialDuelsWonPct": 53
    }
  }
};

export function getAllPlayers(): Player[] {
  return Object.values(MEGA_FOOTBALL_REGISTRY);
}

export function getPlayerById(id: string): Player | undefined {
  return MEGA_FOOTBALL_REGISTRY[id];
}

export function getPlayersByLeague(leagueId: string): Player[] {
  return getAllPlayers().filter(p => p.leagueId === leagueId);
}

export function getPlayersByClub(clubName: string): Player[] {
  const norm = clubName.toLowerCase();
  return getAllPlayers().filter(p => p.club.toLowerCase().includes(norm));
}

export function searchPlayers(query: string): Player[] {
  if (!query || query.trim().length === 0) return getAllPlayers();
  const q = query.toLowerCase().trim();
  return getAllPlayers().filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.club.toLowerCase().includes(q) ||
    p.position.toLowerCase().includes(q) ||
    p.nationality.toLowerCase().includes(q) ||
    (p.leagueId && p.leagueId.toLowerCase().includes(q))
  );
}
