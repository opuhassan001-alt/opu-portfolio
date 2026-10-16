const fs = require('fs');
const mega = fs.readFileSync('src/data/megaFootballRegistry.ts', 'utf8');

function findOccurrences(name) {
  console.log(`\n=== SEARCH: ${name} ===`);
  const regex = new RegExp(`"id":\\s*"[^"]*${name}[^"]*"[\\s\\S]*?"club":\\s*"([^"]+)"[\\s\\S]*?"leagueId":\\s*"([^"]+)"`, 'gi');
  let m;
  while ((m = regex.exec(mega)) !== null) {
    console.log(m[0].substring(0, 200).replace(/\r?\n\s*/g, ' '));
  }
}

findOccurrences('dest');
findOccurrences('conceicao');
findOccurrences('lookman');

