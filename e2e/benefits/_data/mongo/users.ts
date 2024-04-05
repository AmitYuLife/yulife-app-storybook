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

export const USER_GHI = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_GHI.data.customerId,
        nickname: "GHIman",
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
        nickname: "GHImanStarted",
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
        nickname: "Rewardsio",
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
        nickname: "Rewardsio",
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
        nickname: "Rewardsio",
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
        nickname: "Rewardsio",
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
        nickname: "Rewardsio",
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
        nickname: "Rewardsio",
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
        nickname: "Rewazza",
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
        nickname: "Elig",
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
        nickname: "Elig",
        isAvatarCreated: true,
        avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
    },
} as IDatabaseItem;

export const USER_130 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_130_GHI_LEAVER.data.customerId,
        nickname: "Leavs",
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
        nickname: "Rewardsio",
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
        nickname: "Rewardsio",
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
        nickname: "Rewardsio",
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
        nickname: "Rewardsio",
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
        nickname: "Rewardsio",
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
        nickname: "Rewardsio",
        isAvatarCreated: true,
        avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
    },
} as IDatabaseItem;

export const USER_138 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_138.data.customerId,
        nickname: "BigDaddy",
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
        nickname: "Rewardsio",
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
        nickname: "Rewardsio",
        isAvatarCreated: true,
        avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
    },
} as IDatabaseItem;
