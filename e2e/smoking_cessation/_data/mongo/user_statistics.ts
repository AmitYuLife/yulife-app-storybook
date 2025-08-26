import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import moment from "moment";

const type = "mongo";
const modelName = "user_statistics";

export const USER_STATISTICS_BENDER_HIGH_SCORE = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_BENDER.data.customerId,
    type: "game_2048_personal_best",
    currentValue: 1284,
    latestDate: moment().subtract(1, "days").format("YYYY-MM-DD"),
    historicalValues: [],
  },
} as IDatabaseItem;
