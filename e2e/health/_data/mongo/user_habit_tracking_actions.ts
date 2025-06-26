import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import * as user from "../postgres/customers";
import * as state from "./user_habit_tracking_state";

export const USER_HABIT_SMOKING_ACTIONS_LEELA = {
  type: "mongo",
  modelName: "user_habit_tracking_actions",
  data: {
    _id: generateRandomMongoId(),
    userId: user.CUSTOMER_LEELA.data.customerId,
    type: "smoking",
    action: "streak_continue",
    state: state.USER_HABIT_SMOKING_STATE_LEELA.data._id,
    eventDate: moment().subtract(45, "days").format(),
    streakLapseDate: moment().subtract(20, "days").format(),
  },
} as IDatabaseItem;

export const USER_HABIT_SMOKING_ACTIONS_LEELA_2 = {
  type: "mongo",
  modelName: "user_habit_tracking_actions",
  data: {
    _id: generateRandomMongoId(),
    userId: user.CUSTOMER_LEELA.data.customerId,
    type: "smoking",
    action: "streak_continue",
    state: state.USER_HABIT_SMOKING_STATE_LEELA.data._id,
    eventDate: moment().subtract(17, "days").format(),
  },
} as IDatabaseItem;

export const USER_HABIT_SMOKING_ACTIONS_BENDER = {
  type: "mongo",
  modelName: "user_habit_tracking_actions",
  data: {
    _id: generateRandomMongoId(),
    userId: user.CUSTOMER_BENDER.data.customerId,
    type: "smoking",
    action: "streak_continue",
    state: state.USER_HABIT_SMOKING_STATE_BENDER.data._id,
    eventDate: moment().subtract(6, "days").format(),
  },
} as IDatabaseItem;

export const USER_HABIT_SMOKING_ACTIONS_ZOIDBERG = {
  type: "mongo",
  modelName: "user_habit_tracking_actions",
  data: {
    _id: generateRandomMongoId(),
    userId: user.CUSTOMER_ZOIDBERG.data.customerId,
    type: "smoking",
    action: "streak_continue",
    state: state.USER_HABIT_SMOKING_STATE_ZOIDBERG.data._id,
    eventDate: moment().subtract(10, "days").format(),
  },
} as IDatabaseItem;

export const USER_HABIT_SMOKING_ACTIONS_ZAPP = {
  type: "mongo",
  modelName: "user_habit_tracking_actions",
  data: {
    _id: generateRandomMongoId(),
    userId: user.CUSTOMER_ZAPP.data.customerId,
    type: "smoking",
    action: "streak_continue",
    state: state.USER_HABIT_SMOKING_STATE_ZAPP.data._id,
    eventDate: moment().subtract(27, "days").format(),
  },
} as IDatabaseItem;

export const USER_HABIT_SMOKING_ACTIONS_HERMES = {
  type: "mongo",
  modelName: "user_habit_tracking_actions",
  data: {
    _id: generateRandomMongoId(),
    userId: user.CUSTOMER_HERMES.data.customerId,
    type: "smoking",
    action: "streak_continue",
    state: state.USER_HABIT_SMOKING_STATE_HERMES.data._id,
    eventDate: moment().subtract(6, "days").format(),
  },
} as IDatabaseItem;

export const USER_HABIT_SMOKING_ACTIONS_KIFF = {
  type: "mongo",
  modelName: "user_habit_tracking_actions",
  data: {
    _id: generateRandomMongoId(),
    userId: user.CUSTOMER_KIF.data.customerId,
    type: "smoking",
    action: "streak_continue",
    state: state.USER_HABIT_SMOKING_STATE_KIFF.data._id,
    eventDate: moment().subtract(6, "days").format(),
  },
} as IDatabaseItem;

export const USER_HABIT_SMOKING_ACTIONS_CALCULON = {
  type: "mongo",
  modelName: "user_habit_tracking_actions",
  data: {
    _id: generateRandomMongoId(),
    userId: user.CUSTOMER_CALCULON.data.customerId,
    type: "smoking",
    action: "streak_continue",
    state: state.USER_HABIT_SMOKING_STATE_CALCULON.data._id,
    eventDate: moment().subtract(28, "days").format(),
  },
} as IDatabaseItem;
