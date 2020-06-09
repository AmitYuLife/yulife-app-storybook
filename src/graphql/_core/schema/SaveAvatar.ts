/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserAvatarInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: SaveAvatar
// ====================================================

export interface SaveAvatar_updateUserAvatar {
  rewarded: boolean | null;
  rewardAmount: number | null;
  updated: boolean | null;
}

export interface SaveAvatar {
  updateUserAvatar: SaveAvatar_updateUserAvatar | null;
}

export interface SaveAvatarVariables {
  avatar?: UserAvatarInput | null;
}
