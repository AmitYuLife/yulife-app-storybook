

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddHistoricalSteps
// ====================================================

export interface AddHistoricalSteps_addHistoricalSteps {
  endDateTime: string | null;
  startDateTime: string | null;
  yucoin: number | null;
}

export interface AddHistoricalSteps {
  addHistoricalSteps: AddHistoricalSteps_addHistoricalSteps | null;
}

export interface AddHistoricalStepsVariables {
  payload?: (ChallengePayload | null)[] | null;
  shouldAward?: boolean | null;
  refreshWearables?: boolean | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CancelActiveChallenge
// ====================================================

export interface CancelActiveChallenge_cancelActiveChallenge {
  levelSlotId: string | null;
  status: string | null;
}

export interface CancelActiveChallenge {
  cancelActiveChallenge: CancelActiveChallenge_cancelActiveChallenge | null;
}

export interface CancelActiveChallengeVariables {
  levelSlotId: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateActiveChallenge
// ====================================================

export interface CreateActiveChallenge_createActiveChallenge_challenge {
  level: number | null;
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

export interface CreateActiveChallenge_createActiveChallenge_chest {
  type: string | null;
  value: number | null;
}

export interface CreateActiveChallenge_createActiveChallenge {
  challenge: CreateActiveChallenge_createActiveChallenge_challenge | null;
  levelSlot: CreateActiveChallenge_createActiveChallenge_levelSlot | null;
  nextLevelAvailableAt: string | null;
  chest: CreateActiveChallenge_createActiveChallenge_chest | null;
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
// GraphQL query operation: GetCurrentLevel
// ====================================================

export interface GetCurrentLevel_getCurrentLevel_slots_milestones_target {
  __typename: "MilestoneTarget";
  steps: number | null;
  meditation: number | null;
}

export interface GetCurrentLevel_getCurrentLevel_slots_milestones {
  id: string | null;
  __typename: "LevelSlotMilestone";
  XP: number | null;
  coins: number | null;
  target: GetCurrentLevel_getCurrentLevel_slots_milestones_target | null;
}

export interface GetCurrentLevel_getCurrentLevel_slots {
  id: string | null;
  __typename: "LevelSlot";
  availableAtLevel: number | null;
  timeLimit: number | null;
  passive: boolean | null;
  type: string | null;
  subtype: string | null;
  unit: string | null;
  rating: number | null;
  yuCoinAwarded: number | null;
  milestones: (GetCurrentLevel_getCurrentLevel_slots_milestones | null)[] | null;
}

export interface GetCurrentLevel_getCurrentLevel {
  id: string | null;
  __typename: "Level";
  level: number | null;
  levelChestId: string | null;
  name: string | null;
  rating: number | null;
  slots: (GetCurrentLevel_getCurrentLevel_slots | null)[] | null;
}

export interface GetCurrentLevel {
  getCurrentLevel: GetCurrentLevel_getCurrentLevel | null;
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
  rating: number | null;
  yuCoinAwarded: number | null;
  milestones: (GetCurrentWorld_getCurrentWorld_slots_milestones | null)[] | null;
}

export interface GetCurrentWorld_getCurrentWorld {
  id: string | null;
  __typename: "Level";
  level: number | null;
  levelChestId: string | null;
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
// GraphQL mutation operation: SubmitUnity
// ====================================================

export interface SubmitUnity {
  submitUnity: boolean | null;
}

export interface SubmitUnityVariables {
  levelId: string;
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
  level: number | null;
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
// GraphQL mutation operation: DeleteConnection
// ====================================================

export interface DeleteConnection {
  deleteConnection: boolean | null;
}

export interface DeleteConnectionVariables {
  name: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: GetNewConnectionLink
// ====================================================

export interface GetNewConnectionLink {
  getNewConnectionLink: string | null;
}

export interface GetNewConnectionLinkVariables {
  name: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMobileCopy
// ====================================================

export interface GetMobileCopy_getMobileCopy_screens_login {
  heading: string | null;
  subheading: string | null;
  ctaLabel: string | null;
  ctaLabelSecondary: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_offline {
  heading: string | null;
  subheading: string | null;
  ctaLabel: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_noAccess {
  heading: string | null;
  subheading: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_resetPassword {
  heading: string | null;
  ctaLabel: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_needHelpLoggingIn {
  heading: string | null;
  subheading: string | null;
  ctaLabel: string | null;
  ctaLabelSecondary: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_emailSent {
  heading: string | null;
  subheading: string | null;
  ctaLabel: string | null;
  ctaLabelSecondary: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_signupReward {
  heading: string | null;
  subheading: string | null;
  ctaLabel: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_leaderboards_noLeaderBoard {
  heading: string | null;
  subheading: string | null;
  ctaLabel: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_leaderboards_turnBoardOn {
  heading: string | null;
  subheading: string | null;
  ctaLabel: string | null;
  ctaLabelSecondary: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_leaderboards_turnBoardOff {
  ctaLabel: string | null;
  ctaLabelSecondary: string | null;
  heading: string | null;
  subheading: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_leaderboards_invite {
  headingBeforeName: string | null;
  headingAfterName: string | null;
  subheadingBeforeName: string | null;
  subheadingAfterName: string | null;
  ctaLabel: string | null;
  ctaLabelSecondary: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_leaderboards {
  heading: string | null;
  subheading: string | null;
  noLeaderBoard: GetMobileCopy_getMobileCopy_screens_leaderboards_noLeaderBoard | null;
  turnBoardOn: GetMobileCopy_getMobileCopy_screens_leaderboards_turnBoardOn | null;
  turnBoardOff: GetMobileCopy_getMobileCopy_screens_leaderboards_turnBoardOff | null;
  invite: GetMobileCopy_getMobileCopy_screens_leaderboards_invite | null;
}

export interface GetMobileCopy_getMobileCopy_screens_activityHistoryLevels {
  headerLeft: string | null;
  headerLevel: string | null;
  headerMid: string | null;
  headerRight: string | null;
  heading: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_dailyStepsFitKitAuthorise {
  permission: string | null;
  permissionCta: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_purchases_empty {
  heading: string | null;
  subheading: string | null;
  ctaLabel: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_purchases_lockedReward {
  ctaLabel: string | null;
  heading: string | null;
  subheading: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_purchases_voucherNotAvailable {
  ctaLabel: string | null;
  heading: string | null;
  subheading: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_purchases_offline {
  ctaLabel: string | null;
  heading: string | null;
  subheading: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_purchases_notEnoughCoins {
  ctaLabel: string | null;
  heading: string | null;
  subheading: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_purchases_aviosConfirmed {
  title: string | null;
  message: string | null;
  cancelButtonText: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_purchases {
  empty: GetMobileCopy_getMobileCopy_screens_purchases_empty | null;
  lockedReward: GetMobileCopy_getMobileCopy_screens_purchases_lockedReward | null;
  voucherNotAvailable: GetMobileCopy_getMobileCopy_screens_purchases_voucherNotAvailable | null;
  offline: GetMobileCopy_getMobileCopy_screens_purchases_offline | null;
  notEnoughCoins: GetMobileCopy_getMobileCopy_screens_purchases_notEnoughCoins | null;
  aviosConfirmed: GetMobileCopy_getMobileCopy_screens_purchases_aviosConfirmed | null;
}

export interface GetMobileCopy_getMobileCopy_screens_fitkitConnect {
  blurb: string | null;
  heading: string | null;
  linkButtonLabel: string | null;
  primaryButtonConnecting: string | null;
  primaryButtonLabel: string | null;
  secondaryButtonLabel: string | null;
  unavailableAndroid: string | null;
  unavailableHeading: string | null;
  unavailableIOS: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_challenges_failed {
  ctaLabel: string | null;
  footer: string | null;
  heading: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_challenges_completed {
  ctaLabel: string | null;
  heading: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_challenges_exitChallenge {
  heading: string | null;
  subheading: string | null;
  ctaLabel: string | null;
  ctaLabelSecondary: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_challenges_showChestModal {
  ctaLabelIsNext: string | null;
  ctaLabelIsNotNext: string | null;
  headingIsNext: string | null;
  headingIsNotNext: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_challenges_success {
  ctaLabel: string | null;
  footer: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_challenges_newExitChallenge {
  heading: string | null;
  subheading: string | null;
  ctaLabel: string | null;
  ctaLabelSecondary: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_challenges {
  failed: GetMobileCopy_getMobileCopy_screens_challenges_failed | null;
  completed: GetMobileCopy_getMobileCopy_screens_challenges_completed | null;
  exitChallenge: GetMobileCopy_getMobileCopy_screens_challenges_exitChallenge | null;
  showChestModal: GetMobileCopy_getMobileCopy_screens_challenges_showChestModal | null;
  success: GetMobileCopy_getMobileCopy_screens_challenges_success | null;
  newExitChallenge: GetMobileCopy_getMobileCopy_screens_challenges_newExitChallenge | null;
}

export interface GetMobileCopy_getMobileCopy_screens_streak {
  ctaLabelDone: string | null;
  ctaLabelCollect: string | null;
  ctaLabelTakeChallenge: string | null;
  subheadingCollected: string | null;
  subheadingCompleted: string | null;
  subheadingTodayStreakDone: string | null;
  subheadingInstrucion: string | null;
  headingCompleted: string | null;
  headingCompletedTodayStreak: string | null;
  headingStartStreakDay: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_pushNotification_toSettings {
  ctaLabel: string | null;
  ctaLabelSecondary: string | null;
  heading: string | null;
  subheading: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_pushNotification_fromChallenge {
  ctaLabel: string | null;
  ctaLabelSecondary: string | null;
  heading: string | null;
  subheading: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_pushNotification_turnNotificationOn {
  ctaLabel: string | null;
  ctaLabelSecondary: string | null;
  heading: string | null;
  subheading: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_pushNotification {
  toSettings: GetMobileCopy_getMobileCopy_screens_pushNotification_toSettings | null;
  fromChallenge: GetMobileCopy_getMobileCopy_screens_pushNotification_fromChallenge | null;
  turnNotificationOn: GetMobileCopy_getMobileCopy_screens_pushNotification_turnNotificationOn | null;
}

export interface GetMobileCopy_getMobileCopy_screens_popUp {
  surgeHeading: string | null;
  surgeSubheading: string | null;
  leaderboardHeading: string | null;
  leaderboardSubheading: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_settingsInfo {
  heading: string | null;
  subheading: string | null;
  ctaLabel: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_intro_welcome {
  heading: string | null;
  descriptionOne: string | null;
  descriptionTwo: string | null;
  descriptionThree: string | null;
  ctaLabel: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_intro_yucoin {
  heading: string | null;
  subheading: string | null;
  ctaLabel: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_intro_dailyStepsCTA {
  heading: string | null;
  subheading: string | null;
  ctaLabel: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_intro_questsNav {
  heading: string | null;
  subheading: string | null;
  ctaLabel: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_intro_todaysYucoin {
  heading: string | null;
  subheading: string | null;
  ctaLabel: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_intro_leaderboardsNav {
  heading: string | null;
  subheading: string | null;
  ctaLabel: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_intro_streaks {
  heading: string | null;
  subheading: string | null;
  ctaLabel: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_intro_rewardsNav {
  heading: string | null;
  subheading: string | null;
  ctaLabel: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_intro {
  welcome: GetMobileCopy_getMobileCopy_screens_intro_welcome | null;
  yucoin: GetMobileCopy_getMobileCopy_screens_intro_yucoin | null;
  dailyStepsCTA: GetMobileCopy_getMobileCopy_screens_intro_dailyStepsCTA | null;
  questsNav: GetMobileCopy_getMobileCopy_screens_intro_questsNav | null;
  todaysYucoin: GetMobileCopy_getMobileCopy_screens_intro_todaysYucoin | null;
  leaderboardsNav: GetMobileCopy_getMobileCopy_screens_intro_leaderboardsNav | null;
  streaks: GetMobileCopy_getMobileCopy_screens_intro_streaks | null;
  rewardsNav: GetMobileCopy_getMobileCopy_screens_intro_rewardsNav | null;
}

export interface GetMobileCopy_getMobileCopy_screens {
  login: GetMobileCopy_getMobileCopy_screens_login | null;
  offline: GetMobileCopy_getMobileCopy_screens_offline | null;
  noAccess: GetMobileCopy_getMobileCopy_screens_noAccess | null;
  resetPassword: GetMobileCopy_getMobileCopy_screens_resetPassword | null;
  needHelpLoggingIn: GetMobileCopy_getMobileCopy_screens_needHelpLoggingIn | null;
  emailSent: GetMobileCopy_getMobileCopy_screens_emailSent | null;
  signupReward: GetMobileCopy_getMobileCopy_screens_signupReward | null;
  leaderboards: GetMobileCopy_getMobileCopy_screens_leaderboards | null;
  activityHistoryLevels: GetMobileCopy_getMobileCopy_screens_activityHistoryLevels | null;
  dailyStepsFitKitAuthorise: GetMobileCopy_getMobileCopy_screens_dailyStepsFitKitAuthorise | null;
  purchases: GetMobileCopy_getMobileCopy_screens_purchases | null;
  fitkitConnect: GetMobileCopy_getMobileCopy_screens_fitkitConnect | null;
  challenges: GetMobileCopy_getMobileCopy_screens_challenges | null;
  streak: GetMobileCopy_getMobileCopy_screens_streak | null;
  pushNotification: GetMobileCopy_getMobileCopy_screens_pushNotification | null;
  popUp: GetMobileCopy_getMobileCopy_screens_popUp | null;
  settingsInfo: GetMobileCopy_getMobileCopy_screens_settingsInfo | null;
  intro: GetMobileCopy_getMobileCopy_screens_intro | null;
}

export interface GetMobileCopy_getMobileCopy {
  version: string | null;
  screens: GetMobileCopy_getMobileCopy_screens | null;
}

export interface GetMobileCopy {
  getMobileCopy: GetMobileCopy_getMobileCopy | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetDebugCodes
// ====================================================

export interface GetDebugCodes {
  getDebugCodes: (string | null)[] | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ResetData
// ====================================================

export interface ResetData {
  resetData: boolean | null;
}

export interface ResetDataVariables {
  code: string;
  type?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddDeviceToken
// ====================================================

export interface AddDeviceToken_addDeviceToken {
  userId: string | null;
  deviceToken: string | null;
  deviceId: string | null;
  subscribed: boolean | null;
  os: OS | null;
}

export interface AddDeviceToken {
  addDeviceToken: AddDeviceToken_addDeviceToken | null;
}

export interface AddDeviceTokenVariables {
  deviceToken: string;
  os: OS;
  deviceId: string;
  subscribed: boolean;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CollectAward
// ====================================================

export interface CollectAward {
  collectAward: boolean | null;
}

export interface CollectAwardVariables {
  awardId: string;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateLeaderboard
// ====================================================

export interface CreateLeaderboard_createLeaderboard {
  email: string | null;
  status: boolean | null;
}

export interface CreateLeaderboard {
  createLeaderboard: (CreateLeaderboard_createLeaderboard | null)[] | null;
}

export interface CreateLeaderboardVariables {
  name: string;
  invitees: (string | null)[];
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLeaderboard
// ====================================================

export interface GetLeaderboard_getLeaderboard {
  __typename: "LeaderboardItem";
  id: string | null;
  firstName: string | null;
  lastName: string | null;
  name: string | null;
  coins: number | null;
  steps: number | null;
}

export interface GetLeaderboard_getCurrentUser {
  __typename: "User";
  id: string | null;
}

export interface GetLeaderboard {
  getLeaderboard: (GetLeaderboard_getLeaderboard | null)[] | null;
  getCurrentUser: GetLeaderboard_getCurrentUser | null;
}

export interface GetLeaderboardVariables {
  sortBy?: string | null;
  leaderboardId?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateLeaderboardConsent
// ====================================================

export interface UpdateLeaderboardConsent_updateLeaderboardConsent {
  leaderboardId: string | null;
  name: string | null;
  consent: boolean | null;
}

export interface UpdateLeaderboardConsent {
  updateLeaderboardConsent: UpdateLeaderboardConsent_updateLeaderboardConsent | null;
}

export interface UpdateLeaderboardConsentVariables {
  leaderboardId?: string | null;
  consent?: boolean | null;
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
  code: string | null;
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
  id: string | null;
  info: string | null;
  steps: (string | null)[] | null;
}

export interface GetRewards_getRewards_uiSettings {
  __typename: "RewardUiSettings";
  id: string | null;
  logoWidth: number | null;
  logoHeight: number | null;
  ctaLabel: string | null;
  alertHeading: string | null;
  alertSubheading: string | null;
  alertCancelLabel: string | null;
  alertOkLabel: string | null;
  offerHeading: string | null;
  offerSubheading: string | null;
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
  link_type: string | null;
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
  delivery_url: string | null;
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
// GraphQL mutation operation: AddUserFeedback
// ====================================================

export interface AddUserFeedback_addUserFeedback {
  message: string | null;
}

export interface AddUserFeedback {
  addUserFeedback: AddUserFeedback_addUserFeedback | null;
}

export interface AddUserFeedbackVariables {
  rating: number;
  comment?: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetActivityHistory
// ====================================================

export interface GetActivityHistory_getActivityHistoryWithLevels_sources {
  garmin: number | null;
  fitbit: number | null;
  device: number | null;
}

export interface GetActivityHistory_getActivityHistoryWithLevels_challenges {
  id: string | null;
  earned: number | null;
  milestones: number | null;
  name: string | null;
  score: string | null;
}

export interface GetActivityHistory_getActivityHistoryWithLevels {
  id: string | null;
  steps: number | null;
  sources: GetActivityHistory_getActivityHistoryWithLevels_sources | null;
  yucoin: number | null;
  dayOfMonth: string | null;
  dayOfWeek: string | null;
  level: number | null;
  challenges: (GetActivityHistory_getActivityHistoryWithLevels_challenges | null)[] | null;
}

export interface GetActivityHistory {
  getActivityHistoryWithLevels: (GetActivityHistory_getActivityHistoryWithLevels | null)[] | null;
}

export interface GetActivityHistoryVariables {
  monthsAgo?: number | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCurrentUser
// ====================================================

export interface GetCurrentUser_getCurrentUser_connections {
  name: string | null;
  isConnected: boolean | null;
  lastUpdated: number | null;
}

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

export interface GetCurrentUser_getCurrentUser_passiveChallenge_exchange {
  yucoin: number | null;
  steps: number | null;
}

export interface GetCurrentUser_getCurrentUser_passiveChallenge {
  exchange: GetCurrentUser_getCurrentUser_passiveChallenge_exchange | null;
}

export interface GetCurrentUser_getCurrentUser_activeChallenge_challenge_incomingData {
  steps: number | null;
  meditation: number | null;
}

export interface GetCurrentUser_getCurrentUser_activeChallenge_challenge {
  level: number | null;
  levelSlotId: string | null;
  status: string | null;
  endDateTime: string | null;
  startDateTime: string | null;
  rating: number | null;
  subtype: string | null;
  incomingData: GetCurrentUser_getCurrentUser_activeChallenge_challenge_incomingData | null;
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

export interface GetCurrentUser_getCurrentUser_activeStreak {
  id: string | null;
  type: string | null;
  value: number | null;
  maxStreak: number | null;
  streakAwardId: string | null;
  streak: number | null;
  nextStreakAvailableAt: string | null;
}

export interface GetCurrentUser_getCurrentUser_todayActivity {
  id: string | null;
  earned: number | null;
  milestones: number | null;
  name: string | null;
  score: string | null;
}

export interface GetCurrentUser_getCurrentUser_leaderboards {
  leaderboardId: string | null;
  name: string | null;
  consent: boolean | null;
  hasAccepted: boolean | null;
  inviteFrom: string | null;
}

export interface GetCurrentUser_getCurrentUser {
  __typename: "User";
  id: string | null;
  archived: boolean | null;
  onboardingDate: string | null;
  redeemedOnboarding: boolean | null;
  membershipType: string | null;
  challengesDoneToday: number | null;
  connections: (GetCurrentUser_getCurrentUser_connections | null)[] | null;
  userFeatures: (GetCurrentUser_getCurrentUser_userFeatures | null)[] | null;
  mobileConsent: GetCurrentUser_getCurrentUser_mobileConsent | null;
  coinLedger: GetCurrentUser_getCurrentUser_coinLedger | null;
  passiveChallenge: GetCurrentUser_getCurrentUser_passiveChallenge | null;
  activeChallenge: GetCurrentUser_getCurrentUser_activeChallenge | null;
  activeStreak: GetCurrentUser_getCurrentUser_activeStreak | null;
  todayActivity: (GetCurrentUser_getCurrentUser_todayActivity | null)[] | null;
  leaderboards: (GetCurrentUser_getCurrentUser_leaderboards | null)[] | null;
}

export interface GetCurrentUser {
  getIntercomHash: string | null;
  getCurrentUser: GetCurrentUser_getCurrentUser | null;
}

export interface GetCurrentUserVariables {
  intercomHashMethod: IntercomHashMethod;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMagicLink
// ====================================================

export interface GetMagicLink {
  getMagicLink: string | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getSession
// ====================================================

export interface getSession_getSession {
  id: string | null;
  expires: number | null;
}

export interface getSession {
  getSession: getSession_getSession | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginUser
// ====================================================

export interface LoginUser_loginUser_user_connections {
  name: string | null;
  isConnected: boolean | null;
  lastUpdated: number | null;
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

export interface LoginUser_loginUser_user_passiveChallenge_exchange {
  yucoin: number | null;
  steps: number | null;
}

export interface LoginUser_loginUser_user_passiveChallenge {
  exchange: LoginUser_loginUser_user_passiveChallenge_exchange | null;
}

export interface LoginUser_loginUser_user_activeChallenge_challenge_incomingData {
  steps: number | null;
  meditation: number | null;
}

export interface LoginUser_loginUser_user_activeChallenge_challenge {
  levelSlotId: string | null;
  status: string | null;
  endDateTime: string | null;
  startDateTime: string | null;
  rating: number | null;
  subtype: string | null;
  incomingData: LoginUser_loginUser_user_activeChallenge_challenge_incomingData | null;
}

export interface LoginUser_loginUser_user_activeChallenge_levelSlot_milestones_target {
  steps: number | null;
  meditation: number | null;
}

export interface LoginUser_loginUser_user_activeChallenge_levelSlot_milestones {
  id: string | null;
  XP: number | null;
  coins: number | null;
  target: LoginUser_loginUser_user_activeChallenge_levelSlot_milestones_target | null;
}

export interface LoginUser_loginUser_user_activeChallenge_levelSlot {
  subtype: string | null;
  unit: string | null;
  milestones: (LoginUser_loginUser_user_activeChallenge_levelSlot_milestones | null)[] | null;
}

export interface LoginUser_loginUser_user_activeChallenge {
  challenge: LoginUser_loginUser_user_activeChallenge_challenge | null;
  levelSlot: LoginUser_loginUser_user_activeChallenge_levelSlot | null;
}

export interface LoginUser_loginUser_user_activeStreak {
  id: string | null;
  type: string | null;
  value: number | null;
  maxStreak: number | null;
  streakAwardId: string | null;
  streak: number | null;
  nextStreakAvailableAt: string | null;
}

export interface LoginUser_loginUser_user_todayActivity {
  id: string | null;
  earned: number | null;
  milestones: number | null;
  name: string | null;
  score: string | null;
}

export interface LoginUser_loginUser_user_leaderboards {
  leaderboardId: string | null;
  name: string | null;
  consent: boolean | null;
  hasAccepted: boolean | null;
  inviteFrom: string | null;
}

export interface LoginUser_loginUser_user {
  __typename: "User";
  id: string | null;
  archived: boolean | null;
  businessAccountId: string | null;
  membershipType: string | null;
  challengesDoneToday: number | null;
  connections: (LoginUser_loginUser_user_connections | null)[] | null;
  userFeatures: (LoginUser_loginUser_user_userFeatures | null)[] | null;
  mobileConsent: LoginUser_loginUser_user_mobileConsent | null;
  redeemedOnboarding: boolean | null;
  coinLedger: LoginUser_loginUser_user_coinLedger | null;
  passiveChallenge: LoginUser_loginUser_user_passiveChallenge | null;
  activeChallenge: LoginUser_loginUser_user_activeChallenge | null;
  activeStreak: LoginUser_loginUser_user_activeStreak | null;
  todayActivity: (LoginUser_loginUser_user_todayActivity | null)[] | null;
  leaderboards: (LoginUser_loginUser_user_leaderboards | null)[] | null;
}

export interface LoginUser_loginUser {
  token: string | null;
  expiresAt: number | null;
  message: string | null;
  intercomHash: string | null;
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
  intercomHashMethod?: IntercomHashMethod | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RefreshSession
// ====================================================

export interface RefreshSession_refreshSession {
  token: string | null;
  expiresAt: number | null;
  message: string | null;
  intercomHash: string | null;
}

export interface RefreshSession {
  refreshSession: RefreshSession_refreshSession | null;
}

export interface RefreshSessionVariables {
  tokenExpiration: number;
  intercomHashMethod?: IntercomHashMethod | null;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ReplyToLeaderboardInvite
// ====================================================

export interface ReplyToLeaderboardInvite {
  replyToLeaderboardInvite: boolean | null;
}

export interface ReplyToLeaderboardInviteVariables {
  leaderboardId: string;
  hasAccepted: boolean;
}


/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SendMagicLink
// ====================================================

export interface SendMagicLink_sendMagicLink {
  message: string | null;
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

export interface User_connections {
  name: string | null;
  isConnected: boolean | null;
  lastUpdated: number | null;
}

export interface User_userFeatures {
  name: string | null;
  value: boolean | null;
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
  connections: (User_connections | null)[] | null;
  __typename: "User";
  userFeatures: (User_userFeatures | null)[] | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum OS {
  android = "android",
  ios = "ios",
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

// 
export interface ChallengePayload {
  startDateTime?: string | null;
  endDateTime?: string | null;
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