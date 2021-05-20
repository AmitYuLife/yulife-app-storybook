
import { allTogglesTrue } from "./_templates";
import { CUSTOMER_2, CUSTOMER_5, CUSTOMER_6, CUSTOMER_7, CUSTOMER_8, CUSTOMER_9, CUSTOMER_14, CUSTOMER_3, CUSTOMER_15, CUSTOMER_16, CUSTOMER_17, CUSTOMER_20, CUSTOMER_23, CUSTOMER_10, CUSTOMER_12, CUSTOMER_13, CUSTOMER_18, CUSTOMER_22, CUSTOMER_24, CUSTOMER_19, CUSTOMER_26, CUSTOMER_27, CUSTOMER_28, CUSTOMER_29, CUSTOMER_30, CUSTOMER_31, CUSTOMER_32, CUSTOMER_33, CUSTOMER_ALPHA, CUSTOMER_34 } from '../postgres/customers';
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

const type = "mongo"
const modelName = "usertoggles"


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
            "showSettings": true,
        }
    }
} as IDatabaseItem

export const CUSTOMER_3_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_3.data.customerId,
        features: allTogglesTrue.data.features
    }
} as IDatabaseItem

export const CUSTOMER_5_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_5.data.customerId,
        features: allTogglesTrue.data.features
    }
} as IDatabaseItem

export const CUSTOMER_6_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_6.data.customerId,
        features: allTogglesTrue.data.features
    }
} as IDatabaseItem

export const CUSTOMER_7_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_7.data.customerId,
        features: allTogglesTrue.data.features
    }
} as IDatabaseItem

export const CUSTOMER_8_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_8.data.customerId,
        features: allTogglesTrue.data.features
    }
} as IDatabaseItem

export const CUSTOMER_9_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_9.data.customerId,
        features: allTogglesTrue.data.features
    }
} as IDatabaseItem

export const CUSTOMER_10_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_10.data.customerId,
        features: {
            hideSmartHealthScreen: true,
            hideYuMatterScreen: true, 
            hasFibActive: true, 
        },
    }
} as IDatabaseItem

export const CUSTOMER_12_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_12.data.customerId,
        features: {
            hideSmartHealthScreen: true, hideYuMatterScreen: true, unitySurge: true},
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
            showDuels: true
        }

    }
} as IDatabaseItem


export const CUSTOMER_15_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_15.data.customerId,
        features: allTogglesTrue.data.features
    }
} as IDatabaseItem

export const CUSTOMER_16_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_16.data.customerId,
        features: allTogglesTrue.data.features
    }
} as IDatabaseItem

export const CUSTOMER_17_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_17.data.customerId,
        features: allTogglesTrue.data.features
    }
} as IDatabaseItem

export const CUSTOMER_18_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_18.data.customerId,
        features: {
            hideSmartHealthScreen: false, 
            hideYuMatterScreen: true, 
            showDuels: true
         },
    }
} as IDatabaseItem

export const CUSTOMER_19_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_19.data.customerId,
        features: {
            showDuels: true
        },
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
            hideYuMatterScreen: true,
            showDuels: true,
            showCommunityGoals:true
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
            hideYuMatterScreen: false,
            newGamePlus:true,
            unitySurge:true,
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
            hasFibActive: true,
        }
    }
} as IDatabaseItem

export const CUSTOMER_24_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_24.data.customerId,
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
            hideYuMatterScreen: false,
            newGamePlus: true,
            unitySurge:true
        }
    }
} as IDatabaseItem

export const CUSTOMER_26_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_26.data.customerId,
        features: allTogglesTrue.data.features
    }
} as IDatabaseItem

export const CUSTOMER_27_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_27.data.customerId,
        features: allTogglesTrue.data.features
    }
} as IDatabaseItem

export const CUSTOMER_28_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_28.data.customerId,
        features: allTogglesTrue.data.features
    }
} as IDatabaseItem

export const CUSTOMER_29_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_29.data.customerId,
        features: allTogglesTrue.data.features
    }
} as IDatabaseItem

export const CUSTOMER_30_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_30.data.customerId,
        features: allTogglesTrue.data.features
    }
} as IDatabaseItem

export const CUSTOMER_31_TOGGLES = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: CUSTOMER_31.data.customerId,
        features:{
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
        hideYuMatterScreen: false,
        newGamePlus: true,
        unitySurge: true,
        yuScreenV3: true
        }
    }
} as IDatabaseItem


export const CUSTOMER_32_TOGGLES = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_32.data.customerId,
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
            hideYuMatterScreen: false,
            newGamePlus: true,
            unitySurge: true,
            yuScreenV3: true
        }
    }
} as IDatabaseItem

export const CUSTOMER_33_TOGGLES = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_33.data.customerId,
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
            hideYuMatterScreen: false,
            newGamePlus: true,
            unitySurge: true,
            yuScreenV3: true,
            hasBeneficiariesEnabled: true
        }
    }
} as IDatabaseItem

export const CUSTOMER_34_TOGGLES = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_34.data.customerId,
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
            hideYuMatterScreen: false,
            newGamePlus: true,
            unitySurge: true,
            yuScreenV3: true,
            hasBeneficiariesEnabled: false
        }
    }
} as IDatabaseItem


export const CUSTOMER_ALPHA_TOGGLES = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: CUSTOMER_ALPHA.data.customerId,
        features:{
            yuScreenV3: true
        }
    }
} as IDatabaseItem