import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import * as user from "./users";
import {
    BUSINESS_ACCOUNT_10_GHI_REWARDS,
    BUSINESS_ACCOUNT_12_WELLBEING_ELIGIBILITY,
    BUSINESS_ACCOUNT_GHI_8,
    BUSINESS_ACCOUNT_13_GHI_REWARDS,
} from "../postgres/business";

const type = "mongo";
const modelName = "user_onboardings";


export const USER_ONBOARDING_130 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_130.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        businessName: "Bonus Onboarding Ltd.",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
            firstAppOpen: true,
            yuScreenOnboarding: true,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_131 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_131.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        businessName: "Bonus Onboarding Ltd.",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
            firstAppOpen: true,
            yuScreenOnboarding: true,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_133 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_133.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        businessName: "Bonus Onboarding Ltd.",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
            firstAppOpen: true,
            yuScreenOnboarding: true,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_134 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_134.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        businessName: "Bonus Onboarding Ltd.",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
            firstAppOpen: true,
            yuScreenOnboarding: true,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_135 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_135.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        businessName: "Bonus Onboarding Ltd.",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
            firstAppOpen: true,
            yuScreenOnboarding: true,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_136 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_136.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        businessName: "Bonus Onboarding Ltd.",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
            firstAppOpen: true,
            yuScreenOnboarding: true,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_137 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_137.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_13_GHI_REWARDS.data.business_account_id,
        businessName: "Bonus Onboarding Ltd.",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
            firstAppOpen: true,
            yuScreenOnboarding: true,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_139 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_139.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_10_GHI_REWARDS.data.business_account_id,
        businessName: "Bonus Onboarding Ltd.",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
            firstAppOpen: true,
            yuScreenOnboarding: true,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_140 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_140.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_13_GHI_REWARDS.data.business_account_id,
        businessName: "Bonus Onboarding Ltd.",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
            firstAppOpen: true,
            yuScreenOnboarding: true,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_GH_REMOVED = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_GH_REMOVED.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_GHI_8.data.business_account_id,
        businessName: BUSINESS_ACCOUNT_GHI_8.data.business_account_name,
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
            firstAppOpen: true,
            yuScreenOnboarding: true,
        },
    },
} as IDatabaseItem;
