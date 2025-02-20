import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import {
  SHORT_STROLL_MILESTONE_1,
  MEDITATION_MILESTONE_1,
  SUDOKU_MILESTONE,
  LONG_WALK_MILESTONE_1,
} from "./map_milestone_templates";
import { MEDITATION_1, CYCLING_1 } from "./map_level_slot_templates";
import { CHALLENGE_TEMPLATE } from "./_templates";
import * as customer from "../postgres/customers";
import moment from "moment";

function generateChallengeDates(startDate: moment.Moment, endDate?: moment.Moment) {
  return {
    startTime: startDate.toDate(),
    date: startDate.format("YYYY-MM-DD"),
    startDateTime: startDate.format(),
    endDateTime: endDate ? endDate.toDate() : startDate.toDate(),
  };
}

export const CHALLENGE_2 = {
  type: "mongo",
  modelName: "challenge",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_2.data.customerId,
    ...generateChallengeDates(moment().subtract(1, "days")),
    sources: {
      device: {
        steps: 4461,
      },
    },
    incomingData: {
      steps: 309,
      meditation: 0,
    },
    levelSlotTemplateId: "DAILY_PASSIVE_001",
    isNewType: true,
    status: "passive",
    passive: true,
    yuCoinAwarded: 0,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          meditation: 0,
          steps: 4461,
        },
        yuCoinAwarded: 20,
        completed: moment().subtract(1, "day").toDate(),
        id: "YU_MILESTONE_DAILY_STEPS_0",
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_6_A = {
  type: "mongo",
  modelName: "challenge",
  data: {
    _id: generateRandomMongoId(),
    challengeTemplateId: [],
    data: [],
    actions: [],
    target: [],
    userId: customer.CUSTOMER_6.data.customerId,
    level: 1,
    levelId: "YU_LEVEL_0001",
    levelSlotId: "YU_LEVEL_0001_1",
    levelSlotTemplateId: "SHORT_STROLL_001",
    subtype: "short stroll",
    isNewType: true,
    status: "completed",
    passive: false,
    incomingData: {
      steps: 125,
    },
    ...generateChallengeDates(moment().subtract(1, "days")),
    yuCoinAwarded: 60,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        id: "YU_MILESTONE_SS0001_0",
        completed: moment().subtract(1, "day").toDate(),
        data: {
          steps: 108,
          meditation: 0,
          distance: 0,
        },
        yuCoinAwarded: 60,
      },
    ],
    rating: 3,
    multiplierId: null,
  },
} as IDatabaseItem;

export const CHALLENGE_USER_7_A = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    userId: customer.CUSTOMER_7.data.customerId,
    _id: generateRandomMongoId(),
    ...generateChallengeDates(moment().subtract(4, "days")),
    level: 1,
  },
} as IDatabaseItem;

export const CHALLENGE_USER_7_B = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_7.data.customerId,
    ...generateChallengeDates(moment().subtract(3, "days")),
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
        completed: moment().subtract(3, "day").toDate(),
        id: SHORT_STROLL_MILESTONE_1.data.id,
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_7_C = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_7.data.customerId,
    ...generateChallengeDates(moment().subtract(2, "days")),
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
        completed: moment().subtract(2, "day").toDate(),
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

export const CHALLENGE_USER_7_D = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_7.data.customerId,
    ...generateChallengeDates(moment().subtract(1, "days")),
    incomingData: {
      steps: 2200,
    },
    level: 4,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        id: LONG_WALK_MILESTONE_1.data.id,
        completed: moment().subtract(1, "day").toDate(),
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

export const CHALLENGE_USER_8_A = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    userId: customer.CUSTOMER_8.data.customerId,
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

export const CHALLENGE_USER_8_B = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_8.data.customerId,
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

export const CHALLENGE_USER_15_A = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    userId: customer.CUSTOMER_15.data.customerId,
    _id: generateRandomMongoId(),
    ...generateChallengeDates(moment().subtract(4, "days")),
    level: 1,
    status: "completed",
    levelSlotTemplateId: "DAILY_PASSIVE_001",
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          meditation: 0,
          steps: 400,
        },
        yuCoinAwarded: 118118,
        completed: moment().subtract(4, "day").toDate(),
        id: SHORT_STROLL_MILESTONE_1.data.id,
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_15_B = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_15.data.customerId,
    ...generateChallengeDates(moment().subtract(3, "days")),
    level: 2,
    status: "completed",
    levelSlotTemplateId: "DAILY_PASSIVE_001",
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          meditation: 0,
          steps: 2300,
        },
        yuCoinAwarded: 20,
        completed: moment().subtract(3, "day").toDate(),
        id: SHORT_STROLL_MILESTONE_1.data.id,
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_15_C = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_15.data.customerId,
    ...generateChallengeDates(moment().subtract(2, "days")),
    levelSlotTemplateId: "DAILY_PASSIVE_002",
    subtype: MEDITATION_1.data.subtype,
    incomingData: {
      meditation: 100,
    },
    level: 3,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        id: MEDITATION_MILESTONE_1.data.id,
        completed: moment().subtract(2, "day").toDate(),
        data: {
          meditation: 100,
        },
        yuCoinAwarded: 60,
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_15_D = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_15.data.customerId,
    ...generateChallengeDates(moment().subtract(1, "days")),
    date: null,
    incomingData: {
      steps: 450,
    },
    level: 4,
    levelSlotTemplateId: "SHORT_STROLL_001",
    status: "active",
    levelId: "YU_LEVEL_0004",
    levelSlotId: "YU_LEVEL_0004_1",
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          steps: 450,
        },
        id: SHORT_STROLL_MILESTONE_1.data.id,
      },
    ],
  },
};

export const CHALLENGE_USER_16 = {
  type: "mongo",
  modelName: "challenge",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_16.data.customerId,
    ...generateChallengeDates(
      moment("00:01", "HH:mm").subtract(5, "days"),
      moment("23:59", "HH:mm").subtract(5, "days")
    ),
    sources: {
      device: {
        steps: 60,
      },
    },
    incomingData: {
      steps: 60,
      meditation: 0,
    },
    levelSlotTemplateId: "DAILY_PASSIVE_001",
    isNewType: true,
    status: "passive",
    passive: true,
    yuCoinAwarded: 0,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          meditation: 0,
          steps: 60,
        },
        yuCoinAwarded: 20,
        completed: moment().subtract(1, "day").toDate(),
        id: "YU_MILESTONE_DAILY_STEPS_0",
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_17_A = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    userId: customer.CUSTOMER_17.data.customerId,
    _id: generateRandomMongoId(),
    ...generateChallengeDates(moment().subtract(4, "days")),
    level: 1,
    status: "completed",
    levelSlotTemplateId: "DAILY_PASSIVE_001",
    passive: true,
    incomingData: {
      steps: 250,
    },
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          meditation: 0,
          steps: 250,
        },
        yuCoinAwarded: 60,
        completed: moment().subtract(4, "day").toDate(),
        id: SHORT_STROLL_MILESTONE_1.data.id,
        isNewType: true,
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_18_A = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    userId: customer.CUSTOMER_18.data.customerId,
    _id: generateRandomMongoId(),
    ...generateChallengeDates(moment().subtract(4, "days")),
    level: 1,
    status: "completed",
    levelSlotTemplateId: "DAILY_PASSIVE_001",
    passive: true,
    incomingData: {
      steps: 400,
    },
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          meditation: 0,
          steps: 400,
        },
        yuCoinAwarded: 60,
        completed: moment().subtract(4, "day").toDate(),
        id: SHORT_STROLL_MILESTONE_1.data.id,
        isNewType: true,
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_18_B = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_18.data.customerId,
    ...generateChallengeDates(moment().subtract(3, "days")),
    level: 2,
    status: "completed",
    levelSlotTemplateId: "DAILY_PASSIVE_001",
    passive: true,
    incomingData: {
      steps: 400,
    },
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          meditation: 0,
          steps: 200,
        },
        yuCoinAwarded: 60,
        completed: moment().subtract(3, "day").toDate(),
        id: SHORT_STROLL_MILESTONE_1.data.id,
        isNewType: true,
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_18_C = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_18.data.customerId,
    ...generateChallengeDates(moment().subtract(1, "days")),
    status: "completed",
    passive: true,
    levelSlotTemplateId: "DAILY_PASSIVE_003",
    subtype: CYCLING_1.data.subtype,
    incomingData: {
      distance: 4010,
    },
    level: 4,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        id: CYCLING_1.data.id,
        completed: moment().subtract(1, "day").toDate(),
        data: {
          distance: 4010,
        },
        yuCoinAwarded: 60,
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_18_D = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_18.data.customerId,
    ...generateChallengeDates(moment().subtract(1, "days")),
    incomingData: {
      meditation: 1000,
    },
    levelSlotTemplateId: "DAILY_PASSIVE_002",
    level: 3,
    status: "completed",
    passive: true,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        id: MEDITATION_MILESTONE_1.data.id,
        completed: moment().subtract(1, "days").toDate(),
        data: {
          meditation: 1000,
        },
        yuCoinAwarded: 60,
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_19 = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_19.data.customerId,
    ...generateChallengeDates(moment().subtract(3, "days")),
    level: 2,
    status: "completed",
    levelSlotTemplateId: "DAILY_PASSIVE_001",
    passive: true,
    incomingData: {
      steps: 50,
    },
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          meditation: 0,
          steps: 50,
        },
        yuCoinAwarded: 60,
        completed: moment().subtract(3, "day").toDate(),
        id: SHORT_STROLL_MILESTONE_1.data.id,
        isNewType: true,
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_20 = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    userId: customer.CUSTOMER_20.data.customerId,
    _id: generateRandomMongoId(),
    ...generateChallengeDates(moment().subtract(5, "days")),
    level: 1,
    status: "completed",
    levelSlotTemplateId: "DAILY_PASSIVE_001",
    passive: true,
    incomingData: {
      steps: 3125,
    },
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          meditation: 0,
          steps: 3125,
        },
        yuCoinAwarded: 60,
        completed: moment().subtract(3, "day").toDate(),
        id: SHORT_STROLL_MILESTONE_1.data.id,
        isNewType: true,
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_21 = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    userId: customer.CUSTOMER_21.data.customerId,
    _id: generateRandomMongoId(),
    ...generateChallengeDates(moment().subtract(5, "days")),
    level: 1,
    status: "completed",
    levelSlotTemplateId: "DAILY_PASSIVE_001",
    passive: true,
    incomingData: {
      steps: 400001,
    },
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          meditation: 0,
          steps: 400001,
        },
        yuCoinAwarded: 60,
        completed: moment().subtract(3, "day").toDate(),
        id: SHORT_STROLL_MILESTONE_1.data.id,
        isNewType: true,
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_28 = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    userId: customer.CUSTOMER_28.data.customerId,
    _id: generateRandomMongoId(),
    ...generateChallengeDates(moment().subtract(5, "days")),
    level: 1,
    status: "completed",
    levelSlotTemplateId: "DAILY_PASSIVE_001",
    passive: true,
    incomingData: {
      steps: 200,
    },
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          meditation: 0,
          steps: 200,
        },
        yuCoinAwarded: 60,
        completed: moment().subtract(3, "day").toDate(),
        id: SHORT_STROLL_MILESTONE_1.data.id,
        isNewType: true,
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_39_DAY1 = {
  type: "mongo",
  modelName: "challenge",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_39.data.customerId,
    ...generateChallengeDates(
      moment("00:01", "HH:mm").subtract(5, "days"),
      moment("23:59", "HH:mm").subtract(5, "days")
    ),
    sources: {
      device: {
        steps: 75000,
      },
    },
    incomingData: {
      steps: 75000,
      meditation: 0,
    },
    levelSlotTemplateId: "DAILY_PASSIVE_001",
    isNewType: true,
    status: "passive",
    passive: true,
    yuCoinAwarded: 0,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          meditation: 0,
          steps: 75000,
        },
        yuCoinAwarded: 20,
        completed: moment().subtract(1, "day").toDate(),
        id: "YU_MILESTONE_DAILY_STEPS_0",
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_73 = {
  type: "mongo",
  modelName: "challenge",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_73.data.customerId,
    ...generateChallengeDates(
      moment("00:01", "HH:mm").subtract(5, "days"),
      moment("23:59", "HH:mm").subtract(5, "days")
    ),
    sources: {
      device: {
        steps: 25000,
      },
    },
    incomingData: {
      steps: 25000,
      meditation: 0,
    },
    levelSlotTemplateId: "DAILY_PASSIVE_001",
    isNewType: true,
    status: "passive",
    passive: true,
    yuCoinAwarded: 0,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          meditation: 0,
          steps: 25000,
        },
        yuCoinAwarded: 20,
        completed: moment().subtract(1, "day").toDate(),
        id: "YU_MILESTONE_DAILY_STEPS_0",
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_40_DAY1 = {
  type: "mongo",
  modelName: "challenge",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_40.data.customerId,
    ...generateChallengeDates(
      moment("00:01", "HH:mm").subtract(5, "days"),
      moment("23:59", "HH:mm").subtract(5, "days")
    ),
    sources: {
      device: {
        steps: 75000,
      },
    },
    incomingData: {
      steps: 75000,
      meditation: 0,
    },
    levelSlotTemplateId: "DAILY_PASSIVE_001",
    isNewType: true,
    status: "passive",
    passive: true,
    yuCoinAwarded: 0,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          meditation: 0,
          steps: 75000,
        },
        yuCoinAwarded: 20,
        completed: moment().subtract(1, "day").toDate(),
        id: "YU_MILESTONE_DAILY_STEPS_0",
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_40_DAY2 = {
  type: "mongo",
  modelName: "challenge",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_40.data.customerId,
    ...generateChallengeDates(
      moment("00:01", "HH:mm").subtract(4, "days"),
      moment("23:59", "HH:mm").subtract(4, "days")
    ),
    sources: {
      device: {
        steps: 75000,
      },
    },
    incomingData: {
      steps: 75000,
      meditation: 0,
    },
    levelSlotTemplateId: "DAILY_PASSIVE_001",
    isNewType: true,
    status: "passive",
    passive: true,
    yuCoinAwarded: 0,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          meditation: 0,
          steps: 75000,
        },
        yuCoinAwarded: 20,
        completed: moment().subtract(1, "day").toDate(),
        id: "YU_MILESTONE_DAILY_STEPS_0",
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_40_DAY3 = {
  type: "mongo",
  modelName: "challenge",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_40.data.customerId,
    ...generateChallengeDates(
      moment("00:01", "HH:mm").subtract(3, "days"),
      moment("23:59", "HH:mm").subtract(3, "days")
    ),
    sources: {
      device: {
        steps: 75000,
      },
    },
    incomingData: {
      steps: 75000,
      meditation: 0,
    },
    levelSlotTemplateId: "DAILY_PASSIVE_001",
    isNewType: true,
    status: "passive",
    passive: true,
    yuCoinAwarded: 0,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          meditation: 0,
          steps: 75000,
        },
        yuCoinAwarded: 20,
        completed: moment().subtract(1, "day").toDate(),
        id: "YU_MILESTONE_DAILY_STEPS_0",
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_40_DAY4 = {
  type: "mongo",
  modelName: "challenge",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_40.data.customerId,
    ...generateChallengeDates(
      moment("00:01", "HH:mm").subtract(2, "days"),
      moment("23:59", "HH:mm").subtract(2, "days")
    ),
    sources: {
      device: {
        steps: 75000,
      },
    },
    incomingData: {
      steps: 75000,
      meditation: 0,
    },
    levelSlotTemplateId: "DAILY_PASSIVE_001",
    isNewType: true,
    status: "passive",
    passive: true,
    yuCoinAwarded: 0,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          meditation: 0,
          steps: 75000,
        },
        yuCoinAwarded: 20,
        completed: moment().subtract(1, "day").toDate(),
        id: "YU_MILESTONE_DAILY_STEPS_0",
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_40_DAY5 = {
  type: "mongo",
  modelName: "challenge",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_40.data.customerId,
    ...generateChallengeDates(
      moment("00:01", "HH:mm").subtract(1, "days"),
      moment("23:59", "HH:mm").subtract(1, "days")
    ),
    sources: {
      device: {
        steps: 75000,
      },
    },
    incomingData: {
      steps: 75000,
      meditation: 0,
    },
    levelSlotTemplateId: "DAILY_PASSIVE_001",
    isNewType: true,
    status: "passive",
    passive: true,
    yuCoinAwarded: 0,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          meditation: 0,
          steps: 75000,
        },
        yuCoinAwarded: 20,
        completed: moment().subtract(1, "day").toDate(),
        id: "YU_MILESTONE_DAILY_STEPS_0",
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_42_A = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_42.data.customerId,
    ...generateChallengeDates(moment().subtract(1, "days")),
    isNewType: true,
    yuCoinAwarded: 10,
    XPAwarded: 0,
    rating: 3,
    incomingData: {
      steps: 305,
    },
    sources: {},
    level: 51,
    levelId: "YU_LEVEL_0051",
    levelSlotId: "YU_LEVEL_0051_1",
    levelSlotTemplateId: "SHORT_STROLL_001",
    milestoneTemplateId: "YU_MILESTONE_SS0006",
    subtype: "short stroll",
    status: "completed",
    passive: false,
    __v: 0,
    multiplierId: null,
  },
} as IDatabaseItem;

export const CHALLENGE_USER_42_B = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_42.data.customerId,
    ...generateChallengeDates(
      moment("00:01", "HH:mm").subtract(1, "days"),
      moment("23:59", "HH:mm").subtract(1, "days")
    ),
    isNewType: true,
    yuCoinAwarded: 120,
    rating: 3,
    incomingData: {
      steps: 4000,
    },
    sources: {},
    level: 51,
    levelId: "YU_LEVEL_0051",
    levelSlotId: "YU_LEVEL_0051_2",
    levelSlotTemplateId: "LONG_WALK_001",
    milestoneTemplateId: "YU_MILESTONE_SS0006",
    subtype: "long walk",
    status: "active",
    passive: false,
    __v: 0,
    multiplierId: null,
  },
} as IDatabaseItem;

export const CHALLENGE_USER_44 = {
  type: "mongo",
  modelName: "challenge",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_44.data.customerId,
    ...generateChallengeDates(
      moment("00:01", "HH:mm").subtract(5, "days"),
      moment("23:59", "HH:mm").subtract(5, "days")
    ),
    sources: {
      device: {
        steps: 32000,
      },
    },
    incomingData: {
      steps: 32000,
      meditation: 0,
    },
    levelSlotTemplateId: "DAILY_PASSIVE_001",
    isNewType: true,
    status: "passive",
    passive: true,
    yuCoinAwarded: 0,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          meditation: 0,
          steps: 32000,
        },
        yuCoinAwarded: 20,
        completed: moment().subtract(1, "day").toDate(),
        id: "YU_MILESTONE_DAILY_STEPS_0",
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_47_A = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_47.data.customerId,
    ...generateChallengeDates(
      moment().subtract(1, "days"),
      moment().subtract(1, "days").endOf("day")
    ),
    level: 2,
    status: "completed",
    levelSlotTemplateId: "DAILY_PASSIVE_001",
    passive: true,
    incomingData: {
      steps: 10000,
    },
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          steps: 10000,
        },
        yuCoinAwarded: 60,
        completed: moment().subtract(1, "day").toDate(),
        id: SHORT_STROLL_MILESTONE_1.data.id,
        isNewType: true,
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_47_B = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_47.data.customerId,
    ...generateChallengeDates(moment().subtract(1, "days")),
    incomingData: {
      meditation: 6000,
    },
    levelSlotTemplateId: "DAILY_PASSIVE_002",
    level: 3,
    status: "completed",
    passive: true,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        id: MEDITATION_MILESTONE_1.data.id,
        completed: moment().subtract(1, "days").toDate(),
        data: {
          meditation: 6000,
        },
        yuCoinAwarded: 60,
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_47_C = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_47.data.customerId,
    ...generateChallengeDates(moment().subtract(1, "days")),
    levelSlotTemplateId: "DAILY_PASSIVE_003",
    subtype: CYCLING_1.data.subtype,
    incomingData: {
      distance: 30000,
    },
    level: 4,
    status: "completed",
    passive: true,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        id: CYCLING_1.data.id,
        completed: moment().subtract(1, "day").toDate(),
        data: {
          distance: 30000,
        },
        yuCoinAwarded: 60,
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_48 = {
  type: "mongo",
  modelName: "challenge",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_48.data.customerId,
    ...generateChallengeDates(
      moment("00:01", "HH:mm").subtract(1, "days"),
      moment("23:59", "HH:mm").subtract(1, "days")
    ),
    sources: {
      device: {
        steps: 200,
      },
    },
    incomingData: {
      steps: 200,
      meditation: 0,
    },
    levelSlotTemplateId: "DAILY_PASSIVE_001",
    isNewType: true,
    status: "passive",
    passive: true,
    yuCoinAwarded: 0,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          meditation: 0,
          steps: 200,
        },
        yuCoinAwarded: 20,
        completed: moment().subtract(1, "day").toDate(),
        id: "YU_MILESTONE_DAILY_STEPS_0",
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_49 = {
  type: "mongo",
  modelName: "challenge",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_49.data.customerId,
    ...generateChallengeDates(
      moment("00:01", "HH:mm").subtract(1, "days"),
      moment("23:59", "HH:mm").subtract(1, "days")
    ),
    sources: {
      device: {
        steps: 190,
      },
    },
    incomingData: {
      steps: 190,
      meditation: 0,
    },
    levelSlotTemplateId: "DAILY_PASSIVE_001",
    isNewType: true,
    status: "passive",
    passive: true,
    yuCoinAwarded: 0,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          meditation: 0,
          steps: 190,
        },
        yuCoinAwarded: 20,
        completed: moment().subtract(1, "day").toDate(),
        id: "YU_MILESTONE_DAILY_STEPS_0",
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_50_A = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    userId: customer.CUSTOMER_50.data.customerId,
    _id: generateRandomMongoId(),
    ...generateChallengeDates(moment().subtract(4, "days")),
    level: 1,
    status: "completed",
    levelSlotTemplateId: "DAILY_PASSIVE_001",
    passive: true,
    incomingData: {
      steps: 6400,
    },
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          meditation: 0,
          steps: 6400,
        },
        yuCoinAwarded: 60,
        completed: moment().subtract(4, "day").toDate(),
        id: SHORT_STROLL_MILESTONE_1.data.id,
        isNewType: true,
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_50_B = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_50.data.customerId,
    ...generateChallengeDates(moment().subtract(3, "days")),
    level: 2,
    status: "completed",
    levelSlotTemplateId: "DAILY_PASSIVE_001",
    passive: true,
    incomingData: {
      steps: 6400,
    },
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          meditation: 0,
          steps: 6200,
        },
        yuCoinAwarded: 60,
        completed: moment().subtract(3, "day").toDate(),
        id: SHORT_STROLL_MILESTONE_1.data.id,
        isNewType: true,
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_50_C = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_50.data.customerId,
    ...generateChallengeDates(moment().subtract(1, "days")),
    levelSlotTemplateId: "DAILY_PASSIVE_003",
    subtype: CYCLING_1.data.subtype,
    incomingData: {
      distance: 4010,
    },
    level: 4,
    status: "completed",
    passive: true,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        id: CYCLING_1.data.id,
        completed: moment().subtract(1, "day").toDate(),
        data: {
          distance: 4010,
        },
        yuCoinAwarded: 60,
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_50_D = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_50.data.customerId,
    ...generateChallengeDates(moment().subtract(1, "days")),
    incomingData: {
      meditation: 1000,
    },
    levelSlotTemplateId: "DAILY_PASSIVE_002",
    level: 3,
    status: "completed",
    passive: true,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        id: MEDITATION_MILESTONE_1.data.id,
        completed: moment().subtract(1, "days").toDate(),
        data: {
          meditation: 1000,
        },
        yuCoinAwarded: 60,
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_51 = {
  type: "mongo",
  modelName: "challenge",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_51.data.customerId,
    ...generateChallengeDates(
      moment("00:01", "HH:mm").subtract(1, "days"),
      moment("23:59", "HH:mm").subtract(1, "days")
    ),
    sources: {
      device: {
        steps: 180,
      },
    },
    incomingData: {
      steps: 180,
      meditation: 0,
    },
    levelSlotTemplateId: "DAILY_PASSIVE_001",
    isNewType: true,
    status: "passive",
    passive: true,
    yuCoinAwarded: 0,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          meditation: 0,
          steps: 180,
        },
        yuCoinAwarded: 20,
        completed: moment().subtract(1, "day").toDate(),
        id: "YU_MILESTONE_DAILY_STEPS_0",
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_65_A = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_65.data.customerId,
    ...generateChallengeDates(
      moment().subtract(1, "days").startOf("day").add(1, "hour"),
      moment().subtract(1, "days").endOf("day")
    ),
    createdAt: moment().subtract(1, "days").startOf("day").toDate(),
    updatedAt: moment().subtract(1, "days").startOf("day").toDate(),
    levelSlotTemplateId: "DAILY_PASSIVE_003",
    status: "completed",
    sources: {
      garmin: {
        distance: 1000,
      },
      strava: {
        distance: 1000,
      },
      fitbit: {
        distance: 1000,
      },
      withings: {
        distance: 1000,
      },
    },
    passive: true,
    isNewType: true,
    subtype: CYCLING_1.data.subtype,
    incomingData: {
      distance: 3000,
    },
    level: 4,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        id: CYCLING_1.data.id,
        completed: moment().subtract(1, "day").toDate(),
        data: {
          distance: 3000,
        },
        yuCoinAwarded: 10,
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_65_B = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_65.data.customerId,
    ...generateChallengeDates(moment().subtract(2, "days")),
    createdAt: moment().subtract(2, "days").toDate(),
    updatedAt: moment().subtract(2, "days").toDate(),
    levelSlotTemplateId: "DAILY_PASSIVE_003",
    status: "completed",
    sources: {
      fitbit: {
        distance: 4000,
      },
    },
    passive: true,
    isNewType: true,
    subtype: CYCLING_1.data.subtype,
    incomingData: {
      distance: 4000,
    },
    level: 4,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        id: CYCLING_1.data.id,
        completed: moment().subtract(2, "day").toDate(),
        data: {
          distance: 4000,
        },
        yuCoinAwarded: 10,
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_65_C = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_65.data.customerId,
    ...generateChallengeDates(moment().subtract(3, "days")),
    createdAt: moment().subtract(3, "days").toDate(),
    updatedAt: moment().subtract(3, "days").toDate(),
    levelSlotTemplateId: "DAILY_PASSIVE_003",
    status: "completed",
    sources: {
      strava: {
        distance: 5000,
      },
      withings: {
        distance: 5000,
      },
    },
    passive: true,
    isNewType: true,
    subtype: CYCLING_1.data.subtype,
    incomingData: {
      distance: 5000,
    },
    level: 4,
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        id: CYCLING_1.data.id,
        completed: moment().subtract(3, "day").toDate(),
        data: {
          distance: 5000,
        },
        yuCoinAwarded: 10,
      },
    ],
  },
} as IDatabaseItem;

// we need this to not overwrite activityLastReceived date in users table
export const ONBOARDING_CHALLENGE_65_A = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_65.data.customerId,
    isNewType: true,
    yuCoinAwarded: 200,
    XPAwarded: 0,
    rating: 0,
    incomingData: {},
    sources: {},
    passive: true,
    levelSlotTemplateId: "MAIN_ONBOARDING_001",
    status: "completed",
    date: moment().format("YYYY-MM-DD").toString(),
    milestoneLog: [],
  },
} as IDatabaseItem;

export const CHALLENGE_73_A = {
  type: "mongo",
  modelName: "challenge",
  data: {
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_73.data.customerId,
    ...generateChallengeDates(moment().subtract(5, "hours")),
    createdAt: moment().subtract(6, "hours").toDate(),
    updatedAt: moment().subtract(6, "days").toDate(),
    levelSlotTemplateId: "DAILY_PASSIVE_003",
    status: "passive",
    yuCoinAwarded: 0,
    XPAwarded: 0,
    rating: 0,
    passive: true,
    incomingData: {
      steps: 0,
      distance: 7000,
      meditation: 0,
      contribution: 0,
    },
  },
} as IDatabaseItem;

export const CHALLENGE_USER_83 = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_83.data.customerId,
    ...generateChallengeDates(moment().subtract(6, "days")),
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
        completed: moment().subtract(6, "days").toDate(),
        id: SHORT_STROLL_MILESTONE_1.data.id,
      },
    ],
  },
} as IDatabaseItem;

export const CHALLENGE_USER_84 = {
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_TEMPLATE.data,
    _id: generateRandomMongoId(),
    userId: customer.CUSTOMER_84.data.customerId,
    subtype: "sudoku",
    level: 152,
    incomingData: {
      duration: 400,
    },
    startTime: moment().toDate(),
    startDateTime: moment().toDate(),
    endDateTime: moment().toDate(),
    date: moment().format("YYYY-MM-DD"),
    milestoneLog: [
      {
        completionData: [],
        _id: generateRandomMongoId(),
        data: {
          duration: 400,
        },
        yuCoinAwarded: 20,
        completed: moment().format("YYYY-MM-DD"),
        id: SUDOKU_MILESTONE.data.id,
      },
    ],
  },
} as IDatabaseItem;

const CHALLENGE_USER_139_DAILY_DEFAULT = {
  ...CHALLENGE_TEMPLATE.data,
  userId: customer.CUSTOMER_139.data.customerId,
  status: "completed",
  levelSlotTemplateId: "DAILY_PASSIVE_001",
  passive: true,
  incomingData: {
    steps: 10000,
  },
  milestoneLog: [
    {
      completionData: [],
      _id: generateRandomMongoId(),
      data: {
        steps: 10000,
      },
      yuCoinAwarded: 60,
      completed: moment().subtract(1, "day").toDate(),
      id: SHORT_STROLL_MILESTONE_1.data.id,
      isNewType: true,
    },
  ],
};

const fiveDaysAgo = moment().utc().subtract(5, "days");

const DAYS_ARRAY = Array.from({ length: 30 }, (_, index) => ({
  startTime: moment(fiveDaysAgo).subtract(index, "days").startOf("day").toDate(),
  date: moment(fiveDaysAgo).subtract(index, "days").startOf("day").format("YYYY-MM-DD"),
  startDateTime: moment(fiveDaysAgo).subtract(index, "days").startOf("day").format(),
  endDateTime: moment(fiveDaysAgo).subtract(index, "days").endOf("day").toDate(),
  milestoneLog: [
    {
      completed: moment(fiveDaysAgo).subtract(index, "days").startOf("day").toDate(),
    },
  ],
}));

const USER_139_30_DAY_STEPS = Array.from({ length: 30 }, (_, index) => ({
  type: "mongo",
  modelName: "challenge",
  data: {
    ...CHALLENGE_USER_139_DAILY_DEFAULT,
    _id: generateRandomMongoId(),
    level: index + 1,
    startTime: DAYS_ARRAY[index].startTime,
    date: DAYS_ARRAY[index].date,
    startDateTime: DAYS_ARRAY[index].startDateTime,
    endDateTime: DAYS_ARRAY[index].endDateTime,
    milestoneLog: [
      {
        ...CHALLENGE_USER_139_DAILY_DEFAULT.milestoneLog[0],
        completed: DAYS_ARRAY[index].milestoneLog[0].completed,
      },
    ],
  },
}));

const CHALLENGE_USER_139 = {};

for (let i = 0; i < 30; i++) {
  CHALLENGE_USER_139[`CHALLENGE_USER_139_${i + 1}`] = USER_139_30_DAY_STEPS[i];
}

export { CHALLENGE_USER_139 };
