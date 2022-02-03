/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AvatarPartType, CoverType, YuWorld } from "./globalTypes";

// ====================================================
// GraphQL query operation: GetYumojiPartUrlSetSwiper
// ====================================================

export interface GetYumojiPartUrlSetSwiper_getYumojiPartUrlSetSwiper_variants_worlds_remoteUrl {
  id: string;
  uri: string | null;
}

export interface GetYumojiPartUrlSetSwiper_getYumojiPartUrlSetSwiper_variants_worlds_title {
  label: string;
  color: string;
}

export interface GetYumojiPartUrlSetSwiper_getYumojiPartUrlSetSwiper_variants_worlds {
  worldId: YuWorld;
  remoteUrl: GetYumojiPartUrlSetSwiper_getYumojiPartUrlSetSwiper_variants_worlds_remoteUrl;
  title: GetYumojiPartUrlSetSwiper_getYumojiPartUrlSetSwiper_variants_worlds_title | null;
}

export interface GetYumojiPartUrlSetSwiper_getYumojiPartUrlSetSwiper_variants {
  coverType: CoverType;
  worlds: GetYumojiPartUrlSetSwiper_getYumojiPartUrlSetSwiper_variants_worlds[];
}

export interface GetYumojiPartUrlSetSwiper_getYumojiPartUrlSetSwiper {
  variants: GetYumojiPartUrlSetSwiper_getYumojiPartUrlSetSwiper_variants[];
}

export interface GetYumojiPartUrlSetSwiper {
  /**
   * Used for personal products when needing the part assets on their own
   */
  getYumojiPartUrlSetSwiper: GetYumojiPartUrlSetSwiper_getYumojiPartUrlSetSwiper;
}

export interface GetYumojiPartUrlSetSwiperVariables {
  partType?: AvatarPartType | null;
}
