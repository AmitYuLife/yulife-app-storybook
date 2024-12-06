export interface IWrappedStats {
  totalChallenges: number;
  challengeRatings: { rating: number; count: number }[];
  challengeCounts: { label: string; count: number }[];
}

export interface IWrappedStageProps {
  nextStage: () => void;
  stats: IWrappedStats;
}
