import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import {} from "../postgres/business";
import * as user from "./users";
import { BUSINESS_ACCOUNT_3, BUSINESS_ACCOUNT_2, BUSINESS_ACCOUNT_4 } from "surveys/_data";

const type = "mongo";
const modelName = "user_onboardings";

export const USER_ONBOARDING_1 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_1.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    firstAppOpen: true,
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_2 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_2.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_3 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_3.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_3.data.business_account_id,
    businessName: "Pawnee Council.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_5 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_5.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_4.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
      yuScreenOnboarding: true,
    },
  },
} as IDatabaseItem;
