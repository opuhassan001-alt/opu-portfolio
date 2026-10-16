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
  // Real Madrid
  courtois: 729,
  carvajal: 738,
  militao: 742,
  rudiger: 741,
  mendy: 744,
  valverde: 745,
  camavinga: 138814,
  rodrygo: 750,
  modric: 746,
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
  dybala: 2068,
  dovbyk: 19284,
  baldanzi: 161949,
  elshaarawy: 30820,
  paredes: 253,
  pisilli: 342680,
  shomurodov: 47477,
  // Man City
  ederson: 617,
  walker: 627,
  dias: 567,
  akanji: 8501,
  gvardiol: 129033,
  rodri: 44,
  foden: 633,
  bernardo: 635,
  doku: 20499,
  haaland: 1100,
  // Arsenal
  raya: 18884,
  white: 18861,
  saliba: 22224,
  gabriel: 2933,
  timber: 51556,
  rice: 2937,
  partey: 49,
  odegaard: 371,
  martinelli: 1159,
  havertz: 1161,
  // Barcelona
  pena: 138787,
  kounde: 1274,
  cubarsi: 361300,
  martinez: 47291,
  balde: 161907,
  casado: 284322,
  pedri: 138806,
  yamal: 361304,
  fermin: 324744,
  raphinha: 30414,
  lewandowski: 521,
  // Bayern Munich
  neuer: 502,
  guerreiro: 10,
  upamecano: 1145,
  kim: 41121,
  davies: 1099,
  kimmich: 506,
  palhinha: 1515,
  olise: 163054,
  muller: 504,
  gnabry: 510,
  kane: 184,
  // Inter Milan
  sommer: 25,
  pavard: 2473,
  acerbi: 30777,
  bastoni: 31003,
  dumfries: 39535,
  barella: 31008,
  calhanoglu: 1569,
  mkhitaryan: 2296,
  dimarco: 30890,
  thuram: 2467,
  lautaro: 2489,
  // PSG
  donnarumma: 1160,
  hakimi: 1279,
  marquinhos: 259,
  pacho: 284242,
  mendes: 161903,
  'zaire-emery': 334057,
  vitinha: 161908,
  'joao-neves': 343336,
  dembele: 275,
  asensio: 747,
  barcola: 161904
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
