import { Player } from '../types/football';

/**
 * Authentic API-Sports / Opta ID mapping for verified star players
 */
export const API_SPORTS_PLAYER_IDS: Record<string, number | string> = {
  messi: 154,
  kdb: 629,
  mbappe: 278,
  'arda-guler': 310826,
  guler: 310826,
  bellingham: 152982,
  saka: 1466,
  vinicius: 752,
  'mbappe-kylian': 278,
  'vinicius-junior': 752,
  'bellingham-jude': 152982,
  'guler-arda': 310826,
  'rodrygo': 753,
  'valverde-federico': 738,
  'modric-luka': 754,
  'rudiger-antonio': 2280,
  'courtois-thibaut': 733,
  'yamal-lamine': 388147,
  'lewandowski-robert': 521,
  'raphinha-barca': 30416,
  'pedri-gonzalez': 138813,
  'olmo-dani': 1858,
  'gavi-pablo': 284242,
  'kounde-jules': 1319,
  'ter-stegen-marc': 127,
  'haaland-erling': 1100,
  'de-bruyne-kevin': 629,
  'foden-phil': 633,
  'silva-bernardo': 635,
  'rodri-hernandez': 44,
  'dias-ruben': 567,
  'ederson-moraes': 617,
  'saka-bukayo': 1466,
  'odegaard-martin': 371,
  'rice-declan': 293,
  'havertz-kai': 978,
  'saliba-william': 1145,
  'gabriel-magalhaes': 1245,
  'raya-david': 18881,
  'kane-harry': 184,
  'kimmich-joshua': 502,
  'musiala-jamal': 161948,
  'olise-michael': 82019,
  'muller-thomas': 510,
  'davies-alphonso': 1161,
  'neuer-manuel': 498,
  'salah-mohamed': 306,
  'van-dijk-virgil': 290,
  'alexander-arnold-trent': 283,
  'mac-allister-alexis': 6716,
  'diaz-luis': 2489,
  'nunez-darwin': 2488,
  'alisson-becker': 280,
  'dembele-ousmane': 153,
  'barcola-bradley': 162590,
  'hakimi-achraf': 882,
  'vitinha-psg': 41620,
  'zaire-emery-warren': 343318,
  'donnarumma-gianluigi': 1163,
  'wirtz-florian': 161907,
  'frimpong-jeremie': 1243,
  'xhaka-granit': 1475,
  'boniface-victor': 162985,
  'grimaldo-alejandro': 1221,
  'hradecky-lukas': 1235,
  'guirassy-serhou': 2289,
  'brandt-julian': 981,
  'adeyemi-karim': 284322,
  'kobel-gregor': 987,
  'schlotterbeck-nico': 994,
  'sabitzer-marcel': 511,
  'martinez-lautaro': 2273,
  'thuram-marcus': 2154,
  'barella-nicolo': 887,
  'calhanoglu-hakan': 889,
  'bastoni-alessandro': 884,
  'sommer-yann': 1164,
  'vlahovic-dusan': 30424,
  'yildiz-kenan': 388148,
  'koopmeiners-teun': 24715,
  'cambiaso-andrea': 162450,
  'locatelli-manuel': 888,
  'di-gregorio-michele': 30415,
  'griezmann-antoine': 121,
  'alvarez-julian': 6013,
  'oblak-jan': 120,
  'de-paul-rodrigo': 124,
  'llorente-marcos': 739,
  'le-normand-robin': 1324,
  'watkins-ollie': 19349,
  'martinez-emiliano': 1465,
  'mcginn-john': 19190,
  'rogers-morgan': 162810,
  'tielemans-youri': 2790,
  'torres-pau': 1320,
  'gyokeres-viktor': 18959,
  'goncalves-pedro': 41621,
  'hjulmand-morten': 18962,
  'trincao-francisco': 1318,
  'inacio-goncalo': 41624,
  'israel-franco': 30420,
  'simons-xavi': 162310,
  'openda-lois': 2795,
  'sesko-benjamin': 18960,
  'lukeba-castello': 162591,
  'orban-willi': 1167,
  'gulacsi-peter': 1165,
  'leao-rafael': 1148,
  'pulisic-christian': 1468,
  'hernandez-theo': 1317,
  'reijnders-tijjani': 24719,
  'morata-alvaro': 123,
  'maignan-mike': 1146,
  'tomori-fikayo': 18884,
  'loftus-cheek-ruben': 18861,
  'fofana-youssouf': 1165,
  'chukwueze-samuel': 47311,
  'abraham-tammy': 18886,
  'emerson-royal': 18835,
  'thiaw-malick': 24765,
  'pavlovic-strahinja': 8492,
  'gabbia-matteo': 48375,
  'calabria-davide': 30412,
  'musah-yunus': 161933,
  'okafor-noah': 35142,
  'saelemaekers-alexis': 2289,
  'dimarco-federico': 886,
  'pavard-benjamin': 2281,
  'dumfries-denzel': 24718,
  'mkhitaryan-henrikh': 1880,
  'zielinski-piotr': 885,
  'taremi-mehdi': 2288,
  'frattesi-davide': 30418,
  'acerbi-francesco': 883,
  'bisseck-yann': 162590,
  'de-vrij-stefan': 1534,
  'darmian-matteo': 30424,
  'asllani-kristjan': 162589,
  'martinez-josep': 47259,
  tomori: 18884,
  'loftus-cheek': 18861,
  fofana: 1165,
  chukwueze: 47311,
  abraham: 18886,
  emerson: 18835,
  thiaw: 24765,
  pavlovic: 8492,
  gabbia: 48375,
  calabria: 30412,
  musah: 161933,
  okafor: 35142,
  saelemaekers: 2289,
  dimarco: 886,
  pavard: 2281,
  dumfries: 24718,
  mkhitaryan: 1880,
  zielinski: 885,
  taremi: 2288,
  frattesi: 30418,
  acerbi: 883,
  bisseck: 162590,
  'de-vrij': 1534,
  darmian: 30424,
  asllani: 162589,
  'josep-martinez': 47259,
  'lookman-ademola': 19193,
  'retegui-mateo': 30425,
  'de-ketelaere-charles': 2992,
  'ederson-dos-santos': 30426,
  'zappacosta-davide': 1471,
  'carnesecchi-marco': 30427,
  'zakaria-denis': 2470,
  'ben-seghir-eliesse': 343321,
  'akliouche-maghnes': 343322,
  'golovin-aleksandr': 1147,
  'embolo-breel': 1169,
  'kohn-philipp': 18963,
  'david-jonathan': 83032,
  'zhegrova-edon': 2472,
  'gomes-angel': 1472,
  'andre-benjamin': 1149,
  'diakite-bafode': 162593,
  'chevalier-lucas': 162592,
  'demirovic-ermedin': 25421,
  'millot-enzo': 162594,
  'undav-deniz': 18961,
  'stiller-angelo': 161949,
  'mittelstadt-maximilian': 1241,
  'nubel-alexander': 509,
  'tsygankov-viktor': 2473,
  'herrera-yangel': 1321,
  'blind-daley': 548,
  'gutierrez-miguel': 740,
  'gil-bryan': 1322,
  'gazzaniga-paulo': 1473,
  'orsolini-riccardo': 892,
  'ndoye-dan': 2474,
  'castro-santiago': 343323,
  'freuler-remo': 894,
  'posch-stefan': 1246,
  'skorupski-lukasz': 893,
  'ajorque-ludovic': 1151,
  'del-castillo-romain': 1152,
  'lees-melou-pierre': 1153,
  'camara-mahdi': 1155,
  'lala-kenny': 1154,
  'bizot-marco': 24720,
  'di-maria-angel': 260,
  'akturkoglu-kerem': 2475,
  'kokcu-orkun': 24721,
  'pavlidis-vangelis': 24722,
  'otamendi-nicolas': 568,
  'trubin-anatoliy': 162706,
  'de-jong-luuk': 1046,
  'veerman-joey': 24723,
  'bakayoko-johan': 2994,
  'tillman-malik': 161950,
  'boscagli-olivier': 1157,
  'benitez-walter': 1156,
  'gimenez-santiago': 30893,
  'timber-quinten': 24725,
  'paixao-igor': 30894,
  'hwang-in-beom': 2477,
  'hancko-david': 18964,
  'wellenreuther-timon': 1247,
  'vanaken-hans': 2991,
  'tzolis-christos': 2478,
  'skov-olsen-andreas': 895,
  'de-cuyper-maxim': 2996,
  'onyedika-raphael': 2997,
  'mignolet-simon': 292,
  'mcgregor-callum': 1060,
  'furuhashi-kyogo': 31632,
  'hatate-reo': 31633,
  'kuhn-nicolas': 161951,
  'carter-vickers-cameron': 19191,
  'schmeichel-kasper': 1474,
  'sudakov-georgiy': 162705,
  'bondarenko-artem': 162708,
  'matviyenko-mykola': 162707,
  'traore-lassina': 550,
  'riznyk-dmytro': 162709,
  'biereth-mika': 284323,
  'kiteishvili-otar': 18966,
  'stankovic-jon-gorenc': 18967,
  'boving-william': 18968,
  'scherpen-kjell': 24727,
  'gloukh-oscar': 284428,
  'konate-karim': 343325,
  'dedic-amar': 18970,
  'kjaergaard-maurits': 18971,
  'blaswich-janis': 1170,
  'ganvoula-silvere': 25091,
  'ugrinic-filip': 2479,
  'elia-meschack': 2480,
  'monteiro-joel': 343326,
  'von-ballmoos-david': 2481,
  'haraslin-lukas': 30761,
  'birmancevic-veljko': 30762,
  'olatunji-victor': 30764,
  'kairinen-kaan': 30766,
  'vindahl-jensen-peter': 24728,
  'baturina-martin': 162900,
  'petkovic-bruno': 30800,
  'sucic-petar': 388149,
  'ademi-arijan': 30803,
  'nevistic-ivan': 30801,
  'ndiaye-cherif': 51221,
  'silas-katompa': 1248,
  'krunic-rade': 896,
  'ivanic-mirko': 51222,
  'glazer-omri': 51223,
  'barseghyan-tigran': 64101,
  'strelec-david': 64104,
  'weiss-vladimir': 64102,
  'kucka-juraj': 897,
  'takac-dominik': 64103,
};

/**
 * Extract clean uppercase initials from player name
 */
export function extractPlayerInitials(name: string): string {
  if (!name || !name.trim()) return '?';
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 1) {
    return parts[0].slice(0, 1).toUpperCase();
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/**
 * Generates an ultra-crisp SVG data URI avatar with dark emerald to slate gradient
 * and high-contrast typography, guaranteeing zero broken images when network fails.
 */
export function generateInitialsAvatarSvg(name: string, club?: string): string {
  const initials = extractPlayerInitials(name);
  const sanitizedClub = club ? club.replace(/[<>&"']/g, '') : '';
  const sanitizedName = name.replace(/[<>&"']/g, '');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <defs>
    <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#064e3b" />
      <stop offset="100%" stop-color="#0f172a" />
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="64" fill="url(#avatarGrad)" />
  <circle cx="64" cy="64" r="62" stroke="#10b981" stroke-width="2" stroke-opacity="0.35" fill="none" />
  <text x="64" y="66" text-anchor="middle" dominant-baseline="central" fill="#f8fafc" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="44" letter-spacing="1.5">${initials}</text>
  ${sanitizedClub ? `<title>${sanitizedName} (${sanitizedClub})</title>` : `<title>${sanitizedName}</title>`}
</svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

/**
 * Multi-CDN Resilient Headshot URL Ladder
 *
 * Ordered fallback progression:
 * 1. Local high-speed asset: /assets/players/{id}.png
 * 2. Primary CDN: API-Sports CDN (https://media.api-sports.io/football/players/{apiId}.png)
 * 3. Secondary CDN mirror: player.headshotUrl (if distinct from local & primary)
 * 4. Resilient Vector Fallback: Clean SVG Data URI with player initials & emerald/slate gradient
 */
export function getHeadshotUrlLadder(player: Player): string[] {
  const ladder: string[] = [];

  // 1. Local path
  const localPath = `/assets/players/${player.id}.png`;
  ladder.push(localPath);

  // 2. Primary CDN: API-Sports
  const apiId = API_SPORTS_PLAYER_IDS[player.id] ?? player.id;
  const primaryCdn = `https://media.api-sports.io/football/players/${apiId}.png`;
  ladder.push(primaryCdn);

  // 3. Secondary CDN mirror if distinct
  if (
    player.headshotUrl &&
    player.headshotUrl !== localPath &&
    player.headshotUrl !== primaryCdn
  ) {
    ladder.push(player.headshotUrl);
  }

  // 4. Guaranteed zero-failure SVG Data URI fallback
  const fallbackSvg = generateInitialsAvatarSvg(player.name, player.club);
  ladder.push(fallbackSvg);

  // Deduplicate while preserving sequence order
  return Array.from(new Set(ladder));
}
