import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_CARMY } from "../postgres/customers";
import moment from "moment";

const type = "mongo";
const modelName = "game_consumables";

export const GAME_CONSUMABLE_USER_CARMY_BRISK_WALK = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: CUSTOMER_CARMY.data.customerId,
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

export const GAME_CONSUMABLE_USER_CARMY_CHALLENGES_BOOST = {
  type,
  modelName,
  data: {
    _id: generateRandomMongoId(),
    userId: CUSTOMER_CARMY.data.customerId,
    options: {
      type: "ChallengeBoost",
      amount: 10,
      multiple: 1,
      startTimeMarker: "immediate",
      endTimeMarker: "endOfDay",
      endTimeOffset: {
        seconds: 0,
      },
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
