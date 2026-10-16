const fs = require('fs');

// We will check all getP calls in fixturesData.ts
const fixText = fs.readFileSync('src/data/fixturesData.ts', 'utf-8');
const pMatches = [...fixText.matchAll(/getP\(\s*['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*,\s*(\d+)\s*\)/g)];

console.log(`Auditing ${pMatches.length} player references in fixturesData.ts...`);

// Search for each ID in megaFootballRegistry.ts and uclCompleteRegistry.ts
const megaText = fs.readFileSync('src/data/megaFootballRegistry.ts', 'utf-8');
const uclText = fs.readFileSync('src/data/uclCompleteRegistry.ts', 'utf-8');

function findRegistryPlayer(id) {
  // Check uclCompleteRegistry first then megaFootballRegistry
  for (const text of [uclText, megaText]) {
    const regex = new RegExp(`["']${id}["']:\\s*\\{[\\s\\S]*?"name":\\s*"([^"]+)",[\\s\\S]*?"club":\\s*"([^"]+)"`, 'g');
    const m = regex.exec(text);
    if (m) {
      return { id, name: m[1], club: m[2] };
    }
  }
  return null;
}

const mismatches = [];

for (const m of pMatches) {
  const [_, id, expectedName, expectedClub, pos, num] = m;
  const regPlayer = findRegistryPlayer(id);
  if (regPlayer) {
    if (regPlayer.name !== expectedName && !regPlayer.name.includes(expectedName) && !expectedName.includes(regPlayer.name)) {
      mismatches.push({
        id,
        expected: `${expectedName} (${expectedClub})`,
        foundInRegistry: `${regPlayer.name} (${regPlayer.club})`
      });
    }
  }
}

console.log(`Found ${mismatches.length} registry ID collisions!`);
if (mismatches.length > 0) {
  console.table(mismatches);
}
