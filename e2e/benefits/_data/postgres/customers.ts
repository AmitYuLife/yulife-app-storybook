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

export const CUSTOMER_3 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: "walter@yulife.com",
        firstName: "Walter",
        lastName: "White",
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_4 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: "jesse@yulife.com",
        firstName: "Jesse",
        lastName: "Pinkman",
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

export const CUSTOMER_36 = {
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

export const CUSTOMER_37 = {
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

export const CUSTOMER_94 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: "robinaite@jl.com",
        firstName: "Timothy",
        lastName: "Drakeman",
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

export const CUSTOMER_117_GHI_REWARDS = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Ryan",
        lastName: "Hardie",
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_128_WELLBEING_ELIGIBILITY = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Totes",
        lastName: "Eligible",
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_129_WELLBEING_ELIGIBILITY = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Notquite",
        lastName: "Eligible",
        status: "onboarded",
    },
} as IDatabaseItem;