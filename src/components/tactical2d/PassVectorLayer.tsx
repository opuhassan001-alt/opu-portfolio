import React from 'react';
import { PassCategory, PassEvent, Coordinate2D, PASS_CATEGORY_COLORS } from '../../types/football';

/**
 * Maps a pass category to its canonical color palette representation:
 * - normal: #38bdf8 (Cyan)
 * - key: #eab308 (Gold)
 * - assist: #22c55e (Emerald)
 * - freekick: #ef4444 (Crimson)
 * - aerial: #c084fc (Purple)
 */
export function getPassColor(category: PassCategory): string {
  return PASS_CATEGORY_COLORS[category] || '#38bdf8';
}

/**
 * Filters an array of PassEvents according to a category boolean mask.
 */
export function filterPasses(
  passes: PassEvent[],
  mask: Partial<Record<PassCategory, boolean>>
): PassEvent[] {
  return passes.filter(pass => mask[pass.category] !== false);
}

/**
 * Converts pitch coordinates (x in [-pitchLength/2, pitchLength/2], y in [-pitchWidth/2, pitchWidth/2])
 * to standard SVG canvas coordinates (0 to svgWidth, 0 to svgHeight).
 */
export function pitchToSvg(
  coord: Coordinate2D,
  svgWidth = 1050,
  svgHeight = 680,
  pitchLength = 105,
  pitchWidth = 68
): { x: number; y: number } {
  const halfL = pitchLength / 2;
  const halfW = pitchWidth / 2;
  const x = ((coord.x + halfL) / pitchLength) * svgWidth;
  const y = ((coord.y + halfW) / pitchWidth) * svgHeight;
  return { x, y };
}

/**
 * Converts SVG canvas coordinates back into pitch coordinates.
 */
export function svgToPitch(
  x: number,
  y: number,
  svgWidth = 1050,
  svgHeight = 680,
  pitchLength = 105,
  pitchWidth = 68
): Coordinate2D {
  const halfL = pitchLength / 2;
  const halfW = pitchWidth / 2;
  const pitchX = (x / svgWidth) * pitchLength - halfL;
  const pitchY = (y / svgHeight) * pitchWidth - halfW;
  return { x: pitchX, y: pitchY };
}

export interface PassVectorLayerProps {
  passes: PassEvent[];
  selectedPassId?: string | null;
  onSelectPass?: (pass: PassEvent) => void;
  categoryMask?: Partial<Record<PassCategory, boolean>>;
  svgWidth?: number;
  svgHeight?: number;
}

export const PassVectorLayer: React.FC<PassVectorLayerProps> = ({
  passes,
  selectedPassId,
  onSelectPass,
  categoryMask = {},
  svgWidth = 1050,
  svgHeight = 680,
}) => {
  const filtered = filterPasses(passes, categoryMask);
  const categories: PassCategory[] = ['normal', 'key', 'assist', 'freekick', 'aerial'];

  return (
    <g className="pass-vector-layer" data-testid="pass-vectors-container">
      <defs>
        {categories.map(cat => (
          <marker
            key={`marker-${cat}`}
            id={`arrow-${cat}`}
            viewBox="0 0 10 10"
            refX="7"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill={getPassColor(cat)} />
          </marker>
        ))}
        <marker
          id="arrow-selected"
          viewBox="0 0 10 10"
          refX="7"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#ffffff" />
        </marker>

        {/* Glow filter for active/selected vectors */}
        <filter id="vector-selected-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {filtered.map(pass => {
        const start = pitchToSvg(pass.start, svgWidth, svgHeight);
        const end = pitchToSvg(pass.end, svgWidth, svgHeight);
        const color = getPassColor(pass.category);
        const isSelected = selectedPassId === pass.id;

        return (
          <g
            key={pass.id}
            data-testid={`pass-vector-${pass.id}`}
            data-category={pass.category}
            className="cursor-pointer transition-opacity duration-150 hover:opacity-100"
            style={{ opacity: selectedPassId && !isSelected ? 0.35 : 1 }}
            onClick={() => onSelectPass?.(pass)}
            role="button"
            tabIndex={0}
            aria-label={`${pass.category} pass at ${pass.minute}'${pass.second}": ${pass.distanceM}m`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectPass?.(pass);
              }
            }}
          >
            {/* Wider transparent hit-stroke for effortless touch & mouse clicking */}
            <line
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke="transparent"
              strokeWidth={20}
              strokeLinecap="round"
            />

            {/* Selected glow halo */}
            {isSelected && (
              <line
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke={color}
                strokeWidth={7}
                strokeLinecap="round"
                opacity={0.4}
                filter="url(#vector-selected-glow)"
              />
            )}

            {/* Primary directional pass vector */}
            <line
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke={isSelected ? '#ffffff' : color}
              strokeWidth={isSelected ? 3.5 : 2.5}
              strokeDasharray={pass.category === 'aerial' ? '6 3' : undefined}
              strokeLinecap="round"
              markerEnd={isSelected ? 'url(#arrow-selected)' : `url(#arrow-${pass.category})`}
            />

            {/* Start Origin Dot */}
            <circle
              cx={start.x}
              cy={start.y}
              r={isSelected ? 6 : 4}
              fill={color}
              stroke="#0f172a"
              strokeWidth={1.5}
            />

            {/* Pulsing selection indicator on origin */}
            {isSelected && (
              <circle
                cx={start.x}
                cy={start.y}
                r={9}
                fill="none"
                stroke="#ffffff"
                strokeWidth={1.5}
                opacity={0.8}
              />
            )}

            {/* Destination Landing Dot */}
            <circle
              cx={end.x}
              cy={end.y}
              r={isSelected ? 4 : 2.5}
              fill={isSelected ? '#ffffff' : color}
              opacity={0.9}
            />
          </g>
        );
      })}
    </g>
  );
};
