import {
  generateRandomMongoId,
  generateRandomPostgresId,
  IDatabaseItem,
} from "@yu-life/yulife-bdd-framework";

const type = "postgres" as const;
const modelName = "customer" as const;

const DEFAULT_DATA = {
  status: "onboarded",
  preferredContentLocation: "GB",
};

export const CUSTOMER_PREVENTION_PASS_01: IDatabaseItem = {
  type,
  modelName,
  data: {
    ...DEFAULT_DATA,
    customerId: generateRandomPostgresId(),
    email: `test+${generateRandomMongoId()}@yulife.com`,
    firstName: "Tywin",
    lastName: "Lannister",
  },
};

export const CUSTOMER_PREVENTION_PASS_02: IDatabaseItem = {
  type,
  modelName,
  data: {
    ...DEFAULT_DATA,
    customerId: generateRandomPostgresId(),
    email: `test+${generateRandomMongoId()}@yulife.com`,
    firstName: "Arya",
    lastName: "Stark",
  },
};

export const CUSTOMER_WELLBEING_PASS_01: IDatabaseItem = {
  type,
  modelName,
  data: {
    ...DEFAULT_DATA,
    customerId: generateRandomPostgresId(),
    email: `test+${generateRandomMongoId()}@yulife.com`,
    firstName: "Daenerys",
    lastName: "Targaryen",
  },
};

export const CUSTOMER_WELLBEING_PASS_02: IDatabaseItem = {
  type,
  modelName,
  data: {
    ...DEFAULT_DATA,
    customerId: generateRandomPostgresId(),
    email: `test+${generateRandomMongoId()}@yulife.com`,
    firstName: "Sansa",
    lastName: "Stark",
  },
};
