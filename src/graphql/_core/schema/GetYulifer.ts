/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetYulifer
// ====================================================

export interface GetYulifer_user_avatarRemoteFiles {
  __typename: "AvatarRemoteFiles";
  svgFull: string | null;
  pngFull: string | null;
  pngMini: string | null;
}

export interface GetYulifer_user {
  userId: string | null;
  earnRate: number | null;
  isAvatarCreated: boolean | null;
  avatarRemoteFiles: GetYulifer_user_avatarRemoteFiles | null;
}

export interface GetYulifer {
  user: GetYulifer_user | null;
}
