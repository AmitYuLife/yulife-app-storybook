
import { generateRandomMongoId } from '../../utils';
import { IDatabaseItem } from '../../types';
import { CUSTOMER_2, CUSTOMER_3, CUSTOMER_4 } from '../postgres/customers';
import { CHALLENGE_2 } from './challenge';

export const COIN_LEDGER_2 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        "_id": generateRandomMongoId(),
        "customerId": CUSTOMER_2.data.customerId,
        "userId": CUSTOMER_2.data.customerId,
        "transactions": [{ _id: generateRandomMongoId(), coins: 10, source: "challenge", sourceId: CHALLENGE_2.data._id, timestamp: CHALLENGE_2.data.endDateTime, totalCoins: 210, level: 1 }],
        "currentBalance": 0,
        "currentStreak": 0,
        "currentLevel": 1,
    }
} as IDatabaseItem

export const COIN_LEDGER_3 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: CUSTOMER_3.data.customerId,
        userId: CUSTOMER_3.data.customerId,
        transactions: [],
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 10
    }
} as IDatabaseItem

export const COIN_LEDGER_4 = {
    type: "mongo",
    modelName: "coinledger",
    data: {
        _id: generateRandomMongoId(),
        customerId: CUSTOMER_4.data.customerId,
        userId: CUSTOMER_4.data.customerId,
        transactions: [],
        currentBalance: 15000,
        currentStreak: 0,
        currentLevel: 10
    }
} as IDatabaseItem