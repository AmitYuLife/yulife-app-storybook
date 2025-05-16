import {
  generateRandomMongoId,
  IDatabaseItem,
  generateRandomInbox,
} from "@yu-life/yulife-bdd-framework";
import moment from "moment";

const type = "postgres";
const modelName = "customer";

export const CUSTOMER_2 = {
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

export const CUSTOMER_3 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Walter",
    lastName: "White",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_7 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Skyler",
    lastName: "White",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_12 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Newman",
    lastName: "Knight",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_13 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Frank",
    lastName: "Costanza",
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
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_90 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Bright",
    lastName: "Boi",
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
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_93 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Los",
    lastName: "Santos",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_94 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "El",
    lastName: "Purpelo",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_95 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Purple",
    lastName: "Man",
    status: "onboarded",
  },
} as IDatabaseItem;
