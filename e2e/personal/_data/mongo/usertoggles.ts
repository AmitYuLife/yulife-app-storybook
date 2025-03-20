import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import { DEFAULT_TOGGLES } from "./_templates";

const type = "mongo";
const modelName = "usertoggles";

export const CUSTOMER_34_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_34.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      yuScreenV3: true,
      hasBeneficiariesEnabled: false,
      showCommunityGoals: true,
      showGoals: true,
      useCoreChallengesService: true,
      useActiveChallengesService: true,
      showBrainGameSudoku: true,
      newChallengeList: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_LEAVER_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_LEAVER.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      useNewLeaderboardServices: true,
      showLeaderboardSearch: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_111_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_111.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      showOnboardingPensionModal: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_112_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_112.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      showOnboardingPensionModal: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_113_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_113.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      showOnboardingPensionModal: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_114_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_114.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      showOnboardingPensionModal: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_126_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_126_LEAVER_WELLBEING.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,

      hasCoveaFibActive: true,
      hasBupaDentActive: true,
      showYuScreenWellbeingButton: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_STORE_ACCESS_PERIOD_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_STORE_ACCESS_PERIOD.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_STORE_ACCESS_DENIED_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_STORE_ACCESS_DENIED.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_STORE_ACCESS_NEVER_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_STORE_ACCESS_NEVER.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
    },
  },
} as IDatabaseItem;
