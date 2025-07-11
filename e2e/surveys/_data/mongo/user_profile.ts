import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";

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
    userId: customer.CUSTOMER_1.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_2 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_2.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_3 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_3.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_4 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_4.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;
