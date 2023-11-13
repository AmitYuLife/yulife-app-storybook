/* tslint:disable */

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
  headwear = "headwear",
  pants = "pants",
}

export enum BuffArea {
  chest = "chest",
  meditationMilestone = "meditationMilestone",
  stepsMilestone = "stepsMilestone",
  streak = "streak",
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

export enum ContentItemConfirmCheckboxType {
  circular = "circular",
  cubic = "cubic",
}

export enum ContentItemFormTextInputType {
  email = "email",
  number = "number",
  text = "text",
}

export enum ContentItemImageSize {
  fill = "fill",
}

export enum ContentItemMediaOrientation {
  landscape = "landscape",
  portrait = "portrait",
}

export enum ContentItemProgressBarType {
  default = "default",
  yuCoin = "yuCoin",
}

export enum ContentItemRowIconTextBannerType {
  error = "error",
  info = "info",
  neutral = "neutral",
  success = "success",
  warning = "warning",
}

/**
 * Different cover types
 */
export enum CoverType {
  common = "common",
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
  ActiveEnergyBurned = "ActiveEnergyBurned",
  BikingHand = "BikingHand",
  BikingHandWorkout = "BikingHandWorkout",
  BikingMountain = "BikingMountain",
  BikingRoad = "BikingRoad",
  BikingSpinning = "BikingSpinning",
  BikingStationary = "BikingStationary",
  BikingUtility = "BikingUtility",
  BikingWorkout = "BikingWorkout",
  Cycling = "Cycling",
  Distance = "Distance",
  Flexibility = "Flexibility",
  GuidedBreathing = "GuidedBreathing",
  HIIT = "HIIT",
  HeartRate = "HeartRate",
  MindfulSession = "MindfulSession",
  Pilates = "Pilates",
  Sleep = "Sleep",
  StepCount = "StepCount",
  Strength = "Strength",
  Swimming = "Swimming",
  Workout = "Workout",
  Yoga = "Yoga",
}

export enum GoalActionType {
  CLAIM_REWARD = "CLAIM_REWARD",
  CLOSE_EVENT = "CLOSE_EVENT",
  JOIN_GOAL = "JOIN_GOAL",
}

export enum GoalRewardStatus {
  claimed = "claimed",
  completed = "completed",
  pending = "pending",
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

export enum MagicLinkSite {
  members = "members",
  underwriting = "underwriting",
}

export enum MobileOnboardingStepPerformed {
  employeeDashboardOnboarding = "employeeDashboardOnboarding",
  newYumojiBuilder = "newYumojiBuilder",
  passiveCycling = "passiveCycling",
  personalProductLaunchDental = "personalProductLaunchDental",
  personalProductLaunchDentalAndPli = "personalProductLaunchDentalAndPli",
  personalProductLaunchPLI = "personalProductLaunchPLI",
  referralsPopover = "referralsPopover",
  yuScreenChest = "yuScreenChest",
  yuScreenChestPurchased = "yuScreenChestPurchased",
  yuScreenGloves = "yuScreenGloves",
  yuScreenGlovesLive = "yuScreenGlovesLive",
  yuScreenGlovesPurchased = "yuScreenGlovesPurchased",
  yuScreenOnboarding = "yuScreenOnboarding",
  yuScreenOnboardingPension = "yuScreenOnboardingPension",
}

export enum OS {
  android = "android",
  ios = "ios",
}

export enum PassiveChallengeType {
  CYCLING = "CYCLING",
  MEDITATION = "MEDITATION",
  ONBOARDING = "ONBOARDING",
  PENSION = "PENSION",
  STEPS = "STEPS",
}

export enum RNViewPointerEvents {
  AUTO = "AUTO",
  BOX_NONE = "BOX_NONE",
  BOX_ONLY = "BOX_ONLY",
  NONE = "NONE",
}

export enum RewardsChestType {
  CELESTIAL = "CELESTIAL",
  DESERT = "DESERT",
  FOREST = "FOREST",
  MOUNTAIN = "MOUNTAIN",
  OCEAN = "OCEAN",
}

export enum SduiActionType {
  OPEN_MY_ACCOUNT = "OPEN_MY_ACCOUNT",
  REFRESH_TOTAL_COINS = "REFRESH_TOTAL_COINS",
  SDUI_ACTION_GENERIC_NAVIGATE_BACK = "SDUI_ACTION_GENERIC_NAVIGATE_BACK",
  SDUI_ACTION_GENERIC_NAVIGATE_BACK_TO_ROOT = "SDUI_ACTION_GENERIC_NAVIGATE_BACK_TO_ROOT",
  SDUI_ACTION_LOG_EVENT = "SDUI_ACTION_LOG_EVENT",
  SDUI_ACTION_NAVIGATE = "SDUI_ACTION_NAVIGATE",
  SDUI_ACTION_NAVIGATE_BACK = "SDUI_ACTION_NAVIGATE_BACK",
  SDUI_ACTION_OPEN_ALERT_DIALOG = "SDUI_ACTION_OPEN_ALERT_DIALOG",
  SDUI_ACTION_OPEN_MAGIC_LINK = "SDUI_ACTION_OPEN_MAGIC_LINK",
  SDUI_ACTION_OPEN_MODAL = "SDUI_ACTION_OPEN_MODAL",
  SDUI_ACTION_OPEN_SUPPORT_CHAT = "SDUI_ACTION_OPEN_SUPPORT_CHAT",
  SDUI_ACTION_OPEN_URL = "SDUI_ACTION_OPEN_URL",
  SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_FINISH = "SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_FINISH",
  SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_POP = "SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_POP",
  SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_PUSH = "SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_PUSH",
  SDUI_ACTION_SEND_MUTATION = "SDUI_ACTION_SEND_MUTATION",
  SDUI_ACTION_SET_BOTTOM_TAB = "SDUI_ACTION_SET_BOTTOM_TAB",
  SDUI_ACTION_SHOW_FLOATING_MODAL = "SDUI_ACTION_SHOW_FLOATING_MODAL",
  SDUI_ACTION_SHOW_OVERLAY_LIST_PICKER = "SDUI_ACTION_SHOW_OVERLAY_LIST_PICKER",
  SDUI_ACTION_UPDATE_DYNAMIC_STYLES = "SDUI_ACTION_UPDATE_DYNAMIC_STYLES",
}

export enum SocialGroupLeaderboardConfigId {
  dailysudoku = "dailysudoku",
  steps30days = "steps30days",
}

export enum SubmitSduiJourneyAction {
  POP = "POP",
  PUSH = "PUSH",
  RESET = "RESET",
}

export enum SudokuDifficulty {
  EASY = "EASY",
  HARD = "HARD",
  MEDIUM = "MEDIUM",
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

export enum UserProfileEventStatus {
  active = "active",
  completed = "completed",
}

export enum YuProductStatus {
  active = "active",
  inProgress = "inProgress",
  locked = "locked",
  ownedNoPolicy = "ownedNoPolicy",
  rejected = "rejected",
  unlockable = "unlockable",
}

export enum YuScreenCarouselItemVariant {
  full = "full",
  narrow = "narrow",
}

export enum YuScreenSlotBorderStyle {
  dashed = "dashed",
  dotted = "dotted",
  solid = "solid",
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
  value?: string | null;
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
  bundleIdentifiers?: (string | null)[] | null;
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

export interface RewardListFilter {
  reward?: string | null;
}

export interface SampleDebugData {
  startTime: string;
  endTime: string;
  type: FitKitType;
  userEntered?: boolean | null;
  value?: number | null;
  source?: SampleDebugDataSource | null;
}

export interface SampleDebugDataSource {
  bundleIdentifier?: string | null;
  name?: string | null;
  version?: string | null;
}

export interface SocialGroupLeaderboardItemsFilter {
  date?: string | null;
  difficulty?: SudokuDifficulty | null;
}

export interface SocialLeaderboardConstent {
  id: string;
  consent: boolean;
}

export interface SubscribeToPerkField {
  key: string;
  value: string;
}

export interface SudokuSubmission {
  date: string;
  mistakes: number;
  hints: number;
  baseTime: number;
  adjustedTime: number;
  difficulty: SudokuDifficulty;
  levelSlotId: string;
  guesses?: number[] | null;
}

export interface UserAvatarPartUpdate {
  partId?: string | null;
  partType: string;
  colorSchemeId?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
