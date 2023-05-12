/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

import { SudokuDifficulty } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetSudokuBoard
// ====================================================

export interface GetSudokuBoard_getSudokuBoard_boards_config {
  PENALTY_HINT: number;
  MISTAKES_BEFORE_PENALTY: number;
  MISTAKE_PENALTY_TIME: number;
  HINT_COOLDOWN: number;
}

export interface GetSudokuBoard_getSudokuBoard_boards {
  difficulty: SudokuDifficulty;
  solution: (number[] | null)[];
  puzzle: (number[] | null)[];
  config: GetSudokuBoard_getSudokuBoard_boards_config;
}

export interface GetSudokuBoard_getSudokuBoard_stats {
  personalBest: number | null;
  leaderboardId: string | null;
}

export interface GetSudokuBoard_getSudokuBoard_results {
  mistakes: number;
  hints: number;
  leaderboardId: string | null;
  adjustedTime: number;
  difficulty: SudokuDifficulty;
}

export interface GetSudokuBoard_getSudokuBoard {
  boards: GetSudokuBoard_getSudokuBoard_boards[];
  date: string;
  stats: GetSudokuBoard_getSudokuBoard_stats | null;
  results: GetSudokuBoard_getSudokuBoard_results | null;
  leaderboardEligible: boolean;
}

export interface GetSudokuBoard {
  getSudokuBoard: GetSudokuBoard_getSudokuBoard | null;
}
