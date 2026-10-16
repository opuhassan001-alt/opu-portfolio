import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { uclPlayers } from '../ucl-analytics-dashboard/src/data/uclData.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicAssetsDir = path.resolve(__dirname, '../public/assets/players');
const publicPlayersDir = path.resolve(__dirname, '../public/players');

let missingAssetsPng = 0;
let missingAssetsJpg = 0;
let missingPlayersJpg = 0;

uclPlayers.forEach(p => {
  const pPng = path.join(publicAssetsDir, `${p.id}.png`);
  const pJpg = path.join(publicAssetsDir, `${p.id}.jpg`);
  const pubJpg = path.join(publicPlayersDir, `${p.id}.jpg`);

  if (!fs.existsSync(pPng) || fs.statSync(pPng).size < 1000) missingAssetsPng++;
  if (!fs.existsSync(pJpg) || fs.statSync(pJpg).size < 1000) missingAssetsJpg++;
  if (!fs.existsSync(pubJpg) || fs.statSync(pubJpg).size < 1000) missingPlayersJpg++;
});

console.log(`UCL Players Total: ${uclPlayers.length}`);
console.log(`Missing in public/assets/players/*.png: ${missingAssetsPng}`);
console.log(`Missing in public/assets/players/*.jpg: ${missingAssetsJpg}`);
console.log(`Missing in public/players/*.jpg: ${missingPlayersJpg}`);
