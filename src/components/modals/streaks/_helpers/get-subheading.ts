import { IStreakCopy } from "../copy";
import { Props } from "../streaks.types";
import { getStreakCompleted } from "./get-streak-completed";
import { getSubHeadingInstructions } from "./get-subheading-instructions";

export const getSubHeading = ({
  isDoneToday,
  streakMax,
  streakAwardId,
  streakCompleted,
  copy,
  timeRemaining,
}: Pick<Props, "streakCompleted" | "isDoneToday" | "streakMax"> & {
  streakAwardId?: string;
  copy: IStreakCopy;
  timeRemaining?: string;
}) => {
  const { subheadingCollected, subheadingCompleted, subheadingTodayStreakDone } = copy;

  if (timeRemaining) {
    return copy.subheadingNextStreak;
  }

  if (getStreakCompleted({ streakAwardId, streakCompleted, streakMax }) === streakMax) {
    if (!streakAwardId) {
      return subheadingCollected;
    }

    return subheadingCompleted;
  }

  if (isDoneToday) {
    return subheadingTodayStreakDone[Math.max(0, streakCompleted - 1)];
  }

  const streakNumber = streakMax - streakCompleted;

  return getSubHeadingInstructions(Math.max(0, streakCompleted - 1), streakNumber, copy);
};
