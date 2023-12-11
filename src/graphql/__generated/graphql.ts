/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type ApiConfig = {
  __typename?: "APIConfig";
  intercom: ApiConfigIntercom;
  language: Scalars["String"]["output"];
  leanplum: ApiConfigLeanplum;
  mixpanelHost: Scalars["String"]["output"];
  mixpanelKey: Scalars["String"]["output"];
  sduiStaticDeeplinks: Array<ApiConfigSduiStaticDeepLink>;
  stripeKey: Scalars["String"]["output"];
  urls: ApiConfigUrls;
};

export type ApiConfigIntercom = {
  __typename?: "APIConfigIntercom";
  android: Scalars["String"]["output"];
  appId: Scalars["String"]["output"];
  ios: Scalars["String"]["output"];
};

export type ApiConfigLeanplum = {
  __typename?: "APIConfigLeanplum";
  appId: Scalars["String"]["output"];
  devKey?: Maybe<Scalars["String"]["output"]>;
  prodKey: Scalars["String"]["output"];
};

export type ApiConfigSduiStaticDeepLink = {
  __typename?: "APIConfigSDUIStaticDeepLink";
  dynamicRouteId?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  stepId: Scalars["String"]["output"];
};

export type ApiConfigUrls = {
  __typename?: "APIConfigUrls";
  eula: Scalars["String"]["output"];
  members: Scalars["String"]["output"];
  privacyPolicy: Scalars["String"]["output"];
  rewardsPolicy: Scalars["String"]["output"];
  website: Scalars["String"]["output"];
};

export type ApiDetails = {
  __typename?: "APIDetails";
  version?: Maybe<Scalars["String"]["output"]>;
};

export type AbsoluteContentItem = {
  __typename?: "AbsoluteContentItem";
  dynamicStyles?: Maybe<Array<SduiStyleDynamic>>;
  isBackground?: Maybe<Scalars["Boolean"]["output"]>;
  item: ContentItem;
  styles?: Maybe<Array<SduiStyle>>;
};

export type AbsoluteContentPersonalItem = {
  __typename?: "AbsoluteContentPersonalItem";
  id: Scalars["ID"]["output"];
  item: ContentPersonalProductItem;
  /** If you want to have have top: 100 from the header - turn this on. Otherwise display on top of the header. Unlimited power. */
  shouldAccountForHeader?: Maybe<Scalars["Boolean"]["output"]>;
};

export type AbsoluteYuScreenProductDetailsContentItem = {
  __typename?: "AbsoluteYuScreenProductDetailsContentItem";
  id: Scalars["ID"]["output"];
  isBackground?: Maybe<Scalars["Boolean"]["output"]>;
  item: YuScreenProductDetailsContentItem;
  shouldAccountForHeader?: Maybe<Scalars["Boolean"]["output"]>;
};

export type AccessUserInput = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  businessPhone: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  lastName: Scalars["String"]["input"];
};

export type Accessibility = {
  __typename?: "Accessibility";
  accessibilityLabel: Scalars["String"]["output"];
  accessibilityRole?: Maybe<Scalars["String"]["output"]>;
};

export type ActiveAndInactiveCount = {
  __typename?: "ActiveAndInactiveCount";
  active?: Maybe<Scalars["Int"]["output"]>;
  inactive?: Maybe<Scalars["Int"]["output"]>;
};

export type ActiveBuffsOverlay = {
  __typename?: "ActiveBuffsOverlay";
  equipment: Array<ActiveBuffsOverlayEquipment>;
  icon: RemoteImage;
  image: RemoteImage;
  title: Scalars["String"]["output"];
};

export type ActiveBuffsOverlayBuff = {
  __typename?: "ActiveBuffsOverlayBuff";
  description: Scalars["String"]["output"];
  icon: RemoteImage;
  title: Scalars["String"]["output"];
};

export type ActiveBuffsOverlayEquipment = {
  __typename?: "ActiveBuffsOverlayEquipment";
  buffs: Array<ActiveBuffsOverlayBuff>;
  iconUri: Scalars["String"]["output"];
  slotUri: Scalars["String"]["output"];
};

export type ActiveChallenge = {
  __typename?: "ActiveChallenge";
  challenge?: Maybe<Challenge>;
  levelSlot?: Maybe<LevelSlot>;
};

export type ActiveChallengeByLevelSlotIdResponse = {
  __typename?: "ActiveChallengeByLevelSlotIdResponse";
  challenge: Challenge;
  totalPauseDuration: Scalars["Int"]["output"];
};

export type ActiveMultiplier = {
  __typename?: "ActiveMultiplier";
  description?: Maybe<Scalars["String"]["output"]>;
  endDateTime?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  multiple?: Maybe<Scalars["Int"]["output"]>;
  startDateTime?: Maybe<Scalars["String"]["output"]>;
};

export type ActiveResponse = {
  __typename?: "ActiveResponse";
  challenge?: Maybe<Challenge>;
  chest?: Maybe<Chest>;
  hideExternalLinks?: Maybe<Scalars["Boolean"]["output"]>;
  levelSlot?: Maybe<LevelSlot>;
  nextLevelAvailableAt?: Maybe<Scalars["String"]["output"]>;
  yuniversalChest?: Maybe<UnityRewardsChest>;
};

export type ActiveStreak = {
  __typename?: "ActiveStreak";
  buffs: Array<Buff>;
  id?: Maybe<Scalars["String"]["output"]>;
  maxStreak?: Maybe<Scalars["Int"]["output"]>;
  nextStreakAvailableAt?: Maybe<Scalars["String"]["output"]>;
  streak?: Maybe<Scalars["Int"]["output"]>;
  streakAwardId?: Maybe<Scalars["String"]["output"]>;
  totalStreak?: Maybe<Scalars["Int"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["Int"]["output"]>;
};

export type ActivityHistory = {
  __typename?: "ActivityHistory";
  challenges?: Maybe<Array<Maybe<ActivityHistoryChallenge>>>;
  cycling?: Maybe<Scalars["Int"]["output"]>;
  cyclingSources?: Maybe<SourceBreakdown>;
  cyclingYucoin?: Maybe<Scalars["Int"]["output"]>;
  dayOfMonth?: Maybe<Scalars["String"]["output"]>;
  dayOfWeek?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  level?: Maybe<Scalars["Int"]["output"]>;
  mindfulSeconds?: Maybe<Scalars["Int"]["output"]>;
  mindfulYucoin?: Maybe<Scalars["Int"]["output"]>;
  monthAndYear?: Maybe<Scalars["String"]["output"]>;
  pensionYucoin?: Maybe<Scalars["Int"]["output"]>;
  sources?: Maybe<SourceBreakdown>;
  steps?: Maybe<Scalars["Int"]["output"]>;
  yucoin?: Maybe<Scalars["Int"]["output"]>;
};

export type ActivityHistoryChallenge = {
  __typename?: "ActivityHistoryChallenge";
  earned?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  milestones?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  score?: Maybe<Scalars["String"]["output"]>;
};

export type ActivityToday = {
  __typename?: "ActivityToday";
  challenges?: Maybe<Array<Maybe<Challenge>>>;
  chest?: Maybe<Chest>;
};

export type AdBanner = {
  __typename?: "AdBanner";
  endDate?: Maybe<Scalars["String"]["output"]>;
  height?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["String"]["output"];
  imageUrl: RemoteImage;
  navigateTo: Scalars["String"]["output"];
  startDate: Scalars["String"]["output"];
  width?: Maybe<Scalars["Int"]["output"]>;
};

export type AddUserFeedbackResponse = {
  __typename?: "AddUserFeedbackResponse";
  message?: Maybe<Scalars["String"]["output"]>;
};

export type AnswerInput = {
  key: Scalars["String"]["input"];
  value?: InputMaybe<Scalars["String"]["input"]>;
};

export type AppStoreReviewPrompt = {
  __typename?: "AppStoreReviewPrompt";
  body: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  image: Scalars["String"]["output"];
  rejectedBody: Scalars["String"]["output"];
  rejectedTitle: Scalars["String"]["output"];
  showAfterEvent?: Maybe<Scalars["String"]["output"]>;
  showAfterSeconds: Scalars["Int"]["output"];
  title: Scalars["String"]["output"];
};

export enum AppStoreReviewPromptAction {
  /** @deprecated Replaced with more granular actions DISMISSED_ASK_LATER and DISMISSED_NOT_REALLY. */
  Dismissed = "DISMISSED",
  DismissedAskLater = "DISMISSED_ASK_LATER",
  DismissedNotReally = "DISMISSED_NOT_REALLY",
  Reviewed = "REVIEWED",
}

export type AssignProductInput = {
  additionalEarnings?: InputMaybe<Scalars["String"]["input"]>;
  baseSalary?: InputMaybe<Scalars["String"]["input"]>;
  baseSalaryCurrency?: InputMaybe<Scalars["String"]["input"]>;
  category: Scalars["String"]["input"];
  employeePensionContribution?: InputMaybe<Scalars["String"]["input"]>;
  employerPensionContribution?: InputMaybe<Scalars["String"]["input"]>;
  jobTitle?: InputMaybe<Scalars["String"]["input"]>;
  productName: Scalars["String"]["input"];
  productSalary?: InputMaybe<Scalars["String"]["input"]>;
};

export type AssignProductToTeamMemberResult = {
  __typename?: "AssignProductToTeamMemberResult";
  errors?: Maybe<Array<Maybe<AssignProductToTeamMemberResultError>>>;
  isSuccessful: Scalars["Boolean"]["output"];
};

export type AssignProductToTeamMemberResultError = {
  __typename?: "AssignProductToTeamMemberResultError";
  inputId?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  path?: Maybe<Scalars["String"]["output"]>;
  rowNumber?: Maybe<Scalars["Int"]["output"]>;
};

export enum AssignTeamPerkDistributionMethod {
  AssignedViaProduct = "assigned_via_product",
  FirstComeFirstServe = "first_come_first_serve",
}

export type AssignTeamPerkInput = {
  accountAccessId: Scalars["String"]["input"];
  distributionMethod?: InputMaybe<AssignTeamPerkDistributionMethod>;
  maxSeats: Scalars["Int"]["input"];
  perkId: Scalars["String"]["input"];
  purchaseOrderNumber: Scalars["String"]["input"];
  yuStoreCreditRedeemed?: InputMaybe<Scalars["Float"]["input"]>;
};

export enum AvatarBodyType {
  Female = "female",
  Male = "male",
  Neutral = "neutral",
}

export type AvatarColor = {
  __typename?: "AvatarColor";
  colorScheme?: Maybe<AvatarColorScheme>;
  colorSchemeId: Scalars["String"]["output"];
};

export type AvatarColorScheme = {
  __typename?: "AvatarColorScheme";
  base?: Maybe<Scalars["String"]["output"]>;
  eyebrows?: Maybe<Scalars["String"]["output"]>;
  leftEar?: Maybe<Scalars["String"]["output"]>;
  light?: Maybe<Scalars["String"]["output"]>;
  lips?: Maybe<Scalars["String"]["output"]>;
  main: Scalars["String"]["output"];
  nose?: Maybe<Scalars["String"]["output"]>;
  rightEar?: Maybe<Scalars["String"]["output"]>;
  shadow?: Maybe<Scalars["String"]["output"]>;
  tongue?: Maybe<Scalars["String"]["output"]>;
};

export type AvatarElementAttr = {
  __typename?: "AvatarElementAttr";
  name: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type AvatarElements = {
  __typename?: "AvatarElements";
  attributes?: Maybe<Array<Maybe<AvatarElementAttr>>>;
  children?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  id: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type AvatarPart = {
  __typename?: "AvatarPart";
  bodyType?: Maybe<AvatarBodyType>;
  colors?: Maybe<AvatarPartColors>;
  elements?: Maybe<Array<Maybe<AvatarElements>>>;
  height?: Maybe<Scalars["String"]["output"]>;
  hidesPartTypes?: Maybe<Array<Maybe<AvatarPartType>>>;
  partId: Scalars["String"]["output"];
  partType?: Maybe<AvatarPartType>;
  previewViewBox?: Maybe<Scalars["String"]["output"]>;
  width?: Maybe<Scalars["String"]["output"]>;
};

export type AvatarPartColors = {
  __typename?: "AvatarPartColors";
  available?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  default?: Maybe<AvatarColor>;
};

export enum AvatarPartType {
  Body = "body",
  Boots = "boots",
  Chest = "chest",
  Eyes = "eyes",
  FacialHair = "facialHair",
  Glasses = "glasses",
  Gloves = "gloves",
  Hair = "hair",
  Head = "head",
  Headwear = "headwear",
  Pants = "pants",
}

export enum AvatarRemoteFileFormat {
  Png = "png",
  Svg = "svg",
}

export type AvatarRemoteFileOption = {
  crop?: InputMaybe<Scalars["String"]["input"]>;
  format?: InputMaybe<AvatarRemoteFileFormat>;
  height?: InputMaybe<Scalars["Float"]["input"]>;
  quality?: InputMaybe<Scalars["String"]["input"]>;
  width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type AvatarRemoteFiles = {
  __typename?: "AvatarRemoteFiles";
  image?: Maybe<Scalars["String"]["output"]>;
};

export type AvatarRemoteFilesImageArgs = {
  options?: InputMaybe<AvatarRemoteFileOption>;
};

export type Avios = {
  __typename?: "Avios";
  accountNumber?: Maybe<Scalars["String"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  loyaltyProgramme?: Maybe<Scalars["String"]["output"]>;
};

export type AviosMetadata = {
  accountNumber: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  lastName: Scalars["String"]["input"];
  loyaltyProgramme: Scalars["String"]["input"];
};

export type BeneficiaryShareOfBenefit = {
  beneficiaryId: Scalars["ID"]["input"];
  percentage: Scalars["Float"]["input"];
};

export type BlackListApps = {
  __typename?: "BlackListApps";
  steps?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
};

export type Buff = {
  __typename?: "Buff";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  value: Scalars["Int"]["output"];
};

export enum BuffArea {
  Chest = "chest",
  MeditationMilestone = "meditationMilestone",
  StepsMilestone = "stepsMilestone",
  Streak = "streak",
}

export type BulkMemberUpload = {
  __typename?: "BulkMemberUpload";
  importId?: Maybe<Scalars["String"]["output"]>;
  preview?: Maybe<BulkUploadPreview>;
  result?: Maybe<BulkUploadResult>;
  status?: Maybe<BulkUploadStatus>;
  uploadType?: Maybe<BulkMemberUploadType>;
  uploadUrl?: Maybe<Scalars["String"]["output"]>;
};

export enum BulkMemberUploadType {
  AddMembers = "ADD_MEMBERS",
  EditMembers = "EDIT_MEMBERS",
  SetLeaveDates = "SET_LEAVE_DATES",
}

export type BulkUploadPreview = {
  __typename?: "BulkUploadPreview";
  columns?: Maybe<Array<PreviewColumn>>;
  errors?: Maybe<Array<Maybe<BulkUploadPreviewError>>>;
  providedTags?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  rows?: Maybe<Array<Maybe<Array<RowItem>>>>;
  skippedRows?: Maybe<Array<Maybe<BulkUploadPreviewError>>>;
  tagsToBeCreated?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  warnings?: Maybe<Array<Maybe<BulkUploadPreviewError>>>;
};

export type BulkUploadPreviewError = {
  __typename?: "BulkUploadPreviewError";
  message: Scalars["String"]["output"];
  rowNumber: Scalars["Int"]["output"];
};

export enum BulkUploadProcessType {
  Parse = "parse",
  Process = "process",
}

export type BulkUploadProduct = {
  __typename?: "BulkUploadProduct";
  categoryId?: Maybe<Scalars["String"]["output"]>;
  endDate?: Maybe<Scalars["String"]["output"]>;
  productId?: Maybe<Scalars["String"]["output"]>;
  startDate?: Maybe<Scalars["String"]["output"]>;
};

export type BulkUploadResult = {
  __typename?: "BulkUploadResult";
  rows?: Maybe<Array<Maybe<Array<RowItem>>>>;
};

export enum BulkUploadStatus {
  Completed = "completed",
  Failed = "failed",
  Parsed = "parsed",
  Pending = "pending",
}

export type Business = {
  __typename?: "Business";
  alpha?: Maybe<Scalars["Boolean"]["output"]>;
  businessAccountName?: Maybe<Scalars["String"]["output"]>;
  businessPhone?: Maybe<Scalars["String"]["output"]>;
  businessProducts?: Maybe<Array<Maybe<BusinessProduct>>>;
  companiesHouseAddress?: Maybe<Scalars["String"]["output"]>;
  companiesHouseName?: Maybe<Scalars["String"]["output"]>;
  companiesHouseRegisteredNumber?: Maybe<Scalars["String"]["output"]>;
  companiesHouseSize?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Not supported anymore. */
  coupon?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Not supported anymore. */
  couponDetails?: Maybe<BusinessCoupon>;
  directors?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  employeeCount?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  industryType?: Maybe<Scalars["String"]["output"]>;
  isGroup?: Maybe<Scalars["Boolean"]["output"]>;
  isGuest?: Maybe<Scalars["Boolean"]["output"]>;
  isInstantGroup?: Maybe<Scalars["Boolean"]["output"]>;
  isUnderInsurance?: Maybe<Scalars["Boolean"]["output"]>;
  isWellbeingAccess?: Maybe<Scalars["Boolean"]["output"]>;
  ownerEmail?: Maybe<Scalars["String"]["output"]>;
  ownerFirstName?: Maybe<Scalars["String"]["output"]>;
  ownerLastName?: Maybe<Scalars["String"]["output"]>;
  ownerRole?: Maybe<Scalars["String"]["output"]>;
  personsWithSignificantControl?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  policyEndDate?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Not supported anymore */
  requiresPaymentDetails?: Maybe<Scalars["Boolean"]["output"]>;
};

export enum BusinessAccessPermission {
  AddEmployee = "addEmployee",
  BulkEditEmployees = "bulkEditEmployees",
  BulkUploadEmployees = "bulkUploadEmployees",
  EditEmployee = "editEmployee",
  ExportEmployees = "exportEmployees",
  ManageAdmins = "manageAdmins",
  ManageEngagementDashboard = "manageEngagementDashboard",
  ManageExternalIntegrations = "manageExternalIntegrations",
  ManageLeaderboards = "manageLeaderboards",
  ManageTags = "manageTags",
  ManageWellbeingHub = "manageWellbeingHub",
  ViewEmployeeBasic = "viewEmployeeBasic",
  ViewEmployeeSensitive = "viewEmployeeSensitive",
  ViewProducts = "viewProducts",
  ViewResources = "viewResources",
}

export type BusinessAccessUser = {
  __typename?: "BusinessAccessUser";
  accountAccessRole?: Maybe<Scalars["String"]["output"]>;
  archived?: Maybe<Scalars["Boolean"]["output"]>;
  businessPhone?: Maybe<Scalars["String"]["output"]>;
  businessTags?: Maybe<Array<BusinessTag>>;
  email?: Maybe<Scalars["String"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  has2FAEnabled?: Maybe<Scalars["Boolean"]["output"]>;
  id: Scalars["String"]["output"];
  isOwner?: Maybe<Scalars["Boolean"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  permissions?: Maybe<Array<BusinessAccessPermission>>;
  status?: Maybe<Scalars["String"]["output"]>;
};

export type BusinessCoupon = {
  __typename?: "BusinessCoupon";
  active?: Maybe<Scalars["Boolean"]["output"]>;
  appliedForMonths?: Maybe<Scalars["Float"]["output"]>;
  couponId?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  percentage?: Maybe<Scalars["Float"]["output"]>;
  valid?: Maybe<Scalars["Boolean"]["output"]>;
  validForDays?: Maybe<Scalars["Float"]["output"]>;
};

/**
 *  TODO: rename this to EmployeeFullInfo
 *  @deprecated
 */
export type BusinessEmployee = {
  __typename?: "BusinessEmployee";
  addressCountry?: Maybe<Scalars["String"]["output"]>;
  avatar?: Maybe<Scalars["String"]["output"]>;
  dateOfBirth: Scalars["String"]["output"];
  email: Scalars["String"]["output"];
  employeeId?: Maybe<Scalars["String"]["output"]>;
  firstName: Scalars["String"]["output"];
  gender?: Maybe<Scalars["String"]["output"]>;
  joinDate?: Maybe<Scalars["String"]["output"]>;
  lastName: Scalars["String"]["output"];
  leaveDate?: Maybe<Scalars["String"]["output"]>;
  niNumber?: Maybe<Scalars["String"]["output"]>;
  products?: Maybe<Array<CustomerProduct>>;
  salary?: Maybe<Scalars["Float"]["output"]>;
  status: Scalars["String"]["output"];
  workplacePostcode?: Maybe<Scalars["String"]["output"]>;
};

export type BusinessMagicLinkResponse = {
  __typename?: "BusinessMagicLinkResponse";
  message?: Maybe<Scalars["String"]["output"]>;
  sent?: Maybe<Scalars["Boolean"]["output"]>;
};

export type BusinessPasswordUpdateInput = {
  oldPassword?: InputMaybe<Scalars["String"]["input"]>;
  password: Scalars["String"]["input"];
};

export type BusinessPasswordUpdateResponse = {
  __typename?: "BusinessPasswordUpdateResponse";
  updated?: Maybe<Scalars["Boolean"]["output"]>;
};

export type BusinessPayload = {
  __typename?: "BusinessPayload";
  business?: Maybe<Business>;
  expiresAt?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  intercomHash?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  step?: Maybe<MemberStep>;
  token?: Maybe<Scalars["String"]["output"]>;
};

export type BusinessProduct = {
  __typename?: "BusinessProduct";
  annualPremium?: Maybe<Scalars["Float"]["output"]>;
  businessAccountId?: Maybe<Scalars["String"]["output"]>;
  comission?: Maybe<Scalars["Float"]["output"]>;
  livesCount?: Maybe<Scalars["Float"]["output"]>;
  quoteNumber?: Maybe<Scalars["Int"]["output"]>;
  quoteProduct?: Maybe<Scalars["String"]["output"]>;
  quoteStatusReason?: Maybe<Scalars["String"]["output"]>;
  totalSumAssured?: Maybe<Scalars["Float"]["output"]>;
};

export type BusinessReminderResponse = {
  __typename?: "BusinessReminderResponse";
  businessAccountId?: Maybe<Scalars["String"]["output"]>;
  businessAccountName?: Maybe<Scalars["String"]["output"]>;
  daysSincePolicyStart?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  hubspotId?: Maybe<Scalars["String"]["output"]>;
  policyStartDate?: Maybe<Scalars["String"]["output"]>;
};

export type BusinessSession = {
  __typename?: "BusinessSession";
  businessDetails?: Maybe<BusinessSessionDetails>;
  user?: Maybe<BusinessAccessUser>;
};

export type BusinessSessionDetails = {
  __typename?: "BusinessSessionDetails";
  id: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  products: Array<Scalars["String"]["output"]>;
};

export type BusinessTag = {
  __typename?: "BusinessTag";
  businessAccountId: Scalars["String"]["output"];
  businessTagId: Scalars["String"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  label: Scalars["String"]["output"];
  leaderboardName?: Maybe<Scalars["String"]["output"]>;
  numberAssigned?: Maybe<Scalars["Int"]["output"]>;
};

export type BusinessTagInput = {
  description: Scalars["String"]["input"];
  label: Scalars["String"]["input"];
  leaderboardName?: InputMaybe<Scalars["String"]["input"]>;
};

export type Challenge = {
  __typename?: "Challenge";
  XPAwarded?: Maybe<Scalars["Int"]["output"]>;
  /** @deprecated Not supported anymore. */
  actions?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /** @deprecated Not supported anymore. */
  challengeTemplate?: Maybe<ChallengeTemplate>;
  /** @deprecated Not supported anymore. */
  challengeTemplateId?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["Int"]["output"]>;
  /** @deprecated Not supported anymore. */
  currentData?: Maybe<Scalars["Int"]["output"]>;
  /** @deprecated Not supported anymore. */
  currentTarget?: Maybe<Scalars["Int"]["output"]>;
  /** @deprecated Not supported anymore. */
  customer?: Maybe<User>;
  /** @deprecated Not supported anymore. */
  customerId?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Not supported anymore. */
  data?: Maybe<Array<Maybe<Scalars["Float"]["output"]>>>;
  endDateTime?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Not supported anymore. */
  endTime?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  incomingData?: Maybe<MilestoneTarget>;
  level?: Maybe<Scalars["Int"]["output"]>;
  levelId?: Maybe<Scalars["String"]["output"]>;
  levelSlotId?: Maybe<Scalars["String"]["output"]>;
  levelSlotTemplateId?: Maybe<Scalars["String"]["output"]>;
  milestoneId?: Maybe<Scalars["String"]["output"]>;
  milestoneLog?: Maybe<Array<Maybe<MilestoneLogEntry>>>;
  rating?: Maybe<Scalars["Int"]["output"]>;
  sources?: Maybe<MilestoneSourceBreakdown>;
  startDateTime?: Maybe<Scalars["String"]["output"]>;
  startTime?: Maybe<Scalars["Int"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  subtype?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Not supported anymore. */
  target?: Maybe<Array<Maybe<Scalars["Float"]["output"]>>>;
  updatedAt?: Maybe<Scalars["Int"]["output"]>;
  userId?: Maybe<Scalars["String"]["output"]>;
  yuCoinAwarded?: Maybe<Scalars["Int"]["output"]>;
};

export type ChallengeDetails = {
  __typename?: "ChallengeDetails";
  id?: Maybe<Scalars["String"]["output"]>;
  rating?: Maybe<Scalars["Int"]["output"]>;
  yuCoinAwarded?: Maybe<Scalars["Int"]["output"]>;
};

export type ChallengePayload = {
  endDateTime?: InputMaybe<Scalars["String"]["input"]>;
  startDateTime?: InputMaybe<Scalars["String"]["input"]>;
  value?: InputMaybe<Scalars["Int"]["input"]>;
};

export type ChallengeTemplate = {
  __typename?: "ChallengeTemplate";
  actions?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  challengeCompleteText?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  endTime?: Maybe<Scalars["Int"]["output"]>;
  failureDescription?: Maybe<Scalars["String"]["output"]>;
  failureTitle?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  level?: Maybe<Scalars["Int"]["output"]>;
  milestones?: Maybe<Array<Maybe<Milestone>>>;
  name?: Maybe<Scalars["String"]["output"]>;
  passive?: Maybe<Scalars["Boolean"]["output"]>;
  startTime?: Maybe<Scalars["Int"]["output"]>;
  subtype?: Maybe<Scalars["String"]["output"]>;
  successDescription?: Maybe<Scalars["String"]["output"]>;
  successTitle?: Maybe<Scalars["String"]["output"]>;
  target?: Maybe<Array<Maybe<Scalars["Float"]["output"]>>>;
  timelimit?: Maybe<Scalars["Int"]["output"]>;
  totalCoins?: Maybe<Scalars["Int"]["output"]>;
  totalXP?: Maybe<Scalars["Int"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  unit?: Maybe<Scalars["String"]["output"]>;
};

export type ChallengesPayload = {
  bundleIdentifiers?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  endDateTime: Scalars["String"]["input"];
  startDateTime: Scalars["String"]["input"];
  type: PassiveChallengeType;
  value: Scalars["Int"]["input"];
};

export type Chest = {
  __typename?: "Chest";
  buffs: Array<Buff>;
  type?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["Int"]["output"]>;
};

export type CoinLedger = {
  __typename?: "CoinLedger";
  currentBalance?: Maybe<Scalars["Int"]["output"]>;
  currentLevel?: Maybe<Scalars["Int"]["output"]>;
  currentStreak?: Maybe<Scalars["Int"]["output"]>;
  nextLevelAvailableAt?: Maybe<Scalars["String"]["output"]>;
  nextStreakAvailableAt?: Maybe<Scalars["String"]["output"]>;
  totalStreak?: Maybe<Scalars["Int"]["output"]>;
  yuniversalLevel?: Maybe<Scalars["Int"]["output"]>;
  yuniversalMap?: Maybe<Scalars["Int"]["output"]>;
};

export type CompanySetting = {
  __typename?: "CompanySetting";
  category: Scalars["String"]["output"];
  description: Scalars["String"]["output"];
  key: Scalars["String"]["output"];
  label?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  unit?: Maybe<Scalars["String"]["output"]>;
  valueType?: Maybe<Scalars["String"]["output"]>;
  values: TeamSettingValue;
};

export type ConfirmedPaymentCard = {
  __typename?: "ConfirmedPaymentCard";
  cardBrand: Scalars["String"]["output"];
  cardLast4: Scalars["String"]["output"];
  cardValidTill: Scalars["String"]["output"];
  customerPaymentMethodId: Scalars["String"]["output"];
};

export type Connection = {
  __typename?: "Connection";
  isConnected?: Maybe<Scalars["Boolean"]["output"]>;
  lastUpdated?: Maybe<Scalars["Int"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
};

export type ContentItem =
  | ContentItemAccordion
  | ContentItemBox
  | ContentItemBoxOptionCard
  | ContentItemButton
  | ContentItemComparisonTableSelectPackage
  | ContentItemDatePicker
  | ContentItemDependants
  | ContentItemDropdownInput
  | ContentItemForm
  | ContentItemHeaderBar
  | ContentItemHint
  | ContentItemImage
  | ContentItemInfoCard
  | ContentItemKeyValueBox
  | ContentItemLinearGradient
  | ContentItemLottie
  | ContentItemMarkdown
  | ContentItemMarkdownBlock
  | ContentItemMedia
  | ContentItemPad
  | ContentItemPerks
  | ContentItemPill
  | ContentItemProcessingTimer
  | ContentItemProgressBar
  | ContentItemRadio
  | ContentItemRowIconTextBanner
  | ContentItemSectionHeading
  | ContentItemSelectScheme
  | ContentItemSelectedPackageCard
  | ContentItemSexPicker
  | ContentItemShowHideBalance
  | ContentItemStages
  | ContentItemSwitch
  | ContentItemTable
  | ContentItemText
  | ContentItemTextGroup
  | ContentItemTextInput
  | ContentItemWrapper
  | ContentItemYuCoinPower;

export type ContentItemAccordion = {
  __typename?: "ContentItemAccordion";
  headerIcon?: Maybe<RemoteImage>;
  heading?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  infoIcon?: Maybe<RemoteImage>;
  items: Array<ContentItemAccordionItem>;
  styles?: Maybe<Array<SduiStyle>>;
  subheading?: Maybe<Scalars["String"]["output"]>;
};

export type ContentItemAccordionItem = {
  __typename?: "ContentItemAccordionItem";
  info?: Maybe<ContentItemAccordionItemInfo>;
  leftText: Scalars["String"]["output"];
  rightTextBody?: Maybe<Scalars["String"]["output"]>;
  rightTextLabel?: Maybe<Scalars["String"]["output"]>;
};

export type ContentItemAccordionItemInfo = {
  __typename?: "ContentItemAccordionItemInfo";
  onPress?: Maybe<SduiAction>;
};

export type ContentItemAgePercentCoverPicker = {
  __typename?: "ContentItemAgePercentCoverPicker";
  agePickerButtonRightIconImageUrl: Scalars["String"]["output"];
  /** Your policy will stop when you are ${age} */
  ageText?: Maybe<ContentItemMarkdown>;
  answerKeyAge: Scalars["String"]["output"];
  answerKeyAgeDefaultValue: Scalars["Int"]["output"];
  answerKeyCoverType: Scalars["String"]["output"];
  answerKeyCoverTypeDefaultValue: CoverType;
  answerKeyMaxSalaryPercent: Scalars["String"]["output"];
  answerKeyMaxSalaryPercentDefaultValue: Scalars["Int"]["output"];
  answerKeyPercent: Scalars["String"]["output"];
  answerKeyPercentDefaultValue: Scalars["Int"]["output"];
  /** per month */
  costPayoutBenefitCostSchedule?: Maybe<Scalars["String"]["output"]>;
  /** In the event of your passing... */
  costPayoutBenefitHeading?: Maybe<Scalars["String"]["output"]>;
  /** a month until */
  costPayoutBenefitPayoutSchedule?: Maybe<Scalars["String"]["output"]>;
  customCover?: Maybe<ContentItemCoverPickerCustomCover>;
  id: Scalars["ID"]["output"];
  options: Array<ContentItemAgePercentCoverPickerAgeOption>;
  percentsToDefault: Array<Scalars["Int"]["output"]>;
  /**
   * Deprecated, replaced with correctly spelled field restrictedPercentInfoCardText
   * @deprecated replaced with correctly spelled field restrictedPercentInfoCardText
   */
  restictedPercentInfoCardText?: Maybe<ContentItemMarkdown>;
  /** Based on your info you can only have ${percent} */
  restrictedPercentInfoCardText?: Maybe<ContentItemMarkdown>;
  styles?: Maybe<Array<SduiStyle>>;
  /** what percentage of your... */
  topHeading?: Maybe<Scalars["String"]["output"]>;
  /** User age */
  userAge: Scalars["Int"]["output"];
};

export type ContentItemAgePercentCoverPickerAgeOption = {
  __typename?: "ContentItemAgePercentCoverPickerAgeOption";
  age: Scalars["Int"]["output"];
  options: Array<ContentItemAgePercentCoverPickerPercentOption>;
};

export type ContentItemAgePercentCoverPickerPercentOption = {
  __typename?: "ContentItemAgePercentCoverPickerPercentOption";
  cost: Scalars["String"]["output"];
  coverType: CoverType;
  monthlyPayout: Scalars["String"]["output"];
  value: Scalars["Int"]["output"];
};

export type ContentItemAnswerKeys = {
  __typename?: "ContentItemAnswerKeys";
  ageToEnd?: Maybe<Scalars["String"]["output"]>;
  coverType?: Maybe<Scalars["String"]["output"]>;
  salaryPercent?: Maybe<Scalars["String"]["output"]>;
  worldId?: Maybe<Scalars["String"]["output"]>;
};

export type ContentItemAppDownloadPrompt = {
  __typename?: "ContentItemAppDownloadPrompt";
  footerText?: Maybe<Scalars["String"]["output"]>;
  headingText?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  qrCodeImage?: Maybe<RemoteImage>;
  styles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemBeneficiariesSection = {
  __typename?: "ContentItemBeneficiariesSection";
  id: Scalars["ID"]["output"];
  productId: Scalars["String"]["output"];
  styles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemBox = {
  __typename?: "ContentItemBox";
  canCopy?: Maybe<Scalars["Boolean"]["output"]>;
  id: Scalars["ID"]["output"];
  markdown: Scalars["String"]["output"];
  parsedMarkdown?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ContentItemBoxOptionCard = {
  __typename?: "ContentItemBoxOptionCard";
  description?: Maybe<Scalars["String"]["output"]>;
  /** Supported RN version 3.96.0 */
  descriptionNumberOfLines?: Maybe<Scalars["Int"]["output"]>;
  descriptionTextType?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  image?: Maybe<RemoteImage>;
  /** Supported RN version 3.96.0 */
  innerHeight?: Maybe<Scalars["Int"]["output"]>;
  onPress?: Maybe<SduiAction>;
  styles?: Maybe<Array<SduiStyle>>;
  /** Supported RN version 3.96.0 */
  subtitle?: Maybe<Scalars["String"]["output"]>;
  /** Supported RN version 3.96.0 */
  subtitleTextType?: Maybe<Scalars["String"]["output"]>;
  /** Supported RN version 3.96.0 */
  subtitleWrapperStyles?: Maybe<Array<SduiStyle>>;
  title?: Maybe<Scalars["String"]["output"]>;
  /** Supported RN version 3.96.0 */
  titleNumberOfLines?: Maybe<Scalars["Int"]["output"]>;
  /** Supported RN version 3.96.0 */
  titleWrapperStyles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemButton = {
  __typename?: "ContentItemButton";
  backgroundColor?: Maybe<Scalars["String"]["output"]>;
  borderColor?: Maybe<Scalars["String"]["output"]>;
  buttonSize?: Maybe<ContentItemButtonSize>;
  /** Supported RN version 3.70.0 */
  containerStyles?: Maybe<Array<SduiStyle>>;
  disabledState?: Maybe<Scalars["String"]["output"]>;
  event?: Maybe<SduiAction>;
  icon?: Maybe<RemoteImage>;
  id: Scalars["ID"]["output"];
  isDisabled?: Maybe<Scalars["Boolean"]["output"]>;
  label: Scalars["String"]["output"];
  onPress?: Maybe<SduiAction>;
  rightIcon?: Maybe<RemoteImage>;
  styles?: Maybe<Array<SduiStyle>>;
  textColor?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<ContentItemButtonType>;
  /** @deprecated Use onPress */
  uri?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

export enum ContentItemButtonSize {
  Fill = "Fill",
  Large = "Large",
  Medium = "Medium",
  Small = "Small",
}

export enum ContentItemButtonType {
  Link = "link",
  Primary = "primary",
  Secondary = "secondary",
  Tertiary = "tertiary",
}

export type ContentItemCollapsingGenericHeader = {
  __typename?: "ContentItemCollapsingGenericHeader";
  collapsedRightIcon?: Maybe<RemoteImage>;
  id: Scalars["ID"]["output"];
  onPressRightIcon?: Maybe<SduiAction>;
  rightIcon?: Maybe<RemoteImage>;
  styles?: Maybe<Array<SduiStyle>>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ContentItemCollapsingHeaderAgePercentProductInfo = {
  __typename?: "ContentItemCollapsingHeaderAgePercentProductInfo";
  data?: Maybe<ContentItemCollapsingHeaderAgePercentProductInfoData>;
  /**
   * Takes a ContentItem's id as value
   * Header will expand once the ContentItem is in view
   * target ContentItem needs to implement setComponentsLayout from ProductStepContext
   */
  expandOnComponentId?: Maybe<Scalars["String"]["output"]>;
  /**
   * Overrides everything else, set to the number of pixels scrolled before the header expands.
   * Set to 0 if it's always expanded
   */
  expandThreshold?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["ID"]["output"];
  styles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemCollapsingHeaderAgePercentProductInfoData = {
  __typename?: "ContentItemCollapsingHeaderAgePercentProductInfoData";
  agePercentCoverList: Array<ContentItemAgePercentCoverPickerAgeOption>;
  answerKeys: ContentItemAnswerKeys;
  defaultActiveAgeToEnd?: Maybe<Scalars["String"]["output"]>;
  defaultActiveCoverType?: Maybe<Scalars["String"]["output"]>;
  defaultActiveSalaryPercent?: Maybe<Scalars["String"]["output"]>;
  defaultActiveWorldId?: Maybe<Scalars["String"]["output"]>;
  monthlyCostDynamicCopy: Scalars["String"]["output"];
  monthlyCostReplacementString: Scalars["String"]["output"];
  salaryPercentDynamicCopy: Scalars["String"]["output"];
  salaryPercentReplacementString: Scalars["String"]["output"];
};

export type ContentItemCollapsingHeaderProductInfo = {
  __typename?: "ContentItemCollapsingHeaderProductInfo";
  answerKey: Scalars["String"]["output"];
  coverList: Array<ContentItemCoverListItem>;
  expandOnComponentId?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  styles?: Maybe<Array<SduiStyle>>;
  type?: Maybe<ContentItemCollapsingHeaderProductInfoType>;
};

export enum ContentItemCollapsingHeaderProductInfoType {
  CoverOptions = "coverOptions",
  Default = "default",
}

export type ContentItemComparisonTableSelectPackage = {
  __typename?: "ContentItemComparisonTableSelectPackage";
  answerKey: Scalars["String"]["output"];
  benefitSets?: Maybe<Array<ContentItemComparisonTableSelectPackageBenefitSet>>;
  id: Scalars["ID"]["output"];
  onConfirm: SduiAction;
};

export type ContentItemComparisonTableSelectPackageBenefit = {
  __typename?: "ContentItemComparisonTableSelectPackageBenefit";
  benefit?: Maybe<Scalars["String"]["output"]>;
  category?: Maybe<Scalars["String"]["output"]>;
  payload?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type ContentItemComparisonTableSelectPackageBenefitSet = {
  __typename?: "ContentItemComparisonTableSelectPackageBenefitSet";
  benefits?: Maybe<Array<ContentItemComparisonTableSelectPackageBenefit>>;
  cost?: Maybe<Scalars["String"]["output"]>;
  costValue?: Maybe<Scalars["Int"]["output"]>;
  employeeFunded?: Maybe<Scalars["Boolean"]["output"]>;
  level: Scalars["String"]["output"];
};

export type ContentItemConfirm = {
  __typename?: "ContentItemConfirm";
  answerKey: Scalars["String"]["output"];
  checkboxType?: Maybe<ContentItemConfirmCheckboxType>;
  id: Scalars["ID"]["output"];
  styles?: Maybe<Array<SduiStyle>>;
  text: Scalars["String"]["output"];
};

export enum ContentItemConfirmCheckboxType {
  Circular = "circular",
  Cubic = "cubic",
}

export type ContentItemCostPayoutBenefitCard = {
  __typename?: "ContentItemCostPayoutBenefitCard";
  benefitDescription: Scalars["String"]["output"];
  benefitIntervalMarkdown: Scalars["String"]["output"];
  benefitValue: Scalars["String"]["output"];
  costDescription: Scalars["String"]["output"];
  costValue: Scalars["String"]["output"];
  coverType: CoverType;
  id: Scalars["ID"]["output"];
  styles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemCoverListItem = {
  __typename?: "ContentItemCoverListItem";
  collapsingHeaderProductInfoHeading?: Maybe<Scalars["String"]["output"]>;
  coverType?: Maybe<CoverType>;
  minValue?: Maybe<Scalars["Int"]["output"]>;
  monthlyCost?: Maybe<Scalars["String"]["output"]>;
  monthlyCostSuffix?: Maybe<Scalars["String"]["output"]>;
  monthlyPayout?: Maybe<Scalars["String"]["output"]>;
  percentCovered?: Maybe<Scalars["Int"]["output"]>;
  productPreviewMarkdown?: Maybe<Scalars["String"]["output"]>;
  slotBackgroundUrl?: Maybe<RemoteImage>;
};

export type ContentItemCoverPicker = {
  __typename?: "ContentItemCoverPicker";
  answerKey: Scalars["String"]["output"];
  answerKeyDefaultValue: Scalars["Int"]["output"];
  customCover?: Maybe<ContentItemCoverPickerCustomCover>;
  disabledState?: Maybe<Scalars["String"]["output"]>;
  hasSelectedCustomCover: Scalars["Boolean"]["output"];
  id: Scalars["ID"]["output"];
  onSubmit?: Maybe<SduiAction>;
  options?: Maybe<Array<ContentItemCoverPickerOption>>;
  styles?: Maybe<Array<SduiStyle>>;
  title: ContentItemText;
};

export type ContentItemCoverPickerCustomCover = {
  __typename?: "ContentItemCoverPickerCustomCover";
  button: ContentItemButton;
  itemsPicker: ContentItemScrollableItemsPicker;
  title: Scalars["String"]["output"];
};

export type ContentItemCoverPickerOption = {
  __typename?: "ContentItemCoverPickerOption";
  coverType: CoverType;
  heading: Scalars["String"]["output"];
  subheading: Scalars["String"]["output"];
  value: Scalars["Int"]["output"];
};

export type ContentItemDatePicker = {
  __typename?: "ContentItemDatePicker";
  answerKey: Scalars["String"]["output"];
  buttonLeftIcon?: Maybe<RemoteImage>;
  buttonRightIcon?: Maybe<RemoteImage>;
  buttonSize: ContentItemButtonSize;
  buttonStyles?: Maybe<Array<SduiStyle>>;
  dateFormat: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  initialDate?: Maybe<Scalars["String"]["output"]>;
  label: Scalars["String"]["output"];
  labelWrapperStyles?: Maybe<Array<SduiStyle>>;
  maxDate: Scalars["String"]["output"];
  minDate: Scalars["String"]["output"];
  pickerStyles?: Maybe<Array<SduiStyle>>;
  styles?: Maybe<Array<SduiStyle>>;
  subLabel?: Maybe<Scalars["String"]["output"]>;
};

export type ContentItemDependants = {
  __typename?: "ContentItemDependants";
  answerKey: Scalars["String"]["output"];
  dependants: Array<ContentItemDependantsItem>;
  dependantsTemplateJsonString: Scalars["String"]["output"];
  disabledState: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  infoPanel?: Maybe<ContentItemDependantsInfoPanel>;
  maxDependantAge: Scalars["Int"]["output"];
  maxDependants: Scalars["Int"]["output"];
  minDependantAge?: Maybe<Scalars["Int"]["output"]>;
  onSubmit: SduiAction;
  sexDescription?: Maybe<Scalars["String"]["output"]>;
  sexTitle?: Maybe<Scalars["String"]["output"]>;
  styles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemDependantsInfoPanel = {
  __typename?: "ContentItemDependantsInfoPanel";
  markdown: Scalars["String"]["output"];
  type: ContentItemRowIconTextBannerType;
};

export type ContentItemDependantsItem = {
  __typename?: "ContentItemDependantsItem";
  dateOfBirth: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  lastName: Scalars["String"]["output"];
  sex: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type ContentItemDropdownInput = {
  __typename?: "ContentItemDropdownInput";
  answerKey: Scalars["String"]["output"];
  heading?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  options: Array<Maybe<ContentItemDropdownInputOptions>>;
  selectInstruction?: Maybe<Scalars["String"]["output"]>;
  styles?: Maybe<Array<SduiStyle>>;
  validation?: Maybe<Array<Maybe<ContentItemTextInputValidation>>>;
};

export type ContentItemDropdownInputOptions = {
  __typename?: "ContentItemDropdownInputOptions";
  label?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

export type ContentItemFade = {
  __typename?: "ContentItemFade";
  id: Scalars["ID"]["output"];
};

export type ContentItemForm = {
  __typename?: "ContentItemForm";
  elements?: Maybe<Array<Maybe<ContentItemFormElements>>>;
};

export type ContentItemFormElements =
  | ContentItemFormSelectInput
  | ContentItemFormSubmitButton
  | ContentItemFormTextInput;

export type ContentItemFormInputValidation = {
  __typename?: "ContentItemFormInputValidation";
  message: Scalars["String"]["output"];
  regex: Scalars["String"]["output"];
};

export type ContentItemFormSelectInput = {
  __typename?: "ContentItemFormSelectInput";
  defaultOption?: Maybe<ContentItemFormSelectInputOptions>;
  icon?: Maybe<RemoteImage>;
  id: Scalars["ID"]["output"];
  modalPlaceholder: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  options: Array<Maybe<ContentItemFormSelectInputOptions>>;
  placeholder: Scalars["String"]["output"];
  validation?: Maybe<Array<Maybe<ContentItemFormInputValidation>>>;
};

export type ContentItemFormSelectInputOptions = {
  __typename?: "ContentItemFormSelectInputOptions";
  label?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

export type ContentItemFormSubmitButton = {
  __typename?: "ContentItemFormSubmitButton";
  id: Scalars["ID"]["output"];
  label: Scalars["String"]["output"];
};

export type ContentItemFormTextInput = {
  __typename?: "ContentItemFormTextInput";
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  icon?: Maybe<RemoteImage>;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  placeholder: Scalars["String"]["output"];
  type?: Maybe<ContentItemFormTextInputType>;
  validation?: Maybe<Array<Maybe<ContentItemFormInputValidation>>>;
};

export enum ContentItemFormTextInputType {
  Email = "email",
  Number = "number",
  Text = "text",
}

export type ContentItemFullScreenLottieSwiper = {
  __typename?: "ContentItemFullScreenLottieSwiper";
  autoPlaySpeedMs: Scalars["Int"]["output"];
  button: ContentItemButton;
  close: ContentItemFullScreenSwiperClose;
  ctaMinVisibleIndex?: Maybe<Scalars["Int"]["output"]>;
  dismissMinVisibleIndex: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  items: Array<ContentItemLottie>;
  theme: ContentItemFullScreenSwiperTheme;
  title: Scalars["String"]["output"];
};

export type ContentItemFullScreenSwiper = {
  __typename?: "ContentItemFullScreenSwiper";
  autoPlaySpeedMs: Scalars["Int"]["output"];
  button: ContentItemButton;
  close: ContentItemFullScreenSwiperClose;
  ctaMinVisibleIndex?: Maybe<Scalars["Int"]["output"]>;
  dismissMinVisibleIndex: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  items: Array<ContentItemFullScreenSwiperItem>;
  theme: ContentItemFullScreenSwiperTheme;
  title: Scalars["String"]["output"];
};

export type ContentItemFullScreenSwiperClose = {
  __typename?: "ContentItemFullScreenSwiperClose";
  icon: RemoteImage;
  onPress: SduiAction;
};

export type ContentItemFullScreenSwiperItem = {
  __typename?: "ContentItemFullScreenSwiperItem";
  backgroundImage: RemoteImage;
  heading: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  paragraph: Scalars["String"]["output"];
  styles?: Maybe<Array<SduiStyle>>;
  title: Scalars["String"]["output"];
};

export type ContentItemFullScreenSwiperTheme = {
  __typename?: "ContentItemFullScreenSwiperTheme";
  primaryColor: Scalars["String"]["output"];
  progressBarBackgroundColor?: Maybe<Scalars["String"]["output"]>;
  progressBarForegroundColor?: Maybe<Scalars["String"]["output"]>;
  titleColor?: Maybe<Scalars["String"]["output"]>;
};

export type ContentItemGpDetails = {
  __typename?: "ContentItemGpDetails";
  answerKey: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  onSubmit: SduiAction;
};

export type ContentItemHeaderBar = {
  __typename?: "ContentItemHeaderBar";
  /** Supported RN version 3.70.0 */
  backgroundColor?: Maybe<Scalars["String"]["output"]>;
  /** Supported RN version 3.63.0 */
  color?: Maybe<Scalars["String"]["output"]>;
  heading?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  leftIcon?: Maybe<Scalars["String"]["output"]>;
  logo?: Maybe<Scalars["String"]["output"]>;
  onLeftIconPress?: Maybe<SduiAction>;
  onRightIconPress?: Maybe<SduiAction>;
  publishKeyHeight?: Maybe<Scalars["String"]["output"]>;
  rightIcon?: Maybe<Scalars["String"]["output"]>;
};

export type ContentItemHint = {
  __typename?: "ContentItemHint";
  description: Scalars["String"]["output"];
  hintImage: RemoteImage;
  hintTitle: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  onPress?: Maybe<SduiAction>;
  styles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemImage = {
  __typename?: "ContentItemImage";
  id: Scalars["ID"]["output"];
  image?: Maybe<RemoteImage>;
  /** Supported RN version 3.48.0 */
  onPress?: Maybe<SduiAction>;
  /** Supported RN version 3.48.0 */
  size?: Maybe<ContentItemImageSize>;
  styles?: Maybe<Array<SduiStyle>>;
  wrapperStyles?: Maybe<Array<SduiStyle>>;
};

export enum ContentItemImageSize {
  Fill = "fill",
}

/** A tertiary button that can have an infinite amount of info in it. */
export type ContentItemInfoButton = {
  __typename?: "ContentItemInfoButton";
  active: ContentItemInfoButtonActive;
  answerKeys?: Maybe<Array<Scalars["String"]["output"]>>;
  id: Scalars["ID"]["output"];
  /** Default passive label(placeholder) */
  label: Scalars["String"]["output"];
  leftIcon?: Maybe<RemoteImage>;
  onPress?: Maybe<SduiAction>;
  rightIcon?: Maybe<RemoteImage>;
};

export type ContentItemInfoButtonActive = {
  __typename?: "ContentItemInfoButtonActive";
  label: Scalars["String"]["output"];
  leftIcon?: Maybe<RemoteImage>;
  rightIcon?: Maybe<RemoteImage>;
};

export type ContentItemInfoCard = {
  __typename?: "ContentItemInfoCard";
  hyperlink?: Maybe<Hyperlink>;
  id: Scalars["ID"]["output"];
  image?: Maybe<RemoteImage>;
  imageStyles?: Maybe<Array<SduiStyle>>;
  markdown: Scalars["String"]["output"];
  markdownStyles?: Maybe<Scalars["String"]["output"]>;
  styles?: Maybe<Array<SduiStyle>>;
  textPosition?: Maybe<ContentItemInfoCardTextPosition>;
  title?: Maybe<Scalars["String"]["output"]>;
  wrapperStyles?: Maybe<Array<SduiStyle>>;
};

export enum ContentItemInfoCardTextPosition {
  Left = "left",
  Right = "right",
}

export type ContentItemKeyValueBox = {
  __typename?: "ContentItemKeyValueBox";
  id: Scalars["ID"]["output"];
  key: Scalars["String"]["output"];
  styles?: Maybe<Array<SduiStyle>>;
  value: Scalars["String"]["output"];
  wrapperStyles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemLinearGradient = {
  __typename?: "ContentItemLinearGradient";
  colors: Array<Scalars["String"]["output"]>;
  end?: Maybe<LinearGradientOrientation>;
  id: Scalars["ID"]["output"];
  start?: Maybe<LinearGradientOrientation>;
  styles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemList = {
  __typename?: "ContentItemList";
  id: Scalars["ID"]["output"];
  items: Array<ContentItemListItem>;
  wrapperStyles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemListItem = {
  __typename?: "ContentItemListItem";
  circle: ContentItemListItemCircle;
  id: Scalars["ID"]["output"];
  styles?: Maybe<Array<SduiStyle>>;
  text: ContentItemListItemText;
};

export type ContentItemListItemCircle = {
  __typename?: "ContentItemListItemCircle";
  backgroundColour: Scalars["String"]["output"];
  colour: Scalars["String"]["output"];
};

export type ContentItemListItemText = {
  __typename?: "ContentItemListItemText";
  colour: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type ContentItemLottie = {
  __typename?: "ContentItemLottie";
  aspectRatio?: Maybe<Scalars["Float"]["output"]>;
  autoPlay: Scalars["Boolean"]["output"];
  id: Scalars["ID"]["output"];
  loop: Scalars["Boolean"]["output"];
  onAnimationEnd?: Maybe<SduiAction>;
  styles?: Maybe<Array<SduiStyle>>;
  uri: Scalars["String"]["output"];
};

export type ContentItemMarkdown = {
  __typename?: "ContentItemMarkdown";
  id: Scalars["ID"]["output"];
  markdown: Scalars["String"]["output"];
  markdownContainerStyle?: Maybe<Array<SduiStyle>>;
  markdownStyles?: Maybe<Scalars["String"]["output"]>;
  parsedMarkdown?: Maybe<Scalars["String"]["output"]>;
  perkId?: Maybe<Scalars["String"]["output"]>;
  styles?: Maybe<Array<SduiStyle>>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ContentItemMarkdownBlock = {
  __typename?: "ContentItemMarkdownBlock";
  descriptionMarkdown?: Maybe<Scalars["String"]["output"]>;
  descriptionMarkdownContainerStyles?: Maybe<Array<SduiStyle>>;
  descriptionMarkdownStyles?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  styles?: Maybe<Array<SduiStyle>>;
  titleMarkdown?: Maybe<Scalars["String"]["output"]>;
  titleMarkdownContainerStyles?: Maybe<Array<SduiStyle>>;
  titleMarkdownStyles?: Maybe<Scalars["String"]["output"]>;
};

export type ContentItemMedia = {
  __typename?: "ContentItemMedia";
  description: Scalars["String"]["output"];
  duration: Scalars["Int"]["output"];
  eventType: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lottie?: Maybe<ContentItemLottie>;
  mediaLogo: RemoteImage;
  mediaSubtitle: Scalars["String"]["output"];
  mediaTitle: Scalars["String"]["output"];
  modalCopy: ContentItemMediaModalCopy;
  onEnd?: Maybe<SduiAction>;
  onLeftIconPress?: Maybe<SduiAction>;
  onRightIconPress?: Maybe<SduiAction>;
  onStart?: Maybe<SduiAction>;
  orientation: ContentItemMediaOrientation;
  poster: RemoteImage;
  shortDescription: Scalars["String"]["output"];
  showTimer: Scalars["Boolean"]["output"];
  source: RemoteMedia;
  sourceType: Scalars["String"]["output"];
  stars?: Maybe<Scalars["Int"]["output"]>;
  startChallengeButtonLabel: Scalars["String"]["output"];
  startErrorMessage: Scalars["String"]["output"];
  tag?: Maybe<Scalars["String"]["output"]>;
  theme: Scalars["String"]["output"];
  thumbnail: RemoteImage;
  videoLogo?: Maybe<RemoteImage>;
  yuCoin?: Maybe<Scalars["Int"]["output"]>;
};

export type ContentItemMediaModalCopy = {
  __typename?: "ContentItemMediaModalCopy";
  cancel: ContentItemMediaModalCopyItem;
  error: ContentItemMediaModalCopyItem;
};

export type ContentItemMediaModalCopyItem = {
  __typename?: "ContentItemMediaModalCopyItem";
  ctaLabel: Scalars["String"]["output"];
  ctaLabelSecondary: Scalars["String"]["output"];
  heading: Scalars["String"]["output"];
  subheading: Scalars["String"]["output"];
};

export enum ContentItemMediaOrientation {
  Landscape = "landscape",
  Portrait = "portrait",
}

export type ContentItemMultiButton = {
  __typename?: "ContentItemMultiButton";
  answerKey: Scalars["String"]["output"];
  buttons: Array<ContentItemButton>;
  id: Scalars["ID"]["output"];
  styles?: Maybe<Array<SduiStyle>>;
  value?: Maybe<Scalars["String"]["output"]>;
};

export type ContentItemMultiSelect = {
  __typename?: "ContentItemMultiSelect";
  answerKey: Scalars["String"]["output"];
  choices: Array<ContentItemMultiSelectChoice>;
  id: Scalars["ID"]["output"];
};

export type ContentItemMultiSelectChoice = {
  __typename?: "ContentItemMultiSelectChoice";
  icon?: Maybe<RemoteImage>;
  id: Scalars["ID"]["output"];
  label: Scalars["String"]["output"];
};

export type ContentItemOverlay = {
  __typename?: "ContentItemOverlay";
  buttons: Array<ContentItemButton>;
  id: Scalars["ID"]["output"];
  markdown: Scalars["String"]["output"];
};

export type ContentItemPackageCard = {
  __typename?: "ContentItemPackageCard";
  bonusEarnRate: Scalars["Int"]["output"];
  coverType: CoverType;
  header: ContentItemPackageCardHeader;
  id: Scalars["ID"]["output"];
  packageMaxValue: Scalars["Int"]["output"];
  powers?: Maybe<Array<ContentItemPackageCardPower>>;
  value: Scalars["Int"]["output"];
};

export type ContentItemPackageCardHeader = {
  __typename?: "ContentItemPackageCardHeader";
  backgroundUrl: RemoteImage;
  slotInfo: ContentItemPackageCardSlotInfo;
};

export type ContentItemPackageCardPower = {
  __typename?: "ContentItemPackageCardPower";
  description: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  isLocked?: Maybe<Scalars["Boolean"]["output"]>;
  leftIcon: RemoteImage;
  rightIcon?: Maybe<RemoteImage>;
  title: Scalars["String"]["output"];
};

export type ContentItemPackageCardSlotInfo = {
  __typename?: "ContentItemPackageCardSlotInfo";
  backgroundUrl: RemoteImage;
  logoUrl?: Maybe<RemoteImage>;
  name: Scalars["String"]["output"];
  nameSecondary?: Maybe<Scalars["String"]["output"]>;
  status: YuProductStatus;
};

export type ContentItemPackageCards = {
  __typename?: "ContentItemPackageCards";
  answerKey: Scalars["String"]["output"];
  answerKeyDefaultValue: Scalars["Int"]["output"];
  /**
   * Optional field that can dynamically filter packageCards field on client
   * Based on dynamic data, retrieved by accessing this key
   * Supported at RN client version >=3.23.0
   */
  filterBasedOnAnswerKey?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  packageCards?: Maybe<Array<ContentItemPackageCard>>;
};

export type ContentItemPad = {
  __typename?: "ContentItemPad";
  amount: Scalars["Int"]["output"];
  dynamicStyles?: Maybe<Array<SduiStyleDynamic>>;
  id: Scalars["ID"]["output"];
  pointerEvents?: Maybe<RnViewPointerEvents>;
  styles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemPercentageBox = {
  __typename?: "ContentItemPercentageBox";
  primaryColour: Scalars["String"]["output"];
  secondaryColour: Scalars["String"]["output"];
  selectedCoverType: Scalars["String"]["output"];
  selectedValue: Scalars["Int"]["output"];
};

export type ContentItemPerks = {
  __typename?: "ContentItemPerks";
  coverType: CoverType;
  footerText?: Maybe<Scalars["String"]["output"]>;
  headingText?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  packageCard?: Maybe<ContentItemPerksPackageCard>;
  styles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemPerksComparison = {
  __typename?: "ContentItemPerksComparison";
  description?: Maybe<Scalars["String"]["output"]>;
  disabledState?: Maybe<Scalars["String"]["output"]>;
  header?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  items: Array<PerksComparisonItems>;
  onSubmit?: Maybe<SduiAction>;
};

export type ContentItemPerksPackageCard = {
  __typename?: "ContentItemPerksPackageCard";
  powers?: Maybe<Array<ContentItemPackageCardPower>>;
  showPlus?: Maybe<Scalars["Boolean"]["output"]>;
  yuCoinPower: Scalars["Int"]["output"];
  yuCoinPowerActive: Scalars["Boolean"]["output"];
};

export type ContentItemPersonalProductDocument = {
  __typename?: "ContentItemPersonalProductDocument";
  id: Scalars["ID"]["output"];
  leftIcon: RemoteImage;
  linkLabel: Scalars["String"]["output"];
  rightIcon: RemoteImage;
  url: Scalars["String"]["output"];
};

export type ContentItemPersonalProductDocuments = {
  __typename?: "ContentItemPersonalProductDocuments";
  documents: Array<ContentItemPersonalProductDocument>;
  headingImage: ContentItemImage;
  headingMarkdown: ContentItemMarkdown;
  id: Scalars["ID"]["output"];
};

export type ContentItemPersonalProductFaq = {
  __typename?: "ContentItemPersonalProductFaq";
  accessButtonText: Scalars["String"]["output"];
  content: ContentItemMarkdown;
  id: Scalars["ID"]["output"];
  links?: Maybe<Array<ContentItemPersonalProductFaqLink>>;
};

export type ContentItemPersonalProductFaqLink = {
  __typename?: "ContentItemPersonalProductFaqLink";
  contentItemDocumentId: Scalars["ID"]["output"];
  id: Scalars["ID"]["output"];
  label: Scalars["String"]["output"];
};

export type ContentItemPersonalProductFaqs = {
  __typename?: "ContentItemPersonalProductFaqs";
  faqs: Array<ContentItemPersonalProductFaq>;
  headingImage: ContentItemImage;
  headingMarkdown: ContentItemMarkdown;
  id: Scalars["ID"]["output"];
};

export type ContentItemPersonalProductInfo = {
  __typename?: "ContentItemPersonalProductInfo";
  coverType: CoverType;
  description: ContentItemMarkdown;
  flatListItemOverlayStyles?: Maybe<Array<SduiStyle>>;
  id: Scalars["ID"]["output"];
  largeProviderImageUrl?: Maybe<RemoteImage>;
  partType?: Maybe<AvatarPartType>;
  providerImageUrl?: Maybe<RemoteImage>;
  providerNameDescription?: Maybe<Scalars["String"]["output"]>;
  selectedYuWorld?: Maybe<YuWorld>;
  swiperTopText?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
};

export type ContentItemPersonalProductPreview = {
  __typename?: "ContentItemPersonalProductPreview";
  answerKey: Scalars["String"]["output"];
  answerKeyDefaultValue: Scalars["Int"]["output"];
  coverExpirationDate: Scalars["String"]["output"];
  coverList: Array<ContentItemCoverListItem>;
  hyperlink?: Maybe<ContentItemPersonalProductPreviewHyperlink>;
  id: Scalars["ID"]["output"];
  percentageBox?: Maybe<ContentItemPercentageBox>;
  showYumoji: Scalars["Boolean"]["output"];
  styles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemPersonalProductPreviewHyperlink = {
  __typename?: "ContentItemPersonalProductPreviewHyperlink";
  leftIcon?: Maybe<RemoteImage>;
  onPress: SduiAction;
  title: Scalars["String"]["output"];
};

export type ContentItemPersonalProductReviewItem = {
  __typename?: "ContentItemPersonalProductReviewItem";
  heading: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  leftIcon: RemoteImage;
  onPress?: Maybe<SduiAction>;
  rightIcon?: Maybe<RemoteImage>;
  stepKey: Scalars["String"]["output"];
  subheading: Scalars["String"]["output"];
};

export type ContentItemPersonalProductSelectPaymentButton = {
  __typename?: "ContentItemPersonalProductSelectPaymentButton";
  applePayEnabled: Scalars["Boolean"]["output"];
  button: ContentItemInfoButton;
  companyCountryCode: Scalars["String"]["output"];
  companyName: Scalars["String"]["output"];
  googlePayEnabled: Scalars["Boolean"]["output"];
  id: Scalars["ID"]["output"];
  label?: Maybe<Scalars["String"]["output"]>;
  onSubmit?: Maybe<SduiAction>;
  themeStyle: Scalars["String"]["output"];
};

export type ContentItemPill = {
  __typename?: "ContentItemPill";
  backgroundColor?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  position?: Maybe<Scalars["String"]["output"]>;
  text: Scalars["String"]["output"];
  textColor?: Maybe<Scalars["String"]["output"]>;
};

export type ContentItemProcessingTimer = {
  __typename?: "ContentItemProcessingTimer";
  backgroundUrl?: Maybe<Scalars["String"]["output"]>;
  heading?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  onClose?: Maybe<SduiAction>;
  secondsUntilTarget: Scalars["Int"]["output"];
  styles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemProductDetailsHeader = {
  __typename?: "ContentItemProductDetailsHeader";
  benefit?: Maybe<ContentItemProductDetailsHeaderBenefit>;
  coverType: CoverType;
  funding?: Maybe<ContentItemProductDetailsHeaderFunding>;
  id: Scalars["ID"]["output"];
  itemSlot: YuScreenItemSlot;
  productIdentifier?: Maybe<ContentItemProductDetailsHeaderProductIdentifier>;
  productName: Scalars["String"]["output"];
  providerLogo?: Maybe<VariableRemoteImage>;
  showSlotLabel: Scalars["Boolean"]["output"];
  styles?: Maybe<Array<SduiStyle>>;
  yuCoinPower: Scalars["Int"]["output"];
};

export type ContentItemProductDetailsHeaderBenefit = {
  __typename?: "ContentItemProductDetailsHeaderBenefit";
  markdown: Scalars["String"]["output"];
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ContentItemProductDetailsHeaderFunding = {
  __typename?: "ContentItemProductDetailsHeaderFunding";
  text: Scalars["String"]["output"];
  theme?: Maybe<ContentItemProductDetailsHeaderFundingTheme>;
};

export type ContentItemProductDetailsHeaderFundingTheme = {
  __typename?: "ContentItemProductDetailsHeaderFundingTheme";
  backgroundColor: Scalars["String"]["output"];
  borderColor: Scalars["String"]["output"];
  textColor: Scalars["String"]["output"];
};

export type ContentItemProductDetailsHeaderProductIdentifier = {
  __typename?: "ContentItemProductDetailsHeaderProductIdentifier";
  label: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type ContentItemProductDetailsHoldingHeader = {
  __typename?: "ContentItemProductDetailsHoldingHeader";
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  image?: Maybe<RemoteImage>;
  linearGradient?: Maybe<ContentItemProductDetailsHoldingHeaderLinearGradient>;
  timer?: Maybe<ContentItemProductDetailsHoldingHeaderTimer>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ContentItemProductDetailsHoldingHeaderLinearGradient = {
  __typename?: "ContentItemProductDetailsHoldingHeaderLinearGradient";
  colors: Array<Scalars["String"]["output"]>;
  end?: Maybe<LinearGradientOrientation>;
  start?: Maybe<LinearGradientOrientation>;
};

export type ContentItemProductDetailsHoldingHeaderTimer = {
  __typename?: "ContentItemProductDetailsHoldingHeaderTimer";
  secondsUntilTarget: Scalars["Int"]["output"];
};

export type ContentItemProgressBar = {
  __typename?: "ContentItemProgressBar";
  currentPosition: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  maxLength: Scalars["Int"]["output"];
  publishKeyHeight?: Maybe<Scalars["String"]["output"]>;
  style?: Maybe<Array<SduiStyle>>;
  type?: Maybe<ContentItemProgressBarType>;
};

export enum ContentItemProgressBarType {
  Default = "default",
  YuCoin = "yuCoin",
}

export type ContentItemProgressSteps = {
  __typename?: "ContentItemProgressSteps";
  currentStep: Scalars["Int"]["output"];
  id: Scalars["ID"]["output"];
  numberOfSteps: Scalars["Int"]["output"];
  theme?: Maybe<ContentItemProgressStepsTheme>;
  wrapperStyles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemProgressStepsTheme = {
  __typename?: "ContentItemProgressStepsTheme";
  barBorderColour: ContentItemProgressStepsThemeOption;
  barColour: ContentItemProgressStepsThemeOption;
  stepBackgroundColour: ContentItemProgressStepsThemeOption;
  stepTextColour: ContentItemProgressStepsThemeOption;
};

export type ContentItemProgressStepsThemeOption = {
  __typename?: "ContentItemProgressStepsThemeOption";
  active: Scalars["String"]["output"];
  inactive: Scalars["String"]["output"];
};

export type ContentItemRadio = {
  __typename?: "ContentItemRadio";
  answerKey: Scalars["String"]["output"];
  choices: Array<ContentItemRadioChoices>;
  iconOptions: Scalars["Boolean"]["output"];
  id: Scalars["ID"]["output"];
  styles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemRadioChoices = {
  __typename?: "ContentItemRadioChoices";
  label: Scalars["String"]["output"];
  renderAsIcon?: Maybe<ContentItemRadioIcon>;
  value: Scalars["String"]["output"];
};

export type ContentItemRadioIcon = {
  __typename?: "ContentItemRadioIcon";
  boxOptionHeight?: Maybe<Scalars["Int"]["output"]>;
  icon?: Maybe<RemoteImage>;
  imageHeight?: Maybe<Scalars["Int"]["output"]>;
  imageWidth?: Maybe<Scalars["Int"]["output"]>;
  innerWrapperStyles?: Maybe<Array<SduiStyle>>;
  selectedStyles: Array<SduiStyle>;
  textColor: Scalars["String"]["output"];
  wrapperStyles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemRewardsBanner = {
  __typename?: "ContentItemRewardsBanner";
  id: Scalars["ID"]["output"];
  illustration?: Maybe<RemoteImage>;
  illustrationMobile?: Maybe<RemoteImage>;
  markdown: Scalars["String"]["output"];
  qrCodeImage?: Maybe<RemoteImage>;
  title: Scalars["String"]["output"];
};

export type ContentItemRowIconTextBanner = {
  __typename?: "ContentItemRowIconTextBanner";
  /** RN client version >= 3.45.0 */
  button?: Maybe<ContentItemButton>;
  /**
   * RN client version >= 3.45.0
   * This field is intended to make the entire info panel pressable.
   */
  containerActions?: Maybe<ContentItemRowIconTextBannerContainerActions>;
  icon: RemoteImage;
  id: Scalars["ID"]["output"];
  markdown: Scalars["String"]["output"];
  /** RN client version >= 3.45.0 */
  showCloseIcon?: Maybe<Scalars["Boolean"]["output"]>;
  /**
   * RN client version >= 3.45.0: icon field is required, so showIcon is used
   * here for backward compatibility to conditionally hide the icon
   */
  showIcon?: Maybe<Scalars["Boolean"]["output"]>;
  styles?: Maybe<Array<SduiStyle>>;
  /** RN client version >= 3.45.0 */
  titleMarkdown?: Maybe<Scalars["String"]["output"]>;
  /** determines client-side style template e.g. error for red */
  type: ContentItemRowIconTextBannerType;
};

export type ContentItemRowIconTextBannerContainerActions = {
  __typename?: "ContentItemRowIconTextBannerContainerActions";
  event?: Maybe<SduiAction>;
  id: Scalars["ID"]["output"];
  onPress: SduiAction;
};

export enum ContentItemRowIconTextBannerType {
  Error = "error",
  Info = "info",
  Neutral = "neutral",
  Success = "success",
  Warning = "warning",
}

export type ContentItemScrollPicker = {
  __typename?: "ContentItemScrollPicker";
  answerKey: Scalars["String"]["output"];
  button: ContentItemButton;
  displayFormat: Array<Array<ContentItemScrollPickerDisplayFormat>>;
  id: Scalars["ID"]["output"];
  pickerCancelButtonLabel: Scalars["String"]["output"];
  pickerConfirmButtonLabel: Scalars["String"]["output"];
  variants: Array<ContentItemScrollPickerVariant>;
};

export type ContentItemScrollPickerDisplayFormat = {
  __typename?: "ContentItemScrollPickerDisplayFormat";
  answerKey: Scalars["String"]["output"];
  isDynamic?: Maybe<Scalars["Boolean"]["output"]>;
  plural?: Maybe<Scalars["String"]["output"]>;
  singular?: Maybe<Scalars["String"]["output"]>;
  singularValue?: Maybe<Scalars["Float"]["output"]>;
};

export type ContentItemScrollPickerVariant = {
  __typename?: "ContentItemScrollPickerVariant";
  answerKey?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  toggleIndex?: Maybe<Scalars["Int"]["output"]>;
  toggleLabel?: Maybe<Scalars["String"]["output"]>;
  wheels: Array<ContentItemScrollPickerVariantWheels>;
};

export type ContentItemScrollPickerVariantWheels = {
  __typename?: "ContentItemScrollPickerVariantWheels";
  answerKey: Scalars["String"]["output"];
  /** Supported RN version 3.50.0 */
  initialStepIndex?: Maybe<Scalars["Int"]["output"]>;
  max: Scalars["Float"]["output"];
  min: Scalars["Float"]["output"];
  step: Scalars["Float"]["output"];
  /** Used when the last value includes anything over that value. E.g 10+ */
  suffixMax?: Maybe<Scalars["String"]["output"]>;
  suffixPlural: Scalars["String"]["output"];
  suffixSingular: Scalars["String"]["output"];
  suffixSingularValue: Scalars["Float"]["output"];
};

export type ContentItemScrollableItemsPicker = {
  __typename?: "ContentItemScrollableItemsPicker";
  answerKey: Scalars["String"]["output"];
  coverMap: Array<ContentItemScrollableItemsPickerCoverMap>;
  id: Scalars["ID"]["output"];
  range: ContentItemScrollableItemsPickerRange;
  styleVariants?: Maybe<Array<ContentItemScrollableItemsPickerStyleVariant>>;
  styles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemScrollableItemsPickerCoverMap = {
  __typename?: "ContentItemScrollableItemsPickerCoverMap";
  coverType: CoverType;
  max: Scalars["Int"]["output"];
};

export type ContentItemScrollableItemsPickerRange = {
  __typename?: "ContentItemScrollableItemsPickerRange";
  max: Scalars["Int"]["output"];
  min: Scalars["Int"]["output"];
  step: Scalars["Int"]["output"];
};

export type ContentItemScrollableItemsPickerStyleVariant = {
  __typename?: "ContentItemScrollableItemsPickerStyleVariant";
  id: Scalars["ID"]["output"];
  item: ContentItemScrollableItemsPickerStyleVariantItem;
  maxVisibleIndex?: Maybe<Scalars["Int"]["output"]>;
  minVisibleIndex?: Maybe<Scalars["Int"]["output"]>;
  overlay: ContentItemScrollableItemsPickerStyleVariantOverlay;
};

export type ContentItemScrollableItemsPickerStyleVariantItem = {
  __typename?: "ContentItemScrollableItemsPickerStyleVariantItem";
  color: Scalars["String"]["output"];
};

export type ContentItemScrollableItemsPickerStyleVariantOverlay = {
  __typename?: "ContentItemScrollableItemsPickerStyleVariantOverlay";
  backdropStyles?: Maybe<Array<SduiStyle>>;
  highlightLabel: Scalars["String"]["output"];
  highlightLabelColor: Scalars["String"]["output"];
  overlayTitle: Scalars["String"]["output"];
  overlayTitleWrapperStyles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemSearchPostcode = {
  __typename?: "ContentItemSearchPostcode";
  addressAnswerKeys: Array<ContentItemSearchPostcodeAddressKeys>;
  headingText: Scalars["String"]["output"];
  icon?: Maybe<RemoteImage>;
  id: Scalars["ID"]["output"];
  label: Scalars["String"]["output"];
  onLoadPlaceholder: Scalars["String"]["output"];
  onLoadUnsuccessfulText: Scalars["String"]["output"];
  searchInputStyles?: Maybe<Array<SduiStyle>>;
  searchTitle: Scalars["String"]["output"];
  styles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemSearchPostcodeAddressKeys = {
  __typename?: "ContentItemSearchPostcodeAddressKeys";
  addressKey: Scalars["String"]["output"];
  answerKey: Scalars["String"]["output"];
};

export type ContentItemSectionHeading = {
  __typename?: "ContentItemSectionHeading";
  heading?: Maybe<Scalars["String"]["output"]>;
  icon?: Maybe<RemoteImage>;
  id: Scalars["ID"]["output"];
  styles?: Maybe<Array<SduiStyle>>;
  subheading?: Maybe<Scalars["String"]["output"]>;
};

export type ContentItemSelectScheme = {
  __typename?: "ContentItemSelectScheme";
  additionalYuCoinPowerLabel?: Maybe<Scalars["String"]["output"]>;
  answerKey: Scalars["String"]["output"];
  emptyYuCoinPowerLabel?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  schemeOptions: Array<SchemeOption>;
  styles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemSelectedPackageAccordion = {
  __typename?: "ContentItemSelectedPackageAccordion";
  coverOptions?: Maybe<Array<ContentItemSelectedPackageAccordionCoverOptions>>;
  headerIcon?: Maybe<RemoteImage>;
  heading?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  infoIcon?: Maybe<RemoteImage>;
  styles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemSelectedPackageAccordionCoverOptions = {
  __typename?: "ContentItemSelectedPackageAccordionCoverOptions";
  coverType: CoverType;
  items: Array<ContentItemSelectedPackageAccordionCoverOptionsItem>;
  subheading?: Maybe<Scalars["String"]["output"]>;
};

export type ContentItemSelectedPackageAccordionCoverOptionsItem = {
  __typename?: "ContentItemSelectedPackageAccordionCoverOptionsItem";
  info?: Maybe<ContentItemSelectedPackageAccordionCoverOptionsItemInfo>;
  leftText: Scalars["String"]["output"];
  rightTextBody?: Maybe<Scalars["String"]["output"]>;
  rightTextLabel?: Maybe<Scalars["String"]["output"]>;
};

export type ContentItemSelectedPackageAccordionCoverOptionsItemInfo = {
  __typename?: "ContentItemSelectedPackageAccordionCoverOptionsItemInfo";
  onPress?: Maybe<SduiAction>;
};

export type ContentItemSelectedPackageCard = {
  __typename?: "ContentItemSelectedPackageCard";
  backgroundUrl: RemoteImage;
  coverType: CoverType;
  coverTypeStyles?: Maybe<Array<SduiStyle>>;
  hideCoverType?: Maybe<Scalars["Boolean"]["output"]>;
  icon?: Maybe<RemoteImage>;
  id: Scalars["ID"]["output"];
  previousPrice?: Maybe<Scalars["String"]["output"]>;
  price: Scalars["String"]["output"];
  priceDescription: Scalars["String"]["output"];
  providerLogo?: Maybe<ContentItemSelectedPackageCardProviderLogo>;
  secondaryText?: Maybe<Scalars["String"]["output"]>;
  slotInfo: ContentItemPackageCardSlotInfo;
  styles?: Maybe<Array<SduiStyle>>;
  tagPrimary?: Maybe<Scalars["String"]["output"]>;
};

export type ContentItemSelectedPackageCardProviderLogo = {
  __typename?: "ContentItemSelectedPackageCardProviderLogo";
  url?: Maybe<RemoteImage>;
  width?: Maybe<Scalars["Int"]["output"]>;
};

export type ContentItemSelectedPackageCards = {
  __typename?: "ContentItemSelectedPackageCards";
  coverOptions?: Maybe<Array<ContentItemSelectedPackageCardsCoverOption>>;
  id: Scalars["ID"]["output"];
  priceDescription?: Maybe<Scalars["String"]["output"]>;
  providerLogo?: Maybe<ContentItemSelectedPackageCardProviderLogo>;
  styles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemSelectedPackageCardsCoverOption = {
  __typename?: "ContentItemSelectedPackageCardsCoverOption";
  coverType: CoverType;
  price: Scalars["String"]["output"];
  slotInfo: ContentItemPackageCardSlotInfo;
};

export type ContentItemSexPicker = {
  __typename?: "ContentItemSexPicker";
  answerKey: Scalars["String"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  styles?: Maybe<Array<SduiStyle>>;
  title?: Maybe<Scalars["String"]["output"]>;
};

/** RN client version >= 3.90.0 */
export type ContentItemShowHideBalance = {
  __typename?: "ContentItemShowHideBalance";
  balance: Scalars["String"]["output"];
  balanceDescription?: Maybe<Scalars["String"]["output"]>;
  balanceDescriptionValue?: Maybe<Scalars["String"]["output"]>;
  currency: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  styles?: Maybe<Array<SduiStyle>>;
  wrapperStyles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemStages = {
  __typename?: "ContentItemStages";
  id: Scalars["ID"]["output"];
  stages: Array<Scalars["String"]["output"]>;
  styles?: Maybe<Array<SduiStyle>>;
};

/** RN client version >= 3.89.0 */
export type ContentItemSwitch = {
  __typename?: "ContentItemSwitch";
  defaultValue: Scalars["Boolean"]["output"];
  id: Scalars["ID"]["output"];
  onPress?: Maybe<SduiAction>;
  styles?: Maybe<Array<SduiStyle>>;
  wrapperStyles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemTable = {
  __typename?: "ContentItemTable";
  data: Array<ContentItemTableData>;
  id: Scalars["ID"]["output"];
  styles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemTableData = {
  __typename?: "ContentItemTableData";
  header?: Maybe<ContentItemTableDataHeader>;
  info?: Maybe<ContentItemTableDataInfo>;
  items?: Maybe<Array<ContentItemTableDataItem>>;
};

export type ContentItemTableDataHeader = {
  __typename?: "ContentItemTableDataHeader";
  label?: Maybe<Scalars["String"]["output"]>;
  styles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemTableDataInfo = {
  __typename?: "ContentItemTableDataInfo";
  label?: Maybe<Scalars["String"]["output"]>;
  styles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemTableDataItem = {
  __typename?: "ContentItemTableDataItem";
  label?: Maybe<Scalars["String"]["output"]>;
  styles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemText = {
  __typename?: "ContentItemText";
  colour?: Maybe<Scalars["String"]["output"]>;
  /** Supported RN Version 3.101 */
  dynamicStyleKey?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  lineHeight?: Maybe<Scalars["Int"]["output"]>;
  numberOfLines?: Maybe<Scalars["Int"]["output"]>;
  styles?: Maybe<Array<SduiStyle>>;
  text: Scalars["String"]["output"];
  textAlign?: Maybe<Scalars["String"]["output"]>;
  textStyles?: Maybe<Array<SduiStyle>>;
  type: Scalars["String"]["output"];
  underline?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ContentItemTextGroup = {
  __typename?: "ContentItemTextGroup";
  id: Scalars["ID"]["output"];
  items: Array<ContentItemTextGroupItem>;
  styles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemTextGroupItem = {
  __typename?: "ContentItemTextGroupItem";
  label: Scalars["String"]["output"];
  labelStyles?: Maybe<Array<SduiStyle>>;
  onPress?: Maybe<SduiAction>;
  rightIcon?: Maybe<RemoteImage>;
  styles?: Maybe<Array<SduiStyle>>;
};

/** TODO: Consolidate with ContentItemFormTextInput */
export type ContentItemTextInput = {
  __typename?: "ContentItemTextInput";
  answerKey: Scalars["String"]["output"];
  heading?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  prefixValue?: Maybe<Scalars["String"]["output"]>;
  /** Supported RN version 3.58.0 */
  styles?: Maybe<Array<SduiStyle>>;
  type?: Maybe<ContentItemFormTextInputType>;
  validation?: Maybe<Array<Maybe<ContentItemTextInputValidation>>>;
};

export type ContentItemTextInputValidation = {
  __typename?: "ContentItemTextInputValidation";
  validationName: Scalars["String"]["output"];
  validationValue: Scalars["String"]["output"];
};

export type ContentItemWrapper = {
  __typename?: "ContentItemWrapper";
  /** Supported RN version 3.85.0 */
  absolute?: Maybe<Scalars["String"]["output"]>;
  children: Scalars["String"]["output"];
  /** Supported RN Version 3.101.0 */
  dynamicStyleKey?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  /** Supported RN Version 3.101.0 */
  localDispatchActions?: Maybe<Array<SduiAction>>;
  /** Supported RN Version 3.101.0 */
  localDispatchActionsOnMount?: Maybe<Array<SduiAction>>;
  /** Supported RN version 3.87.0 */
  onPress?: Maybe<SduiAction>;
  pointerEvents?: Maybe<RnViewPointerEvents>;
  /** Supported RN version 3.87.0 */
  scrollViewProps?: Maybe<Scalars["String"]["output"]>;
  styles?: Maybe<Array<SduiStyle>>;
};

export type ContentItemYuCoinPower = {
  __typename?: "ContentItemYuCoinPower";
  /** Supported RN version 3.70.0 */
  containerStyles?: Maybe<Array<SduiStyle>>;
  id: Scalars["ID"]["output"];
  inactive?: Maybe<Scalars["Boolean"]["output"]>;
  /** RN client version >=3.47.0 */
  interactive?: Maybe<Scalars["Boolean"]["output"]>;
  /**
   * A separate definition to define width with respect to the device's horizontal edges
   * A marginHorizontal at the styles level doesn't work because a hardcoded width should
   * be defined at the Svg parent
   */
  marginHorizontal?: Maybe<Scalars["Int"]["output"]>;
  styles?: Maybe<Array<SduiStyle>>;
  yuCoinPower: Scalars["Int"]["output"];
};

export type ContentItemYugiConfirm = {
  __typename?: "ContentItemYugiConfirm";
  buttonOnPress?: Maybe<SduiAction>;
  buttonText: Scalars["String"]["output"];
  content: ContentItemMarkdown;
  id: Scalars["ID"]["output"];
  yugiHeading: Scalars["String"]["output"];
};

/** For detached steps, ContentItemMarkdown is only supported by RN client version >=3.25.0 */
export type ContentPersonalProductItem =
  | ContentItemAgePercentCoverPicker
  | ContentItemAppDownloadPrompt
  | ContentItemButton
  | ContentItemCollapsingHeaderAgePercentProductInfo
  | ContentItemCollapsingHeaderProductInfo
  | ContentItemConfirm
  | ContentItemCostPayoutBenefitCard
  | ContentItemCoverPicker
  | ContentItemDatePicker
  | ContentItemDropdownInput
  | ContentItemFade
  | ContentItemForm
  | ContentItemFullScreenLottieSwiper
  | ContentItemFullScreenSwiper
  | ContentItemGpDetails
  | ContentItemHeaderBar
  | ContentItemHint
  | ContentItemImage
  | ContentItemInfoButton
  | ContentItemInfoCard
  | ContentItemList
  | ContentItemLottie
  | ContentItemMarkdown
  | ContentItemMultiButton
  | ContentItemMultiSelect
  | ContentItemOverlay
  | ContentItemPackageCardPower
  | ContentItemPackageCards
  | ContentItemPad
  | ContentItemPerks
  | ContentItemPerksComparison
  | ContentItemPersonalProductDocuments
  | ContentItemPersonalProductFaqs
  | ContentItemPersonalProductInfo
  | ContentItemPersonalProductPreview
  | ContentItemPersonalProductReviewItem
  | ContentItemPersonalProductSelectPaymentButton
  | ContentItemProcessingTimer
  | ContentItemProgressBar
  | ContentItemProgressSteps
  | ContentItemRadio
  | ContentItemRewardsBanner
  | ContentItemRowIconTextBanner
  | ContentItemScrollPicker
  | ContentItemScrollableItemsPicker
  | ContentItemSearchPostcode
  | ContentItemSelectedPackageAccordion
  | ContentItemSelectedPackageCard
  | ContentItemSelectedPackageCards
  | ContentItemText
  | ContentItemTextInput
  | ContentItemYuCoinPower
  | ContentItemYugiConfirm;

export type ContentYuScreenProductItem = ContentItemLottie | ContentItemText;

/** Different cover types */
export enum CoverType {
  Common = "common",
  Epic = "epic",
  Rare = "rare",
}

export type CreateAccessUserInput = {
  archived: Scalars["Boolean"]["input"];
  businessPhone: Scalars["String"]["input"];
  businessTags?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  lastName: Scalars["String"]["input"];
  permissions?: InputMaybe<Array<BusinessAccessPermission>>;
};

export type CreateTeamSocialGroupInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  query: SearchQueryInput;
};

export type CustomerBeneficiary = {
  __typename?: "CustomerBeneficiary";
  firstName: Scalars["String"]["output"];
  fullName: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lastName: Scalars["String"]["output"];
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  relationship?: Maybe<Scalars["String"]["output"]>;
  shareOfBenefit: Scalars["Float"]["output"];
};

export type CustomerBeneficiaryUpdate = {
  firstName: Scalars["String"]["input"];
  id?: InputMaybe<Scalars["ID"]["input"]>;
  lastName: Scalars["String"]["input"];
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  productId: Scalars["ID"]["input"];
  relationship: Scalars["String"]["input"];
  remove?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum CustomerContactDetailType {
  Default = "default",
  Personal = "personal",
}

export enum CustomerMatcherAvailableOperators {
  Contains = "contains",
  Equals = "equals",
  GreaterThan = "greaterThan",
  GreaterThanOrEqual = "greaterThanOrEqual",
  LessThan = "lessThan",
  LessThanOrEqual = "lessThanOrEqual",
  NotContains = "notContains",
  NotEquals = "notEquals",
}

export type CustomerMatcherDropdownOption = {
  __typename?: "CustomerMatcherDropdownOption";
  label: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type CustomerMatcherDropdownOptionInput = {
  label: Scalars["String"]["input"];
  value: Scalars["String"]["input"];
};

export type CustomerMatcherField = {
  __typename?: "CustomerMatcherField";
  availableOperators?: Maybe<Array<CustomerMatcherAvailableOperators>>;
  isSearchable?: Maybe<Scalars["Boolean"]["output"]>;
  key: CustomerMatcherFieldKeys;
  possibleValues?: Maybe<Array<CustomerMatcherDropdownOption>>;
  type: Scalars["String"]["output"];
};

export enum CustomerMatcherFieldKeys {
  ActiveB2bProducts = "activeB2bProducts",
  BaseSalary = "baseSalary",
  BaseSalaryCurrency = "baseSalaryCurrency",
  BusinessTagIds = "businessTagIds",
  BusinessUnit = "businessUnit",
  ContractType = "contractType",
  CustomConnectionFieldsBaseSalaryCurrencySymbol = "customConnectionFields__baseSalaryCurrencySymbol",
  CustomConnectionFieldsProbationEndDate = "customConnectionFields__probationEndDate",
  CustomConnectionFieldsWeeklyContractedHours = "customConnectionFields__weeklyContractedHours",
  DateOfBirth = "dateOfBirth",
  Department = "department",
  Email = "email",
  EmploymentLeaveDate = "employmentLeaveDate",
  EmploymentStartDate = "employmentStartDate",
  EmploymentStatus = "employmentStatus",
  FirstName = "firstName",
  Gender = "gender",
  HomeLocationCountry = "homeLocationCountry",
  HomeLocationPostcode = "homeLocationPostcode",
  InviteCode = "inviteCode",
  JobTitle = "jobTitle",
  LastName = "lastName",
  MergeDevEmployeeId = "mergeDevEmployeeId",
  NiNumber = "niNumber",
  PayGrade = "payGrade",
  SexAtBirth = "sexAtBirth",
  Status = "status",
  Title = "title",
  WorkArrangement = "workArrangement",
  WorkLocationCountry = "workLocationCountry",
  WorkLocationName = "workLocationName",
  WorkLocationPostcode = "workLocationPostcode",
}

export enum CustomerMatcherVariation {
  Customer = "customer",
  HrisEmployee = "hrisEmployee",
}

export type CustomerMatchingRuleFieldOverrides = {
  activeB2bProducts?: InputMaybe<CustomerMatchingRuleFieldOverridesInput>;
  baseSalary?: InputMaybe<CustomerMatchingRuleFieldOverridesInput>;
  baseSalaryCurrency?: InputMaybe<CustomerMatchingRuleFieldOverridesInput>;
  businessTagIds?: InputMaybe<CustomerMatchingRuleFieldOverridesInput>;
  businessUnit?: InputMaybe<CustomerMatchingRuleFieldOverridesInput>;
  contractType?: InputMaybe<CustomerMatchingRuleFieldOverridesInput>;
  dateOfBirth?: InputMaybe<CustomerMatchingRuleFieldOverridesInput>;
  department?: InputMaybe<CustomerMatchingRuleFieldOverridesInput>;
  email?: InputMaybe<CustomerMatchingRuleFieldOverridesInput>;
  employmentLeaveDate?: InputMaybe<CustomerMatchingRuleFieldOverridesInput>;
  employmentStartDate?: InputMaybe<CustomerMatchingRuleFieldOverridesInput>;
  employmentStatus?: InputMaybe<CustomerMatchingRuleFieldOverridesInput>;
  firstName?: InputMaybe<CustomerMatchingRuleFieldOverridesInput>;
  gender?: InputMaybe<CustomerMatchingRuleFieldOverridesInput>;
  homeLocationCountry?: InputMaybe<CustomerMatchingRuleFieldOverridesInput>;
  homeLocationPostcode?: InputMaybe<CustomerMatchingRuleFieldOverridesInput>;
  inviteCode?: InputMaybe<CustomerMatchingRuleFieldOverridesInput>;
  jobTitle?: InputMaybe<CustomerMatchingRuleFieldOverridesInput>;
  lastName?: InputMaybe<CustomerMatchingRuleFieldOverridesInput>;
  mergeDevEmployeeId?: InputMaybe<CustomerMatchingRuleFieldOverridesInput>;
  niNumber?: InputMaybe<CustomerMatchingRuleFieldOverridesInput>;
  payGrade?: InputMaybe<CustomerMatchingRuleFieldOverridesInput>;
  sexAtBirth?: InputMaybe<CustomerMatchingRuleFieldOverridesInput>;
  status?: InputMaybe<CustomerMatchingRuleFieldOverridesInput>;
  title?: InputMaybe<CustomerMatchingRuleFieldOverridesInput>;
  workArrangement?: InputMaybe<CustomerMatchingRuleFieldOverridesInput>;
  workLocationCountry?: InputMaybe<CustomerMatchingRuleFieldOverridesInput>;
  workLocationName?: InputMaybe<CustomerMatchingRuleFieldOverridesInput>;
  workLocationPostcode?: InputMaybe<CustomerMatchingRuleFieldOverridesInput>;
};

export type CustomerMatchingRuleFieldOverridesInput = {
  availableOperators?: InputMaybe<Array<CustomerMatcherAvailableOperators>>;
  possibleValues?: InputMaybe<Array<CustomerMatcherDropdownOptionInput>>;
};

export type CustomerMatchingRuleOptionsInput = {
  fieldOverrides?: InputMaybe<CustomerMatchingRuleFieldOverrides>;
  fields?: InputMaybe<Array<CustomerMatcherFieldKeys>>;
  variation?: InputMaybe<CustomerMatcherVariation>;
};

export type CustomerProduct = {
  __typename?: "CustomerProduct";
  categoryId: Scalars["String"]["output"];
  productId: Scalars["String"]["output"];
};

export type CustomerProductBeneficiaries = {
  __typename?: "CustomerProductBeneficiaries";
  beneficiaries?: Maybe<Array<CustomerBeneficiary>>;
  id: Scalars["ID"]["output"];
};

export type CustomerProductData = {
  __typename?: "CustomerProductData";
  customerProductId?: Maybe<Scalars["String"]["output"]>;
  status: YuProductStatus;
};

export type DailyPensionContribution = {
  __typename?: "DailyPensionContribution";
  active: Scalars["Boolean"]["output"];
  contribution?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  yuCoinAwarded?: Maybe<Scalars["Int"]["output"]>;
};

export type DailyScreenCustomIcon = {
  __typename?: "DailyScreenCustomIcon";
  image: DailyScreenCustomIconImage;
  name: Scalars["String"]["output"];
  onPress: SduiAction;
  position: Scalars["String"]["output"];
  text: DailyScreenCustomIconText;
  x: Scalars["Int"]["output"];
  y: Scalars["Int"]["output"];
};

export type DailyScreenCustomIconImage = {
  __typename?: "DailyScreenCustomIconImage";
  height: Scalars["Int"]["output"];
  source: RemoteImage;
  width: Scalars["Int"]["output"];
};

export type DailyScreenCustomIconText = {
  __typename?: "DailyScreenCustomIconText";
  colour: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
  x: Scalars["Int"]["output"];
  y: Scalars["Int"]["output"];
};

/** SearchQuery matcher types */
export type DateQuery = {
  __typename?: "DateQuery";
  greaterThan?: Maybe<Scalars["String"]["output"]>;
  lessThan?: Maybe<Scalars["String"]["output"]>;
};

export type DateQueryInput = {
  greaterThan?: InputMaybe<Scalars["String"]["input"]>;
  lessThan?: InputMaybe<Scalars["String"]["input"]>;
};

export type DebugData = {
  __typename?: "DebugData";
  id?: Maybe<Scalars["String"]["output"]>;
  sampleQuery?: Maybe<SampleQueryDebug>;
};

export type Denomination = {
  __typename?: "Denomination";
  alertMessage?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  stock?: Maybe<Scalars["Int"]["output"]>;
  value?: Maybe<Scalars["Float"]["output"]>;
  yuCoin?: Maybe<Scalars["Int"]["output"]>;
};

export type DeviceResponse = {
  __typename?: "DeviceResponse";
  deviceId?: Maybe<Scalars["String"]["output"]>;
  deviceToken?: Maybe<Scalars["String"]["output"]>;
  os?: Maybe<Os>;
  subscribed?: Maybe<Scalars["Boolean"]["output"]>;
  userId?: Maybe<Scalars["String"]["output"]>;
};

export type DismissVideoRequest = {
  dismissVideoPane?: InputMaybe<Scalars["Boolean"]["input"]>;
  dismissVideoPlay?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum DistanceMeasurementType {
  Km = "km",
  Mi = "mi",
}

export type DocumentLink = {
  __typename?: "DocumentLink";
  documentId?: Maybe<Scalars["String"]["output"]>;
  link?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
};

/** The duel type contains information about the duel status, time, duration and opponents. */
export type Duel = {
  __typename?: "Duel";
  duration?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  inviteStatus?: Maybe<Scalars["String"]["output"]>;
  opponents?: Maybe<Array<Maybe<DuelOpponent>>>;
  status?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
  yucoin?: Maybe<Scalars["Int"]["output"]>;
};

/** Duel challenges are a template type, consisting of pre-configured types (e.g. steps) and durations in seconds (e.g. 600). */
export type DuelChallengeTemplate = {
  __typename?: "DuelChallengeTemplate";
  description?: Maybe<Scalars["String"]["output"]>;
  duration?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

/** A duel opponent, containing all the information necessary to challenge another user to a duel. (See also: Dueller) */
export type DuelOpponent = {
  __typename?: "DuelOpponent";
  avatar?: Maybe<Scalars["String"]["output"]>;
  duelId?: Maybe<Scalars["String"]["output"]>;
  lastTimeOpponentDataRetrieved?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<DuelOpponentName>;
  score?: Maybe<Scalars["Int"]["output"]>;
  startDateTime?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["String"]["output"]>;
};

/** The name of a duel opponent, separated into first name and last name. */
export type DuelOpponentName = {
  __typename?: "DuelOpponentName";
  firstName?: Maybe<Scalars["String"]["output"]>;
  fullName?: Maybe<Scalars["String"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
};

/**
 * The response given when viewing recent duel opponents or
 * searching for a duel opponent.
 */
export type DuelSearchResult = {
  __typename?: "DuelSearchResult";
  avatar?: Maybe<Scalars["String"]["output"]>;
  customerId?: Maybe<Scalars["String"]["output"]>;
  fullName?: Maybe<Scalars["String"]["output"]>;
};

/** The parent data type that contains all the pre-configured templates, which can be provided to users in the duel options screen. */
export type DuelTemplates = {
  __typename?: "DuelTemplates";
  challengeTemplate?: Maybe<Array<Maybe<DuelChallengeTemplate>>>;
  wagerTemplate?: Maybe<Array<Maybe<DuelWagerTemplate>>>;
};

export enum DuelTestType {
  End = "end",
  Start = "start",
}

/** Duel wagers are a template type, consisting of pre-configured amounts of yucoin (a.k.a. wagers). */
export type DuelWagerTemplate = {
  __typename?: "DuelWagerTemplate";
  id?: Maybe<Scalars["String"]["output"]>;
  yucoin?: Maybe<Scalars["Int"]["output"]>;
};

/** A dueller, containing the minimum information needed to run a duel with another user. (See also: DuelOpponent) */
export type Dueller = {
  __typename?: "Dueller";
  avatar?: Maybe<Scalars["String"]["output"]>;
  coins?: Maybe<Scalars["Int"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  fullName?: Maybe<Scalars["String"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
};

/** The parent data type containing a Dueller type for both the current user and their opponent. */
export type DuellerDetails = {
  __typename?: "DuellerDetails";
  nextStepAlert?: Maybe<DuellerDetailsNextStepAlert>;
  opponent?: Maybe<Dueller>;
  user?: Maybe<Dueller>;
};

export type DuellerDetailsNextStepAlert = {
  __typename?: "DuellerDetailsNextStepAlert";
  subtitle: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type DuelsCompletedResponse = {
  __typename?: "DuelsCompletedResponse";
  duels?: Maybe<Array<Maybe<Duel>>>;
  id?: Maybe<Scalars["String"]["output"]>;
};

export type EarnRateDetails = {
  __typename?: "EarnRateDetails";
  icon?: Maybe<Scalars["String"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  standardValue?: Maybe<Scalars["Int"]["output"]>;
};

export type EmailReminderRecipientsAndDates = {
  __typename?: "EmailReminderRecipientsAndDates";
  back1Day?: Maybe<Scalars["String"]["output"]>;
  back3Days?: Maybe<Scalars["String"]["output"]>;
  back7Days?: Maybe<Scalars["String"]["output"]>;
  back14Days?: Maybe<Scalars["String"]["output"]>;
  back76Days?: Maybe<Scalars["String"]["output"]>;
  back81Days?: Maybe<Scalars["String"]["output"]>;
  back84Days?: Maybe<Scalars["String"]["output"]>;
  currentDate?: Maybe<Scalars["String"]["output"]>;
  result?: Maybe<Array<Maybe<EmailReminderResult>>>;
};

export type EmailReminderResult = {
  __typename?: "EmailReminderResult";
  day?: Maybe<Scalars["Int"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
};

export type EmployeeBulkProcessResult = {
  __typename?: "EmployeeBulkProcessResult";
  errors?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  results?: Maybe<Array<Maybe<EmployeeListItem>>>;
};

export type EmployeeDashboard = {
  __typename?: "EmployeeDashboard";
  appDownloaded: Scalars["Boolean"]["output"];
  availableProducts: EmployeeDashboardAvailableProducts;
  onboardingSeen: Scalars["Boolean"]["output"];
  ownedProducts: EmployeeDashboardOwnedProducts;
  perks: Array<EmployeeDashboardPerks>;
  rewardsBanner?: Maybe<EmployeeDashboardRewardsBanner>;
  topBanner?: Maybe<EmployeeDashboardBanner>;
  welcomeBanner: EmployeeDashboardWelcomeBanner;
};

export type EmployeeDashboardAvailableGroupProducts = {
  __typename?: "EmployeeDashboardAvailableGroupProducts";
  availableGroupProducts: Array<EmployeeDashboardAvailableProduct>;
  currentEnrolmentWindowCloses?: Maybe<Scalars["String"]["output"]>;
  nextEnrolmentWindowOpens?: Maybe<Scalars["String"]["output"]>;
};

export type EmployeeDashboardAvailablePersonalProducts = {
  __typename?: "EmployeeDashboardAvailablePersonalProducts";
  availablePersonalProducts: Array<EmployeeDashboardAvailableProduct>;
};

export type EmployeeDashboardAvailableProduct = {
  __typename?: "EmployeeDashboardAvailableProduct";
  action?: Maybe<EmployeeDashboardMagicLink>;
  buttonText: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  listItems: Array<EmployeeDashboardAvailableProductListItem>;
  providerLogo?: Maybe<RemoteImage>;
  title: Scalars["String"]["output"];
  topTag?: Maybe<EmployeeDashboardAvailableProductTopTag>;
};

export type EmployeeDashboardAvailableProductListItem = {
  __typename?: "EmployeeDashboardAvailableProductListItem";
  highlightType?: Maybe<EmployeeDashboardAvailableProductListItemHighlightType>;
  highlighted?: Maybe<Scalars["Boolean"]["output"]>;
  title: Scalars["String"]["output"];
};

export enum EmployeeDashboardAvailableProductListItemHighlightType {
  Primary = "primary",
  Secondary = "secondary",
}

export type EmployeeDashboardAvailableProductTopTag = {
  __typename?: "EmployeeDashboardAvailableProductTopTag";
  backgroundColor: Scalars["String"]["output"];
  label: Scalars["String"]["output"];
};

export type EmployeeDashboardAvailableProducts = {
  __typename?: "EmployeeDashboardAvailableProducts";
  group?: Maybe<EmployeeDashboardAvailableGroupProducts>;
  personal?: Maybe<EmployeeDashboardAvailablePersonalProducts>;
};

export type EmployeeDashboardBanner = {
  __typename?: "EmployeeDashboardBanner";
  button?: Maybe<EmployeeDashboardBannerButton>;
  closeable?: Maybe<Scalars["Boolean"]["output"]>;
  icon?: Maybe<RemoteImage>;
  markdown: Scalars["String"]["output"];
  type: ContentItemRowIconTextBannerType;
};

export type EmployeeDashboardBannerButton = {
  __typename?: "EmployeeDashboardBannerButton";
  destination: Scalars["String"]["output"];
  label: Scalars["String"]["output"];
};

export type EmployeeDashboardHappeningNowCard = {
  __typename?: "EmployeeDashboardHappeningNowCard";
  backgroundImage?: Maybe<RemoteImage>;
  body?: Maybe<Scalars["String"]["output"]>;
  heading?: Maybe<Scalars["String"]["output"]>;
  topRightBackgroundColour?: Maybe<Scalars["String"]["output"]>;
  topRightText?: Maybe<Scalars["String"]["output"]>;
  topRightTextColour?: Maybe<Scalars["String"]["output"]>;
};

export type EmployeeDashboardMagicLink = {
  __typename?: "EmployeeDashboardMagicLink";
  redirectUrl: Scalars["String"]["output"];
  site: MagicLinkSite;
};

export type EmployeeDashboardOwnedGroupProducts = {
  __typename?: "EmployeeDashboardOwnedGroupProducts";
  banner?: Maybe<EmployeeDashboardBanner>;
  businessName: Scalars["String"]["output"];
  ownedGroupProducts: Array<EmployeeDashboardOwnedProduct>;
};

export type EmployeeDashboardOwnedPersonalProducts = {
  __typename?: "EmployeeDashboardOwnedPersonalProducts";
  ownedPersonalProducts: Array<EmployeeDashboardOwnedProduct>;
};

export type EmployeeDashboardOwnedProduct = {
  __typename?: "EmployeeDashboardOwnedProduct";
  action?: Maybe<EmployeeDashboardMagicLink>;
  description: Scalars["String"]["output"];
  earnRate?: Maybe<Scalars["Int"]["output"]>;
  employerPaid: Scalars["Boolean"]["output"];
  id: Scalars["ID"]["output"];
  logo?: Maybe<RemoteImage>;
  status: EmployeeDashboardStatus;
  title: Scalars["String"]["output"];
};

export type EmployeeDashboardOwnedProducts = {
  __typename?: "EmployeeDashboardOwnedProducts";
  group?: Maybe<EmployeeDashboardOwnedGroupProducts>;
  personal?: Maybe<EmployeeDashboardOwnedPersonalProducts>;
};

export type EmployeeDashboardPerks = {
  __typename?: "EmployeeDashboardPerks";
  description?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
};

export type EmployeeDashboardRewardsBanner = {
  __typename?: "EmployeeDashboardRewardsBanner";
  illustrationHorizontal: RemoteImage;
  illustrationVertical: RemoteImage;
  markdown: Scalars["String"]["output"];
  qrCodeImage: RemoteImage;
  title: Scalars["String"]["output"];
};

export enum EmployeeDashboardStatus {
  Active = "Active",
  FailedPayment = "FailedPayment",
  Pending = "Pending",
}

export type EmployeeDashboardWelcomeBanner = {
  __typename?: "EmployeeDashboardWelcomeBanner";
  description?: Maybe<Scalars["String"]["output"]>;
  heading: Scalars["String"]["output"];
  illustration?: Maybe<RemoteImage>;
};

export type EmployeeInput = {
  addressCountry?: InputMaybe<Scalars["String"]["input"]>;
  category?: InputMaybe<Scalars["String"]["input"]>;
  dateJoined?: InputMaybe<Scalars["String"]["input"]>;
  dateLeft?: InputMaybe<Scalars["String"]["input"]>;
  dateOfBirth?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  gender?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  membershipType?: InputMaybe<Scalars["String"]["input"]>;
  niNumber?: InputMaybe<Scalars["String"]["input"]>;
  salary?: InputMaybe<Scalars["Float"]["input"]>;
  workplacePostcode?: InputMaybe<Scalars["String"]["input"]>;
};

export type EmployeeListItem = {
  __typename?: "EmployeeListItem";
  avatar?: Maybe<Scalars["String"]["output"]>;
  dateOfBirth?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Use fullName property instead */
  firstName?: Maybe<Scalars["String"]["output"]>;
  fullName?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  inviteDate?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Use fullName property instead */
  lastName?: Maybe<Scalars["String"]["output"]>;
  leaveDate?: Maybe<Scalars["String"]["output"]>;
  membershipType?: Maybe<Scalars["String"]["output"]>;
  productCodes?: Maybe<Array<Scalars["String"]["output"]>>;
  status?: Maybe<Scalars["String"]["output"]>;
};

export type EmployeeWithProductsInput = {
  accessibilityMode?: InputMaybe<Scalars["Boolean"]["input"]>;
  addressCountry?: InputMaybe<Scalars["String"]["input"]>;
  addressCounty?: InputMaybe<Scalars["String"]["input"]>;
  dateOfBirth: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  employeeId?: InputMaybe<Scalars["String"]["input"]>;
  employmentLeaveDate?: InputMaybe<Scalars["String"]["input"]>;
  firstName: Scalars["String"]["input"];
  gender?: InputMaybe<Scalars["String"]["input"]>;
  homeLocationState?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  jobTitle?: InputMaybe<Scalars["String"]["input"]>;
  joinDate?: InputMaybe<Scalars["String"]["input"]>;
  lastName: Scalars["String"]["input"];
  niNumber?: InputMaybe<Scalars["String"]["input"]>;
  products?: InputMaybe<Array<TeamProductInput>>;
  salary?: InputMaybe<Scalars["Float"]["input"]>;
  shouldAutoInvite?: InputMaybe<Scalars["Boolean"]["input"]>;
  tags?: InputMaybe<Array<InputMaybe<TagInput>>>;
  workplacePostcode?: InputMaybe<Scalars["String"]["input"]>;
};

export type EmployeesList = {
  __typename?: "EmployeesList";
  active?: Maybe<Scalars["Int"]["output"]>;
  count?: Maybe<Scalars["Int"]["output"]>;
  employees: Array<Maybe<EmployeeListItem>>;
  inactive?: Maybe<Scalars["Int"]["output"]>;
};

export type EmployeesOverSpaType = {
  __typename?: "EmployeesOverSpaType";
  customerId: Scalars["String"]["output"];
  dateOfBirth?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
};

export type EndPointsVersion = {
  __typename?: "EndPointsVersion";
  getMobileAssets: Scalars["String"]["output"];
  getMobileCopy?: Maybe<Scalars["String"]["output"]>;
};

export type EngageAward = {
  amount?: InputMaybe<Scalars["Int"]["input"]>;
  reason?: InputMaybe<Scalars["String"]["input"]>;
  userId?: InputMaybe<Scalars["String"]["input"]>;
};

export type EngagementDashboardActivity = {
  __typename?: "EngagementDashboardActivity";
  activity: EngagementDashboardActivityData;
  dates?: Maybe<EngagementDashboardDates>;
  locale?: Maybe<EngagementDashboardLocale>;
  progress?: Maybe<EngagementDashboardProgress>;
  state: EngagementDashboardActivityState;
  unclaimedRewards?: Maybe<EngagementDashboardUnclaimedRewards>;
};

export enum EngagementDashboardActivityCategory {
  Challenges = "challenges",
  Chests = "chests",
  Cycling = "cycling",
  MindfulMinutes = "mindfulMinutes",
  Steps = "steps",
  Streaks = "streaks",
}

export type EngagementDashboardActivityData = {
  __typename?: "EngagementDashboardActivityData";
  backgroundImage: Scalars["String"]["output"];
  category: EngagementDashboardActivityCategory;
  description: Scalars["String"]["output"];
  heading: Scalars["String"]["output"];
  tooltip: Scalars["String"]["output"];
  unit: Scalars["String"]["output"];
  unitPlural: Scalars["String"]["output"];
};

export enum EngagementDashboardActivityState {
  Claimable = "claimable",
  Cooldown = "cooldown",
  InProgress = "inProgress",
}

export type EngagementDashboardClaimableActivityForCategory = {
  __typename?: "EngagementDashboardClaimableActivityForCategory";
  activityData: EngagementDashboardActivityData;
  completedGoals: Array<EngagementDashboardCompletedGoal>;
  totalProgress: Scalars["String"]["output"];
};

export type EngagementDashboardCompletedGoal = {
  __typename?: "EngagementDashboardCompletedGoal";
  displayProgress: Scalars["String"]["output"];
  end: Scalars["String"]["output"];
  progress: Scalars["Float"]["output"];
  reward: Scalars["Float"]["output"];
};

export type EngagementDashboardDates = {
  __typename?: "EngagementDashboardDates";
  endDate: Scalars["String"]["output"];
  startDate: Scalars["String"]["output"];
};

export type EngagementDashboardLocale = {
  __typename?: "EngagementDashboardLocale";
  currency: Scalars["String"]["output"];
  locale: Scalars["String"]["output"];
};

export type EngagementDashboardPeriod = {
  __typename?: "EngagementDashboardPeriod";
  archived?: Maybe<Scalars["Boolean"]["output"]>;
  businessAccountId?: Maybe<Scalars["String"]["output"]>;
  config?: Maybe<EngagementDashboardPeriodActivityConfig>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  endDate?: Maybe<Scalars["String"]["output"]>;
  errors?: Maybe<Array<Scalars["String"]["output"]>>;
  lastCalculatedAt?: Maybe<Scalars["String"]["output"]>;
  maximumRebateAmount?: Maybe<Scalars["Float"]["output"]>;
  maximumRebatePercentage?: Maybe<Scalars["Float"]["output"]>;
  startDate?: Maybe<Scalars["String"]["output"]>;
  totalRebateEarned?: Maybe<Scalars["Float"]["output"]>;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
};

export type EngagementDashboardPeriodActivityConfig = {
  __typename?: "EngagementDashboardPeriodActivityConfig";
  companySize: Scalars["String"]["output"];
  reward: Scalars["Float"]["output"];
  targets: EngagementDashboardPeriodActivityTargets;
};

export type EngagementDashboardPeriodActivityTargets = {
  __typename?: "EngagementDashboardPeriodActivityTargets";
  challenges: Scalars["Float"]["output"];
  chests: Scalars["Float"]["output"];
  cycling: Scalars["Float"]["output"];
  mindfulMinutes: Scalars["Float"]["output"];
  steps: Scalars["Float"]["output"];
  streaks: Scalars["Float"]["output"];
};

export type EngagementDashboardPeriodHistory = {
  __typename?: "EngagementDashboardPeriodHistory";
  acknowledgements: EngagementDashboardUserAcknowledgements;
  endDate: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  startDate: Scalars["String"]["output"];
  totalRebateEarned: Scalars["Float"]["output"];
};

export enum EngagementDashboardPeriodWrapUpIllustration {
  Calendar = "calendar",
  Chest = "chest",
  Trophy = "trophy",
}

export type EngagementDashboardPeriodWrapUpItem = {
  __typename?: "EngagementDashboardPeriodWrapUpItem";
  description: Scalars["String"]["output"];
  heading: Scalars["String"]["output"];
  illustration: EngagementDashboardPeriodWrapUpIllustration;
  tooltip?: Maybe<Scalars["String"]["output"]>;
};

export type EngagementDashboardProgress = {
  __typename?: "EngagementDashboardProgress";
  current: Scalars["Float"]["output"];
  displayCurrent: Scalars["String"]["output"];
  displayGoal: Scalars["String"]["output"];
  goal: Scalars["Float"]["output"];
  percentProgress: Scalars["Float"]["output"];
};

export type EngagementDashboardTask = {
  __typename?: "EngagementDashboardTask";
  archived?: Maybe<Scalars["Boolean"]["output"]>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  cycleDuration: EngagementDashboardTaskCycleDuration;
  earnAmount: Scalars["Float"]["output"];
  endDate?: Maybe<Scalars["String"]["output"]>;
  externalId?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  isClaimable: Scalars["Boolean"]["output"];
  regions?: Maybe<Array<Scalars["String"]["output"]>>;
  startDate: Scalars["String"]["output"];
  ui: EngagementDashboardTaskUi;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
};

export type EngagementDashboardTaskClaim = {
  __typename?: "EngagementDashboardTaskClaim";
  businessAccessUser: Scalars["String"]["output"];
  claimedAmount: Scalars["Float"]["output"];
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  nextClaimDate?: Maybe<Scalars["String"]["output"]>;
  taskId: Scalars["String"]["output"];
  updatedAt?: Maybe<Scalars["String"]["output"]>;
};

export enum EngagementDashboardTaskCycleDuration {
  Day = "day",
  Month = "month",
  Once = "once",
  Quarter = "quarter",
  Week = "week",
}

export type EngagementDashboardTaskUi = {
  __typename?: "EngagementDashboardTaskUi";
  backgroundImage?: Maybe<Scalars["String"]["output"]>;
  button: EngagementDashboardTaskUiButton;
  description?: Maybe<Scalars["String"]["output"]>;
  iconImage?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
};

export type EngagementDashboardTaskUiButton = {
  __typename?: "EngagementDashboardTaskUiButton";
  text: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
};

export type EngagementDashboardUnclaimedRewards = {
  __typename?: "EngagementDashboardUnclaimedRewards";
  numberCompleted: Scalars["Int"]["output"];
  totalValue: Scalars["Float"]["output"];
};

export type EngagementDashboardUserAcknowledgements = {
  __typename?: "EngagementDashboardUserAcknowledgements";
  endOfPeriod: Scalars["Int"]["output"];
};

export type EngagementDashboardYuStoreCredit = {
  __typename?: "EngagementDashboardYuStoreCredit";
  totalYuStoreCredit: Scalars["Float"]["output"];
};

export enum ExportEmployeesType {
  Basic = "BASIC",
  BeneficiariesMissing = "BENEFICIARIES_MISSING",
  Comprehensive = "COMPREHENSIVE",
  YuCoinRedemptionReport = "YU_COIN_REDEMPTION_REPORT",
}

export type FeedbackForm = {
  __typename?: "FeedbackForm";
  awardYucoin?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["ID"]["output"];
  label: Scalars["String"]["output"];
  questions: Array<FeedbackFormQuestion>;
  title: Scalars["String"]["output"];
};

export type FeedbackFormQuestion = {
  __typename?: "FeedbackFormQuestion";
  description?: Maybe<Scalars["String"]["output"]>;
  icon?: Maybe<RemoteImage>;
  image?: Maybe<RemoteImage>;
  isRoot?: Maybe<Scalars["Boolean"]["output"]>;
  key: Scalars["String"]["output"];
  labels?: Maybe<FeedbackFormQuestionLabels>;
  nextConditions: Array<FeedbackFormQuestionNextCondition>;
  options?: Maybe<Array<Maybe<FeedbackFormQuestionOption>>>;
  questionText: Scalars["String"]["output"];
  range?: Maybe<FeedbackFormQuestionRange>;
  type: FeedbackFormQuestionType;
};

export type FeedbackFormQuestionLabels = {
  __typename?: "FeedbackFormQuestionLabels";
  id: Scalars["ID"]["output"];
  left?: Maybe<Scalars["String"]["output"]>;
  placeholder?: Maybe<Scalars["String"]["output"]>;
  right?: Maybe<Scalars["String"]["output"]>;
  submit?: Maybe<Scalars["String"]["output"]>;
};

export type FeedbackFormQuestionNextCondition = {
  __typename?: "FeedbackFormQuestionNextCondition";
  id: Scalars["ID"]["output"];
  questionKey: Scalars["String"]["output"];
  regexMatch: Scalars["String"]["output"];
};

export type FeedbackFormQuestionOption = {
  __typename?: "FeedbackFormQuestionOption";
  id: Scalars["ID"]["output"];
  label: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type FeedbackFormQuestionRange = {
  __typename?: "FeedbackFormQuestionRange";
  id: Scalars["ID"]["output"];
  max?: Maybe<Scalars["Int"]["output"]>;
  min?: Maybe<Scalars["Int"]["output"]>;
};

export enum FeedbackFormQuestionType {
  Comment = "COMMENT",
  MultipleChoice = "MULTIPLE_CHOICE",
  NumberSlider = "NUMBER_SLIDER",
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
  Hiit = "HIIT",
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

export type GameSettings = {
  __typename?: "GameSettings";
  blackListApps?: Maybe<BlackListApps>;
  blackListedNavBarTabs: Array<Scalars["String"]["output"]>;
  cyclingMeasurement: DistanceMeasurementType;
  maxStepsAnomalyWindowMs?: Maybe<Scalars["Int"]["output"]>;
};

export type GetBusinessEmailDomainResult = {
  __typename?: "GetBusinessEmailDomainResult";
  count: Scalars["Int"]["output"];
  domain: Scalars["String"]["output"];
};

export type GetBusinessTagsResponse = {
  __typename?: "GetBusinessTagsResponse";
  businessTags: Array<BusinessTag>;
  count: Scalars["Int"]["output"];
  totalCount: Scalars["Int"]["output"];
};

export type GetPaymentDetailsResponse = {
  __typename?: "GetPaymentDetailsResponse";
  brand: Scalars["String"]["output"];
  expMonth: Scalars["Int"]["output"];
  expYear: Scalars["Int"]["output"];
  last4: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
};

export type GetPerkSubscriptionInfoResponse = {
  __typename?: "GetPerkSubscriptionInfoResponse";
  content: Array<ContentItem>;
};

export type GetPersonalContactDetailsResponse = {
  __typename?: "GetPersonalContactDetailsResponse";
  addressCity?: Maybe<Scalars["String"]["output"]>;
  addressFirstLine?: Maybe<Scalars["String"]["output"]>;
  addressPostCode?: Maybe<Scalars["String"]["output"]>;
  addressSecondLine?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
};

export type GetProductYumojiPartResponse = {
  __typename?: "GetProductYumojiPartResponse";
  yumojiPartType: AvatarPartType;
};

export type GetTeamSocialGroupsResponse = {
  __typename?: "GetTeamSocialGroupsResponse";
  count: Scalars["Int"]["output"];
  socialGroups: Array<TeamSocialGroup>;
  totalCount: Scalars["Int"]["output"];
};

export type GetYumojiPartSet = {
  __typename?: "GetYumojiPartSet";
  variants: Array<GetYumojiPartSetVariant>;
};

export type GetYumojiPartSetVariant = {
  __typename?: "GetYumojiPartSetVariant";
  coverType: CoverType;
  itemSlotBackgroundUrl?: Maybe<Scalars["String"]["output"]>;
  worlds: Array<GetYumojiPartSetVariantWorld>;
};

export type GetYumojiPartSetVariantWorld = {
  __typename?: "GetYumojiPartSetVariantWorld";
  remoteUrl: RemoteImage;
  title?: Maybe<GetYumojiPartSetVariantWorldTitle>;
  worldId: YuWorld;
};

export type GetYumojiPartSetVariantWorldTitle = {
  __typename?: "GetYumojiPartSetVariantWorldTitle";
  color: Scalars["String"]["output"];
  label: Scalars["String"]["output"];
};

export enum GoalActionType {
  ClaimReward = "CLAIM_REWARD",
  CloseEvent = "CLOSE_EVENT",
  JoinGoal = "JOIN_GOAL",
}

export type GoalButtonAction = {
  __typename?: "GoalButtonAction";
  goalType?: Maybe<GoalActionType>;
  payload?: Maybe<Scalars["String"]["output"]>;
  sduiType?: Maybe<SduiActionType>;
};

export type GoalDetails = {
  __typename?: "GoalDetails";
  about?: Maybe<GoalInfoComponent>;
  banner?: Maybe<ContentItemRowIconTextBanner>;
  button?: Maybe<GoalDetailsButton>;
  currentProgress: Scalars["Int"]["output"];
  faq?: Maybe<GoalFaq>;
  headerBackgroundColor: Scalars["String"]["output"];
  headerImage: RemoteImage;
  headerTextColor: Scalars["String"]["output"];
  hideHint?: Maybe<Scalars["Boolean"]["output"]>;
  infoCards?: Maybe<Array<GoalInfoCard>>;
  labels?: Maybe<Array<Scalars["String"]["output"]>>;
  maxProgress: Scalars["Int"]["output"];
  milestones: Array<Scalars["Int"]["output"]>;
  progressIcon: RemoteImage;
  progressUnit: Scalars["String"]["output"];
  rewards: Array<GoalReward>;
  title: Scalars["String"]["output"];
};

export type GoalDetailsButton = {
  __typename?: "GoalDetailsButton";
  backgroundColor?: Maybe<Scalars["String"]["output"]>;
  label: Scalars["String"]["output"];
  onPress?: Maybe<GoalButtonAction>;
  shadowColor?: Maybe<Scalars["String"]["output"]>;
};

export type GoalFaq = {
  __typename?: "GoalFaq";
  icon: RemoteImage;
  text: Scalars["String"]["output"];
};

export type GoalInfoCard = {
  __typename?: "GoalInfoCard";
  description: Scalars["String"]["output"];
  icon: RemoteImage;
  styles?: Maybe<Array<SduiStyle>>;
  title: Scalars["String"]["output"];
};

export type GoalInfoComponent = {
  __typename?: "GoalInfoComponent";
  markdown?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type GoalReward = {
  __typename?: "GoalReward";
  animated: Scalars["Boolean"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  goalId: Scalars["ID"]["output"];
  id: Scalars["ID"]["output"];
  infoBadgeUri?: Maybe<RemoteImage>;
  infoText?: Maybe<Scalars["String"]["output"]>;
  item: RemoteImage;
  itemBackground: RemoteImage;
  stars?: Maybe<Array<RemoteImage>>;
  status: GoalRewardStatus;
  title: Scalars["String"]["output"];
};

export enum GoalRewardStatus {
  Claimed = "claimed",
  Completed = "completed",
  Pending = "pending",
}

export type GroupPremiumEmployeeInput = {
  benefit?: InputMaybe<Scalars["Float"]["input"]>;
  joinDate?: InputMaybe<Scalars["String"]["input"]>;
  leaveDate?: InputMaybe<Scalars["String"]["input"]>;
};

export type Hint = {
  __typename?: "Hint";
  description: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  image: RemoteImage;
  screenBlacklist?: Maybe<Array<Scalars["String"]["output"]>>;
  screenWhitelist?: Maybe<Array<Scalars["String"]["output"]>>;
  title: Scalars["String"]["output"];
};

export type HrisConfig = {
  __typename?: "HrisConfig";
  employeeFilters?: Maybe<Array<HrisEmployeeFilter>>;
  insertsEnabled: Scalars["Boolean"]["output"];
  shouldAutoInvite: Scalars["Boolean"]["output"];
  updatesEnabled: Scalars["Boolean"]["output"];
};

export type HrisConnection = {
  __typename?: "HrisConnection";
  config?: Maybe<HrisConfig>;
  hrisType?: Maybe<Scalars["String"]["output"]>;
  lastSyncedAt?: Maybe<Scalars["String"]["output"]>;
  percentageBasedDataSample?: Maybe<Array<HrisSampleItem>>;
  sampleResult?: Maybe<HrisSampleResult>;
  sampleSize?: Maybe<Scalars["Int"]["output"]>;
  sampledAt?: Maybe<Scalars["String"]["output"]>;
  state: HrisConnectionState;
};

export type HrisConnectionSettingsInput = {
  shouldAutoInvite: Scalars["Boolean"]["input"];
};

export enum HrisConnectionState {
  Active = "ACTIVE",
  ConnectionSampling = "CONNECTION_SAMPLING",
  ConnectionSamplingFailed = "CONNECTION_SAMPLING_FAILED",
  NotConnected = "NOT_CONNECTED",
  Paused = "PAUSED",
}

export type HrisEmployeeFilter = {
  __typename?: "HrisEmployeeFilter";
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  query: Scalars["String"]["output"];
};

export type HrisSampleItem = {
  __typename?: "HrisSampleItem";
  percentSatisfied: Scalars["Int"]["output"];
  requirement: Scalars["String"]["output"];
};

export enum HrisSampleResult {
  Failure = "FAILURE",
  PartialSuccess = "PARTIAL_SUCCESS",
  Success = "SUCCESS",
}

export type HrisSyncItem = {
  __typename?: "HrisSyncItem";
  completedAt?: Maybe<Scalars["String"]["output"]>;
  insertImportId?: Maybe<Scalars["String"]["output"]>;
  insertedRecordCount?: Maybe<Scalars["Int"]["output"]>;
  startedAt: Scalars["String"]["output"];
  status: HrisSyncStatus;
  syncId: Scalars["String"]["output"];
  syncType: HrisSyncType;
  updateImportId?: Maybe<Scalars["String"]["output"]>;
  updatedRecordCount?: Maybe<Scalars["Int"]["output"]>;
};

export type HrisSyncList = {
  __typename?: "HrisSyncList";
  count: Scalars["Int"]["output"];
  syncs: Array<HrisSyncItem>;
};

export enum HrisSyncStatus {
  Completed = "COMPLETED",
  Executing = "EXECUTING",
  Failed = "FAILED",
  Syncing = "SYNCING",
}

export enum HrisSyncType {
  Cdc = "CDC",
  Full = "FULL",
  Retry = "RETRY",
}

export type Hyperlink = {
  __typename?: "Hyperlink";
  leftIcon?: Maybe<RemoteImage>;
  title: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
};

export type ImageTag = {
  __typename?: "ImageTag";
  image?: Maybe<RemoteImage>;
  tag: Scalars["String"]["output"];
};

export type ImgixUploadInfo = {
  __typename?: "ImgixUploadInfo";
  key: Scalars["String"]["output"];
  uploadUrl: Scalars["String"]["output"];
};

export type InAppYuniversityCourse = {
  __typename?: "InAppYuniversityCourse";
  description: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  logoImageKey?: Maybe<RemoteImage>;
  modules?: Maybe<Array<Maybe<InAppYuniversityCourseModule>>>;
  title: Scalars["String"]["output"];
};

export type InAppYuniversityCourseModule = {
  __typename?: "InAppYuniversityCourseModule";
  id: Scalars["String"]["output"];
  image: RemoteImage;
  imageTags: Array<ImageTag>;
  slug: Scalars["String"]["output"];
  status?: Maybe<InAppYuniversityStatus>;
  tags: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type InAppYuniversityCourseModuleDetails = {
  __typename?: "InAppYuniversityCourseModuleDetails";
  chapters: Array<InAppYuniversityModuleChapter>;
  completed?: Maybe<Scalars["Boolean"]["output"]>;
  id: Scalars["String"]["output"];
  image: RemoteImage;
  imageTags?: Maybe<Array<ImageTag>>;
  markdown: Scalars["String"]["output"];
  moduleCertificate?: Maybe<InAppYuniversityModuleInfo>;
  moduleCertificateDetails?: Maybe<InAppYuniversityModuleCertificateDetails>;
  moduleNotes?: Maybe<InAppYuniversityModuleInfo>;
  moduleQuiz?: Maybe<InAppYuniversityModuleInfo>;
  quiz: Scalars["String"]["output"];
  tags: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type InAppYuniversityCourses = {
  __typename?: "InAppYuniversityCourses";
  categoryImage?: Maybe<RemoteImage>;
  courses?: Maybe<Array<Maybe<InAppYuniversityCourse>>>;
  headerColour: Scalars["String"]["output"];
  headerImage: RemoteImage;
  headerLabel?: Maybe<Scalars["String"]["output"]>;
  headerTextColour: Scalars["String"]["output"];
  headerTitle?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type InAppYuniversityModuleCertificateDetails = {
  __typename?: "InAppYuniversityModuleCertificateDetails";
  description: Scalars["String"]["output"];
  image: RemoteImage;
  subtitle: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
  values: Array<InAppYuniversityModuleCertificateValue>;
};

export type InAppYuniversityModuleCertificateValue = {
  __typename?: "InAppYuniversityModuleCertificateValue";
  label: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type InAppYuniversityModuleChapter = {
  __typename?: "InAppYuniversityModuleChapter";
  id: Scalars["String"]["output"];
  image: RemoteImage;
  status?: Maybe<InAppYuniversityStatus>;
  tags?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  videoMedia: Media;
};

export type InAppYuniversityModuleInfo = {
  __typename?: "InAppYuniversityModuleInfo";
  ctaEnabled?: Maybe<Scalars["Boolean"]["output"]>;
  ctaLabel?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  icon: RemoteImage;
  iconHeight: Scalars["Int"]["output"];
  iconWidth: Scalars["Int"]["output"];
  rewardDescription?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  uri?: Maybe<Scalars["String"]["output"]>;
  yucoin?: Maybe<Scalars["Int"]["output"]>;
};

export type InAppYuniversityStatus = {
  __typename?: "InAppYuniversityStatus";
  icon: RemoteImage;
  text: Scalars["String"]["output"];
};

export type InputCompanySetting = {
  key: Scalars["String"]["input"];
  value: Scalars["String"]["input"];
};

export enum IntercomHashMethod {
  Android = "android",
  Ios = "ios",
  Web = "web",
}

export type JourneyData = {
  __typename?: "JourneyData";
  absolute?: Maybe<Array<AbsoluteContentItem>>;
  body?: Maybe<Array<ContentItem>>;
  containerStyles?: Maybe<Array<SduiStyle>>;
  isSafeAreaView?: Maybe<Scalars["Boolean"]["output"]>;
  stepData?: Maybe<Scalars["String"]["output"]>;
  stepId: Scalars["String"]["output"];
};

export type Leaderboard = {
  __typename?: "Leaderboard";
  consent?: Maybe<Scalars["Boolean"]["output"]>;
  days?: Maybe<Scalars["Int"]["output"]>;
  hasAccepted?: Maybe<Scalars["Boolean"]["output"]>;
  inviteFrom?: Maybe<Scalars["String"]["output"]>;
  leaderboardId?: Maybe<Scalars["String"]["output"]>;
  metric?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["String"]["output"]>;
};

export type LeaderboardItem = {
  __typename?: "LeaderboardItem";
  avatar?: Maybe<UserAvatar>;
  avatarRemoteFiles?: Maybe<AvatarRemoteFiles>;
  coins?: Maybe<Scalars["Int"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  isTarget?: Maybe<Scalars["Boolean"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  position?: Maybe<Scalars["Int"]["output"]>;
  steps?: Maybe<Scalars["Float"]["output"]>;
  userId?: Maybe<Scalars["ID"]["output"]>;
  value?: Maybe<Scalars["Float"]["output"]>;
};

export type Level = {
  __typename?: "Level";
  id?: Maybe<Scalars["String"]["output"]>;
  level?: Maybe<Scalars["Int"]["output"]>;
  levelChestId?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  rating?: Maybe<Scalars["Int"]["output"]>;
  slots?: Maybe<Array<Maybe<LevelSlot>>>;
};

export type LevelSlot = {
  __typename?: "LevelSlot";
  availableAtLevel?: Maybe<Scalars["Int"]["output"]>;
  bundleIdentifiers?: Maybe<Array<Scalars["String"]["output"]>>;
  challengesDetails?: Maybe<Array<Maybe<ChallengeDetails>>>;
  fitKitTypes?: Maybe<Array<FitKitType>>;
  id?: Maybe<Scalars["String"]["output"]>;
  milestones?: Maybe<Array<Maybe<LevelSlotMilestone>>>;
  passive?: Maybe<Scalars["Boolean"]["output"]>;
  /** @deprecated use challengesDetails.rating */
  rating?: Maybe<Scalars["Int"]["output"]>;
  shouldEndOnLastGoalAchieved?: Maybe<Scalars["Boolean"]["output"]>;
  subtype?: Maybe<Scalars["String"]["output"]>;
  timeLimit?: Maybe<Scalars["Int"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  unit?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated use challengesDetails.yuCoinAwarded */
  yuCoinAwarded?: Maybe<Scalars["Int"]["output"]>;
};

export type LevelSlotMilestone = {
  __typename?: "LevelSlotMilestone";
  XP?: Maybe<Scalars["Int"]["output"]>;
  coins?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  premium?: Maybe<Scalars["Boolean"]["output"]>;
  target?: Maybe<MilestoneTarget>;
};

export type LinearGradientOrientation = {
  __typename?: "LinearGradientOrientation";
  x: Scalars["Float"]["output"];
  y: Scalars["Float"]["output"];
};

export enum LoginBusinessSource {
  Instant = "INSTANT",
  Team = "TEAM",
}

export enum LoginMethod {
  Facebook = "FACEBOOK",
  Otp = "OTP",
  Password = "PASSWORD",
}

export enum MagicLinkSite {
  Members = "members",
  Underwriting = "underwriting",
}

export type Media = {
  __typename?: "Media";
  cover: RemoteImage;
  description: Scalars["String"]["output"];
  duration?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["String"]["output"];
  logo?: Maybe<RemoteImage>;
  lottie?: Maybe<ContentItemLottie>;
  media: RemoteMedia;
  shortDescription: Scalars["String"]["output"];
  sourceType?: Maybe<Scalars["String"]["output"]>;
  tag?: Maybe<Scalars["String"]["output"]>;
  theme: Scalars["String"]["output"];
  thumbnail: RemoteImage;
  title: Scalars["String"]["output"];
  videoLogo?: Maybe<RemoteImage>;
};

export type MedicalPractice = {
  __typename?: "MedicalPractice";
  /** Medical practice address line 1 */
  address1?: Maybe<Scalars["String"]["output"]>;
  /** Medical practice address line 2 */
  address2?: Maybe<Scalars["String"]["output"]>;
  /** Medical practice address line 3 */
  address3?: Maybe<Scalars["String"]["output"]>;
  /** Medical practice address line 4 */
  address4?: Maybe<Scalars["String"]["output"]>;
  /** Medical practice address line 5 */
  address5?: Maybe<Scalars["String"]["output"]>;
  /** Medical practice name */
  name?: Maybe<Scalars["String"]["output"]>;
  /** Medical practice unique code */
  organisationCode?: Maybe<Scalars["String"]["output"]>;
  /** Medical practice postcode */
  postCode?: Maybe<Scalars["String"]["output"]>;
  /** List of practicioners available for a practice */
  practicioners?: Maybe<Array<Maybe<Practicioner>>>;
};

export type MemberOnboardingYuCoinProgress = {
  __typename?: "MemberOnboardingYuCoinProgress";
  current: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type MemberStep = {
  __typename?: "MemberStep";
  currentPage?: Maybe<Scalars["Int"]["output"]>;
  stepId?: Maybe<Scalars["String"]["output"]>;
};

export type Metadata = {
  __typename?: "Metadata";
  avios?: Maybe<Avios>;
  yoyo?: Maybe<Yoyo>;
};

export enum Metric {
  Ces = "CES",
  Nps = "NPS",
  LatestApp = "latest_app",
}

export type Milestone = {
  __typename?: "Milestone";
  XP?: Maybe<Scalars["Int"]["output"]>;
  coins?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  target?: Maybe<Array<Maybe<Scalars["Float"]["output"]>>>;
  unit?: Maybe<Scalars["String"]["output"]>;
};

export type MilestoneLogEntry = {
  __typename?: "MilestoneLogEntry";
  completed?: Maybe<Scalars["Int"]["output"]>;
  /** @deprecated Not supported anymore. */
  completionData?: Maybe<Array<Maybe<Scalars["Float"]["output"]>>>;
  data?: Maybe<MilestoneTarget>;
  /** @deprecated Not supported anymore. */
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Not supported anymore. */
  milestoneId?: Maybe<Scalars["String"]["output"]>;
};

export type MilestoneSourceBreakdown = {
  __typename?: "MilestoneSourceBreakdown";
  device?: Maybe<MilestoneTarget>;
  fitbit?: Maybe<MilestoneTarget>;
  garmin?: Maybe<MilestoneTarget>;
  strava?: Maybe<MilestoneTarget>;
  withings?: Maybe<MilestoneTarget>;
};

export type MilestoneTarget = {
  __typename?: "MilestoneTarget";
  calories?: Maybe<Scalars["Int"]["output"]>;
  distance?: Maybe<Scalars["Int"]["output"]>;
  duration?: Maybe<Scalars["Int"]["output"]>;
  heartRate?: Maybe<Scalars["Int"]["output"]>;
  meditation?: Maybe<Scalars["Int"]["output"]>;
  sleep?: Maybe<Scalars["Int"]["output"]>;
  steps?: Maybe<Scalars["Int"]["output"]>;
};

export type MobileAssets = {
  __typename?: "MobileAssets";
  assets: Array<RemoteImage>;
  version: Scalars["String"]["output"];
};

export type MobileConsent = {
  __typename?: "MobileConsent";
  companyLeaderboard?: Maybe<Scalars["Boolean"]["output"]>;
  marketing?: Maybe<Scalars["Boolean"]["output"]>;
  mobileHealth?: Maybe<Scalars["Boolean"]["output"]>;
  pushNotifications?: Maybe<Scalars["Boolean"]["output"]>;
  workspaceLeaderboard?: Maybe<Scalars["Boolean"]["output"]>;
};

export type MobileConsentInput = {
  companyLeaderboard?: InputMaybe<Scalars["Boolean"]["input"]>;
  marketing?: InputMaybe<Scalars["Boolean"]["input"]>;
  mobileHealth?: InputMaybe<Scalars["Boolean"]["input"]>;
  pushNotifications?: InputMaybe<Scalars["Boolean"]["input"]>;
  workspaceLeaderboard?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MobileGameWeeklies = {
  __typename?: "MobileGameWeeklies";
  activityProgress: Array<MobileWeeklyActivityProgress>;
  endDateTime?: Maybe<Scalars["String"]["output"]>;
  hasJoined: Scalars["Boolean"]["output"];
  hasUnclaimedRewards: Scalars["Boolean"]["output"];
  id: Scalars["ID"]["output"];
};

export enum MobileOnboardingStepPerformed {
  EmployeeDashboardOnboarding = "employeeDashboardOnboarding",
  NewYumojiBuilder = "newYumojiBuilder",
  PassiveCycling = "passiveCycling",
  PersonalProductLaunchDental = "personalProductLaunchDental",
  PersonalProductLaunchDentalAndPli = "personalProductLaunchDentalAndPli",
  PersonalProductLaunchPli = "personalProductLaunchPLI",
  ReferralsPopover = "referralsPopover",
  YuScreenChest = "yuScreenChest",
  YuScreenChestPurchased = "yuScreenChestPurchased",
  YuScreenGloves = "yuScreenGloves",
  YuScreenGlovesLive = "yuScreenGlovesLive",
  YuScreenGlovesPurchased = "yuScreenGlovesPurchased",
  YuScreenOnboarding = "yuScreenOnboarding",
  YuScreenOnboardingPension = "yuScreenOnboardingPension",
}

export type MobilePaymentCardSetup = {
  __typename?: "MobilePaymentCardSetup";
  /** Signing secrets */
  clientSecret: Scalars["String"]["output"];
  ephemeralSecret: Scalars["String"]["output"];
  existingCardLast4?: Maybe<Scalars["String"]["output"]>;
  /** Internal paymentId */
  paymentId: Scalars["String"]["output"];
  /** External customerId */
  providerCustomerId: Scalars["String"]["output"];
};

export type MobilePurchasesList = {
  __typename?: "MobilePurchasesList";
  id: Scalars["ID"]["output"];
  list: Array<MobilePurchasesListItem>;
  sduiStepId: Scalars["String"]["output"];
};

export type MobilePurchasesListItem = {
  __typename?: "MobilePurchasesListItem";
  date: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  status: Scalars["String"]["output"];
  statusColour: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
  yuCoin: Scalars["Int"]["output"];
};

export type MobileRewardStoreLocation = {
  __typename?: "MobileRewardStoreLocation";
  id: Scalars["ID"]["output"];
  isSelected: Scalars["Boolean"]["output"];
  label: Scalars["String"]["output"];
};

export type MobileRewardsList = {
  __typename?: "MobileRewardsList";
  hasUserSelectedStoreLocation: Scalars["Boolean"]["output"];
  id: Scalars["ID"]["output"];
  list: Array<MobileRewardsListItem>;
  preloadAssets: Array<RemoteImage>;
  rewardStoreLocation: Scalars["String"]["output"];
  rewardStoreLocationLabel: Scalars["String"]["output"];
  sduiStepId: Scalars["String"]["output"];
  tags: Array<Scalars["String"]["output"]>;
};

export type MobileRewardsListItem = {
  __typename?: "MobileRewardsListItem";
  description: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  imageUrl: RemoteImage;
  isLocked: Scalars["Boolean"]["output"];
  name: Scalars["String"]["output"];
  pills: Array<MobileRewardsListItemPill>;
  showLockedRewardOverlay: Scalars["Boolean"]["output"];
  teaseDetails?: Maybe<MobileRewardsListItemTease>;
};

export type MobileRewardsListItemPill = {
  __typename?: "MobileRewardsListItemPill";
  backgroundColor: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  text: Scalars["String"]["output"];
};

export type MobileRewardsListItemTease = {
  __typename?: "MobileRewardsListItemTease";
  hint?: Maybe<MobileRewardsListItemTeaseHint>;
  image: RemoteImage;
  progress: Scalars["Int"]["output"];
  rewardQuantity: Scalars["Int"]["output"];
  target: Scalars["Int"]["output"];
  theme: MobileRewardsListItemTeaseTheme;
};

export type MobileRewardsListItemTeaseHint = {
  __typename?: "MobileRewardsListItemTeaseHint";
  description?: Maybe<Scalars["String"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
};

export type MobileRewardsListItemTeaseTheme = {
  __typename?: "MobileRewardsListItemTeaseTheme";
  primaryColor: Scalars["String"]["output"];
  secondaryColor: Scalars["String"]["output"];
};

export enum MobileTabs {
  DailySteps = "dailySteps",
  Leaderboard = "leaderboard",
  Quests = "quests",
  Rewards = "rewards",
  YuScreen = "yuScreen",
}

export type MobileUpgradeRequired = {
  __typename?: "MobileUpgradeRequired";
  imageUrl?: Maybe<Scalars["String"]["output"]>;
  isDismissable: Scalars["Boolean"]["output"];
  message: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type MobileWeeklyActivityProgress = {
  __typename?: "MobileWeeklyActivityProgress";
  activitySubTotal: Scalars["String"]["output"];
  currentPosition: Scalars["Int"]["output"];
  iconUrl: RemoteImage;
  id: Scalars["ID"]["output"];
  isClaimable: Scalars["Boolean"]["output"];
  isClaimed: Scalars["Boolean"]["output"];
  isJoined: Scalars["Boolean"]["output"];
  maxLength: Scalars["Int"]["output"];
  yuCoinSubTotal: Scalars["String"]["output"];
};

export type MobileWhatsNewButton = {
  __typename?: "MobileWhatsNewButton";
  label: Scalars["String"]["output"];
  onPress: SduiAction;
};

export type MobileWhatsNewModal = {
  __typename?: "MobileWhatsNewModal";
  autoPlaySpeedMs: Scalars["Int"]["output"];
  button?: Maybe<MobileWhatsNewButton>;
  close: MobileWhatsNewModalClose;
  ctaMinVisibleIndex?: Maybe<Scalars["Int"]["output"]>;
  dismissMinVisibleIndex: Scalars["Int"]["output"];
  id: MobileOnboardingStepPerformed;
  items: Array<MobileWhatsNewModalItem>;
  refetchQueries?: Maybe<Array<Scalars["String"]["output"]>>;
  theme: MobileWhatsNewModalTheme;
  title: Scalars["String"]["output"];
};

export type MobileWhatsNewModalClose = {
  __typename?: "MobileWhatsNewModalClose";
  icon: RemoteImage;
  onPress?: Maybe<SduiAction>;
};

export type MobileWhatsNewModalItem = {
  __typename?: "MobileWhatsNewModalItem";
  backgroundImage: RemoteImage;
  heading: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  lottie?: Maybe<MobileWhatsNewModalItemLottie>;
  paragraph: Scalars["String"]["output"];
  styles?: Maybe<Array<SduiStyle>>;
};

export type MobileWhatsNewModalItemLottie = {
  __typename?: "MobileWhatsNewModalItemLottie";
  aspectRatio: Scalars["Float"]["output"];
  jsonUri: Scalars["String"]["output"];
};

export type MobileWhatsNewModalTheme = {
  __typename?: "MobileWhatsNewModalTheme";
  primaryColor: Scalars["String"]["output"];
  progressBarBackgroundColor: Scalars["String"]["output"];
  progressBarForegroundColor: Scalars["String"]["output"];
  statusBar?: Maybe<Scalars["String"]["output"]>;
  titleColor: Scalars["String"]["output"];
};

export type MonthlyActiveUsersPercentage = {
  __typename?: "MonthlyActiveUsersPercentage";
  timeString: Scalars["String"]["output"];
  value: Scalars["Int"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  aNumber?: Maybe<Scalars["Int"]["output"]>;
  acknowledgeEngagementPeriodWrapUp: Scalars["Boolean"]["output"];
  addDeviceToken?: Maybe<DeviceResponse>;
  addUserFeedback?: Maybe<AddUserFeedbackResponse>;
  archiveBusinessTag: Scalars["ID"]["output"];
  archiveWellbeingHubCategory: Scalars["Boolean"]["output"];
  assignProductToTeamMember: AssignProductToTeamMemberResult;
  assignTeamPerk: Scalars["Boolean"]["output"];
  awardEngageCoin?: Maybe<Scalars["Boolean"]["output"]>;
  backPersonalProductStep?: Maybe<Scalars["Boolean"]["output"]>;
  /** contentId is deprecated starting with 3.108 client version */
  cancelQuestMapLevelChallenge?: Maybe<Challenge>;
  changeBusinessPassword?: Maybe<Scalars["Boolean"]["output"]>;
  changeBusinessUserLocale: Scalars["Boolean"]["output"];
  changeMemberBookmark: Scalars["Boolean"]["output"];
  changeMemberConsent: Scalars["Boolean"]["output"];
  changeUserLocale: Scalars["Boolean"]["output"];
  changeUserPassword?: Maybe<Scalars["Boolean"]["output"]>;
  claimEngagementDashboardCredit: Scalars["Boolean"]["output"];
  claimEngagementDashboardTask: EngagementDashboardTaskClaim;
  claimGoalRewards?: Maybe<GoalDetails>;
  claimMobileGameWeeklyRewards: Scalars["Boolean"]["output"];
  collectAward?: Maybe<Scalars["Boolean"]["output"]>;
  completeGoal?: Maybe<Scalars["Boolean"]["output"]>;
  completeInAppYuniversityModuleChapter: Scalars["Boolean"]["output"];
  configureHrisConnection: Scalars["Boolean"]["output"];
  /** Sets the payment method as active */
  confirmPaymentCard: ConfirmedPaymentCard;
  createBusinessAccessUser: BusinessAccessUser;
  createBusinessPassword?: Maybe<Scalars["Boolean"]["output"]>;
  createBusinessTag: BusinessTag;
  createQuestMapLevelChallenge?: Maybe<ActiveResponse>;
  createSduiJourney: SduiAction;
  createTeamSocialGroup: TeamSocialGroup;
  createWellbeingHubCategory: TeamWellbeingHubCategory;
  createWellbeingHubItem: TeamWellbeingHubResponse;
  deactivateEmployees?: Maybe<EmployeeBulkProcessResult>;
  deleteConnection?: Maybe<Scalars["Boolean"]["output"]>;
  deletePensionConnection?: Maybe<Scalars["Boolean"]["output"]>;
  disable2FA: Scalars["Boolean"]["output"];
  disconnectHris: Scalars["Boolean"]["output"];
  dismissPeopleWelcomeModal?: Maybe<Scalars["Boolean"]["output"]>;
  dismissTeamOnboardingVideo?: Maybe<Scalars["Boolean"]["output"]>;
  editEmployee: Scalars["Boolean"]["output"];
  enable2FA: Scalars["Boolean"]["output"];
  exchangeMergeDevLinkPublicToken: Scalars["Boolean"]["output"];
  exportEmployees: Scalars["Boolean"]["output"];
  exportYuCoinRedemptionReport: Scalars["Boolean"]["output"];
  getNewConnectionLink?: Maybe<Scalars["String"]["output"]>;
  getNewPensionConnectionLink?: Maybe<Scalars["String"]["output"]>;
  inviteEmployees?: Maybe<EmployeeBulkProcessResult>;
  /** Send a duel invitation to the given opponent(s). */
  inviteToDuel?: Maybe<Duel>;
  joinGoal?: Maybe<UserProfileEvents>;
  joinWeeklyGoal?: Maybe<MobileWeeklyActivityProgress>;
  logGoalEvent?: Maybe<Scalars["Boolean"]["output"]>;
  loginBusiness?: Maybe<BusinessPayload>;
  loginTestUser?: Maybe<Scalars["String"]["output"]>;
  loginUser?: Maybe<UserPayload>;
  makeBusinessAccessUserSoleOwner: Scalars["Boolean"]["output"];
  markMobileNotificationsAsViewedByType: Scalars["Boolean"]["output"];
  /** Checks if the current step needs to be updated. E.g if you're on any step after checkout - once you quit, you need to be sent back to the main checkout step. */
  normalisePersonalProductStep?: Maybe<Scalars["Boolean"]["output"]>;
  orderWellbeingHubCategories: Scalars["Boolean"]["output"];
  orderWellbeingHubItems: Scalars["Boolean"]["output"];
  performMobileOnboardingStep: Scalars["Boolean"]["output"];
  processMembersBulkUpload?: Maybe<Scalars["Boolean"]["output"]>;
  reactivateTeamEmployee: Scalars["Boolean"]["output"];
  reassignProductToTeamMember: Scalars["Boolean"]["output"];
  redeemMobileSduiReward: SduiAction;
  /** @deprecated Use redeemMobileSduiReward */
  redeemReward?: Maybe<Purchase>;
  refreshEngagementDashboardActivities: Scalars["Boolean"]["output"];
  refreshSession?: Maybe<UserPayload>;
  reinviteEmployees?: Maybe<Scalars["Boolean"]["output"]>;
  /** Removes beneficiary from product */
  removeBeneficiaryFromProduct: CustomerProductBeneficiaries;
  requestYuStoreQuote: Scalars["Boolean"]["output"];
  resetBusinessPassword?: Maybe<Scalars["Boolean"]["output"]>;
  resetData?: Maybe<Scalars["Boolean"]["output"]>;
  resetPersonalProductStep?: Maybe<Scalars["Boolean"]["output"]>;
  resetUserPassword?: Maybe<Scalars["Boolean"]["output"]>;
  /** Accept or decline a duel invitation. */
  respondToDuel?: Maybe<Duel>;
  sendBusinessMagicLink?: Maybe<BusinessMagicLinkResponse>;
  sendMagicLink?: Maybe<StartSessionResponse>;
  sendMagicLinkWithInviteCode: SendMagicLinkWithInviteCodeResponse;
  sendWellbeingHubItemDocuments: Scalars["Boolean"]["output"];
  setMemberReferralCode: Scalars["Boolean"]["output"];
  setPassword?: Maybe<Scalars["Boolean"]["output"]>;
  /** Updates the shares of a beneficiary */
  setShareOfBenefitForProduct: CustomerProductBeneficiaries;
  setTeamOnboardingTaskCompleted?: Maybe<Scalars["Boolean"]["output"]>;
  setUserQuestProgress?: Maybe<Scalars["Boolean"]["output"]>;
  startMembersBulkUpload: BulkMemberUpload;
  submitAppStoreReviewAction: Scalars["Boolean"]["output"];
  submitFeedbackForm: SubmitFeedbackFormResponse;
  submitPersonalProductStep?: Maybe<Scalars["Boolean"]["output"]>;
  submitSduiJourney?: Maybe<Scalars["Boolean"]["output"]>;
  submitSudokuSolution?: Maybe<Challenge>;
  submitUnity?: Maybe<Scalars["Boolean"]["output"]>;
  submitUserDebugData?: Maybe<SubmitUserDebugDataResponse>;
  subscribeToPerk: SubscribeToPerkResponse;
  suggestAnalyticsImprovement: Scalars["Boolean"]["output"];
  switchBusinessAccess: BusinessPayload;
  switchPensionContributionVisibility: Scalars["Boolean"]["output"];
  testApproveRateReview?: Maybe<TestApproveRateReviewResponse>;
  testCreateEngagementDashboardPeriod: EngagementDashboardPeriod;
  testDataRefreshReminder?: Maybe<TestDataRefreshReminderResponse>;
  testDeactivateTeamLeaversByDate?: Maybe<Scalars["Boolean"]["output"]>;
  testDirectDebitEmailInvoice?: Maybe<Scalars["Boolean"]["output"]>;
  testDuelPushNotifications?: Maybe<Scalars["Boolean"]["output"]>;
  testEmailReminder?: Maybe<EmailReminderRecipientsAndDates>;
  testGroupPremium?: Maybe<TestGroupPremiumResponse>;
  testInviteEmployeesWithFutureJoinDate?: Maybe<Scalars["Boolean"]["output"]>;
  testPaymentCharge?: Maybe<Scalars["Boolean"]["output"]>;
  testPaymentChargeByBusiness?: Maybe<Scalars["Boolean"]["output"]>;
  testPushNotification?: Maybe<Scalars["Boolean"]["output"]>;
  testSendSampleEmails?: Maybe<Scalars["Boolean"]["output"]>;
  testSendSetupPasswordReminder?: Maybe<Scalars["Boolean"]["output"]>;
  testSpaCheck?: Maybe<TestSpaCheckResponse>;
  testStatePensionAge?: Maybe<TestStatePensionAgeResponse>;
  testToggleEquippedBuffedItem?: Maybe<Scalars["Boolean"]["output"]>;
  testUpdateEngagementDashboardActivities: Scalars["Boolean"]["output"];
  toggleChallengePause: Scalars["Int"]["output"];
  trackEvent: Scalars["Boolean"]["output"];
  transferBusinessAccess: BusinessPayload;
  unassignProductFromTeamMember: Scalars["Boolean"]["output"];
  unsubscribeFromEmails: Scalars["Boolean"]["output"];
  updateAccessUser?: Maybe<Scalars["Boolean"]["output"]>;
  updateAccessUserById?: Maybe<Scalars["Boolean"]["output"]>;
  /** Updates an existing beneficiary or updates an existing if an ID is provided */
  updateBeneficiaryForProduct: CustomerProductBeneficiaries;
  updateBusinessTag: Scalars["Boolean"]["output"];
  updateCompanySettings: Scalars["Boolean"]["output"];
  /** Update customer contact details */
  updateContactDetails?: Maybe<UpdateDetailsResponse>;
  updateCyclingMeasurement?: Maybe<Scalars["Boolean"]["output"]>;
  updateLeaderboardConsent?: Maybe<Leaderboard>;
  updateMemberDateOfBirth: Scalars["Boolean"]["output"];
  updateMemberName: Scalars["Boolean"]["output"];
  updateMobileRewardStoreLocation?: Maybe<Scalars["Boolean"]["output"]>;
  updateMobileSocialLeaderboardConsents?: Maybe<Scalars["Boolean"]["output"]>;
  /** Update the data that can be viewed from the My Account section of yulife-member-static */
  updateMyAccountDetails: Scalars["Boolean"]["output"];
  /** Allows the current user to update his nickname, given the nickname is not taken. */
  updateNickname?: Maybe<Scalars["Boolean"]["output"]>;
  updateQuestMapLevelChallenge?: Maybe<ActiveResponse>;
  updateSecondaryEmail: Scalars["Boolean"]["output"];
  updateSudokuLeaderboardConsent: Scalars["Boolean"]["output"];
  updateTeamMemberProfile: Scalars["Boolean"]["output"];
  updateTeamSocialGroup: TeamSocialGroup;
  /** Allows the current user to update his yumoji. */
  updateUserAvatar?: Maybe<UpdateUserAvatarResponse>;
  updateUserAvatarParts?: Maybe<UpdateUserAvatarResponse>;
  updateUserHourlyActivity: Scalars["Boolean"]["output"];
  updateUserNotificationsSettings?: Maybe<Scalars["Boolean"]["output"]>;
  updateUserPrimaryEmail?: Maybe<Scalars["Boolean"]["output"]>;
  updateWellbeingHubCategory: TeamWellbeingHubCategory;
  updateWellbeingHubItem: Scalars["Boolean"]["output"];
  uploadOneWithProducts: UploadOneWithProductsResponse;
  upsertDailyPassives: PassiveChallengesResponse;
  upsertMobileConsent?: Maybe<MobileConsent>;
  upsertOnboardingChallenge?: Maybe<OnboardingResponse>;
};

export type MutationAcknowledgeEngagementPeriodWrapUpArgs = {
  periodId: Scalars["String"]["input"];
};

export type MutationAddDeviceTokenArgs = {
  deviceId: Scalars["String"]["input"];
  deviceToken: Scalars["String"]["input"];
  os: Os;
  subscribed: Scalars["Boolean"]["input"];
};

export type MutationAddUserFeedbackArgs = {
  comment?: InputMaybe<Scalars["String"]["input"]>;
  metric?: InputMaybe<Metric>;
  rating: Scalars["Int"]["input"];
};

export type MutationArchiveBusinessTagArgs = {
  businessTagId: Scalars["String"]["input"];
};

export type MutationArchiveWellbeingHubCategoryArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationAssignProductToTeamMemberArgs = {
  businessEmployeeId: Scalars["String"]["input"];
  filterOutAssignedProducts?: InputMaybe<Scalars["Boolean"]["input"]>;
  input?: InputMaybe<AssignProductInput>;
};

export type MutationAssignTeamPerkArgs = {
  perk: AssignTeamPerkInput;
};

export type MutationAwardEngageCoinArgs = {
  awards?: InputMaybe<Array<InputMaybe<EngageAward>>>;
};

export type MutationBackPersonalProductStepArgs = {
  productId: Scalars["String"]["input"];
};

export type MutationCancelQuestMapLevelChallengeArgs = {
  contentId?: InputMaybe<Scalars["String"]["input"]>;
  levelSlotId: Scalars["String"]["input"];
};

export type MutationChangeBusinessPasswordArgs = {
  oldPassword: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationChangeBusinessUserLocaleArgs = {
  locale: Scalars["String"]["input"];
};

export type MutationChangeMemberBookmarkArgs = {
  bookmark: Scalars["String"]["input"];
};

export type MutationChangeMemberConsentArgs = {
  key: UserConsent;
  value: Scalars["Boolean"]["input"];
};

export type MutationChangeUserLocaleArgs = {
  locale: Scalars["String"]["input"];
};

export type MutationChangeUserPasswordArgs = {
  oldPassword: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationClaimEngagementDashboardCreditArgs = {
  category: EngagementDashboardActivityCategory;
};

export type MutationClaimEngagementDashboardTaskArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationClaimGoalRewardsArgs = {
  rewardIds: Array<Scalars["String"]["input"]>;
};

export type MutationClaimMobileGameWeeklyRewardsArgs = {
  rewardIds: Array<Scalars["String"]["input"]>;
};

export type MutationCollectAwardArgs = {
  awardId: Scalars["String"]["input"];
};

export type MutationCompleteGoalArgs = {
  participationId: Scalars["String"]["input"];
};

export type MutationCompleteInAppYuniversityModuleChapterArgs = {
  chapterId: Scalars["String"]["input"];
  moduleId: Scalars["String"]["input"];
};

export type MutationConfigureHrisConnectionArgs = {
  settings: HrisConnectionSettingsInput;
};

export type MutationConfirmPaymentCardArgs = {
  paymentId: Scalars["String"]["input"];
};

export type MutationCreateBusinessAccessUserArgs = {
  accessUser: CreateAccessUserInput;
};

export type MutationCreateBusinessPasswordArgs = {
  otp: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationCreateBusinessTagArgs = {
  businessTag: BusinessTagInput;
};

export type MutationCreateQuestMapLevelChallengeArgs = {
  contentId?: InputMaybe<Scalars["String"]["input"]>;
  levelSlotId: Scalars["String"]["input"];
};

export type MutationCreateSduiJourneyArgs = {
  initialData: Scalars["String"]["input"];
  journeyId: Scalars["String"]["input"];
};

export type MutationCreateTeamSocialGroupArgs = {
  socialGroup: CreateTeamSocialGroupInput;
};

export type MutationCreateWellbeingHubCategoryArgs = {
  category: TeamWellbeingHubCategoryCreateInput;
};

export type MutationCreateWellbeingHubItemArgs = {
  item: TeamWellbeingHubItemInput;
};

export type MutationDeactivateEmployeesArgs = {
  employees: Array<InputMaybe<EmployeeInput>>;
};

export type MutationDeleteConnectionArgs = {
  name: Scalars["String"]["input"];
};

export type MutationDeletePensionConnectionArgs = {
  name: Scalars["String"]["input"];
};

export type MutationDismissTeamOnboardingVideoArgs = {
  dismiss?: InputMaybe<DismissVideoRequest>;
};

export type MutationEditEmployeeArgs = {
  employee: EmployeeWithProductsInput;
};

export type MutationEnable2FaArgs = {
  secret: Scalars["String"]["input"];
  token: Scalars["String"]["input"];
};

export type MutationExchangeMergeDevLinkPublicTokenArgs = {
  publicToken: Scalars["String"]["input"];
};

export type MutationExportEmployeesArgs = {
  type: ExportEmployeesType;
};

export type MutationExportYuCoinRedemptionReportArgs = {
  endDate?: InputMaybe<Scalars["String"]["input"]>;
  startDate?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationGetNewConnectionLinkArgs = {
  name: Scalars["String"]["input"];
};

export type MutationGetNewPensionConnectionLinkArgs = {
  failed?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  success?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationInviteEmployeesArgs = {
  employees: Array<Scalars["String"]["input"]>;
  inviteAll?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationInviteToDuelArgs = {
  duration: Scalars["Int"]["input"];
  leaderboardPlacement?: InputMaybe<Scalars["Int"]["input"]>;
  opponentUserIds?: InputMaybe<Array<Scalars["String"]["input"]>>;
  requestLocation?: InputMaybe<Scalars["String"]["input"]>;
  startDateTime: Scalars["String"]["input"];
  yucoin: Scalars["Int"]["input"];
};

export type MutationJoinGoalArgs = {
  goalId: Scalars["String"]["input"];
};

export type MutationJoinWeeklyGoalArgs = {
  goalId: Scalars["String"]["input"];
};

export type MutationLogGoalEventArgs = {
  sourceId: Scalars["String"]["input"];
  type: Scalars["String"]["input"];
  value: Scalars["Int"]["input"];
};

export type MutationLoginBusinessArgs = {
  email: Scalars["String"]["input"];
  method?: InputMaybe<LoginMethod>;
  password: Scalars["String"]["input"];
  source?: InputMaybe<LoginBusinessSource>;
  tokenExpiration?: InputMaybe<Scalars["Int"]["input"]>;
  twoFactorToken?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationLoginTestUserArgs = {
  age?: InputMaybe<Scalars["String"]["input"]>;
  hasGroupCIC?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasGroupHealth?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasGroupLife?: InputMaybe<Scalars["Boolean"]["input"]>;
  membershipType?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationLoginUserArgs = {
  email: Scalars["String"]["input"];
  intercomHashMethod?: InputMaybe<IntercomHashMethod>;
  method?: InputMaybe<LoginMethod>;
  password: Scalars["String"]["input"];
  tokenExpiration?: InputMaybe<Scalars["Int"]["input"]>;
  uniqueDeviceId?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationMakeBusinessAccessUserSoleOwnerArgs = {
  accountAccessId: Scalars["String"]["input"];
};

export type MutationMarkMobileNotificationsAsViewedByTypeArgs = {
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationNormalisePersonalProductStepArgs = {
  productId: Scalars["String"]["input"];
};

export type MutationOrderWellbeingHubCategoriesArgs = {
  endIndex: Scalars["Int"]["input"];
  startIndex: Scalars["Int"]["input"];
};

export type MutationOrderWellbeingHubItemsArgs = {
  endIndex: Scalars["Int"]["input"];
  startIndex: Scalars["Int"]["input"];
};

export type MutationPerformMobileOnboardingStepArgs = {
  step?: InputMaybe<MobileOnboardingStepPerformed>;
};

export type MutationProcessMembersBulkUploadArgs = {
  action: BulkUploadProcessType;
  importId: Scalars["String"]["input"];
};

export type MutationReactivateTeamEmployeeArgs = {
  businessEmployeeId: Scalars["String"]["input"];
};

export type MutationReassignProductToTeamMemberArgs = {
  businessEmployeeId: Scalars["String"]["input"];
  categoryId: Scalars["String"]["input"];
  productId: Scalars["String"]["input"];
};

export type MutationRedeemMobileSduiRewardArgs = {
  amount: Scalars["Float"]["input"];
  id: Scalars["String"]["input"];
  journeySessionId?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationRedeemRewardArgs = {
  metadata?: InputMaybe<ProductMetadata>;
  product?: InputMaybe<Product>;
};

export type MutationRefreshSessionArgs = {
  intercomHashMethod?: InputMaybe<IntercomHashMethod>;
  tokenExpiration: Scalars["Int"]["input"];
};

export type MutationReinviteEmployeesArgs = {
  employeeIds: Array<Scalars["String"]["input"]>;
};

export type MutationRemoveBeneficiaryFromProductArgs = {
  beneficiaryId: Scalars["ID"]["input"];
  productId: Scalars["ID"]["input"];
};

export type MutationRequestYuStoreQuoteArgs = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  licenses?: InputMaybe<Scalars["Int"]["input"]>;
  type?: InputMaybe<ProductDetailsType>;
};

export type MutationResetBusinessPasswordArgs = {
  otp: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  twoFactorToken?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationResetDataArgs = {
  code: Scalars["String"]["input"];
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationResetPersonalProductStepArgs = {
  productId: Scalars["String"]["input"];
};

export type MutationResetUserPasswordArgs = {
  otp: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type MutationRespondToDuelArgs = {
  duelId: Scalars["String"]["input"];
  hasAccepted: Scalars["Boolean"]["input"];
  leaderboardPlacement?: InputMaybe<Scalars["Int"]["input"]>;
  requestLocation?: InputMaybe<Scalars["String"]["input"]>;
  startDateTime: Scalars["String"]["input"];
};

export type MutationSendBusinessMagicLinkArgs = {
  email: Scalars["String"]["input"];
};

export type MutationSendMagicLinkArgs = {
  email: Scalars["String"]["input"];
  isResetPasswordRequest?: InputMaybe<Scalars["Boolean"]["input"]>;
  referralCode?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationSendMagicLinkWithInviteCodeArgs = {
  companyCode: Scalars["String"]["input"];
  customerCode: Scalars["String"]["input"];
  dob?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  referralCode?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationSendWellbeingHubItemDocumentsArgs = {
  email: Scalars["String"]["input"];
  itemId: Scalars["String"]["input"];
};

export type MutationSetMemberReferralCodeArgs = {
  code: Scalars["String"]["input"];
};

export type MutationSetPasswordArgs = {
  password: Scalars["String"]["input"];
  reset?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationSetShareOfBenefitForProductArgs = {
  productId: Scalars["ID"]["input"];
  shares: Array<BeneficiaryShareOfBenefit>;
};

export type MutationSetTeamOnboardingTaskCompletedArgs = {
  isCompleted?: InputMaybe<Scalars["Boolean"]["input"]>;
  stepId: Scalars["String"]["input"];
  taskId: Scalars["String"]["input"];
};

export type MutationSetUserQuestProgressArgs = {
  currentLevel: Scalars["Int"]["input"];
  yuniversalLevel?: InputMaybe<Scalars["Int"]["input"]>;
  yuniversalMap?: InputMaybe<Scalars["Int"]["input"]>;
};

export type MutationStartMembersBulkUploadArgs = {
  fileName: Scalars["String"]["input"];
  uploadType: BulkMemberUploadType;
};

export type MutationSubmitAppStoreReviewActionArgs = {
  action: AppStoreReviewPromptAction;
  id: Scalars["ID"]["input"];
};

export type MutationSubmitFeedbackFormArgs = {
  answers?: InputMaybe<Array<InputMaybe<AnswerInput>>>;
  id: Scalars["ID"]["input"];
};

export type MutationSubmitPersonalProductStepArgs = {
  data: Scalars["String"]["input"];
  productId: Scalars["String"]["input"];
  stepId: Scalars["String"]["input"];
};

export type MutationSubmitSduiJourneyArgs = {
  action: SubmitSduiJourneyAction;
  data: Scalars["String"]["input"];
  journeyId: Scalars["String"]["input"];
  stepId: Scalars["String"]["input"];
};

export type MutationSubmitSudokuSolutionArgs = {
  results: SudokuSubmission;
};

export type MutationSubmitUnityArgs = {
  levelId: Scalars["String"]["input"];
};

export type MutationSubmitUserDebugDataArgs = {
  id?: InputMaybe<Scalars["String"]["input"]>;
  results: Array<InputMaybe<SampleDebugData>>;
};

export type MutationSubscribeToPerkArgs = {
  perkFields: Array<InputMaybe<SubscribeToPerkField>>;
  perkId: Scalars["ID"]["input"];
};

export type MutationSuggestAnalyticsImprovementArgs = {
  message: Scalars["String"]["input"];
};

export type MutationSwitchBusinessAccessArgs = {
  businessAccountId: Scalars["ID"]["input"];
};

export type MutationTestApproveRateReviewArgs = {
  email?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationTestCreateEngagementDashboardPeriodArgs = {
  businessAccountId: Scalars["String"]["input"];
  date?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationTestDataRefreshReminderArgs = {
  currentDate?: InputMaybe<Scalars["String"]["input"]>;
  daysAdded?: InputMaybe<Scalars["Int"]["input"]>;
  daysSubtracted?: InputMaybe<Scalars["Int"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  sendEmail?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationTestDeactivateTeamLeaversByDateArgs = {
  businessAccountId: Scalars["String"]["input"];
  date?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationTestDirectDebitEmailInvoiceArgs = {
  dueDate: Scalars["String"]["input"];
  email?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationTestDuelPushNotificationsArgs = {
  type?: InputMaybe<DuelTestType>;
};

export type MutationTestEmailReminderArgs = {
  currentDate?: InputMaybe<Scalars["String"]["input"]>;
  daysAdded?: InputMaybe<Scalars["Int"]["input"]>;
  daysSubtracted?: InputMaybe<Scalars["Int"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  productType?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<TestEmailReminderType>;
};

export type MutationTestGroupPremiumArgs = {
  employees?: InputMaybe<Array<InputMaybe<GroupPremiumEmployeeInput>>>;
  from?: InputMaybe<Scalars["String"]["input"]>;
  to?: InputMaybe<Scalars["String"]["input"]>;
  type: Scalars["String"]["input"];
  unitRate: Scalars["Float"]["input"];
};

export type MutationTestInviteEmployeesWithFutureJoinDateArgs = {
  inviteDate?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationTestPaymentChargeArgs = {
  dueDate?: InputMaybe<Scalars["String"]["input"]>;
  invoiceId?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationTestPaymentChargeByBusinessArgs = {
  businessAccountId: Scalars["String"]["input"];
  dueDate?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationTestPushNotificationArgs = {
  body: Scalars["String"]["input"];
  link?: InputMaybe<Scalars["String"]["input"]>;
  os: OperatingSystem;
  title?: InputMaybe<Scalars["String"]["input"]>;
  token: Scalars["String"]["input"];
};

export type MutationTestSendSampleEmailsArgs = {
  customerId: Scalars["String"]["input"];
  template: Scalars["String"]["input"];
  variables: Scalars["String"]["input"];
};

export type MutationTestSendSetupPasswordReminderArgs = {
  accountAccessId: Scalars["String"]["input"];
};

export type MutationTestSpaCheckArgs = {
  archiveUsers?: InputMaybe<Scalars["Boolean"]["input"]>;
  currentDate?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationTestStatePensionAgeArgs = {
  currentDate?: InputMaybe<Scalars["String"]["input"]>;
  dateOfBirth?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type MutationTestToggleEquippedBuffedItemArgs = {
  buffApplicableFor: Scalars["String"]["input"];
  buffType: Scalars["String"]["input"];
  buffValue: Scalars["Float"]["input"];
  productVariantId: Scalars["String"]["input"];
};

export type MutationTestUpdateEngagementDashboardActivitiesArgs = {
  activities: Array<TestUpdateEngagementDashboardActivity>;
  reset?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MutationToggleChallengePauseArgs = {
  levelSlotId: Scalars["String"]["input"];
  paused: Scalars["Boolean"]["input"];
};

export type MutationTrackEventArgs = {
  event: Scalars["String"]["input"];
  properties?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationTransferBusinessAccessArgs = {
  accessId: Scalars["ID"]["input"];
};

export type MutationUnassignProductFromTeamMemberArgs = {
  businessEmployeeId: Scalars["String"]["input"];
  categoryId: Scalars["String"]["input"];
  productId: Scalars["String"]["input"];
};

export type MutationUnsubscribeFromEmailsArgs = {
  email: Scalars["String"]["input"];
};

export type MutationUpdateAccessUserArgs = {
  accessUser: AccessUserInput;
};

export type MutationUpdateAccessUserByIdArgs = {
  accessUser: CreateAccessUserInput;
  accountAccessId: Scalars["String"]["input"];
};

export type MutationUpdateBeneficiaryForProductArgs = {
  beneficiary?: InputMaybe<CustomerBeneficiaryUpdate>;
};

export type MutationUpdateBusinessTagArgs = {
  businessTag: BusinessTagInput;
  businessTagId: Scalars["String"]["input"];
};

export type MutationUpdateCompanySettingsArgs = {
  companySettings: Array<InputCompanySetting>;
};

export type MutationUpdateContactDetailsArgs = {
  contactDetails?: InputMaybe<UpdateContactDetailsInput>;
};

export type MutationUpdateCyclingMeasurementArgs = {
  measurement: DistanceMeasurementType;
};

export type MutationUpdateLeaderboardConsentArgs = {
  consent?: InputMaybe<Scalars["Boolean"]["input"]>;
  leaderboardId?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationUpdateMemberDateOfBirthArgs = {
  dateOfBirth: Scalars["String"]["input"];
};

export type MutationUpdateMemberNameArgs = {
  firstName: Scalars["String"]["input"];
  lastName: Scalars["String"]["input"];
};

export type MutationUpdateMobileRewardStoreLocationArgs = {
  location: Scalars["String"]["input"];
};

export type MutationUpdateMobileSocialLeaderboardConsentsArgs = {
  consents: Array<InputMaybe<SocialLeaderboardConstent>>;
};

export type MutationUpdateMyAccountDetailsArgs = {
  details: MyAccountDetailsInput;
};

export type MutationUpdateNicknameArgs = {
  nickname: Scalars["String"]["input"];
};

export type MutationUpdateQuestMapLevelChallengeArgs = {
  contentId?: InputMaybe<Scalars["String"]["input"]>;
  levelSlotId: Scalars["String"]["input"];
  payload?: InputMaybe<ChallengePayload>;
};

export type MutationUpdateSecondaryEmailArgs = {
  email: Scalars["String"]["input"];
};

export type MutationUpdateSudokuLeaderboardConsentArgs = {
  consent: Scalars["Boolean"]["input"];
};

export type MutationUpdateTeamMemberProfileArgs = {
  businessEmployeeId: Scalars["String"]["input"];
  fields: Array<TeamPortalUpdateMemberField>;
};

export type MutationUpdateTeamSocialGroupArgs = {
  socialGroup: UpdateTeamSocialGroupInput;
  socialGroupId: Scalars["String"]["input"];
};

export type MutationUpdateUserAvatarArgs = {
  avatar?: InputMaybe<UserAvatarInput>;
};

export type MutationUpdateUserAvatarPartsArgs = {
  avatar?: InputMaybe<Array<InputMaybe<UserAvatarPartUpdate>>>;
};

export type MutationUpdateUserHourlyActivityArgs = {
  payload: Array<ChallengesPayload>;
};

export type MutationUpdateUserNotificationsSettingsArgs = {
  isActive: Scalars["Boolean"]["input"];
  time?: InputMaybe<Scalars["String"]["input"]>;
  type: UserNotificationsType;
};

export type MutationUpdateUserPrimaryEmailArgs = {
  newPrimaryEmail: Scalars["String"]["input"];
};

export type MutationUpdateWellbeingHubCategoryArgs = {
  category: TeamWellbeingHubCategoryUpdateInput;
};

export type MutationUpdateWellbeingHubItemArgs = {
  id: Scalars["ID"]["input"];
  item: TeamWellbeingHubItemInput;
};

export type MutationUploadOneWithProductsArgs = {
  employee: EmployeeWithProductsInput;
};

export type MutationUpsertDailyPassivesArgs = {
  payload: Array<ChallengesPayload>;
};

export type MutationUpsertMobileConsentArgs = {
  consent?: InputMaybe<MobileConsentInput>;
};

export type MyAccountDetails = {
  __typename?: "MyAccountDetails";
  addressCity?: Maybe<Scalars["String"]["output"]>;
  addressCountry?: Maybe<Scalars["String"]["output"]>;
  addressCounty?: Maybe<Scalars["String"]["output"]>;
  addressFirstLine?: Maybe<Scalars["String"]["output"]>;
  addressPostCode?: Maybe<Scalars["String"]["output"]>;
  addressSecondLine?: Maybe<Scalars["String"]["output"]>;
  addressThirdLine?: Maybe<Scalars["String"]["output"]>;
  customerId: Scalars["String"]["output"];
  dateOfBirth: Scalars["String"]["output"];
  email: Scalars["String"]["output"];
  existingPaymentCard?: Maybe<Scalars["String"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  fullName: Scalars["String"]["output"];
  hasFailedPayments?: Maybe<Scalars["Boolean"]["output"]>;
  hasTakenUpPersonalProducts?: Maybe<Scalars["Boolean"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  secondaryEmail?: Maybe<Scalars["String"]["output"]>;
};

export type MyAccountDetailsInput = {
  addressCity?: InputMaybe<Scalars["String"]["input"]>;
  addressCountry?: InputMaybe<Scalars["String"]["input"]>;
  addressCounty?: InputMaybe<Scalars["String"]["input"]>;
  addressFirstLine?: InputMaybe<Scalars["String"]["input"]>;
  addressPostCode?: InputMaybe<Scalars["String"]["input"]>;
  addressSecondLine?: InputMaybe<Scalars["String"]["input"]>;
  addressThirdLine?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  secondaryEmail?: InputMaybe<Scalars["String"]["input"]>;
};

export type NotificationSettingsProps = {
  __typename?: "NotificationSettingsProps";
  /** Date string */
  alertTimestamp?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  isActive: Scalars["Boolean"]["output"];
  isAvailable: Scalars["Boolean"]["output"];
  name: Scalars["String"]["output"];
  order: Scalars["Int"]["output"];
  /** @deprecated Not supported */
  time?: Maybe<Scalars["String"]["output"]>;
  type: UserNotificationsType;
};

export type NumberQuery = {
  __typename?: "NumberQuery";
  equals?: Maybe<Scalars["Int"]["output"]>;
  greaterThan?: Maybe<Scalars["Int"]["output"]>;
  greaterThanOrEqual?: Maybe<Scalars["Int"]["output"]>;
  lessThan?: Maybe<Scalars["Int"]["output"]>;
  lessThanOrEqual?: Maybe<Scalars["Int"]["output"]>;
  notEquals?: Maybe<Scalars["Int"]["output"]>;
};

export type NumberQueryInput = {
  equals?: InputMaybe<Scalars["Int"]["input"]>;
  greaterThan?: InputMaybe<Scalars["Int"]["input"]>;
  greaterThanOrEqual?: InputMaybe<Scalars["Int"]["input"]>;
  lessThan?: InputMaybe<Scalars["Int"]["input"]>;
  lessThanOrEqual?: InputMaybe<Scalars["Int"]["input"]>;
  notEquals?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum Os {
  Android = "android",
  Ios = "ios",
}

export type OnboardingResponse = {
  __typename?: "OnboardingResponse";
  totalCoins: Scalars["Int"]["output"];
  yuCoinAwarded?: Maybe<Scalars["Int"]["output"]>;
};

export type OneOffBusinessStatistics = {
  __typename?: "OneOffBusinessStatistics";
  downloads: Scalars["Int"]["output"];
  employees: Scalars["Int"]["output"];
  invited: Scalars["Int"]["output"];
  monthlyActive?: Maybe<Scalars["Int"]["output"]>;
  yumojis: Scalars["Int"]["output"];
};

export enum OperatingSystem {
  Android = "android",
  Ios = "ios",
}

export type OrderBy = {
  column: Scalars["String"]["input"];
  order: Scalars["String"]["input"];
};

export type PassiveChallenge = {
  __typename?: "PassiveChallenge";
  exchange?: Maybe<PassiveStepsExchange>;
  isMainSurge?: Maybe<Scalars["Boolean"]["output"]>;
  levelSlot?: Maybe<LevelSlot>;
};

export enum PassiveChallengeType {
  Cycling = "CYCLING",
  Meditation = "MEDITATION",
  Onboarding = "ONBOARDING",
  Pension = "PENSION",
  Steps = "STEPS",
}

export type PassiveChallengesLastUpdate = {
  __typename?: "PassiveChallengesLastUpdate";
  cycling?: Maybe<Scalars["String"]["output"]>;
  meditation?: Maybe<Scalars["String"]["output"]>;
  steps?: Maybe<Scalars["String"]["output"]>;
};

export type PassiveChallengesResponse = {
  __typename?: "PassiveChallengesResponse";
  challenges: Array<Challenge>;
  currentBalance: Scalars["Int"]["output"];
  totalCoins: Scalars["Int"]["output"];
};

export type PassiveResponse = {
  __typename?: "PassiveResponse";
  totalCoins?: Maybe<Scalars["Int"]["output"]>;
};

export type PassiveStepsExchange = {
  __typename?: "PassiveStepsExchange";
  cycling?: Maybe<Scalars["Int"]["output"]>;
  meditation?: Maybe<Scalars["Int"]["output"]>;
  steps?: Maybe<Scalars["Int"]["output"]>;
  surge?: Maybe<Scalars["Int"]["output"]>;
  yucoin?: Maybe<Scalars["Int"]["output"]>;
};

export type PerksComparisonItems = {
  __typename?: "PerksComparisonItems";
  coverType: CoverType;
  perks: Array<PerksComparisonItemsPerks>;
  showPlus?: Maybe<Scalars["Boolean"]["output"]>;
  yuCoinPower: Scalars["Int"]["output"];
};

export type PerksComparisonItemsPerks = {
  __typename?: "PerksComparisonItemsPerks";
  description: Scalars["String"]["output"];
  heading: Scalars["String"]["output"];
  imageUrl: RemoteImage;
  isLocked: Scalars["Boolean"]["output"];
  lockedImageUrl?: Maybe<RemoteImage>;
};

export type PermittedBusiness = {
  __typename?: "PermittedBusiness";
  id: Scalars["ID"]["output"];
  isCurrent: Scalars["Boolean"]["output"];
  name: Scalars["String"]["output"];
};

export type PersonalProductStatus = {
  __typename?: "PersonalProductStatus";
  customerProductId: Scalars["String"]["output"];
  status?: Maybe<YuProductStatus>;
};

export type PersonalProductStepContinueModal = {
  __typename?: "PersonalProductStepContinueModal";
  continueCtaLabel: Scalars["String"]["output"];
  heading: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  image: RemoteImage;
  startOverCtaLabel: Scalars["String"]["output"];
  subheading: Scalars["String"]["output"];
};

export enum PolicyStatus {
  ClaimAdmitted = "CLAIM_ADMITTED",
  ClaimNotified = "CLAIM_NOTIFIED",
  Death = "DEATH",
  Lapsed = "LAPSED",
  Live = "LIVE",
  NotLiveYet = "NOT_LIVE_YET",
  NotTakenUp = "NOT_TAKEN_UP",
  Termination = "TERMINATION",
}

export type Practicioner = {
  __typename?: "Practicioner";
  /** Practicioner name */
  name?: Maybe<Scalars["String"]["output"]>;
  /** Practicioner unique code */
  organisationCode?: Maybe<Scalars["String"]["output"]>;
  /** Medical practice unique code where practicioner practice */
  parentOrganisationCode?: Maybe<Scalars["String"]["output"]>;
};

export type PreviewColumn = {
  __typename?: "PreviewColumn";
  key: Scalars["String"]["output"];
  label: Scalars["String"]["output"];
};

export type PricingConfiguration = {
  __typename?: "PricingConfiguration";
  configuration: Scalars["String"]["output"];
  value: Scalars["Int"]["output"];
};

export type Product = {
  amount?: InputMaybe<Scalars["Float"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
};

export type ProductAction = {
  __typename?: "ProductAction";
  nextModalId?: Maybe<Scalars["String"]["output"]>;
  nextRouteId?: Maybe<Scalars["String"]["output"]>;
  productId: Scalars["String"]["output"];
  shouldBeNormalised?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ProductCategoryInformation = {
  __typename?: "ProductCategoryInformation";
  benefitBasis?: Maybe<Scalars["String"]["output"]>;
  benefitMultipleOrAmount?: Maybe<Scalars["Float"]["output"]>;
  categoryId: Scalars["String"]["output"];
  coverCeaseDate?: Maybe<Scalars["Int"]["output"]>;
  coverCeaseOption?: Maybe<Scalars["String"]["output"]>;
  dateCoverCeasesVerbose?: Maybe<Scalars["String"]["output"]>;
  description: Scalars["String"]["output"];
  lumpSumBenefitVerbose?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  yuCoinPower: Scalars["Int"]["output"];
};

export type ProductDescriptionValuePair = {
  __typename?: "ProductDescriptionValuePair";
  description: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export enum ProductDetailsType {
  GroupProduct = "groupProduct",
  Perk = "perk",
}

export type ProductEarnRateScreen = {
  __typename?: "ProductEarnRateScreen";
  columns: Array<YuScreenEarnRateTableColumn>;
  footer?: Maybe<ProductEarnRateScreenFooter>;
  heading: Scalars["String"]["output"];
};

export type ProductEarnRateScreenFooter = {
  __typename?: "ProductEarnRateScreenFooter";
  markdown?: Maybe<Scalars["String"]["output"]>;
};

export type ProductInformation = {
  __typename?: "ProductInformation";
  categories: Array<ProductCategoryInformation>;
  effectiveDate?: Maybe<Scalars["String"]["output"]>;
  policyAnniversaryDate?: Maybe<Scalars["String"]["output"]>;
  policyName?: Maybe<Scalars["String"]["output"]>;
  policyReviewDate?: Maybe<Scalars["String"]["output"]>;
  productCode: Scalars["String"]["output"];
  productDescription: Scalars["String"]["output"];
  refreshFrequency?: Maybe<Scalars["String"]["output"]>;
};

export type ProductMetadata = {
  avios?: InputMaybe<AviosMetadata>;
};

export type ProductPaymentHistoryInfoPanelButton = {
  __typename?: "ProductPaymentHistoryInfoPanelButton";
  event?: Maybe<SduiAction>;
  label: Scalars["String"]["output"];
  onPress: SduiAction;
};

export type ProductPaymentHistoryInfoPanelContainerActions = {
  __typename?: "ProductPaymentHistoryInfoPanelContainerActions";
  event?: Maybe<SduiAction>;
  onPress: SduiAction;
};

export type ProductPerk = {
  __typename?: "ProductPerk";
  description: Scalars["String"]["output"];
  image: Scalars["String"]["output"];
  perkId: Scalars["String"]["output"];
};

export type ProductSlotItemBackgroundUrls = {
  __typename?: "ProductSlotItemBackgroundUrls";
  coverType: CoverType;
  image: RemoteImage;
};

export type ProductUnderwritingStep = {
  __typename?: "ProductUnderwritingStep";
  /** Content that just sits on the screen. Anywhere you want. Be careful with this powerful tool. Not supported by detached steps. */
  absolute?: Maybe<Array<Maybe<AbsoluteContentPersonalItem>>>;
  /** Content displayed inside the scrollview area */
  body?: Maybe<Array<Maybe<ContentPersonalProductItem>>>;
  /** Container styles go here. Not supported by detached steps. */
  containerStyles?: Maybe<Array<SduiStyle>>;
  customerProductId: Scalars["String"]["output"];
  /** Content displayed on the bottom of the screen. Sticky footer. Not supported by detached steps. */
  footer?: Maybe<Array<Maybe<ContentPersonalProductItem>>>;
  /** Footer styles go here. Not supported by detached steps. */
  footerStyles?: Maybe<Array<SduiStyle>>;
  /** Content displayed on the top of the screen. Sticky header. Not supported by detached steps. */
  header?: Maybe<Array<Maybe<ContentPersonalProductItem>>>;
  introStep?: Maybe<Scalars["Boolean"]["output"]>;
  stepData?: Maybe<Scalars["String"]["output"]>;
  stepId: Scalars["String"]["output"];
  /** Web styles go here. */
  webStyles?: Maybe<Array<SduiStyle>>;
};

export type ProductsQuery = {
  __typename?: "ProductsQuery";
  productVersionIds?: Maybe<StringQuery>;
  total?: Maybe<NumberQuery>;
};

export type ProductsQueryInput = {
  productVersionIds?: InputMaybe<StringQueryInput>;
  total?: InputMaybe<NumberQueryInput>;
};

export type Purchase = {
  __typename?: "Purchase";
  amount?: Maybe<Scalars["Float"]["output"]>;
  code?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  currency_code?: Maybe<Scalars["String"]["output"]>;
  delivery_url?: Maybe<Scalars["String"]["output"]>;
  expiry_date?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  metadata?: Maybe<Metadata>;
  name?: Maybe<Scalars["String"]["output"]>;
  pin?: Maybe<Scalars["String"]["output"]>;
  reward?: Maybe<Reward>;
  rewardProviderId?: Maybe<Scalars["String"]["output"]>;
  rewardTitle?: Maybe<Scalars["String"]["output"]>;
  sduiStepId?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
  userId?: Maybe<Scalars["String"]["output"]>;
  yuCoinsSpent?: Maybe<Scalars["Int"]["output"]>;
};

/** Default types to be extended / root query */
export type Query = {
  __typename?: "Query";
  aNumber?: Maybe<Scalars["Int"]["output"]>;
  downloadUserDocument: Scalars["String"]["output"];
  findUserAddress?: Maybe<Array<Maybe<ShippingAddress>>>;
  get2FASecret?: Maybe<TwoFaSecretResponse>;
  getAPIVersion?: Maybe<ApiDetails>;
  getActiveAndInactiveCount: ActiveAndInactiveCount;
  getActiveBuffsOverlay: ActiveBuffsOverlay;
  getActivityHistoryWithLevels?: Maybe<Array<Maybe<ActivityHistory>>>;
  getAdBanners?: Maybe<Array<Maybe<AdBanner>>>;
  /** @deprecated Use getMobilePurchasesList */
  getAllPurchases?: Maybe<Array<Maybe<Purchase>>>;
  /** Get QR code for users to scan & be redirected to the app store */
  getAppQRCode: Scalars["String"]["output"];
  getAvailablePermissions: Array<TeamPortalPermission>;
  /** Gets all the colours for a particular partType. */
  getAvatarColors?: Maybe<Array<Maybe<AvatarColor>>>;
  /** Gets the avatar part svg. */
  getAvatarPart?: Maybe<AvatarPart>;
  getBulkMemberUpload: BulkMemberUpload;
  getBulkMemberUploadTemplateURL: Scalars["String"]["output"];
  getBusinessAccessPermissions: Array<BusinessAccessPermission>;
  getBusinessAccessUser: BusinessAccessUser;
  getBusinessEmailDomain: GetBusinessEmailDomainResult;
  getBusinessOwnerName?: Maybe<Scalars["String"]["output"]>;
  getBusinessSession: BusinessSession;
  getBusinessTag: BusinessTag;
  getBusinessTags: GetBusinessTagsResponse;
  getBusinessTagsForBusiness?: Maybe<Array<BusinessTag>>;
  getCSMBusinessAccessUsers: Array<BusinessAccessUser>;
  getCompanySettings: Array<CompanySetting>;
  /** Get user personal contact details */
  getContactDetails?: Maybe<GetPersonalContactDetailsResponse>;
  getCountOfBusinessTagSocialGroups: Scalars["Int"]["output"];
  getCurrentFeatures: Array<UserFeature>;
  getCurrentLevel?: Maybe<Level>;
  getCurrentQuestLevels?: Maybe<Array<Maybe<Level>>>;
  getCurrentUser?: Maybe<User>;
  getCustomerMatcherFields: Array<CustomerMatcherField>;
  getCustomerProductFromProductId?: Maybe<CustomerProductData>;
  getDailyPensionContribution: DailyPensionContribution;
  getDailyScreenCustomIcon?: Maybe<DailyScreenCustomIcon>;
  getDebugCodes?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /** Get duel invitations */
  getDuelInvitations?: Maybe<Array<Maybe<Duel>>>;
  /** Get all the available duel templates. */
  getDuelTemplates?: Maybe<DuelTemplates>;
  /** Get the details of the users associated with a duel. */
  getDuellerDetails?: Maybe<DuellerDetails>;
  /** Get all of a specific user's duels. */
  getDuels?: Maybe<Array<Maybe<Duel>>>;
  /** Get completed duels */
  getDuelsCompleted?: Maybe<Array<Maybe<DuelsCompletedResponse>>>;
  /** Get duels happening today */
  getDuelsToday?: Maybe<Array<Maybe<Duel>>>;
  /** Get duels happening tomorrow */
  getDuelsTomorrow?: Maybe<Array<Maybe<Duel>>>;
  getEarnRateDetails?: Maybe<Array<Maybe<EarnRateDetails>>>;
  getEmailReminderRecipients?: Maybe<EmailReminderRecipientsAndDates>;
  getEmployee: BusinessEmployee;
  getEmployeeDashboard?: Maybe<EmployeeDashboard>;
  getEmployees: EmployeesList;
  getEngagementDashboardActivitiesProgress: Array<EngagementDashboardActivity>;
  getEngagementDashboardClaimableActivitiesForCategory: EngagementDashboardClaimableActivityForCategory;
  getEngagementDashboardDownloadRate: TeamAnalyticsDashboardWidget;
  getEngagementDashboardLastMonthsActivityData: TeamAnalyticsDashboardWidget;
  getEngagementDashboardPeriod: EngagementDashboardPeriod;
  getEngagementDashboardPeriodHistory: Array<EngagementDashboardPeriodHistory>;
  getEngagementDashboardPeriodWrapUp: Array<EngagementDashboardPeriodWrapUpItem>;
  getEngagementDashboardTasks: Array<EngagementDashboardTask>;
  getGoalDetails?: Maybe<GoalDetails>;
  getHRBusinessAccessUsers: Array<BusinessAccessUser>;
  getHrisConnection: HrisConnection;
  getHrisSyncHistory: HrisSyncList;
  getImgixUploadURL?: Maybe<ImgixUploadInfo>;
  getInAppYuniversityCourseModuleDetails: InAppYuniversityCourseModuleDetails;
  getInAppYuniversityCourses: InAppYuniversityCourses;
  getIntercomHash?: Maybe<Scalars["String"]["output"]>;
  getLeaderboard?: Maybe<Array<Maybe<LeaderboardItem>>>;
  getMagicLink?: Maybe<Scalars["String"]["output"]>;
  getMagicLinkForAutomation?: Maybe<Scalars["String"]["output"]>;
  getMedia?: Maybe<Array<Maybe<Media>>>;
  /** Returns a list of medical practices with practitioners available. It accepts medical practice name or postcode as input */
  getMedicalPractices?: Maybe<Array<Maybe<MedicalPractice>>>;
  /** Get the users rewards with image to show featured */
  getMemberFeaturedRewards: Array<Scalars["String"]["output"]>;
  /** Get the current Url progress */
  getMemberOnboardingYuCoinProgress?: Maybe<MemberOnboardingYuCoinProgress>;
  getMergeDevLinkToken: Scalars["String"]["output"];
  getMobileAssets: Array<RemoteImage>;
  getMobileAssetsWithVersion: MobileAssets;
  getMobileGameWeeklies: MobileGameWeeklies;
  getMobileHints?: Maybe<Array<Hint>>;
  getMobilePaymentCardSetup: MobilePaymentCardSetup;
  getMobilePurchasesList: MobilePurchasesList;
  getMobileRewardStoreLocations: Array<MobileRewardStoreLocation>;
  getMobileRewardsList: MobileRewardsList;
  getMobileSocialGroupLeaderboardItems: Array<SocialGroupLeaderboardItem>;
  getMobileSocialGroupLeaderboards: Array<SocialGroupLeaderboardGroup>;
  getMobileWhatsNewModal?: Maybe<MobileWhatsNewModal>;
  getMonthlyActiveUsersPercentage: MonthlyActiveUsersPercentage;
  /** Fetch the data that can be viewed from the My Account section of yulife-member-static */
  getMyAccountDetails: MyAccountDetails;
  getOneOffBusinessStatisticsForMonth: OneOffBusinessStatistics;
  getPassiveChallengesLastUpdate: PassiveChallengesLastUpdate;
  getPassiveHourlyActivityLastUpdate: PassiveChallengesLastUpdate;
  /** Get user stripe payment details */
  getPaymentDetails?: Maybe<GetPaymentDetailsResponse>;
  getPeopleFilters: TeamFilter;
  getPerkSubscriptionInfo: GetPerkSubscriptionInfoResponse;
  getPermittedBusinesses: Array<PermittedBusiness>;
  getPersonalProductStatus?: Maybe<PersonalProductStatus>;
  getPersonalProductStep?: Maybe<ProductUnderwritingStep>;
  getPersonalProductStepContinueModal?: Maybe<PersonalProductStepContinueModal>;
  getPersonalProductStepDetached?: Maybe<ProductUnderwritingStep>;
  /** @Deprecated - Use the generic getPersonalProductStepDetached with Documents stepId */
  getPersonalProductStepDetachedDocuments?: Maybe<ProductUnderwritingStep>;
  /** @Deprecated - Use the generic getPersonalProductStepDetached with FAQ stepId */
  getPersonalProductStepDetachedFaqs?: Maybe<ProductUnderwritingStep>;
  getPricingConfigurations: Array<PricingConfiguration>;
  /** Query to get a customer's beneficiaries for a product */
  getProductBeneficiaries: CustomerProductBeneficiaries;
  getProductDetails?: Maybe<YuProductDetails>;
  /** @Deprecated - RN client version >= 3.47.0 uses getYuCoinPowerExplained */
  getProductEarnRate?: Maybe<ProductEarnRateScreen>;
  getProductInformation: ProductInformation;
  getProductPaymentHistory: YuScreenProductPaymentHistory;
  getProductSlotItemBackgroundUrls: Array<ProductSlotItemBackgroundUrls>;
  /** Gets yumoji part type (e.g. Chest) associated to a product */
  getProductYumojiPart: GetProductYumojiPartResponse;
  getPublicYuAPIConfig: ApiConfig;
  getQuestMapLevel: QuestMapLevel;
  getQuestMapLevelChallengeContent?: Maybe<Array<Maybe<QuestMapLevelChallengeContent>>>;
  getQuestMapLevelChallengeDetails: QuestMapLevelChallengeDetails;
  getQuestMapLevelList: Array<QuestMapLevelListItem>;
  /** Get the names and avatars of the people you've most recently duelled. */
  getRecentDuelOpponents?: Maybe<Array<Maybe<DuelSearchResult>>>;
  getReferralBackground: RemoteImage;
  getReferralOnboardingPopover: ReferralOnboardingPopover;
  getResources: Array<Resource>;
  /** @deprecated Use getMobileRewardsList */
  getRewardItemDetails: RewardItemDetails;
  getRewardsProductsList: Array<RewardsProductsListItem>;
  getSduiJourney?: Maybe<JourneyData>;
  /** Request a static step, or a static step from a journey */
  getSduiStaticStep?: Maybe<StaticStepData>;
  getSession?: Maybe<Session>;
  getStatistics?: Maybe<UserProfileStatisticComparison>;
  getSudokuBoard?: Maybe<SudokuBoardResponse>;
  getSudokuLeaderboard?: Maybe<Array<SudokuLeaderboardItem>>;
  getSudokuPractice: SudokuBoard;
  getSudokuStats?: Maybe<SudokuStats>;
  getTeamAdoptionData: Array<TeamAnalyticsDashboardWidget>;
  getTeamAnalyticsBarChart: TeamAnalyticsDashboardWidget;
  getTeamAnalyticsLineChart: TeamAnalyticsDashboardWidget;
  getTeamAnalyticsPeriods: Array<TeamAnalyticsTimePeriod>;
  getTeamAnalyticsSummaryCard: TeamAnalyticsDashboardWidget;
  getTeamAnalyticsTableData: TeamAnalyticsTable;
  getTeamAssignProductFields: Array<TeamEmployeeSection>;
  getTeamDashboardDates: Array<TeamDashboardDates>;
  getTeamDashboardGoals: TeamDashboardGoals;
  getTeamDidYouKnowInsights: TeamAnalyticsDashboardDidYouKnowSummary;
  getTeamMemberForm: TeamMemberForm;
  getTeamMemberProfile: TeamEmployeeProfile;
  getTeamProductInformation: TeamProductInformation;
  getTeamProducts: Array<TeamProducts>;
  getTeamSocialGroup: TeamSocialGroup;
  getTeamSocialGroups: GetTeamSocialGroupsResponse;
  getTeamSocialGroupsCount: Scalars["Int"]["output"];
  getTodayEarnings: TodayEarnings;
  /** Get total coins for user to refresh coin amount */
  getTotalCoins: Scalars["Int"]["output"];
  getUninvitedEmployeeCount: Scalars["Int"]["output"];
  getUnityRewards: UnityRewards;
  getUserActiveChallenge?: Maybe<ActiveChallenge>;
  getUserActiveStreak?: Maybe<ActiveStreak>;
  getUserBusiness?: Maybe<UserBusiness>;
  getUserCoinLedger?: Maybe<CoinLedger>;
  getUserConnections?: Maybe<Array<Maybe<Connection>>>;
  getUserDebugData: DebugData;
  getUserDocuments: Array<DocumentLink>;
  getUserFeatures: Array<UserFeature>;
  getUserLeaderboards?: Maybe<Array<Maybe<Leaderboard>>>;
  getUserMobileConsent?: Maybe<MobileConsent>;
  getUserNotificationsSettings?: Maybe<Array<Maybe<NotificationSettingsProps>>>;
  getUserOnboardings: UserOnboarding;
  getUserPassiveChallengesEarnRate?: Maybe<UserPassiveChallengesEarnRate>;
  getUserProfile: UserProfile;
  getUserProfileEvents: Array<UserProfileEvents>;
  getUserSurge?: Maybe<Surge>;
  getUserTodayActivity?: Maybe<Array<Maybe<ActivityHistoryChallenge>>>;
  getWellbeingHubCategories: Array<TeamWellbeingHubCategory>;
  getWellbeingHubDefaultImages: Array<TeamWellbeingHubImage>;
  getWellbeingHubDocumentDownloadUrl: Scalars["String"]["output"];
  getWellbeingHubDocumentUploadUrl: WellbeingHubDocumentUploadUrlResponse;
  getWellbeingHubItem: TeamWellbeingHubItem;
  getWellbeingHubItems?: Maybe<Array<TeamWellbeingHubItem>>;
  /** @Deprecated - RN client version >= 3.110 uses getYuCoinPowerInfo */
  getYuCoinPowerExplained: YuCoinPowerExplained;
  getYuCoinPowerInfo: YuCoinPowerExplainedScreen;
  getYuScreen?: Maybe<YuScreen>;
  getYuScreenProductDetails: YuScreenProductDetails;
  getYuScreenProductList?: Maybe<YuScreenProductList>;
  getYuScreenProductSlots?: Maybe<YuScreenProducts>;
  getYuScreenProductSurvey: YuScreenProductSurvey;
  getYuStoreCSMs: Array<YuStoreImage>;
  getYuStoreCredit: EngagementDashboardYuStoreCredit;
  getYuStorePerks: Array<YuStorePerk>;
  getYuStoreProductDetails: YuStoreProduct;
  getYuStoreProductSections: Array<YuStoreProductSection>;
  getYuStoreRecommendations: Array<YuStoreProduct>;
  getYulifer?: Maybe<Yulifer>;
  /** Gets all the categories to display in the scroller for the yumoji builder */
  getYumojiBuilderCategoryList: Array<YumojiBuilderCategory>;
  /** Gets the default avatar/current avatar for the user */
  getYumojiBuilderInitialParts: Array<YumojiBuilderPart>;
  /** Gets all yumoji items that should be displayed in the list under a category in the yumoji builder */
  getYumojiBuilderItemsForCategory: YumojiBuilderItemsForCategory;
  /**
   * Gets all cover type and world variants given a part type
   * Takes user body part from database
   */
  getYumojiPartUrlSet: GetYumojiPartSet;
  /** Used for personal products when needing the part assets on their own */
  getYumojiPartUrlSetSwiper: GetYumojiPartSet;
  /** Used for personal products when needed to try on a new armour piece */
  getYumojiRemoteFittingRoom: YumojiRemoteFittingRoom;
  /** Returns the urls for every single avatar part */
  getYumojiRemoteParts: YumojiRemoteParts;
  /** Gets all the avatar parts svg. */
  listAvatarParts?: Maybe<Array<Maybe<AvatarPart>>>;
  mobileUpgradeRequired?: Maybe<MobileUpgradeRequired>;
  pendingAppStoreReview?: Maybe<AppStoreReviewPrompt>;
  pendingFeedbackForm?: Maybe<FeedbackForm>;
  peopleWelcomeModalDismissed?: Maybe<Scalars["Boolean"]["output"]>;
  referralInformation: UserReferralInformation;
  /** Search for the name of someone you can invite to a duel. */
  searchForDuelOpponent?: Maybe<Array<Maybe<DuelSearchResult>>>;
  searchLeaderboardUser: Array<SearchLeaderboardUser>;
  teamOnboardingProgress: TeamOnboardingProgress;
  wellbeingHubCategories: Array<WellbeingHubCategory>;
  wellbeingHubItem: WellbeingHubItem;
  wellbeingHubItems: Array<WellbeingHubItem>;
};

/** Default types to be extended / root query */
export type QueryDownloadUserDocumentArgs = {
  documentId: Scalars["ID"]["input"];
};

/** Default types to be extended / root query */
export type QueryFindUserAddressArgs = {
  postcode: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetActiveBuffsOverlayArgs = {
  buffTypes: Array<BuffArea>;
};

/** Default types to be extended / root query */
export type QueryGetActivityHistoryWithLevelsArgs = {
  isFullActivity?: InputMaybe<Scalars["Boolean"]["input"]>;
  monthsAgo?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Default types to be extended / root query */
export type QueryGetAdBannersArgs = {
  place?: InputMaybe<Scalars["String"]["input"]>;
};

/** Default types to be extended / root query */
export type QueryGetAvatarColorsArgs = {
  colorSchemeIds?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  partType?: InputMaybe<AvatarPartType>;
};

/** Default types to be extended / root query */
export type QueryGetAvatarPartArgs = {
  partId?: InputMaybe<Scalars["String"]["input"]>;
};

/** Default types to be extended / root query */
export type QueryGetBulkMemberUploadArgs = {
  importId: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetBulkMemberUploadTemplateUrlArgs = {
  localDate?: InputMaybe<Scalars["String"]["input"]>;
  uploadType: BulkMemberUploadType;
};

/** Default types to be extended / root query */
export type QueryGetBusinessAccessUserArgs = {
  accountAccessId: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetBusinessTagArgs = {
  businessTagId: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetBusinessTagsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

/** Default types to be extended / root query */
export type QueryGetContactDetailsArgs = {
  contactDetailType?: InputMaybe<CustomerContactDetailType>;
};

/** Default types to be extended / root query */
export type QueryGetCurrentFeaturesArgs = {
  features?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** Default types to be extended / root query */
export type QueryGetCustomerMatcherFieldsArgs = {
  options?: InputMaybe<CustomerMatchingRuleOptionsInput>;
};

/** Default types to be extended / root query */
export type QueryGetCustomerProductFromProductIdArgs = {
  productId: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetDuellerDetailsArgs = {
  opponentId: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetEmailReminderRecipientsArgs = {
  currentDate?: InputMaybe<Scalars["String"]["input"]>;
  daysAdded?: InputMaybe<Scalars["Int"]["input"]>;
  daysSubtracted?: InputMaybe<Scalars["Int"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  productType?: InputMaybe<Scalars["String"]["input"]>;
  type?: InputMaybe<TestEmailReminderType>;
};

/** Default types to be extended / root query */
export type QueryGetEmployeeArgs = {
  userId: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetEmployeesArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrderBy>;
  products?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  showActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  status?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  tags?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** Default types to be extended / root query */
export type QueryGetEngagementDashboardClaimableActivitiesForCategoryArgs = {
  category: EngagementDashboardActivityCategory;
};

/** Default types to be extended / root query */
export type QueryGetEngagementDashboardPeriodWrapUpArgs = {
  periodId: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetGoalDetailsArgs = {
  id: Scalars["ID"]["input"];
  stageId?: InputMaybe<Scalars["String"]["input"]>;
};

/** Default types to be extended / root query */
export type QueryGetHrisSyncHistoryArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Default types to be extended / root query */
export type QueryGetImgixUploadUrlArgs = {
  fileName: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetInAppYuniversityCourseModuleDetailsArgs = {
  id: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetInAppYuniversityCoursesArgs = {
  category: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetIntercomHashArgs = {
  method: IntercomHashMethod;
};

/** Default types to be extended / root query */
export type QueryGetLeaderboardArgs = {
  leaderboardId?: InputMaybe<Scalars["String"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  targetId?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Default types to be extended / root query */
export type QueryGetMagicLinkArgs = {
  goToMyAccount?: InputMaybe<Scalars["Boolean"]["input"]>;
  redirectUrl?: InputMaybe<Scalars["String"]["input"]>;
  site?: InputMaybe<MagicLinkSite>;
};

/** Default types to be extended / root query */
export type QueryGetMagicLinkForAutomationArgs = {
  userId: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetMediaArgs = {
  tags?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

/** Default types to be extended / root query */
export type QueryGetMedicalPracticesArgs = {
  nameOrPostcode?: InputMaybe<Scalars["String"]["input"]>;
};

/** Default types to be extended / root query */
export type QueryGetMemberOnboardingYuCoinProgressArgs = {
  url: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetMobilePurchasesListArgs = {
  filter?: InputMaybe<RewardListFilter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Default types to be extended / root query */
export type QueryGetMobileRewardsListArgs = {
  tag?: InputMaybe<Scalars["String"]["input"]>;
};

/** Default types to be extended / root query */
export type QueryGetMobileSocialGroupLeaderboardItemsArgs = {
  filter?: InputMaybe<SocialGroupLeaderboardItemsFilter>;
  leaderboardId: Scalars["String"]["input"];
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  targetId?: InputMaybe<Scalars["String"]["input"]>;
};

/** Default types to be extended / root query */
export type QueryGetMonthlyActiveUsersPercentageArgs = {
  timePeriod: Scalars["Int"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetOneOffBusinessStatisticsForMonthArgs = {
  date?: InputMaybe<Scalars["String"]["input"]>;
};

/** Default types to be extended / root query */
export type QueryGetPerkSubscriptionInfoArgs = {
  perkId: Scalars["ID"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetPersonalProductStatusArgs = {
  productId: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetPersonalProductStepArgs = {
  os?: InputMaybe<Os>;
  productId: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetPersonalProductStepContinueModalArgs = {
  productId: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetPersonalProductStepDetachedArgs = {
  os?: InputMaybe<Os>;
  productId: Scalars["String"]["input"];
  stepId: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetPersonalProductStepDetachedDocumentsArgs = {
  os?: InputMaybe<Os>;
  productId: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetPersonalProductStepDetachedFaqsArgs = {
  os?: InputMaybe<Os>;
  productId: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetProductBeneficiariesArgs = {
  productId?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Default types to be extended / root query */
export type QueryGetProductDetailsArgs = {
  id: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetProductEarnRateArgs = {
  customerProductId?: InputMaybe<Scalars["String"]["input"]>;
};

/** Default types to be extended / root query */
export type QueryGetProductInformationArgs = {
  productId: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetProductPaymentHistoryArgs = {
  customerProductId: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetProductYumojiPartArgs = {
  customerProductId: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetQuestMapLevelArgs = {
  level: Scalars["Int"]["input"];
  yuniversalMap?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Default types to be extended / root query */
export type QueryGetQuestMapLevelChallengeContentArgs = {
  contentTags: Array<Scalars["String"]["input"]>;
  levelSlotId: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetQuestMapLevelChallengeDetailsArgs = {
  levelSlotId: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetRecentDuelOpponentsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Default types to be extended / root query */
export type QueryGetRewardItemDetailsArgs = {
  id: Scalars["ID"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetSduiJourneyArgs = {
  dynamicId?: InputMaybe<Scalars["String"]["input"]>;
  journeyId: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetSduiStaticStepArgs = {
  dynamicId?: InputMaybe<Scalars["String"]["input"]>;
  journeyId?: InputMaybe<Scalars["String"]["input"]>;
  stepId: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetStatisticsArgs = {
  userId?: InputMaybe<Scalars["String"]["input"]>;
};

/** Default types to be extended / root query */
export type QueryGetSudokuBoardArgs = {
  date?: InputMaybe<Scalars["String"]["input"]>;
};

/** Default types to be extended / root query */
export type QueryGetSudokuLeaderboardArgs = {
  date: Scalars["String"]["input"];
  difficulty?: InputMaybe<SudokuDifficulty>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Default types to be extended / root query */
export type QueryGetTeamAnalyticsBarChartArgs = {
  key: TeamAnalyticsBarChartKey;
  timePeriod: Scalars["Int"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetTeamAnalyticsLineChartArgs = {
  key: TeamAnalyticsLineChartKey;
  timePeriod: Scalars["Int"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetTeamAnalyticsSummaryCardArgs = {
  key: TeamSummaryCardKey;
  timePeriod: Scalars["Int"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetTeamAnalyticsTableDataArgs = {
  key: TeamAnalyticsTableKey;
  timePeriod: Scalars["Int"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetTeamAssignProductFieldsArgs = {
  businessEmployeeId: Scalars["String"]["input"];
  categoryId?: InputMaybe<Scalars["String"]["input"]>;
  filterOutAssignedProducts?: InputMaybe<Scalars["Boolean"]["input"]>;
  productId?: InputMaybe<Scalars["String"]["input"]>;
};

/** Default types to be extended / root query */
export type QueryGetTeamDashboardGoalsArgs = {
  date?: InputMaybe<Scalars["String"]["input"]>;
};

/** Default types to be extended / root query */
export type QueryGetTeamDidYouKnowInsightsArgs = {
  key: TeamDidYouKnowInsightsKey;
  numberOfMonths?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Default types to be extended / root query */
export type QueryGetTeamMemberFormArgs = {
  businessEmployeeId?: InputMaybe<Scalars["String"]["input"]>;
  products?: InputMaybe<Array<TeamProductInput>>;
};

/** Default types to be extended / root query */
export type QueryGetTeamMemberProfileArgs = {
  businessEmployeeId: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetTeamProductInformationArgs = {
  productId: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetTeamProductsArgs = {
  businessEmployeeId?: InputMaybe<Scalars["String"]["input"]>;
  returnEmptyCategories?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Default types to be extended / root query */
export type QueryGetTeamSocialGroupArgs = {
  socialGroupId: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetTeamSocialGroupsArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<OrderBy>;
  search?: InputMaybe<Scalars["String"]["input"]>;
};

/** Default types to be extended / root query */
export type QueryGetUnityRewardsArgs = {
  level: Scalars["Int"]["input"];
  yuniversalLevel?: InputMaybe<Scalars["Int"]["input"]>;
  yuniversalMap?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Default types to be extended / root query */
export type QueryGetWellbeingHubDocumentDownloadUrlArgs = {
  key: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetWellbeingHubDocumentUploadUrlArgs = {
  fileName: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetWellbeingHubItemArgs = {
  wellbeingHubItemId: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetYuCoinPowerInfoArgs = {
  productIds: Array<Scalars["String"]["input"]>;
};

/** Default types to be extended / root query */
export type QueryGetYuScreenProductDetailsArgs = {
  customerProductId: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryGetYuStoreProductDetailsArgs = {
  id: Scalars["String"]["input"];
  type?: InputMaybe<ProductDetailsType>;
};

/** Default types to be extended / root query */
export type QueryGetYuStoreRecommendationsArgs = {
  id: Scalars["String"]["input"];
  type?: InputMaybe<ProductDetailsType>;
};

/** Default types to be extended / root query */
export type QueryGetYumojiBuilderInitialPartsArgs = {
  bodyType?: InputMaybe<AvatarBodyType>;
};

/** Default types to be extended / root query */
export type QueryGetYumojiBuilderItemsForCategoryArgs = {
  bodyType: AvatarBodyType;
  categoryId: Scalars["String"]["input"];
  colorSchemeId?: InputMaybe<Scalars["String"]["input"]>;
  partId?: InputMaybe<Scalars["String"]["input"]>;
};

/** Default types to be extended / root query */
export type QueryGetYumojiPartUrlSetArgs = {
  partType?: InputMaybe<AvatarPartType>;
};

/** Default types to be extended / root query */
export type QueryGetYumojiPartUrlSetSwiperArgs = {
  partType?: InputMaybe<AvatarPartType>;
};

/** Default types to be extended / root query */
export type QueryGetYumojiRemoteFittingRoomArgs = {
  coverType: CoverType;
  customerProductId: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QueryListAvatarPartsArgs = {
  bodyType?: InputMaybe<AvatarBodyType>;
  partType?: InputMaybe<AvatarPartType>;
};

/** Default types to be extended / root query */
export type QueryPendingFeedbackFormArgs = {
  supportedTypes?: InputMaybe<Array<InputMaybe<FeedbackFormQuestionType>>>;
};

/** Default types to be extended / root query */
export type QueryReferralInformationArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Default types to be extended / root query */
export type QuerySearchForDuelOpponentArgs = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  query: Scalars["String"]["input"];
};

/** Default types to be extended / root query */
export type QuerySearchLeaderboardUserArgs = {
  name: Scalars["String"]["input"];
  socialGroupId?: InputMaybe<Scalars["ID"]["input"]>;
  socialGroupLeaderboardId?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Default types to be extended / root query */
export type QueryWellbeingHubCategoriesArgs = {
  os?: InputMaybe<Os>;
};

/** Default types to be extended / root query */
export type QueryWellbeingHubItemArgs = {
  id: Scalars["ID"]["input"];
  os?: InputMaybe<Os>;
};

/** Default types to be extended / root query */
export type QueryWellbeingHubItemsArgs = {
  categories?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  os?: InputMaybe<Os>;
};

export type QuestMapLevel = {
  __typename?: "QuestMapLevel";
  date?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  level: Scalars["Int"]["output"];
  levelChest?: Maybe<Scalars["String"]["output"]>;
  slots: Array<Maybe<QuestMapLevelSlot>>;
};

export type QuestMapLevelChallengeContent = {
  __typename?: "QuestMapLevelChallengeContent";
  formattedDuration: Scalars["String"]["output"];
  media: Media;
  reward: Scalars["Int"]["output"];
  stars: Scalars["Int"]["output"];
};

export type QuestMapLevelChallengeDetails = {
  __typename?: "QuestMapLevelChallengeDetails";
  actionStyles: QuestMapLevelChallengeDetailsStyles;
  assets: QuestMapLevelChallengeDetailsAssets;
  backgroundColour: Scalars["String"]["output"];
  heading: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  internalContent?: Maybe<Array<Maybe<QuestMapLevelChallengeDetailsContent>>>;
  progressBar: QuestMapLevelProgressBar;
  topBarType: TopBarType;
};

export type QuestMapLevelChallengeDetailsAssets = {
  __typename?: "QuestMapLevelChallengeDetailsAssets";
  backgroundImage: RemoteImage;
  detailsImage: RemoteImage;
  historyImage: RemoteImage;
  tileImage: RemoteImage;
};

export type QuestMapLevelChallengeDetailsContent = {
  __typename?: "QuestMapLevelChallengeDetailsContent";
  buttons: Array<QuestMapLevelChallengeDetailsContentButtons>;
  contentMediaTags: Array<Scalars["String"]["output"]>;
  contentType: Scalars["String"]["output"];
  description: Scalars["String"]["output"];
  logo: RemoteImage;
  promotionReward?: Maybe<QuestMapLevelChallengeDetailsContentPromotionReward>;
  providerImage?: Maybe<RemoteImage>;
  providerLogo?: Maybe<QuestMapLevelChallengeDetailsContentProviderLogo>;
  tag?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
};

export type QuestMapLevelChallengeDetailsContentApp = {
  __typename?: "QuestMapLevelChallengeDetailsContentApp";
  androidUrl: Scalars["String"]["output"];
  appName: Scalars["String"]["output"];
  appStoreId: Scalars["String"]["output"];
  appStoreLocale: Scalars["String"]["output"];
  faqUrl: Scalars["String"]["output"];
  iosUrl: Scalars["String"]["output"];
  playStoreId: Scalars["String"]["output"];
};

export type QuestMapLevelChallengeDetailsContentButtons = {
  __typename?: "QuestMapLevelChallengeDetailsContentButtons";
  color: Scalars["String"]["output"];
  height: Scalars["Int"]["output"];
  logo: RemoteImage;
  options?: Maybe<QuestMapLevelChallengeDetailsContentApp>;
  title: Scalars["String"]["output"];
  width: Scalars["Int"]["output"];
};

export type QuestMapLevelChallengeDetailsContentPromotionReward = {
  __typename?: "QuestMapLevelChallengeDetailsContentPromotionReward";
  backgroundImage: RemoteImage;
  buttonLabel: Scalars["String"]["output"];
  description: Scalars["String"]["output"];
  discount: Scalars["String"]["output"];
  logo: RemoteImage;
  rewardId: Scalars["String"]["output"];
  sduiAction: SduiAction;
  title: Scalars["String"]["output"];
};

export type QuestMapLevelChallengeDetailsContentProviderLogo = {
  __typename?: "QuestMapLevelChallengeDetailsContentProviderLogo";
  height: Scalars["Int"]["output"];
  logo: RemoteImage;
  width: Scalars["Int"]["output"];
};

export type QuestMapLevelChallengeDetailsStyles = {
  __typename?: "QuestMapLevelChallengeDetailsStyles";
  primaryColour: Scalars["String"]["output"];
  secondaryColour: Scalars["String"]["output"];
};

export type QuestMapLevelGoals = {
  __typename?: "QuestMapLevelGoals";
  goalId: Scalars["String"]["output"];
  milestoneId?: Maybe<Scalars["String"]["output"]>;
};

export type QuestMapLevelListItem = {
  __typename?: "QuestMapLevelListItem";
  goals?: Maybe<Array<QuestMapLevelGoals>>;
  id: Scalars["ID"]["output"];
  level: Scalars["Int"]["output"];
  levelChest?: Maybe<Scalars["String"]["output"]>;
  notificationIcon?: Maybe<RemoteImage>;
  rating?: Maybe<Scalars["Int"]["output"]>;
};

export type QuestMapLevelProgressBar = {
  __typename?: "QuestMapLevelProgressBar";
  barColor: Scalars["String"]["output"];
  goalTextColor: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  progressColor: Scalars["String"]["output"];
  progressGoalEmpty: Scalars["String"]["output"];
  progressGoalFilled: Scalars["String"]["output"];
  progressStarEmpty: Scalars["String"]["output"];
  progressStarFilled: Scalars["String"]["output"];
  progressTextColor: Scalars["String"]["output"];
};

export type QuestMapLevelSlot = {
  __typename?: "QuestMapLevelSlot";
  availableAtLevel: Scalars["Int"]["output"];
  bonusAmount?: Maybe<Scalars["Int"]["output"]>;
  bundleIdentifiers?: Maybe<Array<Scalars["String"]["output"]>>;
  challenges?: Maybe<Array<Maybe<QuestMapLevelSlotChallenge>>>;
  details?: Maybe<QuestMapLevelSlotDetails>;
  duration: Scalars["String"]["output"];
  fitKitTypes: Array<FitKitType>;
  hasBonus: Scalars["Boolean"]["output"];
  hasSurge: Scalars["Boolean"]["output"];
  heading: Scalars["String"]["output"];
  historyImage: RemoteImage;
  id: Scalars["ID"]["output"];
  image: RemoteImage;
  isCompleted: Scalars["Boolean"]["output"];
  isLocked: Scalars["Boolean"]["output"];
  reward?: Maybe<Scalars["String"]["output"]>;
  subtype?: Maybe<Scalars["String"]["output"]>;
  surgeMultiplier?: Maybe<Scalars["Int"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type QuestMapLevelSlotChallenge = {
  __typename?: "QuestMapLevelSlotChallenge";
  iconUrl: RemoteImage;
  id: Scalars["ID"]["output"];
  label: Scalars["String"]["output"];
  rating: Scalars["Int"]["output"];
  reward: Scalars["String"]["output"];
};

export type QuestMapLevelSlotDetails = {
  __typename?: "QuestMapLevelSlotDetails";
  backgroundImage: RemoteImage;
  heading: Scalars["String"]["output"];
  image: RemoteImage;
  internalContent?: Maybe<Array<QuestMapLevelChallengeDetailsContent>>;
  milestones?: Maybe<Array<Maybe<QuestMapLevelSlotDetailsMilestone>>>;
  tutorialUrl?: Maybe<Scalars["String"]["output"]>;
};

export type QuestMapLevelSlotDetailsMilestone = {
  __typename?: "QuestMapLevelSlotDetailsMilestone";
  id: Scalars["ID"]["output"];
  rewardAmount: Scalars["Int"]["output"];
  rewardType: Scalars["String"]["output"];
  target: Scalars["String"]["output"];
};

export enum RnViewPointerEvents {
  Auto = "AUTO",
  BoxNone = "BOX_NONE",
  BoxOnly = "BOX_ONLY",
  None = "NONE",
}

export type RedeemSteps = {
  __typename?: "RedeemSteps";
  id?: Maybe<Scalars["ID"]["output"]>;
  info?: Maybe<Scalars["String"]["output"]>;
  steps?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
};

export type ReferralHistoryItem = {
  __typename?: "ReferralHistoryItem";
  avatarUrl?: Maybe<Scalars["String"]["output"]>;
  coin: Scalars["Int"]["output"];
  date: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
};

export type ReferralMarkdown = {
  __typename?: "ReferralMarkdown";
  header: Scalars["String"]["output"];
  historyEmptyMessage: Scalars["String"]["output"];
  historyTitle: Scalars["String"]["output"];
};

export type ReferralOnboardingPopover = {
  __typename?: "ReferralOnboardingPopover";
  id: MobileOnboardingStepPerformed;
  image?: Maybe<RemoteImage>;
  onboardingMessage?: Maybe<Scalars["String"]["output"]>;
  showPopover: Scalars["Boolean"]["output"];
};

export type RemoteImage = {
  __typename?: "RemoteImage";
  id: Scalars["String"]["output"];
  uri?: Maybe<Scalars["String"]["output"]>;
};

export type RemoteImageUriArgs = {
  options?: InputMaybe<RemoteImageOption>;
};

export enum RemoteImageFormat {
  Gif = "gif",
  Jpg = "jpg",
  Png = "png",
  Svg = "svg",
  Webp = "webp",
}

export type RemoteImageOption = {
  crop?: InputMaybe<Scalars["String"]["input"]>;
  duotone?: InputMaybe<Array<Scalars["String"]["input"]>>;
  fit?: InputMaybe<Scalars["String"]["input"]>;
  format?: InputMaybe<RemoteImageFormat>;
  height?: InputMaybe<Scalars["Float"]["input"]>;
  quality?: InputMaybe<Scalars["Int"]["input"]>;
  width?: InputMaybe<Scalars["Float"]["input"]>;
};

export type RemoteMedia = {
  __typename?: "RemoteMedia";
  id: Scalars["String"]["output"];
  type?: Maybe<Scalars["String"]["output"]>;
  uri?: Maybe<Scalars["String"]["output"]>;
};

export type Resource = {
  __typename?: "Resource";
  content: ResourceContent;
  displayName: Scalars["String"]["output"];
  image: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  resourceCount: Scalars["Int"]["output"];
};

export type ResourceContent = {
  __typename?: "ResourceContent";
  table: Array<ResourceTable>;
  title: Scalars["String"]["output"];
};

export type ResourceTable = {
  __typename?: "ResourceTable";
  data: Array<ResourceTableData>;
  subheading?: Maybe<Scalars["String"]["output"]>;
};

export type ResourceTableData = {
  __typename?: "ResourceTableData";
  description: Scalars["String"]["output"];
  link: ResourceTableLink;
  name: Scalars["String"]["output"];
};

export type ResourceTableLink = {
  __typename?: "ResourceTableLink";
  label: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
};

export type Reward = {
  __typename?: "Reward";
  availability?: Maybe<Scalars["String"]["output"]>;
  available_denominations?: Maybe<Array<Maybe<Denomination>>>;
  background?: Maybe<RemoteImage>;
  cardImage?: Maybe<RemoteImage>;
  card_image_url?: Maybe<Scalars["String"]["output"]>;
  code?: Maybe<Scalars["String"]["output"]>;
  currency_code?: Maybe<Scalars["String"]["output"]>;
  denomination_type?: Maybe<Scalars["String"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  e_code_usage_type?: Maybe<Scalars["String"]["output"]>;
  expiry_date_policy?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  link_type?: Maybe<Scalars["String"]["output"]>;
  logoImageUri?: Maybe<Scalars["String"]["output"]>;
  loyalty_programme?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  maximum_value?: Maybe<Scalars["Float"]["output"]>;
  metadata?: Maybe<Metadata>;
  minimum_value?: Maybe<Scalars["Float"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  progression_level?: Maybe<Scalars["String"]["output"]>;
  redeem_steps?: Maybe<RedeemSteps>;
  rewardProviderId?: Maybe<Scalars["String"]["output"]>;
  reward_sticker?: Maybe<Scalars["String"]["output"]>;
  terms_and_conditions_url?: Maybe<Scalars["String"]["output"]>;
  uiSettings?: Maybe<RewardUiSettings>;
};

export type RewardConfirmAlert = {
  __typename?: "RewardConfirmAlert";
  cancelLabel: Scalars["String"]["output"];
  message?: Maybe<Scalars["String"]["output"]>;
  okLabel: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type RewardImageOverlay = {
  __typename?: "RewardImageOverlay";
  color: Scalars["String"]["output"];
  styles?: Maybe<Array<SduiStyle>>;
  text: Scalars["String"]["output"];
};

export type RewardItemDetails = {
  __typename?: "RewardItemDetails";
  availability: Scalars["String"]["output"];
  availableDenominations?: Maybe<Array<Maybe<Denomination>>>;
  code: Scalars["String"]["output"];
  confirmAlert?: Maybe<RewardConfirmAlert>;
  content?: Maybe<Array<ContentItem>>;
  id: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  rewardProviderId?: Maybe<Scalars["String"]["output"]>;
  rewardSticker?: Maybe<Scalars["String"]["output"]>;
};

export type RewardListFilter = {
  reward?: InputMaybe<Scalars["String"]["input"]>;
};

export type RewardUiSettings = {
  __typename?: "RewardUiSettings";
  alertCancelLabel?: Maybe<Scalars["String"]["output"]>;
  alertHeading?: Maybe<Scalars["String"]["output"]>;
  alertOkLabel?: Maybe<Scalars["String"]["output"]>;
  alertSubheading?: Maybe<Scalars["String"]["output"]>;
  ctaLabel?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  logoHeight?: Maybe<Scalars["Int"]["output"]>;
  logoWidth?: Maybe<Scalars["Int"]["output"]>;
  offerHeading?: Maybe<Scalars["String"]["output"]>;
  offerSubheading?: Maybe<Scalars["String"]["output"]>;
  redeemCtaLabel?: Maybe<Scalars["String"]["output"]>;
  unlockedClaimableSlogan?: Maybe<Scalars["String"]["output"]>;
};

export enum RewardsChestType {
  Celestial = "CELESTIAL",
  Desert = "DESERT",
  Forest = "FOREST",
  Mountain = "MOUNTAIN",
  Ocean = "OCEAN",
}

export type RewardsProductsListItem = {
  __typename?: "RewardsProductsListItem";
  backgroundImage: RemoteImage;
  cta: Scalars["String"]["output"];
  event?: Maybe<SduiAction>;
  id: Scalars["ID"]["output"];
  imageOverlay?: Maybe<RewardImageOverlay>;
  onPress?: Maybe<RewardsProductsListItemAction>;
  title: Scalars["String"]["output"];
  yuCoinPowerIncrease?: Maybe<Scalars["Int"]["output"]>;
};

export type RewardsProductsListItemAction = {
  __typename?: "RewardsProductsListItemAction";
  productAction?: Maybe<ProductAction>;
  sduiAction?: Maybe<SduiAction>;
};

export type RowItem = {
  __typename?: "RowItem";
  key?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

export type SampleDebugData = {
  endTime: Scalars["String"]["input"];
  source?: InputMaybe<SampleDebugDataSource>;
  startTime: Scalars["String"]["input"];
  type: FitKitType;
  userEntered?: InputMaybe<Scalars["Boolean"]["input"]>;
  value?: InputMaybe<Scalars["Int"]["input"]>;
};

export type SampleDebugDataSource = {
  bundleIdentifier?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  version?: InputMaybe<Scalars["String"]["input"]>;
};

export type SampleQueryDebug = {
  __typename?: "SampleQueryDebug";
  active?: Maybe<Scalars["Boolean"]["output"]>;
  disableTypeFilter?: Maybe<Scalars["Boolean"]["output"]>;
  endTime: Scalars["String"]["output"];
  fitKitTypes: Array<FitKitType>;
  startTime: Scalars["String"]["output"];
};

export type SchemeOption = {
  __typename?: "SchemeOption";
  costDuration: Scalars["String"]["output"];
  costText: Scalars["String"]["output"];
  costValue: Scalars["Int"]["output"];
  dependantsAllowed?: Maybe<Scalars["String"]["output"]>;
  displayName: Scalars["String"]["output"];
  earnRate: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
};

export type SduiAction = {
  __typename?: "SduiAction";
  payload?: Maybe<Scalars["String"]["output"]>;
  type: SduiActionType;
};

export enum SduiActionType {
  /** Backwards compatible yulife-rn-client specific */
  OpenMyAccount = "OPEN_MY_ACCOUNT",
  /** Generic: Refreshes the user's coin balance in the app */
  RefreshTotalCoins = "REFRESH_TOTAL_COINS",
  /** Generic: Navigate back; RN client version >= 3.55.0 */
  SduiActionGenericNavigateBack = "SDUI_ACTION_GENERIC_NAVIGATE_BACK",
  /** Generic: Navigate back; RN client version >= 3.65.0 */
  SduiActionGenericNavigateBackToRoot = "SDUI_ACTION_GENERIC_NAVIGATE_BACK_TO_ROOT",
  /** Generic: Logs an event to mixpanel from the client */
  SduiActionLogEvent = "SDUI_ACTION_LOG_EVENT",
  /** Generic: Accepts client-side route constant as payload. Needs to be stringified. E.g: {"routeId":"some.screen","props":{}} */
  SduiActionNavigate = "SDUI_ACTION_NAVIGATE",
  /** Generic: Closes the current screen. Accepts alert modal as stringified payload. E.g: {"title":"You sure?","message":"You won't be able to come back!","cancelLabel":"Cancel","confirmLabel":"Exit"} */
  SduiActionNavigateBack = "SDUI_ACTION_NAVIGATE_BACK",
  /** Generic: Opens client side alert dialog */
  SduiActionOpenAlertDialog = "SDUI_ACTION_OPEN_ALERT_DIALOG",
  /** Generic: Opens a magic link for either members, underwriting or team portal; RN client version >= 3.76.0 */
  SduiActionOpenMagicLink = "SDUI_ACTION_OPEN_MAGIC_LINK",
  /** Generic: Accepts client-side modal constant as payload. Needs to be stringified. E.g: {"routeId":"some.screen","props":{}} */
  SduiActionOpenModal = "SDUI_ACTION_OPEN_MODAL",
  /** Generic: Opens the intercom chat */
  SduiActionOpenSupportChat = "SDUI_ACTION_OPEN_SUPPORT_CHAT",
  /** Generic: Opens a URL, accepts a URI as payload */
  SduiActionOpenUrl = "SDUI_ACTION_OPEN_URL",
  /** Product UW specific step: Finishes the journey */
  SduiActionProductUnderwritingStepFinish = "SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_FINISH",
  /** Product UW specific step: Gets previous step, accepts current StepId as payload */
  SduiActionProductUnderwritingStepPop = "SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_POP",
  /** Product UW specific step: Gets next step, accepts current StepId as payload */
  SduiActionProductUnderwritingStepPush = "SDUI_ACTION_PRODUCT_UNDERWRITING_STEP_PUSH",
  /** Generic: Send GQL Mutation; RN client version >= 3.55.0 */
  SduiActionSendMutation = "SDUI_ACTION_SEND_MUTATION",
  /** Generic: Accepts client-side route constant as payload. */
  SduiActionSetBottomTab = "SDUI_ACTION_SET_BOTTOM_TAB",
  /** Generic: Accepts client-side floating modal identifier and its props as stringified payload, E.g: {"modalId":"some.modal","props":{"header":"You sure?","description":"You won't be able to come back!","cancelLabel":"Cancel","confirmLabel":"Exit","onConfirm": "{}"}}; RN client version >= 3.103.0 */
  SduiActionShowFloatingModal = "SDUI_ACTION_SHOW_FLOATING_MODAL",
  /** Generic: Opens the ListPicker component; RN client version >= 3.65.0; E.g: {"title":"You're about to select something","items":[{"label":"Option 1","value":1,"onPress":{"type":"ActionType","payload":"{}"}}]} */
  SduiActionShowOverlayListPicker = "SDUI_ACTION_SHOW_OVERLAY_LIST_PICKER",
  /** Generic: Sets dynamic styles; RN client version >= 3.101 */
  SduiActionUpdateDynamicStyles = "SDUI_ACTION_UPDATE_DYNAMIC_STYLES",
}

export type SduiStyle = {
  __typename?: "SduiStyle";
  property: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type SduiStyleDynamic = {
  __typename?: "SduiStyleDynamic";
  defaultValue: Scalars["String"]["output"];
  property: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type SearchLeaderboardUser = {
  __typename?: "SearchLeaderboardUser";
  avatar: RemoteImage;
  id: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
};

export type SearchQuery = {
  __typename?: "SearchQuery";
  activeB2bProducts?: Maybe<ProductsQuery>;
  baseSalary?: Maybe<NumberQuery>;
  baseSalaryCurrency?: Maybe<StringQuery>;
  businessTagIds?: Maybe<StringQuery>;
  businessUnit?: Maybe<StringQuery>;
  contractType?: Maybe<StringQuery>;
  department?: Maybe<StringQuery>;
  employmentLeaveDate?: Maybe<DateQuery>;
  employmentStartDate?: Maybe<DateQuery>;
  employmentStatus?: Maybe<StringQuery>;
  homeLocationCountry?: Maybe<StringQuery>;
  jobTitle?: Maybe<StringQuery>;
  payGrade?: Maybe<StringQuery>;
  perkIds?: Maybe<StringQuery>;
  preferredContentLocation?: Maybe<StringQuery>;
  sexAtBirth?: Maybe<StringQuery>;
  status?: Maybe<StringQuery>;
  workArrangement?: Maybe<StringQuery>;
  workLocationCountry?: Maybe<StringQuery>;
  workLocationPostcode?: Maybe<StringQuery>;
};

export type SearchQueryInput = {
  activeB2bProducts?: InputMaybe<ProductsQueryInput>;
  businessTagIds?: InputMaybe<StringQueryInput>;
  businessUnit?: InputMaybe<StringQueryInput>;
  contractType?: InputMaybe<StringQueryInput>;
  department?: InputMaybe<StringQueryInput>;
  employmentLeaveDate?: InputMaybe<DateQueryInput>;
  employmentStartDate?: InputMaybe<DateQueryInput>;
  employmentStatus?: InputMaybe<StringQueryInput>;
  homeLocationCountry?: InputMaybe<StringQueryInput>;
  jobTitle?: InputMaybe<StringQueryInput>;
  payGrade?: InputMaybe<StringQueryInput>;
  sexAtBirth?: InputMaybe<StringQueryInput>;
  status?: InputMaybe<StringQueryInput>;
  workArrangement?: InputMaybe<StringQueryInput>;
  workLocationCountry?: InputMaybe<StringQueryInput>;
  workLocationPostcode?: InputMaybe<StringQueryInput>;
};

export type SendMagicLinkWithInviteCodeResponse = {
  __typename?: "SendMagicLinkWithInviteCodeResponse";
  companyName?: Maybe<Scalars["String"]["output"]>;
  currentEmail?: Maybe<Scalars["String"]["output"]>;
  emailSentTo?: Maybe<Scalars["String"]["output"]>;
  userFirstName?: Maybe<Scalars["String"]["output"]>;
};

export type Session = {
  __typename?: "Session";
  expires?: Maybe<Scalars["Int"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  tokenRefreshRequired?: Maybe<Scalars["Boolean"]["output"]>;
};

export type ShippingAddress = {
  __typename?: "ShippingAddress";
  addressCity?: Maybe<Scalars["String"]["output"]>;
  addressCountry?: Maybe<Scalars["String"]["output"]>;
  addressCounty?: Maybe<Scalars["String"]["output"]>;
  addressFirstLine?: Maybe<Scalars["String"]["output"]>;
  addressPostCode?: Maybe<Scalars["String"]["output"]>;
  addressSecondLine?: Maybe<Scalars["String"]["output"]>;
  addressThirdLine?: Maybe<Scalars["String"]["output"]>;
};

export type SocialGroupLeaderboard = {
  __typename?: "SocialGroupLeaderboard";
  consent: Scalars["Boolean"]["output"];
  description: Scalars["String"]["output"];
  icon: RemoteImage;
  isLocked: Scalars["Boolean"]["output"];
  leaderboardConfigId: SocialGroupLeaderboardConfigId;
  leaderboardId: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  selectedIcon: RemoteImage;
  shortDescription: Scalars["String"]["output"];
};

export enum SocialGroupLeaderboardConfigId {
  Dailysudoku = "dailysudoku",
  Steps30days = "steps30days",
}

export type SocialGroupLeaderboardGroup = {
  __typename?: "SocialGroupLeaderboardGroup";
  leaderboards: Array<SocialGroupLeaderboard>;
  name: Scalars["String"]["output"];
  socialGroupId: Scalars["ID"]["output"];
};

export type SocialGroupLeaderboardItem = {
  __typename?: "SocialGroupLeaderboardItem";
  avatar: RemoteImage;
  firstName: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  isTarget: Scalars["Boolean"]["output"];
  lastName: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  position: Scalars["Int"]["output"];
  score: Scalars["String"]["output"];
  userId: Scalars["ID"]["output"];
};

export type SocialGroupLeaderboardItemsFilter = {
  date?: InputMaybe<Scalars["String"]["input"]>;
  difficulty?: InputMaybe<SudokuDifficulty>;
};

export type SocialLeaderboardConstent = {
  consent: Scalars["Boolean"]["input"];
  id: Scalars["String"]["input"];
};

export type SourceBreakdown = {
  __typename?: "SourceBreakdown";
  device?: Maybe<Scalars["Int"]["output"]>;
  fitbit?: Maybe<Scalars["Int"]["output"]>;
  garmin?: Maybe<Scalars["Int"]["output"]>;
  strava?: Maybe<Scalars["Int"]["output"]>;
  withings?: Maybe<Scalars["Int"]["output"]>;
};

export type SpaCheckBusinessType = {
  __typename?: "SpaCheckBusinessType";
  businessAccountId: Scalars["String"]["output"];
  companiesHouseName?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated No longer part of the Business Document */
  ownerEmail?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated No longer part of the Business Document */
  ownerFirstName?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated No longer part of the Business Document */
  ownerLastName?: Maybe<Scalars["String"]["output"]>;
};

export type StartSessionResponse = {
  __typename?: "StartSessionResponse";
  message?: Maybe<Scalars["String"]["output"]>;
};

export type StaticStepData = {
  __typename?: "StaticStepData";
  absolute?: Maybe<Array<AbsoluteContentItem>>;
  body?: Maybe<Array<ContentItem>>;
  containerStyles?: Maybe<Array<SduiStyle>>;
  stepData?: Maybe<Scalars["String"]["output"]>;
  stepId: Scalars["String"]["output"];
};

export type Step = {
  __typename?: "Step";
  completed: Scalars["Boolean"]["output"];
  stepId: Scalars["String"]["output"];
  tasks: Array<Task>;
};

/** SearchQuery matcher types */
export type StringQuery = {
  __typename?: "StringQuery";
  contains?: Maybe<Array<Scalars["String"]["output"]>>;
  notContains?: Maybe<Array<Scalars["String"]["output"]>>;
};

export type StringQueryInput = {
  contains?: InputMaybe<Array<Scalars["String"]["input"]>>;
  notContains?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type SubmitFeedbackFormResponse = {
  __typename?: "SubmitFeedbackFormResponse";
  message: Scalars["String"]["output"];
};

export enum SubmitSduiJourneyAction {
  Pop = "POP",
  Push = "PUSH",
  Reset = "RESET",
}

export type SubmitUserDebugDataResponse = {
  __typename?: "SubmitUserDebugDataResponse";
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type SubscribeToPerkField = {
  key: Scalars["String"]["input"];
  value: Scalars["String"]["input"];
};

export type SubscribeToPerkResponse = {
  __typename?: "SubscribeToPerkResponse";
  buttonLabel: Scalars["String"]["output"];
  description: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type SudokuBoard = {
  __typename?: "SudokuBoard";
  config: SudokuConfig;
  difficulty: SudokuDifficulty;
  puzzle: Array<Maybe<Array<Scalars["Int"]["output"]>>>;
  solution: Array<Maybe<Array<Scalars["Int"]["output"]>>>;
};

export type SudokuBoardResponse = {
  __typename?: "SudokuBoardResponse";
  boards: Array<SudokuBoard>;
  date: Scalars["String"]["output"];
  leaderboardEligible: Scalars["Boolean"]["output"];
  results?: Maybe<SudokuResults>;
  stats?: Maybe<SudokuStats>;
};

export type SudokuConfig = {
  __typename?: "SudokuConfig";
  HINT_COOLDOWN: Scalars["Int"]["output"];
  MISTAKES_BEFORE_PENALTY: Scalars["Int"]["output"];
  MISTAKE_PENALTY_TIME: Scalars["Int"]["output"];
  PENALTY_HINT: Scalars["Int"]["output"];
};

export enum SudokuDifficulty {
  Easy = "EASY",
  Hard = "HARD",
  Medium = "MEDIUM",
}

export type SudokuLeaderboardItem = {
  __typename?: "SudokuLeaderboardItem";
  adjustedTime: Scalars["Int"]["output"];
  avatarRemoteFiles?: Maybe<AvatarRemoteFiles>;
  name: Scalars["String"]["output"];
  position: Scalars["Int"]["output"];
  userId: Scalars["ID"]["output"];
};

export type SudokuResults = {
  __typename?: "SudokuResults";
  adjustedTime: Scalars["Int"]["output"];
  baseTime: Scalars["Int"]["output"];
  cheatProbability?: Maybe<Scalars["Float"]["output"]>;
  difficulty: SudokuDifficulty;
  guesses?: Maybe<Array<Scalars["Float"]["output"]>>;
  hints: Scalars["Int"]["output"];
  leaderboardId?: Maybe<Scalars["String"]["output"]>;
  mistakes: Scalars["Int"]["output"];
};

export type SudokuStats = {
  __typename?: "SudokuStats";
  leaderboardId?: Maybe<Scalars["String"]["output"]>;
  personalBest?: Maybe<Scalars["Int"]["output"]>;
};

export type SudokuSubmission = {
  adjustedTime: Scalars["Int"]["input"];
  baseTime: Scalars["Int"]["input"];
  date: Scalars["String"]["input"];
  difficulty: SudokuDifficulty;
  guesses?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  hints: Scalars["Int"]["input"];
  levelSlotId: Scalars["String"]["input"];
  mistakes: Scalars["Int"]["input"];
};

export type Surge = {
  __typename?: "Surge";
  description: Scalars["String"]["output"];
  endDateTime: Scalars["String"]["output"];
  lottie: ContentItemLottie;
  multiplier: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type TagInput = {
  label: Scalars["String"]["input"];
  value: Scalars["String"]["input"];
};

export type Task = {
  __typename?: "Task";
  completed: Scalars["Boolean"]["output"];
  taskId: Scalars["String"]["output"];
};

export type TeamAnalayticsSummaryData = {
  __typename?: "TeamAnalayticsSummaryData";
  caption?: Maybe<Scalars["String"]["output"]>;
  displayValue?: Maybe<Scalars["String"]["output"]>;
  equivalentCurrencyValue?: Maybe<Scalars["Float"]["output"]>;
  percentageChange?: Maybe<Scalars["Float"]["output"]>;
  unit?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["Float"]["output"]>;
};

export type TeamAnalyticsAxes = {
  __typename?: "TeamAnalyticsAxes";
  x: Scalars["String"]["output"];
  y: Scalars["String"]["output"];
};

export enum TeamAnalyticsBarChartKey {
  ActiveUsers = "activeUsers",
  AverageYuCoinEarnedPerUser = "averageYuCoinEarnedPerUser",
  CompanyActivity = "companyActivity",
  TotalYuCoinEarnedAndSpentByCompany = "totalYuCoinEarnedAndSpentByCompany",
}

export type TeamAnalyticsDashboardDidYouKnowInsight = {
  __typename?: "TeamAnalyticsDashboardDidYouKnowInsight";
  headline: Scalars["String"]["output"];
  icon: Scalars["String"]["output"];
  label: Scalars["String"]["output"];
};

export type TeamAnalyticsDashboardDidYouKnowSummary = {
  __typename?: "TeamAnalyticsDashboardDidYouKnowSummary";
  description: Scalars["String"]["output"];
  insights: Array<TeamAnalyticsDashboardDidYouKnowInsight>;
  timeString?: Maybe<Scalars["String"]["output"]>;
};

export type TeamAnalyticsDashboardLegend = {
  __typename?: "TeamAnalyticsDashboardLegend";
  color?: Maybe<Scalars["String"]["output"]>;
  key?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  style?: Maybe<Scalars["String"]["output"]>;
};

export type TeamAnalyticsDashboardWidget = {
  __typename?: "TeamAnalyticsDashboardWidget";
  dataSets: Array<TeamAnalyticsDashboardWidgetDataSet>;
  timeString: Scalars["String"]["output"];
};

export type TeamAnalyticsDashboardWidgetDataSet = {
  __typename?: "TeamAnalyticsDashboardWidgetDataSet";
  axes?: Maybe<TeamAnalyticsAxes>;
  data?: Maybe<Array<TeamAnalyticsData>>;
  domain?: Maybe<Array<Scalars["Float"]["output"]>>;
  legend?: Maybe<Array<TeamAnalyticsDashboardLegend>>;
  summary?: Maybe<TeamAnalyticsSummary>;
  title?: Maybe<Scalars["String"]["output"]>;
  tooltip?: Maybe<Scalars["String"]["output"]>;
  unit?: Maybe<Scalars["String"]["output"]>;
};

export type TeamAnalyticsData = {
  __typename?: "TeamAnalyticsData";
  tooltip?: Maybe<TeamAnalyticsDataTooltip>;
  x: Scalars["String"]["output"];
  y: Array<TeamYAxisValue>;
};

export type TeamAnalyticsDataTooltip = {
  __typename?: "TeamAnalyticsDataTooltip";
  title?: Maybe<Scalars["String"]["output"]>;
  value: Array<TeamAnalyticsDataTooltipValue>;
};

export type TeamAnalyticsDataTooltipValue = {
  __typename?: "TeamAnalyticsDataTooltipValue";
  dotColor?: Maybe<Scalars["String"]["output"]>;
  text: Scalars["String"]["output"];
};

export enum TeamAnalyticsLineChartKey {
  AverageActiveUserActivity = "averageActiveUserActivity",
  TotalMealsAndWaterDonatedByCompany = "totalMealsAndWaterDonatedByCompany",
  TotalPlasticAndTreesDonatedByCompany = "totalPlasticAndTreesDonatedByCompany",
}

export type TeamAnalyticsSummary = {
  __typename?: "TeamAnalyticsSummary";
  average?: Maybe<TeamAnalayticsSummaryData>;
  sum?: Maybe<TeamAnalayticsSummaryData>;
};

export type TeamAnalyticsTable = {
  __typename?: "TeamAnalyticsTable";
  columns: Array<TeamAnalyticsTableColumn>;
  rows: Array<Array<TeamAnalyticsTableData>>;
  timeString?: Maybe<Scalars["String"]["output"]>;
  tooltip?: Maybe<Scalars["String"]["output"]>;
};

export type TeamAnalyticsTableColumn = {
  __typename?: "TeamAnalyticsTableColumn";
  align?: Maybe<TeamAnalyticsTableColumnAlign>;
  label?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  sortable?: Maybe<Scalars["Boolean"]["output"]>;
};

export enum TeamAnalyticsTableColumnAlign {
  Center = "center",
  Left = "left",
  Right = "right",
}

export type TeamAnalyticsTableData = TeamAnalyticsTableDataFloat | TeamAnalyticsTableDataString;

export type TeamAnalyticsTableDataFloat = {
  __typename?: "TeamAnalyticsTableDataFloat";
  displayValue?: Maybe<Scalars["String"]["output"]>;
  icon?: Maybe<TeamAnalyticsTableDataIcon>;
  value: Scalars["Float"]["output"];
};

export type TeamAnalyticsTableDataIcon = {
  __typename?: "TeamAnalyticsTableDataIcon";
  left?: Maybe<Scalars["String"]["output"]>;
};

export type TeamAnalyticsTableDataString = {
  __typename?: "TeamAnalyticsTableDataString";
  displayValue?: Maybe<Scalars["String"]["output"]>;
  icon?: Maybe<TeamAnalyticsTableDataIcon>;
  value: Scalars["String"]["output"];
};

export enum TeamAnalyticsTableKey {
  Challenges = "challenges",
  Rewards = "rewards",
  RewardsSummary = "rewardsSummary",
}

export enum TeamAnalyticsTableType {
  Default = "default",
  Summary = "summary",
}

export type TeamAnalyticsTimePeriod = {
  __typename?: "TeamAnalyticsTimePeriod";
  label: Scalars["String"]["output"];
  valueInMonths: Scalars["Int"]["output"];
};

export type TeamDashboardDates = {
  __typename?: "TeamDashboardDates";
  date: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type TeamDashboardGoals = {
  __typename?: "TeamDashboardGoals";
  body: Array<TeamDashboardGoalsBody>;
  goalsUnavailable?: Maybe<Scalars["Boolean"]["output"]>;
  heading: Scalars["String"]["output"];
  image: Scalars["String"]["output"];
  lastUpdated: Scalars["String"]["output"];
  month: Scalars["String"]["output"];
  subheading?: Maybe<Scalars["String"]["output"]>;
};

export type TeamDashboardGoalsBody = {
  __typename?: "TeamDashboardGoalsBody";
  body: Scalars["String"]["output"];
  data: TeamDashboardGoalsBodyData;
  heading: Scalars["String"]["output"];
  image: Scalars["String"]["output"];
  level: Scalars["Int"]["output"];
};

export type TeamDashboardGoalsBodyData = {
  __typename?: "TeamDashboardGoalsBodyData";
  amount: Scalars["Float"]["output"];
  goal: Scalars["Float"]["output"];
  progress: Scalars["Float"]["output"];
  totalAmount: Scalars["Int"]["output"];
  type: Scalars["String"]["output"];
};

export enum TeamDidYouKnowInsightsKey {
  Adoption = "adoption",
  Challenges = "challenges",
  Esg = "esg",
  EsgSocial = "esgSocial",
  Steps = "steps",
  YuCoinNotYetSpent = "yuCoinNotYetSpent",
}

export type TeamEmployeeField = {
  __typename?: "TeamEmployeeField";
  allowCreateItem?: Maybe<Scalars["Boolean"]["output"]>;
  allowSearch?: Maybe<Scalars["Boolean"]["output"]>;
  fieldType?: Maybe<TeamPortalFieldType>;
  isSensitive?: Maybe<Scalars["Boolean"]["output"]>;
  label: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  options?: Maybe<Array<TeamPortalOption>>;
  placeholder?: Maybe<Scalars["String"]["output"]>;
  required?: Maybe<Scalars["Boolean"]["output"]>;
  selectedOption?: Maybe<Scalars["String"]["output"]>;
  tooltip?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

export type TeamEmployeeProduct = {
  __typename?: "TeamEmployeeProduct";
  categoryId: Scalars["String"]["output"];
  fields: Array<TeamEmployeeField>;
  id: Scalars["ID"]["output"];
};

export type TeamEmployeeProfile = {
  __typename?: "TeamEmployeeProfile";
  avatar?: Maybe<Scalars["String"]["output"]>;
  businessEmployeeId: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  products: Array<TeamEmployeeProduct>;
  sections: Array<TeamEmployeeSection>;
  status: Scalars["String"]["output"];
};

export type TeamEmployeeSection = {
  __typename?: "TeamEmployeeSection";
  fields: Array<TeamEmployeeField>;
  icon?: Maybe<Scalars["String"]["output"]>;
  label: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
};

export type TeamExportMenu = {
  __typename?: "TeamExportMenu";
  description: Scalars["String"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  value: ExportEmployeesType;
};

export type TeamFilter = {
  __typename?: "TeamFilter";
  export: Array<TeamExportMenu>;
  products: Array<TeamFilterCopy>;
  status: Array<TeamFilterCopy>;
};

export type TeamFilterCopy = {
  __typename?: "TeamFilterCopy";
  description: Scalars["String"]["output"];
  image?: Maybe<Scalars["String"]["output"]>;
  imageKey?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  value: Array<Scalars["String"]["output"]>;
};

export type TeamMemberForm = {
  __typename?: "TeamMemberForm";
  currentTags: Array<TeamMemberFormTag>;
  employeeInfo: TeamMemberFormEmployeeInfo;
  fields: Array<TeamMemberFormField>;
  products: Array<TeamProduct>;
  sections: Array<TeamMemberFormSection>;
};

export type TeamMemberFormEmployeeInfo = {
  __typename?: "TeamMemberFormEmployeeInfo";
  avatar?: Maybe<Scalars["String"]["output"]>;
  leaveDate?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  shouldAutoInvite?: Maybe<Scalars["Boolean"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
};

export type TeamMemberFormField = {
  __typename?: "TeamMemberFormField";
  defaultValue?: Maybe<Scalars["String"]["output"]>;
  label?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  readonly?: Maybe<Scalars["Boolean"]["output"]>;
  required?: Maybe<Scalars["Boolean"]["output"]>;
  section: TeamMemberFormSectionType;
  sensitive?: Maybe<Scalars["Boolean"]["output"]>;
  tooltip?: Maybe<Scalars["String"]["output"]>;
  type: Scalars["String"]["output"];
};

export type TeamMemberFormSection = {
  __typename?: "TeamMemberFormSection";
  id: TeamMemberFormSectionType;
  label: Scalars["String"]["output"];
};

export enum TeamMemberFormSectionType {
  AccessibilityMode = "accessibilityMode",
  ContactDetails = "contactDetails",
  EmploymentDetails = "employmentDetails",
  PersonalDetails = "personalDetails",
  Tags = "tags",
  UniqueIdDetails = "uniqueIdDetails",
}

export type TeamMemberFormTag = {
  __typename?: "TeamMemberFormTag";
  label: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type TeamOnboardingProgress = {
  __typename?: "TeamOnboardingProgress";
  progress: Scalars["Int"]["output"];
  steps: Array<Step>;
  videoPaneDismissed: Scalars["Boolean"]["output"];
  videoPlayDismissed: Scalars["Boolean"]["output"];
};

export enum TeamPortalFieldType {
  Currency = "currency",
  Date = "date",
  Dropdown = "dropdown",
  Radio = "radio",
  Text = "text",
  ToastInfo = "toastInfo",
  Toggle = "toggle",
}

export type TeamPortalOption = {
  __typename?: "TeamPortalOption";
  disabled?: Maybe<Scalars["Boolean"]["output"]>;
  label: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type TeamPortalPermission = {
  __typename?: "TeamPortalPermission";
  description: Scalars["String"]["output"];
  key: BusinessAccessPermission;
  title: Scalars["String"]["output"];
  tooltip?: Maybe<Scalars["String"]["output"]>;
};

export type TeamPortalUpdateMemberField = {
  name: Scalars["String"]["input"];
  value?: InputMaybe<Scalars["String"]["input"]>;
};

export type TeamProduct = {
  __typename?: "TeamProduct";
  carrierId: Scalars["String"]["output"];
  categoryDescription?: Maybe<Scalars["String"]["output"]>;
  categoryId?: Maybe<Scalars["String"]["output"]>;
  categoryName?: Maybe<Scalars["String"]["output"]>;
  displayName?: Maybe<Scalars["String"]["output"]>;
  effectiveDate?: Maybe<Scalars["String"]["output"]>;
  hasLowSeats?: Maybe<Scalars["Boolean"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  isUnmanageable?: Maybe<Scalars["Boolean"]["output"]>;
  perks?: Maybe<Array<ProductPerk>>;
  productCode: Scalars["String"]["output"];
  productDescription?: Maybe<Scalars["String"]["output"]>;
  productId: Scalars["String"]["output"];
  productLongDescription?: Maybe<Scalars["String"]["output"]>;
  productName: Scalars["String"]["output"];
  productType: Scalars["String"]["output"];
  reviewDate?: Maybe<Scalars["String"]["output"]>;
  seatsLeft?: Maybe<Scalars["Int"]["output"]>;
  startDate?: Maybe<Scalars["String"]["output"]>;
};

export type TeamProductCategory = {
  __typename?: "TeamProductCategory";
  categoryDescription: Scalars["String"]["output"];
  categoryId: Scalars["String"]["output"];
  categoryName: Scalars["String"]["output"];
};

export type TeamProductInformation = {
  __typename?: "TeamProductInformation";
  categories: Array<TeamProductInformationCategory>;
  perks: Array<TeamProductInformationPerk>;
  policyName: Scalars["String"]["output"];
  product: Array<TeamProductInformationField>;
  productDescription: Scalars["String"]["output"];
};

export type TeamProductInformationCategory = {
  __typename?: "TeamProductInformationCategory";
  categoryId: Scalars["String"]["output"];
  categoryName: Scalars["String"]["output"];
  fields: Array<TeamProductInformationField>;
};

export type TeamProductInformationField = {
  __typename?: "TeamProductInformationField";
  label: Scalars["String"]["output"];
  tooltip?: Maybe<Scalars["String"]["output"]>;
  value: Scalars["String"]["output"];
};

export type TeamProductInformationPerk = {
  __typename?: "TeamProductInformationPerk";
  image: Scalars["String"]["output"];
  perkId: Scalars["String"]["output"];
};

export type TeamProductInput = {
  categoryId: Scalars["String"]["input"];
  productId: Scalars["String"]["input"];
};

export type TeamProducts = {
  __typename?: "TeamProducts";
  categories: Array<TeamProductCategory>;
  product: TeamProduct;
};

export type TeamSettingValue = {
  __typename?: "TeamSettingValue";
  globalValue?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["String"]["output"]>;
};

export type TeamSocialGroup = {
  __typename?: "TeamSocialGroup";
  description?: Maybe<Scalars["String"]["output"]>;
  isActive?: Maybe<Scalars["Boolean"]["output"]>;
  name: Scalars["String"]["output"];
  query?: Maybe<SearchQuery>;
  socialGroupId: Scalars["String"]["output"];
};

export enum TeamSummaryCardKey {
  Cycling = "cycling",
  DailyAverageSteps = "dailyAverageSteps",
  Meals = "meals",
  Meditation = "meditation",
  PlasticRemoved = "plasticRemoved",
  Steps = "steps",
  Trees = "trees",
  Water = "water",
  YuCoinEarned = "yuCoinEarned",
  YuCoinNotYetSpent = "yuCoinNotYetSpent",
  YuCoinNotYetSpentWithCurrency = "yuCoinNotYetSpentWithCurrency",
  YuCoinSpent = "yuCoinSpent",
  Yudoku = "yudoku",
}

export enum TeamWellbeingHubBlockType {
  Content = "CONTENT",
  Document = "DOCUMENT",
  EmailAddress = "EMAIL_ADDRESS",
  TelephoneNumber = "TELEPHONE_NUMBER",
  WebLink = "WEB_LINK",
}

export type TeamWellbeingHubCategory = {
  __typename?: "TeamWellbeingHubCategory";
  archived: Scalars["Boolean"]["output"];
  createdAt?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["ID"]["output"]>;
  name: Scalars["String"]["output"];
  order: Scalars["Int"]["output"];
  restrictions?: Maybe<TeamWellbeingHubCategoryRestrictions>;
  updatedAt?: Maybe<Scalars["String"]["output"]>;
  wellbeingHubItems?: Maybe<Array<TeamWellbeingHubItem>>;
};

export type TeamWellbeingHubCategoryCreateInput = {
  name: Scalars["String"]["input"];
  wellbeingHubItems: Array<Scalars["String"]["input"]>;
};

export type TeamWellbeingHubCategoryRestrictions = {
  __typename?: "TeamWellbeingHubCategoryRestrictions";
  businessAccountId?: Maybe<Scalars["String"]["output"]>;
};

export type TeamWellbeingHubCategoryUpdateInput = {
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
  wellbeingHubItems: Array<Scalars["String"]["input"]>;
};

export type TeamWellbeingHubContent = {
  __typename?: "TeamWellbeingHubContent";
  blockType: TeamWellbeingHubBlockType;
  buttonLabel?: Maybe<Scalars["String"]["output"]>;
  buttonUri?: Maybe<Scalars["String"]["output"]>;
  documentKey?: Maybe<Scalars["String"]["output"]>;
  documentTitle?: Maybe<Scalars["String"]["output"]>;
  documentUrl?: Maybe<Scalars["String"]["output"]>;
  emailAddress?: Maybe<Scalars["String"]["output"]>;
  emailLabel?: Maybe<Scalars["String"]["output"]>;
  markdownDescription?: Maybe<Scalars["String"]["output"]>;
  markdownTitle?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  telephoneLabel?: Maybe<Scalars["String"]["output"]>;
  telephoneNumber?: Maybe<Scalars["String"]["output"]>;
};

export type TeamWellbeingHubContentInput = {
  blockType: TeamWellbeingHubBlockType;
  buttonLabel?: InputMaybe<Scalars["String"]["input"]>;
  buttonUri?: InputMaybe<Scalars["String"]["input"]>;
  documentKey?: InputMaybe<Scalars["String"]["input"]>;
  documentTitle?: InputMaybe<Scalars["String"]["input"]>;
  emailAddress?: InputMaybe<Scalars["String"]["input"]>;
  emailLabel?: InputMaybe<Scalars["String"]["input"]>;
  markdownDescription?: InputMaybe<Scalars["String"]["input"]>;
  markdownTitle?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  telephoneLabel?: InputMaybe<Scalars["String"]["input"]>;
  telephoneNumber?: InputMaybe<Scalars["String"]["input"]>;
};

export type TeamWellbeingHubImage = {
  __typename?: "TeamWellbeingHubImage";
  key: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
};

export type TeamWellbeingHubItem = {
  __typename?: "TeamWellbeingHubItem";
  content: Array<TeamWellbeingHubContent>;
  description: Scalars["String"]["output"];
  enabled: Scalars["Boolean"]["output"];
  id: Scalars["ID"]["output"];
  isEditable: Scalars["Boolean"]["output"];
  order: Scalars["Int"]["output"];
  query?: Maybe<SearchQuery>;
  source?: Maybe<Scalars["String"]["output"]>;
  thumbnailImage: ThumbnailImage;
  title: Scalars["String"]["output"];
};

export type TeamWellbeingHubItemButton = {
  __typename?: "TeamWellbeingHubItemButton";
  label: Scalars["String"]["output"];
  uri: Scalars["String"]["output"];
};

export type TeamWellbeingHubItemButtonInput = {
  label?: InputMaybe<Scalars["String"]["input"]>;
  uri?: InputMaybe<Scalars["String"]["input"]>;
};

export type TeamWellbeingHubItemInput = {
  content: Array<TeamWellbeingHubContentInput>;
  description: Scalars["String"]["input"];
  enabled: Scalars["Boolean"]["input"];
  query?: InputMaybe<SearchQueryInput>;
  thumbnailImage: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
};

export type TeamWellbeingHubItemMarkdown = {
  __typename?: "TeamWellbeingHubItemMarkdown";
  description: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type TeamWellbeingHubItemMarkdownInput = {
  description: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
};

export type TeamWellbeingHubItemSections = {
  __typename?: "TeamWellbeingHubItemSections";
  button?: Maybe<TeamWellbeingHubItemButton>;
  markdown?: Maybe<TeamWellbeingHubItemMarkdown>;
};

export type TeamWellbeingHubOrder = {
  id: Scalars["String"]["input"];
  order: Scalars["Int"]["input"];
};

export type TeamWellbeingHubResponse = {
  __typename?: "TeamWellbeingHubResponse";
  id: Scalars["ID"]["output"];
};

export type TeamYAxisValue = {
  __typename?: "TeamYAxisValue";
  key?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  value: Scalars["Float"]["output"];
};

export type TestApproveRateReviewResponse = {
  __typename?: "TestApproveRateReviewResponse";
  newEmployeesCount?: Maybe<Scalars["Int"]["output"]>;
  newTotalSalary?: Maybe<Scalars["Float"]["output"]>;
  previousEmployeesCount?: Maybe<Scalars["Int"]["output"]>;
  previousTotalSalary?: Maybe<Scalars["Float"]["output"]>;
};

export type TestBusinessInput = {
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  businessAccountName?: InputMaybe<Scalars["String"]["input"]>;
  coupon?: InputMaybe<Scalars["String"]["input"]>;
  earnRate?: InputMaybe<Scalars["Int"]["input"]>;
  emailTemplate?: InputMaybe<Scalars["String"]["input"]>;
  hubspotId?: InputMaybe<Scalars["String"]["input"]>;
  inviteCode?: InputMaybe<Scalars["String"]["input"]>;
  rateTableVersion?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  stripeAccountId?: InputMaybe<Scalars["String"]["input"]>;
};

export type TestDataRefreshReminderResponse = {
  __typename?: "TestDataRefreshReminderResponse";
  reminderGroup1?: Maybe<Array<Maybe<BusinessReminderResponse>>>;
  reminderGroup2?: Maybe<Array<Maybe<BusinessReminderResponse>>>;
  reminderGroup3?: Maybe<Array<Maybe<BusinessReminderResponse>>>;
};

export enum TestEmailReminderType {
  DataRefreshReminder = "dataRefreshReminder",
  DataUploadReminder = "dataUploadReminder",
}

export type TestGroupPremiumBreakdown = {
  __typename?: "TestGroupPremiumBreakdown";
  benefit?: Maybe<Scalars["Float"]["output"]>;
  joinDate?: Maybe<Scalars["String"]["output"]>;
  leaveDate?: Maybe<Scalars["String"]["output"]>;
  premium?: Maybe<Scalars["Float"]["output"]>;
};

export type TestGroupPremiumResponse = {
  __typename?: "TestGroupPremiumResponse";
  breakdown?: Maybe<Array<Maybe<TestGroupPremiumBreakdown>>>;
  total?: Maybe<Scalars["Float"]["output"]>;
};

export type TestSpaCheckResponse = {
  __typename?: "TestSpaCheckResponse";
  currentDate?: Maybe<Scalars["String"]["output"]>;
  result?: Maybe<Array<Maybe<TestSpaCheckResult>>>;
};

export type TestSpaCheckResult = {
  __typename?: "TestSpaCheckResult";
  business?: Maybe<SpaCheckBusinessType>;
  employeesOverSpa?: Maybe<Array<Maybe<EmployeesOverSpaType>>>;
};

export type TestStatePensionAgeResponse = {
  __typename?: "TestStatePensionAgeResponse";
  currentDate?: Maybe<Scalars["String"]["output"]>;
  data?: Maybe<Array<Maybe<TestStatePensionAgeResponseData>>>;
};

export type TestStatePensionAgeResponseData = {
  __typename?: "TestStatePensionAgeResponseData";
  age?: Maybe<Scalars["String"]["output"]>;
  dateOfBirth?: Maybe<Scalars["String"]["output"]>;
  daysUntilSpaReached?: Maybe<Scalars["Int"]["output"]>;
  isBelowSpa?: Maybe<Scalars["Boolean"]["output"]>;
  isBelowSpaTomorrow?: Maybe<Scalars["Boolean"]["output"]>;
  spaDate?: Maybe<Scalars["String"]["output"]>;
};

export type TestUpdateEngagementDashboardActivity = {
  category: Scalars["String"]["input"];
  currentProgress: Scalars["Int"]["input"];
  numberCompleted: Scalars["Int"]["input"];
};

export type TestUserInput = {
  addressCity?: InputMaybe<Scalars["String"]["input"]>;
  addressCountry?: InputMaybe<Scalars["String"]["input"]>;
  addressCounty?: InputMaybe<Scalars["String"]["input"]>;
  addressFirstLine?: InputMaybe<Scalars["String"]["input"]>;
  addressPostCode?: InputMaybe<Scalars["String"]["input"]>;
  addressSecondLine?: InputMaybe<Scalars["String"]["input"]>;
  addressThirdLine?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  secondaryEmail?: InputMaybe<Scalars["String"]["input"]>;
};

export type ThumbnailImage = {
  __typename?: "ThumbnailImage";
  key: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
};

export type TodayEarnings = {
  __typename?: "TodayEarnings";
  activityFeed: Array<TodayEarningsActivityFeed>;
  header: TodayEarningsHeader;
};

export type TodayEarningsActivityFeed = {
  __typename?: "TodayEarningsActivityFeed";
  activityProgress: Array<TodayEarningsActivityProgress>;
  button?: Maybe<ContentItemButton>;
  buttonAccessibility?: Maybe<Accessibility>;
  emptyMessage?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  questionMarkModal?: Maybe<TodayEarningsQuestionMarkModal>;
  title: Scalars["String"]["output"];
  titleAccessibility: Accessibility;
  toast?: Maybe<TodayEarningsToast>;
  wellDoneBanner?: Maybe<RemoteImage>;
};

export type TodayEarningsActivityProgress = {
  __typename?: "TodayEarningsActivityProgress";
  accessibility: Accessibility;
  activitySubTotal: Scalars["String"]["output"];
  currentPosition: Scalars["Int"]["output"];
  iconUrl: RemoteImage;
  maxLength: Scalars["Int"]["output"];
  rating: Scalars["Int"]["output"];
  type: Scalars["String"]["output"];
  yuCoinSubTotal: Scalars["String"]["output"];
};

export type TodayEarningsHeader = {
  __typename?: "TodayEarningsHeader";
  yuCoinPower: Scalars["Int"]["output"];
  yuCoinToday: Scalars["String"]["output"];
};

export type TodayEarningsQuestionMarkBody = {
  __typename?: "TodayEarningsQuestionMarkBody";
  iconUrl: RemoteImage;
  title: Scalars["String"]["output"];
};

export type TodayEarningsQuestionMarkModal = {
  __typename?: "TodayEarningsQuestionMarkModal";
  accessibility: Accessibility;
  body: Array<TodayEarningsQuestionMarkBody>;
  event?: Maybe<SduiAction>;
  header: Scalars["String"]["output"];
  iconUrl: RemoteImage;
  toast: TodayEarningsToast;
};

export type TodayEarningsToast = {
  __typename?: "TodayEarningsToast";
  backgroundColor: Scalars["String"]["output"];
  borderColor: Scalars["String"]["output"];
  button?: Maybe<ContentItemButton>;
  description?: Maybe<Scalars["String"]["output"]>;
  iconUrl: RemoteImage;
};

export enum TopBarType {
  Default = "DEFAULT",
  Desert = "DESERT",
  Forest = "FOREST",
  Mountain = "MOUNTAIN",
  White = "WHITE",
}

export type TwoFaSecretResponse = {
  __typename?: "TwoFASecretResponse";
  secret: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
};

export type UnityRewardChestItem = {
  __typename?: "UnityRewardChestItem";
  backgroundColour: Scalars["String"]["output"];
  description: Scalars["String"]["output"];
  icon: RemoteImage;
  shadowColour: Scalars["String"]["output"];
  starColour?: Maybe<Scalars["String"]["output"]>;
  textColour: Scalars["String"]["output"];
  tooltip?: Maybe<UnityRewardChestItemTooltip>;
};

export type UnityRewardChestItemTooltip = {
  __typename?: "UnityRewardChestItemTooltip";
  cta: Scalars["String"]["output"];
  description: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type UnityRewards = {
  __typename?: "UnityRewards";
  afterword?: Maybe<UnityRewardsAfterword>;
  chest: UnityRewardsChest;
  congratulatory?: Maybe<UnityRewardsCongratulatory>;
  intro: UnityRewardsIntro;
};

export type UnityRewardsAfterword = {
  __typename?: "UnityRewardsAfterword";
  cta: Scalars["String"]["output"];
  description: Scalars["String"]["output"];
};

export type UnityRewardsChest = {
  __typename?: "UnityRewardsChest";
  chestType: RewardsChestType;
  items: Array<UnityRewardChestItem>;
  title: Scalars["String"]["output"];
};

export type UnityRewardsCongratulatory = {
  __typename?: "UnityRewardsCongratulatory";
  cta: Scalars["String"]["output"];
  description: Scalars["String"]["output"];
  heading?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
};

export type UnityRewardsIntro = {
  __typename?: "UnityRewardsIntro";
  cta?: Maybe<Scalars["String"]["output"]>;
  heading: Scalars["String"]["output"];
  subHeading?: Maybe<Scalars["String"]["output"]>;
};

export type UpdateContactDetailsInput = {
  addressCity?: InputMaybe<Scalars["String"]["input"]>;
  addressFirstLine?: InputMaybe<Scalars["String"]["input"]>;
  addressPostCode?: InputMaybe<Scalars["String"]["input"]>;
  addressSecondLine?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  personalEmailConsent?: InputMaybe<Scalars["Boolean"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateDetailsResponse = {
  __typename?: "UpdateDetailsResponse";
  updated?: Maybe<Scalars["Boolean"]["output"]>;
};

export type UpdateTeamSocialGroupInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  query?: InputMaybe<SearchQueryInput>;
};

export type UploadOneWithProductsResponse = {
  __typename?: "UploadOneWithProductsResponse";
  businessEmployeeId: Scalars["String"]["output"];
  warnings?: Maybe<Array<Scalars["String"]["output"]>>;
};

export type User = {
  __typename?: "User";
  activeAtWork?: Maybe<Scalars["Boolean"]["output"]>;
  /** @deprecated Use getUserActiveChallenge query instead */
  activeChallenge?: Maybe<ActiveChallenge>;
  activeMultiplier?: Maybe<ActiveMultiplier>;
  /** @deprecated Use getUserActiveStreak query instead */
  activeStreak?: Maybe<ActiveStreak>;
  activityToday?: Maybe<ActivityToday>;
  addressCity?: Maybe<Scalars["String"]["output"]>;
  addressCountry?: Maybe<Scalars["String"]["output"]>;
  addressCounty?: Maybe<Scalars["String"]["output"]>;
  addressFirstLine?: Maybe<Scalars["String"]["output"]>;
  addressPostCode?: Maybe<Scalars["String"]["output"]>;
  addressSecondLine?: Maybe<Scalars["String"]["output"]>;
  addressThirdLine?: Maybe<Scalars["String"]["output"]>;
  alcoholConsumption?: Maybe<Scalars["String"]["output"]>;
  archived?: Maybe<Scalars["Boolean"]["output"]>;
  bmi?: Maybe<Scalars["Float"]["output"]>;
  /** @deprecated Use getUserBusiness instead */
  business?: Maybe<UserBusiness>;
  businessAccountId?: Maybe<Scalars["String"]["output"]>;
  category?: Maybe<Scalars["String"]["output"]>;
  challengesDoneToday?: Maybe<Scalars["Int"]["output"]>;
  challengesToday?: Maybe<Array<Maybe<Challenge>>>;
  /** @deprecated Use getUserCoinLedger query instead */
  coinLedger?: Maybe<CoinLedger>;
  /** @deprecated Use getUserConnections query instead */
  connections?: Maybe<Array<Maybe<Connection>>>;
  counselling?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["String"]["output"]>;
  customerJourneyBookmark?: Maybe<Scalars["String"]["output"]>;
  dailyChallengeAmountAvailable?: Maybe<Scalars["Int"]["output"]>;
  dateJoined?: Maybe<Scalars["String"]["output"]>;
  dateLeft?: Maybe<Scalars["String"]["output"]>;
  dateOfBirth?: Maybe<Scalars["String"]["output"]>;
  declarationConfirmation?: Maybe<Scalars["Boolean"]["output"]>;
  declarationConfirmationAt?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  finalQuoteReached?: Maybe<Scalars["Boolean"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  fullName?: Maybe<Scalars["String"]["output"]>;
  gender?: Maybe<Scalars["String"]["output"]>;
  gpName?: Maybe<Scalars["String"]["output"]>;
  gpPostcode?: Maybe<Scalars["String"]["output"]>;
  gpPractice?: Maybe<Scalars["String"]["output"]>;
  gpTown?: Maybe<Scalars["String"]["output"]>;
  height?: Maybe<Scalars["String"]["output"]>;
  heightMeasurementUnit?: Maybe<Scalars["String"]["output"]>;
  historicalHbp?: Maybe<Scalars["String"]["output"]>;
  historicalHbpChecked?: Maybe<Scalars["String"]["output"]>;
  historicalHbpSatisfactory?: Maybe<Scalars["String"]["output"]>;
  historicalHospitalStay?: Maybe<Scalars["String"]["output"]>;
  historicalRestrictedActivity?: Maybe<Scalars["String"]["output"]>;
  historicalStableCondition?: Maybe<Scalars["String"]["output"]>;
  historicalSymptomsResolved?: Maybe<Scalars["String"]["output"]>;
  historicalTreatments?: Maybe<Scalars["String"]["output"]>;
  historicalTreatmentsDetail?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  insuranceBenefit?: Maybe<Scalars["Float"]["output"]>;
  /** A yulife-member-static specific field used for customer's initial journey */
  isNameEditable?: Maybe<Scalars["Boolean"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Use getUserLeaderboards query instead */
  leaderboards?: Maybe<Array<Maybe<Leaderboard>>>;
  marketingConsent?: Maybe<Scalars["Boolean"]["output"]>;
  marketingConsentAt?: Maybe<Scalars["String"]["output"]>;
  medicalHistory?: Maybe<Scalars["String"]["output"]>;
  medicalReportConsent?: Maybe<Scalars["Boolean"]["output"]>;
  medicalReportConsentAt?: Maybe<Scalars["String"]["output"]>;
  membershipType?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Use getUserMobileConsent query instead */
  mobileConsent?: Maybe<MobileConsent>;
  mobileHealthConsent?: Maybe<Scalars["Boolean"]["output"]>;
  mobileHealthConsentAt?: Maybe<Scalars["String"]["output"]>;
  niNumber?: Maybe<Scalars["String"]["output"]>;
  onboardingDate?: Maybe<Scalars["String"]["output"]>;
  otherSymptoms?: Maybe<Scalars["String"]["output"]>;
  passiveChallenge?: Maybe<PassiveChallenge>;
  passwordCreated?: Maybe<Scalars["Boolean"]["output"]>;
  personalDataConsent?: Maybe<Scalars["Boolean"]["output"]>;
  personalDataConsentAt?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  privacyNoticeConsent?: Maybe<Scalars["Boolean"]["output"]>;
  privacyNoticeConsentAt?: Maybe<Scalars["String"]["output"]>;
  recreationalDrugUse?: Maybe<Scalars["String"]["output"]>;
  redeemedOnboarding?: Maybe<Scalars["Boolean"]["output"]>;
  salary?: Maybe<Scalars["Float"]["output"]>;
  scheduledTreatments?: Maybe<Scalars["String"]["output"]>;
  scheduledTreatmentsDetail?: Maybe<Scalars["String"]["output"]>;
  secondaryEmail?: Maybe<Scalars["String"]["output"]>;
  smokerStatus?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Use getUserTodayActivity query instead */
  todayActivity?: Maybe<Array<Maybe<ActivityHistoryChallenge>>>;
  /** @deprecated Use getUserFeatures query instead */
  userFeatures?: Maybe<Array<Maybe<UserFeature>>>;
  viewMedicalReport?: Maybe<Scalars["Boolean"]["output"]>;
  viewMedicalReportAt?: Maybe<Scalars["String"]["output"]>;
  weight?: Maybe<Scalars["String"]["output"]>;
  weightMeasurementUnit?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Not supported anymore. */
  wootricId?: Maybe<Scalars["String"]["output"]>;
  workplacePostcode?: Maybe<Scalars["String"]["output"]>;
};

export type UserPassiveChallengeArgs = {
  id?: InputMaybe<PassiveChallengeType>;
};

export type UserAvatar = {
  __typename?: "UserAvatar";
  body?: Maybe<UserAvatarPart>;
  boots?: Maybe<UserAvatarPart>;
  chest?: Maybe<UserAvatarPart>;
  eyes?: Maybe<UserAvatarPart>;
  facialHair?: Maybe<UserAvatarPart>;
  glasses?: Maybe<UserAvatarPart>;
  gloves?: Maybe<UserAvatarPart>;
  hair?: Maybe<UserAvatarPart>;
  head?: Maybe<UserAvatarPart>;
  headwear?: Maybe<UserAvatarPart>;
  id?: Maybe<Scalars["String"]["output"]>;
  pants?: Maybe<UserAvatarPart>;
};

export type UserAvatarInput = {
  body?: InputMaybe<UserAvatarInputPart>;
  boots?: InputMaybe<UserAvatarInputPart>;
  chest?: InputMaybe<UserAvatarInputPart>;
  eyes?: InputMaybe<UserAvatarInputPart>;
  facialHair?: InputMaybe<UserAvatarInputPart>;
  glasses?: InputMaybe<UserAvatarInputPart>;
  gloves?: InputMaybe<UserAvatarInputPart>;
  hair?: InputMaybe<UserAvatarInputPart>;
  head?: InputMaybe<UserAvatarInputPart>;
  headwear?: InputMaybe<UserAvatarInputPart>;
  pants?: InputMaybe<UserAvatarInputPart>;
};

export type UserAvatarInputPart = {
  colorSchemeId?: InputMaybe<Scalars["String"]["input"]>;
  partId?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserAvatarPart = {
  __typename?: "UserAvatarPart";
  color?: Maybe<AvatarColor>;
  part?: Maybe<AvatarPart>;
};

export type UserAvatarPartUpdate = {
  colorSchemeId?: InputMaybe<Scalars["String"]["input"]>;
  partId?: InputMaybe<Scalars["String"]["input"]>;
  partType: Scalars["String"]["input"];
};

export type UserBusiness = {
  __typename?: "UserBusiness";
  alpha?: Maybe<Scalars["Boolean"]["output"]>;
  businessAccountName?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  isGroup?: Maybe<Scalars["Boolean"]["output"]>;
  isWellbeingAccess?: Maybe<Scalars["Boolean"]["output"]>;
};

export enum UserConsent {
  DeclarationConfirmation = "declarationConfirmation",
  Eula = "eula",
  Marketing = "marketing",
  MedicalReport = "medicalReport",
  MobileHealth = "mobileHealth",
  PersonalData = "personalData",
  PrivacyNotice = "privacyNotice",
  UsePersonalEmail = "usePersonalEmail",
  ViewMedicalReport = "viewMedicalReport",
}

export type UserFeature = {
  __typename?: "UserFeature";
  name?: Maybe<Scalars["String"]["output"]>;
  value?: Maybe<Scalars["Boolean"]["output"]>;
};

export enum UserNotificationsType {
  ChallengeCompletion = "challengeCompletion",
  DailyChallengeReminder = "dailyChallengeReminder",
  Duels = "duels",
  Marketing = "marketing",
  StreakSaver = "streakSaver",
  Surges = "surges",
}

export type UserOnboarding = {
  __typename?: "UserOnboarding";
  firstAppOpen: Scalars["Boolean"]["output"];
  signupComplete: Scalars["Boolean"]["output"];
};

export type UserPassiveChallengesEarnRate = {
  __typename?: "UserPassiveChallengesEarnRate";
  CYCLING?: Maybe<PassiveChallenge>;
  MEDITATION?: Maybe<PassiveChallenge>;
  STEPS?: Maybe<PassiveChallenge>;
};

export type UserPassiveChallengesLastUpdate = {
  __typename?: "UserPassiveChallengesLastUpdate";
  cycling?: Maybe<Scalars["String"]["output"]>;
  meditation?: Maybe<Scalars["String"]["output"]>;
  steps?: Maybe<Scalars["String"]["output"]>;
};

export type UserPayload = {
  __typename?: "UserPayload";
  expiresAt?: Maybe<Scalars["Int"]["output"]>;
  intercomHash?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  token?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<User>;
};

export type UserProfile = {
  __typename?: "UserProfile";
  avatar?: Maybe<UserProfileAvatar>;
  earnRate: Scalars["Int"]["output"];
  endPointsVersion: EndPointsVersion;
  events: Array<UserProfileEvents>;
  gameSettings: GameSettings;
  notification: UserProfileNotification;
  passiveChallengesLastUpdate: UserPassiveChallengesLastUpdate;
  passiveHourlyActivityLastUpdate: UserPassiveChallengesLastUpdate;
  surge?: Maybe<Surge>;
  tabNotifications: Array<MobileTabs>;
};

export type UserProfileAvatar = {
  __typename?: "UserProfileAvatar";
  avatarRemoteFiles?: Maybe<AvatarRemoteFiles>;
  isAvatarCreated?: Maybe<Scalars["Boolean"]["output"]>;
};

export type UserProfileEventMilestone = {
  __typename?: "UserProfileEventMilestone";
  animated?: Maybe<Scalars["Boolean"]["output"]>;
  image?: Maybe<RemoteImage>;
  isClaimable?: Maybe<Scalars["Boolean"]["output"]>;
  rewardClaimed?: Maybe<Scalars["Boolean"]["output"]>;
  rewardId?: Maybe<Scalars["String"]["output"]>;
  targetValue: Scalars["Int"]["output"];
};

export enum UserProfileEventStatus {
  Active = "active",
  Completed = "completed",
}

export type UserProfileEvents = {
  __typename?: "UserProfileEvents";
  badge?: Maybe<UserProfileEventsBadge>;
  challenges: Array<UserProfileEventsChallenges>;
  description?: Maybe<Scalars["String"]["output"]>;
  /** should be purged after we stop supporting 3.26 */
  descriptionImage?: Maybe<RemoteImage>;
  endDate?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["String"]["output"];
  joined?: Maybe<Scalars["Boolean"]["output"]>;
  milestones: Array<UserProfileEventMilestone>;
  participationId?: Maybe<Scalars["String"]["output"]>;
  progressBar: UserProfileEventsProgressBar;
  /** should be purged after we stop supporting 3.26 */
  reward?: Maybe<Scalars["String"]["output"]>;
  /** should be purged after we stop supporting 3.26 */
  rewardImage?: Maybe<RemoteImage>;
  /** deprecated */
  stageId: Scalars["String"]["output"];
  startDate?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<UserProfileEventStatus>;
  tags: UserProfileEventsTags;
  /** should be purged after we stop supporting 3.26 */
  task?: Maybe<Scalars["String"]["output"]>;
  /** should be purged after we stop supporting 3.26 */
  taskImage?: Maybe<RemoteImage>;
  title: Scalars["String"]["output"];
};

export type UserProfileEventsBadge = {
  __typename?: "UserProfileEventsBadge";
  backgroundColor?: Maybe<Scalars["String"]["output"]>;
  icon: RemoteImage;
  text: Scalars["String"]["output"];
};

export type UserProfileEventsChallenges = {
  __typename?: "UserProfileEventsChallenges";
  description: Scalars["String"]["output"];
  icon: RemoteImage;
  type: Scalars["String"]["output"];
};

export type UserProfileEventsProgressBar = {
  __typename?: "UserProfileEventsProgressBar";
  current: Scalars["Int"]["output"];
  max: Scalars["Int"]["output"];
};

export type UserProfileEventsTags = {
  __typename?: "UserProfileEventsTags";
  icon: RemoteImage;
  joined?: Maybe<Scalars["String"]["output"]>;
  tag: Scalars["String"]["output"];
};

export type UserProfileNotification = {
  __typename?: "UserProfileNotification";
  hasAdBanners: Scalars["Boolean"]["output"];
  hasAppReview: Scalars["Boolean"]["output"];
  hasDailyScreenCustomIcon: Scalars["Boolean"]["output"];
  hasDuels: Scalars["Boolean"]["output"];
  hasMobileWhatsNewModal: Scalars["Boolean"]["output"];
  hasPendingForm: Scalars["Boolean"]["output"];
  hasYuScreenNotification: Scalars["Boolean"]["output"];
};

export type UserProfileStatistic = {
  __typename?: "UserProfileStatistic";
  avatar: RemoteImage;
  fullName: Scalars["String"]["output"];
  level: Scalars["Int"]["output"];
  sections: UserStatistics;
  yuniversalMap: Scalars["Int"]["output"];
};

export type UserProfileStatisticComparison = {
  __typename?: "UserProfileStatisticComparison";
  current: UserProfileStatistic;
  opponent?: Maybe<UserProfileStatistic>;
};

export type UserReferralInformation = {
  __typename?: "UserReferralInformation";
  background: RemoteImage;
  disclaimer: Scalars["String"]["output"];
  markdown: ReferralMarkdown;
  referralHistory: Array<ReferralHistoryItem>;
  referralLink: Scalars["String"]["output"];
  rewardForReferral: Scalars["Int"]["output"];
  shareCTA: Scalars["String"]["output"];
  shareMessage: Scalars["String"]["output"];
};

export type UserStatisticDetails = {
  __typename?: "UserStatisticDetails";
  icon: RemoteImage;
  id: Scalars["ID"]["output"];
  info?: Maybe<Scalars["String"]["output"]>;
  label: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
  value: Scalars["Float"]["output"];
};

export type UserStatistics = {
  __typename?: "UserStatistics";
  activity: UserStatisticsSection;
  duels?: Maybe<UserStatisticsSection>;
  general?: Maybe<UserStatisticsSection>;
};

export type UserStatisticsSection = {
  __typename?: "UserStatisticsSection";
  stats: Array<Maybe<UserStatisticDetails>>;
  subtitle?: Maybe<Scalars["String"]["output"]>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type VariableRemoteImage = {
  __typename?: "VariableRemoteImage";
  image: RemoteImage;
  width: Scalars["Int"]["output"];
};

export type WellbeingHubCategory = {
  __typename?: "WellbeingHubCategory";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
};

export type WellbeingHubDocumentUploadUrlResponse = {
  __typename?: "WellbeingHubDocumentUploadUrlResponse";
  key: Scalars["String"]["output"];
  uploadUrl: Scalars["String"]["output"];
};

export type WellbeingHubItem = {
  __typename?: "WellbeingHubItem";
  content?: Maybe<Array<ContentItem>>;
  description: Scalars["String"]["output"];
  icon?: Maybe<RemoteImage>;
  id: Scalars["ID"]["output"];
  route?: Maybe<Scalars["String"]["output"]>;
  sduiStepId: Scalars["String"]["output"];
  thumbnail?: Maybe<RemoteImage>;
  title: Scalars["String"]["output"];
};

export type Yoyo = {
  __typename?: "Yoyo";
  voucherCode: Scalars["String"]["output"];
};

export type YuCoinPowerExplained = {
  __typename?: "YuCoinPowerExplained";
  activities: YuCoinPowerExplainedActivities;
  button: YuCoinPowerExplainedButton;
  heading: Scalars["String"]["output"];
  yuCoin: YuCoinPowerExplainedYuCoin;
};

export type YuCoinPowerExplainedActivities = {
  __typename?: "YuCoinPowerExplainedActivities";
  additionalActivities: YuCoinPowerExplainedActivityGroup;
  dailyCoreActivities: YuCoinPowerExplainedActivityGroup;
  heading: Scalars["String"]["output"];
};

export type YuCoinPowerExplainedActivity = {
  __typename?: "YuCoinPowerExplainedActivity";
  icon: RemoteImage;
  label: Scalars["String"]["output"];
  reward: Scalars["String"]["output"];
};

export type YuCoinPowerExplainedActivityGroup = {
  __typename?: "YuCoinPowerExplainedActivityGroup";
  items?: Maybe<Array<YuCoinPowerExplainedActivity>>;
  title: Scalars["String"]["output"];
};

export type YuCoinPowerExplainedButton = {
  __typename?: "YuCoinPowerExplainedButton";
  event?: Maybe<SduiAction>;
  label: Scalars["String"]["output"];
};

export type YuCoinPowerExplainedScreen = {
  __typename?: "YuCoinPowerExplainedScreen";
  productPreviews: YuCoinPowerExplainedScreenProductPreview;
  products: Array<YuCoinPowerExplainedScreenProductItem>;
  sections: Array<YuCoinPowerExplainedScreenActivities>;
  yuCoin: YuCoinPowerExplainedScreenYuCoin;
};

export type YuCoinPowerExplainedScreenActivities = {
  __typename?: "YuCoinPowerExplainedScreenActivities";
  items: Array<YuCoinPowerExplainedScreenActivityItem>;
  title: Scalars["String"]["output"];
};

export type YuCoinPowerExplainedScreenActivityItem = {
  __typename?: "YuCoinPowerExplainedScreenActivityItem";
  icon: RemoteImage;
  milestone: Scalars["String"]["output"];
  rewardText: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type YuCoinPowerExplainedScreenButton = {
  __typename?: "YuCoinPowerExplainedScreenButton";
  label: Scalars["String"]["output"];
  productAction?: Maybe<ProductAction>;
  sduiAction?: Maybe<SduiAction>;
};

export type YuCoinPowerExplainedScreenProductItem = {
  __typename?: "YuCoinPowerExplainedScreenProductItem";
  backgroundColor: Scalars["String"]["output"];
  button: YuCoinPowerExplainedScreenButton;
  description: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  image: RemoteImage;
  title: Scalars["String"]["output"];
  yuCoinPower: Scalars["Int"]["output"];
};

export type YuCoinPowerExplainedScreenProductPreview = {
  __typename?: "YuCoinPowerExplainedScreenProductPreview";
  items: Array<YuCoinPowerExplainedScreenProductPreviewItem>;
  title: Scalars["String"]["output"];
};

export type YuCoinPowerExplainedScreenProductPreviewItem = {
  __typename?: "YuCoinPowerExplainedScreenProductPreviewItem";
  backgroundColor: Scalars["String"]["output"];
  description: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  image: RemoteImage;
  title: Scalars["String"]["output"];
  yuCoinPower: Scalars["Int"]["output"];
};

export type YuCoinPowerExplainedScreenYuCoin = {
  __typename?: "YuCoinPowerExplainedScreenYuCoin";
  earnRate: Scalars["Int"]["output"];
  earnings: Scalars["Int"]["output"];
  info: YuCoinPowerExplainedScreenYuCoinInfo;
};

export type YuCoinPowerExplainedScreenYuCoinInfo = {
  __typename?: "YuCoinPowerExplainedScreenYuCoinInfo";
  button: YuCoinPowerExplainedScreenButton;
  description: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type YuCoinPowerExplainedYuCoin = {
  __typename?: "YuCoinPowerExplainedYuCoin";
  description: Scalars["String"]["output"];
  earnRate: Scalars["Int"]["output"];
  title: Scalars["String"]["output"];
};

export type YuProductCertificate = {
  __typename?: "YuProductCertificate";
  /** Used as body in the policy detail certificate e.g. "Provides financial support if you cannot work due to ill health." */
  body: Scalars["String"]["output"];
  /** Business name */
  companyName: Scalars["String"]["output"];
  /** Used as info for terms and conditions on policy detail certificate e.g. Paid over 24 months */
  condition: Array<ProductDescriptionValuePair>;
  /** Customer name */
  customerFullName: Scalars["String"]["output"];
  /** Customer join date */
  customerJoinDate: Scalars["String"]["output"];
  /** Used as the heading in policy detail certificate e.g. Total cover 25% of salary */
  heading?: Maybe<ProductDescriptionValuePair>;
};

export type YuProductDetails = {
  __typename?: "YuProductDetails";
  /** Benefit description/value pair, appears typically on mobile product cards */
  benefit?: Maybe<ProductDescriptionValuePair>;
  /** Data for product certificate UI */
  certificate?: Maybe<YuProductCertificate>;
  /** e.g. common, rare, epic */
  coverType: CoverType;
  /** Uses markdown */
  disclaimer?: Maybe<Scalars["String"]["output"]>;
  /** Additional earn rate gained from product */
  earnRate: Scalars["Int"]["output"];
  /** Not all the products can have beneficiaries attached to them. E.g an alpha product(trinket) doesn't. */
  hasBeneficiariesEnabled: Scalars["Boolean"]["output"];
  isPersonalProduct: Scalars["Boolean"]["output"];
  /** Date when policy was last updated */
  policyLastUpdated?: Maybe<Scalars["String"]["output"]>;
  /** Product's policy number */
  policyNumber: Scalars["String"]["output"];
  /** Policy start date customer_policy.start_date */
  policyStartDate?: Maybe<Scalars["String"]["output"]>;
  /** policy status customer_policy.policy_status */
  policyStatus?: Maybe<PolicyStatus>;
  /** -> product.product_id */
  productCodeId: Scalars["ID"]["output"];
  /** Description of product, can include benefitDescription and benefitValue */
  productDescription: Scalars["String"]["output"];
  /** Link to png image */
  productIconUri?: Maybe<Scalars["String"]["output"]>;
  /** -> customer_product_entity.customer_product_id */
  productId?: Maybe<Scalars["ID"]["output"]>;
  /** Name e.g. Group Life Insurance */
  productName: Scalars["String"]["output"];
  /** Used for countdown calculation */
  secondsUntilStartDate?: Maybe<Scalars["Int"]["output"]>;
};

export enum YuProductStatus {
  Active = "active",
  InProgress = "inProgress",
  Locked = "locked",
  OwnedNoPolicy = "ownedNoPolicy",
  Rejected = "rejected",
  Unlockable = "unlockable",
}

export type YuScreen = {
  __typename?: "YuScreen";
  boxOptionCards?: Maybe<Array<Maybe<YuScreenBoxOptionCard>>>;
  carrierLogo?: Maybe<VariableRemoteImage>;
  enrolTimer?: Maybe<YuScreenEnrolTimer>;
  enrollCopy?: Maybe<YuScreenEnrollCopy>;
  onboarding?: Maybe<YuScreenOnboarding>;
  productCarousel?: Maybe<YuScreenCarousel>;
  productSlots: Array<Maybe<YuScreenProduct>>;
  spanningProductSlot?: Maybe<YuScreenSpanningProductSlot>;
  surveyFooter?: Maybe<YuScreenSurveyFooter>;
  yumojiPrompt: YuScreenYumojiPrompt;
};

export type YuScreenBoxOptionCard = {
  __typename?: "YuScreenBoxOptionCard";
  description?: Maybe<Scalars["String"]["output"]>;
  image?: Maybe<RemoteImage>;
  onPress?: Maybe<SduiAction>;
  title?: Maybe<Scalars["String"]["output"]>;
};

export type YuScreenCarousel = {
  __typename?: "YuScreenCarousel";
  heading?: Maybe<Scalars["String"]["output"]>;
  items: Array<Maybe<YuScreenCarouselItem>>;
};

export type YuScreenCarouselItem = {
  __typename?: "YuScreenCarouselItem";
  backgroundColor?: Maybe<Scalars["String"]["output"]>;
  button?: Maybe<YuScreenCarouselItemButton>;
  contentContainerStyles?: Maybe<Array<SduiStyle>>;
  descriptionMarkdown?: Maybe<Scalars["String"]["output"]>;
  descriptionMarkdownStyles?: Maybe<Array<SduiStyle>>;
  id: Scalars["ID"]["output"];
  images?: Maybe<Array<VariableRemoteImage>>;
  titleMarkdown?: Maybe<Scalars["String"]["output"]>;
  titleMarkdownStyles?: Maybe<Array<SduiStyle>>;
  variant?: Maybe<YuScreenCarouselItemVariant>;
};

export type YuScreenCarouselItemButton = {
  __typename?: "YuScreenCarouselItemButton";
  event?: Maybe<SduiAction>;
  label: Scalars["String"]["output"];
  onPress: YuScreenProductButtonAction;
};

export enum YuScreenCarouselItemVariant {
  Full = "full",
  Narrow = "narrow",
}

export type YuScreenEarnRateTableColumn = {
  __typename?: "YuScreenEarnRateTableColumn";
  flex?: Maybe<Scalars["Int"]["output"]>;
  header?: Maybe<YuScreenEarnRateTableHeader>;
  icons?: Maybe<Array<RemoteImage>>;
  themeType: YuScreenEarnRateTableThemeType;
  valueType: YuScreenEarnRateTableValueType;
  values: Array<Scalars["String"]["output"]>;
};

export type YuScreenEarnRateTableHeader = {
  __typename?: "YuScreenEarnRateTableHeader";
  power: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type YuScreenEarnRateTableMarkdown = {
  __typename?: "YuScreenEarnRateTableMarkdown";
  id: Scalars["ID"]["output"];
  markdown: Scalars["String"]["output"];
};

export enum YuScreenEarnRateTableThemeType {
  Base = "base",
  BaseDecorated = "baseDecorated",
  Common = "common",
  Epic = "epic",
  Prestige = "prestige",
  Rare = "rare",
}

export enum YuScreenEarnRateTableValueType {
  Data = "data",
  Header = "header",
}

export type YuScreenEnrolTimer = {
  __typename?: "YuScreenEnrolTimer";
  backgroundGradientList?: Maybe<Array<Scalars["String"]["output"]>>;
  button?: Maybe<YuScreenEnrolTimerButton>;
  heading?: Maybe<Scalars["String"]["output"]>;
  secondsUntilTarget: Scalars["Int"]["output"];
  styles?: Maybe<Array<SduiStyle>>;
};

export type YuScreenEnrolTimerButton = {
  __typename?: "YuScreenEnrolTimerButton";
  event?: Maybe<SduiAction>;
  label: Scalars["String"]["output"];
  onPress: SduiAction;
};

export type YuScreenEnrollCopy = {
  __typename?: "YuScreenEnrollCopy";
  description: Scalars["String"]["output"];
  styles?: Maybe<Array<SduiStyle>>;
  title: Scalars["String"]["output"];
};

export type YuScreenItemSlot = {
  __typename?: "YuScreenItemSlot";
  backgroundUrl: Scalars["String"]["output"];
  iconUrl: Scalars["String"]["output"];
};

export type YuScreenOnboarding = {
  __typename?: "YuScreenOnboarding";
  button: YuScreenOnboardingButton;
  dismissByPlaceholder: Scalars["Boolean"]["output"];
  heading: Scalars["String"]["output"];
  id: MobileOnboardingStepPerformed;
  isYuCoinPowerDisplayed?: Maybe<Scalars["Boolean"]["output"]>;
  overlayImage?: Maybe<RemoteImage>;
  placeholder: YuScreenProduct;
  productSlots?: Maybe<Array<YuScreenProduct>>;
  text: Scalars["String"]["output"];
};

export type YuScreenOnboardingButton = {
  __typename?: "YuScreenOnboardingButton";
  event?: Maybe<SduiAction>;
  label: Scalars["String"]["output"];
  onPress?: Maybe<YuScreenProductButtonAction>;
};

export type YuScreenPopover = {
  __typename?: "YuScreenPopover";
  id: Scalars["ID"]["output"];
  message: Scalars["String"]["output"];
};

export type YuScreenProduct = {
  __typename?: "YuScreenProduct";
  backgroundColour: Scalars["String"]["output"];
  borderColor?: Maybe<Scalars["String"]["output"]>;
  borderStyle?: Maybe<YuScreenSlotBorderStyle>;
  borderWidth?: Maybe<Scalars["Int"]["output"]>;
  bottomShadowColour: Scalars["String"]["output"];
  depressed?: Maybe<Scalars["Boolean"]["output"]>;
  event?: Maybe<SduiAction>;
  id: Scalars["ID"]["output"];
  leftBackgroundImage?: Maybe<RemoteImage>;
  leftText?: Maybe<Scalars["String"]["output"]>;
  leftTextColour?: Maybe<Scalars["String"]["output"]>;
  onPress?: Maybe<YuScreenProductButtonAction>;
  rightIcon?: Maybe<RemoteImage>;
  rightStatusIcon?: Maybe<RemoteImage>;
  showOnOnboarding?: Maybe<Scalars["Boolean"]["output"]>;
  status?: Maybe<YuProductStatus>;
  text?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  titleColour: Scalars["String"]["output"];
  topShadowColour: Scalars["String"]["output"];
};

export type YuScreenProductButtonAction = {
  __typename?: "YuScreenProductButtonAction";
  productAction?: Maybe<ProductAction>;
  sduiAction?: Maybe<SduiAction>;
};

export type YuScreenProductDescriptionValuePair = {
  __typename?: "YuScreenProductDescriptionValuePair";
  description: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type YuScreenProductDetails = {
  __typename?: "YuScreenProductDetails";
  absolute?: Maybe<Array<AbsoluteYuScreenProductDetailsContentItem>>;
  /** Content displayed inside the scrollview area */
  body?: Maybe<Array<YuScreenProductDetailsContentItem>>;
  /** Container styles go here */
  containerStyles?: Maybe<Array<SduiStyle>>;
  /** Supported RN version 3.48.0 */
  footer?: Maybe<Array<YuScreenProductDetailsContentItem>>;
  /** Supported RN version 3.48.0 */
  footerStyles?: Maybe<Array<SduiStyle>>;
  /** Supported RN version 3.48.0 */
  header?: Maybe<Array<YuScreenProductDetailsContentItem>>;
};

export type YuScreenProductDetailsContentItem =
  | ContentItemAppDownloadPrompt
  | ContentItemBeneficiariesSection
  | ContentItemButton
  | ContentItemCollapsingGenericHeader
  | ContentItemFade
  | ContentItemHeaderBar
  | ContentItemHint
  | ContentItemImage
  | ContentItemInfoCard
  | ContentItemKeyValueBox
  | ContentItemLinearGradient
  | ContentItemMarkdown
  | ContentItemPad
  | ContentItemPerks
  | ContentItemProcessingTimer
  | ContentItemProductDetailsHeader
  | ContentItemProductDetailsHoldingHeader
  | ContentItemRewardsBanner
  | ContentItemRowIconTextBanner
  | ContentItemSelectedPackageCard
  | ContentItemText
  | ContentItemWrapper
  | ContentItemYuCoinPower;

export type YuScreenProductList = {
  __typename?: "YuScreenProductList";
  body: Array<YuScreenCarouselItem>;
  heading?: Maybe<Scalars["String"]["output"]>;
};

export type YuScreenProductPaymentHistory = {
  __typename?: "YuScreenProductPaymentHistory";
  infoPanel?: Maybe<YuScreenProductPaymentHistoryInfoPanel>;
  items?: Maybe<Array<YuScreenProductPaymentHistoryItem>>;
};

export type YuScreenProductPaymentHistoryInfoPanel = {
  __typename?: "YuScreenProductPaymentHistoryInfoPanel";
  /** RN client version >= 3.45.0 */
  button?: Maybe<ProductPaymentHistoryInfoPanelButton>;
  /**
   * RN client version >= 3.45.0
   * This field is intended to make the entire info panel pressable.
   */
  containerActions?: Maybe<ProductPaymentHistoryInfoPanelContainerActions>;
  markdown: Scalars["String"]["output"];
  remoteImage?: Maybe<RemoteImage>;
  /** RN client version >= 3.45.0 */
  showCloseIcon?: Maybe<Scalars["Boolean"]["output"]>;
  /** RN client version >= 3.45.0 */
  titleMarkdown?: Maybe<Scalars["String"]["output"]>;
  /** RN client version >= 3.45.0 */
  type: ContentItemRowIconTextBannerType;
};

export type YuScreenProductPaymentHistoryItem = {
  __typename?: "YuScreenProductPaymentHistoryItem";
  amount: Scalars["String"]["output"];
  date: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  status: Scalars["String"]["output"];
};

export type YuScreenProductSlot = {
  __typename?: "YuScreenProductSlot";
  slot1: YuScreenProductSlotItem;
  slot2: YuScreenProductSlotItem;
  slot3: YuScreenProductSlotItem;
  slot4: YuScreenProductSlotItem;
};

export type YuScreenProductSlotItem = {
  __typename?: "YuScreenProductSlotItem";
  badge: YuScreenProductSlotItemBadge;
  coverType?: Maybe<CoverType>;
  earnRate: Scalars["Int"]["output"];
  icon: YuScreenProductSlotItemIcon;
  itemUrl: Scalars["String"]["output"];
  popover?: Maybe<YuScreenPopover>;
  productId?: Maybe<Scalars["String"]["output"]>;
  status: YuProductStatus;
  toolTip: YuScreenProductSlotItemToolTip;
};

export type YuScreenProductSlotItemBadge = {
  __typename?: "YuScreenProductSlotItemBadge";
  badgeUrl: Scalars["String"]["output"];
  text?: Maybe<YuScreenProductSlotItemBadgeText>;
};

export type YuScreenProductSlotItemBadgeText = {
  __typename?: "YuScreenProductSlotItemBadgeText";
  colour: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type YuScreenProductSlotItemDescription = {
  __typename?: "YuScreenProductSlotItemDescription";
  long?: Maybe<Scalars["String"]["output"]>;
  short: Scalars["String"]["output"];
};

export type YuScreenProductSlotItemIcon = {
  __typename?: "YuScreenProductSlotItemIcon";
  backgroundUrl: Scalars["String"]["output"];
  colour: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
};

export type YuScreenProductSlotItemToolTip = {
  __typename?: "YuScreenProductSlotItemToolTip";
  benefit: YuScreenProductDescriptionValuePair;
  description: YuScreenProductSlotItemDescription;
  /** Uses markdown */
  disclaimer?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Use benefit */
  heading?: Maybe<Scalars["String"]["output"]>;
  itemUrl: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
};

export type YuScreenProductSurvey = {
  __typename?: "YuScreenProductSurvey";
  description: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  options: Array<YuScreenProductSurveyOption>;
  postSubmissionMessage: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type YuScreenProductSurveyOption = {
  __typename?: "YuScreenProductSurveyOption";
  id: Scalars["ID"]["output"];
  label: Scalars["String"]["output"];
};

export type YuScreenProducts = {
  __typename?: "YuScreenProducts";
  bottom: Array<Maybe<YuScreenProductSlotItem>>;
  left: YuScreenProductSlot;
  right: YuScreenProductSlot;
};

export enum YuScreenSlotBorderStyle {
  Dashed = "dashed",
  Dotted = "dotted",
  Solid = "solid",
}

export type YuScreenSpanningProductSlot = {
  __typename?: "YuScreenSpanningProductSlot";
  heading?: Maybe<Scalars["String"]["output"]>;
  images?: Maybe<Array<VariableRemoteImage>>;
};

export type YuScreenSurveyFooter = {
  __typename?: "YuScreenSurveyFooter";
  backgroundColour: Scalars["String"]["output"];
  button: YuScreenSurveyFooterButton;
  image: RemoteImage;
  markdown: Scalars["String"]["output"];
};

export type YuScreenSurveyFooterButton = {
  __typename?: "YuScreenSurveyFooterButton";
  event?: Maybe<SduiAction>;
  label: Scalars["String"]["output"];
  onPress: SduiAction;
};

export type YuScreenYumojiPrompt = {
  __typename?: "YuScreenYumojiPrompt";
  buttonText: Scalars["String"]["output"];
  heading: Scalars["String"]["output"];
  text: Scalars["String"]["output"];
};

export type YuStoreGroupProduct = {
  __typename?: "YuStoreGroupProduct";
  images: YuStoreProductImages;
  longDescription: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  productCode: Scalars["String"]["output"];
  section: YuStoreProductSectionName;
  shortDescription: Scalars["String"]["output"];
};

export type YuStoreImage = {
  __typename?: "YuStoreImage";
  alt: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
};

export type YuStorePerk = {
  __typename?: "YuStorePerk";
  archived?: Maybe<Scalars["Boolean"]["output"]>;
  category: Scalars["String"]["output"];
  configFields?: Maybe<Array<YuStorePerkConfigField>>;
  description: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  perkId: Scalars["String"]["output"];
  providerId: Scalars["String"]["output"];
};

export type YuStorePerkConfigField = {
  __typename?: "YuStorePerkConfigField";
  name?: Maybe<Scalars["String"]["output"]>;
  required?: Maybe<Scalars["Boolean"]["output"]>;
};

export type YuStorePerkProduct = {
  __typename?: "YuStorePerkProduct";
  category: Scalars["String"]["output"];
  description: Scalars["String"]["output"];
  discountPercentage: Scalars["Float"]["output"];
  images: YuStoreProductImages;
  includesVAT?: Maybe<Scalars["Boolean"]["output"]>;
  isDisplayOnly?: Maybe<Scalars["Boolean"]["output"]>;
  licenceDurationMonths?: Maybe<Scalars["Int"]["output"]>;
  name: Scalars["String"]["output"];
  perkId: Scalars["String"]["output"];
  platform: Array<YuStorePlatform>;
  providerId: Scalars["String"]["output"];
  rrp: Scalars["Float"]["output"];
  section: YuStoreProductSectionName;
  shortDescription: Scalars["String"]["output"];
  testimonial?: Maybe<YuStoreProductTestimonial>;
  type: YuStoreProductType;
  yuStorePrice: Scalars["Float"]["output"];
};

export enum YuStorePlatform {
  Android = "android",
  Ios = "ios",
  Web = "web",
}

export type YuStoreProduct = {
  __typename?: "YuStoreProduct";
  groupProduct?: Maybe<YuStoreGroupProduct>;
  perk?: Maybe<YuStorePerkProduct>;
};

export type YuStoreProductImages = {
  __typename?: "YuStoreProductImages";
  card: YuStoreImage;
  favourite?: Maybe<YuStoreImage>;
  logo: YuStoreImage;
  productDetail: YuStoreImage;
};

export type YuStoreProductPrice = {
  __typename?: "YuStoreProductPrice";
  discountPercentage: Scalars["Float"]["output"];
  numberOfLicences: Scalars["Int"]["output"];
  price: Scalars["Float"]["output"];
  productId: Scalars["String"]["output"];
  productName: Scalars["String"]["output"];
  rrp: Scalars["Float"]["output"];
  total: Scalars["Float"]["output"];
  yuStoreCredit: Scalars["Float"]["output"];
  yuStorePrice: Scalars["Float"]["output"];
};

export type YuStoreProductSection = {
  __typename?: "YuStoreProductSection";
  heading: Scalars["String"]["output"];
  name: YuStoreProductSectionName;
  products: Array<YuStoreProduct>;
  subheading: Scalars["String"]["output"];
};

export enum YuStoreProductSectionName {
  Favourites = "favourites",
  GroupProducts = "groupProducts",
  HealthAndWellness = "healthAndWellness",
}

export type YuStoreProductTestimonial = {
  __typename?: "YuStoreProductTestimonial";
  author: Scalars["String"]["output"];
  avatar: Scalars["String"]["output"];
  company: Scalars["String"]["output"];
  content: Scalars["String"]["output"];
  position: Scalars["String"]["output"];
};

export enum YuStoreProductType {
  Consultation = "consultation",
  Licence = "licence",
}

export enum YuWorld {
  Desert = "desert",
  Forest = "forest",
  Mountain = "mountain",
  Ocean = "ocean",
}

export type Yulifer = {
  __typename?: "Yulifer";
  avatar?: Maybe<UserAvatar>;
  avatarRemoteFiles?: Maybe<AvatarRemoteFiles>;
  earnRate?: Maybe<Scalars["Int"]["output"]>;
  isAvatarCreated?: Maybe<Scalars["Boolean"]["output"]>;
  /** @deprecated No longer supported */
  products?: Maybe<YuliferProductType>;
  userId?: Maybe<Scalars["String"]["output"]>;
};

export type YuliferProduct = {
  __typename?: "YuliferProduct";
  /** @deprecated use YuliferProduct.status at client version 2.9 */
  active?: Maybe<Scalars["Boolean"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  earnRate?: Maybe<Scalars["Int"]["output"]>;
  icon?: Maybe<Scalars["String"]["output"]>;
  itemSlot?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  option?: Maybe<Scalars["String"]["output"]>;
  policyNumber?: Maybe<Scalars["String"]["output"]>;
  productId?: Maybe<Scalars["String"]["output"]>;
  productType?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

export type YuliferProductType = {
  __typename?: "YuliferProductType";
  charms?: Maybe<Array<Maybe<YuliferProduct>>>;
  employer?: Maybe<Array<Maybe<YuliferProduct>>>;
  personal?: Maybe<Array<Maybe<YuliferProduct>>>;
};

export type YumojiBuilderCategory = {
  __typename?: "YumojiBuilderCategory";
  children?: Maybe<Array<YumojiBuilderCategoryChild>>;
  icon: RemoteImage;
  id: Scalars["String"]["output"];
  matchType: YumojiBuilderItemMatchType;
  previewLeft?: Maybe<Scalars["Int"]["output"]>;
  previewTop?: Maybe<Scalars["Int"]["output"]>;
  previewZoom?: Maybe<Scalars["Float"]["output"]>;
  selectedIcon: RemoteImage;
  variantsOfPart?: Maybe<Scalars["String"]["output"]>;
};

export type YumojiBuilderCategoryChild = {
  __typename?: "YumojiBuilderCategoryChild";
  emptyMessage?: Maybe<Scalars["String"]["output"]>;
  icon: RemoteImage;
  id: Scalars["String"]["output"];
  matchType: YumojiBuilderItemMatchType;
  previewLeft?: Maybe<Scalars["Int"]["output"]>;
  previewTop?: Maybe<Scalars["Int"]["output"]>;
  previewZoom?: Maybe<Scalars["Float"]["output"]>;
  selectedIcon: RemoteImage;
  variantsOfPart?: Maybe<Scalars["String"]["output"]>;
};

export type YumojiBuilderImageTransform = {
  __typename?: "YumojiBuilderImageTransform";
  height?: Maybe<Scalars["Int"]["output"]>;
  left?: Maybe<Scalars["Int"]["output"]>;
  top?: Maybe<Scalars["Int"]["output"]>;
  width?: Maybe<Scalars["Int"]["output"]>;
  zoom?: Maybe<Scalars["Float"]["output"]>;
};

export type YumojiBuilderItem = {
  __typename?: "YumojiBuilderItem";
  label?: Maybe<YumojiBuilderLabel>;
  modal?: Maybe<YumojiBuilderModal>;
  parts: Array<YumojiBuilderItemPart>;
  preview?: Maybe<YumojiBuilderItemPreview>;
  representativeColor?: Maybe<Scalars["String"]["output"]>;
  status: YumojiPartStatus;
  statusIcon?: Maybe<Scalars["String"]["output"]>;
};

export enum YumojiBuilderItemMatchType {
  ExactVariant = "exactVariant",
  PartId = "partId",
}

export type YumojiBuilderItemPart = {
  __typename?: "YumojiBuilderItemPart";
  categoryId?: Maybe<Scalars["String"]["output"]>;
  colorSchemeId?: Maybe<Scalars["String"]["output"]>;
  hidesPartTypes?: Maybe<Array<AvatarPartType>>;
  order: Scalars["Int"]["output"];
  partId: Scalars["String"]["output"];
  partType: Scalars["String"]["output"];
  remoteUrl?: Maybe<RemoteImage>;
};

export type YumojiBuilderItemPreview = {
  __typename?: "YumojiBuilderItemPreview";
  image: RemoteImage;
  transform?: Maybe<YumojiBuilderImageTransform>;
};

export type YumojiBuilderItemsForCategory = {
  __typename?: "YumojiBuilderItemsForCategory";
  items: Array<YumojiBuilderItem>;
  title: Scalars["String"]["output"];
};

export type YumojiBuilderLabel = {
  __typename?: "YumojiBuilderLabel";
  backgroundColor?: Maybe<Scalars["String"]["output"]>;
  borderColor?: Maybe<Scalars["String"]["output"]>;
  icon: RemoteImage;
  labelColor?: Maybe<Scalars["String"]["output"]>;
  text: Scalars["String"]["output"];
};

export type YumojiBuilderModal = {
  __typename?: "YumojiBuilderModal";
  cta?: Maybe<Scalars["String"]["output"]>;
  ctaText?: Maybe<Scalars["String"]["output"]>;
  message: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type YumojiBuilderPart = {
  __typename?: "YumojiBuilderPart";
  categoryId?: Maybe<Scalars["String"]["output"]>;
  colorSchemeId?: Maybe<Scalars["String"]["output"]>;
  hidesPartTypes?: Maybe<Array<AvatarPartType>>;
  order: Scalars["Int"]["output"];
  partId?: Maybe<Scalars["String"]["output"]>;
  partType: Scalars["String"]["output"];
  remoteUrl: RemoteImage;
};

export enum YumojiPartStatus {
  Available = "available",
  Unavailable = "unavailable",
}

export type YumojiRemoteFittingRoom = {
  __typename?: "YumojiRemoteFittingRoom";
  id: Scalars["ID"]["output"];
  popover?: Maybe<YumojiRemoteFittingRoomPopover>;
  selectedYuWorld: YuWorld;
  yuWorlds: Array<YumojiRemoteFittingRoomYuWorld>;
};

export type YumojiRemoteFittingRoomPart = {
  __typename?: "YumojiRemoteFittingRoomPart";
  hidesPartTypes: Array<AvatarPartType>;
  id: Scalars["ID"]["output"];
  partType: AvatarPartType;
  remoteUrl: RemoteImage;
};

export type YumojiRemoteFittingRoomPopover = {
  __typename?: "YumojiRemoteFittingRoomPopover";
  id: MobileOnboardingStepPerformed;
  message: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type YumojiRemoteFittingRoomYuWorld = {
  __typename?: "YumojiRemoteFittingRoomYuWorld";
  id: YuWorld;
  mainColor: Scalars["String"]["output"];
  secondaryColor: Scalars["String"]["output"];
  textColor: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
  yumojiParts: Array<YumojiRemoteFittingRoomPart>;
};

export type YumojiRemotePart = {
  __typename?: "YumojiRemotePart";
  hidesPartTypes: Array<AvatarPartType>;
  id: Scalars["ID"]["output"];
  remoteUrl: RemoteImage;
};

export type YumojiRemoteParts = {
  __typename?: "YumojiRemoteParts";
  body: YumojiRemotePart;
  boots: YumojiRemotePart;
  chest: YumojiRemotePart;
  eyes: YumojiRemotePart;
  facialHair?: Maybe<YumojiRemotePart>;
  glasses?: Maybe<YumojiRemotePart>;
  gloves?: Maybe<YumojiRemotePart>;
  hair?: Maybe<YumojiRemotePart>;
  head: YumojiRemotePart;
  headwear: YumojiRemotePart;
  id: Scalars["ID"]["output"];
  pants: YumojiRemotePart;
  shadow: YumojiRemotePart;
};

export type UpdateUserAvatarResponse = {
  __typename?: "updateUserAvatarResponse";
  avatarRemoteFiles?: Maybe<AvatarRemoteFiles>;
  rewardAmount?: Maybe<Scalars["Int"]["output"]>;
  rewarded?: Maybe<Scalars["Boolean"]["output"]>;
  updated?: Maybe<Scalars["Boolean"]["output"]>;
};

export type GetAdBannersQueryVariables = Exact<{
  place?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetAdBannersQuery = {
  __typename?: "Query";
  getAdBanners?: Array<{
    __typename?: "AdBanner";
    id: string;
    navigateTo: string;
    startDate: string;
    endDate?: string | null;
    height?: number | null;
    width?: number | null;
    imageUrl: { __typename?: "RemoteImage"; uri?: string | null };
  } | null> | null;
};

export type GetMobileAssetsWithVersionQueryVariables = Exact<{ [key: string]: never }>;

export type GetMobileAssetsWithVersionQuery = {
  __typename?: "Query";
  getMobileAssetsWithVersion: {
    __typename?: "MobileAssets";
    version: string;
    assets: Array<{ __typename?: "RemoteImage"; uri?: string | null }>;
  };
};

export type GetSudokuBoardQueryVariables = Exact<{
  date?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetSudokuBoardQuery = {
  __typename?: "Query";
  getSudokuBoard?: {
    __typename?: "SudokuBoardResponse";
    date: string;
    leaderboardEligible: boolean;
    boards: Array<{
      __typename?: "SudokuBoard";
      difficulty: SudokuDifficulty;
      solution: Array<Array<number> | null>;
      puzzle: Array<Array<number> | null>;
      config: {
        __typename?: "SudokuConfig";
        PENALTY_HINT: number;
        MISTAKES_BEFORE_PENALTY: number;
        MISTAKE_PENALTY_TIME: number;
        HINT_COOLDOWN: number;
      };
    }>;
    stats?: { __typename?: "SudokuStats"; personalBest?: number | null; leaderboardId?: string | null } | null;
    results?: {
      __typename?: "SudokuResults";
      mistakes: number;
      hints: number;
      leaderboardId?: string | null;
      adjustedTime: number;
      difficulty: SudokuDifficulty;
    } | null;
  } | null;
};

export type GetSudokuPracticeQueryVariables = Exact<{ [key: string]: never }>;

export type GetSudokuPracticeQuery = {
  __typename?: "Query";
  getSudokuPractice: {
    __typename?: "SudokuBoard";
    solution: Array<Array<number> | null>;
    puzzle: Array<Array<number> | null>;
    difficulty: SudokuDifficulty;
    config: {
      __typename?: "SudokuConfig";
      PENALTY_HINT: number;
      MISTAKES_BEFORE_PENALTY: number;
      MISTAKE_PENALTY_TIME: number;
      HINT_COOLDOWN: number;
    };
  };
};

export type GetSudokuStatsQueryVariables = Exact<{ [key: string]: never }>;

export type GetSudokuStatsQuery = {
  __typename?: "Query";
  getSudokuStats?: { __typename?: "SudokuStats"; leaderboardId?: string | null } | null;
};

export type SubmitSudokuSolutionMutationVariables = Exact<{
  results: SudokuSubmission;
}>;

export type SubmitSudokuSolutionMutation = {
  __typename?: "Mutation";
  submitSudokuSolution?: {
    __typename?: "Challenge";
    level?: number | null;
    levelSlotId?: string | null;
    startDateTime?: string | null;
    status?: string | null;
    endDateTime?: string | null;
    yuCoinAwarded?: number | null;
    rating?: number | null;
    incomingData?: {
      __typename?: "MilestoneTarget";
      steps?: number | null;
      meditation?: number | null;
      distance?: number | null;
      duration?: number | null;
      calories?: number | null;
    } | null;
    milestoneLog?: Array<{
      __typename?: "MilestoneLogEntry";
      data?: {
        __typename?: "MilestoneTarget";
        steps?: number | null;
        meditation?: number | null;
        distance?: number | null;
        duration?: number | null;
        calories?: number | null;
      } | null;
    } | null> | null;
  } | null;
};

export type GetPublicYuApiConfigQueryVariables = Exact<{ [key: string]: never }>;

export type GetPublicYuApiConfigQuery = {
  __typename?: "Query";
  config: {
    __typename?: "APIConfig";
    language: string;
    stripeKey: string;
    mixpanelKey: string;
    urls: {
      __typename?: "APIConfigUrls";
      members: string;
      website: string;
      privacyPolicy: string;
      rewardsPolicy: string;
    };
    intercom: { __typename?: "APIConfigIntercom"; appId: string; ios: string; android: string };
    leanplum: { __typename?: "APIConfigLeanplum"; appId: string; prodKey: string; devKey?: string | null };
    sduiStaticDeeplinks: Array<{
      __typename?: "APIConfigSDUIStaticDeepLink";
      name: string;
      stepId: string;
      dynamicRouteId?: string | null;
    }>;
  };
};

export type DeleteConnectionMutationVariables = Exact<{
  name: Scalars["String"]["input"];
}>;

export type DeleteConnectionMutation = { __typename?: "Mutation"; deleteConnection?: boolean | null };

export type GetConnectionsQueryVariables = Exact<{ [key: string]: never }>;

export type GetConnectionsQuery = {
  __typename?: "Query";
  getCurrentUser?: {
    __typename: "User";
    id?: string | null;
    connections?: Array<{
      __typename?: "Connection";
      name?: string | null;
      isConnected?: boolean | null;
      lastUpdated?: number | null;
    } | null> | null;
  } | null;
};

export type GetNewConnectionLinkMutationVariables = Exact<{
  name: Scalars["String"]["input"];
}>;

export type GetNewConnectionLinkMutation = { __typename?: "Mutation"; getNewConnectionLink?: string | null };

export type GetDailyScreenCustomIconQueryVariables = Exact<{ [key: string]: never }>;

export type GetDailyScreenCustomIconQuery = {
  __typename?: "Query";
  getDailyScreenCustomIcon?: {
    __typename?: "DailyScreenCustomIcon";
    name: string;
    position: string;
    y: number;
    x: number;
    image: {
      __typename?: "DailyScreenCustomIconImage";
      width: number;
      height: number;
      source: { __typename?: "RemoteImage"; uri?: string | null };
    };
    text: {
      __typename?: "DailyScreenCustomIconText";
      x: number;
      y: number;
      type: string;
      value: string;
      colour: string;
    };
    onPress: { __typename?: "SduiAction"; payload?: string | null; type: SduiActionType };
  } | null;
};

export type AddDeviceTokenMutationVariables = Exact<{
  deviceToken: Scalars["String"]["input"];
  os: Os;
  deviceId: Scalars["String"]["input"];
  subscribed: Scalars["Boolean"]["input"];
}>;

export type AddDeviceTokenMutation = {
  __typename?: "Mutation";
  addDeviceToken?: {
    __typename?: "DeviceResponse";
    userId?: string | null;
    deviceToken?: string | null;
    deviceId?: string | null;
    subscribed?: boolean | null;
    os?: Os | null;
  } | null;
};

export type GetUserNotificationsSettingsQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserNotificationsSettingsQuery = {
  __typename?: "Query";
  getUserNotificationsSettings?: Array<{
    __typename?: "NotificationSettingsProps";
    id: string;
    type: UserNotificationsType;
    name: string;
    isActive: boolean;
    isAvailable: boolean;
    alertTimestamp?: string | null;
    order: number;
    description?: string | null;
  } | null> | null;
};

export type UpdateUserNotificationsSettingsMutationVariables = Exact<{
  type: UserNotificationsType;
  isActive: Scalars["Boolean"]["input"];
  time?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type UpdateUserNotificationsSettingsMutation = {
  __typename?: "Mutation";
  updateUserNotificationsSettings?: boolean | null;
};

export const GetAdBannersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetAdBanners" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "place" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getAdBanners" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "place" },
                value: { kind: "Variable", name: { kind: "Name", value: "place" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "imageUrl" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "Field", name: { kind: "Name", value: "uri" } }],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "navigateTo" } },
                { kind: "Field", name: { kind: "Name", value: "startDate" } },
                { kind: "Field", name: { kind: "Name", value: "endDate" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAdBannersQuery, GetAdBannersQueryVariables>;
export const GetMobileAssetsWithVersionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetMobileAssetsWithVersion" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getMobileAssetsWithVersion" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "assets" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [{ kind: "Field", name: { kind: "Name", value: "uri" } }],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "version" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetMobileAssetsWithVersionQuery, GetMobileAssetsWithVersionQueryVariables>;
export const GetSudokuBoardDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetSudokuBoard" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "date" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getSudokuBoard" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "date" },
                value: { kind: "Variable", name: { kind: "Name", value: "date" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "boards" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "difficulty" } },
                      { kind: "Field", name: { kind: "Name", value: "solution" } },
                      { kind: "Field", name: { kind: "Name", value: "puzzle" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "config" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "PENALTY_HINT" } },
                            { kind: "Field", name: { kind: "Name", value: "MISTAKES_BEFORE_PENALTY" } },
                            { kind: "Field", name: { kind: "Name", value: "MISTAKE_PENALTY_TIME" } },
                            { kind: "Field", name: { kind: "Name", value: "HINT_COOLDOWN" } },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "date" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "stats" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "personalBest" } },
                      { kind: "Field", name: { kind: "Name", value: "leaderboardId" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "results" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "mistakes" } },
                      { kind: "Field", name: { kind: "Name", value: "hints" } },
                      { kind: "Field", name: { kind: "Name", value: "leaderboardId" } },
                      { kind: "Field", name: { kind: "Name", value: "adjustedTime" } },
                      { kind: "Field", name: { kind: "Name", value: "difficulty" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "leaderboardEligible" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSudokuBoardQuery, GetSudokuBoardQueryVariables>;
export const GetSudokuPracticeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetSudokuPractice" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getSudokuPractice" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "solution" } },
                { kind: "Field", name: { kind: "Name", value: "puzzle" } },
                { kind: "Field", name: { kind: "Name", value: "difficulty" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "config" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "PENALTY_HINT" } },
                      { kind: "Field", name: { kind: "Name", value: "MISTAKES_BEFORE_PENALTY" } },
                      { kind: "Field", name: { kind: "Name", value: "MISTAKE_PENALTY_TIME" } },
                      { kind: "Field", name: { kind: "Name", value: "HINT_COOLDOWN" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSudokuPracticeQuery, GetSudokuPracticeQueryVariables>;
export const GetSudokuStatsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetSudokuStats" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getSudokuStats" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "leaderboardId" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetSudokuStatsQuery, GetSudokuStatsQueryVariables>;
export const SubmitSudokuSolutionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "SubmitSudokuSolution" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "results" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "SudokuSubmission" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "submitSudokuSolution" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "results" },
                value: { kind: "Variable", name: { kind: "Name", value: "results" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "level" } },
                { kind: "Field", name: { kind: "Name", value: "levelSlotId" } },
                { kind: "Field", name: { kind: "Name", value: "startDateTime" } },
                { kind: "Field", name: { kind: "Name", value: "status" } },
                { kind: "Field", name: { kind: "Name", value: "endDateTime" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "incomingData" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "steps" } },
                      { kind: "Field", name: { kind: "Name", value: "meditation" } },
                      { kind: "Field", name: { kind: "Name", value: "distance" } },
                      { kind: "Field", name: { kind: "Name", value: "duration" } },
                      { kind: "Field", name: { kind: "Name", value: "calories" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "milestoneLog" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "data" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "steps" } },
                            { kind: "Field", name: { kind: "Name", value: "meditation" } },
                            { kind: "Field", name: { kind: "Name", value: "distance" } },
                            { kind: "Field", name: { kind: "Name", value: "duration" } },
                            { kind: "Field", name: { kind: "Name", value: "calories" } },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "yuCoinAwarded" } },
                { kind: "Field", name: { kind: "Name", value: "rating" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SubmitSudokuSolutionMutation, SubmitSudokuSolutionMutationVariables>;
export const GetPublicYuApiConfigDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetPublicYuAPIConfig" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: { kind: "Name", value: "config" },
            name: { kind: "Name", value: "getPublicYuAPIConfig" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "language" } },
                { kind: "Field", name: { kind: "Name", value: "stripeKey" } },
                { kind: "Field", name: { kind: "Name", value: "mixpanelKey" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "urls" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "members" } },
                      { kind: "Field", name: { kind: "Name", value: "website" } },
                      { kind: "Field", name: { kind: "Name", value: "privacyPolicy" } },
                      { kind: "Field", name: { kind: "Name", value: "rewardsPolicy" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "intercom" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "appId" } },
                      { kind: "Field", name: { kind: "Name", value: "ios" } },
                      { kind: "Field", name: { kind: "Name", value: "android" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "leanplum" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "appId" } },
                      { kind: "Field", name: { kind: "Name", value: "prodKey" } },
                      { kind: "Field", name: { kind: "Name", value: "devKey" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "sduiStaticDeeplinks" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "stepId" } },
                      { kind: "Field", name: { kind: "Name", value: "dynamicRouteId" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPublicYuApiConfigQuery, GetPublicYuApiConfigQueryVariables>;
export const DeleteConnectionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DeleteConnection" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteConnection" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "name" },
                value: { kind: "Variable", name: { kind: "Name", value: "name" } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeleteConnectionMutation, DeleteConnectionMutationVariables>;
export const GetConnectionsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetConnections" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getCurrentUser" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "connections" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "isConnected" } },
                      { kind: "Field", name: { kind: "Name", value: "lastUpdated" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetConnectionsQuery, GetConnectionsQueryVariables>;
export const GetNewConnectionLinkDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "GetNewConnectionLink" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "name" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getNewConnectionLink" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "name" },
                value: { kind: "Variable", name: { kind: "Name", value: "name" } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetNewConnectionLinkMutation, GetNewConnectionLinkMutationVariables>;
export const GetDailyScreenCustomIconDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetDailyScreenCustomIcon" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getDailyScreenCustomIcon" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "position" } },
                { kind: "Field", name: { kind: "Name", value: "y" } },
                { kind: "Field", name: { kind: "Name", value: "x" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "image" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "width" } },
                      { kind: "Field", name: { kind: "Name", value: "height" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "source" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "uri" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "options" },
                                  value: {
                                    kind: "ObjectValue",
                                    fields: [
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "width" },
                                        value: { kind: "IntValue", value: "116" },
                                      },
                                      {
                                        kind: "ObjectField",
                                        name: { kind: "Name", value: "height" },
                                        value: { kind: "IntValue", value: "112" },
                                      },
                                    ],
                                  },
                                },
                              ],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "text" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "x" } },
                      { kind: "Field", name: { kind: "Name", value: "y" } },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                      { kind: "Field", name: { kind: "Name", value: "value" } },
                      { kind: "Field", name: { kind: "Name", value: "colour" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "onPress" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "payload" } },
                      { kind: "Field", name: { kind: "Name", value: "type" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetDailyScreenCustomIconQuery, GetDailyScreenCustomIconQueryVariables>;
export const AddDeviceTokenDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "AddDeviceToken" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "deviceToken" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "os" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "OS" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "deviceId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "subscribed" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "addDeviceToken" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "deviceToken" },
                value: { kind: "Variable", name: { kind: "Name", value: "deviceToken" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "os" },
                value: { kind: "Variable", name: { kind: "Name", value: "os" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "deviceId" },
                value: { kind: "Variable", name: { kind: "Name", value: "deviceId" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "subscribed" },
                value: { kind: "Variable", name: { kind: "Name", value: "subscribed" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "userId" } },
                { kind: "Field", name: { kind: "Name", value: "deviceToken" } },
                { kind: "Field", name: { kind: "Name", value: "deviceId" } },
                { kind: "Field", name: { kind: "Name", value: "subscribed" } },
                { kind: "Field", name: { kind: "Name", value: "os" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddDeviceTokenMutation, AddDeviceTokenMutationVariables>;
export const GetUserNotificationsSettingsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetUserNotificationsSettings" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getUserNotificationsSettings" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                { kind: "Field", name: { kind: "Name", value: "isAvailable" } },
                { kind: "Field", name: { kind: "Name", value: "alertTimestamp" } },
                { kind: "Field", name: { kind: "Name", value: "order" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUserNotificationsSettingsQuery, GetUserNotificationsSettingsQueryVariables>;
export const UpdateUserNotificationsSettingsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateUserNotificationsSettings" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "type" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "UserNotificationsType" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "isActive" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "time" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateUserNotificationsSettings" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "type" },
                value: { kind: "Variable", name: { kind: "Name", value: "type" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "isActive" },
                value: { kind: "Variable", name: { kind: "Name", value: "isActive" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "time" },
                value: { kind: "Variable", name: { kind: "Name", value: "time" } },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateUserNotificationsSettingsMutation, UpdateUserNotificationsSettingsMutationVariables>;
