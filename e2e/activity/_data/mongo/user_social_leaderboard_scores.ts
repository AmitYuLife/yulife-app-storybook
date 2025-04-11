import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { SUDOKU_ANSWER_71 } from "./game_sudoku_answer";
import {
  USER_16,
  USER_17,
  USER_18,
  USER_19,
  USER_20,
  USER_21,
  USER_27,
  USER_28,
  USER_39,
  USER_40,
  USER_44,
  USER_45,
  USER_46,
  USER_47,
  USER_48,
  USER_49,
  USER_50,
  USER_51,
  USER_71,
  USER_73,
  USER_90,
  USER_139,
  USER_5,
} from "./users";
import { CUSTOMER_84 } from "../postgres/customers";
import {
  SOCIAL_GROUP_LEADERBOARD_1,
  SOCIAL_GROUP_LEADERBOARD_2_STEPS,
  SOCIAL_GROUP_LEADERBOARD_C4_STEPS,
  SOCIAL_GROUP_LEADERBOARD_5_RULE_STEPS,
  SOCIAL_GROUP_LEADERBOARD_5_STEPS,
  SOCIAL_GROUP_LEADERBOARD_5_TAG_STEPS,
  SOCIAL_GROUP_LEADERBOARD_ACTIVE_STEPS,
  SOCIAL_GROUP_LEADERBOARD_C1_STEPS,
  SOCIAL_GROUP_LEADERBOARD_C2_STEPS,
  SOCIAL_GROUP_LEADERBOARD_C3_STEPS,
  SOCIAL_GROUP_LEADERBOARD_CONSENT_STEPS,
  SOCIAL_GROUP_LEADERBOARD_BA3_STEPS,
  SOCIAL_GROUP_LEADERBOARD_U1_STEPS,
} from "./social_group_leaderboards";

const globalLeaversStepsId = "55366dfe40f828ef2775a91c";
const globalLeaversSudokuId = "5536849a6ce716c125256186";

export const USER_SOCIAL_LEADERBOARD_SCORE_71 = {
  type: "mongo",
  modelName: "user_social_leaderboard_scores",
  data: {
    _id: generateRandomMongoId(),
    date: moment().format("YYYY-MM-DD"),
    difficultyLevel: 1,
    leaderboardConfigId: "SUDOKU_DAILY",
    userId: USER_71.data.userId,
    value: SUDOKU_ANSWER_71.data.baseTime,
    activeLeaderboards: [SOCIAL_GROUP_LEADERBOARD_1.data._id],
  },
} as IDatabaseItem;

// Daily Step Scores for Users with Enrolments

export const USER_18_STEPS_SCORE = {
  type: "mongo",
  modelName: "user_social_leaderboard_scores",
  data: {
    _id: generateRandomMongoId(),
    leaderboardConfigId: "STEPS_30_DAYS",
    userId: USER_18.data.userId,
    value: 800,
    activeLeaderboards: [
      SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id,
      SOCIAL_GROUP_LEADERBOARD_C4_STEPS.data._id,
    ],
  },
};

export const USER_16_STEPS_SCORE = {
  type: "mongo",
  modelName: "user_social_leaderboard_scores",
  data: {
    _id: generateRandomMongoId(),
    leaderboardConfigId: "STEPS_30_DAYS",
    userId: USER_16.data.userId,
    value: 60,
  },
};

export const USER_17_STEPS_SCORE = {
  type: "mongo",
  modelName: "user_social_leaderboard_scores",
  data: {
    _id: generateRandomMongoId(),
    leaderboardConfigId: "STEPS_30_DAYS",
    userId: USER_17.data.userId,
    value: 250,
    activeLeaderboards: [
      SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id,
      SOCIAL_GROUP_LEADERBOARD_C4_STEPS.data._id,
    ],
  },
};

export const USER_19_STEPS_SCORE = {
  type: "mongo",
  modelName: "user_social_leaderboard_scores",
  data: {
    _id: generateRandomMongoId(),
    leaderboardConfigId: "STEPS_30_DAYS",
    userId: USER_19.data.userId,
    value: 50,
    activeLeaderboards: [
      SOCIAL_GROUP_LEADERBOARD_C2_STEPS.data._id,
      SOCIAL_GROUP_LEADERBOARD_2_STEPS.data._id,
      SOCIAL_GROUP_LEADERBOARD_U1_STEPS.data._id,
    ],
  },
};

export const USER_20_STEPS_SCORE = {
  type: "mongo",
  modelName: "user_social_leaderboard_scores",
  data: {
    _id: generateRandomMongoId(),
    leaderboardConfigId: "STEPS_30_DAYS",
    userId: USER_20.data.userId,
    value: 3125,
    activeLeaderboards: [
      SOCIAL_GROUP_LEADERBOARD_C2_STEPS.data._id,
      SOCIAL_GROUP_LEADERBOARD_2_STEPS.data._id,
      SOCIAL_GROUP_LEADERBOARD_U1_STEPS.data._id,
    ],
  },
};

export const USER_21_STEPS_SCORE = {
  type: "mongo",
  modelName: "user_social_leaderboard_scores",
  data: {
    _id: generateRandomMongoId(),
    leaderboardConfigId: "STEPS_30_DAYS",
    userId: USER_21.data.userId,
    value: 400001,
  },
};

export const USER_27_STEPS_SCORE = {
  type: "mongo",
  modelName: "user_social_leaderboard_scores",
  data: {
    _id: generateRandomMongoId(),
    leaderboardConfigId: "STEPS_30_DAYS",
    userId: USER_27.data.userId,
    value: 0,
    activeLeaderboards: [SOCIAL_GROUP_LEADERBOARD_C3_STEPS.data._id],
  },
};

export const USER_28_STEPS_SCORE = {
  type: "mongo",
  modelName: "user_social_leaderboard_scores",
  data: {
    _id: generateRandomMongoId(),
    leaderboardConfigId: "STEPS_30_DAYS",
    userId: USER_28.data.userId,
    value: 200,
    activeLeaderboards: [SOCIAL_GROUP_LEADERBOARD_C3_STEPS.data._id],
  },
};

export const USER_39_STEPS_SCORE = {
  type: "mongo",
  modelName: "user_social_leaderboard_scores",
  data: {
    _id: generateRandomMongoId(),
    leaderboardConfigId: "STEPS_30_DAYS",
    userId: USER_39.data.userId,
    value: 75000,
    activeLeaderboards: [
      SOCIAL_GROUP_LEADERBOARD_5_STEPS.data._id,
      SOCIAL_GROUP_LEADERBOARD_5_RULE_STEPS.data._id,
      SOCIAL_GROUP_LEADERBOARD_5_TAG_STEPS.data._id,
      SOCIAL_GROUP_LEADERBOARD_BA3_STEPS.data._id,
      SOCIAL_GROUP_LEADERBOARD_U1_STEPS.data._id,
    ],
  },
};

export const USER_40_STEPS_SCORE = {
  type: "mongo",
  modelName: "user_social_leaderboard_scores",
  data: {
    _id: generateRandomMongoId(),
    leaderboardConfigId: "STEPS_30_DAYS",
    userId: USER_40.data.userId,
    value: 375000,
    activeLeaderboards: [
      SOCIAL_GROUP_LEADERBOARD_C2_STEPS.data._id,
      SOCIAL_GROUP_LEADERBOARD_2_STEPS.data._id,
      SOCIAL_GROUP_LEADERBOARD_U1_STEPS.data._id,
    ],
  },
};

export const USER_44_STEPS_SCORE = {
  type: "mongo",
  modelName: "user_social_leaderboard_scores",
  data: {
    _id: generateRandomMongoId(),
    leaderboardConfigId: "STEPS_30_DAYS",
    userId: USER_44.data.userId,
    value: 32000,
    activeLeaderboards: [SOCIAL_GROUP_LEADERBOARD_5_STEPS.data._id],
  },
};

export const USER_45_STEPS_SCORE = {
  type: "mongo",
  modelName: "user_social_leaderboard_scores",
  data: {
    _id: generateRandomMongoId(),
    leaderboardConfigId: "STEPS_30_DAYS",
    userId: USER_45.data.userId,
    value: 150,
    activeLeaderboards: [SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id],
  },
};

export const USER_46_STEPS_SCORE = {
  type: "mongo",
  modelName: "user_social_leaderboard_scores",
  data: {
    _id: generateRandomMongoId(),
    leaderboardConfigId: "STEPS_30_DAYS",
    userId: USER_46.data.userId,
    value: 100,
    activeLeaderboards: [SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id],
  },
};

export const USER_47_STEPS_SCORE = {
  type: "mongo",
  modelName: "user_social_leaderboard_scores",
  data: {
    _id: generateRandomMongoId(),
    leaderboardConfigId: "STEPS_30_DAYS",
    userId: USER_47.data.userId,
    value: 10000,
    activeLeaderboards: [
      SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id,
      SOCIAL_GROUP_LEADERBOARD_C4_STEPS.data._id,
    ],
  },
};

export const USER_48_STEPS_SCORE = {
  type: "mongo",
  modelName: "user_social_leaderboard_scores",
  data: {
    _id: generateRandomMongoId(),
    leaderboardConfigId: "STEPS_30_DAYS",
    userId: USER_48.data.userId,
    value: 200,
    activeLeaderboards: [SOCIAL_GROUP_LEADERBOARD_C4_STEPS.data._id],
  },
};

export const USER_49_STEPS_SCORE = {
  type: "mongo",
  modelName: "user_social_leaderboard_scores",
  data: {
    _id: generateRandomMongoId(),
    leaderboardConfigId: "STEPS_30_DAYS",
    userId: USER_49.data.userId,
    value: 190,
    activeLeaderboards: [SOCIAL_GROUP_LEADERBOARD_C4_STEPS.data._id],
  },
};

export const USER_50_STEPS_SCORE = {
  type: "mongo",
  modelName: "user_social_leaderboard_scores",
  data: {
    _id: generateRandomMongoId(),
    leaderboardConfigId: "STEPS_30_DAYS",
    userId: USER_50.data.userId,
    value: 12800,
    activeLeaderboards: [
      SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id,
      SOCIAL_GROUP_LEADERBOARD_C4_STEPS.data._id,
    ],
  },
};

export const USER_51_STEPS_SCORE = {
  type: "mongo",
  modelName: "user_social_leaderboard_scores",
  data: {
    _id: generateRandomMongoId(),
    leaderboardConfigId: "STEPS_30_DAYS",
    userId: USER_51.data.userId,
    value: 180,
    activeLeaderboards: [SOCIAL_GROUP_LEADERBOARD_C4_STEPS.data._id],
  },
};

export const USER_73_STEPS_SCORE = {
  type: "mongo",
  modelName: "user_social_leaderboard_scores",
  data: {
    _id: generateRandomMongoId(),
    leaderboardConfigId: "STEPS_30_DAYS",
    userId: USER_73.data.userId,
    value: 25000,
    activeLeaderboards: [
      SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id,
      SOCIAL_GROUP_LEADERBOARD_BA3_STEPS.data._id,
    ],
  },
};

export const USER_84_STEPS_SCORE = {
  type: "mongo",
  modelName: "user_social_leaderboard_scores",
  data: {
    _id: generateRandomMongoId(),
    leaderboardConfigId: "STEPS_30_DAYS",
    userId: CUSTOMER_84.data.userId,
    value: 0,
  },
};

export const USER_90_STEPS_SCORE = {
  type: "mongo",
  modelName: "user_social_leaderboard_scores",
  data: {
    _id: generateRandomMongoId(),
    leaderboardConfigId: "STEPS_30_DAYS",
    userId: USER_90.data.userId,
    value: 0,
    activeLeaderboards: [
      SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id,
      SOCIAL_GROUP_LEADERBOARD_C4_STEPS.data._id,
    ],
  },
};

export const USER_139_STEPS_SCORE = {
  type: "mongo",
  modelName: "user_social_leaderboard_scores",
  data: {
    _id: generateRandomMongoId(),
    leaderboardConfigId: "STEPS_30_DAYS",
    userId: USER_139.data.userId,
    value: 250,
    activeLeaderboards: [
      SOCIAL_GROUP_LEADERBOARD_ACTIVE_STEPS.data._id,
      SOCIAL_GROUP_LEADERBOARD_CONSENT_STEPS.data._id,
    ],
  },
};
