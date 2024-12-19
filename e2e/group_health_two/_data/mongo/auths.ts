import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import { AUTH_TEMPLATE } from "./_templates";

const type = "mongo";
const modelName = "authpassword";

export const AUTH_130 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_130_GHI_LEAVER.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_131 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_131_GHI_REWARDS.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_133 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_133_GHI_FUTURE.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_134 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_134_GHI_REWARDS.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_135 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_135_GHI_FUTURE.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_136 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_136_GHI_REWARDS.data.customerId,
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

export const AUTH_139 = {
    type: "mongo",
    modelName: "authpassword",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_139_GHI_REWARDS.data.customerId,
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

export const AUTH_GH_REMOVED = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_GH_REMOVED.data.customerId,
    },
} as IDatabaseItem;

