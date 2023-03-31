/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SudokuDifficulty } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetSudokuLeaderboard
// ====================================================

export interface GetSudokuLeaderboard_getSudokuLeaderboard_avatarRemoteFiles {
  __typename: "AvatarRemoteFiles";
  svgFull: string | null;
  pngFull: string | null;
  pngMini: string | null;
}

export interface GetSudokuLeaderboard_getSudokuLeaderboard {
  name: string;
  adjustedTime: number;
  userId: string;
  position: number;
  avatarRemoteFiles: GetSudokuLeaderboard_getSudokuLeaderboard_avatarRemoteFiles | null;
}

export interface GetSudokuLeaderboard {
  getSudokuLeaderboard: GetSudokuLeaderboard_getSudokuLeaderboard[] | null;
}

export interface GetSudokuLeaderboardVariables {
  date: string;
  difficulty: SudokuDifficulty;
  limit: number;
}
