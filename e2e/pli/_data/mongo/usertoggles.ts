import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { allTogglesTrueFor_PLI } from "./_templates";
import * as customer from "../postgres/customers";

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
        features: allTogglesTrueFor_PLI.data.features,
    },
} as IDatabaseItem;
