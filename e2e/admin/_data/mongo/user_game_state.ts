import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customers from "../postgres/customers";
import moment = require("moment");

export const USER_GAME_STATE_1 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customers.CUSTOMER_1.data.customerId,
    userId: customers.CUSTOMER_1.data.customerId,
    currentBalance: 0,
    currentStreak: 0,
    currentLevel: 1,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_3 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customers.CUSTOMER_3.data.customerId,
    userId: customers.CUSTOMER_3.data.customerId,
    currentBalance: 0,
    currentStreak: 0,
    currentLevel: 1,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_4 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customers.CUSTOMER_4.data.customerId,
    userId: customers.CUSTOMER_4.data.customerId,
    activeStreakId: "YU_STREAK_CHEST_0002",
    currentBalance: 320,
    currentLevel: 3,
    currentStreak: 0,
    nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
  },
} as IDatabaseItem;

export const USER_GAME_STATE_5 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customers.CUSTOMER_5.data.customerId,
    userId: customers.CUSTOMER_5.data.customerId,
    activeStreakId: "YU_STREAK_CHEST_0002",
    currentBalance: 3080,
    currentStreak: 5,
    currentLevel: 6,
    nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
    nextLevelAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
  },
} as IDatabaseItem;

export const USER_GAME_STATE_6 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customers.CUSTOMER_6.data.customerId,
    userId: customers.CUSTOMER_6.data.customerId,
    currentBalance: 100000,
    currentStreak: 0,
    currentLevel: 90,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_10 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customers.CUSTOMER_10.data.customerId,
    userId: customers.CUSTOMER_10.data.customerId,
    currentBalance: 100000,
    currentStreak: 0,
    currentLevel: 90,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_11 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customers.CUSTOMER_11.data.customerId,
    userId: customers.CUSTOMER_11.data.customerId,
    currentBalance: 15000,
    currentStreak: 0,
    currentLevel: 10,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_12 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customers.CUSTOMER_12.data.customerId,
    userId: customers.CUSTOMER_12.data.customerId,
    currentBalance: 0,
    currentStreak: 0,
    currentLevel: 10,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_13 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customers.CUSTOMER_13.data.customerId,
    userId: customers.CUSTOMER_13.data.customerId,
    currentBalance: 0,
    currentStreak: 0,
    currentLevel: 1,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_14 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customers.CUSTOMER_14.data.customerId,
    userId: customers.CUSTOMER_14.data.customerId,
    currentBalance: 0,
    currentStreak: 0,
    currentLevel: 1,
  },
} as IDatabaseItem;
