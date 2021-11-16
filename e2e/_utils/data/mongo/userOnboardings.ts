import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import moment from "moment"
import { BUSINESS_ACCOUNT_1, BUSINESS_ACCOUNT_4, BUSINESS_ACCOUNT_2 } from "../postgres/business"
import {USER_1, USER_5, USER_19, USER_20, USER_21, USER_35, USER_36, USER_37 } from "./users"

const type = "mongo"
const modelName = "user_onboardings"


export const USER_ONBOARDING_1 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_1.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    }
} as IDatabaseItem

export const USER_ONBOARDING_5 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_5.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    }
} as IDatabaseItem

export const USER_ONBOARDING_19 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_19.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    }
} as IDatabaseItem

export const USER_ONBOARDING_20 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_20.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    }
} as IDatabaseItem

export const USER_ONBOARDING_21 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_21.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    }
} as IDatabaseItem

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

export const USER_ONBOARDING_36 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_36.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_4.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
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
            newYumojiBuilder: true
        },
        createdAt: moment().subtract(7, "d").toISOString(),
        updatedAt: moment().toISOString(),
        inviteDate: moment().subtract(7, "d").toISOString()
    }
} as IDatabaseItem