import { MEGA_FOOTBALL_REGISTRY } from '../src/data/megaFootballRegistry.ts';
import { uclPlayers } from '../ucl-analytics-dashboard/src/data/uclData.ts';

const regKeys = new Set(Object.keys(MEGA_FOOTBALL_REGISTRY));
let missingCount = 0;
const missingList = [];

uclPlayers.forEach(p => {
  // Check both p.id and shorthand
  const baseId = p.id.split('-')[0];
  const found = regKeys.has(p.id) || regKeys.has(baseId);
  if (!found) {
    missingCount++;
    missingList.push({ id: p.id, name: p.name, club: p.club });
  }
});

console.log(`Total UCL players to match: ${uclPlayers.length}`);
console.log(`Missing in MEGA_FOOTBALL_REGISTRY: ${missingCount}`);
if (missingCount > 0) {
  console.log('Sample missing:', missingList.slice(0, 10));
}
