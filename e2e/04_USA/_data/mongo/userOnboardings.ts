import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import moment from "moment"
import { BUSINESS_ACCOUNT_USA_1 } from "../postgres/business"
import { CUSTOMER_USA_1, CUSTOMER_USA_2, CUSTOMER_USA_3, CUSTOMER_USA_4 } from "../postgres/customers"

const type = "mongo"
const modelName = "user_onboardings"


export const USER_ONBOARDING_USA_1  = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: CUSTOMER_USA_1.data.customerId,
        signupComplete: true,
        firstAppOpen: true,
        companyLeaderboardAccepted: true,
        companyLeaderboardCurrentConsent: false,
        additionalLeaderboards: false,
        archived: false,
        businessAccountId: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
        businessName: "Justice League USA",
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

export const USER_ONBOARDING_USA_2  = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: CUSTOMER_USA_2.data.customerId,
        signupComplete: true,
        firstAppOpen: true,
        companyLeaderboardAccepted: true,
        companyLeaderboardCurrentConsent: false,
        additionalLeaderboards: false,
        archived: false,
        businessAccountId: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
        businessName: "Justice League USA",
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

export const USER_ONBOARDING_USA_3  = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: CUSTOMER_USA_3.data.customerId,
        signupComplete: true,
        firstAppOpen: true,
        companyLeaderboardAccepted: true,
        companyLeaderboardCurrentConsent: false,
        additionalLeaderboards: false,
        archived: false,
        businessAccountId: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
        businessName: "Justice League USA",
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

export const USER_ONBOARDING_USA_4  = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: CUSTOMER_USA_4.data.customerId,
        signupComplete: true,
        firstAppOpen: true,
        companyLeaderboardAccepted: true,
        companyLeaderboardCurrentConsent: false,
        additionalLeaderboards: false,
        archived: false,
        businessAccountId: BUSINESS_ACCOUNT_USA_1.data.business_account_id,
        businessName: "Justice League USA",
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
