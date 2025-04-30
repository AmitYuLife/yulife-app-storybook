import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_PLANET_EXPRESS } from "../postgres/business";

export const CORE_SETTINGS_SMOKING_PLANET_EXPRESS = {
  type: "mongo",
  modelName: "core_settings",
  data: {
    _id: generateRandomMongoId(),
    entityType: "business",
    domain: "game.smoking",
    entityId: BUSINESS_PLANET_EXPRESS.data.business_account_id,
    settings: {
      isEnabled: true,
    },
  },
} as IDatabaseItem;
