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
      label: "SHORT_STROLL_001",
      count: 12,
      icon: { uri: "example.com/test.png" },
    },
    {
      label: "BRISK_WALK_001",
      count: 4,
      icon: { uri: "example.com/test.png" },
    },
    {
      label: "LONG_WALK_001",
      count: 6,
      icon: { uri: "example.com/test.png" },
    },
    {
      label: "YUDOKU_001",
      count: 56,
      icon: { uri: "example.com/test.png" },
    },
    {
      label: "MEDITATION_001",
      count: 32,
      icon: { uri: "example.com/test.png" },
    },
    {
      label: "WORKOUT_007",
      count: 42,
      icon: { uri: "example.com/test.png" },
    },
  ],
};

export const WRAPPED_BOTTOM_OFFSET = 20;
