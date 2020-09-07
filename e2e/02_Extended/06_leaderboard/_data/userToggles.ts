import { LEADERBOARD_CUSTOMERS } from "./customers";
import { generateRandomMongoId } from "../../../_utils/data/utils";
import { allTogglesTrue } from "../../../_utils/data/stubs/mongo/_templates";

export const LEADERBOARD_TOGGLES = LEADERBOARD_CUSTOMERS.map((item) => ({
  type: "mongo",
  modelName: "usertoggles",
  data: {
      _id: generateRandomMongoId(),
      userId: item.data.customerId,
      features: allTogglesTrue
  }
}))