import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { USER_CARMY } from "./users";
import { SOCIAL_GROUP_LEADERBOARD_1, SOCIAL_GROUP_LEADERBOARD_C1_STEPS } from "./social_group_leaderboards";

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_CARMY = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: USER_CARMY.data.userId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_1.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_CARMY_C1_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: USER_CARMY.data.userId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id,
    },
} as IDatabaseItem;
