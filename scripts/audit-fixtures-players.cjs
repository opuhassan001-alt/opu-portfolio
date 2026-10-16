const fs = require('fs');

// Extract all players from fixturesData.ts
const text = fs.readFileSync('src/data/fixturesData.ts', 'utf-8');
const regex = /getP\(\s*['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*,\s*(\d+)\s*\)/g;

const players = new Map();
let match;
while ((match = regex.exec(text)) !== null) {
  const [_, id, name, club, pos, num] = match;
  if (!players.has(id)) {
    players.set(id, { id, name, club, pos, num: Number(num) });
  }
}

console.log(`Found ${players.size} unique players across all 4 blockbuster fixtures.`);

const files = fs.readdirSync('public/assets/players');
const results = [];

for (const [id, p] of players) {
  const pngFile = `${id}.png`;
  const jpgFile = `${id}.jpg`;
  const pngExists = files.includes(pngFile);
  const jpgExists = files.includes(jpgFile);
  const size = pngExists ? fs.statSync(`public/assets/players/${pngFile}`).size : (jpgExists ? fs.statSync(`public/assets/players/${jpgFile}`).size : 0);
  
  let status = 'OK';
  if (!pngExists && !jpgExists) {
    status = 'MISSING';
  } else if (size === 5192) {
    status = 'PLACEHOLDER_5192';
  } else if (size < 1000) {
    status = 'SUSPICIOUS_SMALL';
  }

  results.push({ ...p, size, status, pngExists, jpgExists });
}

console.table(results.map(r => ({
  id: r.id,
  name: r.name,
  club: r.club,
  size: r.size,
  status: r.status
})));

const bad = results.filter(r => r.status !== 'OK');
console.log(`Total bad/missing players in fixtures: ${bad.length}`);
if (bad.length > 0) {
  console.log('Bad players:', bad.map(b => `${b.id} (${b.name}, ${b.club}) [${b.status}]`).join('\n'));
}

