import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import moment from "moment"
import { BUSINESS_ACCOUNT_4 } from "../postgres/business"
import { USER_35, USER_37 } from "./users"

const type = "mongo"
const modelName = "user_onboardings"


export const USER_ONBOARDING_35 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_35.data.userId,
        signupComplete: false,
        firstAppOpen: false,
        companyLeaderboardAccepted: true,
        companyLeaderboardCurrentConsent: false,
        additionalLeaderboards: false,
        archived: false,
        businessAccountId: BUSINESS_ACCOUNT_4.data.business_account_id,
        businessName: "Justice League",
        createdAt: moment().subtract(7, "d").toISOString(),
        updatedAt: moment().toISOString(),
        inviteDate: moment().subtract(7, "d").toISOString()
    }
} as IDatabaseItem

export const USER_ONBOARDING_37 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_37.data.userId,
        signupComplete: false,
        firstAppOpen: false,
        companyLeaderboardAccepted: true,
        companyLeaderboardCurrentConsent: false,
        additionalLeaderboards: false,
        archived: false,
        businessAccountId: BUSINESS_ACCOUNT_4.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            yuScreenChest: true,
            personalLifeIntro: true,
        },
        createdAt: moment().subtract(7, "d").toISOString(),
        updatedAt: moment().toISOString(),
        inviteDate: moment().subtract(7, "d").toISOString()
    }
} as IDatabaseItem