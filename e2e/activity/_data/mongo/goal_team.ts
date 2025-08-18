import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import * as customer from "../postgres/customers";
import { GOALS_3 } from "./goals";

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
