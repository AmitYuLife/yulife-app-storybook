import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { SUDOKU_ANSWER_67, SUDOKU_ANSWER_68, SUDOKU_ANSWER_71 } from "./game_sudoku_answer";
import { USER_67, USER_68, USER_71 } from "./users";

export const USER_SOCIAL_LEADERBOARD_SCORE_71 = {
    type:"mongo",
    modelName:"user_social_leaderboard_scores",
    data: {
        _id: generateRandomMongoId(),
        date: moment().format("YYYY-MM-DD"),
        difficultyLevel: 1,
        leaderboardConfigId: "SUDOKU_DAILY",
        userId: USER_71.data.userId,
        value: SUDOKU_ANSWER_71.data.baseTime
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_SCORE_67 = {
    type:"mongo",
    modelName:"user_social_leaderboard_scores",
    data: {
        _id: generateRandomMongoId(),
        date: moment().format("YYYY-MM-DD"),
        difficultyLevel: 1,
        leaderboardConfigId: "SUDOKU_DAILY",
        userId: USER_67.data.userId,
        value: SUDOKU_ANSWER_67.data.baseTime
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_SCORE_68 = {
    type:"mongo",
    modelName:"user_social_leaderboard_scores",
    data: {
        _id: generateRandomMongoId(),
        date: moment().format("YYYY-MM-DD"),
        difficultyLevel: 1,
        leaderboardConfigId: "SUDOKU_DAILY",
        userId: USER_68.data.userId,
        value: SUDOKU_ANSWER_68.data.baseTime
    }
} as IDatabaseItem