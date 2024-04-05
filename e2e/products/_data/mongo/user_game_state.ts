import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";

export const USER_GAME_STATE_123 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_123_MPP.data.customerId,
        userId: customer.CUSTOMER_123_MPP.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 50,
    },
} as IDatabaseItem;

export const USER_GAME_STATE_124 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_124_MPP.data.customerId,
        userId: customer.CUSTOMER_124_MPP.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 50,
    },
} as IDatabaseItem;
