/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SduiActionType } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetQuestMapLevelChallengeContent
// ====================================================

export interface GetQuestMapLevelChallengeContent_getQuestMapLevelChallengeContent_media_media {
  id: string;
  uri: string | null;
}

export interface GetQuestMapLevelChallengeContent_getQuestMapLevelChallengeContent_media_cover {
  id: string;
  uri: string | null;
}

export interface GetQuestMapLevelChallengeContent_getQuestMapLevelChallengeContent_media_thumbnail {
  id: string;
  uri: string | null;
}

export interface GetQuestMapLevelChallengeContent_getQuestMapLevelChallengeContent_media_logo {
  id: string;
  uri: string | null;
}

export interface GetQuestMapLevelChallengeContent_getQuestMapLevelChallengeContent_media_videoLogo {
  id: string;
  uri: string | null;
}

export interface GetQuestMapLevelChallengeContent_getQuestMapLevelChallengeContent_media_lottie_styles {
  property: string;
  value: string;
}

export interface GetQuestMapLevelChallengeContent_getQuestMapLevelChallengeContent_media_lottie_onAnimationEnd {
  type: SduiActionType;
  payload: string | null;
}

export interface GetQuestMapLevelChallengeContent_getQuestMapLevelChallengeContent_media_lottie {
  id: string;
  uri: string;
  autoPlay: boolean;
  loop: boolean;
  styles: GetQuestMapLevelChallengeContent_getQuestMapLevelChallengeContent_media_lottie_styles[] | null;
  onAnimationEnd: GetQuestMapLevelChallengeContent_getQuestMapLevelChallengeContent_media_lottie_onAnimationEnd | null;
  aspectRatio: number | null;
}

export interface GetQuestMapLevelChallengeContent_getQuestMapLevelChallengeContent_media {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  duration: number | null;
  theme: string;
  media: GetQuestMapLevelChallengeContent_getQuestMapLevelChallengeContent_media_media;
  cover: GetQuestMapLevelChallengeContent_getQuestMapLevelChallengeContent_media_cover;
  thumbnail: GetQuestMapLevelChallengeContent_getQuestMapLevelChallengeContent_media_thumbnail;
  logo: GetQuestMapLevelChallengeContent_getQuestMapLevelChallengeContent_media_logo | null;
  videoLogo: GetQuestMapLevelChallengeContent_getQuestMapLevelChallengeContent_media_videoLogo | null;
  lottie: GetQuestMapLevelChallengeContent_getQuestMapLevelChallengeContent_media_lottie | null;
  sourceType: string | null;
}

export interface GetQuestMapLevelChallengeContent_getQuestMapLevelChallengeContent {
  media: GetQuestMapLevelChallengeContent_getQuestMapLevelChallengeContent_media;
  reward: number;
  stars: number;
  formattedDuration: string;
}

export interface GetQuestMapLevelChallengeContent {
  getQuestMapLevelChallengeContent: (GetQuestMapLevelChallengeContent_getQuestMapLevelChallengeContent | null)[] | null;
}

export interface GetQuestMapLevelChallengeContentVariables {
  levelSlotId: string;
  contentTags: string[];
}
