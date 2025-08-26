import { features } from "process";
import * as customer from "../postgres/customers";
import { DEFAULT_TOGGLES } from "./_templates";
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

const type = "mongo";
const modelName = "usertoggles";

export const CUSTOMER_FRY_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_FRY.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showYucoinPowerButton: true,
      tempGameTodayYuCoinCheckIns: true,
      showDailySurvey: true,
      showNotificationCentre: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_LEELA_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_LEELA.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showYucoinPowerButton: true,
      tempGameTodayYuCoinCheckIns: true,
      showDailySurvey: true,
      showNotificationCentre: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_BENDER_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_BENDER.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showYucoinPowerButton: true,
      tempGameTodayYuCoinCheckIns: true,
      showDailySurvey: true,
      showNotificationCentre: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_ZOIDBERG_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_ZOIDBERG.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showYucoinPowerButton: true,
      tempGameTodayYuCoinCheckIns: true,
      showDailySurvey: true,
      showNotificationCentre: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_ZAPP_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_ZAPP.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showYucoinPowerButton: true,
      tempGameTodayYuCoinCheckIns: true,
      showDailySurvey: true,
      showNotificationCentre: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_AMY_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_AMY.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showYucoinPowerButton: true,
      tempGameTodayYuCoinCheckIns: true,
      showDailySurvey: true,
      showNotificationCentre: true,
      enableYuScreenV5: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_HERMES_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_HERMES.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showYucoinPowerButton: true,
      tempGameTodayYuCoinCheckIns: true,
      showDailySurvey: true,
      showNotificationCentre: true,
      enableYuScreenV5: true,
    },
  },
} as IDatabaseItem;

export const CUSTOMER_KIF_TOGGLES = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_KIF.data.customerId,
    features: {
      ...DEFAULT_TOGGLES.data.features,
      showYucoinPowerButton: true,
      tempGameTodayYuCoinCheckIns: true,
      showDailySurvey: true,
      showNotificationCentre: true,
      enableYuScreenV5: true,
    },
  },
} as IDatabaseItem;
