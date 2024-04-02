
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { SOCIAL_GROUP_2, SOCIAL_GROUP_C2 } from "./social_groups";

export const SOCIAL_GROUP_LEADERBOARD_2_STEPS = {
    type: "mongo",
    modelName: "social_group_leaderboards",
    data: {
        _id: generateRandomMongoId(),
        socialGroup: SOCIAL_GROUP_2.data._id,
        archived: false,
        leaderboardConfigId: "STEPS_30_DAYS",
    }
} as IDatabaseItem

export const SOCIAL_GROUP_LEADERBOARD_C2_STEPS = {
    type: "mongo",
    modelName: "social_group_leaderboards",
    data: {
        _id: generateRandomMongoId(),
        socialGroup: SOCIAL_GROUP_C2.data._id,
        archived: false,
        leaderboardConfigId: "STEPS_30_DAYS",
    }
} as IDatabaseItem

export const SOCIAL_GROUP_LEADERBOARD_C2_SUDOKU = {
    type: "mongo",
    modelName: "social_group_leaderboards",
    data: {
        _id: generateRandomMongoId(),
        socialGroup: SOCIAL_GROUP_C2.data._id,
        archived: false,
        leaderboardConfigId: "SUDOKU_DAILY",
    }
} as IDatabaseItem
