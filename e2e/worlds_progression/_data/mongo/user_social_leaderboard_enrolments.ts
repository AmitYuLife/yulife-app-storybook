import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { SOCIAL_GROUP_LEADERBOARD_1 } from "./social_group_leaderboards";
import { USER_67 } from "./users";

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_67 = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: USER_67.data.userId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_1.data._id
    }
} as IDatabaseItem
