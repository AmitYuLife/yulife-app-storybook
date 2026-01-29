import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";

const modelName = "pathways_advice_cards";
const type = "mongo";

export const USER_ADVICE_CARD_11 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    pathwayItemId: "dynamic_advice.1.4.e2e",
    description: "This is a test description for the advice card.",
    createdAt: moment().subtract(1, "day").toDate(),
    updatedAt: moment().subtract(1, "day").toDate(),
  },
} as IDatabaseItem;
