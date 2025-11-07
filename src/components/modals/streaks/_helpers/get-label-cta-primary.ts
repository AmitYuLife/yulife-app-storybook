import { IStreakCopy } from "../copy";
import { Props } from "../streaks.types";
import { getStreakCompleted } from "./get-streak-completed";

export const getLabelCtaPrimary = ({
  streakMax,
  isDoneToday,
  streakAwardId,
  streakCompleted,
  copy,
}: Pick<Props, "isDoneToday" | "streakCompleted" | "streakMax"> & { copy: IStreakCopy; streakAwardId: string }) => {
  const { ctaLabelDone, ctaLabelCollect, ctaLabelTakeChallenge } = copy;
  if (getStreakCompleted({ streakAwardId, streakCompleted, streakMax }) === streakMax) {
    if (!streakAwardId) {
      return ctaLabelDone;
    }

    return ctaLabelCollect;
  }

  if (isDoneToday) {
    return ctaLabelDone;
  }

  return ctaLabelTakeChallenge;
};
