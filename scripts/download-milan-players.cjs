const fs = require('fs');
const https = require('https');
const path = require('path');

const players = [
  { id: 18884, name: 'tomori-fikayo', aliases: ['tomori', 'fikayo-tomori'] },
  { id: 18861, name: 'loftus-cheek-ruben', aliases: ['loftus-cheek', 'ruben-loftus-cheek'] },
  { id: 1165, name: 'fofana-youssouf', aliases: ['fofana', 'youssouf-fofana'] },
  { id: 47311, name: 'chukwueze-samuel', aliases: ['chukwueze', 'samuel-chukwueze'] },
  { id: 18886, name: 'abraham-tammy', aliases: ['abraham', 'tammy-abraham'] },
  { id: 18835, name: 'emerson-royal', aliases: ['emerson'] },
  { id: 24765, name: 'thiaw-malick', aliases: ['thiaw', 'malick-thiaw'] },
  { id: 8492, name: 'pavlovic-strahinja', aliases: ['pavlovic', 'strahinja-pavlovic'] },
  { id: 48375, name: 'gabbia-matteo', aliases: ['gabbia', 'matteo-gabbia'] },
  { id: 30412, name: 'calabria-davide', aliases: ['calabria', 'davide-calabria'] },
  { id: 161933, name: 'musah-yunus', aliases: ['musah', 'yunus-musah'] },
  { id: 35142, name: 'okafor-noah', aliases: ['okafor', 'noah-okafor'] },
  { id: 2289, name: 'saelemaekers-alexis', aliases: ['saelemaekers', 'alexis-saelemaekers'] }
];

const destDirs = [
  path.resolve('public/assets/players'),
  path.resolve('public/players'),
  path.resolve('ucl-analytics-dashboard/public/players')
];

destDirs.forEach(d => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});

async function download(p) {
  const url = `https://media.api-sports.io/football/players/${p.id}.png`;
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        console.error(`Failed ${p.name}: status ${res.statusCode}`);
        return resolve();
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        const buffer = Buffer.concat(chunks);
        const allNames = [p.name, ...p.aliases];
        for (const dir of destDirs) {
          for (const name of allNames) {
            fs.writeFileSync(path.join(dir, `${name}.png`), buffer);
            fs.writeFileSync(path.join(dir, `${name}.jpg`), buffer);
          }
        }
        console.log(`Saved ${p.name} (${allNames.length} names) in ${destDirs.length} dirs (${buffer.length} bytes)`);
        resolve();
      });
    }).on('error', err => {
      console.error(`Error ${p.name}:`, err.message);
      resolve();
    });
  });
}

async function main() {
  for (const p of players) {
    await download(p);
  }
  console.log('All AC Milan players downloaded successfully!');
}

main();
