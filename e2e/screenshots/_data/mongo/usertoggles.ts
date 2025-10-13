import * as customer from "../postgres/customers";
import { allTogglesTrue, DEFAULT_TOGGLES } from "./_templates";
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

const type = "mongo";
const modelName = "usertoggles";

export const CUSTOMER_73_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_73.data.customerId,
    features: {
      ...allTogglesTrue.data.features,
      useNewLeaderboardServices: true,
      showNotificationCentre: true,
      showCommunityGoals: true,
    },
  },
} as IDatabaseItem;
