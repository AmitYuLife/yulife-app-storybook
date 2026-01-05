import { IDatabaseItem, generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { GOALS_1, GOALS_FTUE } from "./goals_for_global";

const type = "mongo";
const modelName = "goal_events_for_global";

export const GOAL_EVENTS_1_REWARDS = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    parentType: "goals",
    goal: GOALS_1.data._id,
    type: "journey_milestone_reached",
    dynamicId: "financial_wellness_quiz_completed",
    targetValue: 1,
    goalWeight: 1,
    _migrated: true,
    __v: 0,
  },
} as IDatabaseItem;

export const GOAL_EVENTS_FTUE = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    parentType: "goals",
    goal: GOALS_FTUE.data._id,
    type: "passive_challenge_steps",
    targetValue: 1000,
    goalWeight: 1,
  },
} as IDatabaseItem;
