import { t } from "@locale";

export interface IStreakCopy {
  ctaLabelDone: string;
  ctaLabelCollect: string;
  ctaLabelTakeChallenge: string;
  subheadingCollected: string;
  subheadingCompleted: string;
  subheadingInstructionsFirstDay: string;
  subheadingInstructionsToday: string;
  subheadingTodayStreakDone: string[];
  subheadingInstructions: string;
  headingCompleted: string;
  headingCompletedTodayStreak: string[];
  headingStartStreakDay: string[];
}

export const streakCopy = (streakMax: string, reward: string, type: string): IStreakCopy => ({
  ctaLabelDone: t("screens.streak.ctaLabelDone"),
  ctaLabelCollect: t("screens.streak.ctaLabelCollect", { reward, type }),
  ctaLabelTakeChallenge: t("screens.streak.ctaLabelTakeChallenge"),
  subheadingCollected: t("screens.streak.subheadingCollected"),
  subheadingCompleted: t("screens.streak.subheadingCompleted"),
  subheadingTodayStreakDone: [
    t("screens.streak.subheadingTodayStreakDone.day1", { reward }),
    t("screens.streak.subheadingTodayStreakDone.day2", { reward }),
    t("screens.streak.subheadingTodayStreakDone.day3", { reward }),
    t("screens.streak.subheadingTodayStreakDone.day4", { reward }),
    t("screens.streak.subheadingTodayStreakDone.day5", { reward }),
  ],
  subheadingInstructions: t("screens.streak.subheadingInstructions", { reward, streakMax }),
  subheadingInstructionsToday: t("screens.streak.subheadingInstructionsToday", { reward }),
  subheadingInstructionsFirstDay: t("screens.streak.subheadingInstructionsFirstDay", { reward, streakMax }),
  headingCompleted: t("screens.streak.headingCompleted"),
  headingCompletedTodayStreak: [
    t("screens.streak.headingCompletedTodayStreak.day1"),
    t("screens.streak.headingCompletedTodayStreak.day2"),
    t("screens.streak.headingCompletedTodayStreak.day3"),
    t("screens.streak.headingCompletedTodayStreak.day4"),
    t("screens.streak.headingCompletedTodayStreak.day5"),
  ],
  headingStartStreakDay: [
    t("screens.streak.headingStartStreakDay.day1"),
    t("screens.streak.headingStartStreakDay.day2"),
    t("screens.streak.headingStartStreakDay.day3"),
    t("screens.streak.headingStartStreakDay.day4"),
    t("screens.streak.headingStartStreakDay.day5"),
  ],
});
