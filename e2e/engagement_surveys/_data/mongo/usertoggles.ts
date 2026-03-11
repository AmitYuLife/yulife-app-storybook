import * as customer from "../postgres/customers";
import { allTogglesTrue, DEFAULT_TOGGLES } from "./_templates";
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import {
  BUSINESS_ACCOUNT_1,
  BUSINESS_ACCOUNT_2,
  BUSINESS_ACCOUNT_3,
  BUSINESS_ACCOUNT_4,
  BUSINESS_ACCOUNT_5,
} from "../postgres/business";

const type = "mongo";
const modelName = "usertoggles";

export const BA2_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
  },
} as IDatabaseItem;

export const CUSTOMER_1_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_1.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,

      hasCoveaFibActive: true,
      hasBupaDentActive: true,
      showRewardsProducts: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_2_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_2.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showDuels: true,
      passiveCyclingEnabled: true,
      useNewLeaderboardServices: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_3_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_3.data.customerId,
    features: {
      ...allTogglesTrue.data.features,
      useNewLeaderboardServices: true,
      showNotificationCentre: true,
      showCommunityGoals: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_5_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_5.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      hasSmartPensionActive: true,
      enableProductGoals: true,
      useHalfModalsForQuestMap: true,
      showGoalProductRewardMilestones: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_7_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_7.customer.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showPermissionSettings: true,
      tempGameEnableReleaseYuHealthV4: true,
    },
  },
} as IDatabaseItem;

export const BUSINESS_1_USER_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    businessAccountId: BUSINESS_ACCOUNT_1.data.business_account_id,
    toggleType: "business",
    features: { tempUseCoreJourneyInstances: true },
  },
} as IDatabaseItem;

export const BUSINESS_2_USER_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    businessAccountId: BUSINESS_ACCOUNT_2.data.business_account_id,
    toggleType: "business",
    features: { tempUseCoreJourneyInstances: true },
  },
} as IDatabaseItem;

export const BUSINESS_3_USER_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    businessAccountId: BUSINESS_ACCOUNT_3.data.business_account_id,
    toggleType: "business",
    features: { tempUseCoreJourneyInstances: true },
  },
} as IDatabaseItem;

export const BUSINESS_4_USER_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    businessAccountId: BUSINESS_ACCOUNT_4.data.business_account_id,
    toggleType: "business",
  },
} as IDatabaseItem;

export const CUSTOMER_SURVEY_PROMPT_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_SURVEY_PROMPT.customer.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showNotificationCentre: true,
    },
  },
} as IDatabaseItem;

export const BUSINESS_5_USER_TOGGLES = {
  type: "mongo",
  modelName: "usertoggles",
  data: {
    _id: generateRandomMongoId(),
    businessAccountId: BUSINESS_ACCOUNT_5.business.data.businessAccountId,
    toggleType: "business",
    features: { tempUseCoreJourneyInstances: true },
  },
} as IDatabaseItem;
