import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import { AUTH_TEMPLATE, AUTH_TEMPLATE_BDD_SEEDED } from "./_templates";

const type = "mongo";
const modelName = "authpassword";

export const AUTH_34 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.61.000",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_34.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_LEAVER = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.43323",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_LEAVER.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_111 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_111.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_112 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_112.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_113 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_113.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_114 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_114.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_126 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_126_LEAVER_WELLBEING.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_STORE_ACCESS_PERIOD = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.43323",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_STORE_ACCESS_PERIOD.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_STORE_ACCESS_DENIED = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.43323",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_STORE_ACCESS_DENIED.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_STORE_ACCESS_NEVER = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.43323",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_STORE_ACCESS_NEVER.data.customerId,
  },
} as IDatabaseItem;
