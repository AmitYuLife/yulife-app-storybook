import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import { AUTH_TEMPLATE } from "./_templates";

const type = "mongo";
const modelName = "authpassword";

export const AUTH_1 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        attempts: 1,
        lastAttempt: "2019-03-12T14:10:29.275+00:00",
        lastIp: "35.176.60.174",
        password: "letmein",
        scope: "user",
        strategy: "0",
        used: false,
        userId: customer.CUSTOMER_1.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_2 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        attempts: 1,
        lastAttempt: "2019-03-12T14:10:29.275+00:00",
        lastIp: "35.176.60.174",
        password: "letmein",
        scope: "user",
        strategy: "0",
        used: false,
        userId: customer.CUSTOMER_2.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_3 = {
    type,
    modelName,
    data: {
        ...AUTH_2.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_3.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_4 = {
    type,
    modelName,
    data: {
        ...AUTH_2.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_4.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_31 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.999",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_31.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_34 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.61.000",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_34.data.customerId,
    },
} as IDatabaseItem;

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

export const AUTH_94 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_94.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_116 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_116_GHI_REWARDS.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_117 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_117_GHI_REWARDS.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_128 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_128_WELLBEING_ELIGIBILITY.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_129 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_129_WELLBEING_ELIGIBILITY.data.customerId,
    },
} as IDatabaseItem;
