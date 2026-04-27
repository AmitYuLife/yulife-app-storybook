import {
  generateRandomMongoId,
  IDatabaseItem,
  generateRandomInbox,
} from "@yu-life/yulife-bdd-framework";

const type = "postgres";
const modelName = "customer";

export const CUSTOMER_SA_1 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "SA",
    lastName: "Customer",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_SA_2 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Rei",
    lastName: "Buldo",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_SA_3 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Faf",
    lastName: "De Klerk",
    status: "onboarded",
  },
} as IDatabaseItem;
