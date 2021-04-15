export interface IStreakCopy {
  ctaLabelDone: string;
  ctaLabelCollect: string;
  ctaLabelTakeChallenge: string;
  subheadingCollected: string;
  subheadingCompleted: string;
  subheadingTodayStreakDone: string[];
  subheadingInstructions: string;
  headingCompleted: string;
  headingCompletedTodayStreak: string[];
  headingStartStreakDay: string[];
}

export const streakCopy = {
  ctaLabelDone: "Done",
  ctaLabelCollect: "Collect ${reward} ${type}",
  ctaLabelTakeChallenge: "Take a challenge",
  subheadingCollected: "Well done! The reward has been collected.",
  subheadingCompleted: "You did it!",
  subheadingTodayStreakDone: [
    "Great start! Keep it up to earn ${reward} YuCoin.",
    "You’re on your way to a bonus ${reward} YuCoin.",
    "Just two more days and you’ll earn ${reward} YuCoin.",
    "You’re just one day away from ${reward} YuCoin.",
    "${reward} YuCoin.",
  ],
  subheadingInstructions: "Complete challenges ${streakMax} more days in a row to earn a bonus ${reward} YuCoin",
  subheadingInstructionsToday: "Complete a challenge today to earn a bonus ${reward} YuCoin",
  headingCompleted: "You smashed that Streak!",
  headingCompletedTodayStreak: [
    "First day done!",
    "Two days down!",
    "You’re over the hump!",
    "Home stretch!",
    "You smashed that Streak!",
  ],
  headingStartStreakDay: [
    "Start your Streak",
    "Off to a good start",
    "Keep it going",
    "Keep it up",
    "Close out your Streak",
  ],
};
