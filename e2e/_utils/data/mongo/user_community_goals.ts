import moment = require("moment")
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";

import { CUSTOMER_19, CUSTOMER_20 } from "../postgres/customers"
import { CORE_COMMUNITY_GOAL_1 } from "./core_community_goals"
import { USER_20_LEADERBOARD } from "./leaderboard"
import { USER_19, USER_20 } from "./users"

const type = "mongo"
const modelName = "usercommunitygoals"

export const USER_COMMUNITY_GOALS_1 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: CUSTOMER_20.data.customerId,
        communityGoal:CORE_COMMUNITY_GOAL_1.data._id,
        joinedAt:moment().subtract(1, "day").toDate(),
        yulifer:USER_20.data._id,
        stats:{
            _id:generateRandomMongoId(),
            value:437,
            lastUpdatedAt:moment().subtract(1, "hour").toDate()
        }
    }
} as IDatabaseItem

export const USER_COMMUNITY_GOALS_2 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: CUSTOMER_19.data.customerId,
        communityGoal: CORE_COMMUNITY_GOAL_1.data._id,
        joinedAt: moment().subtract(1, "day").toDate(),
        yulifer: USER_19.data._id,
        stats: {
            _id: generateRandomMongoId(),
            value: 2134,
            lastUpdatedAt: moment().subtract(3, "hours").toDate()
        }
    }
} as IDatabaseItem



