import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customerRecords from "../generated/customer_records";

const type = "mongo" as const;
const modelName = "userprofile" as const;

const DEFAULT_DATA = {
  rewardStoreLocation: "GB",
  gameSettings: {
    cyclingMeasurement: "km",
  },
};

export const USER_PROFILE_PREVENTION_PASS_01: IDatabaseItem = {
  type,
  modelName,
  data: {
    ...DEFAULT_DATA,
    _id: generateRandomMongoId(),
    userId: customerRecords.CUSTOMER_PREVENTION_PASS_01.customer.data.customerId,
  },
};

export const USER_PROFILE_PREVENTION_PASS_02: IDatabaseItem = {
  type,
  modelName,
  data: {
    ...DEFAULT_DATA,
    _id: generateRandomMongoId(),
    userId: customerRecords.CUSTOMER_PREVENTION_PASS_02.customer.data.customerId,
  },
};

export const USER_PROFILE_WELLBEING_PASS_01: IDatabaseItem = {
  type,
  modelName,
  data: {
    ...DEFAULT_DATA,
    _id: generateRandomMongoId(),
    userId: customerRecords.CUSTOMER_WELLBEING_PASS_01.customer.data.customerId,
  },
};

export const USER_PROFILE_WELLBEING_PASS_02: IDatabaseItem = {
  type,
  modelName,
  data: {
    ...DEFAULT_DATA,
    _id: generateRandomMongoId(),
    userId: customerRecords.CUSTOMER_WELLBEING_PASS_02.customer.data.customerId,
  },
};
