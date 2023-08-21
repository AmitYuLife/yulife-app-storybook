import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { SUDOKU_ANSWER_67, SUDOKU_ANSWER_68, SUDOKU_ANSWER_71 } from "./game_sudoku_answer";
import { USER_16, USER_17, USER_18, USER_19, USER_20, USER_21, USER_40, USER_47, USER_50, USER_67, USER_68, USER_71, USER_73 } from "./users";
import { CUSTOMER_84 } from "../postgres/customers";
import { SOCIAL_GROUP_LEADERBOARD_1 } from "./social_group_leaderboards";

export const USER_SOCIAL_LEADERBOARD_SCORE_71 = {
    type: "mongo",
    modelName: "user_social_leaderboard_scores",
    data: {
        _id: generateRandomMongoId(),
        date: moment().format("YYYY-MM-DD"),
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
    type: "mongo",
    modelName: "user_social_leaderboard_scores",
    data: {
        _id: generateRandomMongoId(),
        date: moment().format("YYYY-MM-DD"),
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
    type: "mongo",
    modelName: "user_social_leaderboard_scores",
    data: {
        _id: generateRandomMongoId(),
        date: moment().format("YYYY-MM-DD"),
        difficultyLevel: 1,
        leaderboardConfigId: "SUDOKU_DAILY",
        userId: USER_68.data.userId,
        value: SUDOKU_ANSWER_68.data.baseTime,
        activeLeaderboards: [
            SOCIAL_GROUP_LEADERBOARD_1.data._id
        ]
    }
} as IDatabaseItem

// Daily Step Scores for Users with Enrolments

export const USER_18_STEPS_SCORE = {
    type: "mongo",
    modelName: "user_social_leaderboard_scores",
    data: {
        _id: generateRandomMongoId(),
        leaderboardConfigId: "STEPS_30_DAYS",
        userId: USER_18.data.userId,
        value: 0
    }
}

export const USER_16_STEPS_SCORE = {
    type: "mongo",
    modelName: "user_social_leaderboard_scores",
    data: {
        _id: generateRandomMongoId(),
        leaderboardConfigId: "STEPS_30_DAYS",
        userId: USER_16.data.userId,
        value: 0
    }
}

export const USER_17_STEPS_SCORE = {
    type: "mongo",
    modelName: "user_social_leaderboard_scores",
    data: {
        _id: generateRandomMongoId(),
        leaderboardConfigId: "STEPS_30_DAYS",
        userId: USER_17.data.userId,
        value: 0
    }
}

export const USER_19_STEPS_SCORE = {
    type: "mongo",
    modelName: "user_social_leaderboard_scores",
    data: {
        _id: generateRandomMongoId(),
        leaderboardConfigId: "STEPS_30_DAYS",
        userId: USER_19.data.userId,
        value: 0
    }
}

export const USER_20_STEPS_SCORE = {
    type: "mongo",
    modelName: "user_social_leaderboard_scores",
    data: {
        _id: generateRandomMongoId(),
        leaderboardConfigId: "STEPS_30_DAYS",
        userId: USER_20.data.userId,
        value: 0
    }
}

export const USER_21_STEPS_SCORE = {
    type: "mongo",
    modelName: "user_social_leaderboard_scores",
    data: {
        _id: generateRandomMongoId(),
        leaderboardConfigId: "STEPS_30_DAYS",
        userId: USER_21.data.userId,
        value: 0
    }
}

export const USER_40_STEPS_SCORE = {
    type: "mongo",
    modelName: "user_social_leaderboard_scores",
    data: {
        _id: generateRandomMongoId(),
        leaderboardConfigId: "STEPS_30_DAYS",
        userId: USER_40.data.userId,
        value: 0
    }
}

export const USER_47_STEPS_SCORE = {
    type: "mongo",
    modelName: "user_social_leaderboard_scores",
    data: {
        _id: generateRandomMongoId(),
        leaderboardConfigId: "STEPS_30_DAYS",
        userId: USER_47.data.userId,
        value: 0
    }
}

export const USER_50_STEPS_SCORE = {
    type: "mongo",
    modelName: "user_social_leaderboard_scores",
    data: {
        _id: generateRandomMongoId(),
        leaderboardConfigId: "STEPS_30_DAYS",
        userId: USER_50.data.userId,
        value: 0
    }
}

export const USER_73_STEPS_SCORE = {
    type: "mongo",
    modelName: "user_social_leaderboard_scores",
    data: {
        _id: generateRandomMongoId(),
        leaderboardConfigId: "STEPS_30_DAYS",
        userId: USER_73.data.userId,
        value: 0
    }
}

export const USER_84_STEPS_SCORE = {
    type: "mongo",
    modelName: "user_social_leaderboard_scores",
    data: {
        _id: generateRandomMongoId(),
        leaderboardConfigId: "STEPS_30_DAYS",
        userId: CUSTOMER_84.data.userId,
        value: 0
    }
}      
