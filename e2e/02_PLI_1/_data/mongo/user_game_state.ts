import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";

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
