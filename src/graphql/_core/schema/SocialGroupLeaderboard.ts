/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SocialGroupLeaderboardConfigId } from "./globalTypes";

// ====================================================
// GraphQL fragment: SocialGroupLeaderboard
// ====================================================

export interface SocialGroupLeaderboard_icon {
  id: string;
  uri: string | null;
}

export interface SocialGroupLeaderboard_selectedIcon {
  id: string;
  uri: string | null;
}

export interface SocialGroupLeaderboard {
  leaderboardId: string;
  name: string;
  description: string;
  shortDescription: string;
  consent: boolean;
  isLocked: boolean;
  leaderboardConfigId: SocialGroupLeaderboardConfigId;
  icon: SocialGroupLeaderboard_icon;
  selectedIcon: SocialGroupLeaderboard_selectedIcon;
}
