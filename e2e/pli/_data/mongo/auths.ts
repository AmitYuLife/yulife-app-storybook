import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import { AUTH_TEMPLATE } from "./_templates";

const type = "mongo";
const modelName = "authpassword";

export const AUTH_37 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.61.111",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_37.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_PLI_2 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.61.111",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_PLI_2.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_PLI_3 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.61.111",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_PLI_3.data.customerId,
    },
} as IDatabaseItem;
