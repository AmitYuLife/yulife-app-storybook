
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from '../postgres/customers';

export const USER_GAME_STATE_109 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_109.data.customerId,
        userId: customer.CUSTOMER_109.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 399
    }
} as IDatabaseItem

export const USER_GAME_STATE_115 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_115.data.customerId,
        userId: customer.CUSTOMER_115.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 399
    }
} as IDatabaseItem

export const USER_GAME_STATE_138 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_138.data.customerId,
        userId: customer.CUSTOMER_138.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        yuniversalMap: 2,
        yuniversalLevel: 1,
        currentLevel: 401,
    }
} as IDatabaseItem
