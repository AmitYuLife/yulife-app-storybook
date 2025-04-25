import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";

export const USER_GAME_STATE_SA_1 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_SA_1.data.customerId,
    currentBalance: 17500,
    currentStreak: 0,
    currentLevel: 400,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_SA_2 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_SA_2.data.customerId,
    currentBalance: 17500,
    currentStreak: 0,
    currentLevel: 400,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_SA_3 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_SA_3.data.customerId,
    currentBalance: 17500,
    currentStreak: 0,
    currentLevel: 400,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_SA_4 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_SA_4.data.customerId,
    currentBalance: 17500,
    currentStreak: 0,
    currentLevel: 400,
  },
} as IDatabaseItem;
