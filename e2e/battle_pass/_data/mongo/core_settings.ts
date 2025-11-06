import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_2, BUSINESS_THE_BEAR } from "../postgres/business";

const MODEL_DEFAULTS: Pick<IDatabaseItem, "modelName" | "type"> = {
  type: "mongo",
  modelName: "core_settings",
};

export const BUSINESS_THE_BEAR_SETTINGS = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    domain: "game.battlePass.donations",
    entityId: BUSINESS_THE_BEAR.data.business_account_id,
    entityType: "business",
    settings: {
      isEnabled: true,
    },
  },
} as IDatabaseItem;

export const BA2_GAME_BATTLEPASS_DONATIONS_SETTINGS = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    domain: "game.battlePass.donations",
    entityId: BUSINESS_ACCOUNT_2.data.business_account_id,
    entityType: "business",
    settings: {
      isEnabled: false,
    },
  },
} as IDatabaseItem;

export const BUSINESS_THE_BEAR_COUPONS_SETTINGS = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    domain: "temp",
    entityId: BUSINESS_THE_BEAR.data.business_account_id,
    entityType: "everyone",
    settings: {
      gameShowCouponPrizeTemplates: true,
    },
  },
} as IDatabaseItem;

export const BUSINESS_THE_BEAR_SURGE_SETTINGS = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    domain: "game.surge",
    entityType: "everyone",
    entityId: BUSINESS_THE_BEAR.data.business_account_id,
    settings: {
      isEnabled: true,
    },
  },
} as IDatabaseItem;
