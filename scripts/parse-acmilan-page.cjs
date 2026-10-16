const fs = require('fs');
const html = fs.readFileSync('C:/Users/User/.gemini/antigravity/brain/1ee5d06b-b37a-434e-a86c-21760ac61f79/.system_generated/steps/2636/content.md', 'utf8');

// Look for player names or cards
const matches = [...html.matchAll(/player[s]?\/([a-zA-Z0-9\-_]+)/gi)];
console.log('Player path matches:', [...new Set(matches.map(m => m[1]))].slice(0, 50));

const cardMatches = [...html.matchAll(/alt="([^"]+)"/g)];
console.log('Alt texts:', [...new Set(cardMatches.map(m => m[1]))].filter(t => t.length > 3 && !t.includes('Puma') && !t.includes('Emirates') && !t.includes('MSC') && !t.includes('Bitpanda') && !t.includes('Konami')));

