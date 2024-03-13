import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import {
  BUSINESS_ACCOUNT_1,
  BUSINESS_ACCOUNT_4,
  BUSINESS_ACCOUNT_2,
  BUSINESS_ACCOUNT_5,
  BUSINESS_ACCOUNT_6,
  BUSINESS_ACCOUNT_3,
  BUSINESS_ACCOUNT_GHI_8,
  BUSINESS_ACCOUNT_GDent_9,
  BUSINESS_ACCOUNT_10_GHI_REWARDS,
  BUSINESS_ACCOUNT_11_MPP,
  BUSINESS_ACCOUNT_12_WELLBEING_ELIGIBILITY,
} from "../postgres/business";
import * as user from './users';

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

export const USER_ONBOARDING_5 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_5.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
    businessName: "Justice League",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_6 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_6.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
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
    userId: user.USER_7.data.userId,
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
    userId: user.USER_8.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
    businessName: "Justice League",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_9 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_9.data.userId,
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
    userId: user.USER_12.data.userId,
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
    userId: user.USER_13.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
    businessName: "Justice League",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_14 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_14.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
    businessName: "Justice League",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_15 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_15.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
    businessName: "Justice League",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_16 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_16.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
    businessName: "Justice League",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_17 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_17.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
    businessName: "Justice League",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_18 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_18.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
    businessName: "Justice League",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_19 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_19.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
    businessName: "Justice League",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_20 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_20.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
    businessName: "Justice League",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_21 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_21.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
    businessName: "Justice League",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_22 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_22.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
    businessName: "Justice League",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_23 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_23.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
    businessName: "Justice League",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_24 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_24.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
    businessName: "Justice League",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_25 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_25.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
    businessName: "Justice League",
    performedSteps: {
      newYumojiBuilder: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_27 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_27.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
    businessName: "Justice League",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_29 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_29.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
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

export const USER_ONBOARDING_32 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_32.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
    businessName: "Justice League",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_33 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_33.data.userId,
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

export const USER_ONBOARDING_35 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_35.data.userId,
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

export const USER_ONBOARDING_36 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_36.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_4.data.business_account_id,
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

export const USER_ONBOARDING_38 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_38.data.userId,
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

export const USER_ONBOARDING_39 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_39.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_40 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_40.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      newYumojiBuilder: true,
    }
  },
} as IDatabaseItem;

export const USER_ONBOARDING_41 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_41.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_42 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_42.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_43 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_43.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_44 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_44.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_45 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_45.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_46 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_46.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      yuScreenOnboarding: true,
    },
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

export const USER_ONBOARDING_ALPHA = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_ALPHA.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
    businessName: "Justice League",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
    },
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

export const USER_ONBOARDING_PLI_6 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_PLI_6.data.userId,
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

export const USER_ONBOARDING_PLI_7 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_PLI_7.data.userId,
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
      yuScreenOnboarding: true,
    },
    createdAt: moment().subtract(61, "d").toISOString(),
    updatedAt: moment().toISOString(),
    inviteDate: moment().subtract(61, "d").toISOString(),
  },
} as IDatabaseItem;

export const USER_ONBOARDING_PLI_9 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_PLI_9.data.userId,
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
      yuScreenOnboarding: true,
    },
    createdAt: moment().subtract(61, "d").toISOString(),
    updatedAt: moment().toISOString(),
    inviteDate: moment().subtract(61, "d").toISOString(),
  },
} as IDatabaseItem;

export const USER_ONBOARDING_PLI_10 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_PLI_10.data.userId,
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
      yuScreenOnboarding: true,
    },
    createdAt: moment().subtract(61, "d").toISOString(),
    updatedAt: moment().toISOString(),
    inviteDate: moment().subtract(61, "d").toISOString(),
  },
} as IDatabaseItem;

export const USER_ONBOARDING_51 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_51.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

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

export const USER_ONBOARDING_FIIT = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_FIIT.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
    businessName: "Dunder Mifflin",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      yuScreenOnboarding: true
    }
  }
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

export const USER_ONBOARDING_47 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_47.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_48 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_48.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_49 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_49.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_50 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_50.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_52 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_52.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_53 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_53.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_54 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_54.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_55 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_55.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_56 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_56.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_57 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_57.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_58 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_58.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_60 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_60.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_61 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_61.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_63 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_63.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_64 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_64.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_65 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_65.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_66 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_66.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_67 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_67.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_68 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_68.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_69 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_69.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_70 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_70.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_71 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_71.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_72 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_72.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_73 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_73.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_74 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_74.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_75 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_75.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_76 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_76.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_77 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_77.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_78 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_78.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_79 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_79.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_80 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_80.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_81 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_81.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_83 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_83.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_84 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_84.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_MEDITOPIA_1 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_MEDITOPIA_1.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_MEDITOPIA_2 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_MEDITOPIA_2.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_MEDITOPIA_3 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_MEDITOPIA_3.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
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

export const USER_ONBOARDING_PLI_5 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_PLI_5.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_86 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_86.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;


export const USER_ONBOARDING_LEAVER = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_LEAVER.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_3.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;



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

export const USER_ONBOARDING_89 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_89.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_3.data.business_account_id,
    businessName: "Pawnee Council.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_90 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_90.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_91 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_91.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_92 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_92.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_93 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_93.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
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

export const USER_ONBOARDING_95 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_95.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_96 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_96.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_97 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_97.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_98 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_98.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_99 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_99.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_100 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_100.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_101 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_101.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_102 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_102.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_103 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_103.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_104 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_104.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_105 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_105.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_106 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_106.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_107 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_107.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_GDent_9.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
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

export const USER_ONBOARDING_109 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_109.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    firstAppOpen: true,
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      yuScreenOnboarding: true,
      passiveCycling: true
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_110 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_110.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    firstAppOpen: true,
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      passiveCycling: true
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_111 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_111.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
      yuScreenOnboarding: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_112 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_112.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
      yuScreenOnboarding: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_113 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_113.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
      yuScreenOnboarding: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_114 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_114.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
      yuScreenOnboarding: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_115 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_115.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
      yuScreenOnboarding: true,
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

export const USER_ONBOARDING_122 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_122.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    firstAppOpen: true,
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      passiveCycling: true
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

export const USER_ONBOARDING_125 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_125.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_4.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
      yuScreenOnboarding: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_126 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_126.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_6.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    firstAppOpen: true,
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
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

export const USER_ONBOARDING_132 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_132.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
    businessName: "Justice League",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
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
    }
  }
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
