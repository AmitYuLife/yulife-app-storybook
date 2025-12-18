import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_4 } from "../postgres/business";
import { BUSINESS_ACCOUNT_3, CUSTOMER_3 } from "engagement_surveys/_data";

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
      isQuestionnaireEnabled: true,
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

export const BUSINESS_3_INTERCOM_SETTINGS = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    domain: "support",
    entityId: BUSINESS_ACCOUNT_3.data.business_account_id,
    entityType: "business",
    settings: {
      userSupportLevel: "enhanced",
    },
  },
} as IDatabaseItem;

export const BUSINESS_4_PATHWAYS_STREAKS_SETTINGS = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    domain: "temp",
    entityId: BUSINESS_ACCOUNT_4.data.business_account_id,
    entityType: "everyone",
    settings: {
      gameEnablePathwaysStreaks: true,
    },
  },
} as IDatabaseItem;
