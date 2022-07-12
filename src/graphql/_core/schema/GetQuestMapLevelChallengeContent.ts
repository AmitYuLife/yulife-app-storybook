/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

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

export interface GetQuestMapLevelChallengeContent_getQuestMapLevelChallengeContent_media {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  duration: number;
  theme: string;
  media: GetQuestMapLevelChallengeContent_getQuestMapLevelChallengeContent_media_media;
  cover: GetQuestMapLevelChallengeContent_getQuestMapLevelChallengeContent_media_cover;
  thumbnail: GetQuestMapLevelChallengeContent_getQuestMapLevelChallengeContent_media_thumbnail;
  logo: GetQuestMapLevelChallengeContent_getQuestMapLevelChallengeContent_media_logo;
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
