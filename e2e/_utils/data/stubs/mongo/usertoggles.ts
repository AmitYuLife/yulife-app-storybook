import { generateRandomMongoId } from '../../utils';
import { IDatabaseItem } from '../../types';
import { CUSTOMER_2 } from '../postgres/customers';;


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