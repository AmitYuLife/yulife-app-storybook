/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SocialGroupLeaderboardItemsFilter } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetMobileSocialGroupLeaderboardItems
// ====================================================

export interface GetMobileSocialGroupLeaderboardItems_getMobileSocialGroupLeaderboardItems_avatar {
  id: string;
  uri: string | null;
}

export interface GetMobileSocialGroupLeaderboardItems_getMobileSocialGroupLeaderboardItems {
  id: string;
  userId: string;
  score: string;
  name: string;
  position: number;
  isTarget: boolean;
  firstName: string;
  lastName: string;
  avatar: GetMobileSocialGroupLeaderboardItems_getMobileSocialGroupLeaderboardItems_avatar;
}

export interface GetMobileSocialGroupLeaderboardItems {
  getMobileSocialGroupLeaderboardItems: GetMobileSocialGroupLeaderboardItems_getMobileSocialGroupLeaderboardItems[];
}

export interface GetMobileSocialGroupLeaderboardItemsVariables {
  leaderboardId: string;
  limit?: number | null;
  targetId?: string | null;
  filter?: SocialGroupLeaderboardItemsFilter | null;
}
