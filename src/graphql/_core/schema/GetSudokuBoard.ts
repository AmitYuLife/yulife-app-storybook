/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SudokuDifficulty } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetSudokuBoard
// ====================================================

export interface GetSudokuBoard_getSudokuBoard_boards {
  difficulty: SudokuDifficulty;
  solution: (number[] | null)[];
  puzzle: (number[] | null)[];
}

export interface GetSudokuBoard_getSudokuBoard_stats {
  personalBest: number | null;
  leaderboardId: string | null;
}

export interface GetSudokuBoard_getSudokuBoard_results {
  mistakes: number;
  hints: number;
  adjustedTime: number;
  difficulty: SudokuDifficulty;
}

export interface GetSudokuBoard_getSudokuBoard {
  boards: GetSudokuBoard_getSudokuBoard_boards[];
  date: string;
  stats: GetSudokuBoard_getSudokuBoard_stats | null;
  results: GetSudokuBoard_getSudokuBoard_results | null;
}

export interface GetSudokuBoard {
  getSudokuBoard: GetSudokuBoard_getSudokuBoard | null;
}
