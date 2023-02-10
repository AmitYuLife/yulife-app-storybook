
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework"
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_USA_1, CUSTOMER_USA_2, CUSTOMER_USA_3, CUSTOMER_USA_4 } from '../postgres/customers';


import moment = require('moment');

export const COIN_LEDGER_USA_1 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: CUSTOMER_USA_1.data.customerId,
        userId: CUSTOMER_USA_1.data.customerId,
        transactions: [],
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 400,
    }
} as IDatabaseItem

export const COIN_LEDGER_USA_2 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: CUSTOMER_USA_2.data.customerId,
        userId: CUSTOMER_USA_2.data.customerId,
        transactions: [],
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 2,
    }
} as IDatabaseItem

export const COIN_LEDGER_USA_3 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: CUSTOMER_USA_3.data.customerId,
        userId: CUSTOMER_USA_3.data.customerId,
        transactions: [],
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 3,
    }
} as IDatabaseItem

export const COIN_LEDGER_USA_4 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: CUSTOMER_USA_4.data.customerId,
        userId: CUSTOMER_USA_4.data.customerId,
        transactions: [],
        currentBalance: 500,
        currentStreak: 0,
        currentLevel: 4,
    }
} as IDatabaseItem
