/* tslint:disable */

// @generated
// This file was automatically generated and should not be edited.

import { SocialGroupLeaderboardConfigId } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetMobileSocialGroupLeaderboards
// ====================================================

export interface GetMobileSocialGroupLeaderboards_getMobileSocialGroupLeaderboards_leaderboards_icon {
  id: string;
  uri: string | null;
}

export interface GetMobileSocialGroupLeaderboards_getMobileSocialGroupLeaderboards_leaderboards_selectedIcon {
  id: string;
  uri: string | null;
}

export interface GetMobileSocialGroupLeaderboards_getMobileSocialGroupLeaderboards_leaderboards {
  leaderboardId: string;
  name: string;
  description: string;
  shortDescription: string;
  consent: boolean;
  isLocked: boolean;
  leaderboardConfigId: SocialGroupLeaderboardConfigId;
  icon: GetMobileSocialGroupLeaderboards_getMobileSocialGroupLeaderboards_leaderboards_icon;
  selectedIcon: GetMobileSocialGroupLeaderboards_getMobileSocialGroupLeaderboards_leaderboards_selectedIcon;
}

export interface GetMobileSocialGroupLeaderboards_getMobileSocialGroupLeaderboards {
  socialGroupId: string;
  name: string;
  leaderboards: GetMobileSocialGroupLeaderboards_getMobileSocialGroupLeaderboards_leaderboards[];
}

export interface GetMobileSocialGroupLeaderboards {
  getMobileSocialGroupLeaderboards: GetMobileSocialGroupLeaderboards_getMobileSocialGroupLeaderboards[];
}
