import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import moment = require("moment");
import { AUTH_TEMPLATE } from "./_templates";

const type = "mongo";
const modelName = "authpassword";

export const AUTH_SA_1 = {
  type: "mongo",
  modelName: "authpassword",
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "37.34.118.97",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_SA_1.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_SA_2 = {
  type: "mongo",
  modelName: "authpassword",
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "37.34.118.97",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_SA_2.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_SA_3 = {
  type: "mongo",
  modelName: "authpassword",
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "37.34.118.97",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_SA_3.data.customerId,
  },
} as IDatabaseItem;

export const AUTH_SA_4 = {
  type: "mongo",
  modelName: "authpassword",
  data: {
    ...AUTH_TEMPLATE.data,
    lastIp: "37.34.118.97",
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_SA_4.data.customerId,
  },
} as IDatabaseItem;
