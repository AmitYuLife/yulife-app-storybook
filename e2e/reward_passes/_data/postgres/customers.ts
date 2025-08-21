import {
  generateRandomMongoId,
  generateRandomPostgresId,
  IDatabaseItem,
} from "@yu-life/yulife-bdd-framework";

const type = "postgres" as const;
const modelName = "customer" as const;

export const CUSTOMER_PREVENTION_PASS_01: IDatabaseItem = {
  type,
  modelName,
  data: {
    customerId: generateRandomPostgresId(),
    email: `test+${generateRandomMongoId()}@yulife.com`,
    firstName: "Tywin",
    lastName: "Lannister",
    status: "onboarded",
    preferred_content_location: "GB",
  },
};

export const CUSTOMER_PREVENTION_PASS_02: IDatabaseItem = {
  type,
  modelName,
  data: {
    customerId: generateRandomPostgresId(),
    email: `test+${generateRandomMongoId()}@yulife.com`,
    firstName: "Arya",
    lastName: "Stark",
    status: "onboarded",
    preferred_content_location: "GB",
  },
};
