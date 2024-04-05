import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { BUSINESS_EMPLOYEE_67 } from "../postgres/business_employees";
import { USER_67 } from "./users";

export const SUDOKU_ANSWER_67 = {
    type: "mongo",
    modelName: "sudokuanswers",
    data: {
        _id: generateRandomMongoId(),
        date: moment().format('YYYY-MM-DD'),
        mistakes: 0,
        hints: 0,
        userId: USER_67.data.userId,
        baseTime: 280,
        adjustedTime: 280,
        difficulty: "easy",
        leaderboardId: BUSINESS_EMPLOYEE_67.data.business_account_id,
        leaderboardEligible: true
    }
}
