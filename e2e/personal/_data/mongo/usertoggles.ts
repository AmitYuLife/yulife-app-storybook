import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import { DEFAULT_TOGGLES } from "./_templates";

const type = "mongo";
const modelName = "usertoggles";

export const CUSTOMER_20_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_20.data.customerId,
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
      hideSmartHealthScreen: true,
      hideYuMatterScreen: true,
      showDuels: true,
      showCommunityGoals: true,
      showGoals: true,
      useCoreChallengesService: true,
      useActiveChallengesService: true,
      useNewLeaderboardServices: true,
      showNewLeaderBoard: true,
      showLeaderboardSearch: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_34_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_34.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      yuScreenV3: true,
      hasBeneficiariesEnabled: false,
      showCommunityGoals: true,
      showGoals: true,
      useCoreChallengesService: true,
      useActiveChallengesService: true,
      showBrainGameSudoku: true,
      newChallengeList: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_LEAVER_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_LEAVER.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showFiit: true,
      useNewLeaderboardServices: true,
      showNewLeaderBoard: true,
      showLeaderboardSearch: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_111_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_111.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      showOnboardingPensionModal: true
    },
  },
} as IDatabaseItem;

export const CUSTOMER_112_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_112.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      showOnboardingPensionModal: true
    },
  },
} as IDatabaseItem;

export const CUSTOMER_113_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_113.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      showOnboardingPensionModal: true
    },
  },
} as IDatabaseItem;

export const CUSTOMER_114_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_114.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      showOnboardingPensionModal: true
    },
  },
} as IDatabaseItem;

export const CUSTOMER_126_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_126_LEAVER_WELLBEING.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      yuScreenV4: true,
      hasCoveaFibActive: true,
      hasBupaDentActive: true,
      showYuScreenWellbeingButton: true
    },
  },
} as IDatabaseItem;

export const CUSTOMER_STORE_ACCESS_PERIOD_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_STORE_ACCESS_PERIOD.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_STORE_ACCESS_DENIED_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_STORE_ACCESS_DENIED.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;