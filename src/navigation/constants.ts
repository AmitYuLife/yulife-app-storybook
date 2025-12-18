import { OptionsBottomTabs } from "react-native-navigation";

export const ROUTES = {
  appLoading: "yulife.Loading",
  // root screens
  noAccess: "yulife.NoAccess",
  loginLegacy: "yulife.LoginLegacy",
  loginHero: "yulife.LoginHero",
  loginEmail: "yulife.LoginEmail",
  loginConfirm: "yulife.LoginConfirm",
  loginPassword: "yulife.LoginPassword",
  resetPassword: "yulife.ResetPassword",
  emailSent: "yulife.EmailSent",
  signUp: "yulife.SignUp",
  offline: "yulife.Offline",
  update: "yulife.Update",

  // onboarding screens
  onboardingFitKitConnect: "yulife.onboarding.FitKitConnect",
  onboardingSignUpReward: "yulife.onboarding.SignUpReward",

  // member screens
  menu: "yulife.menu",
  settings: "yulife.member.Settings",
  memberZone: "yulife.member.Zone",
  dailySteps: "yulife.member.DailySteps",
  quests: "yulife.member.Quests",
  rewards: "yulife.member.Rewards",
  purchases: "yulife.member.Purchases",
  wallet: "yulife.member.Wallet",
  walletItems: "yulife.member.WalletItems",
  activityHistory: "yulife.member.ActivityHistory",
  challengesHistoryNew: "yulife.member.ActivityHistoryNew",
  duelsHub: "yulife.member.DuelsHub",
  duelsSearch: "yulife.member.DuelsSearch",
  yuHealthConnect: "yulife.member.yuHealthConnect",
  yuHealthConnectSelect: "yulife.member.yuHealthConnectSelect",

  // leaderboard
  leaderboard: "yulife.member.Leaderboards",
  leaderboardInfo: "yulife.member.LeaderboardInfo",
  leaderboardSearch: "yulife.member.LeaderboardSearch",

  chooseLeaderboard: "yulife.member.chooseLeaderboard",
  debug: "yulife.member.Debug",
  yuScreen: "yulife.member.Yuscreen",
  journey: "yulife.member.journey",
  sduiStatic: "yulife.member.sduiStatic",
  yumojiBuilder: "yulife.member.yumojiBuilder",
  inspect: "yulife.member.inspect",
  gifting: "yulife.member.gifting",
  giftView: "yulife.member.giftView",
  notifications: "yulife.member.notifications",

  // brain games
  sudokuStaging: "yulife.brainGames.sodukuStaging",
  sudokuPractice: "yulife.brainGames.sodukuPractice",
  sudokuGame: "yulife.brainGames.sodukuGame",
  sudokuCompleted: "yulife.brainGames.sodukuCompleted",
  sudokuLeaderboard: "yulife.brainGames.sudokuLeaderboard",

  // breathing exercises
  breathingExercise: "yulife.breathing.exercise",

  // settings
  cyclingMeasurement: "yulife.member.cyclingMeasurement",
  languageSelector: "yulife.member.languageSelector",
  permissions: "yulife.member.permissions",
  leaderboardSettings: "yulife.member.leaderboardSettings",

  //tools
  tools: "yulife.member.tools",

  // webview
  webView: "yulife.webView.WebView",

  // product
  productDetails: "yulife.product.ProductDetails",
  productPaymentHistory: "yulife.product.ProductPaymentHistory",
  beneficiary: "yulife.product.Beneficiary",

  // wellbeing hub
  wellbeingHubItems: "yulife.wellbeingHub.WellbeingHubItems",
  sduiWellbeingHubItemDetails: "yulife.wellbeingHub.sduiItemDetails",

  // quests
  questsChallengesList: "yulife.quests.ChallengesList",

  //content location

  selectContentLocation: "yulife.member.selectContentLocation",

  // rewards screens
  rewardDetailsSdui: "yulife.rewards.rewardDetailsSdui",
  rewardPurchase: "yulife.rewards.Purchase",

  // referrals screens
  referralInformation: "yulife.referrals.referralInformation",

  // today-earnings screen
  todayEarnings: "yulife.todayEarnings",

  // perk
  perkSubscriptionInfo: "yulife.perk.subscriptionInfo",

  // event system
  eventDialog: "yulife.events.dialog",

  // media
  meditopiaMediaList: "yulife.meditopia.media.list",
  fiitMediaCategoryList: "yulife.fiit.media.category.list",
  fiitMediaList: "yulife.fiit.media.list",
  mediaPlayer: "yulife.media.player",

  mediaPlayerSdui: "yulife.media.player.sdui",

  // sdui static not registered
  pensionDetails: "yulife.sdui.static.smartPensionDetails",
  pensionConnection: "yulife.sdui.static.pensionConnection",
  pensionConnectionSuccess: "yulife.sdui.static.pensionConnectionSuccess",
  pensionConnectionFailed: "yulife.sdui.static.pensionConnectionFailed",

  // battle pass
  battlePass: "yulife.battlePass",
  battlePassLeaderboard: "yulife.battlePass.battlePassLeaderboard",
  rewardsUnlock: "yulife.rewardsUnlock",

  // debug
  smokingJourneyTree: "yulife.debug.smokingJourneyTree",
  smokingJourneyStories: "yulife.debug.smokingJourneyStories",
  smokingJourneyPlants: "yulife.debug.smokingJourneyPlants",
  testJourney: "yulife.debug.testJourney",
  levelSelector: "yulife.debug.levelSelector",
  userFeatures: "yulife.debug.userFeatures",
  debugPlayground: "yulife.debug.debugPlayground",
  workoutDebug: "yulife.debug.workoutDebug",
  yuHealthDebug: "yulife.debug.yuHealthDebug",
  watchDebug: "yulife.debug.watchDebug",
  debugComponentBenchmark: "yulife.debug.debugComponentBenchmark",

  // smoking
  smoking: "yulife.member.smoking",
  smokingStreakLapsed: "yulife.member.smokingStreakLapsed",
  smokingCommitment: "yulife.member.smokingCommitment",

  // games
  game2048Selector: "yulife.game.2048Selector",
  game2048: "yulife.game.2048",

  // wrapped
  wrapped: "yulife.wrapped",

  // generic heading testing
  genericHeading: "yulife.genericHeading",

  // achievements
  achievements: "yulife.achievements",

  // pathways
  pathways: "yulife.member.pathways",
  pathwaysReflected: "yulife.member.pathwaysReflected",
  pathwaysClaim: "yulife.member.pathwaysClaim",
  pathwayChallengeSuccess: "yulife.member.pathways.challengeSuccess",
  pathwayChallengeIntro: "yulife.member.pathways.challengeIntro",

  // mood calendar
  moodCalendar: "yulife.member.moodCalendar",
};

export const MODALS = {
  challengeDetails: "yulife.modals.ChallengeDetails",
  challengeUnavailable: "yulife.modals.ChallengeUnavailable",
  chest: "yulife.modals.Chest",
  EOTWChest: "yulife.modals.EOTWChest",
  collectReward: "yulife.modals.CollectReward",
  feedback: "yulife.modals.Feedback",
  generic: "yulife.modals.Generic",
  genericSelector: "yulife.modals.GenericSelector",
  genericConnectionError: "yulife.modals.GenericConnectionError",
  levelUnavailable: "yulife.modals.LevelUnavailable",
  pushNotifications: "yulife.modals.PushNotifications",
  rewards: "yulife.modals.Rewards",
  streaks: "yulife.modals.Streaks",
  todayYucoin: "yulife.modals.todayYucoin",
  info: "yulife.modals.info",
  duelInvite: "yulife.modals.duelInvite",
  duelRespond: "yulife.modals.duelRespond",
  yuCoinPowerExplained: "yulife.modals.yuCoinPowerExplained",
  enterSalary: "yulife.modals.enterSalary",
  financialCoverForm: "yulife.member.financialCoverForm",
  priceChanged: "yulife.member.priceChanged",
  policyCertificate: "yulife.modals.policyCertificate",
  mobileUpdate: "yulife.member.MobileUpdate",
  addBeneficiary: "yulife.modals.AddBeneficiary",
  defaultBeneficiaries: "yulife.modals.DefaultBeneficiaries",
  appReview: "yulife.modals.AppReview",
  blurredOverlay: "yulife.modals.blurredOverlay",
  consumableModal: "yulife.modals.consumableOverlay",
  surgeOverlay: "yulife.modals.surgeOverlay",
  switchToGoogleFit: "yulife.modals.switchToGoogleFit",
  whatsNew: "yulife.modals.whatsNew",
  collectEventReward: "yulife.modal.collectEventReward",
  weeklyQuestsOverlay: "yulife.overlay.weeklyQuests",
  sudokuHelp: "yulife.modals.sudokuHelp",
  sudokuPause: "yulife.modals.sudokuPause",
  sudokuLeaderboardConsent: "yulife.modals.sudokuLeaderboardConsent",
  leaderboardCommunityOverlay: "yulife.overlay.leaderboardCommunity",
  businessAccountsOverlay: "yulife.overlay.businessAccounts",
  breathingExerciseDurationPicker: "yulife.overlay.breathingExerciseDurationPicker",
  challengeNoData: "yulife.modals.challengeNoData",
  joinLeaderboardOverlay: "yulife.overlay.joinLeaderboard",
  smokingCheckInOverlay: "yulife.overlay.smokingCheckIn",
  smokingStreakCelebration: "yulife.modals.smokingStreakCelebration",
  leaderboardRank: "yulife.modals.leaderboardRank",
  smokingOptOutModal: "yulife.modals.smokingOptOut",
  smokingEditStateModal: "yulife.modals.smokingEditState",
  genericWithHeroImage: "yulife.modals.genericWithHeroImage",
  streakSaved: "streakSaved",
  openRandomChest: "yulife.modals.openRandomChest",
  itemDetailsHalfModal: "yulife.modals.itemDetailsHalfModal",
  sduiStepFeedbackHalfModal: "yulife.modals.sduiStepFeedbackHalfModal",
  game2048GameOver: "yulife.modals.game2048GameOver",
  game2048Victory: "yulife.modals.game2048Victory",
  game2048Intro: "yulife.modals.game2048Intro",
  viewAchievementModal: "yulife.modals.viewAchievementModal",
  unlockedAchievementsModal: "yulife.modals.unlockedAchievementsModal",
  // YuHealth
  healthPermission: "yulife.modals.healthPermission",
};

export const bottomTabs: OptionsBottomTabs = {
  animate: false,
  drawBehind: true,
  visible: false,
  tabsAttachMode: "afterInitialTab",
};
