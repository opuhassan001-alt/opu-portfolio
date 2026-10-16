import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { uclRosterRosterList } from '../ucl-analytics-dashboard/scripts/download-all-ucl-portraits.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetFile = path.resolve(__dirname, '../src/utils/image-pipeline.ts');
let content = fs.readFileSync(targetFile, 'utf8');

// Build the updated API_SPORTS_PLAYER_IDS map
const existingEntries = [
  'messi: 154',
  'kdb: 629',
  'mbappe: 278',
  "'arda-guler': 310826",
  'guler: 310826',
  'bellingham: 152982',
  'saka: 1466',
  'vinicius: 752'
];

const newEntries = uclRosterRosterList.map(item => `  '${item.id}': ${item.apiId},`);

const replacement = `export const API_SPORTS_PLAYER_IDS: Record<string, number | string> = {
  messi: 154,
  kdb: 629,
  mbappe: 278,
  'arda-guler': 310826,
  guler: 310826,
  bellingham: 152982,
  saka: 1466,
  vinicius: 752,
${newEntries.join('\n')}
};`;

content = content.replace(/export const API_SPORTS_PLAYER_IDS: Record<string, number \| string> = \{[\s\S]*?\};/, replacement);

fs.writeFileSync(targetFile, content, 'utf8');
console.log('Successfully updated API_SPORTS_PLAYER_IDS in src/utils/image-pipeline.ts');
