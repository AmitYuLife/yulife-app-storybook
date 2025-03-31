import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { BUSINESS_ACCOUNT_USA_1 } from "../postgres/business";
import * as user from "./users";

const type = "mongo";
const modelName = "user_onboardings";

export const USER_ONBOARDING_USA_1 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_USA_1.data.userId,
    signupComplete: false,
    firstAppOpen: false,
    companyLeaderboardAccepted: true,
    companyLeaderboardCurrentConsent: false,
    additionalLeaderboards: false,
    archived: false,
    businessAccountId: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
    businessName: "YU LIFE USA LTD",
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
