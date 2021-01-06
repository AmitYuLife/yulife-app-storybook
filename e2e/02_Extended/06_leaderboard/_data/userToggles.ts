import { LEADERBOARD_CUSTOMERS } from "./customers";
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { allTogglesTrue } from "@data";

export const LEADERBOARD_TOGGLES = LEADERBOARD_CUSTOMERS.map((item) => ({
  type: "mongo",
  modelName: "usertoggles",
  data: {
      _id: generateRandomMongoId(),
      userId: item.data.customerId,
      features: allTogglesTrue.data.features
  }
}))