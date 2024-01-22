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
}: Pick<Props, "streakCompleted" | "isDoneToday" | "streakMax" | "streakAwardId"> & { copy: IStreakCopy }) => {
  const { subheadingCollected, subheadingCompleted, subheadingTodayStreakDone } = copy;
  if (getStreakCompleted({ streakAwardId, streakCompleted, streakMax }) === streakMax) {
    if (!streakAwardId) {
      return subheadingCollected;
    }

    return subheadingCompleted;
  }

  if (isDoneToday) {
    return subheadingTodayStreakDone;
  }

  const streakNumber = streakMax - streakCompleted;

  return getSubHeadingInstructions(streakCompleted, streakNumber, copy);
};
