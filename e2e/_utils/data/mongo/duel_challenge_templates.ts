import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
;

const modelName = "duelchallengetemplate"
const type = "mongo"

export const duel_challenge_1 ={
    modelName,
    type:"mongo",
    data: {
        _id: generateRandomMongoId(),
        id: "WHOLE_DAY_001",
        type: "whole day",
        duration: 86400,
        description: "Whole day",
        archived: false
    }
} as IDatabaseItem

export const duel_challenge_2 = {
    modelName,
    type,
    data: {
        _id: generateRandomMongoId(),
        id: "BRISK_WALK_001",
        type: "brisk walk",
        duration: 900,
        description: "Brisk Walk (15 minutes)",
        archived: true
    }
} as IDatabaseItem