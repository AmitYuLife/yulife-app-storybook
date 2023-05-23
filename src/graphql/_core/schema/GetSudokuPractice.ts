/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

import { SudokuDifficulty } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetSudokuPractice
// ====================================================

export interface GetSudokuPractice_getSudokuPractice_config {
  PENALTY_HINT: number;
  MISTAKES_BEFORE_PENALTY: number;
  MISTAKE_PENALTY_TIME: number;
  HINT_COOLDOWN: number;
}

export interface GetSudokuPractice_getSudokuPractice {
  solution: (number[] | null)[];
  puzzle: (number[] | null)[];
  difficulty: SudokuDifficulty;
  config: GetSudokuPractice_getSudokuPractice_config;
}

export interface GetSudokuPractice {
  getSudokuPractice: GetSudokuPractice_getSudokuPractice;
}
