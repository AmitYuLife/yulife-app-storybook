import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_4, BUSINESS_ACCOUNT_6, BUSINESS_ACCOUNT_7 } from "../postgres/business";
import { CUSTOMER_138, CUSTOMER_141 } from "../postgres/customers";

const MODEL_DEFAULTS: Pick<IDatabaseItem, "modelName" | "type"> = {
  type: "mongo",
  modelName: "core_settings",
};

export const BUSINESS_4_REFERRAL_SETTINGS = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    entityId: BUSINESS_ACCOUNT_4.data.business_account_id,
    entityType: "business",
    domain: "account.referrals",
    settings: {
      isEnabled: true,
    },
  },
} as IDatabaseItem;

export const BUSINESS_4_YUSCREEN_SETTINGS = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    domain: "game.yuScreen",
    entityId: BUSINESS_ACCOUNT_4.data.business_account_id,
    entityType: "business",
    settings: {
      _yuScreenLayout: [
        {
          id: "yu_screen_maximise_yu",
          updateOnView: true,
        },
      ],
      maximiseYu: {
        isEnabled: true,
        displayBadge: true,
        displayProgress: true,
        displayScrollItems: true,
      },
    },
  },
} as IDatabaseItem;

export const BUSINESS_6_REFERRAL_SETTINGS = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    entityId: BUSINESS_ACCOUNT_6.data.business_account_id,
    entityType: "business",
    domain: "account.referrals",
    settings: {
      isEnabled: true,
    },
  },
} as IDatabaseItem;

export const BUSINESS_6_PENSION_SETTINGS = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    domain: "pension",
    entityId: BUSINESS_ACCOUNT_6.data.business_account_id,
    entityType: "business",
    settings: {
      enabledProviders: {
        smartPension: true,
      },
    },
  },
} as IDatabaseItem;

export const CUSTOMER_138_SETTINGS = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    name: "gameShowAchievements",
    domain: "temp",
    entityType: "user",
    entityId: CUSTOMER_138.data.customerId,
    settings: {
      gameShowAchievements: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_141_SETTINGS = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    name: "gameShowAchievements",
    domain: "temp",
    entityType: "user",
    entityId: CUSTOMER_141.data.customerId,
    settings: {
      gameShowAchievements: true,
    },
  },
} as IDatabaseItem;
