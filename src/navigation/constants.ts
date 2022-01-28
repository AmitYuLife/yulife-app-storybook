import { OptionsBottomTabs } from "react-native-navigation";

export const ROUTES = {
  // root screens
  noAccess: "yulife.NoAccess",
  login: "yulife.Login",
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
  activityHistory: "yulife.member.ActivityHistory",
  stats: "yulife.member.Stats",
  duelsHub: "yulife.member.DuelsHub",
  duelsSearch: "yulife.member.DuelsSearch",
  leaderboards: "yulife.member.Leaderboards",
  leaderboardInfo: "yulife.member.LeaderboardInfo",
  leaderboardsList: "yulife.member.LeaderboardsList",
  chooseLeaderboard: "yulife.member.chooseLeaderboard",
  debug: "yulife.member.Debug",
  communityGoals: "yulife.member.CommunityGoals",
  yuScreen: "yulife.member.Yuscreen",
  yumojiBuilder: "yulife.member.yumojiBuilder",
  yuProductSurvey: "yulife.member.YuProductSurvey",
  changeMemberNickname: "yulife.member.changeMemberNickname",
  cyclingMeasurement: "yulife.member.cyclingMeasurement",

  // webview
  webView: "yulife.webView.WebView",

  // product
  fib: "yulife.product.FibBrowse",
  productDetails: "yulife.product.ProductDetails",
  beneficiary: "yulife.product.Beneficiary",
  productStep: "yulife.product.ProductStep",
  productStepDetached: "yulife.product.ProductStepDetached",
  productStepFaqs: "yulife.product.ProductStepFaqs",
  productStepDocuments: "yulife.product.ProductStepDocuments",

  // wellbeing hub
  wellbeingHubItems: "yulife.wellbeingHub.WellbeingHubItems",
  wellbeingHubDetails: "yulife.wellbeingHub.WellbeingHubDetails",

  // quests
  questsChallengesList: "yulife.quests.ChallengesList",
  questsChallengesHistory: "yulife.quests.ChallengesHistory",

  // rewards screens
  linkDetails: "yulife.rewards.LinkDetails",
  wegiftDetails: "yulife.rewards.WegiftDetails",
  wegiftConfirmed: "yulife.rewards.WegiftConfirmed",
  aviosDetails: "yulife.rewards.AviosDetails",
  aviosConfirmed: "yulife.rewards.AviosConfirmed",

  // referrals screens
  referralInformation: "yulife.referrals.referralInformation",

  // today-earnings screen
  todayEarnings: "yulife.todayEarnings",

  // perk
  perkSubscriptionInfo: "yulife.perk.subscriptionInfo",

  //debug
  packageCard: "yulife.debug.packageCard",
  packageIntro: "yulife.debug.packageIntro",
  packageFinalise: "yulife.debug.packageFinalise",
  rewardsNew: "yulife.debug.rewardsNew",
  rewardDetails: "yulife.rewards.RewardDetails",
};

export const MODALS = {
  challengeDetails: "yulife.modals.ChallengeDetails",
  challengeUnavailable: "yulife.modals.ChallengeUnavailable",
  chest: "yulife.modals.Chest",
  createLeaderboard: "yulife.modals.CreateLeaderboard",
  collectReward: "yulife.modals.CollectReward",
  feedback: "yulife.modals.Feedback",
  generic: "yulife.modals.Generic",
  genericOverlay: "yulife.modals.GenericOverlay",
  genericConnectionError: "yulife.modals.GenericConnectionError",
  leaderboards: "yulife.modals.Leaderboards",
  leaderboardInvite: "yulife.modals.LeaderboardInvite",
  leaderboardLean: "yulife.modals.LeaderboardLean",
  levelUnavailable: "yulife.modals.LevelUnavailable",
  pushNotifications: "yulife.modals.PushNotifications",
  rewards: "yulife.modals.Rewards",
  streaks: "yulife.modals.Streaks",
  todayYucoin: "yulife.modals.todayYucoin",
  info: "yulife.modals.info",
  duelInvite: "yulife.modals.duelInvite",
  duelRespond: "yulife.modals.duelRespond",
  earnRate: "yulife.modals.earnRate",
  enterSalary: "yulife.modals.enterSalary",
  financialCoverForm: "yulife.member.financialCoverForm",
  priceChanged: "yulife.member.priceChanged",
  policyCertificate: "yulife.modals.policyCertificate",
  mobileUpdate: "yulife.member.MobileUpdate",
  addBeneficiary: "yulife.modals.AddBeneficiary",
  defaultBeneficiaries: "yulife.modals.DefaultBeneficiaries",
  appReview: "yulife.modals.AppReview",
  blurredOverlay: "yulife.modals.blurredOverlay",
  surgeOverlay: "yulife.modals.surgeOverlay",
  personalProductStepContinue: "yulife.product.ContinueJourney",
  switchToGoogleFit: "yulife.modals.switchToGoogleFit",
  whatsNew: "yulife.modals.whatsNew",
};

export const bottomTabs: OptionsBottomTabs = {
  animate: false,
  drawBehind: true,
  visible: false,
  tabsAttachMode: "afterInitialTab",
};
