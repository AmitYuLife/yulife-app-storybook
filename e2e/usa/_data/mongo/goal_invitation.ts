import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { GOALS_1 } from "./goals";

const type = "mongo";
const modelName = "goal_invitation";

export const GOAL_INVITATION_1 = {
  type,
  modelName,
  data: {
    goal: GOALS_1.data._id,
    userId: "*",
    endDateTime: moment().add(1, "months").format("YYYY-MM-DDTHH:mm:ss"),
    endDate: moment().add(1, "months"),
  },
} as IDatabaseItem;
