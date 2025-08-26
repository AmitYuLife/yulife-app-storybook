import {
  generateRandomInbox,
  generateRandomMongoId,
  IDatabaseItem,
} from "@yu-life/yulife-bdd-framework";

const type = "postgres";
const modelName = "customer";

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

export const CUSTOMER_ZAPP = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Zapp",
    lastName: "Brannigan",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_AMY = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Amy",
    lastName: "Wong",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_HERMES = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Hermes",
    lastName: "Conrad",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_KIF = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Kif",
    lastName: "Kroker",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_CALCULON = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Calculon",
    lastName: "Robot",
    status: "onboarded",
  },
} as IDatabaseItem;
