import { IDatabaseItem, generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";

const type = "mongo" as const;
const modelName = "usernotificationssettings" as const;

const DEFAULT_DATA = {
  challengeCompletion: {
    isActive: true,
    isAvailable: true,
    id: "99999902",
  },
  dailyChallengeReminder: {
    isActive: false,
    isAvailable: false,
    id: "99999903",
    time: new Date("2000-01-01T08:00:00.000Z"),
  },
  duels: {
    isActive: true,
    isAvailable: true,
    id: "99999906",
  },
  marketing: {
    isActive: true,
    isAvailable: true,
    id: "99999908",
  },
  streakSaver: {
    isActive: false,
    isAvailable: true,
    id: "99999904",
    time: new Date("2000-01-01T10:00:00.000Z"),
  },
  surges: {
    isActive: true,
    isAvailable: true,
    id: "99999907",
  },
};

export const USER_NOTIFICATIONS_SETTINGS_PREVENTION_PASS_01: IDatabaseItem = {
  type,
  modelName,
  data: {
    ...DEFAULT_DATA,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_PREVENTION_PASS_01.data.customerId,
  },
};

export const USER_NOTIFICATIONS_SETTINGS_PREVENTION_PASS_02: IDatabaseItem = {
  type,
  modelName,
  data: {
    ...DEFAULT_DATA,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_PREVENTION_PASS_02.data.customerId,
  },
};

export const USER_NOTIFICATIONS_SETTINGS_WELLBEING_PASS_01: IDatabaseItem = {
  type,
  modelName,
  data: {
    ...DEFAULT_DATA,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_WELLBEING_PASS_01.data.customerId,
  },
};

export const USER_NOTIFICATIONS_SETTINGS_WELLBEING_PASS_02: IDatabaseItem = {
  type,
  modelName,
  data: {
    ...DEFAULT_DATA,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_WELLBEING_PASS_02.data.customerId,
  },
};
