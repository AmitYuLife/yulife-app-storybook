import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";

export const USER_GAME_STATE_130 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_130_GHI_LEAVER.data.customerId,
        userId: customer.CUSTOMER_130_GHI_LEAVER.data.customerId,
        currentBalance: 10000,
        currentStreak: 0,
        currentLevel: 36,
    },
} as IDatabaseItem;

export const USER_GAME_STATE_131 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_131_GHI_REWARDS.data.customerId,
        userId: customer.CUSTOMER_131_GHI_REWARDS.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 50,
    },
} as IDatabaseItem;

export const USER_GAME_STATE_133 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_133_GHI_FUTURE.data.customerId,
        userId: customer.CUSTOMER_133_GHI_FUTURE.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 22,
    },
} as IDatabaseItem;

export const USER_GAME_STATE_134 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_134_GHI_REWARDS.data.customerId,
        userId: customer.CUSTOMER_134_GHI_REWARDS.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 80,
    },
} as IDatabaseItem;

export const USER_GAME_STATE_135 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_135_GHI_FUTURE.data.customerId,
        userId: customer.CUSTOMER_135_GHI_FUTURE.data.customerId,
        currentBalance: 800,
        currentStreak: 0,
        currentLevel: 5,
    },
} as IDatabaseItem;

export const USER_GAME_STATE_136 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_136_GHI_REWARDS.data.customerId,
        userId: customer.CUSTOMER_136_GHI_REWARDS.data.customerId,
        currentBalance: 800,
        currentStreak: 0,
        currentLevel: 15,
    },
} as IDatabaseItem;

export const USER_GAME_STATE_137 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_137_GHI_REWARDS.data.customerId,
        userId: customer.CUSTOMER_137_GHI_REWARDS.data.customerId,
        currentBalance: 800,
        currentStreak: 0,
        currentLevel: 315,
    },
} as IDatabaseItem;

export const USER_GAME_STATE_139 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_139_GHI_REWARDS.data.customerId,
        userId: customer.CUSTOMER_139_GHI_REWARDS.data.customerId,
        currentBalance: 800,
        currentStreak: 0,
        currentLevel: 2,
    },
} as IDatabaseItem;

export const USER_GAME_STATE_140 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_140_GHI_REWARDS.data.customerId,
        userId: customer.CUSTOMER_140_GHI_REWARDS.data.customerId,
        currentBalance: 800,
        currentStreak: 0,
        currentLevel: 197,
    },
} as IDatabaseItem;

export const USER_GAME_STATE_GH_REMOVED = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_GH_REMOVED.data.customerId,
        userId: customer.CUSTOMER_GH_REMOVED.data.customerId,
        currentBalance: 95,
        currentStreak: 0,
        currentLevel: 1,
    },
} as IDatabaseItem;
