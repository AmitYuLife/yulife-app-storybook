
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from '../postgres/customers';

const type = "mongo"
const modelName = "user_game_state"

export const USER_GAME_STATE_20 = {
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