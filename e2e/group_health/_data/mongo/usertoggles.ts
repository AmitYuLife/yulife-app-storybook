import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import { allTogglesTrue, DEFAULT_TOGGLES } from "./_templates";

const type = "mongo";
const modelName = "usertoggles";

export const CUSTOMER_GHI_PRODUCT_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_GHI.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showFiit: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_116_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_116_GHI_REWARDS.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      enableProductGoals: true,
      useHalfModalsForQuestMap: true,
      showQuestMapNotificationIcons: true,
      showGoalProductRewardMilestones: true,
      useStreakDetails: true,
      showReferrals: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_121_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_121_GHI_REWARDS.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      enableProductGoals: true,
      useHalfModalsForQuestMap: true,
      showQuestMapNotificationIcons: true,
      showGoalProductRewardMilestones: true,
      useStreakDetails: true,
      showReferrals: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_127_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_127_GHI_REWARDS.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      enableProductGoals: true,
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
      showQuestMapNotificationIcons: true,
      showGoalProductRewardMilestones: true,
      useStreakDetails: true,
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
      showQuestMapNotificationIcons: true,
      showGoalProductRewardMilestones: true,
      useStreakDetails: true,
      showReferrals: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_141_STARTED_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_141.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      showFiit: true,
      tempEnableQuestMapOnboarding: true,
      enableProductGoals: true,
      useHalfModalsForQuestMap: true,
      showQuestMapNotificationIcons: true,
      showReferrals: true,
      showGoalProductRewardMilestones: true,
      useStreakDetails: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_142_STARTED_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_142.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      showFiit: true,
      tempEnableQuestMapOnboarding: true,
      enableProductGoals: true,
      useHalfModalsForQuestMap: true,
      showQuestMapNotificationIcons: true,
      showReferrals: true,
      showGoalProductRewardMilestones: true,
      useStreakDetails: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_143_STARTED_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_143.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      showFiit: true,
      tempEnableQuestMapOnboarding: true,
      enableProductGoals: true,
      useHalfModalsForQuestMap: true,
      showQuestMapNotificationIcons: true,
      showReferrals: true,
      showGoalProductRewardMilestones: true,
      useStreakDetails: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_144_STARTED_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_144.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      showFiit: true,
      tempEnableQuestMapOnboarding: true,
      enableProductGoals: true,
      useHalfModalsForQuestMap: true,
      showQuestMapNotificationIcons: true,
      showReferrals: true,
      showGoalProductRewardMilestones: true,
      useStreakDetails: true,
    },
  },
} as IDatabaseItem;
