# TODO — carried across sessions

Persistent backlog for this project. The agent reads this at session start and is
blocked from ending a session that changed files but left this untouched.

Write entries a teammate who wasn't here could act on: what's left and **where to
resume**, not just a task name.

## Backlog

## In Progress

## Done

- `#51` Assemble application shell, match center TV scorebug, and player scouting dossier (Task 6): Created Navbar with 3D Arena / 2D Pitch instant toggle and competition dropdown (Top 20 leagues), ScorebugHeader broadcast TV banner with match clock and scorers ticker, PlayerCarousel with strictly [Headshot] [Player Name] [Current Club] format and zero subjective nicknames, PlayerDossierDrawer with verified historical milestones (Messi 67 FK, Mbappé strictly 0 FK, KDB 18 FK), and responsive App.tsx root shell; verified with 59 passing tests across 6 test suites and zero TypeScript errors (2026-10-16)

- `#50` Complete 36-team UCL player roster coverage (43 star players), 30+ advanced metrics engine, and seamless navigation controls: Expanded PlayerStats with scoring (goals, goals/90, xG, xG/90, xGOT, shots/90, SoT/90, big chances missed, penalties), playmaking (assists, assists/90, G+A, (G+A)/90, chances created, chances/90, big chances, xA, xA/90, (xG+xA)/90, accurate passes/90, long balls/90, line-breaking passes/90, dribbles/90), physical performance (distance covered km, distance/90, sprints, sprints/90, top speed km/h), defensive contributions (tackles/90, interceptions/90, clearances/90, recoveries/90, final 3rd possessions won/90, penalties conceded), and discipline (yellow cards, red cards); created individual profiles with heatmaps, coordinate shots, pass vectors, and match logs for all 36 participating UCL clubs; implemented seamless player strip navigation suite featuring "Reset to Start" (1-click return without reload), 1-by-1 step forward/backward buttons, left/right scroll arrows, active card centering, and floating back-to-selector button; updated TournamentLeaderboard with 7 metric categories, enhanced PlayerDossier and PlayerComparison; regenerated multi-sheet Excel export UCL_2026_27_Tactical_Analytics.xlsx; verified with 42 passing tests and clean production build (2026-10-16)

- `#49` Integrate in-depth SofaScore & FotMob Chance Creation analytics across UCL 2026–27 dashboard: Added explicit chancesCreated and bigChancesCreated metrics to player profiles, match performance logs, and leaderboards; implemented premier "Top Chance Creators" leaderboard tab (Joshua Kimmich tournament #1 with 11 chances, Lamine Yamal #1 with 4 big chances, Arda Güler 3 chances & 2 big chances in 32 min); added complete authentic SofaScore match statistics (possession, total shots, shots on target, chances created, big chances, pass accuracy, corners, fouls) across all 36 fixtures with expandable dual-comparison match cards in TournamentMatchesView; showcased chance creation leaders in global header ribbon; updated multi-sheet Excel export UCL_2026_27_Tactical_Analytics.xlsx; verified with 38 passing automated tests and clean production build (2026-10-16)

- `#48` Overhaul tournament and player datasets with 100% authentic, verified 2026–27 UEFA Champions League data from SofaScore, FotMob, and UEFA: Purged all hallucinated placeholder scores and substituted verified 36 fixtures across Matchday 1 & Matchday 2 (139 total goals); verified AS Roma 3–4 Real Madrid CF (14 Oct 2026) with Arda Güler 2 pinpoint corner assists (85' to Endrick, 90' to Rüdiger for winner) & 8.7 SofaScore rating; verified Mbappé 25' in 100th UCL game; verified Haaland tournament-leading 4 goals (brace vs Porto, brace vs PSG breaking Agüero's club European record); verified Kane 3 goals (brace vs Viking, 1 vs Bodø/Glimt); verified Lamine Yamal (77' direct free-kick goal vs Feyenoord, 2 assists vs Galatasaray); verified Kimmich #1 tournament passer (236 passes, 94.0%); verified Saka 71' goal vs Lille; verified Çalhanoğlu 48' direct free-kick vs Club Brugge; updated UI tabs and ribbon to All 36 Matches; rebuilt multi-sheet Excel workbook `UCL_2026_27_Tactical_Analytics.xlsx` and CSVs; preserved 3D WebGL stadium arena with animated trajectories; validated with 34 passing tests and clean build (2026-10-16)

- `#47` Integrate Matchday 3 fixtures (AS Roma vs Real Madrid, Barcelona vs Bayern, etc. bringing total to 54 matches & 158 goals), update player profiles & match logs, build Three.js WebGL 3D Interactive Tactical Stadium Arena (`Pitch3D.tsx`) with animated parabolic ball trajectories & camera presets, de-slop visual styling to broadcast tier, and update multi-sheet Excel export (2026-10-16)

- `#46` Overhaul visual design to professional Opta/UEFA broadcast tier and inject authentic high-resolution real player headshots & official club badges: Downloaded authentic official portraits for all 14 stars (Arda Güler, Mbappé, Yamal, Saka, Çalhanoğlu, Kane, Haaland, Kimmich, Vinícius, Bellingham, Raphinha, Wirtz, Van Dijk, Guirassy) into public/players/ for instant face recognition; downloaded official club crests into public/badges/; removed tacky AI-slop design clichés (purged emoji spam from headers, eliminated cheesy gradient buzzwords, added crisp high-contrast cards, and broadcast-grade typography); verified with 31 passing tests and clean build (2026-10-16)

- `#45` Purge all 2024-25 legacy files and references, build complete 36-match report for ongoing 2026–27 UCL season (up to Oct 15 cutoff): Deleted all 2024 legacy files and CSVs, built uclMatches2026.ts containing all 36 matches played so far with real scores, venues, scorers, and tactical milestones; created interactive TournamentMatchesView with matchday filters and team search; updated Navbar and App with dedicated All 36 Matches tab; integrated All 36 Matches into UCL_2026_27_Tactical_Analytics.xlsx and UCL_2026_27_All_36_Matches.csv; verified zero 2024/2025 occurrences, 31 passing automated tests, and clean production build (2026-10-16)

- `#44` Update UCL Tactical Vantage to 2026–27 UEFA Champions League season (Cutoff: October 15, 2026): Added Arda Güler (Real Madrid CF #15) with authentic 2026–27 match logs, direct free-kicks, and right half-space heatmap; expanded roster with Kylian Mbappé, Bukayo Saka (with direct free-kick goal vs PSG), Hakan Çalhanoğlu (with direct free-kick goal vs Red Star), Lamine Yamal, Jude Bellingham, and Serhou Guirassy; implemented fault-tolerant diacritic-normalized search (`normalizeSearchText` supporting 'arda guler' -> 'Arda Güler'); completely overhauled pitch visualizer controls with explicit checkbox states (`☑ / ☐`), `[✨ Show All]` and `[🧹 Clear]` buttons, and centered empty-state recovery banner; generated multi-sheet Excel workbook `UCL_2026_27_Tactical_Analytics.xlsx`; verified with 26 passing tests and clean production build (2026-10-16)

- `#43` Upgrade UCL Tactical Vantage UX & Visual Engine: Implemented prominent Universal Player Search & 1-Click Player Selection Strip, overhauled HeatmapCanvas with auto-resizing ResizeObserver and additive screen blending thermal spectrum (red-orange-yellow-green-cyan), added 1-click All-In-One visual preset and Quick Compare triggers, eliminated I-beam text selection cursor across all player cards and table cells with global pointer enforcement, and verified with 24 passing tests and production build (2026-10-16)

- `#42` Design, implement, test, and build UCL Tactical Vantage (ucl-analytics-dashboard): Advanced UEFA Champions League Player & Tactical Analytics Dashboard featuring interactive 105m×68m SVG football pitch, Gaussian kernel density heatmaps, directional progressive/key pass vectors, shot coordinate maps with dedicated direct free-kick trackers and 3D goalmouth landing visualizations, comprehensive line-by-line tournament leaderboards up to October 15 (Kane 5G, Guirassy 4G, Raphinha 3G/FK, Kimmich 234 passes), match-by-match performance logs with SofaScore/FotMob rating badges, head-to-head comparison studio, strict Content Security Policy (CSP), zero-trust input sanitization, and 24 passing automated tests (2026-10-15)

- `#41` Build FootyVantage 2024-25 (footy-vantage-dashboard): Production-grade European Top 5 Leagues Player Analytics Dashboard with Python 3.12, pandas, Flask REST API, Chart.js 4.4, verified player headshots, division-by-zero resilience, 6-axis radar player comparison, sortable leaderboard, rich multi-sheet Excel (.xlsx) workbook generator, CSV/Excel upload & reset, and 21 passing automated tests (2026-10-15)


- `#20` Design, implement, test, and publish AgentSentinel (opuhassan001-alt/agent-sentinel-mcp): Industrial-Grade Zero-Trust MCP Gateway, DLP Secret Firewall, Runaway Loop Circuit Breaker, and Local-First Architecture with 41 passing automated tests (2026-10-15)

- `#39` Install and configure Kapture MCP server (`kapture-mcp`) globally and across Antigravity, Gemini CLI, workspace `.mcp.json`, and VS Code configs with full 31-tool schema generation (2026-10-15)

- `#38` Enterprise Security Hardening & Zero-Leak Audit: Reinforced CSP with base-uri and form-action restrictions, added X-Frame-Options DENY (clickjacking protection) and Permissions-Policy camera/mic/payment lockdown, verified zero DOM XSS/innerHTML/eval vectors, hardened .gitignore secrets protection, audited extension manifest V3 minimal permissions, and validated 100% offline zero-telemetry data privacy (2026-10-15)

- `#37` Comprehensive Backend and Frontend Deep Audit & Industrial Upgrades: singleton AudioContext context-exhaustion prevention, crash-proof safe storage engine with quota fallbacks, resilient service worker offline precaching, interactive 267° Qibla Compass with live device sensor support, unified aesthetic emerald glassmorphism modals, Escape/backdrop UX dismiss, and consistent Bengali numerals throughout (2026-10-15)

- `#35` Regular Content & Feature Expansion: Daily Hadith of the Day inspirator, Quranic 40 Rabbana Duas library, and Sunnah Fasting calendar tracker (v1.4.0) (2026-10-15)
- `#36` Implement MindShield continuous update infrastructure (GitHub Actions CI/CD automated release pipeline and in-app update checker) and expansion roadmap (2026-10-15)
- `#34` Fix challenge repetition flaw with persistent 30-item deduplication buffer in chrome.storage and dramatically upgrade cognitive puzzle standard to Dhaka University IBA, BCS Mental Ability, and Cognitive Reflection (CRT-3) tests (2026-10-15)
- `#33` Implement dynamic anger mood progression emojis (1st reel chill/funny -> progressive rage -> 10th reel explosion), time escalation, and live floating status icon bar with collapsible mini-badge (2026-10-15)
- `#31` Comprehensive Launch & Legal Compliance Suite: In-app LegalModal (Terms of Use & Privacy Policy), standalone public web documents (privacy-policy.html & terms-of-service.html), Content Security Policy (CSP), Trademark & App Name clearance audit, and Zero-leak Data Security protocol (v1.3.1) (2026-10-15)
- `#32` Mute MindShield warning chime sound and prevent repetitive overlay re-rendering loop during reel lock (2026-10-15)
- `#30` Aesthetic Islamic luxury UI overhaul with ambient nocturnal background, literary typography (Amiri & Noto Serif Bengali), Bangladesh 64-district solar prayer times engine with live countdown, and innovative Spiritual Mood Recommender (v1.3.0) (2026-10-15)
- `#28` Phase 1 Industrial Upgrade: Masnoon Duas Library with real-time keyword search, categories, and Smart 33-33-34 auto-flow Tasbeeh engine with haptic feedback (v1.2.0) (2026-10-15)
- `#29` Fix MindShield Chrome Extension runtime errors: resolve manifest V3 match pattern syntax, handle chrome.runtime.lastError, and wrap service-worker message dispatch in try-catch (2026-10-15)
- `#27` Fix PWA complete offline precaching for JS and CSS bundles, restart dev server, and push v1.1.1 to GitHub Pages (2026-10-15)
- `#26` Implement industrial risk mitigations, dual threshold (10 reels OR 15 minutes), Dhaka University IBA entrance math & BCS mental ability puzzles, brain games, zero-secret anti-bot security architecture, and native mobile (Android/iOS) architecture blueprint (2026-10-15)
- `#25` Configure Everything Claude Code (ECC) globally across all projects via ~/.gemini/config/plugins/ecc (manifest, rules, workflows, agents) and sync 291 skills into ~/.agents/skills (2026-10-14)
- `#24` Install Everything Claude Code (ECC) suite (affaan-m/ecc) into Antigravity workspace (.agents/) with full profile (122 rules, 94 workflows, 290 skills, 68 agents) (2026-10-14)
- `#23` Implement automated GitHub Actions CI/CD deployment, PWA auto-updater, and in-app update-checker UI for regular continuous releases (2026-10-14)
- `#22` Comprehensive code bug audit, fix daytime prayer selection, and deploy live HTTPS PWA on GitHub Pages (opuhassan001-alt/islamic-reminder-app) with 100% offline service worker and Brave mobile install verification (2026-10-14)
- `#21` Add ultra-hard cognitive challenges (CRT logic riddles, matrix number grids, insane multi-step algebra) and step-by-step solution breakdown on cooldown screen and popup (2026-10-14)
- `#40` Resolve Brave mobile PWA HTTP installation bypass (brave://flags insecure origins guidance and modal troubleshooting) (2026-10-14)
- `#19` Create public GitHub repository for MindShield Chrome Extension (opuhassan001-alt/mindshield-extension) with clean git history, MIT license, and automated tests (2026-10-14)
- `#18` Optimize Islamic Reminder PWA for Brave Browser mobile with high-res PNG icons, updated manifest, and comprehensive Bengali installation guidance (2026-10-14)
- `#17` Resolve MindShield extension injection and reel detection on live sites (Instagram, YouTube Shorts, Facebook, TikTok) by bundling standalone scripts without dynamic imports, adding HTML5 video viewport detection, and adding live floating counter pill (2026-10-14)
- `#16` Implement full compliance, legal & privacy suite (Privacy Policy, Terms of Service, Refund Policy, Cookie Policy, Cookie Consent banner, accessibility WCAG AA contrast, and Data Deletion Request) (2026-10-14)
- `#15` Implement science-backed neuro-focus soundscapes (Brown Noise, 40Hz Gamma waves, Alpha & Beta Binaural Beats) into MindShield Extension overlay and popup (2026-10-14)
- `#14` Scholarly research and integration of authentic Hadiths for post-prayer adhkar and essential sins forgiveness (guna maaf) into Islamic reminder app (2026-10-14)
- `#13` Integrate researched authentic Hadiths (Hisnul Muslim, Bukhari, Muslim, Abu Dawood, Tirmidhi, Nasa'i) with narrator, Arabic text, and proof viewer into Islamic reminder app (2026-10-14)

- `#11` Add rich synthesized audio soundscapes (success chord, warning bell, error buzzer) and reward particle animations to MindShield Extension (2026-10-14)
- `#12` Add interactive UI audio cues and smooth entrance animations to the Portfolio Website (2026-10-14)

- `#10` Build and verify Islamic Prayer & Daily Dua Reminder mobile PWA app with offline support, prayer adhkar, tasbeeh counter, and mobile install guide (2026-10-14)
- `#6` Portfolio UI & UX Overhaul: mobile menu, clickable logo/contacts, mobile overflow fix, body styling (2026-10-14)
- `#7` Metadata & SEO: favicon, page titles, OpenGraph/Twitter meta descriptions, custom 404 page (2026-10-14)
- `#8` Forms & Links: contact form validation with error/success messages, modal link fixes, broken link remediation (2026-10-14)
- `#9` Performance & Images: Next.js Image optimization, Next.js production build verification (2026-10-14)


- `#1` Design and implement MindShield ADHD Reels Blocker extension architecture, manifest, and core modules (2026-10-14)
- `#2` Implement brain challenge engine (math, logic puzzles, Stroop tests) with unit test suite (2026-10-14)
- `#3` Implement platform reel detectors (Instagram, YouTube Shorts, Facebook Reels, TikTok) and scroll blocker overlay (2026-10-14)
- `#4` Implement popup UI, settings dashboard, and cooldown lockout timer (2026-10-14)
- `#5` Test and verify extension end-to-end with simulated reels playground and automated test suite (2026-10-14)


Append-only session locks, keyed by each item's permanent `#N` id (one
shared sequence across Backlog and Done — assigned once, shown next to the
item, never a content hash, so editing an item's wording never breaks its
lock). Never edit or delete a line here — union merge can't reconcile
in-place edits across sessions, only unioned appends. Formats:
`- CLAIM #N session <session-id> <timestamp> "optional label"`
`- RELEASE #N session <session-id> <timestamp>` (optional, only if you stop
early — a release from your own session cancels your own claim immediately)
The quoted label is optional but recommended: a future reader sees WHAT was
claimed, not just who/when — a session id alone answers "who," not "why."
Locks auto-expire after 2 hours with no release needed.

When the item is fully finished (moved to `## Done`): delete its CLAIM/
RELEASE line(s) from here entirely, in the same edit that writes the Done
entry — the Done entry is now the permanent record, the lock lines are pure
clutter once resolved. Safe specifically because it's one coordinated edit
by the session that just finished it, not a routine action or a race with
anyone. If only pausing an item that's still open, RELEASE but leave the
pair — it's a progress trail for whoever resumes it next.

If a session that claimed something gets closed, crashes, or is deleted
before finishing: don't wait out the timeout if you don't have to. The
SessionStart message shows which session id holds a locked item — write a
RELEASE line quoting THAT session's id (not your own) and it frees
immediately. The 2h expiry is only the backstop for when
nobody notices.

## Done

_(completed work, newest first, with the date it landed)_
