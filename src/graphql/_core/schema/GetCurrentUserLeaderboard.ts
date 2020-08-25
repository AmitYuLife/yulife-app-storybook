/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCurrentUserLeaderboard
// ====================================================

export interface GetCurrentUserLeaderboard_getCurrentUser_leaderboards {
  leaderboardId: string | null;
  name: string | null;
  consent: boolean | null;
  hasAccepted: boolean | null;
  inviteFrom: string | null;
}

export interface GetCurrentUserLeaderboard_getCurrentUser {
  leaderboards: (GetCurrentUserLeaderboard_getCurrentUser_leaderboards | null)[] | null;
}

export interface GetCurrentUserLeaderboard {
  getCurrentUser: GetCurrentUserLeaderboard_getCurrentUser | null;
}
