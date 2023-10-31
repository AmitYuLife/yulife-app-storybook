import * as customer from "../postgres/customers";
import {
  allTogglesTrue,
  allTogglesTrueFor_PLI,
  mediaContentToggle,
  allTogglesTrueFor_PLI_V4,
  DEFAULT_TOGGLES,
} from "./_templates";
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_5 } from "../postgres/business";

const type = "mongo";
const modelName = "usertoggles";

export const CUSTOMER_1_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_1.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features
    }
  },
} as IDatabaseItem;

export const CUSTOMER_2_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
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
      showYucoinPowerButton: true
    },
  },
} as IDatabaseItem;

export const CUSTOMER_3_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_3.data.customerId,
    features: allTogglesTrue.data.features,
  },
} as IDatabaseItem;

export const CUSTOMER_5_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_5.data.customerId,
    features: allTogglesTrue.data.features,
  },
} as IDatabaseItem;

export const CUSTOMER_6_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_6.data.customerId,
    features: allTogglesTrue.data.features,
  },
} as IDatabaseItem;

export const CUSTOMER_7_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_7.data.customerId,
    features: allTogglesTrue.data.features,
  },
} as IDatabaseItem;

export const CUSTOMER_8_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_8.data.customerId,
    features: allTogglesTrue.data.features,
  },
} as IDatabaseItem;

export const CUSTOMER_9_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_9.data.customerId,
    features: allTogglesTrue.data.features,
  },
} as IDatabaseItem;

export const CUSTOMER_10_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_10.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hideSmartHealthScreen: true,
      hideYuMatterScreen: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_12_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_12.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hideSmartHealthScreen: true,
      hideYuMatterScreen: true,
      unitySurge: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_13_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
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

export const CUSTOMER_14_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_14.data.customerId,
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
      statsShowCyclingRecommendationCard: false,
      statsShowCyclingGeneralCard: false,
      statsShowCyclingBestScoreCard: false,
      statsShowCyclingGraphCard: false,
      showStats: true,
      showDuels: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_15_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_15.data.customerId,
    features: allTogglesTrue.data.features,
  },
} as IDatabaseItem;

export const CUSTOMER_16_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_16.data.customerId,
    features: {
      showNewLeaderBoard: true,
      showLeaderboardSearch: true,
      useNewLeaderboardServices: true,
      ...DEFAULT_TOGGLES.data.features,
    }
  },
} as IDatabaseItem;

export const CUSTOMER_17_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_17.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      useNewLeaderboardServices: true,
      showNewLeaderBoard: true,
      showLeaderboardSearch: true,
    }
  },
} as IDatabaseItem;

export const CUSTOMER_18_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_18.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hideSmartHealthScreen: false,
      hideYuMatterScreen: true,
      showDuels: true,
      showNewLeaderBoard: true,
      showLeaderboardSearch: true,
      useNewLeaderboardServices: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_19_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_19.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showDuels: true,
      useNewLeaderboardServices: true,
      showNewLeaderBoard: true,
      showLeaderboardSearch: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_20_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
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

export const CUSTOMER_22_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_22.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_23_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_23.data.customerId,
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
      hideSmartHealthScreen: false,
      newGamePlus: true,
      hideYuMatterScreen: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_24_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_24.data.customerId,
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
      hideYuMatterScreen: false,
      newGamePlus: true,
      unitySurge: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_26_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_26.data.customerId,
    features: allTogglesTrue.data.features,
  },
} as IDatabaseItem;

export const CUSTOMER_27_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_27.data.customerId,
    features: {
      ...allTogglesTrue.data.features,
      useNewLeaderboardServices: true,
    } 
  },
} as IDatabaseItem;

export const CUSTOMER_28_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_28.data.customerId,
    features: {
      ...allTogglesTrue.data.features,
      useNewLeaderboardServices: true,
    } 
  },
} as IDatabaseItem;

export const CUSTOMER_29_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_29.data.customerId,
    features: allTogglesTrue.data.features,
  },
} as IDatabaseItem;

export const CUSTOMER_30_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_30.data.customerId,
    features: allTogglesTrue.data.features,
  },
} as IDatabaseItem;

export const CUSTOMER_31_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_31.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      yuScreenV3: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_32_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_32.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      yuScreenV3: true,
      hasBeneficiariesEnabled: true,
      yuScreenV4: false,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_33_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_33.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      yuScreenV3: true,
      hasBeneficiariesEnabled: true,
      yuScreenV4: false,
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
      showBrainGameSudoku: true
    },
  },
} as IDatabaseItem;

export const CUSTOMER_ALPHA_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_ALPHA.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      yuScreenV3: true,
      yuScreenV4: false,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_35_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_35.data.customerId,
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
    },
  },
} as IDatabaseItem;

export const CUSTOMER_36_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_36.data.customerId,
    features: allTogglesTrue.data.features,
  },
} as IDatabaseItem;

export const CUSTOMER_37_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_37.data.customerId,
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
      hasCoveaFibActive: true,
      hasBupaDentActive: true,
      showDailyScreenCustomIcon: true,
      yuScreenV4: false,
    },
    configurations: {
      companyDailyScreenCustomIconText: "£10",
    },
  },
} as IDatabaseItem;

export const BA5_USER_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    configurations: { appOnboardingRewardAmount: 420 },
  },
} as IDatabaseItem;

export const CUSTOMER_39_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_39.data.customerId,
    features: allTogglesTrue.data.features,
  },
} as IDatabaseItem;

export const CUSTOMER_40_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_40.data.customerId,
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
      useNewLeaderboardServices: true
    },
  },
} as IDatabaseItem;

export const CUSTOMER_41_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_41.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_MEDITOPIA_1_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_MEDITOPIA_1.data.customerId,
    features: mediaContentToggle.data.features
  },
} as IDatabaseItem;

export const CUSTOMER_MEDITOPIA_2_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_MEDITOPIA_2.data.customerId,
    features: mediaContentToggle.data.features
  },
} as IDatabaseItem;

export const CUSTOMER_MEDITOPIA_3_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_MEDITOPIA_3.data.customerId,
    features: mediaContentToggle.data.features,
  },
} as IDatabaseItem;

export const CUSTOMER_42_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_42.data.customerId,
    features: allTogglesTrue.data.features,
  },
} as IDatabaseItem;

export const CUSTOMER_43_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_43.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      yuScreenV4: true,
      hasCoveaFibActive: false,
      hasBupaDentActive: false,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_44_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_44.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      yuScreenV4: true,
      hasCoveaFibActive: true,
      hasBupaDentActive: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_45_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_45.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      yuScreenV4: true,
      hasCoveaFibActive: true,
      hasBupaDentActive: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_46_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_46.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      yuScreenV4: true,
      hasCoveaFibActive: true,
      hasBupaDentActive: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_48_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_48.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      yuScreenV4: true,
      hasCoveaFibActive: true,
      hasBupaDentActive: true,
      showYuScreenWellbeingButton: true
    },
  },
} as IDatabaseItem;

export const CUSTOMER_49_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_49.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      yuScreenV4: true,
      hasBupaDentActive: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_51_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_51.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      yuScreenV4: true,
      hasBupaDentActive: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_53_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_53.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      yuScreenV4: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_54_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
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
  type: "mongo",
  modelName: "usertoggles",
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
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_55.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      yuScreenV4: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_57_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_55.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      yuScreenV4: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_PLI_2_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_PLI_2.data.customerId,
    features: allTogglesTrueFor_PLI.data.features,
  },
} as IDatabaseItem;

export const CUSTOMER_PLI_3_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_PLI_3.data.customerId,
    features: allTogglesTrueFor_PLI.data.features
  },
} as IDatabaseItem;

export const CUSTOMER_PLI_4_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_PLI_4.data.customerId,
    features: allTogglesTrueFor_PLI.data.features
  },
} as IDatabaseItem;

export const CUSTOMER_PLI_5_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_PLI_5.data.customerId,
    features: allTogglesTrueFor_PLI.data.features
  },
} as IDatabaseItem;

export const CUSTOMER_PLI_6_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_PLI_6.data.customerId,
    features: allTogglesTrueFor_PLI_V4.data.features
  },
} as IDatabaseItem;

export const CUSTOMER_PLI_7_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_PLI_7.data.customerId,
    features: allTogglesTrueFor_PLI_V4.data.features
  },
} as IDatabaseItem;

export const CUSTOMER_PLI_9_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_PLI_9.data.customerId,
    features: allTogglesTrueFor_PLI_V4.data.features
  },
} as IDatabaseItem;

export const CUSTOMER_PLI_10_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_PLI_10.data.customerId,
    features: allTogglesTrueFor_PLI_V4.data.features
  },
} as IDatabaseItem;

export const CUSTOMER_47_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_47.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showDuels: true,
      showInspect: true,
      passiveCyclingEnabled: true,
      showNewLeaderBoard: true,
      showLeaderboardSearch: true,
      useNewLeaderboardServices: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_50_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_50.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showDuels: true,
      showInspect: true,
      passiveCyclingEnabled: true,
      showNewLeaderBoard: true,
      showLeaderboardSearch: true,
      useNewLeaderboardServices: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_52_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
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
      newChallengeList: true,
      showBrainGameSudoku: true,
      showFiit: true,
      useNewLeaderboardServices: true
    },
  },
} as IDatabaseItem;

export const CUSTOMER_58_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_58.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showBrainGameSudoku: true
    },
  },
} as IDatabaseItem;

export const CUSTOMER_60_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_60.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_61_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_61.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_63_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_63.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_64_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_64.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showFiit: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_65_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_65.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showTodayEarningsScreen: true,
      yuScreenV3: true,
      showPermissionSettings: true,
      showGoals: true,
      passiveCyclingEnabled: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_66_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_66.data.customerId,
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
      showFiit: true
    },
  },
} as IDatabaseItem;

export const CUSTOMER_67_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
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
  type: "mongo",
  modelName: "usertoggles",
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

export const CUSTOMER_69_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_69.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showFiit: true,
      enableChallengeBonuses: true,
      newChallengeList: true
    },
  },
} as IDatabaseItem;

export const CUSTOMER_70_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_70.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showFiit: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_71_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
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
  type: "mongo",
  modelName: "usertoggles",
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
      newMediaPlayer: true
    },
  },
} as IDatabaseItem;

export const CUSTOMER_73_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_73.data.customerId,
    features: {
      ...allTogglesTrue.data.features,
      yuScreenV3: true,
      yuScreenV4: false,
      useNewLeaderboardServices: true
    },
  },
} as IDatabaseItem;

export const CUSTOMER_74_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_74.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      yuScreenV3: true,
      yuScreenV4: false,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_75_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_75.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hideSmartHealthScreen: false,
      hideYuMatterScreen: true,
      showDuels: true,
      yuScreenV3: true,
      yuScreenV4: false,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_76_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
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
      useNewLeaderboardServices: true
    },
  },
} as IDatabaseItem;

export const CUSTOMER_77_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_77.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hideSmartHealthScreen: false,
      hideYuMatterScreen: true,
      showDuels: true,
      yuScreenV3: true,
      yuScreenV4: false,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_DENTAL_1_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_DENTAL_1.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hideSmartHealthScreen: false,
      hideYuMatterScreen: true,
      showDuels: true,
      yuScreenV3: true,
      yuScreenV4: false,
      hasCoveaFibActive: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_DENTAL_2_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_DENTAL_2.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hideSmartHealthScreen: false,
      hideYuMatterScreen: true,
      showDuels: true,
      yuScreenV3: true,
      yuScreenV4: false,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_78_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_78.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showFiit: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_79_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_79.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showFiit: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_80_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_80.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showFiit: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_81_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
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

export const CUSTOMER_83_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_83.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showFiit: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_84_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
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

export const CUSTOMER_DENTAL_85_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_85.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hideSmartHealthScreen: false,
      hideYuMatterScreen: true,
      showDuels: true,
      hasBupaDentActive: true,
      yuScreenV4: true,
      hasCoveaFibActive: true,
      showBrainGameSudoku: true
    },
  },
} as IDatabaseItem;

export const CUSTOMER_FIIT_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_FIIT.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showFiit: true,
      enableFiitInApp: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_86_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
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


export const CUSTOMER_LEAVER_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
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

export const CUSTOMER_FUTURE_PRODUCT_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_FUTURE_PRODUCT.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showFiit: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_GHI_PRODUCT_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_GHI.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showFiit: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_89_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_89.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showFiit: true,
      enableChallengeBonuses: true,
      newChallengeList: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_90_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_90.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showFiit: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_91_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_91.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showFiit: true,
      showBrainGameSudoku: true
    },
  },
} as IDatabaseItem;

export const CUSTOMER_92_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_92.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_93_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_93.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showFiit: true,
      showBrainGameSudoku: true
    },
  },
} as IDatabaseItem;

export const CUSTOMER_94_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_94.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      yuScreenV3: true,
      hasBeneficiariesEnabled: false,
      showCommunityGoals: true,
      showGoals: true,
      useCoreChallengesService: true,
      useActiveChallengesService: true,
      showBrainGameSudoku: true
    },
  },
} as IDatabaseItem;

export const CUSTOMER_95_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_95.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_96_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_96.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_97_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_97.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_98_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_98.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_99_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_99.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_100_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_100.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_101_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_101.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_102_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_102.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_103_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_103.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_104_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_104.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_105_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_105.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_106_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_106.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_107_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_107.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_108_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_108.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_109_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_109.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      showOnboardingPensionModal: true
    },
  },
} as IDatabaseItem;

export const CUSTOMER_110_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_110.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      showOnboardingPensionModal: true
    },
  },
} as IDatabaseItem;

export const CUSTOMER_111_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
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
  type: "mongo",
  modelName: "usertoggles",
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
  type: "mongo",
  modelName: "usertoggles",
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
  type: "mongo",
  modelName: "usertoggles",
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

export const CUSTOMER_115_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_115.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      showOnboardingPensionModal: true
    },
  },
} as IDatabaseItem;

export const CUSTOMER_116_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_116_GHI_REWARDS.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      enableProductGoals: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_117_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_117_GHI_REWARDS.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      enableProductGoals: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_118_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_118_GHI_REWARDS.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      enableProductGoals: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_119_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_119_GHI_REWARDS.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      enableProductGoals: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_120_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_120_GHI_REWARDS.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      enableProductGoals: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_121_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_121_GHI_REWARDS.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      enableProductGoals: true,
    },
  },
} as IDatabaseItem;


export const CUSTOMER_122_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_122.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showBrainGameSudoku: true,
      enableChallengeBonuses: true,
      newChallengeList: true,
      showFiit: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_123_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_123_MPP.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      ...allTogglesTrueFor_PLI.data.features,
      showBrainGameSudoku: true,
      enableChallengeBonuses: true,
      newChallengeList: true,
      showFiit: true,
      showYuScreenFurtherProductList: true,
      hasCoveaFibActive: true,
      hasBupaDentActive: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_124_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_124_MPP.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      ...allTogglesTrueFor_PLI.data.features,
      showBrainGameSudoku: true,
      enableChallengeBonuses: true,
      newChallengeList: true,
      showFiit: true,
      showYuScreenFurtherProductList: true,
      hasCoveaFibActive: true,
      hasBupaDentActive: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_125_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_125.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      yuScreenV4: true,
      hasBupaDentActive: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_126_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
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