/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserAvatarInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SaveAvatar
// ====================================================

export interface SaveAvatar_updateUserAvatar_avatarRemoteFiles {
  __typename: "AvatarRemoteFiles";
  svgFull: string | null;
  pngFull: string | null;
  pngMini: string | null;
}

export interface SaveAvatar_updateUserAvatar {
  rewarded: boolean | null;
  rewardAmount: number | null;
  updated: boolean | null;
  avatarRemoteFiles: SaveAvatar_updateUserAvatar_avatarRemoteFiles | null;
}

export interface SaveAvatar {
  /**
   * Allows the current user to update his yumoji.
   */
  updateUserAvatar: SaveAvatar_updateUserAvatar | null;
}

export interface SaveAvatarVariables {
  avatar?: UserAvatarInput | null;
}
