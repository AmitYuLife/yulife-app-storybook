import { IDatabaseItem, generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import * as customer from "../postgres/customers";

const type = "mongo" as const;
const modelName = "users" as const;

const DEFAULT_DATA = {
  isAvatarCreated: true,
  earnRate: 5,
  avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
  avatarCreatedAt: new Date("2025-06-27T09:57:00.615Z"),
  readyForInvite: true,
  searchTokenVersion: "1",
  lastAppVersion: "4.72.0",
  lastSessionAt: moment().subtract(1, "day").toDate(),
  utcOffset: moment().utcOffset(),
  bundleIdentifiers: {
    steps: [],
  },
  activityLastReceived: {
    cycling: moment().subtract(1, "day").toDate(),
    meditation: moment().subtract(1, "day").toDate(),
    steps: moment().subtract(1, "day").toDate(),
  },
};

export const USER_PREVENTION_PASS_01: IDatabaseItem = {
  type,
  modelName,
  data: {
    ...DEFAULT_DATA,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_PREVENTION_PASS_01.data.customerId,
  },
};

export const USER_PREVENTION_PASS_02: IDatabaseItem = {
  type,
  modelName,
  data: {
    ...DEFAULT_DATA,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_PREVENTION_PASS_02.data.customerId,
  },
};

export const USER_WELLBEING_PASS_01: IDatabaseItem = {
  type,
  modelName,
  data: {
    ...DEFAULT_DATA,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_WELLBEING_PASS_01.data.customerId,
  },
};

export const USER_WELLBEING_PASS_02: IDatabaseItem = {
  type,
  modelName,
  data: {
    ...DEFAULT_DATA,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_WELLBEING_PASS_02.data.customerId,
  },
};
