# UCL 2026–27 Matchday 3 Integration & 3D Interactive Tactical Arena Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

This plan integrates the full Matchday 3 schedule (18 matches played on October 14–15, 2026, including AS Roma vs Real Madrid CF), updates player logs/stats, and transforms the pitch visualizer into a cutting-edge 3D Three.js tactical stadium arena with animated ball trajectory curves and broadcast camera controls, completely removing visual "eyeslop".

---

## 1. File Structure & Responsibilities

- **`src/data/uclMatches2026.ts`**:
  - Add Matchday 3 (MD3) containing all 18 matches played on Oct 14 & 15, 2026 (including AS Roma 1 - 3 Real Madrid CF at Stadio Olimpico).
  - Update total tournament matches (54) and total goals.

- **`src/data/uclData.ts`**:
  - Update `tournamentOverview` (54 matches, updated total goals, updated leaderboards).
  - Update player statistics and match logs for Arda Güler (Roma vs Real Madrid: 81' goal, 1 assist, 9.1 rating), Kylian Mbappé (brace vs Roma), Lamine Yamal (goal vs Bayern), Harry Kane (brace vs Barca), Erling Haaland (hat-trick vs Sparta Praha), Bukayo Saka, Hakan Çalhanoğlu, etc.
  - Add MD3 shot coordinates, direct free kicks, and pass vectors.

- **`src/components/TacticalPitch/Pitch3D.tsx` (NEW)**:
  - Three.js WebGL 3D tactical stadium arena.
  - Realistic 3D pitch surface with turf stripe patterns and touchline markings.
  - 3D goalposts, crossbars, and netting with depth.
  - Interactive 3D camera controls: Orbital mouse rotation/zoom + camera presets ("TV Broadcast", "Overhead Drone", "Free-Kick Cam", "Sideline Dugout").
  - Animated 3D parabolic shot and free-kick trajectory curves with glowing ball tracers.
  - 3D glowing thermal discs/mesh for heatmaps.
  - 3D elevated laser arcs for progressive and key passes.

- **`src/components/TacticalPitch/PitchVisualizer.tsx`**:
  - Integrate a seamless `[ 3D Arena ]` / `[ 2D Precision ]` mode toggle.
  - Camera angle switcher in 3D mode.
  - Camera animation transitions.

- **`src/components/Matches/TournamentMatchesView.tsx` & `src/components/Navbar.tsx`**:
  - Add MD3 tab pill ("MD 3 (18)") in matches view.
  - Update "All 54 Matches" label in Navbar and stats counters.

- **`scripts/generate-excel.mjs`**:
  - Update script to write all 54 matches and updated MD3 player logs into `UCL_2026_27_Tactical_Analytics.xlsx`.

- **Unit Tests**:
  - Update `src/__tests__/matches2026.test.ts` and `uclData.test.ts` for 54 matches and MD3 logs.
  - Add `src/__tests__/pitch3d.test.ts` verifying 3D camera presets and trajectory mathematical curve calculation.

---

## Tasks

### Task 1: Add Matchday 3 Matches (All 18 Matches, Total 54 Matches) & Update Tournament Overview
- [ ] Add all 18 MD3 matches to `src/data/uclMatches2026.ts`, specifically including AS Roma 1 - 3 Real Madrid CF (14 Oct 2026) at Stadio Olimpico with scorers Paulo Dybala 22' | Kylian Mbappé 34', 68', Arda Güler 81'.
- [ ] Update total match count to 54 and calculate new cumulative goal total.
- [ ] Update `src/components/Matches/TournamentMatchesView.tsx` with Matchday 3 filter tab and UI counters.
- [ ] Verify match lookup and filters with tests.

### Task 2: Update Player Profiles, Match Logs, Shots, and Passes for MD3
- [ ] Update Arda Güler profile with MD3 match against AS Roma (81' goal, 1 assist, 9.1 rating, 68 passes, shot coordinates, right half-space heatmap points).
- [ ] Update Kylian Mbappé (MD3 brace vs Roma, goals tally), Harry Kane (MD3 brace vs Barca), Erling Haaland (MD3 hat-trick vs Sparta), Lamine Yamal (MD3 goal vs Bayern), Bukayo Saka, and Hakan Çalhanoğlu.
- [ ] Update `tournamentOverview` in `src/data/uclData.ts`.
- [ ] Run vitest to verify consistency.

### Task 3: Build 3D Three.js Tactical Stadium Arena (`Pitch3D.tsx`)
- [ ] Create `src/components/TacticalPitch/Pitch3D.tsx` with Three.js WebGL canvas.
- [ ] Implement procedural 3D pitch markings, 3D goalposts with netting, and floodlight lighting.
- [ ] Implement interactive orbit controls and 4 broadcast camera presets: "TV Broadcast", "Overhead Drone", "Free-Kick Cam", "Sideline Dugout".
- [ ] Implement animated 3D parabolic shot and free-kick trajectory curves with moving glowing projectile spheres and impact ripples.
- [ ] Implement 3D glowing pulse markers for heatmaps and elevated laser pass vectors.

### Task 4: Integrate 3D Arena into `PitchVisualizer.tsx` and Eliminate Visual Eyeslop
- [ ] Add `[ 3D Arena ]` / `[ 2D Precision ]` toggle button with icons in `PitchVisualizer.tsx`.
- [ ] Provide camera preset buttons when in 3D mode.
- [ ] Elevate card styling, clean up borders, refine contrast, and ensure high-tier broadcast aesthetics.
- [ ] Ensure 100% responsive resizing with window resize listeners and WebGL context cleanup on unmount.

### Task 5: Re-generate Excel Workbook & Update Automated Tests
- [ ] Update `scripts/generate-excel.mjs` and run it to produce fresh `UCL_2026_27_Tactical_Analytics.xlsx` with all 54 matches.
- [ ] Update and expand unit tests in `src/__tests__/`.
- [ ] Run `npm run test` and `npm run build` to confirm 100% green passing tests and clean bundle.
- [ ] Verify dev server on `http://localhost:5174/` and record task completion in `docs/TODO.md`.

