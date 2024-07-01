import { IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import { GOALS_2, GOALS_4, GOALS_5 } from "./goals";

const type = "mongo"
const modelName = "goal_events"

export const GOAL_EVENTS_1 = {
    type,
    modelName,
    data:{
        goal: GOALS_2.data._id,
        type: "user_inspected",
        targetValue: 5,
        parentType: "goals",
    }
} as IDatabaseItem


export const GOAL_EVENTS_4 = {
    type,
    modelName,
    data:{
        goal: GOALS_4.data._id,
        type: "active_challenge_three_stars",
        targetValue: 4,
        parentType: "goals",
    }
} as IDatabaseItem

export const GOAL_EVENTS_5 = {
    type,
    modelName,
    data:{
        goal: GOALS_5.data._id,
        type: "passive_challenge_steps",
        targetValue: 10000,
        parentType: "goals",
    }
} as IDatabaseItem
