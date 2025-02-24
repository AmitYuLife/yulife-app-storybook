export interface ISudokuPosition {
  row: number;
  column: number;
}

export interface ISodukuHistory extends ISudokuPosition {
  number: number;
}

export enum SudokuDifficulty {
  Easy = "EASY",
  Hard = "HARD",
  Medium = "MEDIUM",
}

export interface ISudokuConfig {
  PENALTY_HINT: number;
  MISTAKES_BEFORE_PENALTY: number;
  MISTAKE_PENALTY_TIME: number;
  HINT_COOLDOWN: number;
}

export interface ISudokuBoard {
  difficulty: SudokuDifficulty;
  solution: (number[] | null)[];
  puzzle: (number[] | null)[];
}

export interface ISudokuResults {
  mistakes: number;
  hints: number;
  adjustedTime: number;
  guesses?: number[];
  difficulty: SudokuDifficulty;
}

export interface ISudokuStats {
  personalBest?: number | null;
  leaderboardId?: string | null;
}

export interface ISudokuLeaderboardItem {
  id: string;
  userId: string;
  score: string;
  name: string;
  position: number;
  isTarget: boolean;
  avatar: {
    id: string;
    uri?: string;
  };
}
