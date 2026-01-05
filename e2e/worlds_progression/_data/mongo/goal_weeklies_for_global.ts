import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";

export const WEEKLY_GOAL_1 = {
  type: "mongo",
  modelName: "goal_weeklies_for_global",
  data: {
    _id: generateRandomMongoId(),
    status: "active",
    tags: [],
    synchronousProgress: true,
    title: "Test weekly goal",
    weekStartDate: moment().isoWeekday(1).format("YYYY-MM-DD"),
  },
} as IDatabaseItem;
