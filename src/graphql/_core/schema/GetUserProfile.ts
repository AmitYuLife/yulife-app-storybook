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
}

export interface GetUserProfile_getUserProfile {
  gameSettings: GetUserProfile_getUserProfile_gameSettings;
  surge: GetUserProfile_getUserProfile_surge | null;
  earnRate: number;
  avatar: GetUserProfile_getUserProfile_avatar | null;
  passiveChallengesLastUpdate: GetUserProfile_getUserProfile_passiveChallengesLastUpdate;
  endPointsVersion: GetUserProfile_getUserProfile_endPointsVersion;
  notification: GetUserProfile_getUserProfile_notification;
}

export interface GetUserProfile {
  getUserProfile: GetUserProfile_getUserProfile;
}
