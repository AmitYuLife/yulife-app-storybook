import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import { AUTH_TEMPLATE } from "../mongo/_templates";

const type = "mongo";
const modelName = "authpassword";

export const AUTH_1 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.61.111",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_1.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_2 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_2.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_3 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_3.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_4 = {
  type,
  modelName,
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_4.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_5 = {
  type: "mongo",
  modelName: "authpassword",
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "35.176.60.222",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_5.data.customerId,
  },
} as IDatabaseItem;
