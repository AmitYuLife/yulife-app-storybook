
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from '../postgres/customers';
import moment from "moment";

const type = "mongo"
const modelName = "user_game_state";

export const USER_GAME_STATE_2 = {
    type,
    modelName,
    data: {
        "_id": generateRandomMongoId(),
        "customerId": customer.CUSTOMER_2.data.customerId,
        "userId": customer.CUSTOMER_2.data.customerId,
        "currentBalance": 0,
        "currentStreak": 0,
        "currentLevel": 1,
    }
} as IDatabaseItem

export const USER_GAME_STATE_7 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_7.data.customerId,
        userId: customer.CUSTOMER_7.data.customerId,
        activeStreakId: "YU_STREAK_001",
        currentBalance: 440,
        currentStreak: 4,
        currentLevel: 5,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        nextLevelAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
    }
} as IDatabaseItem

export const USER_GAME_STATE_8 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_8.data.customerId,
        userId: customer.CUSTOMER_8.data.customerId,
        activeStreakId: "YU_STREAK_001",
        currentBalance: 440,
        currentStreak: 4,
        currentLevel: 5,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        nextLevelAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
    }
} as IDatabaseItem

export const USER_GAME_STATE_9 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_9.data.customerId,
        userId: customer.CUSTOMER_9.data.customerId,
        activeStreakId: "YU_STREAK_001",
        currentBalance: 560,
        currentLevel: 7,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss")
    }
} as IDatabaseItem

export const USER_GAME_STATE_10 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_10.data.customerId,
        userId: customer.CUSTOMER_10.data.customerId,
        activeStreakId: "YU_STREAK_001",
        currentBalance: 12000,
        currentStreak: 0,
        currentLevel: 101,
        yuniversalLevel: 1,
    }
} as IDatabaseItem

export const USER_GAME_STATE_11 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_11.data.customerId,
        userId: customer.CUSTOMER_11.data.customerId,
        activeStreakId: "YU_STREAK_001",
        currentBalance: 12000,
        currentStreak: 0,
        currentLevel: 101,
        yuniversalLevel: 7,
        yuniversalMap: 1,
    }
} as IDatabaseItem

export const USER_GAME_STATE_13 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_13.data.customerId,
        userId: customer.CUSTOMER_13.data.customerId,
        currentBalance: 50000,
        currentStreak: 0,
        currentLevel: 175,
    }
} as IDatabaseItem

export const USER_GAME_STATE_35 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_35.data.customerId,
        userId: customer.CUSTOMER_35.data.customerId,
        activeStreakId: "YU_STREAK_001",
        currentBalance: 3080,
        currentStreak: 5,
        currentLevel: 6,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        nextLevelAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
    }
} as IDatabaseItem

export const USER_GAME_STATE_MEDITOPIA_2 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_MEDITOPIA_2.data.customerId,
        userId: customer.CUSTOMER_MEDITOPIA_2.data.customerId,
        currentBalance: 350,
        currentStreak: 0,
        currentLevel: 140
    }
} as IDatabaseItem

export const USER_GAME_STATE_52 = {
    type:"mongo",
    modelName:"user_game_state",
    data:{
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_52.data.customerId,
        userId: customer.CUSTOMER_52.data.customerId,
        currentBalance: 500,
        currentStreak: 1,
        currentLevel: 1
    }
} as IDatabaseItem

export const USER_GAME_STATE_54 = {
    type:"mongo",
    modelName:"user_game_state",
    data:{
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_54.data.customerId,
        userId: customer.CUSTOMER_54.data.customerId,
        currentBalance: 400,
        currentStreak: 2,
        currentLevel: 2
    }
} as IDatabaseItem

export const USER_GAME_STATE_55 = {
    type,
    modelName,
    data:{
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_55.data.customerId,
        userId: customer.CUSTOMER_55.data.customerId,
        currentBalance: 401,
        currentStreak: 3,
        currentLevel: 2
    }
} as IDatabaseItem

export const USER_GAME_STATE_56 = {
    type:"mongo",
    modelName:"user_game_state",
    data:{
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_56.data.customerId,
        userId: customer.CUSTOMER_56.data.customerId,
        currentBalance: 451,
        currentStreak: 3,
        currentLevel: 3
    }
} as IDatabaseItem

export const USER_GAME_STATE_57 = {
    type:"mongo",
    modelName:"user_game_state",
    data:{
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_57.data.customerId,
        userId: customer.CUSTOMER_57.data.customerId,
        currentBalance: 455,
        currentStreak: 4,
        currentLevel: 4
    }
} as IDatabaseItem

export const USER_GAME_STATE_58 = {
    type:"mongo",
    modelName:"user_game_state",
    data:{
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_58.data.customerId,
        userId: customer.CUSTOMER_58.data.customerId,
        currentBalance: 465,
        currentStreak: 5,
        currentLevel: 4
    }
} as IDatabaseItem

export const USER_GAME_STATE_61 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_61.data.customerId,
        userId: customer.CUSTOMER_61.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 51
    }
} as IDatabaseItem

export const USER_GAME_STATE_67 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_67.data.customerId,
        userId: customer.CUSTOMER_67.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 251
    }
} as IDatabaseItem

export const USER_GAME_STATE_68 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_68.data.customerId,
        userId: customer.CUSTOMER_68.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        yuniversalMap: 1,
        yuniversalLevel: 1,
        currentLevel: 201,
    }
} as IDatabaseItem

export const USER_GAME_STATE_71 = {
    type:"mongo",
    modelName:"user_game_state",
    data:{
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_71.data.customerId,
        userId: customer.CUSTOMER_71.data.customerId,
        currentBalance: 500,
        currentStreak: 1,
        currentLevel: 1
    }
} as IDatabaseItem

export const USER_GAME_STATE_72 = {
    type:"mongo",
    modelName:"user_game_state",
    data:{
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_72.data.customerId,
        userId: customer.CUSTOMER_72.data.customerId,
        currentBalance: 500,
        currentStreak: 1,
        currentLevel: 152
    }
} as IDatabaseItem

export const USER_GAME_STATE_76 = {
    type,
    modelName,
    data: {
        "_id": generateRandomMongoId(),
        "customerId": customer.CUSTOMER_76.data.customerId,
        "userId": customer.CUSTOMER_76.data.customerId,
        "currentBalance": 0,
        "currentStreak": 0,
        "currentLevel": 1,
    }
} as IDatabaseItem

export const USER_GAME_STATE_81 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_81.data.customerId,
        userId: customer.CUSTOMER_81.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 800,
    }
} as IDatabaseItem

export const USER_GAME_STATE_84 = {
    type:"mongo",
    modelName:"user_game_state",
    data:{
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_84.data.customerId,
        userId: customer.CUSTOMER_84.data.customerId,
        currentBalance: 500,
        currentStreak: 1,
        currentLevel: 152
    }
} as IDatabaseItem

export const USER_GAME_STATE_86 = {
    type:"mongo",
    modelName:"user_game_state",
    data:{
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_86.data.customerId,
        userId: customer.CUSTOMER_86.data.customerId,
        currentBalance: 500,
        currentStreak: 1,
        currentLevel: 152
    }
} as IDatabaseItem

export const USER_GAME_STATE_132 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_132.data.customerId,
        userId: customer.CUSTOMER_132.data.customerId,
        activeStreakId: "YU_STREAK_001",
        currentBalance: 320,
        currentLevel: 1,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss")
    }
} as IDatabaseItem
