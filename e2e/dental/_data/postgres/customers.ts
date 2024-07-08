import { generateRandomMongoId, IDatabaseItem, generateRandomInbox } from "@yu-life/yulife-bdd-framework";
import moment from "moment";

const type = "postgres";
const modelName = "customer";

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

export const CUSTOMER_43 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Dominic",
        lastName: "Toledo",
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_45 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Richard",
        lastName: "Wurmbrand",
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_DENTAL_1 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Harry",
        lastName: "Todd",
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_DENTAL_2 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Eugene",
        lastName: "Grosu",
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_85 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Dental",
        lastName: "PolicyCancelled",
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_108 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Luke",
        lastName: "Dark",
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_125 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Dentz",
        lastName: "Choice",
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_DENTAL_RENEW = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Harry",
        lastName: "Todd",
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_DENTAL_RENEW_2 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Harry",
        lastName: "Todd",
        status: "onboarded",
    },
} as IDatabaseItem;
