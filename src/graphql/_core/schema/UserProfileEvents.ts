/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserProfileEventStatus } from "./globalTypes";

// ====================================================
// GraphQL fragment: UserProfileEvents
// ====================================================

export interface UserProfileEvents_challenges_icon {
  uri: string | null;
}

export interface UserProfileEvents_challenges {
  description: string;
  icon: UserProfileEvents_challenges_icon;
}

export interface UserProfileEvents_tags_icon {
  uri: string | null;
}

export interface UserProfileEvents_tags {
  tag: string;
  joined: string | null;
  icon: UserProfileEvents_tags_icon;
}

export interface UserProfileEvents_badge_icon {
  uri: string | null;
}

export interface UserProfileEvents_badge {
  text: string;
  icon: UserProfileEvents_badge_icon;
  backgroundColor: string | null;
}

export interface UserProfileEvents_progressBar {
  max: number;
  current: number;
}

export interface UserProfileEvents_milestones_image {
  uri: string | null;
}

export interface UserProfileEvents_milestones {
  targetValue: number;
  image: UserProfileEvents_milestones_image | null;
  animated: boolean | null;
  rewardId: string | null;
  rewardClaimed: boolean | null;
  isClaimable: boolean | null;
}

export interface UserProfileEvents {
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
  challenges: UserProfileEvents_challenges[];
  tags: UserProfileEvents_tags;
  joined: boolean | null;
  badge: UserProfileEvents_badge | null;
  progressBar: UserProfileEvents_progressBar;
  milestones: UserProfileEvents_milestones[];
}
