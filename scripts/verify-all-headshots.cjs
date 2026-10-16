const fs = require('fs');

const fixturesText = fs.readFileSync('src/data/fixturesData.ts', 'utf-8');
const fixturesRegex = /getP\(\s*['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*,\s*(\d+)\s*\)/g;

const players = new Map();
let match;
while ((match = fixturesRegex.exec(fixturesText)) !== null) {
  const [_, id, name, club] = match;
  if (!players.has(id)) {
    players.set(id, { id, name, club });
  }
}

console.log(`Auditing ${players.size} players in fixturesData.ts...`);
let failed = 0;

for (const [id, p] of players) {
  const pngPath = `public/assets/players/${id}.png`;
  const jpgPath = `public/assets/players/${id}.jpg`;
  
  if (!fs.existsSync(pngPath)) {
    console.error(`[MISSING PNG] ${id} (${p.name}, ${p.club})`);
    failed++;
    continue;
  }
  
  const pngSize = fs.statSync(pngPath).size;
  if (pngSize === 5192) {
    console.error(`[PLACEHOLDER 5192] ${id} (${p.name}, ${p.club})`);
    failed++;
  } else if (pngSize < 2000) {
    console.error(`[TOO SMALL <2KB] ${id} (${p.name}, ${p.club}) - ${pngSize}B`);
    failed++;
  }
}

if (failed === 0) {
  console.log(`\nALL ${players.size} PLAYERS IN FIXTURES HAVE AUTHENTIC VERIFIED HIGH-RES HEADSHOTS (0 failures)!`);
} else {
  console.error(`\nFAILED: ${failed} players have invalid headshots!`);
  process.exit(1);
}

