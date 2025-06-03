import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_USA_1, CUSTOMER_USA_2 } from "../postgres/customers";

export const USER_GAME_STATE_USA_1 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    userId: CUSTOMER_USA_1.data.customerId,
    currentBalance: 0,
    currentStreak: 0,
    currentLevel: 1,
  },
} as IDatabaseItem;

export const USER_GAME_STATE_USA_2 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    userId: CUSTOMER_USA_2.data.customerId,
    currentBalance: 0,
    currentStreak: 0,
    currentLevel: 1,
  },
} as IDatabaseItem;
