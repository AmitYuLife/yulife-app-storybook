import moment from "moment";
import * as steps from "./core_journey_steps";
import * as customer from "../postgres/customers";
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";

const modelName = "user_journey_state";
const type = "mongo";

export const USER_JOURNEY_STATE_01 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    journeyId: "health_questionnaire",
    triggerSourceId: "initial",
    userId: customer.CUSTOMER_3.data.customerId,
    __v: 0,
    createdAt: "2024-04-23T10:42:19.959+0000",
    requiresUserStateForAccess: true,
    static: true,
    published: true,
    status: "pending",
    steps: [
      {
        stepId: "health_questionnaire_initial_nov25",
        animateProgressBar: false,
        progressBarValue: undefined,
        isAQuestion: false,
      },
      {
        stepId: "health_questionnaire_consent_nov25",
        animateProgressBar: false,
        progressBarValue: undefined,
        isAQuestion: false,
      },
      {
        stepId: "reflection.rested_today",
        animateProgressBar: false,
        progressBarValue: 0,
        isAQuestion: true,
      },
      {
        stepId: "reflection.your_day_so_far",
        animateProgressBar: true,
        progressBarValue: 1,
        isAQuestion: true,
      },
      {
        stepId: "reflection.how_you_feel_today",
        animateProgressBar: true,
        progressBarValue: 2,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_01.data.externalId,
        animateProgressBar: true,
        progressBarValue: 3,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_02.data.externalId,
        animateProgressBar: true,
        progressBarValue: 4,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_03.data.externalId,
        animateProgressBar: true,
        progressBarValue: 5,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_04.data.externalId,
        animateProgressBar: true,
        progressBarValue: 6,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_05.data.externalId,
        animateProgressBar: true,
        progressBarValue: 7,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_06.data.externalId,
        animateProgressBar: true,
        progressBarValue: 8,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_07.data.externalId,
        animateProgressBar: true,
        progressBarValue: 9,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_08.data.externalId,
        animateProgressBar: true,
        progressBarValue: 10,
        isAQuestion: true,
      },
      {
        stepId: "health_questionnaire_submission",
        animateProgressBar: false,
        progressBarValue: undefined,
        isAQuestion: false,
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
                {
                  format: "date",
                  formatMinimum: "2024-05-06",
                  formatMaximum: "2024-05-13",
                },
                {
                  format: "date",
                  formatMinimum: "2024-05-20",
                  formatMaximum: "2024-05-27",
                },
              ],
            },
          },
          required: ["dateNow"],
          additionalProperties: false,
        },
      },
    },
    updatedAt: "2024-04-23T10:42:19.959+0000",
  },
} as IDatabaseItem;

export const USER_JOURNEY_STATE_02 = {
  type,
  modelName,
  data: {
    _id: "6627908bad09032b591d5471",
    journeyId: "health_questionnaire",
    triggerSourceId: "initial",
    userId: customer.CUSTOMER_1.data.customerId,
    __v: 0,
    createdAt: "2024-04-23T10:42:19.959+0000",
    requiresUserStateForAccess: true,
    static: true,
    published: true,
    status: "completed",
    steps: [
      {
        stepId: "health_questionnaire_initial_nov25",
        animateProgressBar: false,
        progressBarValue: undefined,
        isAQuestion: false,
      },
      {
        stepId: "health_questionnaire_consent_nov25",
        animateProgressBar: false,
        progressBarValue: undefined,
        isAQuestion: false,
      },
      {
        stepId: "reflection.rested_today",
        animateProgressBar: false,
        progressBarValue: 0,
        isAQuestion: true,
      },
      {
        stepId: "reflection.your_day_so_far",
        animateProgressBar: true,
        progressBarValue: 1,
        isAQuestion: true,
      },
      {
        stepId: "reflection.how_you_feel_today",
        animateProgressBar: true,
        progressBarValue: 2,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_01.data.externalId,
        animateProgressBar: true,
        progressBarValue: 3,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_02.data.externalId,
        animateProgressBar: true,
        progressBarValue: 4,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_03.data.externalId,
        animateProgressBar: true,
        progressBarValue: 5,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_04.data.externalId,
        animateProgressBar: true,
        progressBarValue: 6,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_05.data.externalId,
        animateProgressBar: true,
        progressBarValue: 7,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_06.data.externalId,
        animateProgressBar: true,
        progressBarValue: 8,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_07.data.externalId,
        animateProgressBar: true,
        progressBarValue: 9,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_08.data.externalId,
        animateProgressBar: true,
        progressBarValue: 10,
        isAQuestion: true,
      },
      {
        stepId: "health_questionnaire_submission",
        animateProgressBar: false,
        progressBarValue: undefined,
        isAQuestion: false,
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
                {
                  format: "date",
                  formatMinimum: "2024-05-06",
                  formatMaximum: "2024-05-13",
                },
                {
                  format: "date",
                  formatMinimum: "2024-05-20",
                  formatMaximum: "2024-05-27",
                },
              ],
            },
          },
          required: ["dateNow"],
          additionalProperties: false,
        },
      },
    },
    updatedAt: "2024-04-23T10:42:19.959+0000",
  },
} as IDatabaseItem;

export const USER_JOURNEY_STATE_03 = {
  type,
  modelName,
  data: {
    _id: "6627908bad09032b591d5999",
    journeyId: "health_questionnaire",
    triggerSourceId: "initial",
    userId: customer.CUSTOMER_1.data.customerId,
    __v: 0,
    createdAt: "2024-04-23T10:42:19.959+0000",
    requiresUserStateForAccess: true,
    static: true,
    published: true,
    status: "pending",
    steps: [
      {
        stepId: "health_questionnaire_initial_nov25",
        animateProgressBar: false,
        progressBarValue: undefined,
        isAQuestion: false,
      },
      {
        stepId: "health_questionnaire_consent_nov25",
        animateProgressBar: false,
        progressBarValue: undefined,
        isAQuestion: false,
      },
      {
        stepId: "reflection.rested_today",
        animateProgressBar: false,
        progressBarValue: 0,
        isAQuestion: true,
      },
      {
        stepId: "reflection.your_day_so_far",
        animateProgressBar: true,
        progressBarValue: 1,
        isAQuestion: true,
      },
      {
        stepId: "reflection.how_you_feel_today",
        animateProgressBar: true,
        progressBarValue: 2,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_11.data.externalId,
        animateProgressBar: true,
        progressBarValue: 3,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_12.data.externalId,
        animateProgressBar: true,
        progressBarValue: 4,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_13.data.externalId,
        animateProgressBar: true,
        progressBarValue: 5,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_14.data.externalId,
        animateProgressBar: true,
        progressBarValue: 6,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_15.data.externalId,
        animateProgressBar: true,
        progressBarValue: 7,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_16.data.externalId,
        animateProgressBar: true,
        progressBarValue: 8,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_17.data.externalId,
        animateProgressBar: true,
        progressBarValue: 9,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_18.data.externalId,
        animateProgressBar: true,
        progressBarValue: 10,
        isAQuestion: true,
      },
      {
        stepId: "health_questionnaire_submission",
        animateProgressBar: false,
        progressBarValue: undefined,
        isAQuestion: false,
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
                  formatMinimum: moment().add(7, "days").format("YYYY-MM-DD"),
                  formatMaximum: moment().add(14, "days").format("YYYY-MM-DD"),
                },
                {
                  format: "date",
                  formatMinimum: moment().add(21, "days").format("YYYY-MM-DD"),
                  formatMaximum: moment().add(28, "days").format("YYYY-MM-DD"),
                },
                {
                  format: "date",
                  formatMinimum: moment().add(35, "days").format("YYYY-MM-DD"),
                  formatMaximum: moment().add(42, "days").format("YYYY-MM-DD"),
                },
              ],
            },
          },
          required: ["dateNow"],
          additionalProperties: false,
        },
      },
    },
    updatedAt: "2024-04-23T10:42:19.959+0000",
  },
} as IDatabaseItem;

export const USER_JOURNEY_STATE_04 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    journeyId: "health_questionnaire",
    triggerSourceId: "initial",
    userId: customer.CUSTOMER_2.data.customerId,
    __v: 0,
    createdAt: "2024-04-23T10:42:19.959+0000",
    requiresUserStateForAccess: true,
    static: true,
    published: true,
    status: "pending",
    steps: [
      {
        stepId: "health_questionnaire_initial_nov25",
        animateProgressBar: false,
        progressBarValue: undefined,
        isAQuestion: false,
      },
      {
        stepId: "health_questionnaire_consent_nov25",
        animateProgressBar: false,
        progressBarValue: undefined,
        isAQuestion: false,
      },
      {
        stepId: "reflection.rested_today",
        animateProgressBar: false,
        progressBarValue: 0,
        isAQuestion: true,
      },
      {
        stepId: "reflection.your_day_so_far",
        animateProgressBar: true,
        progressBarValue: 1,
        isAQuestion: true,
      },
      {
        stepId: "reflection.how_you_feel_today",
        animateProgressBar: true,
        progressBarValue: 2,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_19.data.externalId,
        animateProgressBar: true,
        progressBarValue: 3,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_20.data.externalId,
        animateProgressBar: true,
        progressBarValue: 4,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_21.data.externalId,
        animateProgressBar: true,
        progressBarValue: 5,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_22.data.externalId,
        animateProgressBar: true,
        progressBarValue: 6,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_23.data.externalId,
        animateProgressBar: true,
        progressBarValue: 7,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_24.data.externalId,
        animateProgressBar: true,
        progressBarValue: 8,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_25.data.externalId,
        animateProgressBar: true,
        progressBarValue: 9,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEP_WEIGHT.data.externalId,
        animateProgressBar: true,
        progressBarValue: 10,
        isAQuestion: true,
      },
      {
        stepId: "health_questionnaire_submission",
        animateProgressBar: false,
        progressBarValue: undefined,
        isAQuestion: false,
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
                {
                  format: "date",
                  formatMinimum: "2024-05-06",
                  formatMaximum: "2024-05-13",
                },
                {
                  format: "date",
                  formatMinimum: "2024-05-20",
                  formatMaximum: "2024-05-27",
                },
              ],
            },
          },
          required: ["dateNow"],
          additionalProperties: false,
        },
      },
    },
    updatedAt: "2024-04-23T10:42:19.959+0000",
  },
} as IDatabaseItem;

export const USER_JOURNEY_SCROLL_PICKER = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    journeyId: "health_questionnaire",
    triggerSourceId: "initial",
    userId: customer.CUSTOMER_SDUI_SCROLL_PICKER.customer.data.customerId,
    __v: 0,
    createdAt: "2024-04-23T10:42:19.959+0000",
    requiresUserStateForAccess: true,
    static: true,
    published: true,
    status: "pending",
    steps: [
      {
        stepId: steps.CORE_JOURNEY_STEP_WEIGHT.data.externalId,
        animateProgressBar: true,
        progressBarValue: 7,
        isAQuestion: true,
      },
      {
        stepId: "health_questionnaire_submission",
        animateProgressBar: false,
        progressBarValue: undefined,
        isAQuestion: false,
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
                {
                  format: "date",
                  formatMinimum: "2024-05-06",
                  formatMaximum: "2024-05-13",
                },
                {
                  format: "date",
                  formatMinimum: "2024-05-20",
                  formatMaximum: "2024-05-27",
                },
              ],
            },
          },
          required: ["dateNow"],
          additionalProperties: false,
        },
      },
    },
    updatedAt: "2024-04-23T10:42:19.959+0000",
  },
} as IDatabaseItem;

export const USER_JOURNEY_STATE_04_CUSTOMER_7 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    journeyId: "health_questionnaire",
    triggerSourceId: "initial",
    userId: customer.CUSTOMER_7.customer.data.customerId,
    __v: 0,
    createdAt: "2024-04-23T10:42:19.959+0000",
    requiresUserStateForAccess: true,
    static: true,
    published: true,
    status: "pending",
    steps: [
      {
        stepId: "health_questionnaire_initial_nov25",
        animateProgressBar: false,
        progressBarValue: undefined,
        isAQuestion: false,
      },
      {
        stepId: "health_questionnaire_consent_nov25",
        animateProgressBar: false,
        progressBarValue: undefined,
        isAQuestion: false,
      },
      {
        stepId: "reflection.rested_today",
        animateProgressBar: false,
        progressBarValue: 0,
        isAQuestion: true,
      },
      {
        stepId: "reflection.your_day_so_far",
        animateProgressBar: true,
        progressBarValue: 1,
        isAQuestion: true,
      },
      {
        stepId: "reflection.how_you_feel_today",
        animateProgressBar: true,
        progressBarValue: 2,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_19.data.externalId,
        animateProgressBar: true,
        progressBarValue: 3,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_20.data.externalId,
        animateProgressBar: true,
        progressBarValue: 4,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_21.data.externalId,
        animateProgressBar: true,
        progressBarValue: 5,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_22.data.externalId,
        animateProgressBar: true,
        progressBarValue: 6,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_23.data.externalId,
        animateProgressBar: true,
        progressBarValue: 7,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_24.data.externalId,
        animateProgressBar: true,
        progressBarValue: 8,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_25.data.externalId,
        animateProgressBar: true,
        progressBarValue: 9,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_26.data.externalId,
        animateProgressBar: true,
        progressBarValue: 10,
        isAQuestion: true,
      },
      {
        stepId: "health_questionnaire_submission",
        animateProgressBar: false,
        progressBarValue: undefined,
        isAQuestion: false,
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
                {
                  format: "date",
                  formatMinimum: "2024-05-06",
                  formatMaximum: "2024-05-13",
                },
                {
                  format: "date",
                  formatMinimum: "2024-05-20",
                  formatMaximum: "2024-05-27",
                },
              ],
            },
          },
          required: ["dateNow"],
          additionalProperties: false,
        },
      },
    },
    updatedAt: "2024-04-23T10:42:19.959+0000",
  },
} as IDatabaseItem;

export const USER_JOURNEY_STATE_04_CUSTOMER_8_1_QUESTION = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    journeyId: "health_questionnaire",
    triggerSourceId: "initial",
    userId: customer.CUSTOMER_8.customer.data.customerId,
    createdAt: "2024-04-23T10:42:19.959+0000",
    requiresUserStateForAccess: true,
    static: true,
    published: true,
    status: "pending",
    steps: [
      {
        stepId: "health_questionnaire_initial_nov25",
        animateProgressBar: false,
        progressBarValue: undefined,
        isAQuestion: false,
      },
      {
        stepId: "health_questionnaire_consent_nov25",
        animateProgressBar: false,
        progressBarValue: undefined,
        isAQuestion: false,
      },
      {
        stepId: "reflection.rested_today",
        animateProgressBar: false,
        progressBarValue: 0,
        isAQuestion: true,
      },
      {
        stepId: "reflection.your_day_so_far",
        animateProgressBar: true,
        progressBarValue: 1,
        isAQuestion: true,
      },
      {
        stepId: "reflection.how_you_feel_today",
        animateProgressBar: true,
        progressBarValue: 2,
        isAQuestion: true,
      },
      {
        stepId: steps.CORE_JOURNEY_STEPS_19.data.externalId,
        animateProgressBar: true,
        progressBarValue: 3,
        isAQuestion: true,
      },
      {
        stepId: "health_questionnaire_submission",
        animateProgressBar: false,
        progressBarValue: undefined,
        isAQuestion: false,
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
                {
                  format: "date",
                  formatMinimum: "2024-05-06",
                  formatMaximum: "2024-05-13",
                },
                {
                  format: "date",
                  formatMinimum: "2024-05-20",
                  formatMaximum: "2024-05-27",
                },
              ],
            },
          },
          required: ["dateNow"],
          additionalProperties: false,
        },
      },
    },
    updatedAt: "2024-04-23T10:42:19.959+0000",
  },
} as IDatabaseItem;

import { CORE_JOURNEY_INSTANCE_SURVEY_PROMPT } from "./core_journey_instances";

export const USER_JOURNEY_STATE_SURVEY_PROMPT = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    journeyId: CORE_JOURNEY_INSTANCE_SURVEY_PROMPT.data.journeyId,
    triggerSourceId: CORE_JOURNEY_INSTANCE_SURVEY_PROMPT.data.steps[0].stepId,
    userId: customer.CUSTOMER_SURVEY_PROMPT.customer.data.customerId,
    status: "pending",
    uiAccess: {
      eventPanel: { alwaysOn: true },
    },
    updatedAt: new Date().toISOString(),
  },
} as IDatabaseItem;

export const USER_JOURNEY_STATE_FOR_REWARD_MULTIPLIER_TEST_CUSTOMER_1 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    journeyId: "automated_qa_test_journey_10_multiplier",
    triggerSourceId: "initial_multiplier",
    userId: customer.CUSTOMER_1.data.customerId,
    status: "pending",
    uiAccess: {
      eventPanel: { alwaysOn: true },
    },
    updatedAt: "2024-04-23T10:42:19.959+0000",
  },
} as IDatabaseItem;

export const USER_JOURNEY_STATE_FOR_REWARD_FLAT_RATE_TEST_CUSTOMER_1 = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    journeyId: "automated_qa_test_journey_500_yucoin_flat_amount",
    triggerSourceId: "initial_multiplier",
    userId: customer.CUSTOMER_1.data.customerId,
    status: "pending",
    uiAccess: {
      eventPanel: { alwaysOn: true },
    },
    updatedAt: "2024-04-23T10:42:19.959+0000",
  },
} as IDatabaseItem;
