# MindShield: ADHD Reels & Shorts Blocker Extension Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and thoroughly test a cross-browser extension (Manifest V3) that stops compulsive short-form video addiction (Instagram Reels, YouTube Shorts, Facebook Reels, TikTok) after a configured number of reels or time limit, displays a brain puzzle/challenge, and enforces a cooldown lockout if unsolved or abandoned.

**Architecture:** A Manifest V3 extension featuring:
1. `core/`: Pure JS modules for challenge generation (math, logic sequences, Stroop tests), reel detection, and state management (counts, timers, cooldown).
2. `content/`: Scripts and styles injected into video platforms that track active reel views, pause playback, prevent keyboard/touch scrolling, and render an inescapable full-screen blocking overlay with puzzle UI and cooldown countdown.
3. `background/`: Service worker for alarm scheduling, cross-tab session synchronization, badge counters, and background cooldown management.
4. `popup/` & `options/`: User interface for live stats, threshold configuration (e.g. 5 reels or 10 minutes), cooldown period (e.g. 30-40 minutes), and puzzle difficulty.
5. `tests/`: Automated unit tests using Node.js built-in test runner (`node --test`), plus an interactive HTML test harness simulating reel feed behavior.

**Tech Stack:** JavaScript (ES Modules), Chrome Extension Manifest V3, HTML5/CSS3, Node.js native test runner (`node --test`).

**Spec:** Requirements requested by the user:
- ADHD intervention for short-form video dopamine loops.
- Track reels watched and time elapsed.
- Intercept and block scrolling when limit is hit.
- Challenge modal with math/logic puzzles to activate prefrontal cortex.
- 30 to 40 minute cooldown lockout period if puzzle is not solved or skipped.
- Extension restart/cycle reset after cooldown completes.
- Explanations in Bengali of what, why, and how each component works.

## Global Constraints

- Must follow Chrome Extension Manifest V3 standards (`service_worker`, `declarativeContent` / content scripts, modern `chrome.storage.local`).
- Must operate on Instagram Reels, YouTube Shorts, Facebook Reels, and TikTok.
- Core business logic (puzzles, state machine, detectors) must be pure functions or mockable classes runnable under Node.js test runner with zero browser dependencies.
- No external runtime dependencies (no bulky webpack/babel setup required) to keep extension lightweight, fast, and easy to unpack and run directly in any Chromium or Firefox browser.
- Explanations and communication with user must be in Bengali.

## Review Focus

1. **Reel Detection Edge Cases**: Rapid scrolling without watching should not prematurely consume reel quota; videos must be watched for at least 3 seconds or detected by URL transition to count as a reel.
2. **Overlay Evasion**: Users should not be able to bypass the block with Space, ArrowDown, PageDown, or mouse scroll wheel; keyboard events and touchmove must be intercepted with `preventDefault()` and `stopPropagation()`.
3. **Timer Tampering / Storage Sync**: State must persist in `chrome.storage.local` with absolute timestamp checks (`Date.now()`) so closing and reopening tabs does not reset cooldown prematurely.
4. **Challenge Randomization**: Puzzles must dynamically generate random math questions and sequences with validated correct answers and distraction options.
5. **Cooldown Expiry Handling**: When the 30-40 minute cooldown expires, the lock must seamlessly lift without requiring browser restart.

---

### Task 1: Core Configuration and Challenge Engine

**Files:**
- Create: `mindshield-extension/src/core/config.js`
- Create: `mindshield-extension/src/core/challenge-engine.js`
- Test: `mindshield-extension/tests/challenge-engine.test.js`

**Interfaces:**
- Produces:
  - `generateChallenge(type, difficulty)` -> `{ id, question, type, options, answer, hint }`
  - `verifyAnswer(challenge, submittedAnswer)` -> `boolean`
  - Types: `'math'`, `'sequence'`, `'stroop'`
  - Difficulties: `'easy'`, `'medium'`, `'hard'`

- [ ] **Step 1: Write failing tests for Challenge Engine**
- [ ] **Step 2: Run tests to verify failure**
- [ ] **Step 3: Implement `config.js` and `challenge-engine.js`**
- [ ] **Step 4: Run tests to verify all tests pass**

---

### Task 2: State Manager & Cooldown Engine

**Files:**
- Create: `mindshield-extension/src/core/state-manager.js`
- Test: `mindshield-extension/tests/state-manager.test.js`

**Interfaces:**
- Produces:
  - `StateManager(storageAdapter)`
  - `recordReelView()` -> `Promise<{ reelCount, sessionTime, shouldBlock, isCooldown }>`
  - `startCooldown(durationMinutes)` -> `Promise<{ cooldownEndTime }>`
  - `checkCooldownStatus()` -> `Promise<{ isCooldown, remainingSeconds }>`
  - `solveChallengeSuccess()` -> `Promise<{ unlocked: true }>`
  - `resetSession()` -> `Promise<void>`
  - `getSettings()` & `updateSettings(newSettings)`

- [ ] **Step 1: Write failing tests for State Manager**
- [ ] **Step 2: Run tests to verify failure**
- [ ] **Step 3: Implement `state-manager.js` with storage abstraction**
- [ ] **Step 4: Run tests to verify all tests pass**

---

### Task 3: Platform Detectors & Content Script Blocker

**Files:**
- Create: `mindshield-extension/src/core/detector.js`
- Create: `mindshield-extension/src/content/overlay.css`
- Create: `mindshield-extension/src/content/overlay.js`
- Create: `mindshield-extension/src/content/content-script.js`
- Test: `mindshield-extension/tests/detector.test.js`

**Interfaces:**
- Produces:
  - `isReelsUrl(url)` -> `{ match: boolean, platform: string|null }`
  - `OverlayManager`: `renderLockOverlay()`, `renderCooldownOverlay()`, `removeOverlay()`
  - Input blockers: `trapScroll()`, `pauseMedia()`

- [ ] **Step 1: Write failing tests for URL and Platform detector**
- [ ] **Step 2: Run detector tests to verify failure**
- [ ] **Step 3: Implement `detector.js`**
- [ ] **Step 4: Run detector tests to verify pass**
- [ ] **Step 5: Implement `overlay.css`, `overlay.js`, and `content-script.js`**

---

### Task 4: Background Service Worker, Manifest, and Popup/Options UI

**Files:**
- Create: `mindshield-extension/manifest.json`
- Create: `mindshield-extension/src/background/service-worker.js`
- Create: `mindshield-extension/src/popup/popup.html`
- Create: `mindshield-extension/src/popup/popup.css`
- Create: `mindshield-extension/src/popup/popup.js`
- Create: `mindshield-extension/src/options/options.html`
- Create: `mindshield-extension/src/options/options.css`
- Create: `mindshield-extension/src/options/options.js`
- Create: `mindshield-extension/icons/icon16.png`, `icon48.png`, `icon128.png`

- [ ] **Step 1: Create Manifest V3 configuration with appropriate permissions**
- [ ] **Step 2: Implement Background Service Worker with alarm listeners & message routing**
- [ ] **Step 3: Implement Popup interface (today's stats, quick unlock status)**
- [ ] **Step 4: Implement Options interface (limits, cooldown duration, toggles)**
- [ ] **Step 5: Generate extension icons (clean SVG/canvas rendered icons)**

---

### Task 5: Interactive Test Playground & Full End-to-End Verification

**Files:**
- Create: `mindshield-extension/tests/playground.html`
- Create: `mindshield-extension/package.json`
- Test: Run all unit test suites (`npm test`)

- [ ] **Step 1: Build interactive simulated reels feed (`playground.html`) with scrollable reels**
- [ ] **Step 2: Package scripts into `package.json` for easy test running**
- [ ] **Step 3: Run full automated test suite to verify 100% pass**
- [ ] **Step 4: Document installation and verification instructions in Bengali**
