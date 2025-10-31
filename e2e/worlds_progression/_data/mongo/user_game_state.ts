import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import moment from "moment";

export const USER_GAME_STATE_3 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_3.data.customerId,
    userId: customer.CUSTOMER_3.data.customerId,
    currentBalance: 17500,
    currentStreak: 0,
    currentLevel: 90,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_7 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_7.data.customerId,
    userId: customer.CUSTOMER_7.data.customerId,
    activeStreakId: "YU_STREAK_CHEST_0002",
    currentBalance: 440,
    currentStreak: 4,
    currentLevel: 5,
    nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
    nextLevelAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
  },
} as IDatabaseItem;

export const USER_GAME_STATE_12 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_12.data.customerId,
    userId: customer.CUSTOMER_12.data.customerId,
    currentBalance: 27500,
    currentStreak: 0,
    currentLevel: 115,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_13 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_13.data.customerId,
    userId: customer.CUSTOMER_13.data.customerId,
    currentBalance: 50000,
    currentStreak: 0,
    currentLevel: 175,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_60 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_60.data.customerId,
    userId: customer.CUSTOMER_60.data.customerId,
    currentBalance: 17500,
    currentStreak: 0,
    currentLevel: 49,
    nextLevelAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
  },
} as IDatabaseItem;

export const USER_GAME_STATE_63 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_63.data.customerId,
    userId: customer.CUSTOMER_63.data.customerId,
    currentBalance: 17500,
    currentStreak: 0,
    currentLevel: 199,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_64 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_64.data.customerId,
    userId: customer.CUSTOMER_64.data.customerId,
    currentBalance: 17500,
    currentStreak: 0,
    currentLevel: 201,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_67 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_67.data.customerId,
    userId: customer.CUSTOMER_67.data.customerId,
    currentBalance: 17500,
    currentStreak: 0,
    currentLevel: 251,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_69 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_69.data.customerId,
    userId: customer.CUSTOMER_69.data.customerId,
    currentBalance: 17500,
    currentStreak: 0,
    currentLevel: 200,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_70 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_70.data.customerId,
    userId: customer.CUSTOMER_70.data.customerId,
    currentBalance: 17500,
    currentStreak: 0,
    yuniversalMap: 1,
    yuniversalLevel: 7,
    currentLevel: 201,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_78 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_78.data.customerId,
    userId: customer.CUSTOMER_78.data.customerId,
    currentBalance: 17500,
    currentStreak: 0,
    yuniversalMap: 1,
    yuniversalLevel: 7,
    currentLevel: 201,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_79 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_79.data.customerId,
    userId: customer.CUSTOMER_79.data.customerId,
    currentBalance: 17500,
    currentStreak: 0,
    currentLevel: 250,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_80 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_80.data.customerId,
    userId: customer.CUSTOMER_80.data.customerId,
    currentBalance: 17500,
    currentStreak: 0,
    currentLevel: 400,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_81 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_81.data.customerId,
    userId: customer.CUSTOMER_81.data.customerId,
    currentBalance: 17500,
    currentStreak: 0,
    currentLevel: 201,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_89 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_89.data.customerId,
    userId: customer.CUSTOMER_89.data.customerId,
    currentBalance: 17500,
    currentStreak: 0,
    currentLevel: 400,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_90 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_90.data.customerId,
    userId: customer.CUSTOMER_90.data.customerId,
    currentBalance: 17500,
    currentStreak: 0,
    yuniversalMap: 2,
    yuniversalLevel: 7,
    currentLevel: 401,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_91 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_91.data.customerId,
    userId: customer.CUSTOMER_91.data.customerId,
    currentBalance: 17500,
    currentStreak: 0,
    currentLevel: 401,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_92 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_92.data.customerId,
    userId: customer.CUSTOMER_92.data.customerId,
    currentBalance: 17500,
    currentStreak: 0,
    currentLevel: 399,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_93 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_93.data.customerId,
    userId: customer.CUSTOMER_93.data.customerId,
    currentBalance: 17500,
    currentStreak: 0,
    currentLevel: 800,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_94 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_94.data.customerId,
    userId: customer.CUSTOMER_94.data.customerId,
    currentBalance: 20000,
    currentStreak: 0,
    currentLevel: 800,
    nextLevelAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
  },
} as IDatabaseItem;

export const USER_GAME_STATE_95 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_95.data.customerId,
    userId: customer.CUSTOMER_95.data.customerId,
    currentBalance: 20000,
    currentStreak: 0,
    yuniversalMap: 2,
    yuniversalLevel: 7,
    currentLevel: 801,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_96 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_96.data.customerId,
    userId: customer.CUSTOMER_96.data.customerId,
    currentBalance: 20000,
    currentStreak: 0,
    currentLevel: 1200,
    nextLevelAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
  },
} as IDatabaseItem;
