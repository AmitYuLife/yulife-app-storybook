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

export const USER_130 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_130_GHI_LEAVER.data.customerId,
        isAvatarCreated: true,
        avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
    },
} as IDatabaseItem;

export const USER_131 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_131_GHI_REWARDS.data.customerId,
        isAvatarCreated: true,
        avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
    },
} as IDatabaseItem;

export const USER_133 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_133_GHI_FUTURE.data.customerId,
        isAvatarCreated: true,
        avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
    },
} as IDatabaseItem;

export const USER_134 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_134_GHI_REWARDS.data.customerId,
        isAvatarCreated: true,
        avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
    },
} as IDatabaseItem;

export const USER_135 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_135_GHI_FUTURE.data.customerId,
        isAvatarCreated: true,
        avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
    },
} as IDatabaseItem;

export const USER_136 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_136_GHI_REWARDS.data.customerId,
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

export const USER_139 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_139_GHI_REWARDS.data.customerId,
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

export const USER_GH_REMOVED = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_GH_REMOVED.data.customerId,
        isAvatarCreated: true,
        avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
    },
} as IDatabaseItem;
