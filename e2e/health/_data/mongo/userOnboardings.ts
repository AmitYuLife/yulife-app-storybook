import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_PLANET_EXPRESS} from "../postgres/business";
import * as user from './users';

const type = "mongo";
const modelName = "user_onboardings";

export const USER_ONBOARDING_FRY = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_FRY.data.userId,
    businessAccountId: BUSINESS_PLANET_EXPRESS.data.business_account_id,
    businessName: BUSINESS_PLANET_EXPRESS.data.business_account_name,
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_LEELA = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_LEELA.data.userId,
    businessAccountId: BUSINESS_PLANET_EXPRESS.data.business_account_id,
    businessName: BUSINESS_PLANET_EXPRESS.data.business_account_name,
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
      yuScreenOnboarding: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_BENDER = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_BENDER.data.userId,
    businessAccountId: BUSINESS_PLANET_EXPRESS.data.business_account_id,
    businessName: BUSINESS_PLANET_EXPRESS.data.business_account_name,
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_ZOIDBERG = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_ZOIDBERG.data.userId,
    businessAccountId: BUSINESS_PLANET_EXPRESS.data.business_account_id,
    businessName: BUSINESS_PLANET_EXPRESS.data.business_account_name,
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_ZAPP = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_ZAPP.data.userId,
    businessAccountId: BUSINESS_PLANET_EXPRESS.data.business_account_id,
    businessName: BUSINESS_PLANET_EXPRESS.data.business_account_name,
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;