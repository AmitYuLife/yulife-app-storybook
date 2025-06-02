import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import { allTogglesTrue, DEFAULT_TOGGLES } from "./_templates";

const type = "mongo";
const modelName = "usertoggles";

export const CUSTOMER_130_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_130_GHI_LEAVER.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      enableProductGoals: true,
      showReferrals: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_131_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_131_GHI_REWARDS.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      enableProductGoals: true,
      useHalfModalsForQuestMap: true,
      showReferrals: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_133_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_133_GHI_FUTURE.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      enableProductGoals: true,
      useHalfModalsForQuestMap: true,
      showGoalProductRewardMilestones: true,
      showReferrals: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_134_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_134_GHI_REWARDS.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      enableProductGoals: true,
      useHalfModalsForQuestMap: true,
      showReferrals: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_135_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_135_GHI_FUTURE.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      enableProductGoals: true,
      useHalfModalsForQuestMap: true,
      showGoalProductRewardMilestones: true,
      showReferrals: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_136_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_136_GHI_REWARDS.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      enableProductGoals: true,
      useHalfModalsForQuestMap: true,
      showGoalProductRewardMilestones: true,
      showReferrals: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_137_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_137_GHI_REWARDS.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      enableProductGoals: true,
      useHalfModalsForQuestMap: true,
      showGoalProductRewardMilestones: true,
      showReferrals: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_139_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_139_GHI_REWARDS.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      enableProductGoals: true,
      useHalfModalsForQuestMap: true,
      showGoalProductRewardMilestones: true,
      showReferrals: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_140_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_140_GHI_REWARDS.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      enableProductGoals: true,
      useHalfModalsForQuestMap: true,
      showGoalProductRewardMilestones: true,
      tempQuestMapInterstitialModal: false,
      showReferrals: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_GH_REMOVED_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_GH_REMOVED.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      enableProductGoals: true,
      useHalfModalsForQuestMap: true,
      showGoalProductRewardMilestones: true,
      showReferrals: true,
    },
  },
} as IDatabaseItem;
