/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SudokuLeaderboard
// ====================================================

export interface SudokuLeaderboard_avatarRemoteFiles {
  __typename: "AvatarRemoteFiles";
  svgFull: string | null;
  pngFull: string | null;
  pngMini: string | null;
}

export interface SudokuLeaderboard {
  name: string;
  adjustedTime: number;
  userId: string;
  position: number;
  avatarRemoteFiles: SudokuLeaderboard_avatarRemoteFiles | null;
}
