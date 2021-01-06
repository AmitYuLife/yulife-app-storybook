import { AUTH_TEMPLATE } from "@data";
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { LEADERBOARD_CUSTOMERS } from "./customers";

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