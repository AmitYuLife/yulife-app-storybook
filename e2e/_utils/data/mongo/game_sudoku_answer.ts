import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { BUSINESS_ACCOUNT_5, BUSINESS_ACCOUNT_7 } from "../postgres/business";
import { BUSINESS_EMPLOYEE_55, BUSINESS_EMPLOYEE_67, BUSINESS_EMPLOYEE_68, BUSINESS_EMPLOYEE_71 } from "../postgres/business_employees";
import { CUSTOMER_84 } from "../postgres/customers";
import { USER_55, USER_67, USER_68, USER_71 } from "./users";

export const SUDOKU_ANSWER_1 = {
    type: "mongo",
    modelName: "sudokuanswers",
    data: {
        _id: generateRandomMongoId(),
        date: moment().format('YYYY-MM-DD'),
        mistakes: 0,
        hints: 0,
        userId: USER_71.data.userId,
        baseTime: 200,
        adjustedTime: 200,
        difficulty: "easy",
        leaderboardId: BUSINESS_EMPLOYEE_71.data.business_account_id,
        leaderboardEligible: true
      }
}

export const SUDOKU_ANSWER_2 = {
    type: "mongo",
    modelName: "sudokuanswers",
    data: {
        _id: generateRandomMongoId(),
        date: moment().format('YYYY-MM-DD'),
        mistakes: 0,
        hints: 0,
        userId: USER_68.data.userId,
        baseTime: 300,
        adjustedTime: 300,
        difficulty: "easy",
        leaderboardId: BUSINESS_EMPLOYEE_68.data.business_account_id,
        leaderboardEligible: true
      }
}

export const SUDOKU_ANSWER_3 = {
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

export const SUDOKU_ANSWER_84 = {
  type: "mongo",
  modelName: "sudokuanswers",
  data: {
      _id: generateRandomMongoId(),
      date: moment().format('YYYY-MM-DD'),
      mistakes: 0,
      hints: 0,
      userId: CUSTOMER_84.data.customerId,
      baseTime: 400,
      adjustedTime: 400,
      difficulty: "easy",
      // leaderboardId: BUSINESS_EMPLOYEE_67.data.business_account_id,
      leaderboardEligible: true
    }
}