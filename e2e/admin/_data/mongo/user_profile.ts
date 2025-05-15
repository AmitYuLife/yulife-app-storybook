import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customers from "../postgres/customers";

const MODEL_DEFAULTS: Pick<IDatabaseItem, "modelName" | "type"> = {
  type: "mongo",
  modelName: "userprofile",
};

const RECORD_DEFAULTS = {
  rewardStoreLocation: "GB",
  gameSettings: {
    cyclingMeasurement: "km",
  },
};

export const USER_PROFILE_1 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_1.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_2 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_2.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_3 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_3.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_4 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_4.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_5 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_5.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_6 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_6.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_7 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_7.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_10 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_10.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_11 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_11.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_12 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_12.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_13 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_13.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_14 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_14.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;
