import { IStreakCopy } from "../copy";

export const getSubHeadingInstructions = (streakCompleted: number, streakNumber: number, copy: IStreakCopy) => {
  if (streakCompleted === 0) {
    return copy.subheadingInstructionsFirstDay;
  }

  if (streakNumber === 1) {
    return copy.subheadingInstructionsToday;
  }

  return copy.subheadingInstructions;
};
