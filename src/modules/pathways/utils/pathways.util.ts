export const isPathwaysDayCompleted = ({
  reflectedToday,
  currentStreak,
  index,
}: {
  reflectedToday: boolean;
  currentStreak: number;
  index: number;
}) => {
  if (reflectedToday && currentStreak === 0) {
    return true;
  }

  return index < currentStreak;
};
