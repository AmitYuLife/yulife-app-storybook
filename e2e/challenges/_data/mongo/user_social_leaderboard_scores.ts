import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { USER_52, USER_54, USER_55, USER_56, USER_57, USER_58, USER_67, USER_68, USER_71 } from "./users";
import { SOCIAL_GROUP_LEADERBOARD_1, SOCIAL_GROUP_LEADERBOARD_7_STEPS } from "./social_group_leaderboards";
import { SUDOKU_ANSWER_67, SUDOKU_ANSWER_68, SUDOKU_ANSWER_71 } from "./game_sudoku_answer";
import { CUSTOMER_52, CUSTOMER_84 } from "../postgres/customers";

const type = "mongo";
const modelName = "user_social_leaderboard_scores";

const today = moment().format("YYYY-MM-DD");
const tomorrow = moment().add(1, "day").format("YYYY-MM-DD");

export const USER_SOCIAL_LEADERBOARD_SCORE_71 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        date: today,
        difficultyLevel: 1,
        leaderboardConfigId: "SUDOKU_DAILY",
        userId: USER_71.data.userId,
        value: SUDOKU_ANSWER_71.data.baseTime,
        activeLeaderboards: [
            SOCIAL_GROUP_LEADERBOARD_1.data._id
        ]
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_SCORE_71_NEXT_DAY = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        date: tomorrow,
        difficultyLevel: 1,
        leaderboardConfigId: "SUDOKU_DAILY",
        userId: USER_71.data.userId,
        value: SUDOKU_ANSWER_71.data.baseTime,
        activeLeaderboards: [
            SOCIAL_GROUP_LEADERBOARD_1.data._id
        ]
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_SCORE_67 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        date: today,
        difficultyLevel: 1,
        leaderboardConfigId: "SUDOKU_DAILY",
        userId: USER_67.data.userId,
        value: SUDOKU_ANSWER_67.data.baseTime,
        activeLeaderboards: [
            SOCIAL_GROUP_LEADERBOARD_1.data._id
        ]
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_SCORE_67_NEXT_DAY = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        date: tomorrow,
        difficultyLevel: 1,
        leaderboardConfigId: "SUDOKU_DAILY",
        userId: USER_67.data.userId,
        value: SUDOKU_ANSWER_67.data.baseTime,
        activeLeaderboards: [
            SOCIAL_GROUP_LEADERBOARD_1.data._id
        ]
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_SCORE_68 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        date: today,
        difficultyLevel: 1,
        leaderboardConfigId: "SUDOKU_DAILY",
        userId: USER_68.data.userId,
        value: SUDOKU_ANSWER_68.data.baseTime,
        activeLeaderboards: [
            SOCIAL_GROUP_LEADERBOARD_1.data._id
        ]
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_SCORE_68_NEXT_DAY = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        date: tomorrow,
        difficultyLevel: 1,
        leaderboardConfigId: "SUDOKU_DAILY",
        userId: USER_68.data.userId,
        value: SUDOKU_ANSWER_68.data.baseTime,
        activeLeaderboards: [
            SOCIAL_GROUP_LEADERBOARD_1.data._id
        ]
    }
} as IDatabaseItem

export const USER_54_STEPS_SCORE = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        leaderboardConfigId: "STEPS_30_DAYS",
        userId: USER_54.data.userId,
        value: 330,
        activeLeaderboards: [
            SOCIAL_GROUP_LEADERBOARD_7_STEPS.data._id,
        ]
    }
}

export const USER_55_STEPS_SCORE = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        leaderboardConfigId: "STEPS_30_DAYS",
        userId: USER_55.data.userId,
        value: 250,
        activeLeaderboards: [
            SOCIAL_GROUP_LEADERBOARD_7_STEPS.data._id,
        ]
    }
}

export const USER_56_STEPS_SCORE = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        leaderboardConfigId: "STEPS_30_DAYS",
        userId: USER_56.data.userId,
        value: 420,
        activeLeaderboards: [
            SOCIAL_GROUP_LEADERBOARD_7_STEPS.data._id,
        ]
    }
}

export const USER_57_STEPS_SCORE = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        leaderboardConfigId: "STEPS_30_DAYS",
        userId: USER_57.data.userId,
        value: 500,
        activeLeaderboards: [
            SOCIAL_GROUP_LEADERBOARD_7_STEPS.data._id,
        ]
    }
}

export const USER_58_STEPS_SCORE = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        leaderboardConfigId: "STEPS_30_DAYS",
        userId: USER_58.data.userId,
        value: 300,
        activeLeaderboards: [
            SOCIAL_GROUP_LEADERBOARD_7_STEPS.data._id,
        ]
    }
}

export const USER_84_STEPS_SCORE = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        leaderboardConfigId: "STEPS_30_DAYS",
        userId: CUSTOMER_84.data.userId,
        value: 0,
    }
}

export const USER_52_STEPS_SCORE = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        leaderboardConfigId: "STEPS_30_DAYS",
        userId: USER_52.data.userId,
        value: 240,
        activeLeaderboards: [
            SOCIAL_GROUP_LEADERBOARD_7_STEPS.data._id,
        ]
    }
}
