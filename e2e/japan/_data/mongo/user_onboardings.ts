import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import moment from "moment"
import { BUSINESS_ACCOUNT_1 } from "../postgres/business"
import * as user from './users';

const type = "mongo"
const modelName = "user_onboardings"

export const USER_ONBOARDING_1  = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: user.USER_1.data.userId,
        signupComplete: false,
        firstAppOpen: false,
        companyLeaderboardAccepted: true,
        companyLeaderboardCurrentConsent: false,
        additionalLeaderboards: false,
        archived: false,
        businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
        businessName: "Justice League Japan",
        performedSteps: {
            newYumojiBuilder: true,
            yuScreenOnboarding: false,
            passiveCycling: true,
        },
        createdAt: moment().subtract(61, "d").toISOString(),
        updatedAt: moment().toISOString(),
        inviteDate: moment().subtract(61, "d").toISOString()
    }
} as IDatabaseItem

export const USER_ONBOARDING_2 = {
    type,
    modelName,
    data: {
      _id: generateRandomMongoId(),
      userId: user.USER_2.data.userId,
      businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
      businessName: BUSINESS_ACCOUNT_1.data.business_account_name,
      performedSteps: {
        personalLifeIntro: true,
        newYumojiBuilder: true,
        firstAppOpen: true,
      },
    },
  } as IDatabaseItem;