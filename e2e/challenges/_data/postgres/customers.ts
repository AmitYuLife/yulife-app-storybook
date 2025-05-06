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
    email: "dan@yulife.com",
    firstName: "Dan",
    lastName: "Greane",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_2 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: "osama@yulife.com",
    firstName: "Osama",
    lastName: "Rahman",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_6 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: "gus@yulife.com",
    firstName: "Gustavo",
    lastName: "Fring",
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
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_8 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: "jeffleff@yulife.com",
    firstName: "Jeff",
    lastName: "Leff",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_9 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "George",
    lastName: "Costanza",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_10 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: "anyaforger@yulife.com",
    firstName: "Anya",
    lastName: "Forger",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_11 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: "yorforger@yulife.com",
    firstName: "Yor",
    lastName: "Forger",
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
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_35 = {
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

export const CUSTOMER_MEDITOPIA_1 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "David",
    lastName: "Reit",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_MEDITOPIA_2 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Steph",
    lastName: "Reit",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_52 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Niamh",
    lastName: "Karia",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_54 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Sasha",
    lastName: "Stock",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_55 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Simone",
    lastName: "Posner",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_56 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Milton",
    lastName: "Thake",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_57 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Stephen",
    lastName: "Michael",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_58 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Paris",
    lastName: "Hilton",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_61 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Alex",
    lastName: "Breban",
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

export const CUSTOMER_68 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Alex",
    lastName: "Schajer",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_71 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Cersei",
    lastName: "Lannister",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_72 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Jamie",
    lastName: "Lannister",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_76 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Table",
    lastName: "Chairman",
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

export const CUSTOMER_84 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Got",
    lastName: "Deleted_Duellers",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_86 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Mr",
    lastName: "Brain",
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_132 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Time",
    lastName: "Traveler",
    status: "onboarded",
  },
} as IDatabaseItem;
