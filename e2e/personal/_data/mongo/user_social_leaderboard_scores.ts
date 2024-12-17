import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_126_LEAVER_WELLBEING, CUSTOMER_LEAVER } from "../postgres/customers";

const globalLeaversStepsId = "55366dfe40f828ef2775a91c"

export const USER_LEAVER_SCORE_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_scores",
    data: {
        _id: generateRandomMongoId(),
        leaderboardConfigId: "STEPS_30_DAYS",
        userId: CUSTOMER_LEAVER.data.customerId,
        value: 0,
        activeLeaderboards: [
            globalLeaversStepsId
        ]
    }
}

export const USER_WELLBEING_LEAVER_SCORE_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_scores",
    data: {
        _id: generateRandomMongoId(),
        leaderboardConfigId: "STEPS_30_DAYS",
        userId: CUSTOMER_126_LEAVER_WELLBEING.data.customerId,
        value: 0,
        activeLeaderboards: [
            globalLeaversStepsId
        ]
    }
}
