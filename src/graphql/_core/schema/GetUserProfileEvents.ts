/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserProfileEventStatus } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetUserProfileEvents
// ====================================================

export interface GetUserProfileEvents_getUserProfileEvents_challenges_icon {
  uri: string | null;
}

export interface GetUserProfileEvents_getUserProfileEvents_challenges {
  description: string;
  icon: GetUserProfileEvents_getUserProfileEvents_challenges_icon;
}

export interface GetUserProfileEvents_getUserProfileEvents_tags_icon {
  uri: string | null;
}

export interface GetUserProfileEvents_getUserProfileEvents_tags {
  tag: string;
  joined: string | null;
  icon: GetUserProfileEvents_getUserProfileEvents_tags_icon;
}

export interface GetUserProfileEvents_getUserProfileEvents_badge_icon {
  uri: string | null;
}

export interface GetUserProfileEvents_getUserProfileEvents_badge {
  text: string;
  icon: GetUserProfileEvents_getUserProfileEvents_badge_icon;
  backgroundColor: string | null;
}

export interface GetUserProfileEvents_getUserProfileEvents_progressBar {
  max: number;
  current: number;
}

export interface GetUserProfileEvents_getUserProfileEvents_milestones_image {
  uri: string | null;
}

export interface GetUserProfileEvents_getUserProfileEvents_milestones {
  targetValue: number;
  image: GetUserProfileEvents_getUserProfileEvents_milestones_image | null;
  animated: boolean | null;
  rewardId: string | null;
  rewardClaimed: boolean | null;
  isClaimable: boolean | null;
}

export interface GetUserProfileEvents_getUserProfileEvents {
  id: string;
  /**
   * deprecated
   */
  stageId: string;
  participationId: string;
  title: string;
  description: string | null;
  startDate: string | null;
  endDate: string | null;
  status: UserProfileEventStatus | null;
  challenges: GetUserProfileEvents_getUserProfileEvents_challenges[];
  tags: GetUserProfileEvents_getUserProfileEvents_tags;
  joined: boolean | null;
  badge: GetUserProfileEvents_getUserProfileEvents_badge | null;
  progressBar: GetUserProfileEvents_getUserProfileEvents_progressBar;
  milestones: GetUserProfileEvents_getUserProfileEvents_milestones[];
}

export interface GetUserProfileEvents {
  getUserProfileEvents: GetUserProfileEvents_getUserProfileEvents[];
}
