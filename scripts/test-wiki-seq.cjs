const fs = require('fs');

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getWikiThumbnail(articleTitle) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(articleTitle)}&prop=pageimages&format=json&pithumbsize=300`;
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'FootballTacticsApp/1.0 (https://github.com/opuhassan001-alt/opu-portfolio; contact@opu.com)'
    }
  });
  if (!res.ok) {
    console.log(`HTTP ${res.status} for ${articleTitle}`);
    return null;
  }
  const text = await res.text();
  try {
    const data = JSON.parse(text);
    const pages = data.query.pages;
    const page = Object.values(pages)[0];
    return page.thumbnail ? page.thumbnail.source : null;
  } catch (e) {
    console.log(`Failed parsing for ${articleTitle}:`, text.slice(0, 80));
    return null;
  }
}

async function run() {
  const players = [
    'Dani Carvajal',
    'Nuno Mendes (footballer, born 2002)',
    'Willian Pacho',
    'Alejandro Balde',
    'Marc Casadó',
    'Serge Gnabry',
    'Benjamin Pavard',
    'Piotr Zieliński',
    'Evan Ndicka',
    'Lucas Beraldo',
    'Yann Aurel Bisseck',
    'Niccolò Pisilli',
    'Konrad Laimer',
    'Leandro Trossard'
  ];

  for (const p of players) {
    const thumb = await getWikiThumbnail(p);
    console.log(`${p} -> ${thumb ? 'FOUND: ' + thumb.slice(0, 60) + '...' : 'NOT FOUND'}`);
    await sleep(1200);
  }
}

run();

