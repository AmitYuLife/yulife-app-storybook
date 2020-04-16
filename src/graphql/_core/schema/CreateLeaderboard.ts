/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateLeaderboard
// ====================================================

export interface CreateLeaderboard_createLeaderboard {
  email: string | null;
  status: boolean | null;
}

export interface CreateLeaderboard {
  createLeaderboard: (CreateLeaderboard_createLeaderboard | null)[] | null;
}

export interface CreateLeaderboardVariables {
  name: string;
  invitees: (string | null)[];
}
