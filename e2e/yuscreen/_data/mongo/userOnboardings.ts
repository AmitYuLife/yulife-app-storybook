import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import {
  BUSINESS_ACCOUNT_1,
  BUSINESS_ACCOUNT_2,
  BUSINESS_ACCOUNT_4,
  BUSINESS_ACCOUNT_5,
  BUSINESS_ACCOUNT_6,
  BUSINESS_ACCOUNT_GHI_8,
  BUSINESS_ACCOUNT_GDent_9,
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

export const USER_ONBOARDING_MAXIMISE_YU = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_MAXIMISE_YU.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_4.data.business_account_id,
    businessName: BUSINESS_ACCOUNT_4.data.business_account_name,
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
    businessAccountId: BUSINESS_ACCOUNT_4.data.business_account_id,
    businessName: BUSINESS_ACCOUNT_4.data.business_account_name,
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
    businessAccountId: BUSINESS_ACCOUNT_4.data.business_account_id,
    businessName: BUSINESS_ACCOUNT_4.data.business_account_name,
    performedSteps: {
    personalLifeIntro: true,
    newYumojiBuilder: true,
    firstAppOpen: true,
    yuScreenOnboarding: true,
  },
},
} as IDatabaseItem;

