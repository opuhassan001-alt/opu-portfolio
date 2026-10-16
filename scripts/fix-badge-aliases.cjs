const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/assets/badges');

const pairs = [
  ['man-city.png', 'manchester-city.png'],
  ['bayern.png', 'bayern-munchen.png'],
  ['bayern.png', 'bayern-munich.png'],
  ['man-united.png', 'manchester-united.png'],
  ['leverkusen.png', 'bayer-leverkusen.png'],
  ['stuttgart.png', 'vfb-stuttgart.png'],
  ['sporting-cp.png', 'sporting.png'],
  ['dortmund.png', 'borussia-dortmund.png'],
  ['psg.png', 'paris-saint-germain.png'],
  ['barcelona.png', 'fc-barcelona.png'],
  ['inter.png', 'inter-milan.png']
];

pairs.forEach(([src, dest]) => {
  const srcPath = path.join(dir, src);
  const destPath = path.join(dir, dest);
  if (fs.existsSync(srcPath) && !fs.existsSync(destPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${src} -> ${dest}`);
  }
});
