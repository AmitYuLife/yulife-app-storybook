import { generateRandomMongoId, IDatabaseItem, generateRandomInbox } from "@yu-life/yulife-bdd-framework";
import moment from "moment";

const type = "postgres";
const modelName = "customer";

export const CUSTOMER_130_GHI_LEAVER = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Graham",
        lastName: "Carey",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_131_GHI_REWARDS = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Lewis",
        lastName: "Gibson",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_133_GHI_FUTURE = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Alfie",
        lastName: "Devine",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_134_GHI_REWARDS = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Dyarko",
        lastName: "Gyabi",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_135_GHI_FUTURE = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Mustafa",
        lastName: "Bundu",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_136_GHI_REWARDS = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Ben",
        lastName: "Waine",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_137_GHI_REWARDS = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Brendan",
        lastName: "Galloway",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_139_GHI_REWARDS = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Frodo",
        lastName: "Baggins",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_140_GHI_REWARDS = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Bilbo",
        lastName: "Baggins",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    },
} as IDatabaseItem;
