import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_126_LEAVER_WELLBEING, CUSTOMER_20, CUSTOMER_LEAVER } from "../postgres/customers";
import { SOCIAL_GROUP_LEADERBOARD_2_STEPS, SOCIAL_GROUP_LEADERBOARD_C2_STEPS } from "./social_group_leaderboards";
import { USER_20 } from "./users";

const globalLeaversStepsId = "55366dfe40f828ef2775a91c"
const globalLeaversSudokuId = "5536849a6ce716c125256186"

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_20 = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: USER_20.data.userId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_2_STEPS.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_20_C2_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: CUSTOMER_20.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C2_STEPS.data._id
    }
} as IDatabaseItem

export const USER_LEAVER_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: CUSTOMER_LEAVER.data.customerId,
        socialGroupLeaderboard: globalLeaversStepsId
    }
} as IDatabaseItem

export const USER_WELLBEING_LEAVER_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: CUSTOMER_126_LEAVER_WELLBEING.data.customerId,
        socialGroupLeaderboard: globalLeaversStepsId
    }
} as IDatabaseItem
