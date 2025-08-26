import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as business from "../postgres/business";
import * as customer from "../postgres/customers";

const type = "mongo" as const;
const modelName = "user_onboardings" as const;

const DEFAULT_DATA = {
  additionalLeaderboards: false,
  archived: false,
  companyLeaderboardAccepted: true,
  companyLeaderboardCurrentConsent: false,
  companySudokuLeaderboardAccepted: false,
  earnRate: 5,
  firstAppOpen: true,
  inviteDate: new Date("2025-06-27T09:54:17.000Z"),
  isAnonymised: false,
  signupComplete: true,
  wearablesConnected: [],
  signupCompleteDate: new Date("2025-06-27T09:55:22.099Z"),
  firstAppOpenDate: new Date("2025-04-27T09:55:26.628Z"),
  performedSteps: {
    newYumojiBuilder: true,
    passiveCycling: true,
    yuScreenOnboarding: true,
  },
};

export const USER_ONBOARDING_PREVENTION_PASS_01: IDatabaseItem = {
  type,
  modelName,
  data: {
    ...DEFAULT_DATA,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_PREVENTION_PASS_01.data.userId,
    businessAccountId: business.BUSINESS_PREVENTION_PASS.data.businessAccountId,
    businessName: business.BUSINESS_PREVENTION_PASS.data.businessAccountName,
  },
};

export const USER_ONBOARDING_PREVENTION_PASS_02: IDatabaseItem = {
  type,
  modelName,
  data: {
    ...DEFAULT_DATA,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_PREVENTION_PASS_02.data.customerId,
    businessAccountId: business.BUSINESS_PREVENTION_PASS.data.businessAccountId,
    businessName: business.BUSINESS_PREVENTION_PASS.data.businessAccountName,
  },
};

export const USER_ONBOARDING_WELLBEING_PASS_01: IDatabaseItem = {
  type,
  modelName,
  data: {
    ...DEFAULT_DATA,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_WELLBEING_PASS_01.data.customerId,
    businessAccountId: business.BUSINESS_WELLBEING_PASS.data.businessAccountId,
    businessName: business.BUSINESS_WELLBEING_PASS.data.businessAccountName,
  },
};

export const USER_ONBOARDING_WELLBEING_PASS_02: IDatabaseItem = {
  type,
  modelName,
  data: {
    ...DEFAULT_DATA,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_WELLBEING_PASS_02.data.customerId,
    businessAccountId: business.BUSINESS_WELLBEING_PASS.data.businessAccountId,
    businessName: business.BUSINESS_WELLBEING_PASS.data.businessAccountName,
  },
};
