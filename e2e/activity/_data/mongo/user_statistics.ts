import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { USER_71 } from "./users";

export const USER_STAT_71 = {
    type: "mongo",
    modelName: "user_statistics",
    data: {
        _id: generateRandomMongoId(),
        userId: USER_71.data.userId,
        type: "sudoku_personal_best",
        currentValue: 100,
        historicalValues: [],
    },
} as IDatabaseItem;
