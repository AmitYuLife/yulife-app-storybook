import { generateRandomMongoId, IDatabaseItem, generateRandomInbox } from "@yu-life/yulife-bdd-framework";
import moment = require("moment");

const type = "postgres"
const modelName = "customer"


export const CUSTOMER_SA_1 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "SA",
        lastName: "Customer",
        dateOfBirth: moment().subtract(28, "years").toDate(),
        status: "onboarded",
    }
} as IDatabaseItem;


export const CUSTOMER_SA_2 = {
    type: "postgres",
    modelName: "customer",
    data: {
        customerId: generateRandomMongoId(),
        email: generateRandomInbox(),
        firstName: "Rei",
        lastName: "Buldo",
        dateOfBirth: moment().subtract(28, "years").toDate(),
        status: "onboarded",
    }
} as IDatabaseItem;
