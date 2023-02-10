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
