import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { BUSINESS_EMPLOYEE_67, BUSINESS_EMPLOYEE_68, BUSINESS_EMPLOYEE_71 } from "../postgres/business_employees";
import { USER_67, USER_68, USER_71 } from "./users";
import { CUSTOMER_84 } from "../postgres/customers";

const today = moment().format('YYYY-MM-DD');
const tomorrow = moment().add(1, "day").format('YYYY-MM-DD');

export const SUDOKU_ANSWER_71 = {
    type: "mongo",
    modelName: "sudokuanswers",
    data: {
        _id: generateRandomMongoId(),
        date: today,
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

export const SUDOKU_ANSWER_71_NEXT_DAY = {
    type: "mongo",
    modelName: "sudokuanswers",
    data: {
        _id: generateRandomMongoId(),
        date: tomorrow,
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

export const SUDOKU_ANSWER_68 = {
    type: "mongo",
    modelName: "sudokuanswers",
    data: {
        _id: generateRandomMongoId(),
        date: today,
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

export const SUDOKU_ANSWER_68_NEXT_DAY = {
    type: "mongo",
    modelName: "sudokuanswers",
    data: {
        _id: generateRandomMongoId(),
        date: tomorrow,
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

export const SUDOKU_ANSWER_67 = {
    type: "mongo",
    modelName: "sudokuanswers",
    data: {
        _id: generateRandomMongoId(),
        date: today,
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

export const SUDOKU_ANSWER_67_NEXT_DAY = {
    type: "mongo",
    modelName: "sudokuanswers",
    data: {
        _id: generateRandomMongoId(),
        date: tomorrow,
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
      date: today,
      mistakes: 0,
      hints: 0,
      userId: CUSTOMER_84.data.customerId,
      baseTime: 400,
      adjustedTime: 400,
      difficulty: "easy",
      leaderboardEligible: true
    }
}

export const SUDOKU_ANSWER_84_NEXT_DAY = {
  type: "mongo",
  modelName: "sudokuanswers",
  data: {
      _id: generateRandomMongoId(),
      date: tomorrow,
      mistakes: 0,
      hints: 0,
      userId: CUSTOMER_84.data.customerId,
      baseTime: 400,
      adjustedTime: 400,
      difficulty: "easy",
      leaderboardEligible: true
    }
}
