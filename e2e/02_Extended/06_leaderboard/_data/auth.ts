import { LEADERBOARD_CUSTOMERS } from "./customers";
import { AUTH_TEMPLATE } from "../../../_utils/data/stubs/mongo/_templates";
import { generateRandomMongoId } from "../../../_utils/data/utils";

export const LEADERBOARD_AUTH = LEADERBOARD_CUSTOMERS.map((item) => ({
  type: "mongo" as "mongo",
  modelName: "auth",
  data: {
      ...AUTH_TEMPLATE.data,
      lastIp: "35.176.60.666",
      _id: generateRandomMongoId(),
      userId: item.data.customerId
  }
}))