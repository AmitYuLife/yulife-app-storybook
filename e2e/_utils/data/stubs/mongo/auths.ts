import { generateRandomMongoId } from '../../utils';
import { IDatabaseItem } from '../../types';
import { CUSTOMER_1, CUSTOMER_2, CUSTOMER_3, CUSTOMER_4 } from '../postgres/customers';

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