import * as customer from "../postgres/customers";
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

const type = "mongo";
const modelName = "usertoggles";

export const CUSTOMER_1_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_1.data.customerId,
    features: {
      tempGameUseSettingsConfigForQuestMapV3: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_2_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_2_SMOKING.data.customerId,
    features: {
      showYucoinPowerButton: true,
      tempGameTodayYuCoinCheckIns: true,
      showDailySurvey: true,
      showNotificationCentre: true,
    },
  },
} as IDatabaseItem;
