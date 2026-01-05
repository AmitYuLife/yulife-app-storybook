import { CUSTOMER_81 } from "../postgres/customers";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { GOALS_5 } from "./goals_for_global";
import moment from "moment";

const type = "mongo";
const modelName = "goal_invitation_for_global";

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
