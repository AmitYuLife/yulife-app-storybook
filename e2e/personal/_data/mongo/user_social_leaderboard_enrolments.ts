import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_126_LEAVER_WELLBEING, CUSTOMER_LEAVER } from "../postgres/customers";

const globalLeaversStepsId = "55366dfe40f828ef2775a91c"
const globalLeaversSudokuId = "5536849a6ce716c125256186"

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
