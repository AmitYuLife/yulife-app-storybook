import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import { AUTH_TEMPLATE } from "./_templates";

const type = "mongo";
const modelName = "authpassword";

export const AUTH_43 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.61.111",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_43.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_DENTAL_1 = {
    type: "mongo",
    modelName: "authpassword",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.444",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_DENTAL_1.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_DENTAL_2 = {
    type: "mongo",
    modelName: "authpassword",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.444",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_DENTAL_2.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_85 = {
    type: "mongo",
    modelName: "authpassword",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.44422",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_85.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_108 = {
    type: "mongo",
    modelName: "authpassword",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_108.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_DENTAL_RENEW = {
    type: "mongo",
    modelName: "authpassword",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.444",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_DENTAL_RENEW.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_DENTAL_RENEW_2 = {
    type: "mongo",
    modelName: "authpassword",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.444",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_DENTAL_RENEW_2.data.customerId,
    },
} as IDatabaseItem;
