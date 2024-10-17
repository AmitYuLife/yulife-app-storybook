import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customers from "../postgres/customers";

const type = "mongo";
const modelName = "users";

const USER_DATA_TEMPLATE = {
    data: {
        _id: "",
        userId: "",
        products: [
            {
                productId: generateRandomMongoId(),
                productType: "Yulife",
                option: "epic",
                type: "employer",
                earnRate: 10,
            },
        ],
        isAvatarCreated: false,
        earnRate: 10,
    },
};

export const USER_1 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_1.data.customerId,
        earnRate: 20,
        products: [
            {
                productId: generateRandomMongoId(),
                productType: "Yulife",
                option: "epic",
                earnRate: 20,
                type: "employer",
            },
        ],
    },
} as IDatabaseItem;

export const USER_2 = {
    type,
    modelName,
    data: {
        ...USER_1.data,
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_2.data.customerId,
        earnRate: 20,
        products: [
            {
                productId: generateRandomMongoId(),
                productType: "Yulife",
                option: "epic",
                earnRate: 20,
                type: "employer",
            },
        ],
    },
} as IDatabaseItem;

export const USER_3 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_3.data.customerId,
        products: [
            {
                productId: generateRandomMongoId(),
                productType: "Yulife",
                option: "epic",
                type: "employer",
                earnRate: 10,
            },
        ],
        earnRate: 10,
    },
} as IDatabaseItem;

export const USER_4 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_4.data.customerId,
        earnRate: 20,
        products: [
            {
                productId: generateRandomMongoId(),
                productType: "Yulife",
                option: "epic",
                earnRate: 20,
                type: "employer",
            },
        ],
    },
} as IDatabaseItem;

export const USER_5 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_5.data.customerId,
        products: [
            {
                productId: generateRandomMongoId(),
                productType: "Yulife",
                option: "epic",
                type: "employer",
                earnRate: 10,
            },
        ],
        earnRate: 10,
        isAvatarCreated: true,
        avatarRemoteFilename: "avatars/YUGI0000000000000000000000000000.svg",
    },
} as IDatabaseItem;

export const USER_6 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_6.data.customerId,
        products: [
            {
                productId: generateRandomMongoId(),
                productType: "Yulife",
                option: "epic",
                type: "employer",
                earnRate: 10,
            },
        ],
        earnRate: 10,
        isAvatarCreated: true,
        avatarRemoteFilename: "avatars/YUGI0000000000000000000000000000.svg",
    },
} as IDatabaseItem;

export const USER_7 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_7.data.customerId,
        earnRate: 20,
        products: [
            {
                productId: generateRandomMongoId(),
                productType: "Yulife",
                option: "epic",
                earnRate: 20,
                type: "employer",
            },
        ],
    },
} as IDatabaseItem;

export const USER_8 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_8.data.customerId,
        products: [
            {
                productId: generateRandomMongoId(),
                productType: "Yulife",
                option: "epic",
                type: "employer",
                earnRate: 10,
            },
        ],
        earnRate: 10,
    },
} as IDatabaseItem;

export const USER_9 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_9.data.customerId,
        products: [
            {
                productId: generateRandomMongoId(),
                productType: "Yulife",
                option: "epic",
                type: "employer",
                earnRate: 7,
            },
        ],
        earnRate: 7,
    },
} as IDatabaseItem;

export const USER_10 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_10.data.customerId,
        products: [
            {
                productId: generateRandomMongoId(),
                productType: "Yulife",
                option: "epic",
                type: "employer",
                earnRate: 10,
            },
        ],
        earnRate: 10,
        referral:{
            referredBy:USER_5.data.userId,
        }
    },
} as IDatabaseItem;

export const USER_11 = {
    type,
    modelName,
    data: {
        ...USER_1.data,
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_11.data.customerId,
    },
} as IDatabaseItem;

export const USER_12 = {
    type,
    modelName,
    data: {
        ...USER_1.data,
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_12.data.customerId,
    },
} as IDatabaseItem;

export const USER_13 = {
    type,
    modelName,
    data: {
        ...USER_1.data,
        _id: generateRandomMongoId(),
        userId: customers.CUSTOMER_13.data.customerId,
    },
} as IDatabaseItem;