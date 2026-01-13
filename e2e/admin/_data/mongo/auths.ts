import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import * as customer from "../postgres/customers";
import { AUTH_TEMPLATE } from "./_templates";

const type = "mongo";
const modelName = "authpassword";

export const AUTH_ARCHIVED = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.777",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_ARCHIVED.data.customerId,
  },
} as IDatabaseItem;

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

export const AUTH_3 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.61.111",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_3.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_4 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    lastIp: "35.176.60.174",
    password: "letmein",
    scope: "user",
    strategy: "0",
    used: false,
    userId: customer.CUSTOMER_4.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_5 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.61.111",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_5.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_6 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.61.111",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_6.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_7 = {
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
    userId: customer.CUSTOMER_7.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_8 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.888",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_8.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_9 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.888",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_9.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_10 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.61.111",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_10.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_11 = {
  type,
  modelName,
  data: {
    ...AUTH_1.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_11.data.customerId,
    attempts: 5,
    lastAttempt: moment().utc().subtract(30, "minutes").subtract(15, "seconds").toISOString(),
  },
} as IDatabaseItem;

export const AUTH_12 = {
  type,
  modelName,
  data: {
    ...AUTH_1.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_12.data.customerId,
    attempts: 5,
  },
} as IDatabaseItem;

export const AUTH_13 = {
  type,
  modelName,
  data: {
    ...AUTH_1.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_13.data.customerId,
    attempts: 5,
  },
} as IDatabaseItem;
