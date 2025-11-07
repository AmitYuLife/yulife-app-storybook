import { Props } from "../streaks.types";

export const getStreakCompleted = ({
  streakAwardId,
  streakCompleted,
  streakMax,
}: Pick<Props, "streakCompleted" | "streakMax"> & { streakAwardId?: string }) => {
  // If there is an award, it must be for a full streak, so display
  // the full streak even if it is not full right now
  return streakAwardId ? streakMax : streakCompleted;
};
