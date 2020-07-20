/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLeaderboard
// ====================================================

export interface GetLeaderboard_getLeaderboard {
  __typename: "LeaderboardItem";
  id: string | null;
  firstName: string | null;
  lastName: string | null;
  name: string | null;
  coins: number | null;
  steps: number | null;
  avatarRemoteFile: string | null;
}

export interface GetLeaderboard_getCurrentUser {
  __typename: "User";
  id: string | null;
}

export interface GetLeaderboard {
  getLeaderboard: (GetLeaderboard_getLeaderboard | null)[] | null;
  getCurrentUser: GetLeaderboard_getCurrentUser | null;
}

export interface GetLeaderboardVariables {
  sortBy?: string | null;
  leaderboardId?: string | null;
}
