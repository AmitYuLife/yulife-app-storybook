import { IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import moment = require('moment');
import { CUSTOMER_52 } from "../postgres/customers";
import { GOALS_2 } from "./goals";
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
