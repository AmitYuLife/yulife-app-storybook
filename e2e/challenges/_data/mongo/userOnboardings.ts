import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import {
  BUSINESS_ACCOUNT_1,
  BUSINESS_ACCOUNT_2,
  BUSINESS_ACCOUNT_4,
  BUSINESS_ACCOUNT_5,
} from "../postgres/business";
import * as user from './users';
import moment from "moment";

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


export const USER_ONBOARDING_2 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_2.data.userId,
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

export const USER_ONBOARDING_BODY_COACH = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: user.USER_BODY_COACH.data.userId,
    businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
    businessName: "Dunder Mifflin",
    performedSteps: {
      personalLifeIntro: true,
      newYumojiBuilder: true,
      yuScreenOnboarding: true
    }
  }
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
