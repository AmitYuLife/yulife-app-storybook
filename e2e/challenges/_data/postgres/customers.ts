import { generateRandomMongoId, IDatabaseItem, generateRandomInbox } from "@yu-life/yulife-bdd-framework";
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
    dateOfBirth: moment().subtract(28, "years").toDate(),
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
    dateOfBirth: moment().subtract(25, "years").toDate(),
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
    dateOfBirth: moment().subtract(48, "years").toDate(),
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

export const CUSTOMER_8 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: "jeffleff@yulife.com",
    firstName: "Jeff",
    lastName: "Leff",
    dateOfBirth: moment().subtract(29, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_9 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: "george@yulife.com",
    firstName: "George",
    lastName: "Costanza",
    dateOfBirth: moment().subtract(38, "years").toDate(),
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

export const CUSTOMER_34 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: "robin@jl.com",
    firstName: "Tim",
    lastName: "Drake",
    dateOfBirth: moment().subtract(40, "years").toDate(),
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
    dateOfBirth: moment().subtract(28, "years").toDate(),
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
    dateOfBirth: moment().subtract(42, "years").toDate(),
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
    dateOfBirth: moment().subtract(41, "years").toDate(),
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
    dateOfBirth: moment().subtract(32, "years").toDate(),
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
    dateOfBirth: moment().subtract(31, "years").toDate(),
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
    dateOfBirth: moment().subtract(30, "years").toDate(),
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
    dateOfBirth: moment().subtract(31, "years").toDate(),
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
    dateOfBirth: moment().subtract(34, "years").toDate(),
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
    dateOfBirth: moment().subtract(33, "years").toDate(),
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

export const CUSTOMER_68 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Alex",
    lastName: "Schajer",
    dateOfBirth: moment().subtract(33, "years").toDate(),
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
    dateOfBirth: moment().subtract(33, "years").toDate(),
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
    dateOfBirth: moment().subtract(33, "years").toDate(),
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
    dateOfBirth: moment().subtract(40, "years").toDate(),
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

export const CUSTOMER_84 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Got",
    lastName: "Deleted_Duellers",
    dateOfBirth: moment().subtract(38, "years").toDate(),
    status: "onboarded",
  }
} as IDatabaseItem

export const CUSTOMER_FIIT = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Timothy",
    lastName: "Fiitman",
    dateOfBirth: moment().subtract(38, "years").toDate(),
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
    dateOfBirth: moment().subtract(38, "years").toDate(),
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
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
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
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_132 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Time",
    lastName: "Traveler",
    dateOfBirth: moment().subtract(32, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem
