import { generateRandomMongoId } from '../../utils';
import { IDatabaseItem } from '../../types';
import { CUSTOMER_1, CUSTOMER_2, CUSTOMER_3, CUSTOMER_4, CUSTOMER_5, CUSTOMER_6, CUSTOMER_7, CUSTOMER_8, CUSTOMER_9 } from '../postgres/customers';

const AUTH_TEMPLATE = {
    type: "mongo",
    modelName: "auth",
    data: {

        attempts: 1,
        lastAttempt: "2019-03-12T14:10:29.275+00:00",
        lastIp: "35.176.60.174",
        password: "letmein",
        scope: "user",
        strategy: "0",
        used: false,
    }
} as IDatabaseItem

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