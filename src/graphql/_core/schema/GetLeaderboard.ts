/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLeaderboard
// ====================================================

export interface GetLeaderboard_getLeaderboard_avatarRemoteFiles {
  __typename: "AvatarRemoteFiles";
  svgFull: string | null;
  pngFull: string | null;
  pngMini: string | null;
}

export interface GetLeaderboard_getLeaderboard {
  __typename: "LeaderboardItem";
  id: string | null;
  name: string | null;
  coins: number | null;
  steps: number | null;
  avatarRemoteFiles: GetLeaderboard_getLeaderboard_avatarRemoteFiles | null;
}

export interface GetLeaderboard {
  getLeaderboard: (GetLeaderboard_getLeaderboard | null)[] | null;
}

export interface GetLeaderboardVariables {
  sortBy?: string | null;
  leaderboardId?: string | null;
}
