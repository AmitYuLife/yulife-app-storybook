import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";

const type = "mongo" as const;
const modelName = "user_game_state" as const;

const DEFAULT_DATA = {
  currentBalance: 360,
  currentStreak: 1,
  currentLevel: 1,
};

export const USER_GAME_STATE_PREVENTION_PASS_01: IDatabaseItem = {
  type,
  modelName,
  data: {
    ...DEFAULT_DATA,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_PREVENTION_PASS_01.data.customerId,
  },
};

export const USER_GAME_STATE_PREVENTION_PASS_02: IDatabaseItem = {
  type,
  modelName,
  data: {
    ...DEFAULT_DATA,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_PREVENTION_PASS_02.data.customerId,
    currentBalance: 700,
  },
};

export const USER_GAME_STATE_WELLBEING_PASS_01: IDatabaseItem = {
  type,
  modelName,
  data: {
    ...DEFAULT_DATA,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_WELLBEING_PASS_01.data.customerId,
  },
};
export const USER_GAME_STATE_WELLBEING_PASS_02: IDatabaseItem = {
  type,
  modelName,
  data: {
    ...DEFAULT_DATA,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_WELLBEING_PASS_02.data.customerId,
  },
};
