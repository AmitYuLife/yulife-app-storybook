import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework"
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from '../postgres/customers';

import moment from "moment";

const type = "mongo"
const modelName = "users"

const USER_DATA_TEMPLATE = {
    data: {
        _id: "",
        userId: "",
        products: [{
            productId: generateRandomMongoId(),
            productType: "Yulife",
            option: "epic",
            type: "employer",
            earnRate: 1,
        }],
        isAvatarCreated: false,
        earnRate: 1,
    }

}

export const USER_USA_1 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_1.data.customerId,
    }
} as IDatabaseItem

export const USER_USA_2 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_2.data.customerId,
    }
} as IDatabaseItem

export const USER_USA_3 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_3.data.customerId,
        products: [{
            earnRate: 1,
        }],
        earnRate: 1,
    }
} as IDatabaseItem

export const USER_USA_4 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_4.data.customerId,
        products: [{
            earnRate: 1,
        }],
        earnRate: 1,
    }
} as IDatabaseItem

export const USER_USA_5 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_5.data.customerId,
        products: [{
            earnRate: 1,
        }],
        earnRate: 1,
    }
} as IDatabaseItem

export const USER_USA_6 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_6.data.customerId,
        products: [{
            earnRate: 1,
        }],
        earnRate: 1,
    }
} as IDatabaseItem

export const USER_USA_7 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_7.data.customerId,
        products: [{
            earnRate: 1,
        }],
        earnRate: 1,
    }
} as IDatabaseItem

export const USER_USA_8 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_8.data.customerId,
        products: [{
            earnRate: 1,
        }],
        earnRate: 1,
    }
} as IDatabaseItem

export const USER_USA_9 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_9.data.customerId,
        products: [{
            earnRate: 1,
        }],
        earnRate: 1,
    }
} as IDatabaseItem

export const USER_USA_10 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_10.data.customerId,
        products: [{
            earnRate: 1,
        }],
        earnRate: 1,
    }
} as IDatabaseItem

export const USER_USA_11 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_11.data.customerId,
        products: [{
            earnRate: 1,
        }],
        earnRate: 1,
    }
} as IDatabaseItem

export const USER_USA_12 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_12.data.customerId,
        products: [{
            earnRate: 1,
        }],
        earnRate: 1,
    }
} as IDatabaseItem

export const USER_USA_13 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_13.data.customerId,
        products: [{
            earnRate: 1,
        }],
        earnRate: 1,
    }
} as IDatabaseItem

export const USER_USA_14 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_14.data.customerId,
        products: [{
            earnRate: 1,
        }],
        earnRate: 1,
    }
} as IDatabaseItem

export const USER_USA_15 = {
    type: "mongo",
    modelName: "users",
    data: {
        ...USER_DATA_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_USA_15.data.customerId,
        products: [{
            earnRate: 1,
        }],
        earnRate: 1,
    }
} as IDatabaseItem