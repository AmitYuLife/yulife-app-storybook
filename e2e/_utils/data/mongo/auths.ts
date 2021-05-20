import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework"
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_1, CUSTOMER_2, CUSTOMER_3, CUSTOMER_4, CUSTOMER_5, CUSTOMER_6, CUSTOMER_7, CUSTOMER_8, CUSTOMER_9, CUSTOMER_10, CUSTOMER_11, CUSTOMER_12, CUSTOMER_13, CUSTOMER_14, CUSTOMER_ARCHIVED, CUSTOMER_15, CUSTOMER_16, CUSTOMER_17, CUSTOMER_18, CUSTOMER_19, CUSTOMER_20, CUSTOMER_21, CUSTOMER_22, CUSTOMER_23, CUSTOMER_ALPHA, CUSTOMER_24, CUSTOMER_25, CUSTOMER_26, CUSTOMER_27, CUSTOMER_28, CUSTOMER_29, CUSTOMER_30, CUSTOMER_31, CUSTOMER_32, CUSTOMER_33, CUSTOMER_34 } from '../postgres/customers';
import moment = require('moment');
import { AUTH_TEMPLATE } from "./_templates"

const type = "mongo"
const modelName ="auth"

export const AUTH_1 = {
    type: "mongo",
    modelName: "auth",
    data: {
        _id: generateRandomMongoId(),
        attempts: 1,
        lastAttempt: "2019-03-12T14:10:29.275+00:00",
        lastIp: "35.176.60.174",
        password: "letmein",
        scope: "user",
        strategy: "0",
        used: false,
        userId: CUSTOMER_1.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_2 = {
    type: "mongo",
    modelName: "auth",
    data: {
        _id: generateRandomMongoId(),
        attempts: 1,
        lastAttempt: "2019-03-12T14:10:29.275+00:00",
        lastIp: "35.176.60.174",
        password: "letmein",
        scope: "user",
        strategy: "0",
        used: false,
        userId: CUSTOMER_2.data.customerId,
    },
} as IDatabaseItem;

export const AUTH_3 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_2.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_3.data.customerId
    }
} as IDatabaseItem

export const AUTH_4 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_2.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_4.data.customerId
    }
} as IDatabaseItem

export const AUTH_5 = {
    type: "mongo",
    modelName: "auth",
    data: {
        _id: generateRandomMongoId(),
        lastIp: "35.176.60.174",
        password: "letmein",
        scope: "user",
        strategy: "0",
        used: false,
        userId: CUSTOMER_5.data.customerId
    }
} as IDatabaseItem

export const AUTH_6 = {
    type: "mongo",
    modelName: "auth",
    data: {
        _id: generateRandomMongoId(),
        lastIp: "35.176.60.174",
        password: "letmein",
        scope: "user",
        strategy: "0",
        used: false,
        userId: CUSTOMER_6.data.customerId
    }
} as IDatabaseItem

export const AUTH_7 = {
    type: "mongo",
    modelName: "auth",
    data: {
        _id: generateRandomMongoId(),
        lastIp: "35.176.60.174",
        password: "letmein",
        scope: "user",
        strategy: "0",
        used: false,
        userId: CUSTOMER_7.data.customerId
    }
} as IDatabaseItem


export const AUTH_8 = {
    type: "mongo",
    modelName: "auth",
    data: {
        _id: generateRandomMongoId(),
        lastIp: "35.176.60.174",
        password: "letmein",
        scope: "user",
        strategy: "0",
        used: false,
        userId: CUSTOMER_8.data.customerId
    }
} as IDatabaseItem

export const AUTH_9 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        _id: generateRandomMongoId(),
        userId: CUSTOMER_9.data.customerId
    }
} as IDatabaseItem

export const AUTH_10 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_10.data.customerId,
        tokenExpiration: "30s"
    }
} as IDatabaseItem

export const AUTH_11 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.333",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_11.data.customerId,
        tokenExpiration: "2 days"
    }
} as IDatabaseItem

export const AUTH_12 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.444",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_12.data.customerId,
    }
} as IDatabaseItem


export const AUTH_13 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.555",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_13.data.customerId,
    }
} as IDatabaseItem

export const AUTH_14 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.666",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_14.data.customerId,
    }
} as IDatabaseItem

export const AUTH_ARCHIVED = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.777",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_ARCHIVED.data.customerId,
    }
} as IDatabaseItem

export const AUTH_15 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.888",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_15.data.customerId,
    }
} as IDatabaseItem

export const AUTH_16 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.999",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_16.data.customerId,
    }
} as IDatabaseItem

export const AUTH_17 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.111",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_17.data.customerId,
    }
} as IDatabaseItem

export const AUTH_18 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_18.data.customerId,
    }
} as IDatabaseItem

export const AUTH_19 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_19.data.customerId,
    }
} as IDatabaseItem

export const AUTH_20 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.222",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_20.data.customerId,
    }
} as IDatabaseItem

export const AUTH_21 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.333",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_21.data.customerId,
    }
} as IDatabaseItem

export const AUTH_22 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.44422",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_22.data.customerId,
    }
} as IDatabaseItem


export const AUTH_23 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.555",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_23.data.customerId,
    }
} as IDatabaseItem

export const AUTH_ALPHA = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.666",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_ALPHA.data.customerId,
    }
} as IDatabaseItem

export const AUTH_24 ={
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.777",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_24.data.customerId,
    }
} as IDatabaseItem

export const AUTH_25 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.888",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_25.data.customerId,
    }
} as IDatabaseItem

export const AUTH_26 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.888",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_26.data.customerId,
    }
} as IDatabaseItem


export const AUTH_27 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.888",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_27.data.customerId,
    }
} as IDatabaseItem

export const AUTH_28 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.888",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_28.data.customerId,
    }
} as IDatabaseItem

export const AUTH_29 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.888",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_29.data.customerId,
    }
} as IDatabaseItem

export const AUTH_30 = {
    type: "mongo",
    modelName: "auth",
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.888",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_30.data.customerId,
    }
} as IDatabaseItem

export const AUTH_31 = {
    type,
    modelName,
    data:{
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.60.999",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_31.data.customerId,
    }
} as IDatabaseItem

export const AUTH_32 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.61.000",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_32.data.customerId,
    }
} as IDatabaseItem

export const AUTH_33 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.61.000",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_33.data.customerId,
    }
} as IDatabaseItem

export const AUTH_34 = {
    type,
    modelName,
    data: {
        ...AUTH_TEMPLATE.data,
        lastIp: "35.176.61.000",
        _id: generateRandomMongoId(),
        userId: CUSTOMER_34.data.customerId,
    }
} as IDatabaseItem