/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum AppStoreReviewPromptAction {
  DISMISSED = "DISMISSED",
  DISMISSED_ASK_LATER = "DISMISSED_ASK_LATER",
  DISMISSED_NOT_REALLY = "DISMISSED_NOT_REALLY",
  REVIEWED = "REVIEWED",
}

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

export enum BuffArea {
  chest = "chest",
  meditationMilestone = "meditationMilestone",
  stepsMilestone = "stepsMilestone",
  streak = "streak",
}

export enum CommunityGoalType {
  meditation = "meditation",
  quests = "quests",
  steps = "steps",
}

export enum ContentItemButtonSize {
  Fill = "Fill",
  Large = "Large",
  Medium = "Medium",
  Small = "Small",
}

export enum ContentItemButtonType {
  link = "link",
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
}

export enum ContentItemFormTextInputType {
  email = "email",
  number = "number",
  text = "text",
}

export enum ContentItemProgressBarType {
  default = "default",
  yuCoin = "yuCoin",
}

export enum ContentItemRowIconTextBannerType {
  error = "error",
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
  MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
  NUMBER_SLIDER = "NUMBER_SLIDER",
}

export enum FitKitType {
  Cycling = "Cycling",
  Flexibility = "Flexibility",
  HIIT = "HIIT",
  MindfulSession = "MindfulSession",
  Pilates = "Pilates",
  Sleep = "Sleep",
  StepCount = "StepCount",
  Strength = "Strength",
  Swimming = "Swimming",
  Yoga = "Yoga",
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

export enum MobileOnboardingStepPerformed {
  personalLifeIntro = "personalLifeIntro",
  personalProductsCoveaFIBArmour = "personalProductsCoveaFIBArmour",
  personalProductsCoveaFIBIntro = "personalProductsCoveaFIBIntro",
  referralsPopover = "referralsPopover",
  yuScreenChest = "yuScreenChest",
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

export enum ProductType {
  alpha = "alpha",
  employer = "employer",
  personal = "personal",
}

export enum SduiActionType {
  SDUI_ACTION_LOG_EVENT = "SDUI_ACTION_LOG_EVENT",
  SDUI_ACTION_NAVIGATE = "SDUI_ACTION_NAVIGATE",
  SDUI_ACTION_NAVIGATE_BACK = "SDUI_ACTION_NAVIGATE_BACK",
  SDUI_ACTION_OPEN_URL = "SDUI_ACTION_OPEN_URL",
  SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_POP = "SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_POP",
  SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_PUSH = "SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_PUSH",
}

export enum TopBarType {
  DEFAULT = "DEFAULT",
  DESERT = "DESERT",
  FOREST = "FOREST",
  MOUNTAIN = "MOUNTAIN",
  WHITE = "WHITE",
}

export enum UserNotificationsType {
  challengeCompletion = "challengeCompletion",
  dailyChallengeReminder = "dailyChallengeReminder",
  duels = "duels",
  marketing = "marketing",
  streakSaver = "streakSaver",
  surges = "surges",
}

export enum YuItemSlot {
  binoculars = "binoculars",
  boots = "boots",
  chest = "chest",
  clockPendant = "clockPendant",
  compass = "compass",
  gloves = "gloves",
  map = "map",
  pants = "pants",
}

export enum YuProductId {
  critical_illness = "critical_illness",
  family_income_benefit = "family_income_benefit",
  group_critical_illness = "group_critical_illness",
  group_income_protection = "group_income_protection",
  group_life_insurance = "group_life_insurance",
  income_protection = "income_protection",
  travel = "travel",
  yulife = "yulife",
  yulife_alpha = "yulife_alpha",
  yulife_lite = "yulife_lite",
  yulife_premium_offer = "yulife_premium_offer",
  yulife_standard_offer = "yulife_standard_offer",
}

export enum YuProductStatus {
  active = "active",
  inProgress = "inProgress",
  locked = "locked",
  unlockable = "unlockable",
}

export enum YuWorld {
  desert = "desert",
  forest = "forest",
  mountain = "mountain",
  ocean = "ocean",
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

export interface BeneficiaryShareOfBenefit {
  beneficiaryId: string;
  percentage: number;
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

export interface CustomerBeneficiaryUpdate {
  id?: string | null;
  productId: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string | null;
  relationship: string;
  remove?: boolean | null;
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

export interface UpdateContactDetailsInput {
  phone?: string | null;
  addressFirstLine?: string | null;
  addressSecondLine?: string | null;
  addressCity?: string | null;
  addressPostCode?: string | null;
  email?: string | null;
  personalEmailConsent?: boolean | null;
  firstName?: string | null;
  lastName?: string | null;
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
