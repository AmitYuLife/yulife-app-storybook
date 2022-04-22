import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import moment from "moment"
import { BUSINESS_ACCOUNT_1, BUSINESS_ACCOUNT_4, BUSINESS_ACCOUNT_2, BUSINESS_ACCOUNT_5 } from "../postgres/business"
import {USER_1, USER_2, USER_3, USER_4, USER_5, USER_6, USER_7, USER_8, USER_9, USER_12, USER_13, USER_14, USER_15, USER_16, USER_17, USER_18, USER_19, USER_20, USER_21, USER_22, USER_23, USER_24, USER_25, USER_27, USER_29, USER_31, USER_32, USER_33, USER_34, USER_35, USER_36, USER_37, USER_38, USER_ALPHA } from "./users"

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

export const USER_ONBOARDING_3 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_3.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    }
} as IDatabaseItem


export const USER_ONBOARDING_4 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_4.data.userId,
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

export const USER_ONBOARDING_6 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_6.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    }
} as IDatabaseItem

export const USER_ONBOARDING_7 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_7.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    }
} as IDatabaseItem

export const USER_ONBOARDING_8 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_8.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    }
} as IDatabaseItem

export const USER_ONBOARDING_9 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_9.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    }
} as IDatabaseItem

export const USER_ONBOARDING_12 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_12.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    }
} as IDatabaseItem

export const USER_ONBOARDING_13 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_13.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    }
} as IDatabaseItem

export const USER_ONBOARDING_14 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_14.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    }
} as IDatabaseItem

export const USER_ONBOARDING_15 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_15.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    }
} as IDatabaseItem

export const USER_ONBOARDING_16 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_16.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    }
} as IDatabaseItem

export const USER_ONBOARDING_17 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_17.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    }
} as IDatabaseItem

export const USER_ONBOARDING_18 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_18.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
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

export const USER_ONBOARDING_22 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_22.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    }
} as IDatabaseItem

export const USER_ONBOARDING_23 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_23.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    }
} as IDatabaseItem

export const USER_ONBOARDING_24 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_24.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    }
} as IDatabaseItem

export const USER_ONBOARDING_25 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_25.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            newYumojiBuilder: true,
        },
    }
} as IDatabaseItem

export const USER_ONBOARDING_27 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_27.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    }
} as IDatabaseItem

export const USER_ONBOARDING_29 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_29.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    }
} as IDatabaseItem

export const USER_ONBOARDING_31 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_31.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    }
} as IDatabaseItem

export const USER_ONBOARDING_32 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_32.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    }
} as IDatabaseItem

export const USER_ONBOARDING_33 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_33.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    }
} as IDatabaseItem

export const USER_ONBOARDING_34 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_34.data.userId,
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

export const USER_ONBOARDING_38 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_38.data.userId,
        signupComplete: false,
        firstAppOpen: false,
        companyLeaderboardAccepted: true,
        companyLeaderboardCurrentConsent: false,
        additionalLeaderboards: false,
        archived: false,
        businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
        businessName: "Bonus Onboarding Ltd.",
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

export const USER_ONBOARDING_2 = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_2.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            newYumojiBuilder: false
        },
    }
} as IDatabaseItem

export const USER_ONBOARDING_ALPHA = {
    type,
    modelName,
    data:{
        _id:generateRandomMongoId(),
        userId: USER_ALPHA.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    }
} as IDatabaseItem