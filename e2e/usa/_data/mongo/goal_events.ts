import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { GOALS_1 } from "./goals";

const type = "mongo";
const modelName = "goal_events";

export const GOAL_EVENTS_1 = {
  type,
  modelName,
  data: {
    goal: GOALS_1.data._id,
    type: "passive_challenge_steps",
    targetValue: 100000,
    parentType: "goals",
  },
} as IDatabaseItem;
