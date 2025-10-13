import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import * as business from "../postgres/business";
import { allTogglesTrue } from "./_templates";

const type = "mongo";
const modelName = "usertoggles";

export const CUSTOMER_CARMY_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_USA_1.data.customerId,
    businessAccountId: business.BUSINESS_ACCOUNT_USA_1.data.business_account_id,
    features: {
      ...allTogglesTrue.data.features,
      showLeaderboardSearch: true,
      useNewLeaderboardServices: true,
      showYucoinPowerButton: true,
      tempEnableYuScreenV5: true,
      showRewardsProducts: true,
      showGoalProductRewardMilestones: true,
      enableProductGoals: true,
      tempGameBattlePassNewService: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_USA_4_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_USA_4.customer.data.customerId,
    features: {
      ...allTogglesTrue.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_USA_5_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_USA_5.customer.data.customerId,
    features: {
      ...allTogglesTrue.data.features,
    },
  },
} as IDatabaseItem;
