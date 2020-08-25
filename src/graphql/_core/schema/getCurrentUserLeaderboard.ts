/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getCurrentUserLeaderboard
// ====================================================

export interface getCurrentUserLeaderboard_getCurrentUser_leaderboards {
  leaderboardId: string | null;
  name: string | null;
  consent: boolean | null;
  hasAccepted: boolean | null;
  inviteFrom: string | null;
}

export interface getCurrentUserLeaderboard_getCurrentUser {
  leaderboards: (getCurrentUserLeaderboard_getCurrentUser_leaderboards | null)[] | null;
}

export interface getCurrentUserLeaderboard {
  getCurrentUser: getCurrentUserLeaderboard_getCurrentUser | null;
}
