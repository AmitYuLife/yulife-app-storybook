/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum AvatarBodyType {
  female = "female",
  male = "male",
  neutral = "neutral",
}

export enum AvatarPartType {
  body = "body",
  boots = "boots",
  chest = "chest",
  eyes = "eyes",
  facialHair = "facialHair",
  glasses = "glasses",
  gloves = "gloves",
  hair = "hair",
  head = "head",
  pants = "pants",
}

export enum CoverType {
  common = "common",
  custom = "custom",
  epic = "epic",
  rare = "rare",
}

export enum IntercomHashMethod {
  android = "android",
  ios = "ios",
  web = "web",
}

export enum LoginMethod {
  FACEBOOK = "FACEBOOK",
  OTP = "OTP",
  PASSWORD = "PASSWORD",
}

export enum Metric {
  CES = "CES",
  NPS = "NPS",
  latest_app = "latest_app",
}

export enum OS {
  android = "android",
  ios = "ios",
}

export enum PassiveChallengeType {
  MEDITATION = "MEDITATION",
  ONBOARDING = "ONBOARDING",
  STEPS = "STEPS",
}

export interface AviosMetadata {
  firstName: string;
  lastName: string;
  loyaltyProgramme: string;
  accountNumber: string;
}

export interface ChallengePayload {
  startDateTime?: string | null;
  endDateTime?: string | null;
  value?: number | null;
}

export interface MobileConsentInput {
  mobileHealth?: boolean | null;
  marketing?: boolean | null;
  pushNotifications?: boolean | null;
  companyLeaderboard?: boolean | null;
  workspaceLeaderboard?: boolean | null;
}

export interface ProductMetadata {
  avios?: AviosMetadata | null;
}

export interface UserAvatarInput {
  head?: UserAvatarInputPart | null;
  eyes?: UserAvatarInputPart | null;
  hair?: UserAvatarInputPart | null;
  body?: UserAvatarInputPart | null;
  pants?: UserAvatarInputPart | null;
  chest?: UserAvatarInputPart | null;
  gloves?: UserAvatarInputPart | null;
  facialHair?: UserAvatarInputPart | null;
  glasses?: UserAvatarInputPart | null;
  boots?: UserAvatarInputPart | null;
}

export interface UserAvatarInputPart {
  partId?: string | null;
  colorSchemeId?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
