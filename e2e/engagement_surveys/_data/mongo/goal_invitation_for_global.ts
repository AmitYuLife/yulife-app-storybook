import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { GOALS_1, GOALS_FTUE } from "./goals_for_global";
import { CUSTOMER_5, CUSTOMER_7 } from "../postgres/customers";

const type = "mongo";
const modelName = "goal_invitation_for_global";

export const GOAL_INVITATION_1 = {
  type,
  modelName,
  data: {
    userId: CUSTOMER_5.data.customerId,
    goal: GOALS_1.data._id,
    endDateTime: moment().add(1, "weeks").format("YYYY-MM-DDTHH:mm:ss"),
  },
} as IDatabaseItem;

export const GOAL_INVITATION_FTUE = {
  type,
  modelName,
  data: {
    userId: CUSTOMER_7.customer.data.customerId,
    goal: GOALS_FTUE.data._id,
    endDateTime: moment().add(1, "weeks").format("YYYY-MM-DDTHH:mm:ss"),
  },
} as IDatabaseItem;
