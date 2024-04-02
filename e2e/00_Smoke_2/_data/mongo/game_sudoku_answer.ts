import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { CUSTOMER_84 } from "../postgres/customers";
import { USER_71 } from "./users";
import { BUSINESS_EMPLOYEE_71 } from "../postgres/business_employees";

export const SUDOKU_ANSWER_71 = {
    type: "mongo",
    modelName: "sudokuanswers",
    data: {
        _id: generateRandomMongoId(),
        date: moment().format("YYYY-MM-DD"),
        mistakes: 0,
        hints: 0,
        userId: USER_71.data.userId,
        baseTime: 200,
        adjustedTime: 200,
        difficulty: "easy",
        leaderboardId: BUSINESS_EMPLOYEE_71.data.business_account_id,
        leaderboardEligible: true,
    },
};

export const SUDOKU_ANSWER_84 = {
    type: "mongo",
    modelName: "sudokuanswers",
    data: {
        _id: generateRandomMongoId(),
        date: moment().format("YYYY-MM-DD"),
        mistakes: 0,
        hints: 0,
        userId: CUSTOMER_84.data.customerId,
        baseTime: 400,
        adjustedTime: 400,
        difficulty: "easy",
        leaderboardEligible: true,
    },
};
