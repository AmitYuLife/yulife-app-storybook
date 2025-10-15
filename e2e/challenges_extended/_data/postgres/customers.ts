import {
  generateRandomMongoId,
  IDatabaseItem,
  generateRandomInbox,
} from "@yu-life/yulife-bdd-framework";
import moment from "moment";

const type = "postgres";
const modelName = "customer";

export const CUSTOMER_1 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Dan",
    lastName: "Greane",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_34 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: "robin@jl.com",
    firstName: "Tim",
    lastName: "Drake",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_FIIT = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Timothy",
    lastName: "Fiitman",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_BODY_COACH = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Joe",
    lastName: "Wicks",
    status: "onboarded",
    preferredContentLocation: "GB",
  },
} as IDatabaseItem;

export const CUSTOMER_122 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Testing",
    lastName: "Boosts",
    status: "onboarded",
  },
} as IDatabaseItem;
