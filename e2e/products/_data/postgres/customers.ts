import { generateRandomMongoId, IDatabaseItem, generateRandomInbox } from "@yu-life/yulife-bdd-framework";
import moment from "moment";

const type = "postgres";
const modelName = "customer";

export const CUSTOMER_FUTURE_PRODUCT = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Bobby",
        lastName: "Smith",
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_123_MPP = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Multi",
        lastName: "Prodz",
        status: "onboarded",
    },
} as IDatabaseItem;

export const CUSTOMER_124_MPP = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Multz",
        lastName: "Proddy",
        status: "onboarded",
    },
} as IDatabaseItem;
