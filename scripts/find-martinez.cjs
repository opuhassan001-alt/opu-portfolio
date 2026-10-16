const fs = require('fs');
const text = fs.readFileSync('src/data/fixturesData.ts', 'utf-8');
const lines = text.split('\n');
lines.forEach((l, idx) => {
  if (l.includes("'diaz'") || l.includes("'timber'") || l.includes("'martinez'")) {
    console.log(idx + 1, ':', l.trim());
  }
});

