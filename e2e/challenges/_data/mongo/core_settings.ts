import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_1, BUSINESS_ACCOUNT_4 } from "../postgres/business";

const MODEL_DEFAULTS: Pick<IDatabaseItem, "modelName" | "type"> = {
  type: "mongo",
  modelName: "core_settings",
};

export const BUSINESS_1_YUSCREEN_SETTINGS = {
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

export const BUSINESS_4_REFERRALS_SETTINGS = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    domain: "account.referrals",
    entityType: "business",
    entityId: BUSINESS_ACCOUNT_4.data.business_account_id,
    settings: {
      isEnabled: true,
    },
  },
} as IDatabaseItem;
