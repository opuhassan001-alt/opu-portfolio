import React, { useState, useMemo } from 'react';
import { Player, PassEvent, PassCategory } from '../../types/football';
import { PassVectorLayer, getPassColor } from './PassVectorLayer';
import { ThermalHeatmap } from './ThermalHeatmap';
import { GoalmouthPopup } from './GoalmouthPopup';
import { Flame, Target, Info, Check, Filter } from 'lucide-react';

export interface TacticalPitch2DProps {
  player?: Player | null;
  passes?: PassEvent[];
  selectedPassId?: string | null;
  onSelectPass?: (pass: PassEvent | null) => void;
  showHeatmap?: boolean;
  onToggleHeatmap?: (show: boolean) => void;
  showFilterToggles?: boolean;
  initialCategoryMask?: Partial<Record<PassCategory, boolean>>;
  className?: string;
}

const CATEGORY_METADATA: Record<
  PassCategory,
  { label: string; description: string; hex: string }
> = {
  normal: { label: 'Normal Pass', description: 'Circulation & progressive ground passing', hex: '#38bdf8' },
  key: { label: 'Key Pass', description: 'Shot-creating chance delivery', hex: '#eab308' },
  assist: { label: 'Assist', description: 'Direct goal-assisting pass', hex: '#22c55e' },
  freekick: { label: 'Direct Free-Kick', description: 'Direct set-piece shot or goal', hex: '#ef4444' },
  aerial: { label: 'Aerial Cross / Switch', description: 'High-trajectory diagonal long ball', hex: '#c084fc' },
};

export const TacticalPitch2D: React.FC<TacticalPitch2DProps> = ({
  player,
  passes: customPasses,
  selectedPassId: controlledSelectedPassId,
  onSelectPass,
  showHeatmap: controlledShowHeatmap,
  onToggleHeatmap,
  showFilterToggles = true,
  initialCategoryMask,
  className = '',
}) => {
  // Pass dataset fallback
  const passes = useMemo(() => {
    return customPasses || player?.passes || [];
  }, [customPasses, player]);

  // Category filter mask state
  const [categoryMask, setCategoryMask] = useState<Record<PassCategory, boolean>>(() => ({
    normal: true,
    key: true,
    assist: true,
    freekick: true,
    aerial: true,
    ...(initialCategoryMask || {}),
  }));

  // Internal selection state if not controlled
  const [internalSelectedPassId, setInternalSelectedPassId] = useState<string | null>(null);
  const selectedPassId = controlledSelectedPassId !== undefined ? controlledSelectedPassId : internalSelectedPassId;

  // Internal heatmap toggle state if not controlled
  const [internalShowHeatmap, setInternalShowHeatmap] = useState<boolean>(true);
  const showHeatmap = controlledShowHeatmap !== undefined ? controlledShowHeatmap : internalShowHeatmap;

  // Goalmouth Popup dialog state
  const [isGoalmouthOpen, setIsGoalmouthOpen] = useState<boolean>(false);

  // Active selected pass object
  const selectedPass = useMemo(() => {
    if (!selectedPassId) return null;
    return passes.find(p => p.id === selectedPassId) || null;
  }, [passes, selectedPassId]);

  // Pass counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<PassCategory, number> = {
      normal: 0,
      key: 0,
      assist: 0,
      freekick: 0,
      aerial: 0,
    };
    passes.forEach(p => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      }
    });
    return counts;
  }, [passes]);

  // Toggle category
  const toggleCategory = (cat: PassCategory) => {
    setCategoryMask(prev => ({
      ...prev,
      [cat]: !prev[cat],
    }));
  };

  const showAllCategories = () => {
    setCategoryMask({
      normal: true,
      key: true,
      assist: true,
      freekick: true,
      aerial: true,
    });
  };

  const clearAllCategories = () => {
    setCategoryMask({
      normal: false,
      key: false,
      assist: false,
      freekick: false,
      aerial: false,
    });
  };

  // Select pass handler
  const handleSelectPass = (pass: PassEvent) => {
    if (selectedPassId === pass.id) {
      // Toggle off if already selected
      if (onSelectPass) onSelectPass(null);
      else setInternalSelectedPassId(null);
    } else {
      if (onSelectPass) onSelectPass(pass);
      else setInternalSelectedPassId(pass.id);
    }
  };

  const handleToggleHeatmap = () => {
    const nextVal = !showHeatmap;
    if (onToggleHeatmap) onToggleHeatmap(nextVal);
    else setInternalShowHeatmap(nextVal);
  };

  // Dimensions
  const svgWidth = 1050;
  const svgHeight = 680;
  const stripeWidth = 70; // 15 stripes

  return (
    <div className={`relative flex flex-col gap-3 w-full text-slate-100 ${className}`} data-testid="tactical-pitch-2d">
      {/* Top Controls: Filter Toggles & Heatmap Switch */}
      {showFilterToggles && (
        <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-slate-900/80 p-3 border border-slate-800 backdrop-blur-md">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="flex items-center gap-1 text-xs font-semibold text-slate-400 mr-1">
              <Filter className="h-3.5 w-3.5" />
              <span>Filters:</span>
            </span>

            <div className="flex items-center gap-1 mr-2 text-[11px] font-mono">
              <button
                type="button"
                data-testid="filter-show-all"
                onClick={showAllCategories}
                className="text-sky-400 hover:text-sky-300 underline underline-offset-2 px-1"
              >
                All
              </button>
              <span className="text-slate-600">/</span>
              <button
                type="button"
                data-testid="filter-clear-all"
                onClick={clearAllCategories}
                className="text-slate-400 hover:text-slate-300 underline underline-offset-2 px-1"
              >
                Clear
              </button>
            </div>

            {(['normal', 'key', 'assist', 'freekick', 'aerial'] as PassCategory[]).map(cat => {
              const isActive = categoryMask[cat];
              const meta = CATEGORY_METADATA[cat];
              const count = categoryCounts[cat];

              return (
                <button
                  key={cat}
                  data-testid={`filter-toggle-${cat}`}
                  onClick={() => toggleCategory(cat)}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200 border ${
                    isActive
                      ? 'bg-slate-800 text-white shadow-sm'
                      : 'bg-slate-950/40 text-slate-500 border-slate-800/60 opacity-60 hover:opacity-90'
                  }`}
                  style={{
                    borderColor: isActive ? meta.hex : undefined,
                  }}
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: meta.hex }}
                  />
                  <span>{meta.label}</span>
                  <span className="font-mono text-[10px] text-slate-400 ml-0.5">({count})</span>
                  {isActive && <Check className="h-3 w-3 text-slate-400" />}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              data-testid="toggle-heatmap"
              onClick={handleToggleHeatmap}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all border ${
                showHeatmap
                  ? 'bg-amber-500/10 border-amber-500/40 text-amber-300'
                  : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
              }`}
            >
              <Flame className="h-3.5 w-3.5 text-amber-400" />
              <span>{showHeatmap ? 'Heatmap: ON' : 'Heatmap: OFF'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Tactical Pitch SVG Stage */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl">
        <svg
          data-testid="tactical-pitch-svg"
          viewBox={`-25 -25 ${svgWidth + 50} ${svgHeight + 50}`}
          className="w-full h-auto select-none"
          style={{ maxHeight: '72vh' }}
        >
          {/* Pitch Apron / Border */}
          <rect
            x="-25"
            y="-25"
            width={svgWidth + 50}
            height={svgHeight + 50}
            fill="#091b11"
          />

          {/* 15 Regulation Turf Mowing Stripes */}
          <g className="turf-stripes" data-testid="turf-stripes">
            {Array.from({ length: 15 }).map((_, i) => (
              <rect
                key={`stripe-${i}`}
                x={i * stripeWidth}
                y="0"
                width={stripeWidth}
                height={svgHeight}
                fill={i % 2 === 0 ? '#0d2c1c' : '#113522'}
              />
            ))}
          </g>

          {/* Thermal Dominance Heatmap Layer (under lines) */}
          <ThermalHeatmap
            player={player}
            passes={passes}
            visible={showHeatmap}
            svgWidth={svgWidth}
            svgHeight={svgHeight}
          />

          {/* Regulation 105m x 68m Pitch Markings */}
          <g
            className="pitch-lines"
            data-testid="pitch-lines"
            stroke="#f8fafc"
            strokeWidth="2"
            strokeOpacity="0.75"
            fill="none"
          >
            {/* Outer Pitch Boundary Line */}
            <rect x="0" y="0" width={svgWidth} height={svgHeight} />

            {/* Halfway Line */}
            <line x1={svgWidth / 2} y1="0" x2={svgWidth / 2} y2={svgHeight} />

            {/* Center Circle (r = 9.15m -> 91.5px) */}
            <circle cx={svgWidth / 2} cy={svgHeight / 2} r="91.5" />

            {/* Center Spot */}
            <circle cx={svgWidth / 2} cy={svgHeight / 2} r="3" fill="#f8fafc" />

            {/* Defending Penalty Box (16.5m x 40.32m -> 165px x 403.2px, y: 138.4 to 541.6) */}
            <rect x="0" y="138.4" width="165" height="403.2" />

            {/* Defending 6-Yard Box (5.5m x 18.32m -> 55px x 183.2px, y: 248.4 to 431.6) */}
            <rect x="0" y="248.4" width="55" height="183.2" />

            {/* Defending Penalty Spot (11m -> 110px) */}
            <circle cx="110" cy="340" r="3" fill="#f8fafc" />

            {/* Defending Penalty Arc (r = 91.5px outside box) */}
            <path d="M 165 266.88 A 91.5 91.5 0 0 1 165 413.12" />

            {/* Attacking Penalty Box */}
            <rect x="885" y="138.4" width="165" height="403.2" />

            {/* Attacking 6-Yard Box */}
            <rect x="995" y="248.4" width="55" height="183.2" />

            {/* Attacking Penalty Spot (940px) */}
            <circle cx="940" cy="340" r="3" fill="#f8fafc" />

            {/* Attacking Penalty Arc */}
            <path d="M 885 266.88 A 91.5 91.5 0 0 0 885 413.12" />

            {/* 4 Corner Arcs (r = 1.0m -> 10px) */}
            <path d="M 0 10 A 10 10 0 0 0 10 0" />
            <path d="M 0 670 A 10 10 0 0 1 10 680" />
            <path d="M 1040 0 A 10 10 0 0 0 1050 10" />
            <path d="M 1040 680 A 10 10 0 0 1 1050 670" />

            {/* Defending Goal (7.32m width -> 73.2px, protruding 20px) */}
            <rect x="-20" y="303.4" width="20" height="73.2" strokeWidth="2.5" />

            {/* Attacking Goal */}
            <rect x="1050" y="303.4" width="20" height="73.2" strokeWidth="2.5" />
          </g>

          {/* Interactive Directional Pass Vectors */}
          <PassVectorLayer
            passes={passes}
            selectedPassId={selectedPassId}
            onSelectPass={handleSelectPass}
            categoryMask={categoryMask}
            svgWidth={svgWidth}
            svgHeight={svgHeight}
          />
        </svg>

        {/* Pitch Directional Watermarks */}
        <div className="pointer-events-none absolute bottom-2 left-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          ◄ Defending Goal (-52.5m)
        </div>
        <div className="pointer-events-none absolute bottom-2 right-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
          Attacking Goal (+52.5m) ►
        </div>
      </div>

      {/* Selected Pass Telemetry & Goalmouth Trigger Bar */}
      {selectedPass && (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-slate-900/90 border border-slate-700/80 p-3.5 shadow-lg backdrop-blur animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center gap-3">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-lg font-bold text-white shadow-sm"
              style={{ backgroundColor: getPassColor(selectedPass.category) }}
            >
              {selectedPass.minute}&apos;
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-white">
                  {CATEGORY_METADATA[selectedPass.category]?.label || selectedPass.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {selectedPass.distanceM.toFixed(1)}m • {selectedPass.velocityKmH.toFixed(1)} km/h
                </span>
                {selectedPass.xGOT !== undefined && (
                  <span className="rounded bg-purple-500/20 px-1.5 py-0.5 text-[10px] font-mono text-purple-300 border border-purple-500/30">
                    xGOT {selectedPass.xGOT.toFixed(2)}
                  </span>
                )}
              </div>
              {selectedPass.description && (
                <p className="text-xs text-slate-300 mt-0.5 line-clamp-1">{selectedPass.description}</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Goalmouth Target Analysis Trigger (Enabled for freekicks or passes with landingQuadrant) */}
            {(selectedPass.landingQuadrant !== undefined || selectedPass.category === 'freekick') && (
              <button
                data-testid="open-goalmouth-popup"
                onClick={() => setIsGoalmouthOpen(true)}
                className="flex items-center gap-1.5 rounded-lg bg-red-600 hover:bg-red-500 px-3 py-1.5 text-xs font-semibold text-white shadow-md transition-colors"
              >
                <Target className="h-4 w-4" />
                <span>View Goalmouth Target Analysis</span>
              </button>
            )}

            <button
              onClick={() => {
                if (onSelectPass) onSelectPass(null);
                else setInternalSelectedPassId(null);
              }}
              className="rounded-lg bg-slate-800 hover:bg-slate-700 px-2.5 py-1.5 text-xs text-slate-300 transition-colors"
            >
              Clear
            </button>
          </div>
        </div>
      )}

      {/* Goalmouth Modal Popup */}
      <GoalmouthPopup
        pass={selectedPass}
        isOpen={isGoalmouthOpen}
        onClose={() => setIsGoalmouthOpen(false)}
      />
    </div>
  );
};

export default TacticalPitch2D;
