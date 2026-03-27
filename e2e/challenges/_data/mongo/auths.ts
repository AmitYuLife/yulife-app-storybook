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
    lastIp: "35.176.60.121",
    password: "letmein",
    scope: "user",
    strategy: "0",
    used: false,
    userId: customer.CUSTOMER_8.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_9 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_9.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_10 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_10.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_11 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_11.data.customerId,
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

export const AUTH_35 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.61.111",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_35.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_52 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_52.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_54 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_54.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_55 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_55.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_56 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_56.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_57 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_57.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_58 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_58.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_MEDITOPIA_1 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    lastIp: "35.176.60.174",
    password: "letmein",
    scope: "user",
    strategy: "0",
    used: false,
    userId: customer.CUSTOMER_MEDITOPIA_1.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_MEDITOPIA_2 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    lastIp: "35.176.60.174",
    password: "letmein",
    scope: "user",
    strategy: "0",
    used: false,
    userId: customer.CUSTOMER_MEDITOPIA_2.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_61 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_61.data.customerId,
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

export const AUTH_68 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.44422",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_68.data.customerId,
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

export const AUTH_72 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_72.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_76 = {
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
    userId: customer.CUSTOMER_76.data.customerId,
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

export const AUTH_86 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_86.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_132 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.888",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_132.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_RANDOM_CHEST = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.999",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_RANDOM_CHEST.data.customerId,
  },
} as IDatabaseItem;
