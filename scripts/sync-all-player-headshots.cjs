const fs = require('fs');
const path = require('path');

const UCL_PLAYERS_DIR = path.resolve('ucl-analytics-dashboard/public/players');
const ROOT_PLAYERS_DIR = path.resolve('public/assets/players');

if (!fs.existsSync(ROOT_PLAYERS_DIR)) {
  fs.mkdirSync(ROOT_PLAYERS_DIR, { recursive: true });
}

// 1. Copy all 238 existing portraits from ucl-analytics-dashboard into public/assets/players
if (fs.existsSync(UCL_PLAYERS_DIR)) {
  const files = fs.readdirSync(UCL_PLAYERS_DIR);
  for (const f of files) {
    const src = path.join(UCL_PLAYERS_DIR, f);
    const dest = path.join(ROOT_PLAYERS_DIR, f);
    fs.copyFileSync(src, dest);
  }
  console.log(`Copied ${files.length} portraits from ucl-analytics-dashboard to public/assets/players`);
}

// Mappings from player IDs used in megaFootballRegistry & fixturesData to existing ucl files
const ID_TO_FILE_MAP = {
  // Real Madrid
  courtois: 'courtois-thibaut.jpg',
  rudiger: 'rudiger-antonio.jpg',
  valverde: 'valverde-federico.jpg',
  bellingham: 'bellingham-jude.jpg',
  'arda-guler': 'guler-arda.jpg',
  guler: 'guler-arda.jpg',
  vinicius: 'vinicius-junior.jpg',
  mbappe: 'mbappe-kylian.jpg',
  rodrygo: 'rodrygo.jpg',
  modric: 'modric-luka.jpg',
  // Roma
  dybala: 'dybala-paulo.jpg',
  // Man City
  ederson: 'ederson-moraes.jpg',
  dias: 'dias-ruben.jpg',
  rodri: 'rodri-hernandez.jpg',
  kdb: 'de-bruyne-kevin.jpg',
  foden: 'foden-phil.jpg',
  bernardo: 'silva-bernardo.jpg',
  haaland: 'haaland-erling.jpg',
  // Arsenal
  raya: 'raya-david.jpg',
  saliba: 'saliba-william.jpg',
  gabriel: 'gabriel-magalhaes.jpg',
  rice: 'rice-declan.jpg',
  odegaard: 'odegaard-martin.jpg',
  saka: 'saka-bukayo.jpg',
  havertz: 'havertz-kai.jpg',
  // Barcelona
  kounde: 'kounde-jules.jpg',
  pedri: 'pedri-gonzalez.jpg',
  yamal: 'yamal-lamine.jpg',
  raphinha: 'raphinha-barca.jpg',
  lewandowski: 'lewandowski-robert.jpg',
  olmo: 'olmo-dani.jpg',
  gavi: 'gavi-pablo.jpg',
  // Bayern
  neuer: 'neuer-manuel.jpg',
  davies: 'davies-alphonso.jpg',
  kimmich: 'kimmich-joshua.jpg',
  olise: 'olise-michael.jpg',
  muller: 'muller-thomas.jpg',
  kane: 'kane-harry.jpg',
  musiala: 'musiala-jamal.jpg',
  // Inter
  sommer: 'sommer-yann.jpg',
  bastoni: 'bastoni-alessandro.jpg',
  barella: 'barella-nicolo.jpg',
  calhanoglu: 'calhanoglu-hakan.jpg',
  thuram: 'thuram-marcus.jpg',
  lautaro: 'martinez-lautaro.jpg',
  // PSG
  donnarumma: 'donnarumma-gianluigi.jpg',
  hakimi: 'hakimi-achraf.jpg',
  zaire_emery: 'zaire-emery-warren.jpg',
  'zaire-emery': 'zaire-emery-warren.jpg',
  vitinha: 'vitinha-psg.jpg',
  dembele: 'dembele-ousmane.jpg',
  barcola: 'barcola-bradley.jpg'
};

// Copy mapped files to ${id}.jpg and ${id}.png for universal availability
for (const [id, targetFile] of Object.entries(ID_TO_FILE_MAP)) {
  const src = path.join(ROOT_PLAYERS_DIR, targetFile);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(ROOT_PLAYERS_DIR, `${id}.jpg`));
    fs.copyFileSync(src, path.join(ROOT_PLAYERS_DIR, `${id}.png`));
  }
}
console.log('Normalized existing mapped player IDs to .jpg and .png');

// API-Sports player IDs to fetch missing players
const API_SPORTS_IDS = {
  // Real Madrid
  carvajal: 738,
  militao: 742,
  mendy: 744,
  camavinga: 138814,
  endrick: 335099,
  diaz: 19187,
  vazquez: 749,
  // AS Roma
  svilar: 1200,
  mancini: 30813,
  ndicka: 2289,
  angelino: 631,
  celik: 1042,
  cristante: 30818,
  kone: 161906,
  pellegrini: 30825,
  soule: 162719,
  dovbyk: 19284,
  baldanzi: 161949,
  elshaarawy: 30820,
  paredes: 253,
  pisilli: 342680,
  shomurodov: 47477,
  // Man City
  walker: 627,
  akanji: 8501,
  gvardiol: 129033,
  doku: 20499,
  gundogan: 631,
  kovacic: 746,
  stones: 626,
  lewis: 284240,
  savinho: 284373,
  // Arsenal
  white: 18861,
  timber: 51556,
  partey: 49,
  martinelli: 1159,
  trossard: 18959,
  merino: 18916,
  jesus: 643,
  calafiori: 162125,
  zinchenko: 642,
  // Barcelona
  pena: 138787,
  cubarsi: 361300,
  martinez: 47291,
  balde: 161907,
  casado: 284322,
  fermin: 324744,
  dejong: 512,
  fati: 138805,
  'pau-victor': 324748,
  // Bayern Munich
  guerreiro: 10,
  upamecano: 1145,
  kim: 41121,
  palhinha: 1515,
  gnabry: 510,
  coman: 512,
  sane: 637,
  laimer: 1163,
  dier: 174,
  // Inter Milan
  pavard: 2473,
  acerbi: 30777,
  dumfries: 39535,
  mkhitaryan: 2296,
  dimarco: 30890,
  frattesi: 30971,
  zielinski: 30893,
  taremi: 21105,
  augusto: 10300,
  bisseck: 284282,
  // PSG
  marquinhos: 259,
  pacho: 284242,
  mendes: 161903,
  'joao-neves': 343336,
  asensio: 747,
  ruiz: 755,
  muani: 161905,
  lee: 2985,
  beraldo: 361310,
  skriniar: 30784
};

async function downloadMissing() {
  let downloaded = 0;
  for (const [id, apiId] of Object.entries(API_SPORTS_IDS)) {
    const pngPath = path.join(ROOT_PLAYERS_DIR, `${id}.png`);
    const jpgPath = path.join(ROOT_PLAYERS_DIR, `${id}.jpg`);

    if (fs.existsSync(pngPath) && fs.statSync(pngPath).size > 1000) {
      continue;
    }

    try {
      const url = `https://media.api-sports.io/football/players/${apiId}.png`;
      const res = await fetch(url);
      if (res.ok) {
        const buffer = Buffer.from(await res.arrayBuffer());
        if (buffer.length > 500) {
          fs.writeFileSync(pngPath, buffer);
          fs.writeFileSync(jpgPath, buffer);
          downloaded++;
          console.log(`✓ Downloaded ${id} (API ID: ${apiId}, size: ${buffer.length} bytes)`);
        }
      } else {
        console.warn(`✗ Failed ${id}: HTTP ${res.status}`);
      }
    } catch (err) {
      console.warn(`✗ Error downloading ${id}: ${err.message}`);
    }
  }
  console.log(`Successfully downloaded ${downloaded} player portraits from API-Sports.`);
}

downloadMissing();
