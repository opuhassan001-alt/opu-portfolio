import { MEGA_FOOTBALL_REGISTRY } from '../src/data/megaFootballRegistry';

const entries = Object.entries(MEGA_FOOTBALL_REGISTRY);

console.log('--- All players whose name, id, or club contains "milan" ---');
for (const [key, player] of entries) {
  if (
    key.toLowerCase().includes('milan') ||
    player.name.toLowerCase().includes('milan') ||
    player.club.toLowerCase().includes('milan')
  ) {
    console.log(`Key: ${key.padEnd(25)} | Name: ${player.name.padEnd(25)} | Club: ${player.club.padEnd(20)} | League: ${player.leagueId}`);
  }
}

console.log('\n--- Look for any player whose club seems unusual or has "milan" in name ---');
for (const [key, player] of entries) {
  if (player.name.toLowerCase().includes('milan')) {
    console.log(`Player with Milan in name: ${player.name} (${player.id}) -> Club: ${player.club}`);
  }
}
