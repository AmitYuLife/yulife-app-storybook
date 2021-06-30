import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import moment from "moment"
import { CHALLENGE_USER_35_E } from "./challenge"
import { USER_35 } from "./users"

const type = "mongo"
const modelName = "user_awards"


export const USER_AWARD_35_STREAK = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_35.data.userId,
        redeemed: true,
        type: "yucoin",
        amount: 2500,
        source: "streak",
        redeemedAt: CHALLENGE_USER_35_E.data.endDateTime,
        createdAt: CHALLENGE_USER_35_E.data.endDateTime,
        identifier: generateRandomMongoId()
    }
} as IDatabaseItem

export const USER_AWARD_35_AVATAR = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        redeemed: true,
        type: "yucoin",
        amount: 100,
        source: "avatar_creation_award",
        userId: USER_35.data.userId,
        redeemdAt: moment().subtract(24, "hours").toDate(),
        createdAt: moment().subtract(24, "hours").toDate(),
        identifier: generateRandomMongoId()
    }
} as IDatabaseItem