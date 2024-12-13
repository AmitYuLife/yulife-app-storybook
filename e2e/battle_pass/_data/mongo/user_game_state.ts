import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";

const type = "mongo";
const modelName = "user_game_state";

export const USER_GAME_STATE_CARMY = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_CARMY.data.customerId,
        userId: customer.CUSTOMER_CARMY.data.customerId,
        currentBalance: 85000,
        currentStreak: 0,
        currentLevel: 10,
    },
} as IDatabaseItem;
