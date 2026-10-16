const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.resolve('public/assets/players');
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Master map of verified players needing real authentic photos
// Format: { ids: [array of alias IDs to save as], wikiTitle?: string, directUrl?: string }
const VERIFIED_TARGETS = [
  // 1. Real Madrid
  {
    ids: ['carvajal', 'dani-carvajal', 'carvajal-dani'],
    wikiTitle: 'Dani Carvajal'
  },
  {
    ids: ['diaz', 'brahim-diaz', 'diaz-brahim'],
    wikiTitle: 'Brahim Díaz'
  },
  {
    ids: ['mendy', 'ferland-mendy', 'mendy-ferland'],
    wikiTitle: 'Ferland Mendy'
  },
  {
    ids: ['militao', 'eder-militao', 'militao-eder'],
    wikiTitle: 'Éder Militão'
  },
  {
    ids: ['camavinga', 'eduardo-camavinga', 'camavinga-eduardo'],
    wikiTitle: 'Eduardo Camavinga'
  },
  {
    ids: ['endrick', 'endrick-felipe'],
    wikiTitle: 'Endrick (footballer, born 2006)'
  },
  {
    ids: ['vazquez', 'lucas-vazquez', 'vazquez-lucas'],
    wikiTitle: 'Lucas Vázquez'
  },

  // 2. AS Roma
  {
    ids: ['angelino', 'jose-angel-esmoris-tasende'],
    wikiTitle: 'Angeliño'
  },
  {
    ids: ['ndicka', 'evan-ndicka', 'ndicka-evan'],
    wikiTitle: 'Evan Ndicka'
  },
  {
    ids: ['mancini', 'gianluca-mancini', 'mancini-gianluca'],
    wikiTitle: 'Gianluca Mancini'
  },
  {
    ids: ['cristante', 'bryan-cristante', 'cristante-bryan'],
    wikiTitle: 'Bryan Cristante'
  },
  {
    ids: ['kone', 'manu-kone', 'kone-manu'],
    wikiTitle: 'Manu Koné'
  },
  {
    ids: ['pellegrini', 'lorenzo-pellegrini', 'pellegrini-lorenzo'],
    wikiTitle: 'Lorenzo Pellegrini'
  },
  {
    ids: ['celik', 'zeki-celik', 'celik-zeki'],
    wikiTitle: 'Zeki Çelik'
  },
  {
    ids: ['soule', 'matias-soule', 'soule-matias'],
    wikiTitle: 'Matías Soulé'
  },
  {
    ids: ['dovbyk', 'artem-dovbyk', 'dovbyk-artem'],
    wikiTitle: 'Artem Dovbyk'
  },
  {
    ids: ['svilar', 'mile-svilar', 'svilar-mile'],
    wikiTitle: 'Mile Svilar'
  },
  {
    ids: ['baldanzi', 'tommaso-baldanzi', 'baldanzi-tommaso'],
    wikiTitle: 'Tommaso Baldanzi'
  },
  {
    ids: ['elshaarawy', 'stephan-el-shaarawy', 'el-shaarawy-stephan'],
    wikiTitle: 'Stephan El Shaarawy'
  },
  {
    ids: ['paredes', 'leandro-paredes', 'paredes-leandro'],
    wikiTitle: 'Leandro Paredes'
  },
  {
    ids: ['shomurodov', 'eldor-shomurodov', 'shomurodov-eldor'],
    wikiTitle: 'Eldor Shomurodov'
  },
  {
    ids: ['pisilli', 'niccolo-pisilli', 'pisilli-niccolo'],
    directUrl: 'https://media.asroma.com/prod/images/square_large_fill/7070344c853d-800x800pisilli.png'
  },

  // 3. Manchester City
  {
    ids: ['akanji', 'manuel-akanji', 'akanji-manuel'],
    wikiTitle: 'Manuel Akanji'
  },
  {
    ids: ['walker', 'kyle-walker', 'walker-kyle'],
    wikiTitle: 'Kyle Walker'
  },
  {
    ids: ['gundogan', 'ilkay-gundogan', 'gundogan-ilkay'],
    wikiTitle: 'İlkay Gündoğan'
  },
  {
    ids: ['kovacic', 'mateo-kovacic', 'kovacic-mateo'],
    wikiTitle: 'Mateo Kovačić'
  },
  {
    ids: ['stones', 'john-stones', 'stones-john'],
    wikiTitle: 'John Stones'
  },
  {
    ids: ['doku', 'jeremy-doku', 'doku-jeremy'],
    wikiTitle: 'Jérémy Doku'
  },
  {
    ids: ['lewis', 'rico-lewis', 'lewis-rico'],
    wikiTitle: 'Rico Lewis'
  },
  {
    ids: ['savinho', 'savio', 'savio-moreira'],
    wikiTitle: 'Savinho'
  },

  // 4. Arsenal
  {
    ids: ['white', 'ben-white', 'white-ben'],
    wikiTitle: 'Ben White (footballer)'
  },
  {
    ids: ['timber', 'jurrien-timber', 'timber-jurrien'],
    wikiTitle: 'Jurriën Timber'
  },
  {
    ids: ['partey', 'thomas-partey', 'partey-thomas'],
    wikiTitle: 'Thomas Partey'
  },
  {
    ids: ['martinelli', 'gabriel-martinelli', 'martinelli-gabriel'],
    wikiTitle: 'Gabriel Martinelli'
  },
  {
    ids: ['trossard', 'leandro-trossard', 'trossard-leandro'],
    wikiTitle: 'Leandro Trossard'
  },
  {
    ids: ['merino', 'mikel-merino', 'merino-mikel'],
    wikiTitle: 'Mikel Merino'
  },
  {
    ids: ['jesus', 'gabriel-jesus', 'jesus-gabriel'],
    wikiTitle: 'Gabriel Jesus'
  },
  {
    ids: ['calafiori', 'riccardo-calafiori', 'calafiori-riccardo'],
    wikiTitle: 'Riccardo Calafiori'
  },
  {
    ids: ['zinchenko', 'oleksandr-zinchenko', 'zinchenko-oleksandr'],
    wikiTitle: 'Oleksandr Zinchenko'
  },

  // 5. Barcelona
  {
    ids: ['pena', 'inaki-pena', 'pena-inaki'],
    wikiTitle: 'Iñaki Peña'
  },
  {
    ids: ['cubarsi', 'pau-cubarsi', 'cubarsi-pau'],
    wikiTitle: 'Pau Cubarsí'
  },
  {
    ids: ['martinez', 'inigo-martinez', 'martinez-inigo'],
    wikiTitle: 'Iñigo Martínez'
  },
  {
    ids: ['balde', 'alejandro-balde', 'balde-alejandro'],
    wikiTitle: 'Alejandro Balde'
  },
  {
    ids: ['casado', 'marc-casado', 'casado-marc'],
    wikiTitle: 'Marc Casadó'
  },
  {
    ids: ['fermin', 'fermin-lopez', 'lopez-fermin'],
    wikiTitle: 'Fermín López'
  },
  {
    ids: ['fati', 'ansu-fati', 'fati-ansu'],
    wikiTitle: 'Ansu Fati'
  },
  {
    ids: ['pau-victor', 'pau-victor-delgado'],
    wikiTitle: 'Pau Víctor'
  },

  // 6. Bayern Munich
  {
    ids: ['upamecano', 'dayot-upamecano', 'upamecano-dayot'],
    wikiTitle: 'Dayot Upamecano'
  },
  {
    ids: ['kim', 'kim-min-jae', 'min-jae-kim'],
    wikiTitle: 'Kim Min-jae (footballer)'
  },
  {
    ids: ['guerreiro', 'raphael-guerreiro', 'guerreiro-raphael'],
    wikiTitle: 'Raphaël Guerreiro'
  },
  {
    ids: ['palhinha', 'joao-palhinha', 'palhinha-joao'],
    wikiTitle: 'João Palhinha'
  },
  {
    ids: ['gnabry', 'serge-gnabry', 'gnabry-serge'],
    wikiTitle: 'Serge Gnabry'
  },
  {
    ids: ['coman', 'kingsley-coman', 'coman-kingsley'],
    wikiTitle: 'Kingsley Coman'
  },
  {
    ids: ['sane', 'leroy-sane', 'sane-leroy'],
    wikiTitle: 'Leroy Sané'
  },
  {
    ids: ['laimer', 'konrad-laimer', 'laimer-konrad'],
    wikiTitle: 'Konrad Laimer'
  },
  {
    ids: ['dier', 'eric-dier', 'dier-eric'],
    wikiTitle: 'Eric Dier'
  },

  // 7. Inter Milan
  {
    ids: ['pavard', 'benjamin-pavard', 'pavard-benjamin'],
    wikiTitle: 'Benjamin Pavard'
  },
  {
    ids: ['acerbi', 'francesco-acerbi', 'acerbi-francesco'],
    wikiTitle: 'Francesco Acerbi'
  },
  {
    ids: ['dimarco', 'federico-dimarco', 'dimarco-federico'],
    wikiTitle: 'Federico Dimarco'
  },
  {
    ids: ['dumfries', 'denzel-dumfries', 'dumfries-denzel'],
    wikiTitle: 'Denzel Dumfries'
  },
  {
    ids: ['mkhitaryan', 'henrikh-mkhitaryan', 'mkhitaryan-henrikh'],
    wikiTitle: 'Henrikh Mkhitaryan'
  },
  {
    ids: ['frattesi', 'davide-frattesi', 'frattesi-davide'],
    wikiTitle: 'Davide Frattesi'
  },
  {
    ids: ['zielinski', 'piotr-zielinski', 'zielinski-piotr'],
    wikiTitle: 'Piotr Zieliński'
  },
  {
    ids: ['taremi', 'mehdi-taremi', 'taremi-mehdi'],
    wikiTitle: 'Mehdi Taremi'
  },
  {
    ids: ['augusto', 'carlos-augusto', 'augusto-carlos'],
    wikiTitle: 'Carlos Augusto (footballer)'
  },
  {
    ids: ['bisseck', 'yann-aurel-bisseck', 'bisseck-yann'],
    wikiTitle: 'Yann Aurel Bisseck'
  },

  // 8. PSG
  {
    ids: ['mendes', 'nuno-mendes', 'mendes-nuno'],
    wikiTitle: 'Nuno Mendes (footballer, born 2002)'
  },
  {
    ids: ['pacho', 'willian-pacho', 'pacho-willian'],
    wikiTitle: 'Willian Pacho'
  },
  {
    ids: ['joao-neves', 'neves-joao'],
    wikiTitle: 'João Neves (footballer)'
  },
  {
    ids: ['asensio', 'marco-asensio', 'asensio-marco'],
    wikiTitle: 'Marco Asensio'
  },
  {
    ids: ['ruiz', 'fabian-ruiz', 'ruiz-fabian'],
    wikiTitle: 'Fabián Ruiz'
  },
  {
    ids: ['muani', 'randal-kolo-muani', 'kolo-muani-randal'],
    wikiTitle: 'Randal Kolo Muani'
  },
  {
    ids: ['lee', 'lee-kang-in', 'kang-in-lee'],
    wikiTitle: 'Lee Kang-in'
  },
  {
    ids: ['beraldo', 'lucas-beraldo', 'beraldo-lucas'],
    wikiTitle: 'Lucas Beraldo'
  },
  {
    ids: ['skriniar', 'milan-skriniar', 'skriniar-milan'],
    wikiTitle: 'Milan Škriniar'
  },

  // Other Top 10 Leagues Stars that had 5192 byte placeholder
  {
    ids: ['boniface-victor', 'victor-boniface'],
    wikiTitle: 'Victor Boniface'
  },
  {
    ids: ['koopmeiners-teun', 'teun-koopmeiners'],
    wikiTitle: 'Teun Koopmeiners'
  },
  {
    ids: ['yildiz-kenan', 'kenan-yildiz'],
    wikiTitle: 'Kenan Yıldız'
  },
  {
    ids: ['cambiaso-andrea', 'andrea-cambiaso'],
    wikiTitle: 'Andrea Cambiaso'
  },
  {
    ids: ['castro-santiago', 'santiago-castro'],
    wikiTitle: 'Santiago Castro (footballer, born 2004)'
  },
  {
    ids: ['konate-karim', 'karim-konate'],
    wikiTitle: 'Karim Konaté'
  },
  {
    ids: ['rogers-morgan', 'morgan-rogers'],
    wikiTitle: 'Morgan Rogers'
  },
  {
    ids: ['pavlidis-vangelis', 'vangelis-pavlidis'],
    wikiTitle: 'Vangelis Pavlidis'
  },
  {
    ids: ['paixao-igor', 'igor-paixao'],
    wikiTitle: 'Igor Paixão'
  },
  {
    ids: ['hatate-reo', 'reo-hatate'],
    wikiTitle: 'Reo Hatate'
  },
  {
    ids: ['posch-stefan', 'stefan-posch'],
    wikiTitle: 'Stefan Posch'
  },
  {
    ids: ['bizot-marco', 'marco-bizot'],
    wikiTitle: 'Marco Bizot'
  },
  {
    ids: ['riznyk-dmytro', 'dmytro-riznyk'],
    wikiTitle: 'Dmytro Riznyk'
  },
  {
    ids: ['wellenreuther-timon', 'timon-wellenreuther'],
    wikiTitle: 'Timon Wellenreuther'
  },
  {
    ids: ['strelec-david', 'david-strelec'],
    wikiTitle: 'David Strelec'
  },
  {
    ids: ['weiss-vladimir', 'vladimir-weiss'],
    wikiTitle: 'Vladimír Weiss (footballer, born 1989)'
  },
  {
    ids: ['monteiro-joel', 'joel-monteiro'],
    wikiTitle: 'Joel Monteiro'
  },
  {
    ids: ['bondarenko-artem', 'artem-bondarenko'],
    wikiTitle: 'Artem Bondarenko'
  },
  {
    ids: ['takac-dominik', 'dominik-takac'],
    wikiTitle: 'Dominik Takáč'
  }
];

async function fetchWikiThumbnailUrl(title) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=400`;
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'FootballTacticsApp/1.0 (https://github.com/opuhassan001-alt/opu-portfolio; contact@opu.com)'
      }
    });
    if (!res.ok) return null;
    const data = await res.json();
    const pages = data.query ? data.query.pages : null;
    if (!pages) return null;
    const page = Object.values(pages)[0];
    return page && page.thumbnail ? page.thumbnail.source : null;
  } catch (err) {
    console.warn(`Error querying wiki for ${title}:`, err.message);
    return null;
  }
}

async function downloadBuffer(url) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });
    if (!res.ok) {
      console.warn(`Download failed HTTP ${res.status} from ${url.slice(0, 80)}`);
      return null;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    return buf.length > 1000 ? buf : null;
  } catch (err) {
    console.warn(`Download error from ${url.slice(0, 80)}:`, err.message);
    return null;
  }
}

async function main() {
  console.log(`Starting verified headshot download for ${VERIFIED_TARGETS.length} players...`);
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < VERIFIED_TARGETS.length; i++) {
    const target = VERIFIED_TARGETS[i];
    const primaryId = target.ids[0];
    let downloadUrl = target.directUrl;

    if (!downloadUrl && target.wikiTitle) {
      downloadUrl = await fetchWikiThumbnailUrl(target.wikiTitle);
      await sleep(1000); // 1s rate limit spacing for Wikipedia
    }

    if (!downloadUrl) {
      console.error(`[FAIL] No image source for ${primaryId} (${target.wikiTitle})`);
      failCount++;
      continue;
    }

    const buf = await downloadBuffer(downloadUrl);
    if (!buf) {
      console.error(`[FAIL] Buffer empty or too small for ${primaryId}`);
      failCount++;
      continue;
    }

    // Save buffer to all alias IDs as both .png and .jpg
    for (const id of target.ids) {
      const pngPath = path.join(OUTPUT_DIR, `${id}.png`);
      const jpgPath = path.join(OUTPUT_DIR, `${id}.jpg`);
      fs.writeFileSync(pngPath, buf);
      fs.writeFileSync(jpgPath, buf);
    }

    successCount++;
    console.log(`[OK] (${i + 1}/${VERIFIED_TARGETS.length}) Saved ${primaryId} (${buf.length} bytes, aliases: ${target.ids.length})`);
  }

  console.log(`\nFinished: ${successCount} succeeded, ${failCount} failed.`);
}

main();

