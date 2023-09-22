/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchLeaderboardUser
// ====================================================

export interface SearchLeaderboardUser_searchLeaderboardUser_avatar {
  id: string;
  uri: string | null;
}

export interface SearchLeaderboardUser_searchLeaderboardUser {
  id: string;
  name: string;
  avatar: SearchLeaderboardUser_searchLeaderboardUser_avatar;
}

export interface SearchLeaderboardUser {
  searchLeaderboardUser: SearchLeaderboardUser_searchLeaderboardUser[];
}

export interface SearchLeaderboardUserVariables {
  name: string;
  socialGroupId?: string | null;
  socialGroupLeaderboardId?: string | null;
}
