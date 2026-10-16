import { Player } from '../types/football';

/**
 * Authentic API-Sports / Opta ID mapping for verified star players
 */
export const API_SPORTS_PLAYER_IDS: Record<string, number | string> = {
  messi: 154,
  kdb: 629,
  mbappe: 278,
  'arda-guler': 310826,
  bellingham: 152982,
  saka: 1466,
  vinicius: 752,
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
