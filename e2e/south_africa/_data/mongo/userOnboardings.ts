import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { BUSINESS_ACCOUNT_SA_1 } from "../postgres/business";
import * as user from "./users";

const type = "mongo";
const modelName = "user_onboardings";

export const USER_ONBOARDING_SA_1 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_SA_1.data.userId,
    signupComplete: false,
    firstAppOpen: false,
    companyLeaderboardAccepted: true,
    companyLeaderboardCurrentConsent: false,
    additionalLeaderboards: false,
    archived: false,
    businessAccountId: BUSINESS_ACCOUNT_SA_1.data.business_account_id,
    businessName: "Justice League SA",
    performedSteps: {
      newYumojiBuilder: true,
      yuScreenOnboarding: false,
      passiveCycling: true,
    },
    createdAt: moment().subtract(61, "d").toISOString(),
    updatedAt: moment().toISOString(),
    inviteDate: moment().subtract(61, "d").toISOString(),
  },
} as IDatabaseItem;

export const USER_ONBOARDING_SA_2 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_SA_2.data.userId,
    signupComplete: false,
    firstAppOpen: false,
    companyLeaderboardAccepted: true,
    companyLeaderboardCurrentConsent: false,
    additionalLeaderboards: false,
    archived: false,
    businessAccountId: BUSINESS_ACCOUNT_SA_1.data.business_account_id,
    businessName: "Justice League SA",
    performedSteps: {
      newYumojiBuilder: true,
      yuScreenOnboarding: false,
      passiveCycling: true,
    },
    createdAt: moment().subtract(61, "d").toISOString(),
    updatedAt: moment().toISOString(),
    inviteDate: moment().subtract(61, "d").toISOString(),
  },
} as IDatabaseItem;

export const USER_ONBOARDING_SA_3 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_SA_3.data.userId,
    signupComplete: true,
    firstAppOpen: true,
    companyLeaderboardAccepted: true,
    companyLeaderboardCurrentConsent: false,
    additionalLeaderboards: false,
    archived: false,
    businessAccountId: BUSINESS_ACCOUNT_SA_1.data.business_account_id,
    businessName: "Justice League SA",
    performedSteps: {
      newYumojiBuilder: true,
      yuScreenOnboarding: true,
      passiveCycling: true,
    },
    createdAt: moment().subtract(61, "d").toISOString(),
    updatedAt: moment().toISOString(),
    inviteDate: moment().subtract(61, "d").toISOString(),
  },
} as IDatabaseItem;
