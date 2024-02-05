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
  subheadingNextStreak: string;
  headingCompleted: string;
  headingCompletedTodayStreak: string[];
  headingStartStreakDay: string[];
}

export const streakCopy = (streakMax: string, reward: string, type: string): IStreakCopy => ({
  ctaLabelDone: t("labels.cta.done"),
  ctaLabelCollect: t("screens.streak.cta_label_collect", { reward, type }),
  ctaLabelTakeChallenge: t("screens.streak.cta_label_take_challenge"),
  subheadingCollected: t("screens.streak.subheading_collected"),
  subheadingCompleted: t("screens.streak.subheading_completed"),
  subheadingTodayStreakDone: [
    t("screens.streak.subheading_today_streak_done.day1", { reward }),
    t("screens.streak.subheading_today_streak_done.day2", { reward }),
    t("screens.streak.subheading_today_streak_done.day3", { reward }),
    t("screens.streak.subheading_today_streak_done.day4", { reward }),
    t("screens.streak.subheading_today_streak_done.day5", { reward }),
  ],
  subheadingInstructions: t("screens.streak.subheading_instructions", { reward, streakMax }),
  subheadingInstructionsToday: t("screens.streak.subheading_instructions_today", { reward }),
  subheadingInstructionsFirstDay: t("screens.streak.subheading_instructions_first_day", { reward, streakMax }),
  headingCompleted: t("screens.streak.heading_completed"),
  headingCompletedTodayStreak: [
    t("screens.streak.heading_completed_today_streak.day1"),
    t("screens.streak.heading_completed_today_streak.day2"),
    t("screens.streak.heading_completed_today_streak.day3"),
    t("screens.streak.heading_completed_today_streak.day4"),
    t("screens.streak.heading_completed_today_streak.day5"),
  ],
  headingStartStreakDay: [
    t("screens.streak.heading_start_streak_day.day1"),
    t("screens.streak.heading_start_streak_day.day2"),
    t("screens.streak.heading_start_streak_day.day3"),
    t("screens.streak.heading_start_streak_day.day4"),
    t("screens.streak.heading_start_streak_day.day5"),
  ],
  subheadingNextStreak: t("screens.streak.completion.next_streak"),
});
