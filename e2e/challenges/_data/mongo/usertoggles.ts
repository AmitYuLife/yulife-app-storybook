import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import {
  mediaContentToggle,
  DEFAULT_TOGGLES,
  allTogglesTrue,
} from "./_templates";

const type = "mongo";
const modelName = "usertoggles";

export const CUSTOMER_1_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_1.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features
    }
  },
} as IDatabaseItem;

export const CUSTOMER_2_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_2.data.customerId,
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
      tempGameTodayYuCoinCheckIns:true,
      showDailySurvey:true,
      showNotificationCentre:true,
      showLangSelector: true,
      showAllLanguages: true,
      tempEnableQuestMapOnboarding:true
    },
  },
} as IDatabaseItem;

export const CUSTOMER_7_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_7.data.customerId,
    features: {
      ...allTogglesTrue.data.features,
      tempGameEnableExtraChallengesHint: true,
      tempGameUseStreakSettings: true,
    }
  },
} as IDatabaseItem;

export const CUSTOMER_8_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_8.data.customerId,
    features: {
      ...allTogglesTrue.data.features,
      tempQuestMapLevelBubbleRedesign:true,
      tempQuestMapLevelReorder:true,
      tempQuestMapLevelBubblePulseAnimation:true,
    }
  },
} as IDatabaseItem;


export const CUSTOMER_9_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_9.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      enableYuScreenV5: true
    }
  },
} as IDatabaseItem;

export const CUSTOMER_10_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_10.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      enableYuScreenV5: true,
      tempTakeAChallengeDirectV2: true,
    }
  },
} as IDatabaseItem;

export const CUSTOMER_11_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_11.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      enableYuScreenV5: true,
      tempTakeAChallengeDirectV2: true,
    }
  },
} as IDatabaseItem;

export const CUSTOMER_13_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_13.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hideSmartHealthScreen: true,
      hideYuMatterScreen: false,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_35_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_35.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
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
    },
  },
} as IDatabaseItem;

export const CUSTOMER_MEDITOPIA_1_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_MEDITOPIA_1.data.customerId,
    features: mediaContentToggle.data.features
  },
} as IDatabaseItem;

export const CUSTOMER_MEDITOPIA_2_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_MEDITOPIA_2.data.customerId,
    features: {
      ...mediaContentToggle.data.features, 
      tempGameEnableExtraChallengesHint:true
    }
  },
} as IDatabaseItem;

export const CUSTOMER_54_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_54.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      yuScreenV4: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_55_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_55.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      yuScreenV4: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_56_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_56.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      yuScreenV4: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_57_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_57.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      yuScreenV4: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_52_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_52.data.customerId,
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
      showBrainGameSudoku: true,
      showFiit: true,
      useNewLeaderboardServices: true,
      newChallengeList:true
    },
  },
} as IDatabaseItem;

export const CUSTOMER_58_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_58.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showBrainGameSudoku: true
    },
  },
} as IDatabaseItem;

export const CUSTOMER_61_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_61.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      tempGameEnableExtraChallengesHint:true
    },
  },
} as IDatabaseItem;

export const CUSTOMER_67_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_67.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showFiit: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_68_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_68.data.customerId,
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
      showFiit: true,
      newMediaPlayer: true
    },
  },
} as IDatabaseItem;

export const CUSTOMER_71_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_71.data.customerId,
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
      passiveCyclingEnabled: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_72_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_72.data.customerId,
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
      passiveCyclingEnabled: true,
      showFiit: true,
      newMediaPlayer: true,
      tempEnableDailyHeroCardsV2: true,
      tempGameUseSettingsConfigForQuestMapV3: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_76_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_76.data.customerId,
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
      yuScreenV4: false,
      showBrainGameSudoku: true,
      showNewLeaderBoard: true,
      useNewLeaderboardServices: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_81_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_81.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showFiit: true,
      showWeeklies: true,
      showGoals: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_84_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_84.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showDuels: true,
      showBrainGameSudoku: true,
      useNewLeaderboardServices: true
    },
  },
} as IDatabaseItem;

export const CUSTOMER_86_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_86.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showBrainGameSudoku: true,
      showNewLeaderBoard: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_132_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_132.data.customerId,
    features: allTogglesTrue.data.features,
  },
} as IDatabaseItem;
