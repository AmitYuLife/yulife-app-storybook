import * as customer from "../postgres/customers";
import { allTogglesTrue, DEFAULT_TOGGLES } from "./_templates";
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_13_GHI_REWARDS, BUSINESS_ACCOUNT_2, BUSINESS_ACCOUNT_5 } from "../postgres/business";

const type = "mongo";
const modelName = "usertoggles";

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
            showYucoinPowerButton: true,
            showNotificationCentre: true,
            showLangSelector: true,
            showAllLanguages: true,
        },
    },
} as IDatabaseItem;

export const CUSTOMER_5_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_5.data.customerId,
        features: {
            ...allTogglesTrue.data.features,
            showYucoinPowerButton: true,
            tempGameTodayYuCoinCheckIns: true,
            showNotificationCentre: true,
            enableYuScreenV5: true,
            tempGameUseStreakSettings: true,
        },
    },
} as IDatabaseItem;

export const CUSTOMER_6_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_6.data.customerId,
        features: allTogglesTrue.data.features,
        tempGameUseStreakSettings: true,
    },
} as IDatabaseItem;

export const CUSTOMER_7_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_7.data.customerId,
        features: {
            ...allTogglesTrue.data.features,
            enableYuScreenV5: true,
            tempGameUseStreakSettings: true,
        },
    },
} as IDatabaseItem;

export const CUSTOMER_8_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_8.data.customerId,
        features: allTogglesTrue.data.features,
        tempGameUseStreakSettings: true,
    },
} as IDatabaseItem;

export const CUSTOMER_15_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_15.data.customerId,
        features: allTogglesTrue.data.features,
        tempGameUseStreakSettings: true,
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
        },
    },
} as IDatabaseItem;

export const BA2_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
        features: {
            tempEnableDailyHeroCardsV2: true,
        },
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
        },
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
            tempGameEnablePreferredNames:true
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

export const CUSTOMER_21_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_21.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      tempGameEnablePreferredNames:true
    },
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
        },
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
        },
    },
} as IDatabaseItem;

export const CUSTOMER_39_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_39.data.customerId,
        features: {
            ...allTogglesTrue.data.features,
            showReferrals: true,
            tempGameEnableReferralQRCode: true,
            tempAppMenuNewReferralOption: true,
            tempMemberDataAllowConcurrentEmployments: true,
        }
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
            useNewLeaderboardServices: true,
        },
    },
} as IDatabaseItem;

export const CUSTOMER_42_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_42.data.customerId,
        features: allTogglesTrue.data.features,
        tempGameUseStreakSettings: true,
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
            showRewardsProducts: true,
        },
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

export const CUSTOMER_73_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_73.data.customerId,
        features: {
            ...allTogglesTrue.data.features,
            yuScreenV4: true,
            useNewLeaderboardServices: true,
            showNotifications: true,
            showNotificationCentre: true,
            showFTUE:true,
            showCommunityGoals: true,
            showGoals: true,
            enableYuScreenV5: true
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
            useNewLeaderboardServices: true,
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
            ...allTogglesTrue.data.features,
            showReferrals: true,
            tempGameEnableReferralQRCode: true,
            tempAppMenuNewReferralOption: true,
            tempShowReferralOnLeaderboard: true
        }
    },
} as IDatabaseItem;

export const CUSTOMER_130_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_130_GHI_LEAVER.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            hasSmartPensionActive: true,
            enableProductGoals: true,
        },
    },
} as IDatabaseItem;

export const CUSTOMER_137_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_137_GHI_REWARDS.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            hasSmartPensionActive: true,
            enableProductGoals: true,
            useHalfModalsForQuestMap: true,
            showQuestMapNotificationIcons: true,
            showGoalProductRewardMilestones: true,
            useStreakDetails: true,
            tempEnableDailyHeroCardsV2:true
        },
    },
} as IDatabaseItem;

export const BUSINESS_13_USER_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        businessAccountId: BUSINESS_ACCOUNT_13_GHI_REWARDS.data.business_account_id,
        toggleType: "business",
        features: { showGoals: true },
    },
} as IDatabaseItem;

export const CUSTOMER_138_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_138.data.customerId,
        features: {
            showNewLeaderBoard: true,
            showLeaderboardSearch: true,
            useNewLeaderboardServices: true,
            ...DEFAULT_TOGGLES.data.features,
        },
    },
} as IDatabaseItem;

export const CUSTOMER_139_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_139.data.customerId,
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
