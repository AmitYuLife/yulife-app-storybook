import { IStreakCopy } from "../copy";
import { Props } from "../streaks.types";
import { getStreakCompleted } from "./get-streak-completed";

export const getHeading = ({
  isDoneToday,
  streakMax,
  streakAwardId,
  streakCompleted,
  copy,
}: Pick<Props, "streakAwardId" | "isDoneToday" | "streakMax" | "streakCompleted"> & { copy: IStreakCopy }) => {
  if (getStreakCompleted({ streakAwardId, streakCompleted, streakMax }) === streakMax) {
    return copy.headingCompleted;
  }

  if (isDoneToday) {
    return copy.headingCompletedTodayStreak;
  }

  return copy.headingStartStreakDay;
};
