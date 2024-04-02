import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { USER_40, USER_7 } from "./users";
import { CUSTOMER_84 } from "../postgres/customers";
import { CHALLENGE_USER_84 } from "./challenge";

export const CHALLENGE_HISTORY_7 = {
    type: "mongo",
    modelName: "user_level_history",
    data: {
        _id: generateRandomMongoId(),
        userId: USER_7.data.userId,
    },
} as IDatabaseItem;

export const CHALLENGE_HISTORY_40 = {
    type: "mongo",
    modelName: "user_level_history",
    data: {
        _id: generateRandomMongoId(),
        userId: USER_40.data.userId,
    },
} as IDatabaseItem;

export const CHALLENGE_HISTORY_84 = {
    type: "mongo",
    modelName: "user_level_history",
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_84.data.customerId,
        challengesForEveryLevel: {
            152: {
                maxRating: 3,
                challengesForEveryLevelSlot: {
                    SUDOKU_001: [
                        {
                            challengeId: CHALLENGE_USER_84.data._id,
                            rating: 3,
                            yuCoinAwarded: 60,
                        },
                    ],
                },
            },
        },
    },
} as IDatabaseItem;
