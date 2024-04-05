import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { USER_64, USER_67, USER_7, USER_70, USER_91 } from "./users";

export const CHALLENGE_HISTORY_7 = {
    type:"mongo",
    modelName:"user_level_history",
    data: {
        "_id": generateRandomMongoId(),
        "userId": USER_7.data.userId,
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

export const CHALLENGE_HISTORY_70 = {
    type:"mongo",
    modelName:"user_level_history",
    data: {
        "_id": generateRandomMongoId(),
        "userId": USER_70.data.userId,
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
