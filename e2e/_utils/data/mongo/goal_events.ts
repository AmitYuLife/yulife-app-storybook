import { IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import { GOALS_1, GOALS_2 } from "./goals";

const type = "mongo"
const modelName = "goal_events"

export const GOAL_EVENTS_1 = {
    type,
    modelName,
    data:{
        goal: GOALS_1.data._id,
        type: "active_challenge",
        targetValue: 2,
    }
} as IDatabaseItem

export const GOAL_EVENTS_2 = {
    type,
    modelName,
    data:{
        goal: GOALS_2.data._id,
        type: "user_inspected",
        targetValue: 5,
        parentType: "goals",
    }
} as IDatabaseItem

