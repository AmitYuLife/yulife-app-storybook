import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_1, BUSINESS_ACCOUNT_14_STORE_DISABLED } from "../postgres/business";

export const BA1_PARTNERSHIP_REWARDS_SETTINGS = {
  type: "mongo",
  modelName: "core_settings",
  data: {
    _id: generateRandomMongoId(),
    entityType: "business",
    domain: "partnerships.rewards",
    entityId: BUSINESS_ACCOUNT_1.data.business_account_id,
    settings: {
      storeEnabled: true,
      storeAccessLevel: 1,
    },
  },
} as IDatabaseItem;

export const BA14_PARTNERSHIP_REWARDS_SETTINGS = {
  type: "mongo",
  modelName: "core_settings",
  data: {
    _id: generateRandomMongoId(),
    entityType: "business",
    domain: "partnerships.rewards",
    entityId: BUSINESS_ACCOUNT_14_STORE_DISABLED.data.business_account_id,
    settings: {
      storeEnabled: false,
      storeAccessLevel: 4,
    },
  },
} as IDatabaseItem;
