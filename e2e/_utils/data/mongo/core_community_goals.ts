import moment = require("moment")
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";


const type = "mongo"
const modelName = "communitygoals"

export const CORE_COMMUNITY_GOAL_1 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        maxJoiners:100,
        goalType:"steps",
        rewardMechanism:"fixed",
        isExpired:false,
        title:"Reach 250,000 steps",
        description:"these boots are made for walking",
        startDate:moment().subtract(1, "day").toDate(),
        endDate: moment().add(30, "days").toDate(),
        awardDate:moment().add(31, "days").toDate(),
        goalValue:25000,
        rewardType:"yucoin",
        rewardValue:100
    }
} as IDatabaseItem