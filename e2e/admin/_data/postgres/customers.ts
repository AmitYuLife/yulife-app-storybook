import {
  generateRandomMongoId,
  IDatabaseItem,
  generateRandomInbox,
} from "@yu-life/yulife-bdd-framework";
import moment from "moment";

const type = "postgres";
const modelName = "customer";

export const CUSTOMER_ARCHIVED = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: "archived@yulife.com",
    firstName: "Ar",
    lastName: "Chived",
    status: "onboarded",
    archived: true,
  },
} as IDatabaseItem;

export const CUSTOMER_1 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Osama",
    lastName: "Rahman",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_2 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Jesse",
    lastName: "Pinkman",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_3 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Chris",
    lastName: "Bayton",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_4 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Jerry",
    lastName: "Seinfeld",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_5 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: "barry@jl.com",
    firstName: "Barry",
    lastName: "Allen",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_6 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Harry",
    lastName: "Potter",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_7 = {
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

// feedback will always show for this user on login
export const CUSTOMER_8 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Majid",
    lastName: "Jordan",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_9 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: "andy@dundermifflin.com",
    firstName: "Andy",
    lastName: "Bernard",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_10 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Ron",
    lastName: "Weasley",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_11 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Kevin",
    lastName: "Kevinson",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_12 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Micheal",
    lastName: "Eagle",
    dateOfBirth: moment().subtract(34, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_13 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Poor",
    lastName: "Supporty",
    dateOfBirth: moment().subtract(34, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_14 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Newby",
    lastName: "McNooberson",
    dateOfBirth: moment().subtract(34, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;
