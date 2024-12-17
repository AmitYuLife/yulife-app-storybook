
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from '../postgres/customers';

export const USER_GAME_STATE_LEAVER = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_LEAVER.data.customerId,
        userId: customer.CUSTOMER_LEAVER.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 399
    }
} as IDatabaseItem

export const USER_GAME_STATE_111 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_111.data.customerId,
        userId: customer.CUSTOMER_111.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 399
    }
} as IDatabaseItem

export const USER_GAME_STATE_112 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_112.data.customerId,
        userId: customer.CUSTOMER_112.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 399
    }
} as IDatabaseItem

export const USER_GAME_STATE_113 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_113.data.customerId,
        userId: customer.CUSTOMER_113.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 399
    }
} as IDatabaseItem

export const USER_GAME_STATE_114 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_114.data.customerId,
        userId: customer.CUSTOMER_114.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 399
    }
} as IDatabaseItem

export const USER_GAME_STATE_126 = {
    type:"mongo",
    modelName:"user_game_state",
    data:{
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_126_LEAVER_WELLBEING.data.customerId,
        userId: customer.CUSTOMER_126_LEAVER_WELLBEING.data.customerId,
        currentBalance: 10000,
        currentStreak: 0,
        currentLevel: 28,
    }
} as IDatabaseItem
