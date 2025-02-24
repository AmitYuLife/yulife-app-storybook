import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_1 } from "../postgres/business";

export const CORE_SETTINGS_SMOKING_PLANET_EXPRESS = {
  type: "mongo",
  modelName: "core_settings",
  data: {
    _id: generateRandomMongoId(),
    entityType: "business",
    domain: "game.smoking",
    entityId: BUSINESS_ACCOUNT_1.data.business_account_id,
    settings: {
      isEnabled: true,
    },
  },
} as IDatabaseItem;

export const BUSINESS_ACCOUNT_1_GIFTING_SETTING = {
  type: "mongo",
  modelName: "core_settings",
  data: {
    _id: generateRandomMongoId(),
    domain: "game.gifting",
    entityId: BUSINESS_ACCOUNT_1.data.business_account_id,
    entityType: "business",
    settings: {
      enabled: true,
    },
  },
} as IDatabaseItem;
