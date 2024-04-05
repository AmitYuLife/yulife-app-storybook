import { IDatabaseItem, generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import * as customers from "../postgres/customers";

const MODEL_DEFAULTS: Pick<IDatabaseItem, "modelName" | "type"> = {
    type: "mongo",
    modelName: "userprofile",
}

const RECORD_DEFAULTS = {
    rewardStoreLocation: "GB",
    gameSettings: {
        cyclingMeasurement: "km",
    },
}

export const USER_PROFILE_1 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_1.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_109 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_109.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_110 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_110.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_115 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_115.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;
