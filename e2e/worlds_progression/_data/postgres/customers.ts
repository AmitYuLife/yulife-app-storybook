import { generateRandomMongoId, IDatabaseItem, generateRandomInbox } from "@yu-life/yulife-bdd-framework";
import moment from "moment";

const type = "postgres";
const modelName = "customer";

export const CUSTOMER_2 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: "osama@yulife.com",
    firstName: "Osama",
    lastName: "Rahman",
    dateOfBirth: moment().subtract(25, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_3 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: "walter@yulife.com",
    firstName: "Walter",
    lastName: "White",
    dateOfBirth: moment().subtract(50, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_7 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: "skyler@yulife.com",
    firstName: "Skyler",
    lastName: "White",
    dateOfBirth: moment().subtract(42, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;


export const CUSTOMER_12 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: "newman@yulife.com",
    firstName: "Newman",
    lastName: "Knight",
    dateOfBirth: moment().subtract(40, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_13 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: "frank@yulife.com",
    firstName: "Frank",
    lastName: "Costanza",
    dateOfBirth: moment().subtract(70, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_60 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Ivan",
    lastName: "Varga",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_63 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Sam",
    lastName: "Simms",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_64 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Tony",
    lastName: "Blair",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_67 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Rishi",
    lastName: "Sunak",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_69 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "John",
    lastName: "Snow",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_70 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Robert",
    lastName: "Boratheon",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_78 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Timothy",
    lastName: "Poogman",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_79 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Charlotte",
    lastName: "Poogman",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_80 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Hannibal",
    lastName: "Poogman",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_81 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Isaac",
    lastName: "Franky",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_89 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Mister",
    lastName: "Bright",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  }
} as IDatabaseItem

export const CUSTOMER_90 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Bright",
    lastName: "Boi",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_91 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Spoder",
    lastName: "Man",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_92 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "El",
    lastName: "Manuel",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;
