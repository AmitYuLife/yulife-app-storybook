/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserAvatarPartUpdate } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateAvatar
// ====================================================

export interface UpdateAvatar_updateUserAvatarParts_avatarRemoteFiles {
  __typename: "AvatarRemoteFiles";
  svgFull: string | null;
  pngFull: string | null;
  pngMini: string | null;
}

export interface UpdateAvatar_updateUserAvatarParts {
  rewarded: boolean | null;
  rewardAmount: number | null;
  updated: boolean | null;
  avatarRemoteFiles: UpdateAvatar_updateUserAvatarParts_avatarRemoteFiles | null;
}

export interface UpdateAvatar {
  updateUserAvatarParts: UpdateAvatar_updateUserAvatarParts | null;
}

export interface UpdateAvatarVariables {
  avatar?: (UserAvatarPartUpdate | null)[] | null;
}
