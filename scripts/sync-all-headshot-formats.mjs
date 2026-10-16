import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirs = [
  path.resolve(__dirname, '../public/assets/players'),
  path.resolve(__dirname, '../public/players'),
  path.resolve(__dirname, '../ucl-analytics-dashboard/public/players')
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (file.endsWith('.jpg')) {
      const pngPath = path.join(dir, file.replace(/\.jpg$/, '.png'));
      if (!fs.existsSync(pngPath) || fs.statSync(pngPath).size === 0) {
        fs.copyFileSync(fullPath, pngPath);
      }
    } else if (file.endsWith('.png')) {
      const jpgPath = path.join(dir, file.replace(/\.png$/, '.jpg'));
      if (!fs.existsSync(jpgPath) || fs.statSync(jpgPath).size === 0) {
        fs.copyFileSync(fullPath, jpgPath);
      }
    }
  });
});

console.log('Successfully synced jpg and png formats across all player directories.');
