import { MEGA_FOOTBALL_REGISTRY } from '../src/data/megaFootballRegistry';

console.log('=== AC MILAN PLAYERS IN MEGA_FOOTBALL_REGISTRY ===');
for (const [k, p] of Object.entries(MEGA_FOOTBALL_REGISTRY)) {
  if (p.club.toLowerCase().includes('ac milan')) {
    console.log(`${k}: name="${p.name}", club="${p.club}", number=${p.number}, pos="${p.position}", headshot="${p.headshotUrl}"`);
  }
}

console.log('\n=== INTER MILAN PLAYERS IN MEGA_FOOTBALL_REGISTRY ===');
for (const [k, p] of Object.entries(MEGA_FOOTBALL_REGISTRY)) {
  if (p.club.toLowerCase().includes('inter milan')) {
    console.log(`${k}: name="${p.name}", club="${p.club}", number=${p.number}, pos="${p.position}", headshot="${p.headshotUrl}"`);
  }
}

