/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AvatarPartType, CoverType, YuWorld } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetYumojiPartUrlSet
// ====================================================

export interface GetYumojiPartUrlSet_getYumojiPartUrlSet_variants_worlds_remoteUrl {
  id: string;
  uri: string | null;
}

export interface GetYumojiPartUrlSet_getYumojiPartUrlSet_variants_worlds {
  worldId: YuWorld;
  remoteUrl: GetYumojiPartUrlSet_getYumojiPartUrlSet_variants_worlds_remoteUrl;
}

export interface GetYumojiPartUrlSet_getYumojiPartUrlSet_variants {
  coverType: CoverType;
  worlds: GetYumojiPartUrlSet_getYumojiPartUrlSet_variants_worlds[];
}

export interface GetYumojiPartUrlSet_getYumojiPartUrlSet {
  variants: GetYumojiPartUrlSet_getYumojiPartUrlSet_variants[];
}

export interface GetYumojiPartUrlSet {
  /**
   * Gets all cover type and world variants given a part type
   * Takes user body part from database
   */
  getYumojiPartUrlSet: GetYumojiPartUrlSet_getYumojiPartUrlSet;
}

export interface GetYumojiPartUrlSetVariables {
  partType?: AvatarPartType | null;
}
