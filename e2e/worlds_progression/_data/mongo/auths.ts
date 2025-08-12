import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import { AUTH_TEMPLATE } from "./_templates";

const type = "mongo";
const modelName = "authpassword";

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

export const AUTH_3 = {
  type,
  modelName,
  data: {
    ...AUTH_2.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_3.data.customerId,
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

export const AUTH_12 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.444",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_12.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_13 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.555",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_13.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_60 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_60.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_63 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_63.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_64 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_64.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_67 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.44422",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_67.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_69 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.44422",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_69.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_70 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.44422",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_70.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_78 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.44422",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_78.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_79 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.44422",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_79.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_80 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.44422",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_80.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_81 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.44422",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_81.data.customerId,
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
    lastIp: "35.176.60.44422",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_90.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_91 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_91.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_92 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_92.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_93 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_93.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_94 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_94.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_95 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_95.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_96 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_96.data.customerId,
  },
} as IDatabaseItem;
