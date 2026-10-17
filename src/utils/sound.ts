/**
 * Sound utility stub — all methods are no-ops.
 * The sound toggle feature is preserved in the UI but silently disabled.
 */
const soundFx = {
  isEnabled: (): boolean => false,
  toggle: (): boolean => false,
  play: (_name: string): void => {},
  playClick: (): void => {},
  playSuccess: (): void => {},
  playError: (): void => {},
};

export { soundFx };
