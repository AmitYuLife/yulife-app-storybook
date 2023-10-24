
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_1 } from "../postgres/business";
import { SOCIAL_GROUP_1, SOCIAL_GROUP_2, SOCIAL_GROUP_3, SOCIAL_GROUP_7, SOCIAL_GROUP_7_A, SOCIAL_GROUP_C1, SOCIAL_GROUP_C2 } from "./social_groups";

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

export const SOCIAL_GROUP_LEADERBOARD_7_STEPS = {
    type: "mongo",
    modelName: "social_group_leaderboards",
    data: {
        _id: generateRandomMongoId(),
        socialGroup: SOCIAL_GROUP_7.data._id,
        archived: false,
        leaderboardConfigId: "STEPS_30_DAYS",
    }
} as IDatabaseItem

export const SOCIAL_GROUP_LEADERBOARD_7_SUDOKU = {
    type: "mongo",
    modelName: "social_group_leaderboards",
    data: {
        _id: generateRandomMongoId(),
        socialGroup: SOCIAL_GROUP_7.data._id,
        archived: false,
        leaderboardConfigId: "SUDOKU_DAILY",
    }
} as IDatabaseItem

export const SOCIAL_GROUP_LEADERBOARD_7_A_STEPS = {
    type: "mongo",
    modelName: "social_group_leaderboards",
    data: {
        _id: generateRandomMongoId(),
        socialGroup: SOCIAL_GROUP_7_A.data._id,
        archived: false,
        leaderboardConfigId: "STEPS_30_DAYS",
    }
} as IDatabaseItem

export const SOCIAL_GROUP_LEADERBOARD_7_A_SUDOKU = {
    type: "mongo",
    modelName: "social_group_leaderboards",
    data: {
        _id: generateRandomMongoId(),
        socialGroup: SOCIAL_GROUP_7_A.data._id,
        archived: false,
        leaderboardConfigId: "SUDOKU_DAILY",
    }
} as IDatabaseItem

export const SOCIAL_GROUP_LEADERBOARD_C1_STEPS = {
    type: "mongo",
    modelName: "social_group_leaderboards",
    data: {
        _id: generateRandomMongoId(),
        socialGroup: SOCIAL_GROUP_C1.data._id,
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

export const SOCIAL_GROUP_LEADERBOARD_C1_SUDOKU = {
    type: "mongo",
    modelName: "social_group_leaderboards",
    data: {
        _id: generateRandomMongoId(),
        socialGroup: SOCIAL_GROUP_C1.data._id,
        archived: false,
        leaderboardConfigId: "SUDOKU_DAILY",
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

export const SOCIAL_GROUP_LEADERBOARD_C3_STEPS = {
    type: "mongo",
    modelName: "social_group_leaderboards",
    data: {
        _id: generateRandomMongoId(),
        socialGroup: SOCIAL_GROUP_3.data._id,
        archived: false,
        leaderboardConfigId: "STEPS_30_DAYS",
    }
} as IDatabaseItem

export const SOCIAL_GROUP_LEADERBOARD_C3_SUDOKU = {
    type: "mongo",
    modelName: "social_group_leaderboards",
    data: {
        _id: generateRandomMongoId(),
        socialGroup: SOCIAL_GROUP_3.data._id,
        archived: false,
        leaderboardConfigId: "SUDOKU_DAILY",
    }
} as IDatabaseItem

