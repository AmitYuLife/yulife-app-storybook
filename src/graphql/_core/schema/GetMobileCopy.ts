/* tslint:disable */
/* eslint-disable */
// @generated
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

export interface GetMobileCopy_getMobileCopy_screens_purchases_newLockedReward {
  ctaLabel: string | null;
  heading: string | null;
  subheading: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_purchases {
  empty: GetMobileCopy_getMobileCopy_screens_purchases_empty | null;
  lockedReward: GetMobileCopy_getMobileCopy_screens_purchases_lockedReward | null;
  voucherNotAvailable: GetMobileCopy_getMobileCopy_screens_purchases_voucherNotAvailable | null;
  offline: GetMobileCopy_getMobileCopy_screens_purchases_offline | null;
  notEnoughCoins: GetMobileCopy_getMobileCopy_screens_purchases_notEnoughCoins | null;
  aviosConfirmed: GetMobileCopy_getMobileCopy_screens_purchases_aviosConfirmed | null;
  newLockedReward: GetMobileCopy_getMobileCopy_screens_purchases_newLockedReward | null;
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
  subheadingTodayStreakDone: (string | null)[] | null;
  subheadingInstrucion: string | null;
  headingCompleted: string | null;
  headingCompletedTodayStreak: (string | null)[] | null;
  headingStartStreakDay: (string | null)[] | null;
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

export interface GetMobileCopy_getMobileCopy_screens_intro_yucoinWithMeditation {
  heading: string | null;
  subheading: string | null;
  ctaLabel: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_intro_dailyStepsCTA {
  heading: string | null;
  subheading: string | null;
  ctaLabel: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_intro_dailyStepsWithMeditationCTA {
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

export interface GetMobileCopy_getMobileCopy_screens_intro_surge {
  heading: string | null;
  subheading: string | null;
  ctaLabel: string | null;
}

export interface GetMobileCopy_getMobileCopy_screens_intro {
  welcome: GetMobileCopy_getMobileCopy_screens_intro_welcome | null;
  yucoin: GetMobileCopy_getMobileCopy_screens_intro_yucoin | null;
  yucoinWithMeditation: GetMobileCopy_getMobileCopy_screens_intro_yucoinWithMeditation | null;
  dailyStepsCTA: GetMobileCopy_getMobileCopy_screens_intro_dailyStepsCTA | null;
  dailyStepsWithMeditationCTA: GetMobileCopy_getMobileCopy_screens_intro_dailyStepsWithMeditationCTA | null;
  questsNav: GetMobileCopy_getMobileCopy_screens_intro_questsNav | null;
  todaysYucoin: GetMobileCopy_getMobileCopy_screens_intro_todaysYucoin | null;
  leaderboardsNav: GetMobileCopy_getMobileCopy_screens_intro_leaderboardsNav | null;
  streaks: GetMobileCopy_getMobileCopy_screens_intro_streaks | null;
  rewardsNav: GetMobileCopy_getMobileCopy_screens_intro_rewardsNav | null;
  surge: GetMobileCopy_getMobileCopy_screens_intro_surge | null;
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
