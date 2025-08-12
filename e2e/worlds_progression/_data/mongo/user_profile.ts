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

export const USER_PROFILE_3 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_3.data.customerId,
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

export const USER_PROFILE_60 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_60.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_63 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_63.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_64 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_64.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_67 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_67.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_69 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_69.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_70 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_70.data.customerId,
    ...RECORD_DEFAULTS,
    yuniversalLevel: 7,
  },
} as IDatabaseItem;

export const USER_PROFILE_78 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_78.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_79 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_79.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_80 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_80.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_81 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_81.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_89 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_89.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_90 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_90.data.customerId,
    ...RECORD_DEFAULTS,
    yuniversalLevel: 7,
  },
} as IDatabaseItem;

export const USER_PROFILE_91 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_91.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_92 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_92.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_93 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_93.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_94 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_94.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_95 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_95.data.customerId,
    ...RECORD_DEFAULTS,
    yuniversalLevel: 7,
  },
} as IDatabaseItem;

export const USER_PROFILE_96 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customers.CUSTOMER_96.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;
