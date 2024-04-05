import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { SOCIAL_GROUP_1 } from "./social_groups";

export const SOCIAL_GROUP_LEADERBOARD_1 = {
    type: "mongo",
    modelName: "social_group_leaderboards",
    data: {
        _id: generateRandomMongoId(),
        socialGroup: SOCIAL_GROUP_1.data._id,
        archived: false,
        leaderboardConfigId: "SUDOKU_DAILY",
    }
} as IDatabaseItem

