import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import { AUTH_TEMPLATE } from "./_templates";

const type = "mongo";
const modelName = "authpassword";

export const AUTH_GHI = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.43323",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_GHI.data.customerId,
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

export const AUTH_118 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_118_GHI_REWARDS.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_119 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_119_GHI_REWARDS.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_120 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_120_GHI_REWARDS.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_121 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_121_GHI_REWARDS.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_127 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_127_GHI_REWARDS.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_137 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_137_GHI_REWARDS.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_140 = {
    type: "mongo",
    modelName: "authpassword",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_140_GHI_REWARDS.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_141 = {
    type: "mongo",
    modelName: "authpassword",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_141.data.customerId,
    },
} as IDatabaseItem;
