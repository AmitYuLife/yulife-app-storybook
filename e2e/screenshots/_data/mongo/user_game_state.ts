import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import moment from "moment";

export const USER_GAME_STATE_73 = {
    type: "mongo",
    modelName: "user_game_state",
    data: {
        _id: generateRandomMongoId(),
        customerId: customer.CUSTOMER_73.data.customerId,
        userId: customer.CUSTOMER_73.data.customerId,
        activeStreakId: "YU_STREAK_001",
        currentBalance: 360,
        currentStreak: 1,
        currentLevel: 1,
        nextStreakAvailableAt: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
    },
} as IDatabaseItem;
