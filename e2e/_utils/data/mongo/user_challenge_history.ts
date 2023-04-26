import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { USER_64, USER_72 } from "./users";

export const CHALLENGE_HISTORY_64 = {
    type:"mongo",
    modelName:"challengehistory",
    data: {
        "_id": generateRandomMongoId(),
        "userId": USER_64.data.userId,
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