import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_5, BUSINESS_ACCOUNT_GDent_9 } from "../postgres/business";
import * as user from "./users";

const type = "mongo";
const modelName = "user_onboardings";

export const USER_ONBOARDING_CUSTOMER_DENTAL_1 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_DENTAL_1.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
        businessName: "Bonus Onboarding Ltd.",
        performedSteps: {
            yuScreenChest: true,
            personalLifeIntro: true,
            newYumojiBuilder: true,
            personalProductLaunchDental: true,
            personalProductLaunchPLI: true,
            yuScreenGloves: true,
            yuScreenOnboarding: true,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_CUSTOMER_DENTAL_2 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_DENTAL_2.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
        businessName: "Bonus Onboarding Ltd.",
        performedSteps: {
            yuScreenChest: true,
            personalLifeIntro: true,
            newYumojiBuilder: true,
            personalProductLaunchDental: true,
            personalProductLaunchPLI: true,
            yuScreenGloves: true,
            yuScreenOnboarding: true,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_CUSTOMER_DENTAL_85 = {
    type,
    modelName,
    data: {
        userId: user.USER_85.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
        businessName: "Bonus Onboarding Ltd.",
        performedSteps: {
            yuScreenChest: true,
            personalLifeIntro: true,
            newYumojiBuilder: true,
            personalProductLaunchDental: true,
            personalProductLaunchPLI: true,
            yuScreenGloves: true,
            yuScreenOnboarding: true,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_108 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_108.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
        businessName: "Bonus Onboarding Ltd.",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
            firstAppOpen: true,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_CUSTOMER_DENTAL_RENEW = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_DENTAL_RENEW.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
        businessName: "Bonus Onboarding Ltd.",
        performedSteps: {
            yuScreenChest: true,
            personalLifeIntro: true,
            newYumojiBuilder: true,
            personalProductLaunchDental: true,
            personalProductLaunchPLI: true,
            yuScreenGloves: true,
            firstAppOpen: true,
            yuScreenOnboarding: true,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_CUSTOMER_DENTAL_RENEW_2 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_DENTAL_RENEW_2.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
        businessName: "Bonus Onboarding Ltd.",
        performedSteps: {
            yuScreenChest: true,
            personalLifeIntro: true,
            newYumojiBuilder: true,
            personalProductLaunchDental: true,
            personalProductLaunchPLI: true,
            yuScreenGloves: true,
            firstAppOpen: true,
            yuScreenOnboarding: true,
        },
    },
} as IDatabaseItem;
