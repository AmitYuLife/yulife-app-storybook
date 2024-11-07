import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customers from "../postgres/customers";

const MODEL_DEFAULTS: Pick<IDatabaseItem, "modelName" | "type"> = {
    type: "mongo",
    modelName: "userprofile",
};

const RECORD_DEFAULTS = {
    rewardStoreLocation: "GB",
    gameSettings: {
        cyclingMeasurement: "km",
    },
};

export const USER_PROFILE_116 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_116_GHI_REWARDS.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_117 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_117_GHI_REWARDS.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_118 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_118_GHI_REWARDS.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_119 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_119_GHI_REWARDS.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_120 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_120_GHI_REWARDS.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_121 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_121_GHI_REWARDS.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_141 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_141.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;
