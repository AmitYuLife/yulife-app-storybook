import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { GOALS_1, GOALS_2, GOALS_3, GOALS_4, GOALS_5 } from "./goals";
import { WEEKLY_GOAL_1 } from "./goal_weeklies";

const type = "mongo";
const modelName = "goal_events";

export const GOAL_EVENTS_1 = {
  type,
  modelName,
  data: {
    goal: GOALS_1.data._id,
    type: "active_challenge",
    targetValue: 2,
  },
} as IDatabaseItem;

export const GOAL_EVENTS_2 = {
  type,
  modelName,
  data: {
    goal: GOALS_2.data._id,
    type: "user_inspected",
    targetValue: 5,
    parentType: "goals",
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

export const GOAL_EVENTS_4 = {
  type,
  modelName,
  data: {
    goal: GOALS_4.data._id,
    type: "active_challenge_three_stars",
    targetValue: 4,
    parentType: "goals",
  },
} as IDatabaseItem;

export const WEEKLY_GOAL_EVENT_1 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    goal: WEEKLY_GOAL_1.data._id,
    parentType: "goal_weeklies",
    type: "active_challenge",
    targetValue: 2,
    goalWeight: 1,
  },
} as IDatabaseItem;

export const GOAL_EVENTS_5 = {
  type,
  modelName,
  data: {
    goal: GOALS_5.data._id,
    type: "passive_challenge_steps",
    targetValue: 10000,
    parentType: "goals",
  },
} as IDatabaseItem;
