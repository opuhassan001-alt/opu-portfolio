const fs = require('fs');
const content = fs.readFileSync('src/data/uclCompleteRegistry.ts', 'utf8');
const regex = /"club":\s*"([^"]+)"/g;
const clubs = new Set();
let match;
while ((match = regex.exec(content)) !== null) {
  clubs.add(match[1]);
}
console.log('CLUBS:', Array.from(clubs));

// Look for Dortmund players
const regexDortmund = /"id":\s*"([^"]+)"[\s\S]*?"club":\s*"([^"]*Dortmund[^"]*)"/g;
const bvbPlayers = [];
let bvbMatch;
while ((bvbMatch = regexDortmund.exec(content)) !== null) {
  bvbPlayers.push(bvbMatch[1]);
}
console.log('BVB PLAYERS:', bvbPlayers);
