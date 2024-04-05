
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { SOCIAL_GROUP_1, SOCIAL_GROUP_BA5, SOCIAL_GROUP_BA5_RULE, SOCIAL_GROUP_BA5_TAG } from "./social_groups";

export const SOCIAL_GROUP_LEADERBOARD_STEPS_1 = {
    type: "mongo",
    modelName: "social_group_leaderboards",
    data: {
        _id: generateRandomMongoId(),
        socialGroup: SOCIAL_GROUP_1.data._id,
        archived: false,
        leaderboardConfigId: "STEPS_30_DAYS",
    }
} as IDatabaseItem

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

export const SOCIAL_GROUP_LEADERBOARD_5_STEPS = {
    type: "mongo",
    modelName: "social_group_leaderboards",
    data: {
        _id: generateRandomMongoId(),
        socialGroup: SOCIAL_GROUP_BA5.data._id,
        archived: false,
        leaderboardConfigId: "STEPS_30_DAYS",
    }
} as IDatabaseItem

export const SOCIAL_GROUP_LEADERBOARD_5_SUDOKU = {
    type: "mongo",
    modelName: "social_group_leaderboards",
    data: {
        _id: generateRandomMongoId(),
        socialGroup: SOCIAL_GROUP_BA5.data._id,
        archived: false,
        leaderboardConfigId: "SUDOKU_DAILY",
    }
} as IDatabaseItem

export const SOCIAL_GROUP_LEADERBOARD_5_RULE_STEPS = {
    type: "mongo",
    modelName: "social_group_leaderboards",
    data: {
        _id: generateRandomMongoId(),
        socialGroup: SOCIAL_GROUP_BA5_RULE.data._id,
        archived: false,
        leaderboardConfigId: "STEPS_30_DAYS",
    }
} as IDatabaseItem

export const SOCIAL_GROUP_LEADERBOARD_5_RULE_SUDOKU = {
    type: "mongo",
    modelName: "social_group_leaderboards",
    data: {
        _id: generateRandomMongoId(),
        socialGroup: SOCIAL_GROUP_BA5_RULE.data._id,
        archived: false,
        leaderboardConfigId: "SUDOKU_DAILY",
    }
} as IDatabaseItem

export const SOCIAL_GROUP_LEADERBOARD_5_TAG_STEPS = {
    type: "mongo",
    modelName: "social_group_leaderboards",
    data: {
        _id: generateRandomMongoId(),
        socialGroup: SOCIAL_GROUP_BA5_TAG.data._id,
        archived: false,
        leaderboardConfigId: "STEPS_30_DAYS",
    }
} as IDatabaseItem

export const SOCIAL_GROUP_LEADERBOARD_5_TAG_SUDOKU = {
    type: "mongo",
    modelName: "social_group_leaderboards",
    data: {
        _id: generateRandomMongoId(),
        socialGroup: SOCIAL_GROUP_BA5_TAG.data._id,
        archived: false,
        leaderboardConfigId: "SUDOKU_DAILY",
    }
} as IDatabaseItem