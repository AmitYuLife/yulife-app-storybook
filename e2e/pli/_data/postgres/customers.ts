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
