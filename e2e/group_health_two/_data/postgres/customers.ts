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
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_GH_REMOVED = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Dolly",
        lastName: "Parton",
        status: "onboarded",
    },
} as IDatabaseItem;
