
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework"
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_1,  } from '../postgres/customers';

const type = "mongo";
const modelName = "user_game_state";

export const USER_GAME_STATE_1 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_1.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 400,
    }
} as IDatabaseItem
