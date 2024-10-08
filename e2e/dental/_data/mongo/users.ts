import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import moment from "moment";

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

export const USER_43 = {
    type: "mongo",
    modelName: "users",
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_43.data.customerId,
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

export const USER_DENTAL_1 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_DENTAL_1.data.customerId,
        products: [
            {
                productId: generateRandomMongoId(),
                productType: "Yulife",
                option: "epic",
                type: "employer",
                earnRate: 0,
            },
        ],
        earnRate: 0,
        activityLastReceived: {
            cycling: moment().subtract(5, "days").toString(),
            steps: moment().subtract(5, "days").toString(),
            meditation: moment().subtract(5, "days").toString(),
        },
    },
} as IDatabaseItem;

export const USER_DENTAL_2 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_DENTAL_2.data.customerId,
        products: [
            {
                productId: generateRandomMongoId(),
                productType: "Yulife",
                option: "epic",
                type: "employer",
                earnRate: 0,
            },
        ],
        earnRate: 0,
        activityLastReceived: {
            cycling: moment().subtract(5, "days").toString(),
            steps: moment().subtract(5, "days").toString(),
            meditation: moment().subtract(5, "days").toString(),
        },
    },
} as IDatabaseItem;

export const USER_85 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_85.data.customerId,
        products: [
            {
                productId: generateRandomMongoId(),
                productType: "Yulife",
                option: "epic",
                type: "employer",
                earnRate: 0,
            },
        ],
        earnRate: 0,
        activityLastReceived: {
            cycling: moment().subtract(5, "days").toString(),
            steps: moment().subtract(5, "days").toString(),
            meditation: moment().subtract(5, "days").toString(),
        },
    },
} as IDatabaseItem;

export const USER_108 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_108.data.customerId,
    },
} as IDatabaseItem;

export const USER_DENTAL_RENEW = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_DENTAL_RENEW.data.customerId,
        isAvatarCreated: true,
        avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
        products: [
            {
                productId: generateRandomMongoId(),
                productType: "Yulife",
                option: "epic",
                type: "employer",
                earnRate: 0,
            },
        ],
        earnRate: 0,
        activityLastReceived: {
            cycling: moment().subtract(5, "days").toString(),
            steps: moment().subtract(5, "days").toString(),
            meditation: moment().subtract(5, "days").toString(),
        },
    },
} as IDatabaseItem;

export const USER_DENTAL_RENEW_2 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_DENTAL_RENEW_2.data.customerId,
        isAvatarCreated: true,
        avatarRemoteFilename: "app-system/detox/male-avatar-default.svg",
        products: [
            {
                productId: generateRandomMongoId(),
                productType: "Yulife",
                option: "epic",
                type: "employer",
                earnRate: 0,
            },
        ],
        earnRate: 0,
        activityLastReceived: {
            cycling: moment().subtract(5, "days").toString(),
            steps: moment().subtract(5, "days").toString(),
            meditation: moment().subtract(5, "days").toString(),
        },
    },
} as IDatabaseItem;
