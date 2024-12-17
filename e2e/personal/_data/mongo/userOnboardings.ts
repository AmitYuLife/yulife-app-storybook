import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import {
  BUSINESS_ACCOUNT_1,
  BUSINESS_ACCOUNT_2,
  BUSINESS_ACCOUNT_3,
  BUSINESS_ACCOUNT_6
} from "../postgres/business";
import * as user from './users';

const type = "mongo";
const modelName = "user_onboardings";

export const USER_ONBOARDING_34 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_34.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
    businessName: "Justice League",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_LEAVER = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_LEAVER.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_3.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_111 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_111.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
      yuScreenOnboarding: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_112 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_112.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
      yuScreenOnboarding: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_113 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_113.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
      yuScreenOnboarding: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_114 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_114.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
      yuScreenOnboarding: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_126 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_126.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_6.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    firstAppOpen: true,
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      yuScreenOnboarding: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_STORE_ACCESS_PERIOD = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_STORE_ACCESS_PERIOD.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_3.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_STORE_ACCESS_DENIED = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_STORE_ACCESS_DENIED.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_6.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;