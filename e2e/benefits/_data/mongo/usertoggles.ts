import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_6 } from "../postgres/business";
import * as customer from "../postgres/customers";
import { allTogglesTrue, DEFAULT_TOGGLES } from "./_templates";

const type = "mongo";
const modelName = "usertoggles";

export const CUSTOMER_1_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_1.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
        },
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
            showYucoinPowerButton: true,
            tempGameTodayYuCoinCheckIns: true,
            showDailySurvey: true,
            showNotificationCentre: true,
            showAllLanguages: true,
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
            tempGameEnableReferralQRCode: true,
            yuScreenV3: true,
            hasCoveaFibActive: true,
            hasBupaDentActive: true,
            showDailyScreenCustomIcon: true,
            yuScreenV4: false,
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
            showBrainGameSudoku: true,
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
            useHalfModalsForQuestMap: true,
            showQuestMapNotificationIcons: true,
            showGoalProductRewardMilestones: true,
            useStreakDetails: true,
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
            showQuestMapNotificationIcons: true,
        },
    },
} as IDatabaseItem;

export const CUSTOMER_128_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_128_WELLBEING_ELIGIBILITY.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            yuScreenV4: true,
            hasCoveaFibActive: true,
            hasBupaDentActive: true,
            showYuScreenWellbeingButton: true,
        },
    },
} as IDatabaseItem;

export const CUSTOMER_129_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_129_WELLBEING_ELIGIBILITY.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            yuScreenV4: true,
            hasCoveaFibActive: true,
            hasBupaDentActive: true,
            showYuScreenWellbeingButton: true,
        },
    },
} as IDatabaseItem;

export const BUSINESS_6_USER_TOGGLES = {
    type: "mongo",
    modelName: "usertoggles",
    data: {
        _id: generateRandomMongoId(),
        businessAccountId: BUSINESS_ACCOUNT_6.data.business_account_id,
        toggleType: "business",
        features: { dataRefreshEnabled: true, hasProductBenefitVisible: true },
    },
} as IDatabaseItem;
