import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";

const type = "mongo" as const;
const modelName = "authpassword" as const;

export const AUTH_PREVENTION_PASS_01: IDatabaseItem = {
  type,
  modelName,
  data: {
    userId: customer.CUSTOMER_PREVENTION_PASS_01.data.customerId,
    attempts: 1,
    lastAttempt: "2019-03-12T14:10:29.275+00:00",
    lastIp: "35.176.60.174",
    password: "letmein",
    scope: "user",
    strategy: "0",
    used: false,
    _id: generateRandomMongoId(),
  },
};

export const AUTH_PREVENTION_PASS_02: IDatabaseItem = {
  type,
  modelName,
  data: {
    userId: customer.CUSTOMER_PREVENTION_PASS_02.data.customerId,
    attempts: 1,
    lastAttempt: "2019-03-12T14:10:29.275+00:00",
    lastIp: "35.176.60.174",
    password: "letmein",
    scope: "user",
    strategy: "0",
    used: false,
    _id: generateRandomMongoId(),
  },
};
