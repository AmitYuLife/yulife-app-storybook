import { IStreakCopy } from "../copy";
import { Props } from "../streaks.types";
import { getStreakCompleted } from "./get-streak-completed";

export const getHeading = ({
  isDoneToday,
  streakMax,
  streakAwardId,
  streakCompleted,
  copy,
}: Pick<Props, "isDoneToday" | "streakMax" | "streakCompleted"> & {
  copy: IStreakCopy;
  streakAwardId: string;
}) => {
  const calculatedStreakCompleted = getStreakCompleted({ streakAwardId, streakCompleted, streakMax });
  if (calculatedStreakCompleted >= streakMax) {
    return copy.headingCompleted;
  }

  if (isDoneToday) {
    return copy.headingCompletedTodayStreak[Math.max(0, calculatedStreakCompleted - 1)];
  }

  return copy.headingStartStreakDay[Math.max(0, calculatedStreakCompleted)];
};
