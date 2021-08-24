/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetYumojiRemoteParts
// ====================================================

export interface GetYumojiRemoteParts_avatar_shadow_remoteUrl {
  id: string;
  uri: string | null;
}

export interface GetYumojiRemoteParts_avatar_shadow {
  id: string;
  remoteUrl: GetYumojiRemoteParts_avatar_shadow_remoteUrl;
}

export interface GetYumojiRemoteParts_avatar_head_remoteUrl {
  id: string;
  uri: string | null;
}

export interface GetYumojiRemoteParts_avatar_head {
  id: string;
  remoteUrl: GetYumojiRemoteParts_avatar_head_remoteUrl;
}

export interface GetYumojiRemoteParts_avatar_eyes_remoteUrl {
  id: string;
  uri: string | null;
}

export interface GetYumojiRemoteParts_avatar_eyes {
  id: string;
  remoteUrl: GetYumojiRemoteParts_avatar_eyes_remoteUrl;
}

export interface GetYumojiRemoteParts_avatar_hair_remoteUrl {
  id: string;
  uri: string | null;
}

export interface GetYumojiRemoteParts_avatar_hair {
  id: string;
  remoteUrl: GetYumojiRemoteParts_avatar_hair_remoteUrl;
}

export interface GetYumojiRemoteParts_avatar_body_remoteUrl {
  id: string;
  uri: string | null;
}

export interface GetYumojiRemoteParts_avatar_body {
  id: string;
  remoteUrl: GetYumojiRemoteParts_avatar_body_remoteUrl;
}

export interface GetYumojiRemoteParts_avatar_pants_remoteUrl {
  id: string;
  uri: string | null;
}

export interface GetYumojiRemoteParts_avatar_pants {
  id: string;
  remoteUrl: GetYumojiRemoteParts_avatar_pants_remoteUrl;
}

export interface GetYumojiRemoteParts_avatar_chest_remoteUrl {
  id: string;
  uri: string | null;
}

export interface GetYumojiRemoteParts_avatar_chest {
  id: string;
  remoteUrl: GetYumojiRemoteParts_avatar_chest_remoteUrl;
}

export interface GetYumojiRemoteParts_avatar_gloves_remoteUrl {
  id: string;
  uri: string | null;
}

export interface GetYumojiRemoteParts_avatar_gloves {
  id: string;
  remoteUrl: GetYumojiRemoteParts_avatar_gloves_remoteUrl;
}

export interface GetYumojiRemoteParts_avatar_facialHair_remoteUrl {
  id: string;
  uri: string | null;
}

export interface GetYumojiRemoteParts_avatar_facialHair {
  id: string;
  remoteUrl: GetYumojiRemoteParts_avatar_facialHair_remoteUrl;
}

export interface GetYumojiRemoteParts_avatar_glasses_remoteUrl {
  id: string;
  uri: string | null;
}

export interface GetYumojiRemoteParts_avatar_glasses {
  id: string;
  remoteUrl: GetYumojiRemoteParts_avatar_glasses_remoteUrl;
}

export interface GetYumojiRemoteParts_avatar_boots_remoteUrl {
  id: string;
  uri: string | null;
}

export interface GetYumojiRemoteParts_avatar_boots {
  id: string;
  remoteUrl: GetYumojiRemoteParts_avatar_boots_remoteUrl;
}

export interface GetYumojiRemoteParts_avatar {
  id: string;
  shadow: GetYumojiRemoteParts_avatar_shadow;
  head: GetYumojiRemoteParts_avatar_head;
  eyes: GetYumojiRemoteParts_avatar_eyes;
  hair: GetYumojiRemoteParts_avatar_hair | null;
  body: GetYumojiRemoteParts_avatar_body;
  pants: GetYumojiRemoteParts_avatar_pants;
  chest: GetYumojiRemoteParts_avatar_chest;
  gloves: GetYumojiRemoteParts_avatar_gloves | null;
  facialHair: GetYumojiRemoteParts_avatar_facialHair | null;
  glasses: GetYumojiRemoteParts_avatar_glasses | null;
  boots: GetYumojiRemoteParts_avatar_boots;
}

export interface GetYumojiRemoteParts {
  /**
   * Returns the urls for every single avatar part
   */
  avatar: GetYumojiRemoteParts_avatar;
}
