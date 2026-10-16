import React, { useEffect } from 'react';
import { PassEvent } from '../../types/football';
import { X, Target, Zap, Ruler, Shield, Sparkles } from 'lucide-react';

export interface GoalmouthPopupProps {
  pass: PassEvent | null;
  isOpen: boolean;
  onClose: () => void;
}

const QUADRANT_LABELS: Record<number, { title: string; zone: string }> = {
  1: { title: 'Top-Left', zone: 'Upper 90 Corner' },
  2: { title: 'Top-Center', zone: 'Under Crossbar' },
  3: { title: 'Top-Right', zone: 'Upper 90 Corner' },
  4: { title: 'Mid-Left', zone: 'Left Side Post' },
  5: { title: 'Center', zone: 'Mid Goal Center' },
  6: { title: 'Mid-Right', zone: 'Right Side Post' },
  7: { title: 'Bottom-Left', zone: 'Low Left Corner' },
  8: { title: 'Bottom-Center', zone: 'Low Center' },
  9: { title: 'Bottom-Right', zone: 'Low Right Corner' },
};

export const GoalmouthPopup: React.FC<GoalmouthPopupProps> = ({
  pass,
  isOpen,
  onClose,
}) => {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !pass) return null;

  const targetQuadrant = pass.landingQuadrant;
  const isGoal = pass.category === 'freekick' || (pass.xGOT && pass.xGOT > 0.85);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="goalmouth-popup-title"
      data-testid="goalmouth-popup"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/95 p-6 shadow-2xl text-slate-100">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/30 text-red-400">
              <Target className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 id="goalmouth-popup-title" className="text-lg font-bold text-white tracking-tight">
                  Goalmouth Target Analysis
                </h3>
                <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-semibold text-emerald-400 border border-emerald-500/30 uppercase">
                  {pass.category}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Match Minute {pass.minute}&apos;{pass.second.toString().padStart(2, '0')}&quot; • Precision 3×3 Goal Frame Telemetry
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            data-testid="close-popup"
            aria-label="Close goalmouth popup"
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Description Banner */}
        {pass.description && (
          <div className="mt-4 rounded-xl bg-slate-800/60 p-3 text-xs text-slate-300 border border-slate-700/40">
            <span className="font-semibold text-amber-400">Telemetry Log:</span> {pass.description}
          </div>
        )}

        {/* 3x3 Goalmouth Target Grid */}
        <div className="mt-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
              7.32m × 2.44m Goal Frame Grid (Shooter Perspective)
            </span>
            {targetQuadrant && (
              <span className="text-xs font-medium text-amber-300">
                Target: Quadrant {targetQuadrant} ({QUADRANT_LABELS[targetQuadrant]?.title})
              </span>
            )}
          </div>

          {/* Goal post frame representation */}
          <div className="relative rounded-lg border-4 border-slate-300 bg-slate-950 p-2 shadow-inner">
            {/* Crossbar & Post Accents */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-400 via-white to-slate-400 opacity-70" />
            
            <div className="grid grid-cols-3 gap-2" data-testid="quadrant-grid">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((q) => {
                const isActive = targetQuadrant === q;
                const info = QUADRANT_LABELS[q];

                return (
                  <div
                    key={q}
                    data-testid={`quadrant-${q}`}
                    data-active={isActive ? 'true' : 'false'}
                    className={`relative flex flex-col items-center justify-center p-3 rounded-md transition-all duration-300 min-h-[72px] border ${
                      isActive
                        ? 'border-red-500 bg-red-950/60 text-white shadow-[0_0_15px_rgba(239,68,68,0.4)] ring-2 ring-red-500/50'
                        : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    {isActive ? (
                      <div className="flex flex-col items-center animate-in zoom-in-75 duration-200">
                        <div className="flex items-center gap-1 text-red-400 font-bold text-sm">
                          <Target className="h-4 w-4 animate-spin text-red-400" />
                          <span>Q{q}</span>
                        </div>
                        <span className="text-[10px] uppercase font-mono font-bold text-red-300 tracking-wider mt-0.5">
                          {isGoal ? 'GOAL / TARGET' : 'TARGET'}
                        </span>
                        <span className="text-[9px] text-red-400/80 font-mono">
                          {info.zone}
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center text-center">
                        <span className="text-xs font-mono font-medium text-slate-500">Q{q}</span>
                        <span className="text-[9px] text-slate-500 font-mono mt-0.5">{info.title}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 4 Telemetry Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
          {/* Velocity */}
          <div className="rounded-xl border border-slate-800 bg-slate-800/40 p-3">
            <div className="flex items-center gap-1.5 text-slate-400 text-xs">
              <Zap className="h-3.5 w-3.5 text-amber-400" />
              <span>Velocity</span>
            </div>
            <div data-testid="velocity-stat" className="mt-1 font-mono text-lg font-bold text-white">
              {pass.velocityKmH.toFixed(1)} <span className="text-xs font-normal text-slate-400">km/h</span>
            </div>
          </div>

          {/* Distance */}
          <div className="rounded-xl border border-slate-800 bg-slate-800/40 p-3">
            <div className="flex items-center gap-1.5 text-slate-400 text-xs">
              <Ruler className="h-3.5 w-3.5 text-sky-400" />
              <span>Distance</span>
            </div>
            <div data-testid="distance-stat" className="mt-1 font-mono text-lg font-bold text-white">
              {pass.distanceM.toFixed(1)} <span className="text-xs font-normal text-slate-400">m</span>
            </div>
          </div>

          {/* Wall Clearance */}
          <div className="rounded-xl border border-slate-800 bg-slate-800/40 p-3">
            <div className="flex items-center gap-1.5 text-slate-400 text-xs">
              <Shield className="h-3.5 w-3.5 text-emerald-400" />
              <span>Wall Clearance</span>
            </div>
            <div data-testid="wall-clearance-stat" className="mt-1 font-mono text-lg font-bold text-white">
              {pass.apexHeight.toFixed(2)} <span className="text-xs font-normal text-slate-400">m</span>
            </div>
          </div>

          {/* xGOT */}
          <div className="rounded-xl border border-slate-800 bg-slate-800/40 p-3">
            <div className="flex items-center gap-1.5 text-slate-400 text-xs">
              <Sparkles className="h-3.5 w-3.5 text-purple-400" />
              <span>xGOT</span>
            </div>
            <div data-testid="xgot-stat" className="mt-1 font-mono text-lg font-bold text-white">
              {pass.xGOT !== undefined ? pass.xGOT.toFixed(2) : '0.90'}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-xl bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-semibold text-white transition-colors"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};
