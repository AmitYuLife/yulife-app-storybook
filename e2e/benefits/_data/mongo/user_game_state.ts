import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";

export const USER_GAME_STATE_2 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_2.data.customerId,
        userId: customer.CUSTOMER_2.data.customerId,
        currentBalance: 0,
        currentStreak: 0,
        currentLevel: 1,
    },
} as IDatabaseItem;

export const USER_GAME_STATE_3 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_3.data.customerId,
        userId: customer.CUSTOMER_3.data.customerId,
        currentBalance: 42000,
        currentStreak: 0,
        currentLevel: 90,
    },
} as IDatabaseItem;

export const USER_GAME_STATE_4 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_4.data.customerId,
        userId: customer.CUSTOMER_4.data.customerId,
        currentBalance: 15000,
        currentStreak: 0,
        currentLevel: 10,
    },
} as IDatabaseItem;

export const USER_GAME_STATE_37 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_37.data.customerId,
        userId: customer.CUSTOMER_37.data.customerId,
        currentBalance: 100000,
        currentStreak: 0,
        currentLevel: 90,
    },
} as IDatabaseItem;

export const USER_GAME_STATE_94 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_94.data.customerId,
        userId: customer.CUSTOMER_94.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 399,
    },
} as IDatabaseItem;

export const USER_GAME_STATE_116 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_116_GHI_REWARDS.data.customerId,
        userId: customer.CUSTOMER_116_GHI_REWARDS.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 80,
    },
} as IDatabaseItem;

export const USER_GAME_STATE_117 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_117_GHI_REWARDS.data.customerId,
        userId: customer.CUSTOMER_117_GHI_REWARDS.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        yuniversalMap: 2,
        yuniversalLevel: 1,
        currentLevel: 401,
    },
} as IDatabaseItem;

export const USER_GAME_STATE_128 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_128_WELLBEING_ELIGIBILITY.data.customerId,
        userId: customer.CUSTOMER_128_WELLBEING_ELIGIBILITY.data.customerId,
        currentBalance: 10000,
        currentStreak: 0,
        currentLevel: 36,
    },
} as IDatabaseItem;

export const USER_GAME_STATE_129 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_129_WELLBEING_ELIGIBILITY.data.customerId,
        userId: customer.CUSTOMER_129_WELLBEING_ELIGIBILITY.data.customerId,
        currentBalance: 10000,
        currentStreak: 0,
        currentLevel: 36,
    },
} as IDatabaseItem;
