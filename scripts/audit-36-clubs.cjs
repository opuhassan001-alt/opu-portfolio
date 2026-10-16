const fs = require('fs');

const txt = fs.readFileSync('ucl-analytics-dashboard/src/data/uclData.ts', 'utf8');
const regex = /"name":\s*"([^"]+)",\r?\n\s*"shortName":\s*"([^"]+)",\r?\n\s*"jerseyNumber":\s*(\d+),\r?\n\s*"club":\s*"([^"]+)"/g;

let m;
const players = [];
while ((m = regex.exec(txt)) !== null) {
  players.push({
    name: m[1],
    number: m[3],
    club: m[4]
  });
}

console.log('Total players extracted from uclData.ts:', players.length);

// Print grouped by club
const byClub = {};
players.forEach(p => {
  byClub[p.club] = byClub[p.club] || [];
  byClub[p.club].push(`${p.name} (#${p.number})`);
});

for (const [club, plist] of Object.entries(byClub)) {
  console.log(`\n=== ${club} (${plist.length}) ===`);
  console.log(plist.join(', '));
}
