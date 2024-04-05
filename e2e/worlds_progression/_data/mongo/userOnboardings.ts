import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_1, BUSINESS_ACCOUNT_3, BUSINESS_ACCOUNT_5 } from "../postgres/business";
import * as user from './users';

const type = "mongo";
const modelName = "user_onboardings";

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
