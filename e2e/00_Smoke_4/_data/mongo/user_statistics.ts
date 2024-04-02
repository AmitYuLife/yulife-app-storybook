import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { USER_67 } from "./users";

export const USER_STAT_67 = {
    type: "mongo",
    modelName: "user_statistics",
    data: {
        _id: generateRandomMongoId(),
        userId: USER_67.data.userId,
        type: "sudoku_personal_best",
        currentValue: 200,
        historicalValues: []
    }
} as IDatabaseItem
