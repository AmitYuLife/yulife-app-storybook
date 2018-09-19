

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateActiveChallenge
// ====================================================

export interface CreateActiveChallenge_createActiveChallenge_challenge {
  levelSlotId: string | null;
  status: string | null;
  startDateTime: string | null;
  endDateTime: string | null;
}

export interface CreateActiveChallenge_createActiveChallenge_levelSlot_milestones_target {
  steps: number | null;
  meditation: number | null;
}

export interface CreateActiveChallenge_createActiveChallenge_levelSlot_milestones {
  id: string | null;
  XP: number | null;
  coins: number | null;
  target: CreateActiveChallenge_createActiveChallenge_levelSlot_milestones_target | null;
}

export interface CreateActiveChallenge_createActiveChallenge_levelSlot {
  subtype: string | null;
  unit: string | null;
  milestones: (CreateActiveChallenge_createActiveChallenge_levelSlot_milestones | null)[] | null;
}

export interface CreateActiveChallenge_createActiveChallenge {
  challenge: CreateActiveChallenge_createActiveChallenge_challenge | null;
  levelSlot: CreateActiveChallenge_createActiveChallenge_levelSlot | null;
  nextLevelAvailableAt: string | null;
}

export interface CreateActiveChallenge {
  createActiveChallenge: CreateActiveChallenge_createActiveChallenge | null;
}

export interface CreateActiveChallengeVariables {
  levelSlotId: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCurrentWorld
// ====================================================

export interface GetCurrentWorld_getCurrentWorld_slots_milestones_target {
  __typename: "MilestoneTarget";
  steps: number | null;
  meditation: number | null;
}

export interface GetCurrentWorld_getCurrentWorld_slots_milestones {
  id: string | null;
  __typename: "LevelSlotMilestone";
  XP: number | null;
  coins: number | null;
  target: GetCurrentWorld_getCurrentWorld_slots_milestones_target | null;
}

export interface GetCurrentWorld_getCurrentWorld_slots {
  id: string | null;
  __typename: "LevelSlot";
  availableAtLevel: number | null;
  timeLimit: number | null;
  passive: boolean | null;
  type: string | null;
  subtype: string | null;
  unit: string | null;
  milestones: (GetCurrentWorld_getCurrentWorld_slots_milestones | null)[] | null;
}

export interface GetCurrentWorld_getCurrentWorld {
  id: string | null;
  __typename: "Level";
  level: number | null;
  name: string | null;
  rating: number | null;
  slots: (GetCurrentWorld_getCurrentWorld_slots | null)[] | null;
}

export interface GetCurrentWorld {
  getCurrentWorld: (GetCurrentWorld_getCurrentWorld | null)[] | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateActiveChallenge
// ====================================================

export interface UpdateActiveChallenge_updateActiveChallenge_challenge_incomingData {
  steps: number | null;
  meditation: number | null;
}

export interface UpdateActiveChallenge_updateActiveChallenge_challenge_milestoneLog_data {
  steps: number | null;
  meditation: number | null;
}

export interface UpdateActiveChallenge_updateActiveChallenge_challenge_milestoneLog {
  data: UpdateActiveChallenge_updateActiveChallenge_challenge_milestoneLog_data | null;
}

export interface UpdateActiveChallenge_updateActiveChallenge_challenge {
  levelSlotId: string | null;
  status: string | null;
  endDateTime: string | null;
  incomingData: UpdateActiveChallenge_updateActiveChallenge_challenge_incomingData | null;
  milestoneLog: (UpdateActiveChallenge_updateActiveChallenge_challenge_milestoneLog | null)[] | null;
  yuCoinAwarded: number | null;
  rating: number | null;
}

export interface UpdateActiveChallenge_updateActiveChallenge_levelSlot_milestones_target {
  steps: number | null;
  meditation: number | null;
}

export interface UpdateActiveChallenge_updateActiveChallenge_levelSlot_milestones {
  id: string | null;
  XP: number | null;
  coins: number | null;
  target: UpdateActiveChallenge_updateActiveChallenge_levelSlot_milestones_target | null;
}

export interface UpdateActiveChallenge_updateActiveChallenge_levelSlot {
  subtype: string | null;
  unit: string | null;
  milestones: (UpdateActiveChallenge_updateActiveChallenge_levelSlot_milestones | null)[] | null;
}

export interface UpdateActiveChallenge_updateActiveChallenge {
  challenge: UpdateActiveChallenge_updateActiveChallenge_challenge | null;
  levelSlot: UpdateActiveChallenge_updateActiveChallenge_levelSlot | null;
  nextLevelAvailableAt: string | null;
}

export interface UpdateActiveChallenge {
  updateActiveChallenge: UpdateActiveChallenge_updateActiveChallenge | null;
}

export interface UpdateActiveChallengeVariables {
  levelSlotId: string;
  payload?: ChallengePayload | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpsertOnboardingChallenge
// ====================================================

export interface UpsertOnboardingChallenge_upsertPassiveChallenge_challenge {
  yuCoinAwarded: number | null;
}

export interface UpsertOnboardingChallenge_upsertPassiveChallenge {
  challenge: UpsertOnboardingChallenge_upsertPassiveChallenge_challenge | null;
}

export interface UpsertOnboardingChallenge {
  upsertPassiveChallenge: UpsertOnboardingChallenge_upsertPassiveChallenge | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpsertPassiveChallenge
// ====================================================

export interface UpsertPassiveChallenge_upsertPassiveChallenge_challenge_incomingData {
  steps: number | null;
}

export interface UpsertPassiveChallenge_upsertPassiveChallenge_challenge {
  updatedAt: number | null;
  yuCoinAwarded: number | null;
  incomingData: UpsertPassiveChallenge_upsertPassiveChallenge_challenge_incomingData | null;
}

export interface UpsertPassiveChallenge_upsertPassiveChallenge {
  challenge: UpsertPassiveChallenge_upsertPassiveChallenge_challenge | null;
  totalCoins: number | null;
}

export interface UpsertPassiveChallenge {
  upsertPassiveChallenge: UpsertPassiveChallenge_upsertPassiveChallenge | null;
}

export interface UpsertPassiveChallengeVariables {
  payload?: (ChallengePayload | null)[] | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddDailySteps
// ====================================================

export interface AddDailySteps_challengeAction_completedActiveChallenges_milestoneLog {
  id: string | null;
  completed: number | null;
  completionData: (number | null)[] | null;
  description: string | null;
}

export interface AddDailySteps_challengeAction_completedActiveChallenges {
  id: string | null;
  actions: (string | null)[] | null;
  challengeTemplateId: string | null;
  currentData: number | null;
  currentTarget: number | null;
  customerId: string | null;
  data: (number | null)[] | null;
  endTime: number | null;
  milestoneLog: (AddDailySteps_challengeAction_completedActiveChallenges_milestoneLog | null)[] | null;
  startTime: number | null;
  status: string | null;
  target: (number | null)[] | null;
  updatedAt: number | null;
  XPAwarded: number | null;
  yuCoinAwarded: number | null;
  __typename: "Challenge";
}

export interface AddDailySteps_challengeAction_currentPassiveChallenge_milestoneLog {
  id: string | null;
  completed: number | null;
  completionData: (number | null)[] | null;
  description: string | null;
}

export interface AddDailySteps_challengeAction_currentPassiveChallenge {
  id: string | null;
  actions: (string | null)[] | null;
  challengeTemplateId: string | null;
  currentData: number | null;
  currentTarget: number | null;
  customerId: string | null;
  data: (number | null)[] | null;
  endTime: number | null;
  milestoneLog: (AddDailySteps_challengeAction_currentPassiveChallenge_milestoneLog | null)[] | null;
  startTime: number | null;
  status: string | null;
  target: (number | null)[] | null;
  updatedAt: number | null;
  XPAwarded: number | null;
  yuCoinAwarded: number | null;
  __typename: "Challenge";
}

export interface AddDailySteps_challengeAction_userStatus {
  totalCoins: number | null;
}

export interface AddDailySteps_challengeAction {
  completedActiveChallenges: (AddDailySteps_challengeAction_completedActiveChallenges | null)[] | null;
  currentPassiveChallenge: AddDailySteps_challengeAction_currentPassiveChallenge | null;
  timestamp: number | null;
  userStatus: AddDailySteps_challengeAction_userStatus | null;
}

export interface AddDailySteps {
  challengeAction: AddDailySteps_challengeAction | null;
}

export interface AddDailyStepsVariables {
  payload?: (ActionPayload | null)[] | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ChallengesList
// ====================================================

export interface ChallengesList_getChallenges_milestones {
  target: (number | null)[] | null;
  coins: number | null;
}

export interface ChallengesList_getChallenges {
  id: string | null;
  subtype: string | null;
  level: number | null;
  target: (number | null)[] | null;
  totalCoins: number | null;
  timelimit: number | null;
  unit: string | null;
  milestones: (ChallengesList_getChallenges_milestones | null)[] | null;
  __typename: "ChallengeTemplate";
}

export interface ChallengesList {
  getChallenges: (ChallengesList_getChallenges | null)[] | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateMemberConsent
// ====================================================

export interface UpdateMemberConsent_upsertMobileConsent {
  mobileHealth: boolean | null;
  marketing: boolean | null;
  pushNotifications: boolean | null;
  companyLeaderboard: boolean | null;
  workspaceLeaderboard: boolean | null;
}

export interface UpdateMemberConsent {
  upsertMobileConsent: UpdateMemberConsent_upsertMobileConsent | null;
}

export interface UpdateMemberConsentVariables {
  consent?: MobileConsentInput | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllPurchases
// ====================================================

export interface GetAllPurchases_getAllPurchases_metadata_avios {
  __typename: "Avios";
  firstName: string | null;
  lastName: string | null;
  loyaltyProgramme: string | null;
  accountNumber: string | null;
}

export interface GetAllPurchases_getAllPurchases_metadata {
  __typename: "Metadata";
  avios: GetAllPurchases_getAllPurchases_metadata_avios | null;
}

export interface GetAllPurchases_getAllPurchases_reward_redeem_steps {
  __typename: "RedeemSteps";
  info: string | null;
  steps: (string | null)[] | null;
}

export interface GetAllPurchases_getAllPurchases_reward {
  __typename: "Reward";
  name: string | null;
  description: string | null;
  card_image_url: string | null;
  terms_and_conditions_url: string | null;
  loyalty_programme: (string | null)[] | null;
  redeem_steps: GetAllPurchases_getAllPurchases_reward_redeem_steps | null;
}

export interface GetAllPurchases_getAllPurchases {
  __typename: "Purchase";
  id: string | null;
  userId: string | null;
  rewardProviderId: string | null;
  amount: number | null;
  code: string | null;
  pin: string | null;
  currency_code: string | null;
  expiry_date: string | null;
  name: string | null;
  updatedAt: string | null;
  createdAt: string | null;
  yuCoinsSpent: number | null;
  delivery_url: string | null;
  status: string | null;
  metadata: GetAllPurchases_getAllPurchases_metadata | null;
  reward: GetAllPurchases_getAllPurchases_reward | null;
}

export interface GetAllPurchases {
  getAllPurchases: (GetAllPurchases_getAllPurchases | null)[] | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetRewards
// ====================================================

export interface GetRewards_getRewards_available_denominations {
  __typename: "Denomination";
  yuCoin: number | null;
  value: number | null;
  stock: number | null;
}

export interface GetRewards_getRewards_redeem_steps {
  __typename: "RedeemSteps";
  info: string | null;
  steps: (string | null)[] | null;
}

export interface GetRewards_getRewards_uiSettings {
  __typename: "RewardUiSettings";
  logoWidth: number | null;
  logoHeight: number | null;
}

export interface GetRewards_getRewards {
  __typename: "Reward";
  id: string | null;
  reward_sticker: string | null;
  loyalty_programme: (string | null)[] | null;
  rewardProviderId: string | null;
  availability: string | null;
  progression_level: string | null;
  available_denominations: (GetRewards_getRewards_available_denominations | null)[] | null;
  card_image_url: string | null;
  code: string | null;
  currency_code: string | null;
  denomination_type: string | null;
  description: string | null;
  e_code_usage_type: string | null;
  expiry_date_policy: string | null;
  maximum_value: number | null;
  minimum_value: number | null;
  name: string | null;
  redeem_steps: GetRewards_getRewards_redeem_steps | null;
  terms_and_conditions_url: string | null;
  uiSettings: GetRewards_getRewards_uiSettings | null;
}

export interface GetRewards {
  getRewards: (GetRewards_getRewards | null)[] | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RedeemReward
// ====================================================

export interface RedeemReward_redeemReward_metadata_avios {
  __typename: "Avios";
  firstName: string | null;
  lastName: string | null;
  loyaltyProgramme: string | null;
  accountNumber: string | null;
}

export interface RedeemReward_redeemReward_metadata {
  __typename: "Metadata";
  avios: RedeemReward_redeemReward_metadata_avios | null;
}

export interface RedeemReward_redeemReward_reward_redeem_steps {
  __typename: "RedeemSteps";
  info: string | null;
  steps: (string | null)[] | null;
}

export interface RedeemReward_redeemReward_reward {
  __typename: "Reward";
  name: string | null;
  description: string | null;
  card_image_url: string | null;
  terms_and_conditions_url: string | null;
  loyalty_programme: (string | null)[] | null;
  redeem_steps: RedeemReward_redeemReward_reward_redeem_steps | null;
}

export interface RedeemReward_redeemReward {
  id: string | null;
  userId: string | null;
  rewardProviderId: string | null;
  amount: number | null;
  code: string | null;
  currency_code: string | null;
  pin: string | null;
  expiry_date: string | null;
  name: string | null;
  yuCoinsSpent: number | null;
  updatedAt: string | null;
  createdAt: string | null;
  metadata: RedeemReward_redeemReward_metadata | null;
  reward: RedeemReward_redeemReward_reward | null;
}

export interface RedeemReward {
  redeemReward: RedeemReward_redeemReward | null;
}

export interface RedeemRewardVariables {
  id: string;
  amount: number;
  metadata?: ProductMetadata | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetActivityHistory
// ====================================================

export interface GetActivityHistory_data_passive {
  id: string | null;
  data: (number | null)[] | null;
  yuCoinAwarded: number | null;
}

export interface GetActivityHistory_data_challenge_milestoneLog {
  id: string | null;
}

export interface GetActivityHistory_data_challenge_challengeTemplate {
  id: string | null;
  subtype: string | null;
}

export interface GetActivityHistory_data_challenge {
  id: string | null;
  actions: (string | null)[] | null;
  data: (number | null)[] | null;
  yuCoinAwarded: number | null;
  milestoneLog: (GetActivityHistory_data_challenge_milestoneLog | null)[] | null;
  challengeTemplate: GetActivityHistory_data_challenge_challengeTemplate | null;
}

export interface GetActivityHistory_data {
  id: string | null;
  date: string | null;
  passive: GetActivityHistory_data_passive | null;
  challenge: GetActivityHistory_data_challenge | null;
}

export interface GetActivityHistory {
  data: (GetActivityHistory_data | null)[] | null;
}

export interface GetActivityHistoryVariables {
  monthsAgo?: number | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCurrentUser
// ====================================================

export interface GetCurrentUser_getCurrentUser_userFeatures {
  name: string | null;
  value: boolean | null;
}

export interface GetCurrentUser_getCurrentUser_mobileConsent {
  mobileHealth: boolean | null;
  marketing: boolean | null;
  pushNotifications: boolean | null;
  companyLeaderboard: boolean | null;
  workspaceLeaderboard: boolean | null;
}

export interface GetCurrentUser_getCurrentUser_coinLedger {
  currentBalance: number | null;
  currentLevel: number | null;
  nextLevelAvailableAt: string | null;
}

export interface GetCurrentUser_getCurrentUser_activeChallenge_challenge {
  levelSlotId: string | null;
  status: string | null;
  endDateTime: string | null;
  startDateTime: string | null;
}

export interface GetCurrentUser_getCurrentUser_activeChallenge_levelSlot_milestones_target {
  steps: number | null;
  meditation: number | null;
}

export interface GetCurrentUser_getCurrentUser_activeChallenge_levelSlot_milestones {
  id: string | null;
  XP: number | null;
  coins: number | null;
  target: GetCurrentUser_getCurrentUser_activeChallenge_levelSlot_milestones_target | null;
}

export interface GetCurrentUser_getCurrentUser_activeChallenge_levelSlot {
  subtype: string | null;
  unit: string | null;
  milestones: (GetCurrentUser_getCurrentUser_activeChallenge_levelSlot_milestones | null)[] | null;
}

export interface GetCurrentUser_getCurrentUser_activeChallenge {
  challenge: GetCurrentUser_getCurrentUser_activeChallenge_challenge | null;
  levelSlot: GetCurrentUser_getCurrentUser_activeChallenge_levelSlot | null;
}

export interface GetCurrentUser_getCurrentUser {
  __typename: "User";
  userFeatures: (GetCurrentUser_getCurrentUser_userFeatures | null)[] | null;
  mobileConsent: GetCurrentUser_getCurrentUser_mobileConsent | null;
  coinLedger: GetCurrentUser_getCurrentUser_coinLedger | null;
  activeChallenge: GetCurrentUser_getCurrentUser_activeChallenge | null;
}

export interface GetCurrentUser {
  getCurrentUser: GetCurrentUser_getCurrentUser | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginUser
// ====================================================

export interface LoginUser_loginUser_user_userStatus_challenges_passive_milestoneLog {
  id: string | null;
  completed: number | null;
  completionData: (number | null)[] | null;
  description: string | null;
}

export interface LoginUser_loginUser_user_userStatus_challenges_passive_challengeTemplate_milestones {
  id: string | null;
  description: string | null;
  unit: string | null;
  target: (number | null)[] | null;
  coins: number | null;
  XP: number | null;
}

export interface LoginUser_loginUser_user_userStatus_challenges_passive_challengeTemplate {
  id: string | null;
  name: string | null;
  description: string | null;
  type: string | null;
  subtype: string | null;
  level: number | null;
  passive: boolean | null;
  actions: (string | null)[] | null;
  target: (number | null)[] | null;
  totalCoins: number | null;
  totalXP: number | null;
  timelimit: number | null;
  successTitle: string | null;
  successDescription: string | null;
  failureTitle: string | null;
  failureDescription: string | null;
  challengeCompleteText: string | null;
  unit: string | null;
  milestones: (LoginUser_loginUser_user_userStatus_challenges_passive_challengeTemplate_milestones | null)[] | null;
  __typename: "ChallengeTemplate";
}

export interface LoginUser_loginUser_user_userStatus_challenges_passive {
  id: string | null;
  actions: (string | null)[] | null;
  challengeTemplateId: string | null;
  currentData: number | null;
  currentTarget: number | null;
  customerId: string | null;
  data: (number | null)[] | null;
  endTime: number | null;
  milestoneLog: (LoginUser_loginUser_user_userStatus_challenges_passive_milestoneLog | null)[] | null;
  startTime: number | null;
  status: string | null;
  target: (number | null)[] | null;
  updatedAt: number | null;
  XPAwarded: number | null;
  yuCoinAwarded: number | null;
  __typename: "Challenge";
  challengeTemplate: LoginUser_loginUser_user_userStatus_challenges_passive_challengeTemplate | null;
}

export interface LoginUser_loginUser_user_userStatus_challenges_active_milestoneLog {
  id: string | null;
  completed: number | null;
  completionData: (number | null)[] | null;
  description: string | null;
}

export interface LoginUser_loginUser_user_userStatus_challenges_active_challengeTemplate_milestones {
  id: string | null;
  description: string | null;
  unit: string | null;
  target: (number | null)[] | null;
  coins: number | null;
  XP: number | null;
}

export interface LoginUser_loginUser_user_userStatus_challenges_active_challengeTemplate {
  id: string | null;
  name: string | null;
  description: string | null;
  type: string | null;
  subtype: string | null;
  level: number | null;
  passive: boolean | null;
  actions: (string | null)[] | null;
  target: (number | null)[] | null;
  totalCoins: number | null;
  totalXP: number | null;
  timelimit: number | null;
  successTitle: string | null;
  successDescription: string | null;
  failureTitle: string | null;
  failureDescription: string | null;
  challengeCompleteText: string | null;
  unit: string | null;
  milestones: (LoginUser_loginUser_user_userStatus_challenges_active_challengeTemplate_milestones | null)[] | null;
  __typename: "ChallengeTemplate";
}

export interface LoginUser_loginUser_user_userStatus_challenges_active {
  id: string | null;
  actions: (string | null)[] | null;
  challengeTemplateId: string | null;
  currentData: number | null;
  currentTarget: number | null;
  customerId: string | null;
  data: (number | null)[] | null;
  endTime: number | null;
  milestoneLog: (LoginUser_loginUser_user_userStatus_challenges_active_milestoneLog | null)[] | null;
  startTime: number | null;
  status: string | null;
  target: (number | null)[] | null;
  updatedAt: number | null;
  XPAwarded: number | null;
  yuCoinAwarded: number | null;
  __typename: "Challenge";
  challengeTemplate: LoginUser_loginUser_user_userStatus_challenges_active_challengeTemplate | null;
}

export interface LoginUser_loginUser_user_userStatus_challenges {
  passive: LoginUser_loginUser_user_userStatus_challenges_passive | null;
  nextActiveAvailable: number | null;
  active: LoginUser_loginUser_user_userStatus_challenges_active | null;
}

export interface LoginUser_loginUser_user_userStatus {
  totalCoins: number | null;
  challenges: LoginUser_loginUser_user_userStatus_challenges | null;
}

export interface LoginUser_loginUser_user_userFeatures {
  name: string | null;
  value: boolean | null;
}

export interface LoginUser_loginUser_user_mobileConsent {
  mobileHealth: boolean | null;
  marketing: boolean | null;
  pushNotifications: boolean | null;
  companyLeaderboard: boolean | null;
  workspaceLeaderboard: boolean | null;
}

export interface LoginUser_loginUser_user_coinLedger {
  currentBalance: number | null;
  currentLevel: number | null;
  nextLevelAvailableAt: string | null;
}

export interface LoginUser_loginUser_user {
  __typename: "User";
  id: string | null;
  businessAccountId: string | null;
  userStatus: LoginUser_loginUser_user_userStatus | null;
  userFeatures: (LoginUser_loginUser_user_userFeatures | null)[] | null;
  mobileConsent: LoginUser_loginUser_user_mobileConsent | null;
  redeemedOnboarding: boolean | null;
  coinLedger: LoginUser_loginUser_user_coinLedger | null;
}

export interface LoginUser_loginUser {
  token: string | null;
  expiresAt: number | null;
  message: string | null;
  user: LoginUser_loginUser_user | null;
}

export interface LoginUser {
  loginUser: LoginUser_loginUser | null;
}

export interface LoginUserVariables {
  email: string;
  password: string;
  method?: LoginMethod | null;
  tokenExpiration?: number | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SendMagicLink
// ====================================================

export interface SendMagicLink_sendMagicLink {
  exists: boolean | null;
  message: string | null;
  member: boolean | null;
}

export interface SendMagicLink {
  sendMagicLink: SendMagicLink_sendMagicLink | null;
}

export interface SendMagicLinkVariables {
  email: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Challenge
// ====================================================

export interface Challenge_milestoneLog {
  id: string | null;
  completed: number | null;
  completionData: (number | null)[] | null;
  description: string | null;
}

export interface Challenge {
  id: string | null;
  actions: (string | null)[] | null;
  challengeTemplateId: string | null;
  currentData: number | null;
  currentTarget: number | null;
  customerId: string | null;
  data: (number | null)[] | null;
  endTime: number | null;
  milestoneLog: (Challenge_milestoneLog | null)[] | null;
  startTime: number | null;
  status: string | null;
  target: (number | null)[] | null;
  updatedAt: number | null;
  XPAwarded: number | null;
  yuCoinAwarded: number | null;
  __typename: "Challenge";
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Milestone
// ====================================================

export interface Milestone {
  id: string | null;
  description: string | null;
  unit: string | null;
  target: (number | null)[] | null;
  coins: number | null;
  XP: number | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ChallengeTemplate
// ====================================================

export interface ChallengeTemplate_milestones {
  id: string | null;
  description: string | null;
  unit: string | null;
  target: (number | null)[] | null;
  coins: number | null;
  XP: number | null;
}

export interface ChallengeTemplate {
  id: string | null;
  name: string | null;
  description: string | null;
  type: string | null;
  subtype: string | null;
  level: number | null;
  passive: boolean | null;
  actions: (string | null)[] | null;
  target: (number | null)[] | null;
  totalCoins: number | null;
  totalXP: number | null;
  timelimit: number | null;
  successTitle: string | null;
  successDescription: string | null;
  failureTitle: string | null;
  failureDescription: string | null;
  challengeCompleteText: string | null;
  unit: string | null;
  milestones: (ChallengeTemplate_milestones | null)[] | null;
  __typename: "ChallengeTemplate";
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: User
// ====================================================

export interface User_userFeatures {
  name: string | null;
  value: boolean | null;
}

export interface User_userStatus_currentActiveChallenge {
  challengeId: string | null;
  challengeTemplateId: string | null;
}

export interface User_userStatus {
  currentActiveChallenge: User_userStatus_currentActiveChallenge | null;
  customerId: string | null;
  totalCoins: number | null;
  totalXP: number | null;
  level: number | null;
  __typename: "UserStatus";
}

export interface User {
  id: string | null;
  businessAccountId: string | null;
  membershipType: string | null;
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  dateOfBirth: string | null;
  smokerStatus: string | null;
  bmi: string | null;
  __typename: "User";
  userFeatures: (User_userFeatures | null)[] | null;
  userStatus: User_userStatus | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserStatus
// ====================================================

export interface UserStatus_currentActiveChallenge {
  challengeId: string | null;
  challengeTemplateId: string | null;
}

export interface UserStatus {
  currentActiveChallenge: UserStatus_currentActiveChallenge | null;
  customerId: string | null;
  totalCoins: number | null;
  totalXP: number | null;
  level: number | null;
  __typename: "UserStatus";
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum LoginMethod {
  FACEBOOK = "FACEBOOK",
  OTP = "OTP",
  PASSWORD = "PASSWORD",
}

// 
export interface ChallengePayload {
  startDateTime?: string | null;
  endDateTime?: string | null;
  value?: number | null;
}

// 
export interface ActionPayload {
  startTime?: number | null;
  endTime?: number | null;
  value?: number | null;
}

// 
export interface MobileConsentInput {
  mobileHealth?: boolean | null;
  marketing?: boolean | null;
  pushNotifications?: boolean | null;
  companyLeaderboard?: boolean | null;
  workspaceLeaderboard?: boolean | null;
}

// 
export interface ProductMetadata {
  avios?: AviosMetadata | null;
}

// 
export interface AviosMetadata {
  firstName: string;
  lastName: string;
  loyaltyProgramme: string;
  accountNumber: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================