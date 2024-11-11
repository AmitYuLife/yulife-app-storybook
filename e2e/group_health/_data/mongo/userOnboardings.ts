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

export const USER_ONBOARDING_GHI = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_GHI.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_GHI_8.data.business_account_id,
        businessName: "GHI Onboarding Ltd.",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
            firstAppOpen: true,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_116 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_116.data.userId,
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

export const USER_ONBOARDING_121 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_121.data.userId,
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

export const USER_ONBOARDING_127 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_127.data.userId,
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

export const USER_ONBOARDING_141 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_141.data.userId,
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
