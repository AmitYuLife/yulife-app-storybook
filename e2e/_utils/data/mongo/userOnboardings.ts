import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import {
  BUSINESS_ACCOUNT_1,
  BUSINESS_ACCOUNT_4,
  BUSINESS_ACCOUNT_2,
  BUSINESS_ACCOUNT_5,
  BUSINESS_ACCOUNT_6,
  BUSINESS_ACCOUNT_3,
} from "../postgres/business";

import {
  USER_1,
  USER_2,
  USER_3,
  USER_4,
  USER_5,
  USER_6,
  USER_7,
  USER_8,
  USER_9,
  USER_12,
  USER_13,
  USER_14,
  USER_15,
  USER_16,
  USER_17,
  USER_18,
  USER_19,
  USER_20,
  USER_21,
  USER_22,
  USER_23,
  USER_24,
  USER_25,
  USER_27,
  USER_29,
  USER_31,
  USER_32,
  USER_33,
  USER_34,
  USER_35,
  USER_36,
  USER_37,
  USER_38,
  USER_39,
  USER_42,
  USER_43,
  USER_44,
  USER_45,
  USER_46,
  USER_ALPHA,
  USER_PLI_2,
  USER_PLI_6,
  USER_PLI_7,
  USER_PLI_9,
  USER_PLI_10,
  USER_51,
  USER_53,
  USER_DENTAL_1,
  USER_DENTAL_2,
  USER_85,
  USER_FIIT,
  USER_47,
  USER_48,
  USER_50,
  USER_49,
  USER_52,
  USER_54,
  USER_55,
  USER_56,
  USER_57,
  USER_58,
  USER_60,
  USER_61,
  USER_63,
  USER_64,
  USER_65,
  USER_66,
  USER_67,
  USER_69,
  USER_68,
  USER_70,
  USER_71,
  USER_72,
  USER_73,
  USER_74,
  USER_75,
  USER_76,
  USER_77,
  USER_79,
  USER_78,
  USER_80,
  USER_28,
  USER_81,
  USER_83,
  USER_41,
  USER_MEDITOPIA_1,
  USER_MEDITOPIA_2,
  USER_MEDITOPIA_3,
  USER_40,
  USER_PLI_5,
  USER_PLI_3,
  USER_PLI_4,
  USER_LEAVER,
} from "./users";
import { USER_84_LEADERBOARD } from "./user_leaderboards";

const type = "mongo";
const modelName = "user_onboardings";

export const USER_ONBOARDING_1 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: USER_1.data.userId,
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
    userId: USER_3.data.userId,
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
    userId: USER_4.data.userId,
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
    userId: USER_5.data.userId,
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
    userId: USER_6.data.userId,
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
    userId: USER_7.data.userId,
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
    userId: USER_8.data.userId,
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
    userId: USER_9.data.userId,
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
    userId: USER_12.data.userId,
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
    userId: USER_13.data.userId,
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
    userId: USER_14.data.userId,
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
    userId: USER_15.data.userId,
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
    userId: USER_16.data.userId,
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
    userId: USER_17.data.userId,
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
    userId: USER_18.data.userId,
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
    userId: USER_19.data.userId,
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
    userId: USER_20.data.userId,
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
    userId: USER_21.data.userId,
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
    userId: USER_22.data.userId,
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
    userId: USER_23.data.userId,
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
    userId: USER_24.data.userId,
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
    userId: USER_25.data.userId,
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
    userId: USER_27.data.userId,
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
    userId: USER_29.data.userId,
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
    userId: USER_31.data.userId,
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
    userId: USER_32.data.userId,
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
    userId: USER_33.data.userId,
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
    userId: USER_34.data.userId,
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
    inviteDate: moment().subtract(7, "d").toISOString(),
  },
} as IDatabaseItem;

export const USER_ONBOARDING_36 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: USER_36.data.userId,
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
    userId: USER_39.data.userId,
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
    userId: USER_40.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
  },
} as IDatabaseItem;

export const USER_ONBOARDING_41 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: USER_41.data.userId,
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
    userId: USER_42.data.userId,
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
    userId: USER_43.data.userId,
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
    userId: USER_44.data.userId,
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
    userId: USER_45.data.userId,
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
    userId: USER_46.data.userId,
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
    userId: USER_2.data.userId,
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
    userId: USER_ALPHA.data.userId,
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
    userId: USER_PLI_2.data.userId,
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
    userId: USER_PLI_6.data.userId,
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
    userId: USER_PLI_7.data.userId,
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
    userId: USER_PLI_9.data.userId,
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
    userId: USER_PLI_10.data.userId,
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
    userId: USER_51.data.userId,
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
    userId: USER_DENTAL_1.data.userId,
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
    userId: USER_DENTAL_2.data.userId,
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
    userId: USER_FIIT.data.userId,
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
    userId: USER_85.data.userId,
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
    userId: USER_47.data.userId,
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
    userId: USER_48.data.userId,
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
    userId: USER_49.data.userId,
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
    userId: USER_50.data.userId,
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
    userId: USER_52.data.userId,
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
    userId: USER_53.data.userId,
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
    userId: USER_54.data.userId,
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
    userId: USER_55.data.userId,
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
    userId: USER_56.data.userId,
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
    userId: USER_57.data.userId,
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
    userId: USER_58.data.userId,
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
    userId: USER_60.data.userId,
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
    userId: USER_61.data.userId,
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
    userId: USER_63.data.userId,
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
    userId: USER_64.data.userId,
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
    userId: USER_65.data.userId,
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
    userId: USER_66.data.userId,
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
    userId: USER_67.data.userId,
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
    userId: USER_68.data.userId,
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
    userId: USER_69.data.userId,
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
    userId: USER_70.data.userId,
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
    userId: USER_71.data.userId,
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
    userId: USER_72.data.userId,
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
    userId: USER_73.data.userId,
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
    userId: USER_74.data.userId,
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
    userId: USER_75.data.userId,
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
    userId: USER_76.data.userId,
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
    userId: USER_77.data.userId,
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
    userId: USER_78.data.userId,
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
    userId: USER_79.data.userId,
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
    userId: USER_80.data.userId,
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
    userId: USER_81.data.userId,
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
    userId: USER_83.data.userId,
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
    userId: USER_84_LEADERBOARD.data.userId,
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
    userId: USER_MEDITOPIA_1.data.userId,
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
    userId: USER_MEDITOPIA_2.data.userId,
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
    userId: USER_MEDITOPIA_3.data.userId,
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
    userId: USER_PLI_3.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;

export const USER_ONBOARDING_PLI_4 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: USER_PLI_4.data.userId,
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
    userId: USER_PLI_5.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_5.data.business_account_id,
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
    userId: USER_LEAVER.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_3.data.business_account_id,
    businessName: "Bonus Onboarding Ltd.",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      firstAppOpen: true,
    },
  },
} as IDatabaseItem;



