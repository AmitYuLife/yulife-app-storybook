import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { USER_20 } from "./users";
import { SOCIAL_GROUP_LEADERBOARD_2_STEPS, SOCIAL_GROUP_LEADERBOARD_C2_STEPS } from "./social_group_leaderboards";
import { CUSTOMER_126_LEAVER_WELLBEING, CUSTOMER_LEAVER } from "../postgres/customers";

const globalLeaversStepsId = "55366dfe40f828ef2775a91c"

export const USER_20_STEPS_SCORE = {
    type: "mongo",
    modelName: "user_social_leaderboard_scores",
    data: {
        _id: generateRandomMongoId(),
        leaderboardConfigId: "STEPS_30_DAYS",
        userId: USER_20.data.userId,
        value: 0,
        activeLeaderboards: [
            SOCIAL_GROUP_LEADERBOARD_C2_STEPS.data._id,
            SOCIAL_GROUP_LEADERBOARD_2_STEPS.data._id
        ]
    }
}

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
