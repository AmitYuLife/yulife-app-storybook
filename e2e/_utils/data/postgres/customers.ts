import { generateRandomMongoId, IDatabaseItem, generateRandomInbox } from "@yu-life/yulife-bdd-framework";
import moment = require("moment");

const type = "postgres";
const modelName = "customer";

export const CUSTOMER_1 = {
  type: "postgres",
  modelName: "customer",
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
  type: "postgres",
  modelName: "customer",
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
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: "walter@yulife.com",
    firstName: "Walter",
    lastName: "White",
    dateOfBirth: moment().subtract(50, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_4 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: "jesse@yulife.com",
    firstName: "Jesse",
    lastName: "Pinkman",
    dateOfBirth: moment().subtract(26, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_5 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: "saul@yulife.com",
    firstName: "Saul",
    lastName: "Goodman",
    dateOfBirth: moment().subtract(26, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_6 = {
  type: "postgres",
  modelName: "customer",
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
  type: "postgres",
  modelName: "customer",
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
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: "jerry@yulife.com",
    firstName: "Jerry",
    lastName: "Seinfeld",
    dateOfBirth: moment().subtract(48, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_9 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: "george@yulife.com",
    firstName: "George",
    lastName: "Costanza",
    dateOfBirth: moment().subtract(38, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_10 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: "kramer@yulife.com",
    firstName: "Cosmo",
    lastName: "Kramer",
    dateOfBirth: moment().subtract(43, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_11 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: "elaine@yulife.com",
    firstName: "Benes",
    lastName: "Elaine",
    dateOfBirth: moment().subtract(40, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_12 = {
  type: "postgres",
  modelName: "customer",
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
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: "frank@yulife.com",
    firstName: "Frank",
    lastName: "Costanza",
    dateOfBirth: moment().subtract(70, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_14 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: "mario@yulife.com",
    firstName: "Mario",
    lastName: "Segale",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_ARCHIVED = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: "archived@yulife.com",
    firstName: "Ar",
    lastName: "Chived",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
    archived: true,
  },
} as IDatabaseItem;

export const CUSTOMER_15 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: "luigi@yulife.com",
    firstName: "Luigi",
    lastName: "Segale",
    dateOfBirth: moment().subtract(42, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_16 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: "stanley@dundermifflin.com",
    firstName: "Stanley",
    lastName: "Hudson",
    dateOfBirth: moment().subtract(50, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_17 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: "ryan@dundermifflin.com",
    firstName: "Ryan",
    lastName: "Howard",
    dateOfBirth: moment().subtract(27, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_18 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: "michael@dundermifflin.com",
    firstName: "Michael",
    lastName: "Scott",
    dateOfBirth: moment().subtract(42, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_19 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: "angela@dundermifflin.com",
    firstName: "Angela",
    lastName: "Martin",
    dateOfBirth: moment().subtract(42, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_20 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: "oscar@dundermifflin.com",
    firstName: "Oscar",
    lastName: "Martinez",
    dateOfBirth: moment().subtract(42, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_21 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: "dwight@dundermifflin.com",
    firstName: "Dwight",
    lastName: "Schrute",
    dateOfBirth: moment().subtract(38, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_22 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: "craig@yulife.com",
    firstName: "Craig",
    lastName: "David",
    dateOfBirth: moment().subtract(40, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_23 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: "mike@yulife.com",
    firstName: "Mike",
    lastName: "Skinner",
    dateOfBirth: moment().subtract(40, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_ALPHA = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: "alpha@yulife.com",
    firstName: "Al",
    lastName: "Pha",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_24 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: "aj@yulife.com",
    firstName: "AJ",
    lastName: "Tracey",
    dateOfBirth: moment().subtract(27, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

// feedback will always show for this user on login
export const CUSTOMER_25 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: "majid@yulife.com",
    firstName: "Majid",
    lastName: "Jordan",
    dateOfBirth: moment().subtract(27, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_26 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: "pam@dundermifflin.com",
    firstName: "Pam",
    lastName: "Beesly",
    dateOfBirth: moment().subtract(35, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_27 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: "kevin@dundermifflin.com",
    firstName: "Kevin",
    lastName: "Malone",
    dateOfBirth: moment().subtract(40, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_28 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: "toby@dundermifflin.com",
    firstName: "Toby",
    lastName: "Flenderson",
    dateOfBirth: moment().subtract(38, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_29 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: "andy@dundermifflin.com",
    firstName: "Andy",
    lastName: "Bernard",
    dateOfBirth: moment().subtract(32, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_30 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: "phyllis@dundermifflin.com",
    firstName: "Phyllis",
    lastName: "Vance",
    dateOfBirth: moment().subtract(50, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_31 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: "leslie@pawnee.com",
    firstName: "Leslie",
    lastName: "Knope",
    dateOfBirth: moment().subtract(40, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_32 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: "supes@jl.com",
    firstName: "Clark",
    lastName: "Kent",
    dateOfBirth: moment().subtract(40, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_33 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: "batman@jl.com",
    firstName: "Bruce",
    lastName: "Wayne",
    dateOfBirth: moment().subtract(40, "years").toDate(),
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

export const CUSTOMER_36 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Harry",
    lastName: "Potter",
    dateOfBirth: moment().subtract(23, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_37 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Ron",
    lastName: "Weasley",
    dateOfBirth: moment().subtract(23, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_38 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Chris",
    lastName: "Bayton",
    dateOfBirth: moment().subtract(25, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_39 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Eugeniu",
    lastName: "Grosu",
    dateOfBirth: moment().subtract(29, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_40 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Emma",
    lastName: "Reitman",
    dateOfBirth: moment().subtract(29, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_41 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Bo",
    lastName: "Selecta",
    dateOfBirth: moment().subtract(40, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_42 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Boris",
    lastName: "Johnson",
    dateOfBirth: moment().subtract(40, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_43 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Dominic",
    lastName: "Toledo",
    dateOfBirth: moment().subtract(45, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_44 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Donald",
    lastName: "Trump",
    dateOfBirth: moment().subtract(65, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_45 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Richard",
    lastName: "Wurmbrand",
    dateOfBirth: moment().subtract(67, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_46 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "James",
    lastName: "Clear",
    dateOfBirth: moment().subtract(40, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_PLI_2 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: moment().subtract(25, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_PLI_3 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "San",
    lastName: "Voe",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_PLI_4 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Akio",
    lastName: "Haruko",
    dateOfBirth: moment().subtract(35, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_PLI_5 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Elijah",
    lastName: "Musk",
    dateOfBirth: moment().subtract(35, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_DENTAL_1 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Harry",
    lastName: "Todd",
    dateOfBirth: moment().subtract(23, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_MEDITOPIA_1 = {
  type: "postgres",
  modelName: "customer",
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
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Steph",
    lastName: "Reit",
    dateOfBirth: moment().subtract(41, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_MEDITOPIA_3 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Jack",
    lastName: "Reit",
    dateOfBirth: moment().subtract(40, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_DENTAL_2 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Eugene",
    lastName: "Grosu",
    dateOfBirth: moment().subtract(29, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_47 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Gill",
    lastName: "Stock",
    dateOfBirth: moment().subtract(40, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_48 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Jack",
    lastName: "Magic",
    dateOfBirth: moment().subtract(36, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_49 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Sky",
    lastName: "Gorenje",
    dateOfBirth: moment().subtract(38, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_50 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Lynton",
    lastName: "Stock",
    dateOfBirth: moment().subtract(45, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_51 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Ted",
    lastName: "Karcher",
    dateOfBirth: moment().subtract(45, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_53 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Zero",
    lastName: "Earnrate",
    dateOfBirth: moment().subtract(38, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_52 = {
  type: "postgres",
  modelName: "customer",
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
  type: "postgres",
  modelName: "customer",
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
  type: "postgres",
  modelName: "customer",
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
  type: "postgres",
  modelName: "customer",
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
  type: "postgres",
  modelName: "customer",
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
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Paris",
    lastName: "Hilton",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_PLI_6 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Pli",
    lastName: "FailedPayment",
    dateOfBirth: moment().subtract(35, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_PLI_7 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Pli",
    lastName: "RejectedAge",
    dateOfBirth: moment().subtract(17, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_PLI_9 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Dental",
    lastName: "RejectedAge",
    dateOfBirth: moment().subtract(17, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_PLI_10 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "PLI",
    lastName: "RejectedCovid",
    dateOfBirth: moment().subtract(23, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_60 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Ivan",
    lastName: "Varga",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_61 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Alex",
    lastName: "Breban",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_63 = {
  type: "postgres",
  modelName: "customer",
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
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Tony",
    lastName: "Blair",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_65 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Gordon",
    lastName: "Brown",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_66 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Theresa",
    lastName: "May",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_67 = {
  type: "postgres",
  modelName: "customer",
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
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Alex",
    lastName: "Schajer",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_69 = {
  type: "postgres",
  modelName: "customer",
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
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Robert",
    lastName: "Boratheon",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_71 = {
  type: "postgres",
  modelName: "customer",
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
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Jamie",
    lastName: "Lannister",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_73 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Tywin",
    lastName: "Lannister",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_74 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "TV",
    lastName: "Man",
    dateOfBirth: moment().subtract(40, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_75 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Microwave",
    lastName: "Woman",
    dateOfBirth: moment().subtract(40, "years").toDate(),
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

export const CUSTOMER_77 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Plant",
    lastName: "Potter",
    dateOfBirth: moment().subtract(40, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_78 = {
  type: "postgres",
  modelName: "customer",
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
  type: "postgres",
  modelName: "customer",
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
  type: "postgres",
  modelName: "customer",
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
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Isaac",
    lastName: "Franky",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_82 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Jamie",
    lastName: "Foxx",
    dateOfBirth: moment().subtract(38, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_83 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Sloogy",
    lastName: "Dreamer",
    dateOfBirth: moment().subtract(38, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_84 = {
  type: "postgres",
  modelName: "customer",
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
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Timothy",
    lastName: "Fiitman",
    dateOfBirth: moment().subtract(38, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_85 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Dental",
    lastName: "PolicyCancelled",
    dateOfBirth: moment().subtract(38, "years").toDate(),
    status: "onboarded",
  }
} as IDatabaseItem

export const CUSTOMER_86 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Mr",
    lastName: "Brain",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;


export const CUSTOMER_LEAVER = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: "business_leaver@yulife.com",
    firstName: "Bus",
    lastName: "Leaf",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded"
  },
} as IDatabaseItem;


export const CUSTOMER_FUTURE_PRODUCT = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Bobby",
    lastName: "Smith",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  }
} as IDatabaseItem


export const CUSTOMER_GHI = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Teddy",
    lastName: "Group",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_GHI_STARTED = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Paul",
    lastName: "Starter",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_89 = {
  type: "postgres",
  modelName: "customer",
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
  type: "postgres",
  modelName: "customer",
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
  type: "postgres",
  modelName: "customer",
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
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "El",
    lastName: "Manuel",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_93 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "David",
    lastName: "Yishai",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_94 = {
  type,
  modelName,
  data: {
    customerId: generateRandomMongoId(),
    email: "robinaite@jl.com",
    firstName: "Timothy",
    lastName: "Drakeman",
    dateOfBirth: moment().subtract(40, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_95 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Future",
    lastName: "Enrol",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_96 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Gdent",
    lastName: "InForce",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_97 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Gdent",
    lastName: "Canenrol",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_98 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Gdent",
    lastName: "Inholding",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_99 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Nochoicemade",
    lastName: "Enrolclosed",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_100 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Choicemade",
    lastName: "Enrolclosed",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_101 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Enrolnotopen",
    lastName: "Optout",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_102 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Enrolopen",
    lastName: "Optout",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_103 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Enrolopen",
    lastName: "Choicedmade",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_104 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Enrolclosed",
    lastName: "Optedout",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_105 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Enrolclosed",
    lastName: "Nochoice",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_106 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Product",
    lastName: "Inforce",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_107 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Product",
    lastName: "Availablesoon",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_108 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Luke",
    lastName: "Dark",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_109 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Pension",
    lastName: "Onboardorino",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_110 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Pension",
    lastName: "Onboardorino",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_111 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Activo",
    lastName: "Pensionio",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_112 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Pending",
    lastName: "DeNoContribution",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_113 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Pending",
    lastName: "DeContribution",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_114 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Paused",
    lastName: "DeContribution",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_115 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Pension",
    lastName: "InBetweeno",
    dateOfBirth: moment().subtract(33, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_116_GHI_REWARDS = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Bali",
    lastName: "Mumba",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_117_GHI_REWARDS = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Ryan",
    lastName: "Hardie",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_118_GHI_REWARDS = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Michael",
    lastName: "Cooper",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_119_GHI_REWARDS = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Dan",
    lastName: "Scarr",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_120_GHI_REWARDS = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Morgan",
    lastName: "Whittaker",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_121_GHI_REWARDS = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Finn",
    lastName: "Azaz",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_122 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Testing",
    lastName: "Boosts",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_123_MPP = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Multi",
    lastName: "Prodz",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_124_MPP = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Multz",
    lastName: "Proddy",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_125 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Dentz",
    lastName: "Choice",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_126_LEAVER_WELLBEING = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Leaves",
    lastName: "McLeaverson",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_127_GHI_REWARDS = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Luke",
    lastName: "Cundle",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_128_WELLBEING_ELIGIBILITY = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Totes",
    lastName: "Eligible",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_129_WELLBEING_ELIGIBILITY = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Notquite",
    lastName: "Eligible",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_130_GHI_LEAVER = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Graham",
    lastName: "Carey",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_131_GHI_REWARDS = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Lewis",
    lastName: "Gibson",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_132 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Time",
    lastName: "Traveler",
    dateOfBirth: moment().subtract(32, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_133_GHI_FUTURE = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Alfie",
    lastName: "Devine",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_134_GHI_REWARDS = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Dyarko",
    lastName: "Gyabi",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_DENTAL_RENEW = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Harry",
    lastName: "Todd",
    dateOfBirth: moment().subtract(23, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_DENTAL_RENEW_2 = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Harry",
    lastName: "Todd",
    dateOfBirth: moment().subtract(23, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem;

export const CUSTOMER_135_GHI_FUTURE = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Mustafa",
    lastName: "Bundu",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem

export const CUSTOMER_136_GHI_REWARDS = {
  type: "postgres",
  modelName: "customer",
  data: {
    customerId: generateRandomMongoId(),
    email: generateRandomInbox(),
    firstName: "Ben",
    lastName: "Waine",
    dateOfBirth: moment().subtract(30, "years").toDate(),
    status: "onboarded",
  },
} as IDatabaseItem
