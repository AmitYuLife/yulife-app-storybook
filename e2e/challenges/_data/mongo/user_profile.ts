import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
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

export const USER_PROFILE_2 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_2.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_7 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_7.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_8 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_8.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;


export const USER_PROFILE_9 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_9.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_13 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_13.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_35 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_35.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const COIN_LEDGE_MEDITOPIA_2_ = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_MEDITOPIA_2.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_52 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_52.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_54 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_54.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_55 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_55.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_56 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_56.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_57 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_57.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_58 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_58.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_61 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_61.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_67 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_67.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_68 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_68.data.customerId,
        ...RECORD_DEFAULTS,
        yuniversalLevel: 1,
    },
} as IDatabaseItem;

export const USER_PROFILE_71 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_71.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_72 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_72.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_76 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_76.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_81 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_81.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_84 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_84.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_86 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_86.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_132 = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_132.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;

export const USER_PROFILE_TOURNAMENT_WINNER = {
    ...MODEL_DEFAULTS,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_TOURNAMENT_WINNER.customer.data.customerId,
        ...RECORD_DEFAULTS,
    },
} as IDatabaseItem;
