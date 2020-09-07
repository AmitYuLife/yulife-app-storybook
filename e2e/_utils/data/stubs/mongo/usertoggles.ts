import { generateRandomMongoId } from '../../utils';
import { IDatabaseItem } from '../../types';
import { CUSTOMER_2, CUSTOMER_5, CUSTOMER_6, CUSTOMER_7, CUSTOMER_8, CUSTOMER_9, CUSTOMER_14, CUSTOMER_3, CUSTOMER_15, CUSTOMER_16, CUSTOMER_17, CUSTOMER_20, CUSTOMER_23, CUSTOMER_10, CUSTOMER_12, CUSTOMER_13, CUSTOMER_18, CUSTOMER_22, CUSTOMER_21 } from '../postgres/customers';;

const allTogglesTrue = {
    "showTodayYucoin": true,
    "showActivity": true,
    "showNotifications": true,
    "showStreaks": true,
    "showCompletedLevel": true,
    "showCounter": true,
    "showBuildNumber": true,
    "showSettings": true,
    "showCreateLeaderboard": true,
    "showAdvancedLeaderboards": true,
    "disableUserEntries": true,
    "fitbit": true,
    "showConnections": true,
    "showLastSynced": true,
    "newPassiveValidationRule": true,
    "showWegiftPicker": true,
    "usePassiveMeditation": true,
    "statsShowCoinGeneralTotalYearned": true,
    "statsShowCoinRecommendationCard": true,
    "statsShowCoinGeneralTotalRedeemedCard": true,
    "statsShowCoinAchievementCard": true,
    "statsShowChallengeGeneralCard": true,
    "statsShowChallengeRecommendationCard": true,
    "statsShowChallengeComparisonCard": true,
    "statsShowStepsRecommendationCard": true,
    "statsShowStepsGeneralCard": true,
    "statsShowStepsBestScoreCard": true,
    "statsShowStepsGraphCard": true,
    "statsShowMindfulnessRecommendationCard": true,
    "statsShowMindfulnessGeneralCard": true,
    "statsShowMindfulnessBestScoreCard": true,
    "statsShowMindfulnessGraphCard": true,
    "statsShowCyclingRecommendationCard": true,
    "statsShowCyclingGeneralCard": true,
    "statsShowCyclingBestScoreCard": true,
    "statsShowCyclingGraphCard": true,
    "showStats": true
}

export const CUSTOMER_2_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_2.data.customerId,
        features: {
            showStats: true,
            showActivity: true,
            "statsShowCoinGeneralTotalYearned": true,
            "statsShowCoinRecommendationCard": true,
            "statsShowCoinGeneralTotalRedeemedCard": true,
            "statsShowCoinAchievementCard": true,
            "statsShowChallengeGeneralCard": true,
            "statsShowChallengeRecommendationCard": true,
            "statsShowChallengeComparisonCard": true,
            "statsShowStepsRecommendationCard": true,
            "statsShowStepsGeneralCard": true,
            "statsShowStepsBestScoreCard": true,
            "statsShowStepsGraphCard": true,
            "statsShowMindfulnessRecommendationCard": true,
            "statsShowMindfulnessGeneralCard": true,
            "statsShowMindfulnessBestScoreCard": true,
            "statsShowMindfulnessGraphCard": true,
            "statsShowCyclingRecommendationCard": true,
            "statsShowCyclingGeneralCard": true,
            "statsShowCyclingBestScoreCard": true,
            "statsShowCyclingGraphCard": true,
            "showSettings": true

        }
    }
} as IDatabaseItem

export const CUSTOMER_3_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_3.data.customerId,
        features: allTogglesTrue
    }
} as IDatabaseItem

export const CUSTOMER_5_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_5.data.customerId,
        features: allTogglesTrue
    }
} as IDatabaseItem

export const CUSTOMER_6_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_6.data.customerId,
        features: allTogglesTrue
    }
} as IDatabaseItem

export const CUSTOMER_7_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_7.data.customerId,
        features: allTogglesTrue
    }
} as IDatabaseItem

export const CUSTOMER_8_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_8.data.customerId,
        features: allTogglesTrue
    }
} as IDatabaseItem

export const CUSTOMER_9_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_9.data.customerId,
        features: allTogglesTrue
    }
} as IDatabaseItem

export const CUSTOMER_10_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_10.data.customerId,
        features: { hideSmartHealthScreen: true, hideYuMatterScreen: true },
    }
} as IDatabaseItem

export const CUSTOMER_12_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_12.data.customerId,
        features: { hideSmartHealthScreen: true, hideYuMatterScreen: true },
    }
} as IDatabaseItem

export const CUSTOMER_13_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_13.data.customerId,
        features: { hideSmartHealthScreen: true, hideYuMatterScreen: false },
    }
} as IDatabaseItem



export const CUSTOMER_14_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_14.data.customerId,
        features: {
            "showTodayYucoin": true,
            "showActivity": true,
            "showNotifications": true,
            "showStreaks": true,
            "showCompletedLevel": true,
            "showCounter": true,
            "showBuildNumber": true,
            "showSettings": true,
            "showCreateLeaderboard": true,
            "showAdvancedLeaderboards": true,
            "disableUserEntries": true,
            "fitbit": true,
            "showConnections": true,
            "showLastSynced": true,
            "newPassiveValidationRule": true,
            "showWegiftPicker": true,
            "usePassiveMeditation": true,
            "statsShowCoinGeneralTotalYearned": true,
            "statsShowCoinRecommendationCard": true,
            "statsShowCoinGeneralTotalRedeemedCard": true,
            "statsShowCoinAchievementCard": true,
            "statsShowChallengeGeneralCard": true,
            "statsShowChallengeRecommendationCard": true,
            "statsShowChallengeComparisonCard": true,
            "statsShowStepsRecommendationCard": true,
            "statsShowStepsGeneralCard": true,
            "statsShowStepsBestScoreCard": true,
            "statsShowStepsGraphCard": true,
            "statsShowMindfulnessRecommendationCard": true,
            "statsShowMindfulnessGeneralCard": true,
            "statsShowMindfulnessBestScoreCard": true,
            "statsShowMindfulnessGraphCard": true,
            "statsShowCyclingRecommendationCard": false,
            "statsShowCyclingGeneralCard": false,
            "statsShowCyclingBestScoreCard": false,
            "statsShowCyclingGraphCard": false,
            "showStats": true,
        }

    }
} as IDatabaseItem


export const CUSTOMER_15_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_15.data.customerId,
        features: allTogglesTrue
    }
} as IDatabaseItem

export const CUSTOMER_16_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_16.data.customerId,
        features: allTogglesTrue
    }
} as IDatabaseItem

export const CUSTOMER_17_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_17.data.customerId,
        features: allTogglesTrue
    }
} as IDatabaseItem

export const CUSTOMER_18_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_18.data.customerId,
        features: { hideSmartHealthScreen: false, hideYuMatterScreen: true },
    }
} as IDatabaseItem

export const CUSTOMER_20_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_20.data.customerId,
        features: {
            "showTodayYucoin": true,
            "showActivity": true,
            "showNotifications": true,
            "showStreaks": true,
            "showCompletedLevel": true,
            "showCounter": true,
            "showBuildNumber": true,
            "showSettings": true,
            "showCreateLeaderboard": true,
            "showAdvancedLeaderboards": true,
            "disableUserEntries": true,
            "fitbit": true,
            "showConnections": true,
            "showLastSynced": true,
            "newPassiveValidationRule": true,
            "showWegiftPicker": true,
            "usePassiveMeditation": true,
            "statsShowCoinGeneralTotalYearned": true,
            "statsShowCoinRecommendationCard": true,
            "statsShowCoinGeneralTotalRedeemedCard": true,
            "statsShowCoinAchievementCard": true,
            "statsShowChallengeGeneralCard": true,
            "statsShowChallengeRecommendationCard": true,
            "statsShowChallengeComparisonCard": true,
            "statsShowStepsRecommendationCard": true,
            "statsShowStepsGeneralCard": true,
            "statsShowStepsBestScoreCard": true,
            "statsShowStepsGraphCard": true,
            "statsShowMindfulnessRecommendationCard": true,
            "statsShowMindfulnessGeneralCard": true,
            "statsShowMindfulnessBestScoreCard": true,
            "statsShowMindfulnessGraphCard": true,
            "statsShowCyclingRecommendationCard": true,
            "statsShowCyclingGeneralCard": true,
            "statsShowCyclingBestScoreCard": true,
            "statsShowCyclingGraphCard": true,
            "showStats": true,
            hideSmartHealthScreen: true,
            hideYuMatterScreen: true

        },
    }
} as IDatabaseItem

export const CUSTOMER_22_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_22.data.customerId,
        features: {
            "showTodayYucoin": true,
            "showActivity": true,
            "showNotifications": true,
            "showStreaks": true,
            "showCompletedLevel": true,
            "showCounter": true,
            "showBuildNumber": true,
            "showSettings": true,
            "showCreateLeaderboard": true,
            "showAdvancedLeaderboards": true,
            "disableUserEntries": true,
            "fitbit": true,
            "showConnections": true,
            "showLastSynced": true,
            "newPassiveValidationRule": true,
            "showWegiftPicker": true,
            "usePassiveMeditation": true,
            "statsShowCoinGeneralTotalYearned": true,
            "statsShowCoinRecommendationCard": true,
            "statsShowCoinGeneralTotalRedeemedCard": true,
            "statsShowCoinAchievementCard": true,
            "statsShowChallengeGeneralCard": true,
            "statsShowChallengeRecommendationCard": true,
            "statsShowChallengeComparisonCard": true,
            "statsShowStepsRecommendationCard": true,
            "statsShowStepsGeneralCard": true,
            "statsShowStepsBestScoreCard": true,
            "statsShowStepsGraphCard": true,
            "statsShowMindfulnessRecommendationCard": true,
            "statsShowMindfulnessGeneralCard": true,
            "statsShowMindfulnessBestScoreCard": true,
            "statsShowMindfulnessGraphCard": true,
            "statsShowCyclingRecommendationCard": true,
            "statsShowCyclingGeneralCard": true,
            "statsShowCyclingBestScoreCard": true,
            "statsShowCyclingGraphCard": true,
            "showStats": true,
            hideSmartHealthScreen: true,
            hideYuMatterScreen: false

        }
    }
} as IDatabaseItem

export const CUSTOMER_23_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_23.data.customerId,
        features: {
            "showTodayYucoin": true,
            "showActivity": true,
            "showNotifications": true,
            "showStreaks": true,
            "showCompletedLevel": true,
            "showCounter": true,
            "showBuildNumber": true,
            "showSettings": true,
            "showCreateLeaderboard": true,
            "showAdvancedLeaderboards": true,
            "disableUserEntries": true,
            "fitbit": true,
            "showConnections": true,
            "showLastSynced": true,
            "newPassiveValidationRule": true,
            "showWegiftPicker": true,
            "usePassiveMeditation": true,
            "statsShowCoinGeneralTotalYearned": true,
            "statsShowCoinRecommendationCard": true,
            "statsShowCoinGeneralTotalRedeemedCard": true,
            "statsShowCoinAchievementCard": true,
            "statsShowChallengeGeneralCard": true,
            "statsShowChallengeRecommendationCard": true,
            "statsShowChallengeComparisonCard": true,
            "statsShowStepsRecommendationCard": true,
            "statsShowStepsGeneralCard": true,
            "statsShowStepsBestScoreCard": true,
            "statsShowStepsGraphCard": true,
            "statsShowMindfulnessRecommendationCard": true,
            "statsShowMindfulnessGeneralCard": true,
            "statsShowMindfulnessBestScoreCard": true,
            "statsShowMindfulnessGraphCard": true,
            "statsShowCyclingRecommendationCard": true,
            "statsShowCyclingGeneralCard": true,
            "statsShowCyclingBestScoreCard": true,
            "statsShowCyclingGraphCard": true,
            "showStats": true,
            hideSmartHealthScreen: false,
            hideYuMatterScreen: true,
            hasFibActive: true
        }
    }
} as IDatabaseItem
