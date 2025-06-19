export function calculateStreak(currentStreak: number, maxStreak: number = 4): number {
  if (!currentStreak) {
    return 0;
  }

  return currentStreak % maxStreak;
}
