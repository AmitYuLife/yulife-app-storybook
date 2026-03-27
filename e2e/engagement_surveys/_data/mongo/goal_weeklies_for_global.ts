import { IDatabaseItem, generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import moment from "moment";

const type = "mongo";
const modelName = "goal_weeklies_for_global";

export const WEEKLY_GOAL_REFLECTIONS = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    status: "active",
    tags: [],
    synchronousProgress: true,
    title: {
      "en-GB": "Complete reflections",
    },
    weekStartDate: moment().isoWeekday(1).format("YYYY-MM-DD"),
    restrictions: {
      availableForLabels: ["pathwaysEnabled"],
    },
  },
} as IDatabaseItem;
