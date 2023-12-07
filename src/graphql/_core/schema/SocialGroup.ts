/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SocialGroupLeaderboardConfigId } from "./globalTypes";

// ====================================================
// GraphQL fragment: SocialGroup
// ====================================================

export interface SocialGroup_leaderboards_icon {
  id: string;
  uri: string | null;
}

export interface SocialGroup_leaderboards_selectedIcon {
  id: string;
  uri: string | null;
}

export interface SocialGroup_leaderboards {
  leaderboardId: string;
  name: string;
  description: string;
  shortDescription: string;
  consent: boolean;
  isLocked: boolean;
  leaderboardConfigId: SocialGroupLeaderboardConfigId;
  icon: SocialGroup_leaderboards_icon;
  selectedIcon: SocialGroup_leaderboards_selectedIcon;
}

export interface SocialGroup {
  socialGroupId: string;
  name: string;
  leaderboards: SocialGroup_leaderboards[];
}
