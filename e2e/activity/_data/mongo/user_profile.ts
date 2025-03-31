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

export const USER_PROFILE_2 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_2.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_6 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_6.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_7 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_7.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_8 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_8.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_15 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_15.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_16 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_16.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_17 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_17.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_18 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_18.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_19 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_19.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_39 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_39.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_40 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_40.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_44 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_44.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_42 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_42.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_47 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_47.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_50 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_50.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_65 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_65.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_66 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_66.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_71 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_71.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_73 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_73.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_83 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_83.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_84 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_84.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_89 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_89.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_90 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_90.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_138 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_138.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;

export const USER_PROFILE_139 = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_139.data.customerId,
    ...RECORD_DEFAULTS,
  },
} as IDatabaseItem;
