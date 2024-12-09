import { IWrappedStats } from "./wrapped.types";

export const FAKE_STATS: IWrappedStats = {
  totalChallenges: 32,
  totalSteps: 420690,
  totalYuCoin: 69696,
  bestYudokuTime: 69,
  totalYudokus: 10,
  totalYudokuTime: 420,
  challengeRatings: [
    {
      rating: 1,
      count: 12,
    },
    {
      rating: 2,
      count: 4,
    },
    {
      rating: 3,
      count: 6,
    },
  ],
  challengeCounts: [
    {
      label: "Short Stroll",
      count: 12,
    },
    {
      label: "Brisk Walk",
      count: 4,
    },
    {
      label: "Long Walk",
      count: 6,
    },
    {
      label: "Yudoku",
      count: 56,
    },
    {
      label: "Meditation",
      count: 32,
    },
    {
      label: "Workout",
      count: 42,
    },
  ],
};
