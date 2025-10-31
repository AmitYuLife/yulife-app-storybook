import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { USER_40 } from "./users";
import { CUSTOMER_7, CUSTOMER_84 } from "../postgres/customers";
import {
  CHALLENGE_USER_7_A,
  CHALLENGE_USER_7_B,
  CHALLENGE_USER_7_C,
  CHALLENGE_USER_7_D,
  CHALLENGE_USER_84,
} from "./challenge";
import moment from "moment";

export const CHALLENGE_HISTORY_7 = {
  type: "mongo",
  modelName: "user_level_history",
  data: {
    _id: generateRandomMongoId(),
    userId: CUSTOMER_7.data.customerId,
    firstLevel: 1,
    lastLevel: 4,
    yuniversalMap: 0,
    history: {
      1: {
        completedOn: moment().subtract(4, "days"),
        maxRating: 3,
        challenges: {
          SHORT_STROLL_001: [
            {
              challengeId: CHALLENGE_USER_7_A.data._id,
              rating: 3,
              yuCoinAwarded: 60,
            },
          ],
        },
      },
      2: {
        completedOn: moment().subtract(3, "days"),
        maxRating: 3,
        challenges: {
          SHORT_STROLL_001: [
            {
              challengeId: CHALLENGE_USER_7_B.data._id,
              rating: 3,
              yuCoinAwarded: 20,
            },
          ],
        },
      },
      3: {
        completedOn: moment().subtract(2, "days"),
        maxRating: 3,
        challenges: {
          MEDITATION_001: [
            {
              challengeId: CHALLENGE_USER_7_C.data._id,
              rating: 3,
              yuCoinAwarded: 60,
            },
          ],
        },
      },
      4: {
        completedOn: moment().subtract(1, "day"),
        maxRating: 3,
        challenges: {
          LONG_WALK_001: [
            {
              challengeId: CHALLENGE_USER_7_D.data._id,
              rating: 3,
              yuCoinAwarded: 60,
            },
          ],
        },
      },
    },
  },
} as IDatabaseItem;

export const CHALLENGE_HISTORY_40 = {
  type: "mongo",
  modelName: "user_level_history",
  data: {
    _id: generateRandomMongoId(),
    userId: USER_40.data.userId,
  },
} as IDatabaseItem;

export const CHALLENGE_HISTORY_84 = {
  type: "mongo",
  modelName: "user_level_history",
  data: {
    _id: generateRandomMongoId(),
    userId: CUSTOMER_84.data.customerId,
    challengesForEveryLevel: {
      152: {
        maxRating: 3,
        challengesForEveryLevelSlot: {
          SUDOKU_001: [
            {
              challengeId: CHALLENGE_USER_84.data._id,
              rating: 3,
              yuCoinAwarded: 60,
            },
          ],
        },
      },
    },
  },
} as IDatabaseItem;
