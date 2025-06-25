import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import moment from "moment";

export const USER_GAME_STATE_2 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_2.data.customerId,
    userId: customer.CUSTOMER_2.data.customerId,
    currentBalance: 0,
    currentStreak: 0,
    currentLevel: 1,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_6 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_6.data.customerId,
    userId: customer.CUSTOMER_6.data.customerId,
    currentBalance: 0,
    currentStreak: 1,
    currentLevel: 2,
    nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
  },
} as IDatabaseItem;

export const USER_GAME_STATE_7 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_7.data.customerId,
    userId: customer.CUSTOMER_7.data.customerId,
    activeStreakId: "YU_STREAK_001",
    currentBalance: 440,
    currentStreak: 4,
    currentLevel: 5,
    nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
    nextLevelAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
  },
} as IDatabaseItem;

export const USER_GAME_STATE_8 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_8.data.customerId,
    userId: customer.CUSTOMER_8.data.customerId,
    activeStreakId: "YU_STREAK_001",
    currentBalance: 320,
    currentLevel: 3,
    currentStreak: 0,
    nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
  },
} as IDatabaseItem;

export const USER_GAME_STATE_15 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_15.data.customerId,
    userId: customer.CUSTOMER_15.data.customerId,
    activeStreakId: "YU_STREAK_001",
    currentBalance: 320,
    currentLevel: 4,
    nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
  },
} as IDatabaseItem;

export const USER_GAME_STATE_16 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_16.data.customerId,
    userId: customer.CUSTOMER_16.data.customerId,
    activeStreakId: "YU_STREAK_001",
    currentBalance: 50,
    currentLevel: 1,
    nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
  },
} as IDatabaseItem;

export const USER_GAME_STATE_17 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_17.data.customerId,
    userId: customer.CUSTOMER_17.data.customerId,
    activeStreakId: "YU_STREAK_001",
    currentBalance: 360,
    currentLevel: 2,
    nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
  },
} as IDatabaseItem;

export const USER_GAME_STATE_18 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_18.data.customerId,
    userId: customer.CUSTOMER_18.data.customerId,
    activeStreakId: "YU_STREAK_001",
    currentBalance: 320,
    currentLevel: 4,
    nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
  },
} as IDatabaseItem;

export const USER_GAME_STATE_19 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_19.data.customerId,
    userId: customer.CUSTOMER_19.data.customerId,
    currentBalance: 250,
    currentStreak: 0,
    currentLevel: 1,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_20 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_20.data.customerId,
    userId: customer.CUSTOMER_20.data.customerId,
    currentBalance: 20,
    currentStreak: 0,
    currentLevel: 1,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_39 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_39.data.customerId,
    userId: customer.CUSTOMER_39.data.customerId,
    currentBalance: 20000,
    currentStreak: 0,
    currentLevel: 201,
    yuniversalMap: 1,
    yuniversalLevel: 1,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_40 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_40.data.customerId,
    userId: customer.CUSTOMER_40.data.customerId,
    currentBalance: 20000,
    currentStreak: 0,
    currentLevel: 49,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_44 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_44.data.customerId,
    userId: customer.CUSTOMER_44.data.customerId,
    currentBalance: 0,
    currentStreak: 0,
    currentLevel: 90,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_42 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_42.data.customerId,
    userId: customer.CUSTOMER_42.data.customerId,
    activeStreakId: "YU_STREAK_001",
    currentBalance: 320,
    currentStreak: 5,
    currentLevel: 51,
    nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
  },
} as IDatabaseItem;

export const USER_GAME_STATE_47 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_47.data.customerId,
    userId: customer.CUSTOMER_47.data.customerId,
    currentBalance: 500,
    currentStreak: 1,
    currentLevel: 1,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_50 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_50.data.customerId,
    userId: customer.CUSTOMER_50.data.customerId,
    currentBalance: 500,
    currentStreak: 1,
    currentLevel: 1,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_65 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_65.data.customerId,
    userId: customer.CUSTOMER_65.data.customerId,
    currentBalance: 220,
    currentStreak: 0,
    currentLevel: 21,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_66 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_66.data.customerId,
    userId: customer.CUSTOMER_66.data.customerId,
    currentBalance: 17500,
    currentStreak: 0,
    currentLevel: 201,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_71 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_71.data.customerId,
    userId: customer.CUSTOMER_71.data.customerId,
    currentBalance: 500,
    currentStreak: 1,
    currentLevel: 1,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_73 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_73.data.customerId,
    userId: customer.CUSTOMER_73.data.customerId,
    activeStreakId: "YU_STREAK_001",
    currentBalance: 360,
    currentLevel: 2,
    nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
  },
} as IDatabaseItem;

export const USER_GAME_STATE_83 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_83.data.customerId,
    userId: customer.CUSTOMER_83.data.customerId,
    currentBalance: 0,
    currentStreak: 0,
    currentLevel: 1,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_84 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_84.data.customerId,
    userId: customer.CUSTOMER_84.data.customerId,
    currentBalance: 500,
    currentStreak: 1,
    currentLevel: 152,
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
    currentBalance: 15000,
    currentStreak: 0,
    currentLevel: 352,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_130 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_130_GHI_LEAVER.data.customerId,
    userId: customer.CUSTOMER_130_GHI_LEAVER.data.customerId,
    currentBalance: 10000,
    currentStreak: 0,
    currentLevel: 36,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_137 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_137_GHI_REWARDS.data.customerId,
    userId: customer.CUSTOMER_137_GHI_REWARDS.data.customerId,
    currentBalance: 800,
    currentStreak: 0,
    currentLevel: 315,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_138 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_138.data.customerId,
    userId: customer.CUSTOMER_138.data.customerId,
    currentBalance: 50,
    currentLevel: 1,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_139 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_139.data.customerId,
    userId: customer.CUSTOMER_139.data.customerId,
    currentBalance: 50,
    currentLevel: 1,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_142 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_142.data.customerId,
    currentBalance: 0,
    currentStreak: 0,
    currentLevel: 1,
  },
} as IDatabaseItem;
