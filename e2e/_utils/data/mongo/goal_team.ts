import { IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import moment = require('moment');
import { CUSTOMER_52, CUSTOMER_71 } from "../postgres/customers";
import { GOALS_2, GOALS_3 } from "./goals";
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework"


export const GOAL_TEAM_1 = {
    type: "mongo",
    modelName: "goal_team",
    data:{
        _id: generateRandomMongoId(),
        goal: GOALS_2.data._id,
        teamName: CUSTOMER_52.data._id,
        createdAt: moment(),
        membersCount: 0,
        overallProgress: 0,
    },
} as IDatabaseItem

export const GOAL_TEAM_3 = {
    type: "mongo",
    modelName: "goal_team",
    data:{
        _id: generateRandomMongoId(),
        goal: GOALS_3.data._id,
        teamName: CUSTOMER_71.data._id,
        createdAt: moment(),
        membersCount: 0,
        overallProgress: 0,
    },
} as IDatabaseItem
