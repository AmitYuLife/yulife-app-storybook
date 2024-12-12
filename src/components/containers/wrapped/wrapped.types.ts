export interface IWrappedStats {
  totalSteps: number;
  totalYuCoin: number;
  totalChallenges: number;
  bestYudokuTime: number;
  totalYudokus: number;
  totalYudokuTime: number;
  challengeRatings: { rating: number; count: number }[];
  challengeCounts: { label: string; count: number; icon: { uri?: string } }[];
}

export interface IWrappedStageProps {
  nextStage: () => void;
  stats: IWrappedStats;
}
