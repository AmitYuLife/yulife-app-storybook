import { IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import moment = require('moment');
import { GOALS_1 } from "./goals";



const type = "mongo"
const modelName = "goal_events"

export const GOAL_EVENTS_1 = {
    type,
    modelName,
    data:{
        goal: GOALS_1.data._id,
        stageId: "test_stage",
        type: "active_challenge",
        targetValue: 2,
    }
} as IDatabaseItem