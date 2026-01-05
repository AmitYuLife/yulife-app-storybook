import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { GOALS_1 } from "./goals_for_global";
import { CUSTOMER_34 } from "../postgres/customers";
import moment from "moment";

const type = "mongo";
const modelName = "goal_invitation_for_global";

export const GOAL_INVITATION_1 = {
  type,
  modelName,
  data: {
    goal: GOALS_1.data._id,
    teamName: "TeamYulife",
    userId: CUSTOMER_34.data.customerId,
    endDateTime: moment().add(7, "day").format("YYYY-MM-DDTHH:mm:ss"),
  },
} as IDatabaseItem;
