import { IDatabaseItem, generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import { GOALS_2, GOALS_3, GOALS_4, GOALS_5, GOALS_TOURNAMENT } from "./goals";
import moment from "moment";

export const GOAL_TEAM_1 = {
  type: "mongo",
  modelName: "goal_team",
  data: {
    _id: generateRandomMongoId(),
    goal: GOALS_2.data._id,
    teamName: customer.CUSTOMER_52.data._id,
    createdAt: moment(),
    membersCount: 0,
    overallProgress: 0,
  },
} as IDatabaseItem;

export const GOAL_TEAM_3 = {
  type: "mongo",
  modelName: "goal_team",
  data: {
    _id: generateRandomMongoId(),
    goal: GOALS_3.data._id,
    teamName: customer.CUSTOMER_71.data._id,
    createdAt: moment(),
    membersCount: 0,
    overallProgress: 0,
  },
} as IDatabaseItem;

export const GOAL_TEAM_4 = {
  type: "mongo",
  modelName: "goal_team",
  data: {
    _id: generateRandomMongoId(),
    goal: GOALS_4.data._id,
    teamName: customer.CUSTOMER_72.data._id,
    createdAt: moment(),
    membersCount: 0,
    overallProgress: 0,
  },
} as IDatabaseItem;

export const GOAL_TEAM_5 = {
  type: "mongo",
  modelName: "goal_team",
  data: {
    _id: generateRandomMongoId(),
    goal: GOALS_5.data._id,
    teamName: customer.CUSTOMER_81.data._id,
    createdAt: moment().subtract(3, "days").format("YYYY-MM-DDTHH:mm:ss"),
    membersCount: 0,
    overallProgress: 0,
  },
} as IDatabaseItem;

export const GOAL_TEAM_6 = {
  type: "mongo",
  modelName: "goal_team",
  data: {
    _id: generateRandomMongoId(),
    goal: GOALS_TOURNAMENT.data._id,
    teamName: "SG1",
    createdAt: moment.utc().startOf("day").format("YYYY-MM-DD"),
    membersCount: 1,
    overallProgress: 2,
    completed: {
      passive_challenge_steps: 999,
    },
  },
} as IDatabaseItem;

export const GOAL_TEAM_7 = {
  type: "mongo",
  modelName: "goal_team",
  data: {
    _id: generateRandomMongoId(),
    goal: GOALS_TOURNAMENT.data._id,
    teamName: "SG7",
    createdAt: moment.utc().startOf("day").format("YYYY-MM-DD"),
    membersCount: 1,
    overallProgress: 2,
    completed: {
      passive_challenge_steps: 998,
    },
  },
} as IDatabaseItem;
