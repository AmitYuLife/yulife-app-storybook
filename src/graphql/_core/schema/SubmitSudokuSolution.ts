/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SudokuSubmission } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SubmitSudokuSolution
// ====================================================

export interface SubmitSudokuSolution_submitSudokuSolution_incomingData {
  steps: number | null;
  meditation: number | null;
  distance: number | null;
  duration: number | null;
  calories: number | null;
}

export interface SubmitSudokuSolution_submitSudokuSolution_milestoneLog_data {
  steps: number | null;
  meditation: number | null;
  distance: number | null;
  duration: number | null;
  calories: number | null;
}

export interface SubmitSudokuSolution_submitSudokuSolution_milestoneLog {
  data: SubmitSudokuSolution_submitSudokuSolution_milestoneLog_data | null;
}

export interface SubmitSudokuSolution_submitSudokuSolution {
  level: number | null;
  levelSlotId: string | null;
  startDateTime: string | null;
  status: string | null;
  endDateTime: string | null;
  incomingData: SubmitSudokuSolution_submitSudokuSolution_incomingData | null;
  milestoneLog: (SubmitSudokuSolution_submitSudokuSolution_milestoneLog | null)[] | null;
  yuCoinAwarded: number | null;
  rating: number | null;
}

export interface SubmitSudokuSolution {
  submitSudokuSolution: SubmitSudokuSolution_submitSudokuSolution | null;
}

export interface SubmitSudokuSolutionVariables {
  results: SudokuSubmission;
}
