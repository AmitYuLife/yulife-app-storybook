import moment from "moment";
import {
  CORE_JOURNEY_STEPS_01,
  CORE_JOURNEY_STEPS_02,
  CORE_JOURNEY_STEPS_03,
  CORE_JOURNEY_STEPS_04,
  CORE_JOURNEY_STEPS_05,
  CORE_JOURNEY_STEPS_06,
  CORE_JOURNEY_STEPS_07,
  CORE_JOURNEY_STEPS_08,
  CORE_JOURNEY_STEPS_11,
  CORE_JOURNEY_STEPS_12,
  CORE_JOURNEY_STEPS_13,
  CORE_JOURNEY_STEPS_14,
  CORE_JOURNEY_STEPS_15,
  CORE_JOURNEY_STEPS_16,
  CORE_JOURNEY_STEPS_17,
  CORE_JOURNEY_STEPS_18,
} from "./core_journey_steps";
import * as customer from "../postgres/customers";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";

const modelName = "user_journey_state";
const type = "mongo";

export const USER_JOURNEY_STATE_01 = {
  type,
  modelName,
  data: {
    _id: "6627908bad09032b591d5470",
    journeyId: "health_questionnaire",
    triggerSourceId: "initial",
    userId: customer.CUSTOMER_73.data.customerId,
    __v: 0,
    createdAt: "2024-04-23T10:42:19.959+0000",
    requiresUserStateForAccess: true,
    static: true,
    published: true,
    status: "pending",
    steps: [
      {
        stepId: "health_questionnaire_initial",
        animateProgressBar: false,
        progressBarValue: undefined,
        isAQuestion: false,
      },
      {
        stepId: CORE_JOURNEY_STEPS_01.data.externalId,
        animateProgressBar: false,
        progressBarValue: 0,
        isAQuestion: true,
      },
      {
        stepId: CORE_JOURNEY_STEPS_02.data.externalId,
        animateProgressBar: true,
        progressBarValue: 1,
        isAQuestion: true,
      },
      {
        stepId: CORE_JOURNEY_STEPS_03.data.externalId,
        animateProgressBar: true,
        progressBarValue: 2,
        isAQuestion: true,
      },
      {
        stepId: CORE_JOURNEY_STEPS_04.data.externalId,
        animateProgressBar: true,
        progressBarValue: 3,
        isAQuestion: true,
      },
      {
        stepId: CORE_JOURNEY_STEPS_05.data.externalId,
        animateProgressBar: true,
        progressBarValue: 4,
        isAQuestion: true,
      },
      {
        stepId: CORE_JOURNEY_STEPS_06.data.externalId,
        animateProgressBar: true,
        progressBarValue: 5,
        isAQuestion: true,
      },
      {
        stepId: CORE_JOURNEY_STEPS_07.data.externalId,
        animateProgressBar: true,
        progressBarValue: 6,
        isAQuestion: true,
      },
      {
        stepId: CORE_JOURNEY_STEPS_08.data.externalId,
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

export const USER_JOURNEY_STATE_02 = {
  type,
  modelName,
  data: {
    _id: "6627908bad09032b591d5471",
    journeyId: "health_questionnaire",
    triggerSourceId: "initial",
    userId: customer.CUSTOMER_44.data.customerId,
    __v: 0,
    createdAt: "2024-04-23T10:42:19.959+0000",
    requiresUserStateForAccess: true,
    static: true,
    published: true,
    status: "completed",
    steps: [
      {
        stepId: "health_questionnaire_initial",
        animateProgressBar: false,
        progressBarValue: undefined,
        isAQuestion: false,
      },
      {
        stepId: CORE_JOURNEY_STEPS_01.data.externalId,
        animateProgressBar: false,
        progressBarValue: 0,
        isAQuestion: true,
      },
      {
        stepId: CORE_JOURNEY_STEPS_02.data.externalId,
        animateProgressBar: true,
        progressBarValue: 1,
        isAQuestion: true,
      },
      {
        stepId: CORE_JOURNEY_STEPS_03.data.externalId,
        animateProgressBar: true,
        progressBarValue: 2,
        isAQuestion: true,
      },
      {
        stepId: CORE_JOURNEY_STEPS_04.data.externalId,
        animateProgressBar: true,
        progressBarValue: 3,
        isAQuestion: true,
      },
      {
        stepId: CORE_JOURNEY_STEPS_05.data.externalId,
        animateProgressBar: true,
        progressBarValue: 4,
        isAQuestion: true,
      },
      {
        stepId: CORE_JOURNEY_STEPS_06.data.externalId,
        animateProgressBar: true,
        progressBarValue: 5,
        isAQuestion: true,
      },
      {
        stepId: CORE_JOURNEY_STEPS_07.data.externalId,
        animateProgressBar: true,
        progressBarValue: 6,
        isAQuestion: true,
      },
      {
        stepId: CORE_JOURNEY_STEPS_08.data.externalId,
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

export const USER_JOURNEY_STATE_03 = {
  type,
  modelName,
  data: {
    _id: "6627908bad09032b591d5999",
    journeyId: "health_questionnaire",
    triggerSourceId: "initial",
    userId: customer.CUSTOMER_44.data.customerId,
    __v: 0,
    createdAt: "2024-04-23T10:42:19.959+0000",
    requiresUserStateForAccess: true,
    static: true,
    published: true,
    status: "pending",
    steps: [
      {
        stepId: "health_questionnaire_initial",
        animateProgressBar: false,
        progressBarValue: undefined,
        isAQuestion: false,
      },
      {
        stepId: CORE_JOURNEY_STEPS_11.data.externalId,
        animateProgressBar: false,
        progressBarValue: 0,
        isAQuestion: true,
      },
      {
        stepId: CORE_JOURNEY_STEPS_12.data.externalId,
        animateProgressBar: true,
        progressBarValue: 1,
        isAQuestion: true,
      },
      {
        stepId: CORE_JOURNEY_STEPS_13.data.externalId,
        animateProgressBar: true,
        progressBarValue: 2,
        isAQuestion: true,
      },
      {
        stepId: CORE_JOURNEY_STEPS_14.data.externalId,
        animateProgressBar: true,
        progressBarValue: 3,
        isAQuestion: true,
      },
      {
        stepId: CORE_JOURNEY_STEPS_15.data.externalId,
        animateProgressBar: true,
        progressBarValue: 4,
        isAQuestion: true,
      },
      {
        stepId: CORE_JOURNEY_STEPS_16.data.externalId,
        animateProgressBar: true,
        progressBarValue: 5,
        isAQuestion: true,
      },
      {
        stepId: CORE_JOURNEY_STEPS_17.data.externalId,
        animateProgressBar: true,
        progressBarValue: 6,
        isAQuestion: true,
      },
      {
        stepId: CORE_JOURNEY_STEPS_18.data.externalId,
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
