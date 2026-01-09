import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_1, CUSTOMER_4, CUSTOMER_5 } from "../postgres/customers";
import { CHALLENGE_TEMPLATE } from "./_templates";
import {
  LONG_WALK_MILESTONE_1,
  MEDITATION_MILESTONE_1,
  SHORT_STROLL_MILESTONE_1,
} from "./map_milestone_templates";

import moment = require("moment");
import { MEDITATION_1 } from "./map_level_slot_templates";

function generateChallengeDates(startDate: moment.Moment, endDate?: moment.Moment) {
  return {
    startTime: startDate.toDate(),
    date: startDate.format("YYYY-MM-DD"),
    startDateTime: startDate.format(),
    endDateTime: endDate ? endDate.toDate() : startDate.toDate(),
  };
}

export const CHALLENGE_USER_4_A = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    userId: CUSTOMER_4.data.customerId,
    _id: generateRandomMongoId(),
    ...generateChallengeDates(moment().subtract(3, "days")),
    level: 1,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          meditation: 0,
          steps: 400,
        },
        yuCoinAwarded: 20,
        completed: moment().subtract(3, "day").toDate(),
        id: SHORT_STROLL_MILESTONE_1.data.id,
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_4_B = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: CUSTOMER_4.data.customerId,
    ...generateChallengeDates(moment().subtract(2, "days")),
    level: 2,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          meditation: 0,
          steps: 600,
        },
        yuCoinAwarded: 20,
        completed: moment().subtract(2, "day").toDate(),
        id: SHORT_STROLL_MILESTONE_1.data.id,
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_5_A = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    userId: CUSTOMER_5.data.customerId,
    _id: generateRandomMongoId(),
    ...generateChallengeDates(moment().subtract(5, "days")),
    level: 1,
  },
} as IDatabaseItem;

export const CHALLENGE_USER_5_B = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: CUSTOMER_5.data.customerId,
    ...generateChallengeDates(moment().subtract(4, "days")),
    level: 2,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          meditation: 0,
          steps: 2300,
        },
        yuCoinAwarded: 20,
        completed: moment().subtract(4, "day").toDate(),
        id: SHORT_STROLL_MILESTONE_1.data.id,
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_5_C = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: CUSTOMER_5.data.customerId,
    ...generateChallengeDates(moment().subtract(3, "days")),
    levelSlotTemplateId: MEDITATION_1.data.id,
    subtype: MEDITATION_1.data.subtype,
    incomingData: {
      minutes: 10,
    },
    level: 3,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        id: MEDITATION_MILESTONE_1.data.id,
        completed: moment().subtract(3, "day").toDate(),
        data: {
          steps: 0,
          meditation: 10,
          distance: 0,
        },
        yuCoinAwarded: 60,
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_5_D = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: CUSTOMER_5.data.customerId,
    ...generateChallengeDates(moment().subtract(2, "days")),
    incomingData: {
      steps: 2200,
    },
    level: 4,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        id: LONG_WALK_MILESTONE_1.data.id,
        completed: moment().subtract(2, "day").toDate(),
        data: {
          steps: 2500,
          meditation: 0,
          distance: 0,
        },
        yuCoinAwarded: 60,
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_5_E = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: CUSTOMER_5.data.customerId,
    ...generateChallengeDates(moment().subtract(1, "days")),
    incomingData: {
      steps: 2200,
    },
    level: 5,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        id: LONG_WALK_MILESTONE_1.data.id,
        completed: moment().subtract(2, "day").toDate(),
        data: {
          steps: 2500,
          meditation: 0,
          distance: 0,
        },
        yuCoinAwarded: 60,
      },
    ],
  },
} as IDatabaseItem;
