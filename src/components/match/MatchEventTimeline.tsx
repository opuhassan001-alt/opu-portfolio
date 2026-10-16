import React, { useState, useMemo } from 'react';
import { MatchAction, PASS_CATEGORY_COLORS } from '../../types/football';

export interface MatchEventTimelineProps {
  events: MatchAction[];
  homeTeamId: string;
  awayTeamId: string;
  homeTeamName: string;
  awayTeamName: string;
  selectedActionId?: string;
  onSelectAction: (action: MatchAction) => void;
  className?: string;
}

export const MatchEventTimeline: React.FC<MatchEventTimelineProps> = ({
  events = [],
  homeTeamId,
  awayTeamId,
  homeTeamName,
  awayTeamName,
  selectedActionId,
  onSelectAction,
  className = ''
}) => {
  const [filter, setFilter] = useState<'all' | 'home' | 'away' | 'goals'>('all');

  const filteredEvents = useMemo(() => {
    return events.filter(e => {
      if (filter === 'home') return e.teamId === homeTeamId;
      if (filter === 'away') return e.teamId === awayTeamId;
      if (filter === 'goals') return e.outcome === 'goal';
      return true;
    });
  }, [events, filter, homeTeamId, awayTeamId]);

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
        <span className="text-xs font-mono text-slate-400 mr-1">Filter Events:</span>
        <button
          onClick={() => setFilter('all')}
          className={`px-2.5 py-1 text-xs font-semibold rounded-md transition ${
            filter === 'all'
              ? 'bg-sky-500 text-white shadow-sm'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          All Events ({events.length})
        </button>
        <button
          onClick={() => setFilter('home')}
          className={`px-2.5 py-1 text-xs font-semibold rounded-md transition ${
            filter === 'home'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          {homeTeamName}
        </button>
        <button
          onClick={() => setFilter('away')}
          className={`px-2.5 py-1 text-xs font-semibold rounded-md transition ${
            filter === 'away'
              ? 'bg-amber-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          {awayTeamName}
        </button>
        <button
          onClick={() => setFilter('goals')}
          className={`px-2.5 py-1 text-xs font-semibold rounded-md transition ${
            filter === 'goals'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          ⚽ Goals Only
        </button>
      </div>

      {/* Events List */}
      <div className="flex flex-col gap-2 max-h-[420px] overflow-y-auto pr-1">
        {filteredEvents.map(event => {
          const isSelected = selectedActionId === event.id;
          const isGoal = event.outcome === 'goal';
          const isHome = event.teamId === homeTeamId;
          const catColor = PASS_CATEGORY_COLORS[event.category] || '#38bdf8';

          return (
            <div
              key={event.id}
              onClick={() => onSelectAction(event)}
              className={`flex items-center justify-between p-3 rounded-xl border transition cursor-pointer ${
                isSelected
                  ? 'bg-sky-950/60 border-sky-500 shadow-md ring-1 ring-sky-500/50'
                  : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/60 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-3">
                {/* Minute badge */}
                <span className="w-10 text-center font-mono font-bold text-xs text-sky-400 bg-sky-950/80 px-1.5 py-1 rounded border border-sky-800/40">
                  {event.minute}'
                </span>

                {/* Team Tag */}
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                  isHome ? 'bg-blue-950/80 text-blue-400 border border-blue-800/40' : 'bg-amber-950/80 text-amber-400 border border-amber-800/40'
                }`}>
                  {isHome ? homeTeamName : awayTeamName}
                </span>

                {/* Action Category Badge */}
                <span
                  className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: `${catColor}22`,
                    color: catColor,
                    border: `1px solid ${catColor}55`
                  }}
                >
                  {isGoal ? '⚽ GOAL' : event.actionType.replace('_', ' ')}
                </span>

                {/* Description */}
                <div>
                  <div className="text-xs font-bold text-slate-200">
                    {event.playerName} <span className="text-slate-400 font-normal">#{event.playerNumber}</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    {event.description}
                  </div>
                </div>
              </div>

              {/* Telemetry & 3D Play indicator */}
              <div className="flex items-center gap-3 text-right">
                <div className="hidden sm:flex flex-col text-[11px] font-mono text-slate-400">
                  <span>{event.velocityKmH} km/h</span>
                  <span className="text-emerald-400 font-semibold">{event.distanceM}m</span>
                </div>
                <button
                  className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-sky-500/20 text-sky-300 hover:bg-sky-500 hover:text-white border border-sky-500/40 transition flex items-center gap-1"
                >
                  <span>3D</span>
                  <span>▶</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MatchEventTimeline;
