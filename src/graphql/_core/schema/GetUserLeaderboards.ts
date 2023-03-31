/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserLeaderboards
// ====================================================

export interface GetUserLeaderboards_getUserLeaderboards {
  leaderboardId: string | null;
  name: string | null;
  metric: string | null;
  days: number | null;
  consent: boolean | null;
  hasAccepted: boolean | null;
  inviteFrom: string | null;
}

export interface GetUserLeaderboards {
  getUserLeaderboards: (GetUserLeaderboards_getUserLeaderboards | null)[] | null;
}
