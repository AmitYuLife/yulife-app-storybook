import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { BUSINESS_ACCOUNT_4, BUSINESS_ACCOUNT_5 } from "../postgres/business";
import * as user from "./users";

const type = "mongo";
const modelName = "user_onboardings";

export const USER_ONBOARDING_37 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_37.data.userId,
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

export const USER_ONBOARDING_PLI_2 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_PLI_2.data.userId,
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
            personalProductLaunchDental: true,
            personalProductLaunchPLI: true,
            yuScreenGloves: true,
        },
        createdAt: moment().subtract(61, "d").toISOString(),
        updatedAt: moment().toISOString(),
        inviteDate: moment().subtract(61, "d").toISOString(),
    },
} as IDatabaseItem;

export const USER_ONBOARDING_PLI_3 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_PLI_3.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
        businessName: "Bonus Onboarding Ltd.",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
            firstAppOpen: true,
        },
    },
} as IDatabaseItem;
