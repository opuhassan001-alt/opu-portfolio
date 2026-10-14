# TODO — carried across sessions

Persistent backlog for this project. The agent reads this at session start and is
blocked from ending a session that changed files but left this untouched.

Write entries a teammate who wasn't here could act on: what's left and **where to
resume**, not just a task name.

## Backlog

_(no pending items)_

## In Progress

_(no active claims)_

## Done

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
- `#20` Resolve Brave mobile PWA HTTP installation bypass (brave://flags insecure origins guidance and modal troubleshooting) (2026-10-14)
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
