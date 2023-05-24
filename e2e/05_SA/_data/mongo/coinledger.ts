
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework"
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_SA_1, CUSTOMER_SA_2 } from '../postgres/customers';


import moment = require('moment');

export const COIN_LEDGER_SA_1 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_SA_1.data.customerId,
        transactions: [],
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 400,
    }
} as IDatabaseItem

export const COIN_LEDGER_SA_2 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_SA_2.data.customerId,
        transactions: [],
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 400,
    }
} as IDatabaseItem
