/** No-op handlers for screen story actions. Safe to pass as any callback prop. */
export const noop = (): void => undefined;

export const logAction =
  (label: string) =>
  (...args: unknown[]): void => {
    console.log(`[Screen story] ${label}`, ...args);
  };
