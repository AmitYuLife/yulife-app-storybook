/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DistanceMeasurementType, SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetUserProfile
// ====================================================

export interface GetUserProfile_getUserProfile_gameSettings {
  cyclingMeasurement: DistanceMeasurementType;
  maxStepsAnomalyWindowMs: number | null;
}

export interface GetUserProfile_getUserProfile_surge_lottie_styles {
  property: string;
  value: string;
}

export interface GetUserProfile_getUserProfile_surge_lottie_onAnimationEnd {
  type: SduiActionType;
  payload: string | null;
}

export interface GetUserProfile_getUserProfile_surge_lottie {
  id: string;
  uri: string;
  autoPlay: boolean;
  loop: boolean;
  styles: GetUserProfile_getUserProfile_surge_lottie_styles[] | null;
  onAnimationEnd: GetUserProfile_getUserProfile_surge_lottie_onAnimationEnd | null;
  aspectRatio: number | null;
}

export interface GetUserProfile_getUserProfile_surge {
  endDateTime: string;
  multiplier: string;
  title: string;
  description: string;
  lottie: GetUserProfile_getUserProfile_surge_lottie;
}

export interface GetUserProfile_getUserProfile_avatar_avatarRemoteFiles {
  svgFull: string | null;
  pngFull: string | null;
  pngMini: string | null;
}

export interface GetUserProfile_getUserProfile_avatar {
  isAvatarCreated: boolean | null;
  avatarRemoteFiles: GetUserProfile_getUserProfile_avatar_avatarRemoteFiles | null;
}

export interface GetUserProfile_getUserProfile_passiveChallengesLastUpdate {
  cycling: string | null;
  meditation: string | null;
  steps: string | null;
}

export interface GetUserProfile_getUserProfile_endPointsVersion {
  getMobileCopy: string | null;
  getMobileAssets: string;
}

export interface GetUserProfile_getUserProfile_notification {
  hasDuels: boolean;
  hasPendingForm: boolean;
  hasMobileWhatsNewModal: boolean;
  hasAppReview: boolean;
  hasDailyScreenCustomIcon: boolean;
  hasYuScreenNotification: boolean;
}

export interface GetUserProfile_getUserProfile_events_challenges_icon {
  uri: string | null;
}

export interface GetUserProfile_getUserProfile_events_challenges {
  description: string;
  icon: GetUserProfile_getUserProfile_events_challenges_icon;
}

export interface GetUserProfile_getUserProfile_events_tags_icon {
  uri: string | null;
}

export interface GetUserProfile_getUserProfile_events_tags {
  tag: string;
  joined: string | null;
  icon: GetUserProfile_getUserProfile_events_tags_icon;
}

export interface GetUserProfile_getUserProfile_events_badge_icon {
  uri: string | null;
}

export interface GetUserProfile_getUserProfile_events_badge {
  text: string;
  icon: GetUserProfile_getUserProfile_events_badge_icon;
  backgroundColor: string | null;
}

export interface GetUserProfile_getUserProfile_events_progressBar {
  max: number;
  current: number;
}

export interface GetUserProfile_getUserProfile_events_milestones_image {
  uri: string | null;
}

export interface GetUserProfile_getUserProfile_events_milestones {
  targetValue: number;
  image: GetUserProfile_getUserProfile_events_milestones_image | null;
  animated: boolean | null;
  rewardId: string | null;
  rewardClaimed: boolean | null;
}

export interface GetUserProfile_getUserProfile_events {
  id: string;
  stageId: string;
  title: string;
  description: string | null;
  startDate: string | null;
  endDate: string | null;
  challenges: GetUserProfile_getUserProfile_events_challenges[];
  tags: GetUserProfile_getUserProfile_events_tags;
  joined: boolean | null;
  badge: GetUserProfile_getUserProfile_events_badge | null;
  progressBar: GetUserProfile_getUserProfile_events_progressBar;
  milestones: GetUserProfile_getUserProfile_events_milestones[];
}

export interface GetUserProfile_getUserProfile {
  gameSettings: GetUserProfile_getUserProfile_gameSettings;
  surge: GetUserProfile_getUserProfile_surge | null;
  earnRate: number;
  avatar: GetUserProfile_getUserProfile_avatar | null;
  passiveChallengesLastUpdate: GetUserProfile_getUserProfile_passiveChallengesLastUpdate;
  endPointsVersion: GetUserProfile_getUserProfile_endPointsVersion;
  notification: GetUserProfile_getUserProfile_notification;
  events: GetUserProfile_getUserProfile_events[];
}

export interface GetUserProfile {
  getUserProfile: GetUserProfile_getUserProfile;
}
