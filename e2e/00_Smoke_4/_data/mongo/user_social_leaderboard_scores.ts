import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { SUDOKU_ANSWER_67 } from "./game_sudoku_answer";
import { USER_67 } from "./users";
import { SOCIAL_GROUP_LEADERBOARD_1 } from "./social_group_leaderboards";

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
