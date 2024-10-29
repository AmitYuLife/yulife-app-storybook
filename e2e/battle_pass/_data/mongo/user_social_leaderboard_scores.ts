import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { SUDOKU_ANSWER_CARMY } from "./game_sudoku_answer";
import { USER_CARMY } from "./users";
import moment from "moment";
import { SOCIAL_GROUP_LEADERBOARD_1, SOCIAL_GROUP_LEADERBOARD_C1_STEPS } from "./social_group_leaderboards";

export const USER_SOCIAL_LEADERBOARD_SCORE_71 = {
    type: "mongo",
    modelName: "user_social_leaderboard_scores",
    data: {
        _id: generateRandomMongoId(),
        date: moment().format("YYYY-MM-DD"),
        difficultyLevel: 1,
        leaderboardConfigId: "SUDOKU_DAILY",
        userId: USER_CARMY.data.userId,
        value: SUDOKU_ANSWER_CARMY.data.baseTime,
        activeLeaderboards: [SOCIAL_GROUP_LEADERBOARD_1.data._id],
    },
} as IDatabaseItem;

export const USER_CARMY_STEPS_SCORE = {
    type: "mongo",
    modelName: "user_social_leaderboard_scores",
    data: {
        _id: generateRandomMongoId(),
        leaderboardConfigId: "STEPS_30_DAYS",
        userId: USER_CARMY.data.userId,
        value: 3125,
        activeLeaderboards: [SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id],
    },
};
