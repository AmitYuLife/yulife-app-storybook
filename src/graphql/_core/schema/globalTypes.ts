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

export enum ContentItemCollapsingHeaderProductInfoType {
  coverOptions = "coverOptions",
  default = "default",
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
  info = "info",
  warning = "warning",
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

export enum DistanceMeasurementType {
  km = "km",
  mi = "mi",
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
  newYumojiBuilder = "newYumojiBuilder",
  personalLifeIntro = "personalLifeIntro",
  personalProductsCoveaFIBArmour = "personalProductsCoveaFIBArmour",
  personalProductsCoveaFIBIntro = "personalProductsCoveaFIBIntro",
  referralsPopover = "referralsPopover",
  yuScreenChest = "yuScreenChest",
  yuScreenGloves = "yuScreenGloves",
}

export enum OS {
  android = "android",
  ios = "ios",
}

export enum PassiveChallengeType {
  CYCLING = "CYCLING",
  MEDITATION = "MEDITATION",
  ONBOARDING = "ONBOARDING",
  STEPS = "STEPS",
}

export enum PolicyStatus {
  CLAIM_ADMITTED = "CLAIM_ADMITTED",
  CLAIM_NOTIFIED = "CLAIM_NOTIFIED",
  DEATH = "DEATH",
  LAPSED = "LAPSED",
  LIVE = "LIVE",
  NOT_LIVE_YET = "NOT_LIVE_YET",
  NOT_TAKEN_UP = "NOT_TAKEN_UP",
  TERMINATION = "TERMINATION",
}

export enum RNViewPointerEvents {
  AUTO = "AUTO",
  BOX_NONE = "BOX_NONE",
  BOX_ONLY = "BOX_ONLY",
  NONE = "NONE",
}

export enum SduiActionType {
  SDUI_ACTION_LOG_EVENT = "SDUI_ACTION_LOG_EVENT",
  SDUI_ACTION_NAVIGATE = "SDUI_ACTION_NAVIGATE",
  SDUI_ACTION_NAVIGATE_BACK = "SDUI_ACTION_NAVIGATE_BACK",
  SDUI_ACTION_OPEN_ALERT_DIALOG = "SDUI_ACTION_OPEN_ALERT_DIALOG",
  SDUI_ACTION_OPEN_MODAL = "SDUI_ACTION_OPEN_MODAL",
  SDUI_ACTION_OPEN_SUPPORT_CHAT = "SDUI_ACTION_OPEN_SUPPORT_CHAT",
  SDUI_ACTION_OPEN_URL = "SDUI_ACTION_OPEN_URL",
  SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_FINISH = "SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_FINISH",
  SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_POP = "SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_POP",
  SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_PUSH = "SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_PUSH",
  SDUI_ACTION_SET_BOTTOM_TAB = "SDUI_ACTION_SET_BOTTOM_TAB",
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

export enum YuProductStatus {
  active = "active",
  inProgress = "inProgress",
  locked = "locked",
  unlockable = "unlockable",
}

export enum YuScreenEarnRateTableThemeType {
  base = "base",
  baseDecorated = "baseDecorated",
  common = "common",
  epic = "epic",
  prestige = "prestige",
  rare = "rare",
}

export enum YuScreenEarnRateTableValueType {
  data = "data",
  header = "header",
}

export enum YuWorld {
  desert = "desert",
  forest = "forest",
  mountain = "mountain",
  ocean = "ocean",
}

export enum YumojiBuilderItemMatchType {
  exactVariant = "exactVariant",
  partId = "partId",
}

export enum YumojiPartStatus {
  available = "available",
  unavailable = "unavailable",
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

export interface ChallengesPayload {
  startDateTime: string;
  endDateTime: string;
  value: number;
  type: PassiveChallengeType;
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

export interface SubscribeToPerkField {
  key: string;
  value: string;
}

export interface UserAvatarPartUpdate {
  partId?: string | null;
  partType: string;
  colorSchemeId?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
