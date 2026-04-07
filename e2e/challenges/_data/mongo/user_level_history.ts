import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { USER_7, USER_132, USER_67, USER_68, USER_72, USER_86, USER_76 } from "./users";
import { CUSTOMER_84 } from "../postgres/customers";
import { CHALLENGE_USER_84 } from "./challenge";

const type = "mongo";
const modelName = "user_level_history";

export const CHALLENGE_HISTORY_7 = {
    type,
    modelName,
    data: {
        "_id": generateRandomMongoId(),
        "userId": USER_7.data.userId,
        challengesForEveryLevel: {},
    }
} as IDatabaseItem

export const CHALLENGE_HISTORY_67 = {
    type,
    modelName,
    data: {
        "_id": generateRandomMongoId(),
        "userId": USER_67.data.userId,
        challengesForEveryLevel: {},
    }
} as IDatabaseItem

export const CHALLENGE_HISTORY_68 = {
    type,
    modelName,
    data: {
        "_id": generateRandomMongoId(),
        "userId": USER_68.data.userId,
        challengesForEveryLevel: {},
    }
} as IDatabaseItem

export const CHALLENGE_HISTORY_72 = {
    type,
    modelName,
    data: {
        "_id": generateRandomMongoId(),
        "userId": USER_72.data.userId,
        challengesForEveryLevel: {},
    }
} as IDatabaseItem

export const CHALLENGE_HISTORY_76 = {
    type,
    modelName,
    data: {
        "_id": generateRandomMongoId(),
        "userId": USER_76.data.userId,
        challengesForEveryLevel: {},
    }
} as IDatabaseItem

export const CHALLENGE_HISTORY_84 = {
    type,
    modelName,
    data: {
        "_id": generateRandomMongoId(),
        "userId": CUSTOMER_84.data.customerId,
        challengesForEveryLevel: {
            152: {
                maxRating: 3,
                challengesForEveryLevelSlot: {
                    SUDOKU_001: [
                        {
                            challengeId: CHALLENGE_USER_84.data._id,
                            rating: 3,
                            yuCoinAwarded: 60
                        }
                    ]
                }
            }
        }
    }
} as IDatabaseItem

export const CHALLENGE_HISTORY_86 = {
    type,
    modelName,
    data: {
        "_id": generateRandomMongoId(),
        "userId": USER_86.data.userId,
        challengesForEveryLevel: {},
    }
} as IDatabaseItem

export const CHALLENGE_HISTORY_132 = {
    type,
    modelName,
    data: {
        "_id": generateRandomMongoId(),
        "userId": USER_132.data.customerId,
        challengesForEveryLevel: {},
    }
} as IDatabaseItem
