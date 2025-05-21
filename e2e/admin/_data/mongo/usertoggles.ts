import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customers from "../postgres/customers";
import { allTogglesTrue, DEFAULT_TOGGLES } from "./_templates";
import { BUSINESS_ACCOUNT_5 } from "../postgres/business";

const type = "mongo";
const modelName = "usertoggles";

export const CUSTOMER_1_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_1.data.customerId,
    features: {
      showStats: true,
      statsShowCoinGeneralTotalYearned: true,
      statsShowCoinRecommendationCard: true,
      statsShowCoinGeneralTotalRedeemedCard: true,
      statsShowCoinAchievementCard: true,
      statsShowChallengeGeneralCard: true,
      statsShowChallengeRecommendationCard: true,
      statsShowChallengeComparisonCard: true,
      statsShowStepsRecommendationCard: true,
      statsShowStepsGeneralCard: true,
      statsShowStepsBestScoreCard: true,
      statsShowStepsGraphCard: true,
      statsShowMindfulnessRecommendationCard: true,
      statsShowMindfulnessGeneralCard: true,
      statsShowMindfulnessBestScoreCard: true,
      statsShowMindfulnessGraphCard: true,
      statsShowCyclingRecommendationCard: true,
      statsShowCyclingGeneralCard: true,
      statsShowCyclingBestScoreCard: true,
      statsShowCyclingGraphCard: true,
      showSettings: true,
      showNotifications: true,
      showTodayEarningsScreen: true,
      showGoals: true,
      yuScreenV3: true,
      showPermissionSettings: true,
      showYucoinPowerButton: true,
      tempGameTodayYuCoinCheckIns: true,
      showDailySurvey: true,
      showNotificationCentre: true,
      showAllLanguages: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_2_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_2.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      tempGameEnableReleaseYuHealthV4: true,
      showPermissionSettings: true,
    },
  },
};

export const CUSTOMER_4_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_4.data.customerId,
    features: allTogglesTrue.data.features,
  },
} as IDatabaseItem;

export const CUSTOMER_5_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_5.data.customerId,
    features: {
      showNotifications: true,
      showStreaks: true,
      showCounter: true,
      showBuildNumber: true,
      showSettings: true,
      disableUserEntries: true,
      fitbit: true,
      showConnections: true,
      showLastSynced: true,
      newPassiveValidationRule: true,
      usePassiveMeditation: true,
      statsShowCoinGeneralTotalYearned: true,
      statsShowCoinRecommendationCard: true,
      statsShowCoinGeneralTotalRedeemedCard: true,
      statsShowCoinAchievementCard: true,
      statsShowChallengeGeneralCard: true,
      statsShowChallengeRecommendationCard: true,
      statsShowChallengeComparisonCard: true,
      statsShowStepsRecommendationCard: true,
      statsShowStepsGeneralCard: true,
      statsShowStepsBestScoreCard: true,
      statsShowStepsGraphCard: true,
      statsShowMindfulnessRecommendationCard: true,
      statsShowMindfulnessGeneralCard: true,
      statsShowMindfulnessBestScoreCard: true,
      statsShowMindfulnessGraphCard: true,
      statsShowCyclingRecommendationCard: true,
      statsShowCyclingGeneralCard: true,
      statsShowCyclingBestScoreCard: true,
      statsShowCyclingGraphCard: true,
      showStats: true,
      showDuels: true,
      showCommunityGoals: true,
      showReferrals: true,
      yuScreenV3: true,
      tempGameEnableReferralQRCode: true,
      tempAppMenuNewReferralOption: true,
      tempGameUseStreakSettings: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_6_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_6.data.customerId,
    features: allTogglesTrue.data.features,
  },
} as IDatabaseItem;

export const CUSTOMER_7_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_7.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_9_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_9.data.customerId,
    features: {
      ...allTogglesTrue.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_10_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_10.data.customerId,
    features: {
      showNotifications: true,
      showStreaks: true,
      showCounter: true,
      showBuildNumber: true,
      showSettings: true,
      disableUserEntries: true,
      fitbit: true,
      showConnections: true,
      showLastSynced: true,
      newPassiveValidationRule: true,
      usePassiveMeditation: true,
      statsShowCoinGeneralTotalYearned: true,
      statsShowCoinRecommendationCard: true,
      statsShowCoinGeneralTotalRedeemedCard: true,
      statsShowCoinAchievementCard: true,
      statsShowChallengeGeneralCard: true,
      statsShowChallengeRecommendationCard: true,
      statsShowChallengeComparisonCard: true,
      statsShowStepsRecommendationCard: true,
      statsShowStepsGeneralCard: true,
      statsShowStepsBestScoreCard: true,
      statsShowStepsGraphCard: true,
      statsShowMindfulnessRecommendationCard: true,
      statsShowMindfulnessGeneralCard: true,
      statsShowMindfulnessBestScoreCard: true,
      statsShowMindfulnessGraphCard: true,
      statsShowCyclingRecommendationCard: true,
      statsShowCyclingGeneralCard: true,
      statsShowCyclingBestScoreCard: true,
      statsShowCyclingGraphCard: true,
      showStats: true,
      showDuels: true,
      showCommunityGoals: true,
      tempGameEnableReferralQRCode: true,
      yuScreenV3: true,
      hasCoveaFibActive: true,
      hasBupaDentActive: true,
      showDailyScreenCustomIcon: true,
      tempAppMenuNewReferralOption: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_11_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_11.data.customerId,
    features: {
      ...allTogglesTrue.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_12_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_12.data.customerId,
    features: {
      ...allTogglesTrue.data.features,
    },
  },
} as IDatabaseItem;
