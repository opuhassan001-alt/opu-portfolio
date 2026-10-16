import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { getPassColor, filterPasses, pitchToSvg, svgToPitch, PassVectorLayer } from '../../src/components/tactical2d/PassVectorLayer';
import { ThermalHeatmap } from '../../src/components/tactical2d/ThermalHeatmap';
import { GoalmouthPopup } from '../../src/components/tactical2d/GoalmouthPopup';
import { TacticalPitch2D } from '../../src/components/tactical2d/TacticalPitch2D';
import { VERIFIED_PLAYERS } from '../../src/data/players';
import { PassCategory } from '../../src/types/football';

describe('2D Tactical Pass Classifier', () => {
  it('maps categories strictly to the spec color palette', () => {
    expect(getPassColor('normal')).toBe('#38bdf8');
    expect(getPassColor('key')).toBe('#eab308');
    expect(getPassColor('assist')).toBe('#22c55e');
    expect(getPassColor('freekick')).toBe('#ef4444');
    expect(getPassColor('aerial')).toBe('#c084fc');
  });

  it('filters passes based on user toggle mask', () => {
    const passes = VERIFIED_PLAYERS['kdb'].passes;
    const filtered = filterPasses(passes, { normal: false, key: true, assist: true, freekick: true, aerial: true });
    expect(filtered.every(p => p.category !== 'normal')).toBe(true);
    expect(filtered.some(p => p.category === 'freekick')).toBe(true);
  });

  it('returns all passes when mask entries are default/true', () => {
    const passes = VERIFIED_PLAYERS['messi'].passes;
    const filtered = filterPasses(passes, {});
    expect(filtered.length).toBe(passes.length);
  });

  it('filters all passes out if entire mask is set to false', () => {
    const passes = VERIFIED_PLAYERS['messi'].passes;
    const mask: Record<PassCategory, boolean> = {
      normal: false,
      key: false,
      assist: false,
      freekick: false,
      aerial: false,
    };
    const filtered = filterPasses(passes, mask);
    expect(filtered.length).toBe(0);
  });

  it('converts normalized pitch coordinates to SVG coordinates correctly', () => {
    // Top-left corner (-52.5, -34.0) -> (0, 0)
    const topLeft = pitchToSvg({ x: -52.5, y: -34.0 }, 1050, 680);
    expect(topLeft.x).toBeCloseTo(0, 1);
    expect(topLeft.y).toBeCloseTo(0, 1);

    // Bottom-right corner (52.5, 34.0) -> (1050, 680)
    const bottomRight = pitchToSvg({ x: 52.5, y: 34.0 }, 1050, 680);
    expect(bottomRight.x).toBeCloseTo(1050, 1);
    expect(bottomRight.y).toBeCloseTo(680, 1);

    // Center spot (0, 0) -> (525, 340)
    const center = pitchToSvg({ x: 0, y: 0 }, 1050, 680);
    expect(center.x).toBeCloseTo(525, 1);
    expect(center.y).toBeCloseTo(340, 1);

    // Round-trip conversion
    const backToPitch = svgToPitch(525, 340, 1050, 680);
    expect(backToPitch.x).toBeCloseTo(0, 1);
    expect(backToPitch.y).toBeCloseTo(0, 1);
  });
});

describe('PassVectorLayer Component', () => {
  it('renders pass vectors and triggers onSelectPass when vector is clicked', () => {
    const passes = VERIFIED_PLAYERS['messi'].passes;
    const onSelect = vi.fn();
    const { container } = render(
      React.createElement(
        'svg',
        { viewBox: '0 0 1050 680' },
        React.createElement(PassVectorLayer, { passes, onSelectPass: onSelect })
      )
    );

    const passVectors = container.querySelectorAll('[data-testid^="pass-vector-"]');
    expect(passVectors.length).toBe(passes.length);

    // Click the first pass vector
    fireEvent.click(passVectors[0]);
    expect(onSelect).toHaveBeenCalledWith(passes[0]);
  });

  it('supports keyboard selection with Enter and Space keys', () => {
    const passes = VERIFIED_PLAYERS['messi'].passes;
    const onSelect = vi.fn();
    const { container } = render(
      React.createElement(
        'svg',
        { viewBox: '0 0 1050 680' },
        React.createElement(PassVectorLayer, { passes, onSelectPass: onSelect })
      )
    );

    const passVector = container.querySelector(`[data-testid="pass-vector-${passes[0].id}"]`)!;
    fireEvent.keyDown(passVector, { key: 'Enter' });
    expect(onSelect).toHaveBeenCalledTimes(1);

    fireEvent.keyDown(passVector, { key: ' ' });
    expect(onSelect).toHaveBeenCalledTimes(2);
  });

  it('hides passes when masked out by category mask', () => {
    const passes = VERIFIED_PLAYERS['messi'].passes;
    const { container } = render(
      React.createElement(
        'svg',
        { viewBox: '0 0 1050 680' },
        React.createElement(PassVectorLayer, {
          passes,
          categoryMask: { normal: false, key: true, assist: true, freekick: true, aerial: true },
        })
      )
    );

    const normalVectors = container.querySelectorAll('[data-category="normal"]');
    expect(normalVectors.length).toBe(0);
  });
});

describe('ThermalHeatmap Component', () => {
  it('renders dominance zone and heat discs when visible', () => {
    const messi = VERIFIED_PLAYERS['messi'];
    const { container } = render(
      React.createElement(
        'svg',
        { viewBox: '0 0 1050 680' },
        React.createElement(ThermalHeatmap, { player: messi, passes: messi.passes, visible: true })
      )
    );

    const heatmapGroup = container.querySelector('[data-testid="thermal-heatmap"]');
    expect(heatmapGroup).not.toBeNull();
    const discs = container.querySelectorAll('[data-testid="thermal-disc"]');
    expect(discs.length).toBeGreaterThan(0);
  });

  it('renders null when visible is false', () => {
    const messi = VERIFIED_PLAYERS['messi'];
    const { container } = render(
      React.createElement(
        'svg',
        { viewBox: '0 0 1050 680' },
        React.createElement(ThermalHeatmap, { player: messi, visible: false })
      )
    );
    expect(container.querySelector('[data-testid="thermal-heatmap"]')).toBeNull();
  });

  it('handles player without dominance zone gracefully', () => {
    const { container } = render(
      React.createElement(
        'svg',
        { viewBox: '0 0 1050 680' },
        React.createElement(ThermalHeatmap, { visible: true, passes: [] })
      )
    );
    expect(container.querySelector('[data-testid="thermal-heatmap"]')).not.toBeNull();
  });
});

describe('GoalmouthPopup Component', () => {
  it('renders 3x3 9-quadrant goalmouth target analysis with telemetry', () => {
    const messiFk = VERIFIED_PLAYERS['messi'].passes.find(p => p.category === 'freekick')!;
    const onClose = vi.fn();

    render(React.createElement(GoalmouthPopup, { pass: messiFk, isOpen: true, onClose }));

    // Check dialog container
    expect(screen.getByTestId('goalmouth-popup')).toBeDefined();

    // Check 9 quadrants
    for (let q = 1; q <= 9; q++) {
      expect(screen.getByTestId(`quadrant-${q}`)).toBeDefined();
    }

    // Quadrant 1 should be active for Messi's freekick
    const q1 = screen.getByTestId('quadrant-1');
    expect(q1.getAttribute('data-active')).toBe('true');

    // Telemetry stats
    expect(screen.getByTestId('velocity-stat').textContent).toContain('102.4');
    expect(screen.getByTestId('distance-stat').textContent).toContain('26.6');
    expect(screen.getByTestId('wall-clearance-stat').textContent).toContain('2.85');
    expect(screen.getByTestId('xgot-stat').textContent).toContain('0.94');

    // Close button
    fireEvent.click(screen.getByTestId('close-popup'));
    expect(onClose).toHaveBeenCalled();
  });

  it('closes on Escape key press and backdrop click', () => {
    const kdbFk = VERIFIED_PLAYERS['kdb'].passes.find(p => p.category === 'freekick')!;
    const onClose = vi.fn();

    const { rerender } = render(React.createElement(GoalmouthPopup, { pass: kdbFk, isOpen: true, onClose }));

    // Escape key press
    fireEvent.keyDown(window, { key: 'Escape' });
    expect(onClose).toHaveBeenCalledTimes(1);

    // Backdrop click
    const backdrop = screen.getByTestId('goalmouth-popup');
    fireEvent.click(backdrop);
    expect(onClose).toHaveBeenCalledTimes(2);

    // When isOpen is false, nothing is rendered
    rerender(React.createElement(GoalmouthPopup, { pass: kdbFk, isOpen: false, onClose }));
    expect(screen.queryByTestId('goalmouth-popup')).toBeNull();
  });

  it('correctly maps Quadrant 3 for KDB dipping freekick', () => {
    const kdbFk = VERIFIED_PLAYERS['kdb'].passes.find(p => p.category === 'freekick')!;
    render(React.createElement(GoalmouthPopup, { pass: kdbFk, isOpen: true, onClose: vi.fn() }));

    const q3 = screen.getByTestId('quadrant-3');
    expect(q3.getAttribute('data-active')).toBe('true');
    expect(screen.getByTestId('quadrant-1').getAttribute('data-active')).toBe('false');
  });
});

describe('TacticalPitch2D Component', () => {
  it('renders full regulation 105m x 68m pitch markings, category toggles, and vectors', () => {
    const kdb = VERIFIED_PLAYERS['kdb'];
    render(React.createElement(TacticalPitch2D, { player: kdb }));

    // Pitch SVG exists
    expect(screen.getByTestId('tactical-pitch-svg')).toBeDefined();
    // Pitch lines group exists
    expect(screen.getByTestId('pitch-lines')).toBeDefined();
    // Turf stripes exist
    expect(screen.getByTestId('turf-stripes')).toBeDefined();

    // Category filter toggles exist
    expect(screen.getByTestId('filter-toggle-normal')).toBeDefined();
    expect(screen.getByTestId('filter-toggle-freekick')).toBeDefined();
    expect(screen.getByTestId('filter-toggle-assist')).toBeDefined();
    expect(screen.getByTestId('filter-toggle-key')).toBeDefined();
    expect(screen.getByTestId('filter-toggle-aerial')).toBeDefined();

    // Toggling off 'normal' passes hides normal vectors
    const normalToggle = screen.getByTestId('filter-toggle-normal');
    fireEvent.click(normalToggle);

    // Vector layer should now filter out normal passes
    const normalVectors = document.querySelectorAll('[data-category="normal"]');
    expect(normalVectors.length).toBe(0);
  });

  it('allows opening goalmouth target popup when freekick pass is selected', () => {
    const messi = VERIFIED_PLAYERS['messi'];
    render(React.createElement(TacticalPitch2D, { player: messi }));

    // Click on Messi freekick vector
    const fkVector = screen.getByTestId('pass-vector-m-fk-1');
    fireEvent.click(fkVector);

    // Trigger button to open goalmouth popup
    const triggerBtn = screen.getByTestId('open-goalmouth-popup');
    fireEvent.click(triggerBtn);

    // Goalmouth popup should now be visible
    expect(screen.getByTestId('goalmouth-popup')).toBeDefined();
  });

  it('supports toggling thermal heatmap visibility via button', () => {
    const messi = VERIFIED_PLAYERS['messi'];
    render(React.createElement(TacticalPitch2D, { player: messi }));

    const heatmapToggle = screen.getByTestId('toggle-heatmap');
    expect(heatmapToggle.textContent).toContain('Heatmap: ON');

    // Toggle off
    fireEvent.click(heatmapToggle);
    expect(heatmapToggle.textContent).toContain('Heatmap: OFF');
    expect(document.querySelector('[data-testid="thermal-heatmap"]')).toBeNull();

    // Toggle on again
    fireEvent.click(heatmapToggle);
    expect(heatmapToggle.textContent).toContain('Heatmap: ON');
    expect(document.querySelector('[data-testid="thermal-heatmap"]')).not.toBeNull();
  });

  it('gracefully handles player with 0 freekick passes like Mbappé', () => {
    const mbappe = VERIFIED_PLAYERS['mbappe'];
    expect(mbappe.careerFreeKickGoals).toBe(0);

    const { container } = render(React.createElement(TacticalPitch2D, { player: mbappe }));
    expect(screen.getByTestId('tactical-pitch-svg')).toBeDefined();

    // Free kick toggle displays count 0
    const fkToggle = screen.getByTestId('filter-toggle-freekick');
    expect(fkToggle.textContent).toContain('(0)');

    // No free kick vectors exist
    const fkVectors = container.querySelectorAll('[data-category="freekick"]');
    expect(fkVectors.length).toBe(0);
  });
});
