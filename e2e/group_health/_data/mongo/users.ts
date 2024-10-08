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

export const USER_GHI = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_GHI.data.customerId,
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
};

export const USER_GHI_STARTED = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_GHI_STARTED.data.customerId,
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
};

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

export const USER_118 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_118_GHI_REWARDS.data.customerId,
        isAvatarCreated: true,
        avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
    },
} as IDatabaseItem;

export const USER_119 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_119_GHI_REWARDS.data.customerId,
        isAvatarCreated: true,
        avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
    },
} as IDatabaseItem;

export const USER_120 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_120_GHI_REWARDS.data.customerId,
        isAvatarCreated: true,
        avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
    },
} as IDatabaseItem;

export const USER_121 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_121_GHI_REWARDS.data.customerId,
        isAvatarCreated: true,
        avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
    },
} as IDatabaseItem;

export const USER_127 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_127_GHI_REWARDS.data.customerId,
        isAvatarCreated: true,
        avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
    },
} as IDatabaseItem;

export const USER_137 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_137_GHI_REWARDS.data.customerId,
        isAvatarCreated: true,
        avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
    },
} as IDatabaseItem;

export const USER_140 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_140_GHI_REWARDS.data.customerId,
        isAvatarCreated: true,
        avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
    },
} as IDatabaseItem;
