
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework"
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_USA_1, CUSTOMER_USA_2, CUSTOMER_USA_3, CUSTOMER_USA_4 } from '../postgres/customers';

export const USER_GAME_STATE_USA_1 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_USA_1.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 400,
    }
} as IDatabaseItem

export const USER_GAME_STATE_USA_2 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_USA_2.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 2,
    }
} as IDatabaseItem

export const USER_GAME_STATE_USA_3 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_USA_3.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 3,
    }
} as IDatabaseItem

export const USER_GAME_STATE_USA_4 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_USA_4.data.customerId,
        currentBalance: 500,
        currentStreak: 0,
        currentLevel: 4,
    }
} as IDatabaseItem
