import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import { DEFAULT_TOGGLES } from "./_templates";

const type = "mongo";
const modelName = "usertoggles";

export const CUSTOMER_1_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_1.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features
    }
  },
} as IDatabaseItem;

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
      showSurge: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_FIIT_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_FIIT.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showFiit: true,
      enableFiitInApp: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_BODY_COACH_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_BODY_COACH.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showWorkout: true,
      tempGameEnableExtraChallengesHint:true
    },
  },
} as IDatabaseItem;

export const CUSTOMER_122_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_122.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showBrainGameSudoku: true,
      showFiit: true,
      newChallengeList: true,
    },
  },
} as IDatabaseItem;
