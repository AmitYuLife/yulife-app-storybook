import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_5, BUSINESS_ACCOUNT_7 } from "../postgres/business";
import { BUSINESS_EMPLOYEE_55, BUSINESS_EMPLOYEE_67, BUSINESS_EMPLOYEE_68, BUSINESS_EMPLOYEE_71, BUSINESS_EMPLOYEE_86 } from "../postgres/business_employees";
import { USER_55, USER_67, USER_68, USER_71, USER_86 } from "./users";

export const SUDOKU_STAT_0 = {
    type: "mongo",
    modelName: "sudokustats",
    data: {
        _id: generateRandomMongoId(),
        userId: USER_86.data.userId,
        personalBest: 600,
      }
}

export const SUDOKU_STAT_1 = {
    type: "mongo",
    modelName: "sudokustats",
    data: {
        _id: generateRandomMongoId(),
        userId: USER_71.data.userId,
        personalBest: 100,
        leaderboardId: BUSINESS_EMPLOYEE_71.data.business_account_id
      }
}

export const SUDOKU_STAT_2 = {
    type: "mongo",
    modelName: "sudokustats",
    data: {
        _id: generateRandomMongoId(),
        userId: USER_68.data.userId,
        personalBest: 250,
        leaderboardId: BUSINESS_EMPLOYEE_68.data.business_account_id
      }
}

export const SUDOKU_STAT_3 = {
    type: "mongo",
    modelName: "sudokustats",
    data: {
        _id: generateRandomMongoId(),
        userId: USER_67.data.userId,
        personalBest: 200,
        leaderboardId: BUSINESS_EMPLOYEE_67.data.business_account_id
      }
}