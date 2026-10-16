const fs = require('fs');
const https = require('https');
const path = require('path');

const players = [
  { id: 1534, name: 'de-vrij-stefan', aliases: ['de-vrij', 'stefan-de-vrij'] },
  { id: 30424, name: 'darmian-matteo', aliases: ['darmian', 'matteo-darmian'] },
  { id: 162589, name: 'asllani-kristjan', aliases: ['asllani', 'kristjan-asllani'] },
  { id: 47259, name: 'martinez-josep', aliases: ['josep-martinez'] }
];

const destDirs = [
  path.resolve('public/assets/players'),
  path.resolve('public/players'),
  path.resolve('ucl-analytics-dashboard/public/players')
];

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
        console.log(`Saved ${p.name}`);
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
}

main();
