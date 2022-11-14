
import { CUSTOMER_2, CUSTOMER_5, CUSTOMER_6, CUSTOMER_7, CUSTOMER_8, CUSTOMER_9, CUSTOMER_14, CUSTOMER_3, CUSTOMER_15, CUSTOMER_16, CUSTOMER_17, CUSTOMER_20, CUSTOMER_23, CUSTOMER_10, CUSTOMER_12, CUSTOMER_13, CUSTOMER_18, CUSTOMER_22, CUSTOMER_24, CUSTOMER_19, CUSTOMER_26, CUSTOMER_27, CUSTOMER_28, CUSTOMER_29, CUSTOMER_30, CUSTOMER_31, CUSTOMER_32, CUSTOMER_33, CUSTOMER_ALPHA, CUSTOMER_34, CUSTOMER_35, CUSTOMER_36, CUSTOMER_37, CUSTOMER_39, CUSTOMER_40, CUSTOMER_41, CUSTOMER_42, CUSTOMER_43, CUSTOMER_44, CUSTOMER_45, CUSTOMER_46, CUSTOMER_48, CUSTOMER_49, CUSTOMER_50, CUSTOMER_51, CUSTOMER_53, CUSTOMER_MEDITOPIA_1, CUSTOMER_MEDITOPIA_2, CUSTOMER_MEDITOPIA_3, CUSTOMER_PLI_2, CUSTOMER_PLI_3, CUSTOMER_PLI_4, CUSTOMER_PLI_5, CUSTOMER_PLI_6, CUSTOMER_PLI_7, CUSTOMER_PLI_9, CUSTOMER_PLI_10, CUSTOMER_DENTAL_1, CUSTOMER_47, CUSTOMER_52, CUSTOMER_60, CUSTOMER_61, CUSTOMER_63, CUSTOMER_64, CUSTOMER_66, CUSTOMER_65, CUSTOMER_67, CUSTOMER_68, CUSTOMER_69, CUSTOMER_70, CUSTOMER_71 } from '../postgres/customers';
import { allTogglesTrue, allTogglesTrueFor_PLI, mediaContentToggle, allTogglesTrueFor_PLI_V4, DEFAULT_TOGGLES } from "./_templates";
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_4, BUSINESS_ACCOUNT_5 } from "../postgres/business";

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
            "showNotifications": true,
            "showTodayEarningsScreen": true,
            "showGoals": true,
            "yuScreenV3": true,
            "showPermissionSettings": true
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
            ...DEFAULT_TOGGLES.data.features, 
            hideSmartHealthScreen: true, 
            hideYuMatterScreen: true
        }   
    }
} as IDatabaseItem

export const CUSTOMER_12_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_12.data.customerId,
        features: {
        ...DEFAULT_TOGGLES.data.features,
            hideSmartHealthScreen: true, 
            hideYuMatterScreen: true, 
            unitySurge: true
        } 
    }
} as IDatabaseItem

export const CUSTOMER_13_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_13.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            hideSmartHealthScreen: true, 
            hideYuMatterScreen: false ,
        }
    }
} as IDatabaseItem

export const CUSTOMER_14_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_14.data.customerId,
        features: {
            "showNotifications": true,
            "showStreaks": true,
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
        features: 
        {
            ...DEFAULT_TOGGLES.data.features,
            hideSmartHealthScreen: false,
            hideYuMatterScreen: true,
            showDuels: true
        }  
    }
} as IDatabaseItem

export const CUSTOMER_19_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_19.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            showDuels: true
        }
    }
} as IDatabaseItem

export const CUSTOMER_20_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_20.data.customerId,
        features: {
            "showNotifications": true,
            "showStreaks": true,
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
            showCommunityGoals: true,
            "showGoals": true,
            useCoreChallengesService: true,
            useActiveChallengesService: true
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
        ...DEFAULT_TOGGLES.data.features,
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
            "showNotifications": true,
            "showStreaks": true,
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
            newGamePlus: true,
            hideYuMatterScreen: true,
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
            "showNotifications": true,
            "showStreaks": true,
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
            unitySurge: true
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
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_31.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
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
            ...DEFAULT_TOGGLES.data.features,
            yuScreenV3: true,
            hasBeneficiariesEnabled: true
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
            ...DEFAULT_TOGGLES.data.features,
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
            ...DEFAULT_TOGGLES.data.features,
            yuScreenV3: true,
            hasBeneficiariesEnabled: false,
            showCommunityGoals: true,
            "showGoals": true,
            useCoreChallengesService: true,
            useActiveChallengesService: true
        }
    }
} as IDatabaseItem


export const CUSTOMER_ALPHA_TOGGLES = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_ALPHA.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            yuScreenV3: true
        }
    }
} as IDatabaseItem

export const CUSTOMER_35_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_35.data.customerId,
        features: {
            "showNotifications": true,
            "showStreaks": true,
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
            "showDuels": true,
            showCommunityGoals: true,
            showReferrals: true,
            yuScreenV3: true,
        }
    }
} as IDatabaseItem

export const CUSTOMER_36_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_36.data.customerId,
        features: allTogglesTrue.data.features
    }
} as IDatabaseItem

export const CUSTOMER_37_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_37.data.customerId,
        features: {
            "showNotifications": true,
            "showStreaks": true,
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
            "showDuels": true,
            showCommunityGoals: true,
            showReferrals: true,
            yuScreenV3: true,
            hasCoveaFibActive: true,
            hasBupaDentActive: true,
            showDailyScreenCustomIcon: true,
        },
        configurations: {
            companyDailyScreenCustomIconText: "£10"
        }
    }
} as IDatabaseItem

export const BA5_USER_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
        configurations: { appOnboardingRewardAmount: 420 },
    }
} as IDatabaseItem

export const CUSTOMER_39_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_39.data.customerId,
        features: allTogglesTrue.data.features
    }
} as IDatabaseItem

export const CUSTOMER_40_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_40.data.customerId,
        features: {
            "showNotifications": true,
            "showStreaks": true,
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
            "showDuels": true,
            showCommunityGoals: true,
        },
    }
} as IDatabaseItem

export const CUSTOMER_41_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_41.data.customerId,
        features: { 
            ...DEFAULT_TOGGLES.data.features
        }
    }
} as IDatabaseItem

export const CUSTOMER_MEDITOPIA_1_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_MEDITOPIA_1.data.customerId,
        features: mediaContentToggle.data.features
    }
} as IDatabaseItem

export const CUSTOMER_MEDITOPIA_2_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_MEDITOPIA_2.data.customerId,
        features: mediaContentToggle.data.features
    }
} as IDatabaseItem

export const CUSTOMER_MEDITOPIA_3_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_MEDITOPIA_3.data.customerId,
        features: mediaContentToggle.data.features
    }
} as IDatabaseItem

export const CUSTOMER_42_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_42.data.customerId,
        features: allTogglesTrue.data.features
    }
} as IDatabaseItem

export const CUSTOMER_43_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_43.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            yuScreenV4: true,
            showCreateLeaderboard: true,
            showAdvancedLeaderboards: true,
            hasCoveaFibActive: false,
            hasBupaDentActive: false,
        }
    }
} as IDatabaseItem

export const CUSTOMER_44_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_44.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            yuScreenV4: true,
            hasCoveaFibActive: true,
            hasBupaDentActive: true,
        }
    }
} as IDatabaseItem

export const CUSTOMER_45_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_45.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            yuScreenV4: true,
            hasCoveaFibActive: true,
            hasBupaDentActive: true,
        }
    }
} as IDatabaseItem

export const CUSTOMER_46_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_46.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            yuScreenV4: true,
            hasCoveaFibActive: true,
            hasBupaDentActive: true,
        }
    }
} as IDatabaseItem

export const CUSTOMER_48_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_48.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            yuScreenV4: true,
            hasCoveaFibActive: true,
            hasBupaDentActive: true,
        }
    }
} as IDatabaseItem

export const CUSTOMER_49_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_49.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            yuScreenV4: true,
            hasBupaDentActive: true,
        }
    }
} as IDatabaseItem

export const CUSTOMER_51_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_51.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            yuScreenV4: true,
            hasBupaDentActive: true,
        }
    }
} as IDatabaseItem

export const CUSTOMER_53_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_53.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            yuScreenV4: true,
        }
    }
} as IDatabaseItem

export const CUSTOMER_PLI_2_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_PLI_2.data.customerId,
        features: allTogglesTrueFor_PLI.data.features
    }
} as IDatabaseItem

export const CUSTOMER_PLI_3_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_PLI_3.data.customerId,
        features: allTogglesTrueFor_PLI.data.features
    }
} as IDatabaseItem

export const CUSTOMER_PLI_4_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_PLI_4.data.customerId,
        features: allTogglesTrueFor_PLI.data.features
    }
} as IDatabaseItem

export const CUSTOMER_PLI_5_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_PLI_5.data.customerId,
        features: allTogglesTrueFor_PLI.data.features
    }
} as IDatabaseItem

export const CUSTOMER_PLI_6_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_PLI_6.data.customerId,
        features: allTogglesTrueFor_PLI_V4.data.features
    }
} as IDatabaseItem

export const CUSTOMER_PLI_7_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_PLI_7.data.customerId,
        features: allTogglesTrueFor_PLI_V4.data.features
    }
} as IDatabaseItem

export const CUSTOMER_PLI_9_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_PLI_9.data.customerId,
        features: allTogglesTrueFor_PLI_V4.data.features
    }
} as IDatabaseItem

export const CUSTOMER_PLI_10_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_PLI_10.data.customerId,
        features: allTogglesTrueFor_PLI_V4.data.features
    }
} as IDatabaseItem

export const CUSTOMER_47_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_47.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            showDuels: true,
            showInspect: true,
            passiveCyclingEnabled: true,
        }
    }
} as IDatabaseItem

export const CUSTOMER_50_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_50.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            showDuels: true,
            showInspect: true,
            passiveCyclingEnabled: true,
        }
    }
} as IDatabaseItem


export const CUSTOMER_52_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_52.data.customerId,
        features: {
            showStats: true,
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
            "showNotifications": true,
            "showTodayEarningsScreen": true,
            "showGoals": true,
            "yuScreenV3": true,
            "showPermissionSettings": true,
        },
    }
} as IDatabaseItem

export const CUSTOMER_60_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_60.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features
        }
    }
} as IDatabaseItem

export const CUSTOMER_61_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_61.data.customerId,
        features: { 
            ...DEFAULT_TOGGLES.data.features
        }
    }
} as IDatabaseItem

export const CUSTOMER_63_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_63.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features
        }
    }
} as IDatabaseItem

export const CUSTOMER_64_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_64.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            showFiit: true,
        }
    }
} as IDatabaseItem

export const CUSTOMER_65_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_65.data.customerId,
        features: {
        ...DEFAULT_TOGGLES.data.features,
            "showTodayEarningsScreen": true,
            "yuScreenV3": true,
            "showPermissionSettings": true,
            "showGoals": true,
            passiveCyclingEnabled: true,
        }
    }
} as IDatabaseItem

export const CUSTOMER_66_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_66.data.customerId,
        features: {
            "showNotifications": true,
            "showStreaks": true,
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
            "showDuels": true,
            showCommunityGoals: true,
            showFiit: true,
        }
    }
} as IDatabaseItem

export const CUSTOMER_67_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_67.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            showFiit: true,
        }
    }
} as IDatabaseItem

export const CUSTOMER_68_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_68.data.customerId,
        features: {
            "showNotifications": true,
            "showStreaks": true,
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
            "showDuels": true,
            showCommunityGoals: true,
            showFiit: true,
        }
    }
} as IDatabaseItem

export const CUSTOMER_69_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_69.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            showFiit: true,
        }
    }
} as IDatabaseItem

export const CUSTOMER_70_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_70.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            showFiit: true,
        }
    }
} as IDatabaseItem

export const CUSTOMER_71_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_71.data.customerId,
        features: {
            showStats: true,
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
            "showNotifications": true,
            "showTodayEarningsScreen": true,
            "showGoals": true,
            "yuScreenV3": true,
            "showPermissionSettings": true,
            passiveCyclingEnabled: true,
        },
    }
} as IDatabaseItem
