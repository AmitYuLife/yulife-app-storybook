import { generateRandomMongoId } from '../../utils';
import { IDatabaseItem } from '../../types';
import { CUSTOMER_2, CUSTOMER_5, CUSTOMER_6, CUSTOMER_7, CUSTOMER_8 } from '../postgres/customers';;

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