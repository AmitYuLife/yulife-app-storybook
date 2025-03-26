import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import {
  BUSINESS_ACCOUNT_1,
  BUSINESS_ACCOUNT_3,
  BUSINESS_ACCOUNT_4,
  BUSINESS_ACCOUNT_6,
  BUSINESS_ACCOUNT_7,
} from "../postgres/business";
import moment from "moment";

const MODEL_DEFAULTS: Pick<IDatabaseItem, "modelName" | "type"> = {
  type: "mongo",
  modelName: "core_settings",
};

export const BUSINESS_1_SETTINGS = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    domain: "game.yuScreen",
    entityId: BUSINESS_ACCOUNT_1.data.business_account_id,
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

export const BUSINESS_3_SETTINGS = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    domain: "partnerships.rewards",
    entityId: BUSINESS_ACCOUNT_3.data.business_account_id,
    entityType: "business",
    settings: {
      storeEnabled: true,
    },
  },
} as IDatabaseItem;

export const BA3_ACCOUNT_REFERRALS_SETTING = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    domain: "account.referrals",
    entityId: BUSINESS_ACCOUNT_3.data.business_account_id,
    entityType: "business",
    settings: {
      isEnabled: true,
    },
  },
} as IDatabaseItem;

export const BUSINESS_4_SETTINGS = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    domain: "partnerships.rewards",
    entityId: BUSINESS_ACCOUNT_4.data.business_account_id,
    entityType: "business",
    settings: {
      storeEnabled: true,
    },
  },
} as IDatabaseItem;

export const BUSINESS_6_SETTINGS = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    domain: "partnerships.rewards",
    entityId: BUSINESS_ACCOUNT_6.data.business_account_id,
    entityType: "business",
    settings: {
      storeEnabled: false,
      storeAccessExpiresAt: moment().subtract(1, "days").toDate(),
    },
  },
} as IDatabaseItem;

export const CUSTOMER_STORE_ACCESS_NEVER_SETTINGS = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    domain: "partnerships.rewards",
    entityId: BUSINESS_ACCOUNT_7.data.business_account_id,
    entityType: "business",
    settings: {
      storeEnabled: false,
      storeGracePeriodFromDeactivationInDays: 77,
    },
  },
} as IDatabaseItem;
