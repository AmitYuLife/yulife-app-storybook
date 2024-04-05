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
        dateOfBirth: moment().subtract(23, "years").toDate(),
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
        dateOfBirth: moment().subtract(45, "years").toDate(),
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
        dateOfBirth: moment().subtract(67, "years").toDate(),
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
        dateOfBirth: moment().subtract(23, "years").toDate(),
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
        dateOfBirth: moment().subtract(29, "years").toDate(),
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
        dateOfBirth: moment().subtract(38, "years").toDate(),
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
        dateOfBirth: moment().subtract(33, "years").toDate(),
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
        dateOfBirth: moment().subtract(30, "years").toDate(),
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
        dateOfBirth: moment().subtract(23, "years").toDate(),
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
        dateOfBirth: moment().subtract(23, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;
