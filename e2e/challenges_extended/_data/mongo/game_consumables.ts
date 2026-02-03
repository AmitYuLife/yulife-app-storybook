import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import {
  CUSTOMER_YUNIVERSAL_BOOST,
  CUSTOMER_CONSUMABLE_BOOST,
  CUSTOMER_MIXED_CONSUMABLES,
} from "../postgres/customers";
import moment from "moment";

const type = "mongo";
const modelName = "game_consumables";

export const GAME_CONSUMABLE_YUNIVERSAL_USER_CHALLENGE_BOOST = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: CUSTOMER_YUNIVERSAL_BOOST.customer.data.customerId,
    options: {
      type: "ChallengeBoost",
      amount: 10,
      multiple: 1.5,
      startTimeMarker: "immediate",
      endTimeMarker: "endOfDay",
      endTimeOffset: {
        seconds: 0,
      },
      levelSlotTemplateIds: ["LONG_WALK_001"],
    },
    createdAt: {
      $date: moment().format("YYYY-MM-DD"),
    },
    updatedAt: {
      $date: moment().format("YYYY-MM-DD"),
    },
    __v: 0,
  },
} as IDatabaseItem;

export const GAME_CONSUMABLE_ACTIVE_CHALLENGE_BOOST = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: CUSTOMER_CONSUMABLE_BOOST.customer.data.customerId,
    options: {
      type: "ChallengeBoost",
      amount: 10,
      multiple: 1.5,
      startTimeMarker: "immediate",
      endTimeMarker: "endOfDay",
      endTimeOffset: {
        seconds: 0,
      },
      levelSlotTemplateIds: ["LONG_WALK_001"],
    },
    consumedAt: moment().subtract(1, "hour").format("YYYY-MM-DDTHH:mm:ssZ"),
    activatedUntil: moment().endOf("day").format("YYYY-MM-DDTHH:mm:ssZ"),
    createdAt: {
      $date: moment().subtract(1, "day").format("YYYY-MM-DD"),
    },
    updatedAt: {
      $date: moment().format("YYYY-MM-DD"),
    },
    __v: 0,
  },
} as IDatabaseItem;

export const GAME_CONSUMABLE_DISABLED_CHALLENGE_BOOST = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: CUSTOMER_CONSUMABLE_BOOST.customer.data.customerId,
    options: {
      type: "ChallengeBoost",
      amount: 5,
      multiple: 1.25,
      startTimeMarker: "immediate",
      endTimeMarker: "endOfDay",
      endTimeOffset: {
        seconds: 0,
      },
      levelSlotTemplateIds: ["BRISK_WALK_001"],
    },
    createdAt: {
      $date: moment().format("YYYY-MM-DD"),
    },
    updatedAt: {
      $date: moment().format("YYYY-MM-DD"),
    },
    __v: 0,
  },
} as IDatabaseItem;

export const GAME_CONSUMABLE_MIXED_CHALLENGE_BOOST = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: CUSTOMER_MIXED_CONSUMABLES.customer.data.customerId,
    options: {
      type: "ChallengeBoost",
      amount: 10,
      multiple: 1.5,
      startTimeMarker: "immediate",
      endTimeMarker: "endOfDay",
      endTimeOffset: {
        seconds: 0,
      },
      levelSlotTemplateIds: ["LONG_WALK_001"],
    },
    createdAt: {
      $date: moment().format("YYYY-MM-DD"),
    },
    updatedAt: {
      $date: moment().format("YYYY-MM-DD"),
    },
    __v: 0,
  },
} as IDatabaseItem;

export const GAME_CONSUMABLE_MIXED_EXTRA_CHALLENGE = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: CUSTOMER_MIXED_CONSUMABLES.customer.data.customerId,
    options: {
      type: "PowerUp",
      startTimeMarker: "immediate",
      endTimeMarker: "endOfDay",
      endTimeOffset: {
        seconds: 0,
      },
      powerUpType: "extra_challenge",
      levelSlotTemplateIds: ["BRISK_WALK_001"],
      value: 1,
    },
    createdAt: {
      $date: moment().format("YYYY-MM-DD"),
    },
    updatedAt: {
      $date: moment().format("YYYY-MM-DD"),
    },
    __v: 0,
  },
} as IDatabaseItem;
