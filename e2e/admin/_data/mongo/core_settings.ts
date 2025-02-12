import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import {
  BUSINESS_ACCOUNT_4,
  BUSINESS_ACCOUNT_5,
  BUSINESS_ACCOUNT_6,
  BUSINESS_ACCOUNT_1,
} from "../postgres/business";

const MODEL_DEFAULTS: Pick<IDatabaseItem, "modelName" | "type"> = {
  type: "mongo",
  modelName: "core_settings",
};

export const BUSINESS_6_INTERCOM_SETTINGS = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    domain: "analytics.intercom",
    entityId: BUSINESS_ACCOUNT_6.data.business_account_id,
    entityType: "business",
    settings: {
      userSupportLevel: "basic",
    },
  },
} as IDatabaseItem;

export const BUSINESS_4_REFERRALS_SETTINGS = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    domain: "account.referrals",
    entityType: "business",
    entityId: BUSINESS_ACCOUNT_4.data.business_account_id,
    settings: {
      rewardForSenderOnAccountSignup: 2000,
      isEnabled: true,
    },
  },
} as IDatabaseItem;

export const BUSINESS_5_GAME_ONBOARDING_SETTINGS = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    domain: "game.onboarding",
    entityType: "business",
    entityId: BUSINESS_ACCOUNT_5.data.business_account_id,
    settings: {
      rewardForReceiverAppOnboarding: 420,
    },
  },
} as IDatabaseItem;

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
