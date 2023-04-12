export interface ISudokuPosition {
  row: number;
  column: number;
}

export interface ISodukuHistory extends ISudokuPosition {
  number: number;
}

export enum SudokuDifficulty {
  EASY = "EASY",
  HARD = "HARD",
  MEDIUM = "MEDIUM",
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
  difficulty: SudokuDifficulty;
}

export interface ISudokuStats {
  personalBest: number | null;
  leaderboardId: string | null;
}

export interface ISudokuLeaderboardItem {
  name: string;
  adjustedTime: number;
  userId: string;
  position: number;
  leaderboardId?: string;
  avatarRemoteFiles: { svgFull: string | null; pngFull: string | null; pngMini: string | null } | null;
}
