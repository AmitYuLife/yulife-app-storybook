import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_84 } from "../postgres/customers";
import { CHALLENGE_USER_84 } from "./challenge";
import { USER_132, USER_40, USER_64, USER_67, USER_68, USER_7, USER_70, USER_72, USER_76, USER_86, USER_91 } from "./users";

export const CHALLENGE_HISTORY_7 = {
    type:"mongo",
    modelName:"user_level_history",
    data: {
        "_id": generateRandomMongoId(),
        "userId": USER_7.data.userId,
    }
} as IDatabaseItem

export const CHALLENGE_HISTORY_40 = {
    type:"mongo",
    modelName:"user_level_history",
    data: {
        "_id": generateRandomMongoId(),
        "userId": USER_40.data.userId,
    }
} as IDatabaseItem

export const CHALLENGE_HISTORY_64 = {
    type:"mongo",
    modelName:"user_level_history",
    data: {
        "_id": generateRandomMongoId(),
        "userId": USER_64.data.userId,
    }
} as IDatabaseItem

export const CHALLENGE_HISTORY_67 = {
    type:"mongo",
    modelName:"user_level_history",
    data: {
        "_id": generateRandomMongoId(),
        "userId": USER_67.data.userId,
    }
} as IDatabaseItem

export const CHALLENGE_HISTORY_68 = {
    type:"mongo",
    modelName:"user_level_history",
    data: {
        "_id": generateRandomMongoId(),
        "userId": USER_68.data.userId,
    }
} as IDatabaseItem

export const CHALLENGE_HISTORY_70 = {
    type:"mongo",
    modelName:"user_level_history",
    data: {
        "_id": generateRandomMongoId(),
        "userId": USER_70.data.userId,
    }
} as IDatabaseItem

export const CHALLENGE_HISTORY_72 = {
    type:"mongo",
    modelName:"user_level_history",
    data: {
        "_id": generateRandomMongoId(),
        "userId": USER_72.data.userId,
    }
} as IDatabaseItem

export const CHALLENGE_HISTORY_76 = {
    type:"mongo",
    modelName:"user_level_history",
    data: {
        "_id": generateRandomMongoId(),
        "userId": USER_76.data.userId,
    }
} as IDatabaseItem


export const CHALLENGE_HISTORY_84 = {
    type:"mongo",
    modelName:"user_level_history",
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
    type:"mongo",
    modelName:"user_level_history",
    data: {
        "_id": generateRandomMongoId(),
        "userId": USER_86.data.userId,
    }
} as IDatabaseItem

export const CHALLENGE_HISTORY_91 = {
    type:"mongo",
    modelName:"user_level_history",
    data: {
        "_id": generateRandomMongoId(),
        "userId": USER_91.data.userId,
    }
} as IDatabaseItem

export const CHALLENGE_HISTORY_132 = {
    type:"mongo",
    modelName:"user_level_history",
    data: {
        "_id": generateRandomMongoId(),
        "userId": USER_132.data.customerId,
    }
} as IDatabaseItem
