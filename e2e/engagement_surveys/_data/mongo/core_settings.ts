import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import {} from "../postgres/business";
import {
  BUSINESS_ACCOUNT_1,
  BUSINESS_ACCOUNT_2,
  BUSINESS_ACCOUNT_3,
  BUSINESS_ACCOUNT_4,
  CUSTOMER_3,
} from "engagement_surveys/_data";

const MODEL_DEFAULTS: Pick<IDatabaseItem, "modelName" | "type"> = {
  type: "mongo",
  modelName: "core_settings",
};

export const BUSINESS_3_SETTINGS = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    domain: "game.healthQuestionnaire",
    entityId: BUSINESS_ACCOUNT_3.data.business_account_id,
    entityType: "business",
    settings: {
      isMoodMonitorEnabled: false,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_3_GAME_GOALS_SETTINGS = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    domain: "game.goals",
    entityId: CUSTOMER_3.data.customerId,
    entityType: "user",
    settings: {
      createOnboardingGoalEvent: true,
    },
  },
} as IDatabaseItem;
