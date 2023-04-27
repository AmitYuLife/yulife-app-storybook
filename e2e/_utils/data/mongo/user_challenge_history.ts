import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { USER_64, USER_67, USER_68, USER_7, USER_70, USER_72 } from "./users";

export const CHALLENGE_HISTORY_7 = {
    type:"mongo",
    modelName:"challengehistory",
    data: {
        "_id": generateRandomMongoId(),
        "userId": USER_7.data.userId,
    }
} as IDatabaseItem

export const CHALLENGE_HISTORY_64 = {
    type:"mongo",
    modelName:"challengehistory",
    data: {
        "_id": generateRandomMongoId(),
        "userId": USER_64.data.userId,
    }
} as IDatabaseItem

export const CHALLENGE_HISTORY_67 = {
    type:"mongo",
    modelName:"challengehistory",
    data: {
        "_id": generateRandomMongoId(),
        "userId": USER_67.data.userId,
    }
} as IDatabaseItem

export const CHALLENGE_HISTORY_68 = {
    type:"mongo",
    modelName:"challengehistory",
    data: {
        "_id": generateRandomMongoId(),
        "userId": USER_68.data.userId,
    }
} as IDatabaseItem

export const CHALLENGE_HISTORY_70 = {
    type:"mongo",
    modelName:"challengehistory",
    data: {
        "_id": generateRandomMongoId(),
        "userId": USER_70.data.userId,
    }
} as IDatabaseItem

export const CHALLENGE_HISTORY_72 = {
    type:"mongo",
    modelName:"challengehistory",
    data: {
        "_id": generateRandomMongoId(),
        "userId": USER_72.data.userId,
    }
} as IDatabaseItem