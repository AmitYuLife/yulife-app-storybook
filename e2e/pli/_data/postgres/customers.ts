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

export const CUSTOMER_PLI_2 = {
    type,
    modelName,
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "John",
        lastName: "Doe",
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
        status: "onboarded",
    },
} as IDatabaseItem;
