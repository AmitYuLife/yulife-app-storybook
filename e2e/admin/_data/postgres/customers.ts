import { generateRandomMongoId, IDatabaseItem, generateRandomInbox } from "@yu-life/yulife-bdd-framework";
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
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
        archived: true,
    },
} as IDatabaseItem;

export const CUSTOMER_1 = {
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

export const CUSTOMER_2 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: "jesse@yulife.com",
        firstName: "Jesse",
        lastName: "Pinkman",
        dateOfBirth: moment().subtract(26, "years").toDate(),
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
        dateOfBirth: moment().subtract(25, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_4 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: "jerry@yulife.com",
        firstName: "Jerry",
        lastName: "Seinfeld",
        dateOfBirth: moment().subtract(48, "years").toDate(),
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
        dateOfBirth: moment().subtract(28, "years").toDate(),
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
        dateOfBirth: moment().subtract(23, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_7 = {
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

// feedback will always show for this user on login
export const CUSTOMER_8 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: "majid@yulife.com",
        firstName: "Majid",
        lastName: "Jordan",
        dateOfBirth: moment().subtract(27, "years").toDate(),
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
        dateOfBirth: moment().subtract(32, "years").toDate(),
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
      dateOfBirth: moment().subtract(23, "years").toDate(),
      status: "onboarded",
    },
} as IDatabaseItem;

