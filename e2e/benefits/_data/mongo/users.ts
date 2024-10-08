import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";

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
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_1.data.customerId,
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
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_2.data.customerId,
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
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_3.data.customerId,
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

export const USER_4 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_2.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_4.data.customerId,
    },
} as IDatabaseItem;

export const USER_31 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_31.data.customerId,
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

export const USER_34 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_34.data.customerId,
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
        cloudinaryAvatar: {
            filename: "api/detox/avatars/609be5870c928c573fcb3140",
            version: 1,
        },
    },
} as IDatabaseItem;

export const USER_37 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_37.data.customerId,
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

export const USER_94 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_94.data.customerId,
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

export const USER_116 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_116_GHI_REWARDS.data.customerId,
        isAvatarCreated: true,
        avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
    },
} as IDatabaseItem;

export const USER_117 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_117_GHI_REWARDS.data.customerId,
        isAvatarCreated: true,
        avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
    },
} as IDatabaseItem;

export const USER_128 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_128_WELLBEING_ELIGIBILITY.data.customerId,
        isAvatarCreated: true,
        avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
    },
} as IDatabaseItem;

export const USER_129 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_129_WELLBEING_ELIGIBILITY.data.customerId,
        isAvatarCreated: true,
        avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
    },
} as IDatabaseItem;
