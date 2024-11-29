
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework"
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from '../postgres/customers';

const type = "mongo";
const modelName = "user_game_state";

export const USER_GAME_STATE_1 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_1.data.customerId,
        currentBalance: 200,
        currentStreak: 0,
        currentLevel: 1,
    }
} as IDatabaseItem

export const USER_GAME_STATE_2 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: customer.CUSTOMER_2_SMOKING.data.customerId,
        currentBalance: 8000,
        currentStreak: 0,
        currentLevel: 219,
    }
} as IDatabaseItem
