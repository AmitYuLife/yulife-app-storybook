import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import * as business from "../postgres/business";
import { allTogglesTrue, DEFAULT_TOGGLES } from "./_templates";

const type = "mongo";
const modelName = "usertoggles";

export const CUSTOMER_CARMY_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_CARMY.data.customerId,
    businessAccountId: business.BUSINESS_THE_BEAR.data.business_account_id,
    features: {
      ...allTogglesTrue.data.features,
      showNewLeaderBoard: true,
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
