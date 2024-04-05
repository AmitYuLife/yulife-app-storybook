import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import * as user from "./users";
import {
    BUSINESS_ACCOUNT_1,
    BUSINESS_ACCOUNT_10_GHI_REWARDS,
    BUSINESS_ACCOUNT_12_WELLBEING_ELIGIBILITY,
    BUSINESS_ACCOUNT_2,
    BUSINESS_ACCOUNT_4,
    BUSINESS_ACCOUNT_6,
    BUSINESS_ACCOUNT_GHI_8,
    BUSINESS_ACCOUNT_13_GHI_REWARDS,
} from "../postgres/business";

const type = "mongo";
const modelName = "user_onboardings";

export const USER_ONBOARDING_1 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_1.data.userId,
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
        userId: user.USER_3.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_4 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_4.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_31 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_31.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_34 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_34.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
        },
    },
} as IDatabaseItem;

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

export const USER_ONBOARDING_2 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_2.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            newYumojiBuilder: false,
        },
    },
} as IDatabaseItem;

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

export const USER_ONBOARDING_GHI_STARTED = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_GHI_STARTED.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_GHI_8.data.business_account_id,
        businessName: "GHI Onboarding Ltd.",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
            firstAppOpen: true,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_94 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_94.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
        businessName: "Justice League",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
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

export const USER_ONBOARDING_117 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_117.data.userId,
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

export const USER_ONBOARDING_118 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_118.data.userId,
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

export const USER_ONBOARDING_119 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_119.data.userId,
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

export const USER_ONBOARDING_120 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_120.data.userId,
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

export const USER_ONBOARDING_128 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_128.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_12_WELLBEING_ELIGIBILITY.data.business_account_id,
        businessName: "Eligiblity Rewards",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
            firstAppOpen: true,
            yuScreenOnboarding: true,
        },
    },
} as IDatabaseItem;

export const USER_ONBOARDING_129 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_129.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_12_WELLBEING_ELIGIBILITY.data.business_account_id,
        businessName: "Eligiblity Rewards",
        performedSteps: {
            personalLifeIntro: true,
            newYumojiBuilder: true,
            firstAppOpen: true,
            yuScreenOnboarding: true,
        },
    },
} as IDatabaseItem;

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

export const USER_ONBOARDING_138 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        userId: user.USER_138.data.userId,
        businessAccountId: BUSINESS_ACCOUNT_6.data.business_account_id,
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
