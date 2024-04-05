import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_3, BUSINESS_ACCOUNT_11_MPP } from "../postgres/business";
import * as user from "./users";

const type = "mongo";
const modelName = "user_onboardings";

export const USER_ONBOARDING_FUTURE_PRODUCT = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_FUTURE_PRODUCT.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_3.data.business_account_id,
        businessName: "Pawnee Council.",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
            firstAppOpen: true,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_123 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_123.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_11_MPP.data.business_account_id,
        businessName: "Bonus Onboarding Ltd.",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
            firstAppOpen: true,
            yuScreenOnboarding: true,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_124 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_124.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_11_MPP.data.business_account_id,
        businessName: "Bonus Onboarding Ltd.",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
            firstAppOpen: true,
            yuScreenOnboarding: true,
        },
    },
} as IDatabaseItem;
