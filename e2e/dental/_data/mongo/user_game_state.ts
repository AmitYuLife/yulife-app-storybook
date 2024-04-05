import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";

const type = "mongo";
const modelName = "user_game_state";

export const USER_GAME_STATE_DENTAL_RENEW = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_DENTAL_RENEW.data.customerId,
        userId: customer.CUSTOMER_DENTAL_RENEW.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 22,
    },
} as IDatabaseItem;

export const USER_GAME_STATE_DENTAL_RENEW_2 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_DENTAL_RENEW_2.data.customerId,
        userId: customer.CUSTOMER_DENTAL_RENEW_2.data.customerId,
        currentBalance: 17500,
        currentStreak: 0,
        currentLevel: 22,
    },
} as IDatabaseItem;
