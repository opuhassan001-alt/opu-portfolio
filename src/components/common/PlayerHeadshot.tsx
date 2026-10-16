import React, { useState, useEffect, useMemo } from 'react';
import { Player } from '../../types/football';
import { getHeadshotUrlLadder } from '../../utils/image-pipeline';

export interface PlayerHeadshotProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  player: Player;
  alt?: string;
  className?: string;
}

/**
 * PlayerHeadshot
 *
 * Resilient multi-CDN player headshot component.
 * Automatically progresses through a fallback ladder (local asset -> primary API-Sports CDN ->
 * secondary mirror -> SVG initials avatar) on any image loading error.
 * Guarantees zero broken images across all leagues and networks.
 */
export const PlayerHeadshot: React.FC<PlayerHeadshotProps> = ({
  player,
  alt,
  className = 'w-12 h-12 rounded-full object-cover bg-slate-900/50 border border-slate-800/80 shadow-inner',
  ...rest
}) => {
  const ladder = useMemo(() => getHeadshotUrlLadder(player), [player]);
  const [sourceIndex, setSourceIndex] = useState(0);

  // Reset ladder progression if the player changes
  useEffect(() => {
    setSourceIndex(0);
  }, [player.id]);

  const currentSrc = ladder[sourceIndex] || ladder[ladder.length - 1];

  const handleError = () => {
    if (sourceIndex < ladder.length - 1) {
      setSourceIndex(prev => prev + 1);
    }
  };

  return (
    <img
      src={currentSrc}
      alt={alt || player.name}
      onError={handleError}
      loading="lazy"
      decoding="async"
      className={className}
      {...rest}
    />
  );
};

export default PlayerHeadshot;
