import { generateRandomInbox, generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

const type = "postgres"
const modelName = "customer"

export const CUSTOMER_FRY = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Phillip",
    lastName: "Fry",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_LEELA = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Turanga",
    lastName: "Leela",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_BENDER = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Bender",
    lastName: "Rodriguez",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_ZOIDBERG = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "John",
    lastName: "Zoidberg",
    status: "onboarded",
  },
} as IDatabaseItem;
