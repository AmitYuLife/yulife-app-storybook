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
  walletSeeMore: "yulife.member.WalletSeeMore",
  activityHistory: "yulife.member.ActivityHistory",
  challengesHistoryNew: "yulife.member.ActivityHistoryNew",
  duelsHub: "yulife.member.DuelsHub",
  duelsSearch: "yulife.member.DuelsSearch",
  duelInvite: "yulife.member.DuelInvite",
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
  tournamentDetails: "yulife.events.tournamentDetails",
  tournamentTeams: "yulife.events.tournamentTeams",
  tournamentHowToPlay: "yulife.events.tournamentHowToPlay",

  // media
  meditopiaMediaList: "yulife.meditopia.media.list",
  meditopiaMediaAll: "yulife.meditopia.media.all",
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
  pathwaysProgress: "yulife.debug.pathwaysProgress",
  themeSwitcher: "yulife.debug.themeSwitcher",
  debugUserInfo: "yulife.debug.userInfo",
  challengeFailedDebug: "yulife.debug.challengeFailed",
  tournamentDebug: "yulife.debug.tournamentDebug",

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
  pathwayChallengeFeedback: "yulife.member.pathways.challengeFeedback",
  pathwayChallengeIntro: "yulife.member.pathways.challengeIntro",
  pathwaysMediaPlayer: "yulife.member.pathways.mediaPlayer",
  pathwaysGoalsSuccess: "yulife.member.pathways.goalsSuccess",

  // mood calendar
  moodCalendar: "yulife.member.moodCalendar",

  // goals history
  goalsHistory: "yulife.member.goalsHistory",
};

export const MODAL_PREFIX = "yulife.modals";

export const MODALS: Record<string, `${typeof MODAL_PREFIX}.${string}`> = {
  challengeDetails: `${MODAL_PREFIX}.ChallengeDetails`,
  challengeUnavailable: `${MODAL_PREFIX}.ChallengeUnavailable`,
  chest: `${MODAL_PREFIX}.Chest`,
  EOTWChest: `${MODAL_PREFIX}.EOTWChest`,
  collectReward: `${MODAL_PREFIX}.CollectReward`,
  feedback: `${MODAL_PREFIX}.Feedback`,
  generic: `${MODAL_PREFIX}.Generic`,
  genericSelector: `${MODAL_PREFIX}.GenericSelector`,
  genericConnectionError: `${MODAL_PREFIX}.GenericConnectionError`,
  levelUnavailable: `${MODAL_PREFIX}.LevelUnavailable`,
  pushNotifications: `${MODAL_PREFIX}.PushNotifications`,
  reflectionReminder: `${MODAL_PREFIX}.ReflectionReminder`,
  rewards: `${MODAL_PREFIX}.Rewards`,
  streaks: `${MODAL_PREFIX}.Streaks`,
  todayYucoin: `${MODAL_PREFIX}.todayYucoin`,
  info: `${MODAL_PREFIX}.info`,
  duelRespond: `${MODAL_PREFIX}.duelRespond`,
  yuCoinPowerExplained: `${MODAL_PREFIX}.yuCoinPowerExplained`,
  enterSalary: `${MODAL_PREFIX}.enterSalary`,
  financialCoverForm: `${MODAL_PREFIX}.financialCoverForm`,
  priceChanged: `${MODAL_PREFIX}.priceChanged`,
  policyCertificate: `${MODAL_PREFIX}.policyCertificate`,
  mobileUpdate: `${MODAL_PREFIX}.MobileUpdate`,
  addBeneficiary: `${MODAL_PREFIX}.AddBeneficiary`,
  defaultBeneficiaries: `${MODAL_PREFIX}.DefaultBeneficiaries`,
  appReview: `${MODAL_PREFIX}.AppReview`,
  blurredOverlay: `${MODAL_PREFIX}.blurredOverlay`,
  consumableModal: `${MODAL_PREFIX}.consumableOverlay`,
  surgeOverlay: `${MODAL_PREFIX}.surgeOverlay`,
  switchToGoogleFit: `${MODAL_PREFIX}.switchToGoogleFit`,
  whatsNew: `${MODAL_PREFIX}.whatsNew`,
  collectEventReward: `${MODAL_PREFIX}.collectEventReward`,
  weeklyQuestsOverlay: `${MODAL_PREFIX}.weeklyQuests`,
  sudokuHelp: `${MODAL_PREFIX}.sudokuHelp`,
  sudokuPause: `${MODAL_PREFIX}.sudokuPause`,
  sudokuLeaderboardConsent: `${MODAL_PREFIX}.sudokuLeaderboardConsent`,
  leaderboardCommunityOverlay: `${MODAL_PREFIX}.leaderboardCommunity`,
  businessAccountsOverlay: `${MODAL_PREFIX}.businessAccounts`,
  breathingExerciseDurationPicker: `${MODAL_PREFIX}.breathingExerciseDurationPicker`,
  challengeNoData: `${MODAL_PREFIX}.challengeNoData`,
  joinLeaderboardOverlay: `${MODAL_PREFIX}.joinLeaderboard`,
  smokingCheckInOverlay: `${MODAL_PREFIX}.smokingCheckIn`,
  smokingStreakCelebration: `${MODAL_PREFIX}.smokingStreakCelebration`,
  leaderboardRank: `${MODAL_PREFIX}.leaderboardRank`,
  smokingOptOutModal: `${MODAL_PREFIX}.smokingOptOut`,
  smokingEditStateModal: `${MODAL_PREFIX}.smokingEditState`,
  genericWithHeroImage: `${MODAL_PREFIX}.genericWithHeroImage`,
  streakSaved: `${MODAL_PREFIX}.streakSaved`,
  openRandomChest: `${MODAL_PREFIX}.openRandomChest`,
  itemDetailsHalfModal: `${MODAL_PREFIX}.itemDetailsHalfModal`,
  sduiStepFeedbackHalfModal: `${MODAL_PREFIX}.sduiStepFeedbackHalfModal`,
  game2048GameOver: `${MODAL_PREFIX}.game2048GameOver`,
  game2048Victory: `${MODAL_PREFIX}.game2048Victory`,
  game2048Intro: `${MODAL_PREFIX}.game2048Intro`,
  viewAchievementModal: `${MODAL_PREFIX}.viewAchievementModal`,
  unlockedAchievementsModal: `${MODAL_PREFIX}.unlockedAchievementsModal`,
  // YuHealth
  confirmation: `${MODAL_PREFIX}.confirmation`,
};

export const bottomTabs: OptionsBottomTabs = {
  animate: false,
  drawBehind: true,
  visible: false,
  tabsAttachMode: "afterInitialTab",
};
