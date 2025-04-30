import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import * as user from "../postgres/customers";
import { v4 as uuid } from "uuid";

const sharedFields = {
  currencySymbol: "£",
  weeklyExpense: 5,
  amountUsedPerDay: 8,
  smokingType: "both",
  triggers: ["celebrate", "financial stress"],
  motivations: ["save_money", "improve_health"],
};

const generateStreakDays = (length: number): number[] => Array.from({ length }, (_, i) => i + 1);

export const USER_HABIT_SMOKING_STATE_LEELA = {
  type: "mongo",
  modelName: "user_habit_tracking_state",
  data: {
    _id: generateRandomMongoId(),
    userId: user.CUSTOMER_LEELA.data.customerId,
    type: "smoking",
    inputData: {
      journeySessionId: uuid(),
      currencySymbol: "£",
      weeklyExpense: 1.3,
      amountUsedPerDay: 12,
      smokingType: "both",
      triggers: ["celebrate", "financial stress"],
      motivations: ["save_money", "improve_health"],
    },
    active: true,
    archived: false,
    streakStartedAt: moment().subtract(17, "days").toDate(),
    lastUpdatedStreakAt: moment().subtract(1, "days").toDate(),
    streakLength: 17,
    claimedStreakDays: generateStreakDays(17),
    previousStreaks: [25],
    optOutCount: 0,
    optedOut: false,
  },
} as IDatabaseItem;

export const USER_HABIT_SMOKING_STATE_BENDER = {
  type: "mongo",
  modelName: "user_habit_tracking_state",
  data: {
    _id: generateRandomMongoId(),
    userId: user.CUSTOMER_BENDER.data.customerId,
    type: "smoking",
    inputData: {
      journeySessionId: uuid(),
      currencySymbol: "£",
      weeklyExpense: 10,
      amountUsedPerDay: 12,
      smokingType: "both",
      triggers: ["celebrate", "financial stress"],
      motivations: ["save_money", "improve_health"],
    },
    active: true,
    archived: false,
    streakStartedAt: moment().subtract(6, "days").toDate(),
    lastUpdatedStreakAt: moment().subtract(1, "days").toDate(),
    streakLength: 6,
    claimedStreakDays: [],
    previousStreaks: [13],
    optOutCount: 0,
    optedOut: false,
  },
} as IDatabaseItem;

export const USER_HABIT_SMOKING_STATE_ZOIDBERG = {
  type: "mongo",
  modelName: "user_habit_tracking_state",
  data: {
    _id: generateRandomMongoId(),
    userId: user.CUSTOMER_ZOIDBERG.data.customerId,
    type: "smoking",
    inputData: {
      journeySessionId: uuid(),
      currencySymbol: "£",
      weeklyExpense: 20,
      amountUsedPerDay: 8,
      smokingType: "both",
      triggers: ["celebrate", "financial stress"],
      motivations: ["save_money", "improve_health"],
    },
    active: true,
    archived: false,
    streakStartedAt: moment().subtract(15, "days").toDate(),
    lastUpdatedStreakAt: moment().subtract(5, "days").toDate(),
    streakLength: 10,
    claimedStreakDays: generateStreakDays(10),
    previousStreaks: [],
    optOutCount: 0,
    optedOut: false,
  },
} as IDatabaseItem;

export const USER_HABIT_SMOKING_STATE_ZAPP = {
  type: "mongo",
  modelName: "user_habit_tracking_state",
  data: {
    _id: generateRandomMongoId(),
    userId: user.CUSTOMER_ZAPP.data.customerId,
    type: "smoking",
    inputData: {
      journeySessionId: uuid(),
      currencySymbol: "£",
      weeklyExpense: 5,
      amountUsedPerDay: 8,
      smokingType: "both",
      triggers: ["celebrate", "financial stress"],
      motivations: ["save_money", "improve_health"],
    },
    active: true,
    archived: false,
    streakStartedAt: moment().subtract(28, "days").toDate(),
    lastUpdatedStreakAt: moment().subtract(1, "days").toDate(),
    streakLength: 27,
    claimedStreakDays: generateStreakDays(27),
    previousStreaks: [],
    optOutCount: 0,
    optedOut: false,
  },
} as IDatabaseItem;

export const USER_HABIT_SMOKING_STATE_HERMES = {
  type: "mongo",
  modelName: "user_habit_tracking_state",
  data: {
    _id: generateRandomMongoId(),
    userId: user.CUSTOMER_HERMES.data.customerId,
    type: "smoking",
    inputData: {
      journeySessionId: uuid(),
      ...sharedFields,
    },
    active: true,
    archived: false,
    streakStartedAt: moment().subtract(6, "days").toDate(),
    lastUpdatedStreakAt: moment().subtract(6, "days").toDate(),
    streakLength: 1,
    claimedStreakDays: [],
    previousStreaks: [],
    optOutCount: 5,
    optedOut: false,
  },
} as IDatabaseItem;

export const USER_HABIT_SMOKING_STATE_KIFF = {
  type: "mongo",
  modelName: "user_habit_tracking_state",
  data: {
    _id: generateRandomMongoId(),
    userId: user.CUSTOMER_KIF.data.customerId,
    type: "smoking",
    inputData: {
      journeySessionId: uuid(),
      ...sharedFields,
    },
    active: true,
    archived: false,
    streakStartedAt: moment().subtract(13, "days").toDate(),
    lastUpdatedStreakAt: moment().subtract(13, "days").toDate(),
    streakLength: 1,
    claimedStreakDays: [],
    previousStreaks: [],
    optOutCount: 10,
    optedOut: false,
  },
} as IDatabaseItem;
