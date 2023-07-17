import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import moment from "moment"
import { BUSINESS_ACCOUNT_USA_1, BUSINESS_ACCOUNT_USA_2 } from "../postgres/business"
import * as user from './users';

const type = "mongo"
const modelName = "user_onboardings"


export const USER_ONBOARDING_USA_1  = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: user.USER_USA_1.data.userId,
        signupComplete: false,
        firstAppOpen: false,
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
        userId: user.USER_USA_2.data.userId,
        signupComplete: false,
        firstAppOpen: false,
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
        userId: user.USER_USA_3.data.userId,
        signupComplete: false,
        firstAppOpen: false,
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
        userId: user.USER_USA_4.data.userId,
        signupComplete: false,
        firstAppOpen: false,
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

export const USER_ONBOARDING_USA_5  = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: user.USER_USA_5.data.userId,
        signupComplete: false,
        firstAppOpen: false,
        companyLeaderboardAccepted: true,
        companyLeaderboardCurrentConsent: false,
        additionalLeaderboards: false,
        archived: false,
        businessAccountId: BUSINESS_ACCOUNT_USA_2.data.business_account_id,
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

export const USER_ONBOARDING_USA_6  = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: user.USER_USA_6.data.userId,
        signupComplete: false,
        firstAppOpen: false,
        companyLeaderboardAccepted: true,
        companyLeaderboardCurrentConsent: false,
        additionalLeaderboards: false,
        archived: false,
        businessAccountId: BUSINESS_ACCOUNT_USA_2.data.business_account_id,
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

export const USER_ONBOARDING_USA_7  = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: user.USER_USA_7.data.userId,
        signupComplete: false,
        firstAppOpen: false,
        companyLeaderboardAccepted: true,
        companyLeaderboardCurrentConsent: false,
        additionalLeaderboards: false,
        archived: false,
        businessAccountId: BUSINESS_ACCOUNT_USA_2.data.business_account_id,
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

export const USER_ONBOARDING_USA_8  = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: user.USER_USA_8.data.userId,
        signupComplete: false,
        firstAppOpen: false,
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

export const USER_ONBOARDING_USA_9  = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: user.USER_USA_9.data.userId,
        signupComplete: false,
        firstAppOpen: false,
        companyLeaderboardAccepted: true,
        companyLeaderboardCurrentConsent: false,
        additionalLeaderboards: false,
        archived: false,
        businessAccountId: BUSINESS_ACCOUNT_USA_2.data.business_account_id,
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

export const USER_ONBOARDING_USA_10  = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: user.USER_USA_10.data.userId,
        signupComplete: false,
        firstAppOpen: false,
        companyLeaderboardAccepted: true,
        companyLeaderboardCurrentConsent: false,
        additionalLeaderboards: false,
        archived: false,
        businessAccountId: BUSINESS_ACCOUNT_USA_2.data.business_account_id,
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
