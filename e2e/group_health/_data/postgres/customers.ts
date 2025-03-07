import {
  generateRandomMongoId,
  IDatabaseItem,
  generateRandomInbox,
} from "@yu-life/yulife-bdd-framework";
import moment from "moment";

const type = "postgres";
const modelName = "customer";

export const CUSTOMER_GHI = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Teddy",
    lastName: "Group",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_116_GHI_REWARDS = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Bali",
    lastName: "Mumba",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_121_GHI_REWARDS = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Finn",
    lastName: "Azaz",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_127_GHI_REWARDS = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Luke",
    lastName: "Cundle",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_137_GHI_REWARDS = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Brendan",
    lastName: "Galloway",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_140_GHI_REWARDS = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Bilbo",
    lastName: "Baggins",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_141 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Ibrahim",
    lastName: "Cissoko",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_142 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Dan",
    lastName: "Grimshaw",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_143 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Conor",
    lastName: "Hazard",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_144 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Maksym",
    lastName: "Talovierov",
    status: "onboarded",
  },
} as IDatabaseItem;
