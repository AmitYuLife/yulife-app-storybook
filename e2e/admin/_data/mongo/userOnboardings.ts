import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_1, BUSINESS_ACCOUNT_2, BUSINESS_ACCOUNT_4, BUSINESS_ACCOUNT_5, BUSINESS_ACCOUNT_6 } from "../postgres/business";
import * as users from './users';
import moment from "moment";

const type = "mongo";
const modelName = "user_onboardings";

export const USER_ONBOARDING_1 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_1.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            newYumojiBuilder: false,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_2 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_2.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_3 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_3.data.userId,
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
            newYumojiBuilder: true,
        },
        createdAt: moment().subtract(7, "d").toISOString(),
        updatedAt: moment().toISOString(),
        inviteDate: moment().subtract(7, "d").toISOString(),
    },
} as IDatabaseItem;

export const USER_ONBOARDING_4 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_4.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_5 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_5.data.userId,
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
        inviteDate: moment().subtract(7, "d").toISOString(),
        performedSteps: {
            newYumojiBuilder: true
        }
    },
} as IDatabaseItem;

export const USER_ONBOARDING_6 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_6.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_4.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
        personalLifeIntro: true,
        newYumojiBuilder: true,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_7 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_7.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_8 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_8.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
        newYumojiBuilder: true,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_9 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_9.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
        personalLifeIntro: true,
        newYumojiBuilder: true,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_10 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_10.data.userId,
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
            newYumojiBuilder: true,
        },
        createdAt: moment().subtract(7, "d").toISOString(),
        updatedAt: moment().toISOString(),
        inviteDate: moment().subtract(7, "d").toISOString(),
    },
} as IDatabaseItem;

export const USER_ONBOARDING_11 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_11.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
        personalLifeIntro: true,
        newYumojiBuilder: true,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_12 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_12.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
        personalLifeIntro: true,
        newYumojiBuilder: true,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_13 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_13.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_6.data.business_account_id,
        businessName: "Low Support Ltd.",
        performedSteps: {
        personalLifeIntro: true,
        newYumojiBuilder: true,
        },
    },
} as IDatabaseItem;