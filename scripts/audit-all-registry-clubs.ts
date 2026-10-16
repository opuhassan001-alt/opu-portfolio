import { MEGA_FOOTBALL_REGISTRY } from '../src/data/megaFootballRegistry';

// Check players across European clubs
const players = Object.values(MEGA_FOOTBALL_REGISTRY);
console.log('Total players in MEGA_FOOTBALL_REGISTRY:', players.length);

const clubCounts = {};
for (const p of players) {
  clubCounts[p.club] = (clubCounts[p.club] || 0) + 1;
}
console.log('Clubs and counts:\n', clubCounts);

