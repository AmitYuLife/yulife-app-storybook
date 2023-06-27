import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { USER_67, USER_68, USER_71, USER_86 } from "./users";

export const USER_STAT_71 = {
    type:"mongo",
    modelName:"user_statistics",
    data: {
        _id: generateRandomMongoId(),
        userId: USER_71.data.userId,
        type: "sudoku_personal_best",
        currentValue: 100,
        historicalValues: []
    }
} as IDatabaseItem

export const USER_STAT_67 = {
    type:"mongo",
    modelName:"user_statistics",
    data: {
        _id: generateRandomMongoId(),
        userId: USER_67.data.userId,
        type: "sudoku_personal_best",
        currentValue: 200,
        historicalValues: []
    }
} as IDatabaseItem

export const USER_STAT_68 = {
    type:"mongo",
    modelName:"user_statistics",
    data: {
        _id: generateRandomMongoId(),
        userId: USER_68.data.userId,
        type: "sudoku_personal_best",
        currentValue: 250,
        historicalValues: []
    }
} as IDatabaseItem

export const USER_STAT_86 = {
    type:"mongo",
    modelName:"user_statistics",
    data: {
        _id: generateRandomMongoId(),
        userId: USER_86.data.userId,
        type: "sudoku_personal_best",
        currentValue: 600,
        historicalValues: []
    }
} as IDatabaseItem