// this file doesn't follow the way we create and store data. Advising this test is moved into the Surveys folder and the seed data
// to be provided properly. Ulas to address when back

import { generateRandomMongoId, generateRandomInbox } from "@yu-life/yulife-bdd-framework";
import {
  CORE_JOURNEY_1,
  CORE_JOURNEY_STEP_WEIGHT,
  CORE_JOURNEY_STEPS_09,
  CORE_JOURNEY_STEPS_10,
  CORE_JOURNEY_STEPS_CONSENT,
} from "surveys/_data";
import moment from "moment";

export const config = {
  earnRate: 20,
  onboardingReward: 200,
  healthQuestionnaireEarnRateBasedReward: 4,
};

const base = {
  BUSINESS_ACCOUNT: {
    type: "postgres",
    modelName: "business",
    data: {
      business_account_id: generateRandomMongoId(),
      business_account_name: Math.random().toString(36).substring(2, 15),
    },
  },
  CUSTOMER: {
    type: "postgres",
    modelName: "customer",
    data: {
      customerId: generateRandomMongoId(),
      email: generateRandomInbox(),
      firstName: Math.random().toString(36).substring(2, 15),
      lastName: Math.random().toString(36).substring(2, 15),
      status: "onboarded",
    },
  },
  CORE_JOURNEY_1,
};

const extended = {
  AUTH: {
    type: "mongo",
    modelName: "authpassword",
    data: {
      userId: base.CUSTOMER.data.customerId,
      attempts: 1,
      password: "letmein",
      scope: "user",
      strategy: "0",
      used: false,
    },
  },
  BUSINESS_EMPLOYEE: {
    type: "postgres",
    modelName: "business_employee",
    data: {
      business_account_id: base.BUSINESS_ACCOUNT.data.business_account_id,
      customer_id: base.CUSTOMER.data.customerId,
      employment_start_date: "2019-12-30T00:00:00Z",
      employment_leave_date: "2999-12-31T00:00:00Z",
    },
  },
  USER_ONBOARDING: {
    type: "mongo",
    modelName: "user_onboardings",
    data: {
      _id: generateRandomMongoId(),
      userId: base.CUSTOMER.data.customerId,
      businessAccountId: base.BUSINESS_ACCOUNT.data.business_account_id,
      businessName: Math.random().toString(36).substring(2, 15),
    },
  },
  YULIFER: {
    type: "mongo",
    modelName: "users",
    data: {
      _id: generateRandomMongoId(),
      userId: base.CUSTOMER.data.customerId,
      earnRate: config.earnRate,
      products: [
        {
          productId: generateRandomMongoId(),
          productType: Math.random().toString(36).substring(2, 15),
          option: "epic",
          earnRate: config.earnRate,
          type: "employer",
        },
      ],
    },
  },
  USER_GAME_STATE: {
    type: "mongo",
    modelName: "user_game_state",
    data: {
      _id: generateRandomMongoId(),
      userId: base.CUSTOMER.data.customerId,
      currentBalance: 0,
      currentStreak: 0,
      currentLevel: 1,
    },
  },
  USER_JOURNEY_STATE: {
    type: "mongo",
    modelName: "user_journey_state",
    data: {
      _id: generateRandomMongoId(),
      journeyId: "health_questionnaire",
      triggerSourceId: "initial",
      userId: base.CUSTOMER.data.customerId,
      startsOn: moment().subtract(1, "days").format("YYYY-MM-DD"),
      createdAt: moment().subtract(1, "days").toISOString(),
      requiresUserStateForAccess: true,
      static: true,
      published: true,
      status: "pending",
      steps: [
        {
          stepId: "health_questionnaire_initial",
        },
        {
          stepId: "health_questionnaire_consent",
        },
        {
          stepId: "dynamic_health.0.0.2",
          animateProgressBar: false,
          progressBarValue: 0,
          isAQuestion: true,
        },
        {
          stepId: "health_questionnaire_submission",
        },
      ],
      uiAccess: {
        eventPanel: {
          alwaysOn: false,
          validation: {
            type: "object",
            properties: {
              dateNow: {
                type: "string",
                anyOf: [
                  {
                    format: "date",
                    formatMinimum: moment().subtract(7, "days").format("YYYY-MM-DD"),
                    formatMaximum: moment().add(7, "days").format("YYYY-MM-DD"),
                  },
                ],
              },
            },
            required: ["dateNow"],
            additionalProperties: false,
          },
        },
      },
    },
  },
  CORE_JOURNEY_STEPS_09,
  CORE_JOURNEY_STEPS_CONSENT,
  CORE_JOURNEY_STEP_WEIGHT,
  CORE_JOURNEY_STEPS_10,
};

export default {
  ...base,
  ...extended,
} as const;
