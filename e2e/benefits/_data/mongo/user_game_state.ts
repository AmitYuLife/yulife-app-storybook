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
        currentBalance: 17500,
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

export const USER_GAME_STATE_118 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_118_GHI_REWARDS.data.customerId,
        userId: customer.CUSTOMER_118_GHI_REWARDS.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 123,
    },
} as IDatabaseItem;

export const USER_GAME_STATE_119 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_119_GHI_REWARDS.data.customerId,
        userId: customer.CUSTOMER_119_GHI_REWARDS.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 211,
    },
} as IDatabaseItem;

export const USER_GAME_STATE_120 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_120_GHI_REWARDS.data.customerId,
        userId: customer.CUSTOMER_120_GHI_REWARDS.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 177,
    },
} as IDatabaseItem;

export const USER_GAME_STATE_121 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_121_GHI_REWARDS.data.customerId,
        userId: customer.CUSTOMER_121_GHI_REWARDS.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 241,
    },
} as IDatabaseItem;

export const USER_GAME_STATE_127 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_127_GHI_REWARDS.data.customerId,
        userId: customer.CUSTOMER_127_GHI_REWARDS.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 241,
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

export const USER_GAME_STATE_138 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_138.data.customerId,
        userId: customer.CUSTOMER_138.data.customerId,
        currentBalance: 800,
        currentStreak: 0,
        currentLevel: 48,
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
        currentLevel: 2,
    },
} as IDatabaseItem;
