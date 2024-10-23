
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from '../postgres/customers';

const type = "mongo"
const modelName = "user_game_state"

export const USER_GAME_STATE_FRY = {
    type,
    modelName,
    data:{
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_FRY.data.customerId,
        userId: customer.CUSTOMER_FRY.data.customerId,
        currentBalance: 500,
        currentStreak: 0,
        currentLevel: 81
    }
} as IDatabaseItem

export const USER_GAME_STATE_LEELA = {
    type,
    modelName,
    data:{
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_LEELA.data.customerId,
        userId: customer.CUSTOMER_LEELA.data.customerId,
        currentBalance: 500,
        currentStreak: 0,
        currentLevel: 212
    }
} as IDatabaseItem

export const USER_GAME_STATE_BENDER = {
    type,
    modelName,
    data:{
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_BENDER.data.customerId,
        userId: customer.CUSTOMER_BENDER.data.customerId,
        currentBalance: 34320,
        currentStreak: 0,
        currentLevel: 212
    }
} as IDatabaseItem

export const USER_GAME_STATE_ZOIDERG = {
    type,
    modelName,
    data:{
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_ZOIDBERG.data.customerId,
        userId: customer.CUSTOMER_ZOIDBERG.data.customerId,
        currentBalance: 100,
        currentStreak: 0,
        currentLevel: 212
    }
} as IDatabaseItem

export const USER_GAME_STATE_ZAPP = {
    type,
    modelName,
    data:{
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_ZAPP.data.customerId,
        userId: customer.CUSTOMER_ZAPP.data.customerId,
        currentBalance: 100,
        currentStreak: 0,
        currentLevel: 212
    }
} as IDatabaseItem