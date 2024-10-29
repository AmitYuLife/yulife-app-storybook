import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { USER_CARMY } from "./users";
import { BUSINESS_EMPLOYEE_CARMY } from "../postgres/business_employees";

export const SUDOKU_ANSWER_CARMY = {
    type: "mongo",
    modelName: "sudokuanswers",
    data: {
        _id: generateRandomMongoId(),
        date: moment().format("YYYY-MM-DD"),
        mistakes: 0,
        hints: 0,
        userId: USER_CARMY.data.userId,
        baseTime: 200,
        adjustedTime: 200,
        difficulty: "easy",
        leaderboardId: BUSINESS_EMPLOYEE_CARMY.data.business_account_id,
        leaderboardEligible: true,
    },
};