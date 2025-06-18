import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_52, CUSTOMER_72, CUSTOMER_81 } from "../postgres/customers";
import { GOALS_5, GOALS_TOURNAMENT } from "./goals";
import moment from "moment";

const type = "mongo";
const modelName = "goal_invitation";

export const GOAL_INVITATION_5 = {
  type,
  modelName,
  data: {
    goal: GOALS_5.data._id,
    teamName: "TeamYulife",
    userId: CUSTOMER_81.data.customerId,
    endDateTime: moment().add(5, "day").format("YYYY-MM-DDTHH:mm:ss"),
  },
} as IDatabaseItem;

export const GOAL_INVITATION_TOURNAMENT_72 = {
  type,
  modelName,
  data: {
    userId: CUSTOMER_72.data.customerId,
    goal: GOALS_TOURNAMENT.data._id,
    endDateTime: moment().add(7, "days").format("YYYY-MM-DDTHH:mm:ss"),
  },
} as IDatabaseItem;

export const GOAL_INVITATION_TOURNAMENT_52 = {
  type,
  modelName,
  data: {
    userId: CUSTOMER_52.data.customerId,
    goal: GOALS_TOURNAMENT.data._id,
    endDateTime: moment().add(7, "days").format("YYYY-MM-DDTHH:mm:ss"),
  },
} as IDatabaseItem;
