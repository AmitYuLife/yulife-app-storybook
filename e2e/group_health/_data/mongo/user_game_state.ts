import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";

export const USER_GAME_STATE_116 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_116_GHI_REWARDS.data.customerId,
    userId: customer.CUSTOMER_116_GHI_REWARDS.data.customerId,
    currentBalance: 17500,
    currentStreak: 0,
    currentLevel: 80,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_121 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_121_GHI_REWARDS.data.customerId,
    userId: customer.CUSTOMER_121_GHI_REWARDS.data.customerId,
    currentBalance: 17500,
    currentStreak: 0,
    currentLevel: 241,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_127 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_127_GHI_REWARDS.data.customerId,
    userId: customer.CUSTOMER_127_GHI_REWARDS.data.customerId,
    currentBalance: 17500,
    currentStreak: 0,
    currentLevel: 241,
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

export const USER_GAME_STATE_140 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_140_GHI_REWARDS.data.customerId,
    userId: customer.CUSTOMER_140_GHI_REWARDS.data.customerId,
    currentBalance: 800,
    currentStreak: 0,
    currentLevel: 2,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_141 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_141.data.customerId,
    userId: customer.CUSTOMER_141.data.customerId,
    currentBalance: 17500,
    currentStreak: 0,
    currentLevel: 80,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_142 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_142.data.customerId,
    userId: customer.CUSTOMER_142.data.customerId,
    currentBalance: 1000,
    currentStreak: 0,
    currentLevel: 11,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_143 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_143.data.customerId,
    userId: customer.CUSTOMER_143.data.customerId,
    currentBalance: 1000,
    currentStreak: 0,
    currentLevel: 316,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_144 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_144.data.customerId,
    userId: customer.CUSTOMER_144.data.customerId,
    currentBalance: 1000,
    currentStreak: 0,
    currentLevel: 316,
  },
} as IDatabaseItem;
