const fs = require('fs');
const path = require('path');

const regText = fs.readFileSync('src/data/megaFootballRegistry.ts', 'utf-8');
const idMatches = [...regText.matchAll(/"id":\s*"([^"]+)",\s*\n\s*"name":\s*"([^"]+)"/g)];
console.log('Total players in megaFootballRegistry:', idMatches.length);

const files = fs.readdirSync('public/assets/players');
let missing = 0;
let bad5192 = 0;
const audited = [];

for (const m of idMatches) {
  const id = m[1];
  const name = m[2];
  const pngExists = files.includes(id + '.png');
  const jpgExists = files.includes(id + '.jpg');
  const pngSize = pngExists ? fs.statSync('public/assets/players/' + id + '.png').size : 0;
  
  if (!pngExists && !jpgExists) {
    missing++;
    audited.push({ id, name, status: 'MISSING', size: 0 });
  } else if (pngSize === 5192) {
    bad5192++;
    audited.push({ id, name, status: 'PLACEHOLDER_5192', size: pngSize });
  } else {
    audited.push({ id, name, status: 'OK', size: pngSize });
  }
}

console.log(`Summary: total=${idMatches.length}, missing=${missing}, placeholder5192=${bad5192}, ok=${idMatches.length - missing - bad5192}`);
const issues = audited.filter(a => a.status !== 'OK');
if (issues.length > 0) {
  console.log('\nIssues found:');
  issues.forEach(i => console.log(`  [${i.status}] ${i.id} -> "${i.name}" (${i.size}B)`));
}
