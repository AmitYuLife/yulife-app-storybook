import { generateRandomMongoId, IDatabaseItem, generateRandomInbox } from "@yu-life/yulife-bdd-framework";
import moment = require("moment");

const type = "postgres"
const modelName = "customer"


export const CUSTOMER_USA_1 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Usa",
        lastName: "Customer",
        dateOfBirth: moment().subtract(28, "years").toDate(),
        status: "onboarded",
    }
} as IDatabaseItem;

export const CUSTOMER_USA_2 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Customer",
        lastName: "Two",
        dateOfBirth: moment().subtract(23, "years").toDate(),
        status: "onboarded",
    }
} as IDatabaseItem;


export const CUSTOMER_USA_3 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Customer",
        lastName: "Three",
        dateOfBirth: moment().subtract(21, "years").toDate(),
        status: "onboarded",
    }
} as IDatabaseItem;

export const CUSTOMER_USA_4 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Customer",
        lastName: "Four",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    }
} as IDatabaseItem;

export const CUSTOMER_USA_5 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Customer",
        lastName: "Five",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    }
} as IDatabaseItem;

export const CUSTOMER_USA_6 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Customer",
        lastName: "Six",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    }
} as IDatabaseItem;

export const CUSTOMER_USA_7 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Customer",
        lastName: "Seven",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    }
} as IDatabaseItem;

export const CUSTOMER_USA_8 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Customer",
        lastName: "Eight",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    }
} as IDatabaseItem;

export const CUSTOMER_USA_9 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Customer",
        lastName: "Nine",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    }
} as IDatabaseItem;

export const CUSTOMER_USA_10 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Customer",
        lastName: "Ten",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    }
} as IDatabaseItem;

export const CUSTOMER_USA_11 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Customer",
        lastName: "Eleven",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    }
} as IDatabaseItem;

export const CUSTOMER_USA_12 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Customer",
        lastName: "Tweleve",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    }
} as IDatabaseItem;

export const CUSTOMER_USA_13 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Customer",
        lastName: "Thirteen",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    }
} as IDatabaseItem;

export const CUSTOMER_USA_14 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Customer",
        lastName: "Fourteen",
        dateOfBirth: moment().subtract(30, "years").toDate(),
        status: "onboarded",
    }
} as IDatabaseItem;