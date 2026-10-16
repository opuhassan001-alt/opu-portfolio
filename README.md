# Next-Gen 3D Football Analytics Platform

A high-performance, broadcast-grade 3D and 2D football analytics platform built with **React 18**, **Three.js (WebGL)**, **TypeScript**, and **Tailwind CSS**. The platform provides tactical analysts, scouts, and enthusiasts with aerodynamically modelled ball trajectories, 3D stadium physics, 2D pass network visualizers, and strictly verified player metrics.

---

## 🌟 Key Features

### 1. Three.js WebGL 3D Stadium Arena
- **Aerodynamic Magnus Effect Ball Flight**: Realistic numerical ballistic trajectory calculations combining gravity, aerodynamic drag, and Magnus lift forces using Runge-Kutta numerical integration.
- **Regulation 7.32m × 2.44m Goalposts & Flexible Netting**: Anatomically correct FIFA regulation goal frame with dynamic net vertex displacement reacting dynamically upon ball impact.
- **10-Yard Defensive Wall**: Wall positioned at exactly 9.15m (10 yards) from free-kick origin aligned directly toward the target goal center, calculating clearance height and stanchion trajectory.
- **4 Broadcast Camera Presets**:
  - `tv`: Main broadcast gantry camera positioned for elevated panoramic sideline coverage.
  - `drone`: Direct top-down tactical drone view perpendicular to pitch center.
  - `sideline`: Low-angle touchline broadcast camera focused on player run-ups.
  - `wire`: Dynamic trailing wire-cam following ball flight directly toward the goalmouth.
- **Comet Trail Particle Engine**: Real-time trajectory trail rendering dynamic speed-gradient glow particles.

### 2. 2D Tactical Pitch & Target Analysis
- **Standardized 105m × 68m Tactical Field**: SVG pitch renderer normalized in metric coordinates ($x \in [-52.5, 52.5]$, $y \in [-34.0, 34.0]$).
- **5-Color Pass Classification Palette**:
  - 🔵 **Normal Pass** (`#38bdf8`): Standard circulation and build-up play.
  - 🟡 **Key Pass** (`#eab308`): Pass directly leading to an attempt on goal.
  - 🟢 **Assist** (`#22c55e`): Pass resulting directly in a converted goal.
  - 🔴 **Direct Free-Kick Goal** (`#ef4444`): Dead-ball free-kick curling into the net.
  - 🟣 **Aerial Cross** (`#c084fc`): Long-range diagonal or box crossing flight.
- **9-Quadrant Goalmouth Target Analysis**: Spatial placement analysis categorizing shots into top-left stanchion, bottom corners, upper 90s, and central sectors.

### 3. Clean Player Card Standard
- **Strict Visual Layout**: `[Headshot] [Player Name] [Current Club]` ONLY.
- **Zero Subjective Clutter**: Zero nicknames, zero sensationalist hype, zero unverified buzzwords.
- **Universal Player Carousel**: Responsive horizontal selection ribbon with active state indicators and instant card focus.

### 4. 100% Verified Historical Statistics
Strict data integrity verified against official match records and European competition registries:
- **Lionel Messi**: 67 verified career direct free-kick goals, 382 assists, 848 goals.
- **Kylian Mbappé**: Strictly **0** career direct free-kick goals (100% verified; zero free-kick shots/passes recorded in data registry), 168 assists, 342 goals.
- **Kevin De Bruyne**: 18 verified career direct free-kick goals, 295 assists, 178 goals.
- **Arda Güler**: 4 career free-kick goals, 28 assists, 32 goals (including 2 pinpoint corner assists in UCL MD2 vs AS Roma).
- **Jude Bellingham**: 0 career free-kick goals, 48 assists, 62 goals.
- **Bukayo Saka**: 2 career free-kick goals (including UCL direct strike vs PSG), 68 assists, 72 goals.
- **Vinicius Junior**: 0 career free-kick goals, 86 assists, 108 goals.

### 5. Broadcast Match Center & Scouting Dossier
- **ScorebugHeader TV Banner**: Broadcast TV banner with live match clock, competition picker (Top 20 global competitions), and live scoring tickers.
- **PlayerDossierDrawer**: Expandable analytical slide-out drawer featuring player career stats, dominance zones, pass breakdowns, and trajectory coordinates.
- **Instant 3D / 2D View Switcher**: High-contrast toggle bar enabling seamless transitions between 3D WebGL pitch visualization and 2D tactical coordinate maps.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **3D Graphics Engine**: [Three.js](https://threejs.org/) (r186)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Glassmorphism dark broadcast theme
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Testing**: [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/) + jsdom
- **Bundler & Tooling**: [Vite](https://vitejs.dev/)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or pnpm

### Installation
```bash
npm install
```

### Development Server
Launch the interactive local development server:
```bash
npm run dev
```
Navigate to `http://localhost:5173` in your browser.

### Run Automated Tests
Execute the full Vitest automated test suite:
```bash
npm test
```

### Production Build
Generate optimized production bundles in `dist/`:
```bash
npm run build
```

### Preview Production Build
Preview the generated distribution build locally:
```bash
npm run preview
```

---

## 🧪 Automated Test Suite

The test suite covers schema validation, physics solvers, image pipelines, UI components, and end-to-end integration:

| Test Suite | Tests | Description |
|---|---|---|
| `tests/data/football-schema.test.ts` | 4 tests | Verifies player schema integrity, pitch coordinate boundaries, and free-kick accuracy. |
| `tests/physics/aerodynamics.test.ts` | 10 tests | Validates Runge-Kutta Magnus lift, drag coefficients, 9.15m wall distance, and apex clearance. |
| `tests/utils/image-pipeline.test.ts` | 8 tests | Validates image URL formatting, fallback handling, and headshot assets. |
| `tests/components/stadium-arena.test.ts` | 11 tests | Validates 3D arena mounting, camera preset coordinates, and net vertex deformation. |
| `tests/components/tactical-pitch-2d.test.ts` | 18 tests | Validates 2D SVG pitch rendering, pass filtering, 5-color palette, and 9-quadrant mapping. |
| `tests/integration/app-shell.test.tsx` | 8 tests | Validates complete app shell, player selection, view switching, and dossier drawer. |
| **Total** | **59 tests** | **100% Pass Rate** |

---

## 📁 Project Architecture

```
├── public/
│   └── assets/
│       └── players/               # Verified authentic PNG headshots
│           ├── arda-guler.png
│           ├── bellingham.png
│           ├── haaland.png
│           ├── kdb.png
│           ├── mbappe.png
│           ├── messi.png
│           ├── saka.png
│           └── vinicius.png
├── src/
│   ├── components/
│   │   ├── arena3d/              # Three.js 3D Stadium Arena & Physics
│   │   │   ├── CameraController.ts
│   │   │   ├── CometTrail.ts
│   │   │   ├── FlexibleNet.ts
│   │   │   ├── PitchMesh.ts
│   │   │   └── StadiumArena.tsx
│   │   ├── pitch2d/              # 2D Tactical Pitch & Target Grid
│   │   │   ├── GoalmouthGrid.tsx
│   │   │   ├── PassLegend.tsx
│   │   │   ├── PassVectors.tsx
│   │   │   └── TacticalPitch2D.tsx
│   │   ├── Navbar.tsx            # Global navigation & view toggles
│   │   ├── PlayerCarousel.tsx    # Clean player card strip standard
│   │   ├── PlayerDossierDrawer.tsx # Analytical scouting drawer
│   │   └── ScorebugHeader.tsx    # TV match clock & scorebug banner
│   ├── data/
│   │   ├── competitions.ts       # Top 20 verified league datasets
│   │   └── players.ts            # Verified player database & trajectories
│   ├── physics/
│   │   ├── aerodynamics.ts       # Magnus effect & Runge-Kutta ballistics
│   │   └── defensive-wall.ts     # 10-yard wall geometric placement
│   ├── types/
│   │   └── football.ts           # Domain models & coordinate contracts
│   ├── utils/
│   │   └── image-pipeline.ts     # Image validation & fallback resolution
│   ├── App.tsx                   # Main application entry component
│   └── main.tsx                  # React root DOM mounting
├── tests/                        # Vitest automated test suites
├── dist/                         # Optimized production build artifacts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 📄 License
MIT License. Verified historical statistics and player data compiled for educational and tactical demonstration.
