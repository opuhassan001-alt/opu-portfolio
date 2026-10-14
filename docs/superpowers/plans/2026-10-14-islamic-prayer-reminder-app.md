# Islamic Prayer & Daily Dua Reminder Mobile App Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a mobile-first, offline-capable Islamic Prayer & Dua Reminder Progressive Web App (PWA) with authentic post-prayer adhkar for each prayer (Fajr, Dhuhr, Asr, Maghrib, Isha, Tahajjud), morning/evening duas, interactive digital tasbeeh counter, and an interactive phone installation guide.

**Architecture:** Standalone lightweight React + Vite + Tailwind CSS mobile web application configured as a Progressive Web App (PWA) in `islamic-reminder-app/`. It uses service workers for full offline persistence, LocalStorage for progress tracking, Web Audio/Vibration APIs for tactile tasbeeh feedback, and responsive mobile-first UI with beautiful Islamic emerald green & gold aesthetics.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, Lucide React, Service Worker PWA, HTML5 Web Audio / Haptics.

**Spec:** `docs/superpowers/specs/2026-10-14-islamic-prayer-reminder-app-design.md`

## Global Constraints
- Target platform: Mobile browsers (Android Chrome, iOS Safari) with PWA Home Screen installation.
- Complete Bengali interface with crystal-clear Arabic font rendering (Amiri / Scheherazade) and Bengali font (Hind Siliguri).
- 100% offline functionality after first load via service worker.
- No mandatory external backend or database required for personal phone testing.

## Review Focus
- Arabic diacritics (Harakat) rendering correctly alongside clear Bengali phonetics.
- Prayer differentiation (ensuring Fajr and Maghrib have their specific 3x Surahs and 7x "Allahumma ajirni", and Tahajjud has its specific Qiyam duas).
- Digital Tasbeeh accurately tracks repeat counts (e.g. 33, 34, 7, 3, 100) and triggers haptic/audio completion feedback.
- PWA manifest and service worker install prompt functioning smoothly on mobile.
- Phone connection instructions (Local Wi-Fi IP / QR code) are crystal clear for any non-technical user.

---

### Task 1: Project Scaffold, PWA Configuration & Styling Setup

**Files:**
- Create: `islamic-reminder-app/package.json`
- Create: `islamic-reminder-app/vite.config.ts`
- Create: `islamic-reminder-app/tsconfig.json`
- Create: `islamic-reminder-app/tailwind.config.js`
- Create: `islamic-reminder-app/postcss.config.js`
- Create: `islamic-reminder-app/index.html`
- Create: `islamic-reminder-app/public/manifest.json`
- Create: `islamic-reminder-app/public/sw.js`
- Create: `islamic-reminder-app/src/index.css`

**Interfaces:**
- Produces: Working React + Vite development environment with Tailwind CSS, Google Fonts (Amiri + Hind Siliguri), Lucide icons, and PWA manifest.

- [ ] **Step 1: Create package.json and project configuration files**
  Configure dependencies (`react`, `react-dom`, `lucide-react`, `tailwindcss`, `vite`, etc.) and dev scripts.
- [ ] **Step 2: Install dependencies**
  Run `npm install` inside `islamic-reminder-app`.
- [ ] **Step 3: Setup index.html with PWA meta tags and Google Fonts**
  Include viewport, theme-color (`#064e3b`), apple-mobile-web-app tags, manifest link, and fonts.
- [ ] **Step 4: Create manifest.json and basic service worker sw.js**
  Define app name "দ্বীনি আমল ও দোয়া", theme color, display standalone, and offline cache script.
- [ ] **Step 5: Verify build and test dev server startup**
  Run `npm run build` to verify clean scaffolding.

---

### Task 2: Core Islamic Dua & Prayer Data Store

**Files:**
- Create: `islamic-reminder-app/src/types/index.ts`
- Create: `islamic-reminder-app/src/data/prayersData.ts`
- Create: `islamic-reminder-app/src/data/adhkarData.ts`

**Interfaces:**
- Produces:
  - `PrayerDua` type: `{ id, prayer, title, arabic, pronunciation, meaning, count, reference, virtue }`
  - `AdhkarItem` type: `{ id, category: 'morning' | 'evening', title, arabic, pronunciation, meaning, count, reference, virtue }`
  - Complete, authentic data for Fajr, Dhuhr, Asr, Maghrib, Isha, Tahajjud, and Morning/Evening.

- [ ] **Step 1: Define TypeScript interfaces**
  Define `PrayerType`, `DuaItem`, `AdhkarItem`, and `UserProgress`.
- [ ] **Step 2: Create authentic prayer duas data in prayersData.ts**
  Include full Arabic, Bengali pronunciation, Bengali translation, recommended recitation count, and Hadith references for all 6 prayers.
- [ ] **Step 3: Create morning and evening adhkar in adhkarData.ts**
  Include Sayyidul Istighfar, Ayatul Kursi, 3 Quls, protection duas, and evening variations.
- [ ] **Step 4: Verify data integrity**
  Run typecheck script to ensure all prayer and adhkar types are valid.

---

### Task 3: Interactive UI Components (Dua Card, Tasbeeh Counter, Tab Navigation)

**Files:**
- Create: `islamic-reminder-app/src/components/Header.tsx`
- Create: `islamic-reminder-app/src/components/PrayerTabs.tsx`
- Create: `islamic-reminder-app/src/components/DuaCard.tsx`
- Create: `islamic-reminder-app/src/components/TasbeehCounterModal.tsx`
- Create: `islamic-reminder-app/src/components/MorningEveningSection.tsx`

**Interfaces:**
- Consumes: `prayersData.ts`, `adhkarData.ts`, `types/index.ts`
- Produces: Interactive mobile cards with Arabic/Bengali toggle, recitation completion checkbox, audio click/vibration, and modal tasbeeh counter.

- [ ] **Step 1: Implement Header with current date (Hijri + Gregorian) and quick status**
- [ ] **Step 2: Implement PrayerTabs selector**
  Allow seamless switching between ফজর, যোহর, আসর, মাগরিব, এশা, তাহাজ্জুদ and সকাল/সন্ধ্যা.
- [ ] **Step 3: Implement DuaCard component**
  Display title, Arabic text (with copy button), Bengali pronunciation, meaning, count badge, and a "তাসবীহ গণনা করুন" button.
- [ ] **Step 4: Implement interactive TasbeehCounterModal**
  Large touch-friendly circular counter with count progress, reset button, and vibration feedback (`navigator.vibrate([30])`).
- [ ] **Step 5: Implement MorningEveningSection**
  Display morning and evening tabs with progress counters.

---

### Task 4: Phone Installation Guide & Local Network Connect Helper

**Files:**
- Create: `islamic-reminder-app/src/components/InstallGuideModal.tsx`
- Create: `islamic-reminder-app/src/components/NetworkInfoModal.tsx`
- Create: `islamic-reminder-app/src/utils/pwa.ts`

**Interfaces:**
- Produces:
  - Guided step-by-step installation instructions for Android (Chrome 3-dot menu -> "Install app") and iOS (Safari Share button -> "Add to Home Screen").
  - Detection of whether app is running in standalone mode.
  - Native PWA install prompt button when supported.

- [ ] **Step 1: Implement PWA install prompt hook and standalone detector in pwa.ts**
- [ ] **Step 2: Build InstallGuideModal with visual guides for Android & iPhone**
  Clear Bengali instructions with screenshots/icons showing how to pin to home screen.
- [ ] **Step 3: Build NetworkInfoModal with instructions on how to open from phone**
  Displays easy steps to access via local Wi-Fi.

---

### Task 5: Main Application Assembly, State Persistence & Polish

**Files:**
- Create: `islamic-reminder-app/src/App.tsx`
- Create: `islamic-reminder-app/src/main.tsx`
- Create: `islamic-reminder-app/README.md` (Detailed Bengali setup and phone install guide)

**Interfaces:**
- Consumes: All components from Task 1-4.
- Produces: Fully integrated application with persistent completion tracking, responsive mobile layout, and testing readiness.

- [ ] **Step 1: Assemble App.tsx with state management**
  Integrate prayer selection, completion checkboxes saved in LocalStorage, modals, and search/filter.
- [ ] **Step 2: Add audio/vibration feedback utility for clicks and completions**
- [ ] **Step 3: Verify build and test full responsive mobile flow**
  Run `npm run build` and launch dev server with host exposure (`--host`).
- [ ] **Step 4: Write comprehensive Bengali setup instructions in README.md**
  Covering step-by-step how to run, how to connect from Android/iPhone on local Wi-Fi, and how to install as an app.

---

### Task 6: Verification, Local Phone Access Test & Documentation

**Files:**
- Modify: `docs/TODO.md` (Update task completion according to harness rules)

- [ ] **Step 1: Test build output and verify no TypeScript or bundling errors**
- [ ] **Step 2: Verify PWA manifest, service worker registration, and mobile meta tags**
- [ ] **Step 3: Update `docs/TODO.md` with permanent `#6` ID for completed app implementation**
