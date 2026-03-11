import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_4, BUSINESS_ACCOUNT_5 } from "../postgres/business";
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
    domain: "game.goals_for_global",
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

export const BUSINESS_5_ENGAGEMENT_SURVEYS_SETTINGS = {
  ...MODEL_DEFAULTS,
  data: {
    _id: generateRandomMongoId(),
    domain: "employerTooling.engagementSurveys",
    entityId: BUSINESS_ACCOUNT_5.business.data.businessAccountId,
    entityType: "business",
    settings: {
      engagementSurveysEnabled: true,
    },
  },
} as IDatabaseItem;

export const BUSINESS_4_SMOKING_SETTINGS = {
  type: "mongo",
  modelName: "core_settings",
  data: {
    _id: generateRandomMongoId(),
    entityType: "business",
    domain: "game.smoking",
    entityId: BUSINESS_ACCOUNT_4.data.business_account_id,
    settings: {
      isEnabled: true,
    },
  },
} as IDatabaseItem;
