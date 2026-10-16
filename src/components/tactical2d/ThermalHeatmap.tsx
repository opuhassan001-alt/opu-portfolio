import React from 'react';
import { Player, PassEvent } from '../../types/football';
import { pitchToSvg } from './PassVectorLayer';

export interface ThermalHeatmapProps {
  player?: Player | null;
  passes?: PassEvent[];
  visible?: boolean;
  opacity?: number;
  svgWidth?: number;
  svgHeight?: number;
}

/**
 * Approximate dominance zone coordinates in normalized pitch space:
 * x in [-52.5, 52.5], y in [-34.0, 34.0]
 */
function getDominanceZoneCenter(zoneName?: string): { x: number; y: number; rx: number; ry: number } {
  const norm = (zoneName || '').toLowerCase();
  if (norm.includes('left wing')) {
    return { x: 30.0, y: -22.0, rx: 18.0, ry: 10.0 };
  }
  if (norm.includes('right wing')) {
    return { x: 30.0, y: 22.0, rx: 18.0, ry: 10.0 };
  }
  if (norm.includes('right half-space')) {
    return { x: 28.0, y: 14.0, rx: 16.0, ry: 11.0 };
  }
  if (norm.includes('left half-space')) {
    return { x: 28.0, y: -14.0, rx: 16.0, ry: 11.0 };
  }
  if (norm.includes('box-to-box')) {
    return { x: 12.0, y: 0.0, rx: 25.0, ry: 14.0 };
  }
  return { x: 20.0, y: 0.0, rx: 20.0, ry: 12.0 };
}

export const ThermalHeatmap: React.FC<ThermalHeatmapProps> = ({
  player,
  passes,
  visible = true,
  opacity = 0.65,
  svgWidth = 1050,
  svgHeight = 680,
}) => {
  if (!visible) return null;

  const activePasses = passes || player?.passes || [];
  const zoneInfo = getDominanceZoneCenter(player?.dominanceZone);
  const zoneSvgCenter = pitchToSvg({ x: zoneInfo.x, y: zoneInfo.y }, svgWidth, svgHeight);
  const zoneRxSvg = (zoneInfo.rx / 105) * svgWidth;
  const zoneRySvg = (zoneInfo.ry / 68) * svgHeight;

  return (
    <g className="thermal-heatmap-layer" data-testid="thermal-heatmap" pointerEvents="none">
      <defs>
        {/* Multi-stop thermal disc gradient: Red -> Amber -> Emerald -> Cyan -> Transparent */}
        <radialGradient id="thermal-disc-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.85" />
          <stop offset="35%" stopColor="#f59e0b" stopOpacity="0.6" />
          <stop offset="65%" stopColor="#10b981" stopOpacity="0.3" />
          <stop offset="90%" stopColor="#38bdf8" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </radialGradient>

        {/* Dominance territory radial halo */}
        <radialGradient id="dominance-halo-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#eab308" stopOpacity="0.45" />
          <stop offset="45%" stopColor="#06b6d4" stopOpacity="0.25" />
          <stop offset="85%" stopColor="#3b82f6" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>

        {/* Gaussian blur filter to smooth discrete heat discs into a continuous thermal map */}
        <filter id="thermal-blur-filter" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
      </defs>

      <g filter="url(#thermal-blur-filter)" opacity={opacity}>
        {/* Dominance Zone Primary Elliptical Territory */}
        <ellipse
          data-testid="dominance-zone-disc"
          cx={zoneSvgCenter.x}
          cy={zoneSvgCenter.y}
          rx={zoneRxSvg}
          ry={zoneRySvg}
          fill="url(#dominance-halo-grad)"
        />

        {/* Action heat discs centered at every pass touch-point */}
        {activePasses.map((pass, index) => {
          const startPt = pitchToSvg(pass.start, svgWidth, svgHeight);
          // Disc radius varies slightly with pass importance / category
          const radius = pass.category === 'freekick' || pass.category === 'assist' ? 55 : 42;
          return (
            <circle
              key={`heat-${pass.id || index}`}
              data-testid="thermal-disc"
              cx={startPt.x}
              cy={startPt.y}
              r={radius}
              fill="url(#thermal-disc-grad)"
            />
          );
        })}
      </g>

      {/* Dominance zone subtle overlay boundary and label */}
      {player?.dominanceZone && (
        <g opacity={0.75}>
          <ellipse
            cx={zoneSvgCenter.x}
            cy={zoneSvgCenter.y}
            rx={zoneRxSvg * 0.9}
            ry={zoneRySvg * 0.9}
            fill="none"
            stroke="#eab308"
            strokeWidth={1}
            strokeDasharray="4 4"
            opacity={0.4}
          />
          <text
            x={zoneSvgCenter.x}
            y={zoneSvgCenter.y - zoneRySvg * 0.95}
            fill="#eab308"
            fontSize="10"
            fontFamily="monospace"
            textAnchor="middle"
            letterSpacing="1"
            opacity={0.8}
          >
            ZONE: {player.dominanceZone.toUpperCase()}
          </text>
        </g>
      )}
    </g>
  );
};
