import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { CUSTOMER_5 } from "../postgres/customers";
import { GOALS_1 } from "./goals_for_global";

const type = "mongo";
const modelName = "goal_team";

export const GOAL_TEAM_1 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    goal: GOALS_1.data._id,
    teamName: CUSTOMER_5.data.customerId,
    createdAt: moment().subtract(1, "weeks").format("YYYY-MM-DDTHH:mm:ss"),
    membersCount: 1,
    overallProgress: 0,
  },
} as IDatabaseItem;
