import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customers from "../postgres/customers";

const MODEL_DEFAULTS: Pick<IDatabaseItem, "modelName" | "type"> = {
    type: "mongo",
    modelName: "userprofile",
}

const RECORD_DEFAULTS = {
    rewardStoreLocation: "GB",
    gameSettings: {
        cyclingMeasurement: "km",
    },
}

export const USER_PROFILE_1 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_1.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_FIIT = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_FIIT.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_BODY_COACH = {
    ...MODEL_DEFAULTS,
    data: {
      _id: generateRandomMongoId(),
      userId: customers.CUSTOMER_BODY_COACH.data.customerId,
      ...RECORD_DEFAULTS,
    },
  } as IDatabaseItem;

export const USER_PROFILE_122 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_122.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;
