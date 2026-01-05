import { IDatabaseItem, generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { GOALS_1, GOALS_3 } from "./goals_for_global";

const type = "mongo";
const modelName = "goal_events_for_global";

export const GOAL_EVENTS_1 = {
  type,
  modelName,
  data: {
    goal: GOALS_1.data._id,
    type: "active_challenge",
    targetValue: 2,
  },
} as IDatabaseItem;

export const GOAL_EVENTS_3 = {
  type,
  modelName,
  data: {
    goal: GOALS_3.data._id,
    type: "passive_challenge_cycling",
    targetValue: 10000,
    parentType: "goals",
  },
} as IDatabaseItem;
