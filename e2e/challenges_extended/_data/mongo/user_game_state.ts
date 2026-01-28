import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import moment from "moment";

const type = "mongo";
const modelName = "user_game_state";

export const USER_GAME_STATE_FIIT = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_FIIT.data.customerId,
    userId: customer.CUSTOMER_FIIT.data.customerId,
    activeStreakId: "YU_STREAK_CHEST_0002",
    currentBalance: 0,
    currentStreak: 0,
    currentLevel: 5,
    nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
  },
} as IDatabaseItem;

export const USER_GAME_STATE_BODY_COACH = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_BODY_COACH.data.customerId,
    userId: customer.CUSTOMER_BODY_COACH.data.customerId,
    activeStreakId: "YU_STREAK_CHEST_0002",
    currentBalance: 0,
    currentStreak: 0,
    currentLevel: 5,
    nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
  },
} as IDatabaseItem;

export const USER_GAME_STATE_122 = {
  type: "mongo",
  modelName: "user_game_state",
  data: {
    _id: generateRandomMongoId(),
    customerId: customer.CUSTOMER_122.data.customerId,
    userId: customer.CUSTOMER_122.data.customerId,
    currentBalance: 500,
    currentStreak: 1,
    currentLevel: 50,
  },
} as IDatabaseItem;
