import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import { AUTH_TEMPLATE } from "./_templates";

const type = "mongo";
const modelName = "authpassword";

export const AUTH_1 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    attempts: 1,
    lastAttempt: "2019-03-12T14:10:29.275+00:00",
    lastIp: "35.176.60.174",
    password: "letmein",
    scope: "user",
    strategy: "0",
    used: false,
    userId: customer.CUSTOMER_1.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_2 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    attempts: 1,
    lastAttempt: "2019-03-12T14:10:29.275+00:00",
    lastIp: "35.176.60.174",
    password: "letmein",
    scope: "user",
    strategy: "0",
    used: false,
    userId: customer.CUSTOMER_2.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_5 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    lastIp: "35.176.60.174",
    password: "letmein",
    scope: "user",
    strategy: "0",
    used: false,
    userId: customer.CUSTOMER_5.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_6 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    lastIp: "35.176.60.174",
    password: "letmein",
    scope: "user",
    strategy: "0",
    used: false,
    userId: customer.CUSTOMER_6.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_7 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    lastIp: "35.176.60.174",
    password: "letmein",
    scope: "user",
    strategy: "0",
    used: false,
    userId: customer.CUSTOMER_7.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_8 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    lastIp: "35.176.60.174",
    password: "letmein",
    scope: "user",
    strategy: "0",
    used: false,
    userId: customer.CUSTOMER_8.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_15 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.888",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_15.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_16 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.999",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_16.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_17 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.111",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_17.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_18 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_18.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_19 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_19.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_20 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_20.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_21 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.333",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_21.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_27 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.888",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_27.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_28 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.888",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_28.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_39 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.61.111",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_39.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_40 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.44422",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_40.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_42 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.61.111",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_42.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_44 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.61.111",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_44.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_47 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_47.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_50 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.61.111",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_50.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_65 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_65.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_66 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.44422",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_66.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_71 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_71.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_73 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_73.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_83 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.44422",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_83.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_84 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.44422",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_84.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_89 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_89.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_90 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_90.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_138 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.999",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_138.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_139 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.999",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_139.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_142 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.111",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_142.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_143 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.111",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_143.data.customerId,
  },
} as IDatabaseItem;
