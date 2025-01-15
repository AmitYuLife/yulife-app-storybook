import { BUSINESS_ACCOUNT_5, BUSINESS_ACCOUNT_6 } from "../postgres/business";
import * as customer from "../postgres/customers";
import { allTogglesTrue, DEFAULT_TOGGLES } from "./_templates";
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

const type = "mongo";
const modelName = "usertoggles";

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
            tempGameTodayYuCoinCheckIns: true,
            showDailySurvey: true,
            showNotificationCentre: true,
            showAllLanguages: true,
        },
    },
} as IDatabaseItem;

export const CUSTOMER_3_TOGGLES = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_3.data.customerId,
        features: allTogglesTrue.data.features,
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
            tempGameUseStreakSettings: true,
        },
    },
} as IDatabaseItem;

export const CUSTOMER_12_TOGGLES = {
    type,
    modelName,
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

export const BUSINESS_6_USER_TOGGLES = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        businessAccountId: BUSINESS_ACCOUNT_6.data.business_account_id,
        toggleType: "business",
        features: { dataRefreshEnabled: true, hasProductBenefitVisible: true },
    },
} as IDatabaseItem;

export const CUSTOMER_60_TOGGLES = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_60.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
        },
    },
} as IDatabaseItem;

export const CUSTOMER_63_TOGGLES = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_63.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
        },
    },
} as IDatabaseItem;

export const CUSTOMER_64_TOGGLES = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_64.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            showFiit: true,
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

export const CUSTOMER_69_TOGGLES = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_69.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            showFiit: true,
            enableChallengeBonuses: true,
        },
    },
} as IDatabaseItem;

export const CUSTOMER_70_TOGGLES = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_70.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            showFiit: true,
            tempGameUseSettingsConfigForQuestMapV3: true,
        },
    },
} as IDatabaseItem;

export const CUSTOMER_78_TOGGLES = {
    type,
    modelName,
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
    type,
    modelName,
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
    type,
    modelName,
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
            tempGameEnableExtraChallengesHint: true,
        },
    },
} as IDatabaseItem;

export const CUSTOMER_89_TOGGLES = {
    type,
    modelName,
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
    type,
    modelName,
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
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_91.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
            showFiit: true,
            showBrainGameSudoku: true,
        },
    },
} as IDatabaseItem;

export const CUSTOMER_92_TOGGLES = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_92.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
        },
    },
} as IDatabaseItem;

export const CUSTOMER_93_TOGGLES = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_93.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
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
        },
    },
} as IDatabaseItem;

export const CUSTOMER_95_TOGGLES = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_95.data.customerId,
        features: {
            ...DEFAULT_TOGGLES.data.features,
        },
    },
} as IDatabaseItem;
