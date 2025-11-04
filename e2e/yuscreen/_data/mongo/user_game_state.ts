import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import moment from "moment";

export const USER_GAME_STATE_109 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_109.data.customerId,
    userId: customer.CUSTOMER_109.data.customerId,
    currentBalance: 17500,
    currentStreak: 0,
    currentLevel: 399,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_115 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_115.data.customerId,
    userId: customer.CUSTOMER_115.data.customerId,
    currentBalance: 17500,
    currentStreak: 0,
    currentLevel: 399,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_138 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_138.data.customerId,
    userId: customer.CUSTOMER_138.data.customerId,
    currentBalance: 17500,
    currentStreak: 0,
    currentLevel: 401,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_139 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_139.data.customerId,
    userId: customer.CUSTOMER_139.data.customerId,
    currentBalance: 17500,
    currentStreak: 0,
    currentLevel: 800,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_MAXIMISE_YU = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_MAXIMISE_YU.data.customerId,
    userId: customer.CUSTOMER_MAXIMISE_YU.data.customerId,
    currentBalance: 1250,
    currentStreak: 2,
    currentLevel: 124,
    totalStreak: 2,
    activeStreakId: "YU_STREAK_CHEST_0002",
    nextLevelAvailableAt: moment().add(10, "hours").format("YYYY-MM-DDTHH:mm:ss"),
  },
} as IDatabaseItem;

export const USER_GAME_STATE_140 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_140.data.customerId,
    userId: customer.CUSTOMER_140.data.customerId,
    currentBalance: 17500,
    currentStreak: 0,
    currentLevel: 800,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_141 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_141.data.customerId,
    userId: customer.CUSTOMER_141.data.customerId,
    currentBalance: 18000,
    currentStreak: 0,
    currentLevel: 810,
  },
} as IDatabaseItem;
