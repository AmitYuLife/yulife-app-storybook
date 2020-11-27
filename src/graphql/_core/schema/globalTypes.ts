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

export enum CommunityGoalType {
  meditation = "meditation",
  steps = "steps",
}

/**
 * Different cover types
 */
export enum CoverType {
  common = "common",
  custom = "custom",
  epic = "epic",
  rare = "rare",
}

export enum FeedbackFormQuestionType {
  COMMENT = "COMMENT",
  NUMBER_SLIDER = "NUMBER_SLIDER",
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

export enum OS {
  android = "android",
  ios = "ios",
}

export enum PassiveChallengeType {
  MEDITATION = "MEDITATION",
  ONBOARDING = "ONBOARDING",
  STEPS = "STEPS",
}

/**
 * Product code used internally to identify different products
 */
export enum ProductCode {
  YULFIB = "YULFIB",
}

export interface AnswerInput {
  key: string;
  value: string;
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

/**
 * Input to create a top ups quote
 */
export interface CreateTopUpsQuoteInput {
  grossSalary?: number | null;
  coverType?: CoverType | null;
  customCoverPercentage?: number | null;
  userAnswers?: (LifeInsuranceTopUpsUserAnswers | null)[] | null;
  productEntityId?: string | null;
}

/**
 * Input for getting an existing quote
 */
export interface GetTopUpsQuoteInput {
  customerProductEntityId?: string | null;
  quoteId?: string | null;
}

/**
 * User answers to underwriting journey where the questionId is the unique id that
 * identifies a question and value is the answer provided by the customer (input)
 */
export interface LifeInsuranceTopUpsUserAnswers {
  questionId?: string | null;
  value?: string | null;
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

/**
 * Input for calculate top ups estimated cost
 */
export interface TopUpsEstimateCostInput {
  grossSalary?: number | null;
  coverType?: CoverType | null;
  customCoverPercentage?: number | null;
}

export interface UpdateContactDetailsInput {
  phone?: string | null;
  addressFirstLine?: string | null;
  addressSecondLine?: string | null;
  addressCity?: string | null;
  addressPostCode?: string | null;
  email?: string | null;
  personalEmailConsent?: boolean | null;
}

export interface UpdateCustomerGPDetailsInput {
  practiceName?: string | null;
  practiceAddress?: string | null;
  practiceTown?: string | null;
  practicePostCode?: string | null;
  gpName?: string | null;
}

export interface UpdateCustomerGPDetailsOptions {
  requestMSSTests?: boolean | null;
  medicalConsent?: boolean | null;
  previewMedicalTests?: boolean | null;
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
