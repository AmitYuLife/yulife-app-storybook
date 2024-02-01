import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import moment = require('moment');
import { GOALS_2, GOALS_3, GOALS_4, GOALS_5 } from "./goals";
import { GOAL_TEAM_1, GOAL_TEAM_10_GHI_REWARDS, GOAL_TEAM_11_GHI_REWARDS, GOAL_TEAM_12_GHI_REWARDS, GOAL_TEAM_13_GHI_LEAVER, GOAL_TEAM_14, GOAL_TEAM_15, GOAL_TEAM_16_GHI_REWARDS, GOAL_TEAM_3, GOAL_TEAM_4, GOAL_TEAM_5, GOAL_TEAM_6_GHI_REWARDS, GOAL_TEAM_7_GHI_REWARDS, GOAL_TEAM_8_GHI_REWARDS, GOAL_TEAM_9_GHI_REWARDS } from "./goal_team";
import { CUSTOMER_116_GHI_REWARDS, CUSTOMER_117_GHI_REWARDS, CUSTOMER_118_GHI_REWARDS, CUSTOMER_119_GHI_REWARDS, CUSTOMER_120_GHI_REWARDS, CUSTOMER_121_GHI_REWARDS, CUSTOMER_127_GHI_REWARDS, CUSTOMER_130_GHI_LEAVER, CUSTOMER_131_GHI_REWARDS, CUSTOMER_133_GHI_FUTURE, CUSTOMER_134_GHI_REWARDS, CUSTOMER_52, CUSTOMER_71, CUSTOMER_72, CUSTOMER_81 } from "../postgres/customers";
import { GOAL_PRODUCTS_1, GOAL_PRODUCTS_2 } from "./goal_products";
import * as grm from "./goal_reward_milestones";
import { CPE_116_GHI_REWARDS, CPE_117_GHI_REWARDS, CPE_118_GHI_REWARDS, CPE_119_GHI_REWARDS, CPE_120_GHI_REWARDS, CPE_121_GHI_REWARDS, CPE_127_GHI_REWARDS, CPE_130_GHI_LEAVER, CPE_131_GHI_REWARDS, CPE_133_GHI_FUTURE, CPE_134_GHI_REWARDS, CPE_134_GHI_REWARDS_2 } from "../postgres/customer_product_entity";


export const GOAL_PARTICIPATION_1 = {
    type: "mongo",
    modelName: "goal_participation",
    data:{
        status: "active",
        typesToTrack: [
          "user_inspected"
        ],
        synchronousProgress: true,
        userId: CUSTOMER_52.data.customerId,
        goal: GOALS_2.data._id,
        parentType: "goals",
        team: GOAL_TEAM_1.data._id,
        startDateTime: moment().subtract(1, "day").format("YYYY-MM-DDTHH:mm:ss"),
        endDateTime: moment().add(24, "days").format("YYYY-MM-DDTHH:mm:ss"),
        trackingEndDateTime: moment().add(25, "days").format("YYYY-MM-DDTHH:mm:ss"),
        progressSyncedAt: moment(),
      }
} as IDatabaseItem

export const GOAL_PARTICIPATION_3 = {
  type: "mongo",
  modelName: "goal_participation",
  data:{
      status: "active",
      typesToTrack: [
        "passive_challenge_cycling"
      ],
      synchronousProgress: true,
      userId: CUSTOMER_71.data.customerId,
      goal: GOALS_3.data._id,
      parentType: "goals",
      team: GOAL_TEAM_3.data._id,
      startDateTime: moment().format("YYYY-MM-DDTHH:mm:ss"),
      endDateTime: moment().add(7, "days").format("YYYY-MM-DDTHH:mm:ss"),
      trackingEndDateTime: moment().add(8, "days").format("YYYY-MM-DDTHH:mm:ss"),
      progressSyncedAt: moment(),
      participationId: null
    }
} as IDatabaseItem

export const GOAL_PARTICIPATION_4 = {
  type: "mongo",
  modelName: "goal_participation",
  data:{
      status: "active",
      typesToTrack: [
        "active_challenge_three_stars"
      ],
      synchronousProgress: true,
      userId: CUSTOMER_72.data.customerId,
      goal: GOALS_4.data._id,
      parentType: "goals",
      team: GOAL_TEAM_4.data._id,
      startDateTime: moment().format("YYYY-MM-DDTHH:mm:ss"),
      endDateTime: moment().add(7, "days").format("YYYY-MM-DDTHH:mm:ss"),
      trackingEndDateTime: moment().add(8, "days").format("YYYY-MM-DDTHH:mm:ss"),
      progressSyncedAt: moment(),
      participationId: null
    }
} as IDatabaseItem

export const GOAL_PARTICIPATION_5_GHI_REWARDS = {
  type: "mongo",
  modelName: "goal_participation",
  data:{
      _id: generateRandomMongoId(),
      status: "active",
      typesToTrack: [
        "user_levelled_up"
      ],
      autoClaimRewards: true,
      customerProductId: CPE_116_GHI_REWARDS.data.customer_product_id,
      userId: CUSTOMER_116_GHI_REWARDS.data.customerId,
      goal: GOAL_PRODUCTS_1.data._id,
      parentType: "goal_products",
      team: GOAL_TEAM_6_GHI_REWARDS.data._id,
      iterationId: "1",
      startDateTime: moment().subtract(1, "d").format("YYYY-MM-DD"),
      joinGoalTime: moment().subtract(1, "d").format("YYYY-MM-DD"),
      endDateTime: moment().add(7, "days").format("YYYY-MM-DD"),
      endDate: moment().add(7, "days").format("YYYY-MM-DD"),
      trackingEndDateTime: moment().add(7, "days").format("YYYY-MM-DD"),
      disableTransactions: true,
      progressSyncedAt: moment(),
      rewardEligibility: [
        {
          milestone: grm.GOAL_REWARD_MILESTONE_15_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_16_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_17_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_18_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_19_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_20_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_21_GHI_REWARDS.data._id,
          isEligible: true
        },
      ],
      completed: {
        user_levelled_up: 4
      }
    },
} as IDatabaseItem

export const GOAL_PARTICIPATION_6_GHI_REWARDS = {
  type: "mongo",
  modelName: "goal_participation",
  data:{
      _id: generateRandomMongoId(),
      status: "active",
      typesToTrack: [
        "user_levelled_up"
      ],
      autoClaimRewards: true,
      customerProductId: CPE_117_GHI_REWARDS.data.customer_product_id,
      userId: CUSTOMER_117_GHI_REWARDS.data.customerId,
      goal: GOAL_PRODUCTS_1.data._id,
      parentType: "goal_products",
      team: GOAL_TEAM_7_GHI_REWARDS.data._id,
      iterationId: "1",
      startDateTime: moment().subtract(1, "d").format("YYYY-MM-DD"),
      joinGoalTime: moment().subtract(1, "d").format("YYYY-MM-DD"),
      endDateTime: moment().add(7, "days").format("YYYY-MM-DD"),
      endDate: moment().add(7, "days").format("YYYY-MM-DD"),
      trackingEndDateTime: moment().add(7, "days").format("YYYY-MM-DD"),
      disableTransactions: true,
      progressSyncedAt: moment(),
      rewardEligibility: [
        {
          milestone: grm.GOAL_REWARD_MILESTONE_15_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_16_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_17_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_18_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_19_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_20_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_21_GHI_REWARDS.data._id,
          isEligible: true
        },
      ],
      completed: {
        user_levelled_up: 9
      }
    },
} as IDatabaseItem

export const GOAL_PARTICIPATION_7_GHI_REWARDS = {
  type: "mongo",
  modelName: "goal_participation",
  data:{
      _id: generateRandomMongoId(),
      status: "active",
      typesToTrack: [
        "user_levelled_up"
      ],
      autoClaimRewards: true,
      customerProductId: CPE_118_GHI_REWARDS.data.customer_product_id,
      userId: CUSTOMER_118_GHI_REWARDS.data.customerId,
      goal: GOAL_PRODUCTS_1.data._id,
      parentType: "goal_products",
      team: GOAL_TEAM_8_GHI_REWARDS.data._id,
      iterationId: "1",
      startDateTime: moment().subtract(1, "d").format("YYYY-MM-DD"),
      joinGoalTime: moment().subtract(1, "d").format("YYYY-MM-DD"),
      endDateTime: moment().add(7, "days").format("YYYY-MM-DD"),
      endDate: moment().add(7, "days").format("YYYY-MM-DD"),
      trackingEndDateTime: moment().add(7, "days").format("YYYY-MM-DD"),
      disableTransactions: true,
      progressSyncedAt: moment(),
      rewardEligibility: [
        {
          milestone: grm.GOAL_REWARD_MILESTONE_15_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_16_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_17_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_18_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_19_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_20_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_21_GHI_REWARDS.data._id,
          isEligible: true
        },
      ],
      completed: {
        user_levelled_up: 49
      }
    },
} as IDatabaseItem

export const GOAL_PARTICIPATION_8_GHI_REWARDS = {
  type: "mongo",
  modelName: "goal_participation",
  data:{
      _id: generateRandomMongoId(),
      status: "active",
      typesToTrack: [
        "user_levelled_up"
      ],
      autoClaimRewards: true,
      customerProductId: CPE_119_GHI_REWARDS.data.customer_product_id,
      userId: CUSTOMER_119_GHI_REWARDS.data.customerId,
      goal: GOAL_PRODUCTS_1.data._id,
      parentType: "goal_products",
      team: GOAL_TEAM_9_GHI_REWARDS.data._id,
      iterationId: "1",
      startDateTime: moment().subtract(1, "d").format("YYYY-MM-DD"),
      joinGoalTime: moment().subtract(1, "d").format("YYYY-MM-DD"),
      endDateTime: moment().add(7, "days").format("YYYY-MM-DD"),
      endDate: moment().add(7, "days").format("YYYY-MM-DD"),
      trackingEndDateTime: moment().add(7, "days").format("YYYY-MM-DD"),
      disableTransactions: true,
      progressSyncedAt: moment(),
      rewardEligibility: [
        {
          milestone: grm.GOAL_REWARD_MILESTONE_15_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_16_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_17_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_18_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_19_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_20_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_21_GHI_REWARDS.data._id,
          isEligible: true
        },
      ],
      completed: {
        user_levelled_up: 99
      }
    },
} as IDatabaseItem

export const GOAL_PARTICIPATION_9_GHI_REWARDS = {
  type: "mongo",
  modelName: "goal_participation",
  data:{
      _id: generateRandomMongoId(),
      status: "active",
      typesToTrack: [
        "user_levelled_up"
      ],
      autoClaimRewards: true,
      customerProductId: CPE_120_GHI_REWARDS.data.customer_product_id,
      userId: CUSTOMER_120_GHI_REWARDS.data.customerId,
      goal: GOAL_PRODUCTS_1.data._id,
      parentType: "goal_products",
      team: GOAL_TEAM_10_GHI_REWARDS.data._id,
      iterationId: "1",
      startDateTime: moment().subtract(1, "d").format("YYYY-MM-DD"),
      joinGoalTime: moment().subtract(1, "d").format("YYYY-MM-DD"),
      endDateTime: moment().add(7, "days").format("YYYY-MM-DD"),
      endDate: moment().add(7, "days").format("YYYY-MM-DD"),
      trackingEndDateTime: moment().add(7, "days").format("YYYY-MM-DD"),
      disableTransactions: true,
      progressSyncedAt: moment(),
      rewardEligibility: [
        {
          milestone: grm.GOAL_REWARD_MILESTONE_15_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_16_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_17_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_18_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_19_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_20_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_21_GHI_REWARDS.data._id,
          isEligible: true
        },
      ],
      completed: {
        user_levelled_up: 149
      }
    },
} as IDatabaseItem

export const GOAL_PARTICIPATION_10_GHI_REWARDS = {
  type: "mongo",
  modelName: "goal_participation",
  data:{
      _id: generateRandomMongoId(),
      status: "active",
      typesToTrack: [
        "user_levelled_up"
      ],
      autoClaimRewards: true,
      customerProductId: CPE_121_GHI_REWARDS.data.customer_product_id,
      userId: CUSTOMER_121_GHI_REWARDS.data.customerId,
      goal: GOAL_PRODUCTS_1.data._id,
      parentType: "goal_products",
      team: GOAL_TEAM_11_GHI_REWARDS.data._id,
      iterationId: "1",
      startDateTime: moment().subtract(1, "d").format("YYYY-MM-DD"),
      joinGoalTime: moment().subtract(1, "d").format("YYYY-MM-DD"),
      endDateTime: moment().add(7, "days").format("YYYY-MM-DD"),
      endDate: moment().add(7, "days").format("YYYY-MM-DD"),
      trackingEndDateTime: moment().add(7, "days").format("YYYY-MM-DD"),
      disableTransactions: true,
      progressSyncedAt: moment(),
      rewardEligibility: [
        {
          milestone: grm.GOAL_REWARD_MILESTONE_15_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_16_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_17_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_18_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_19_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_20_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_21_GHI_REWARDS.data._id,
          isEligible: true
        },
      ],
      completed: {
        user_levelled_up: 199
      }
    },
} as IDatabaseItem

export const GOAL_PARTICIPATION_11_GHI_REWARDS = {
  type: "mongo",
  modelName: "goal_participation",
  data:{
      _id: generateRandomMongoId(),
      status: "active",
      typesToTrack: [
        "user_levelled_up"
      ],
      autoClaimRewards: true,
      customerProductId: CPE_127_GHI_REWARDS.data.customer_product_id,
      userId: CUSTOMER_127_GHI_REWARDS.data.customerId,
      goal: GOAL_PRODUCTS_1.data._id,
      parentType: "goal_products",
      team: GOAL_TEAM_12_GHI_REWARDS.data._id,
      iterationId: "1",
      startDateTime: moment().subtract(1, "d").format("YYYY-MM-DD"),
      joinGoalTime: moment().subtract(1, "d").format("YYYY-MM-DD"),
      endDateTime: moment().add(7, "days").format("YYYY-MM-DD"),
      endDate: moment().add(7, "days").format("YYYY-MM-DD"),
      trackingEndDateTime: moment().add(7, "days").format("YYYY-MM-DD"),
      disableTransactions: true,
      progressSyncedAt: moment(),
      rewardEligibility: [
        {
          milestone: grm.GOAL_REWARD_MILESTONE_15_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_16_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_17_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_18_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_19_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_20_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_21_GHI_REWARDS.data._id,
          isEligible: true
        },
      ],
      completed: {
        user_levelled_up: 199
      }
    },
} as IDatabaseItem

export const GOAL_PARTICIPATION_12_GHI_LEAVER = {
  type: "mongo",
  modelName: "goal_participation",
  data:{
      _id: generateRandomMongoId(),
      status: "active",
      typesToTrack: [
        "user_levelled_up"
      ],
      autoClaimRewards: true,
      customerProductId: CPE_130_GHI_LEAVER.data.customer_product_id,
      userId: CUSTOMER_130_GHI_LEAVER.data.customerId,
      goal: GOAL_PRODUCTS_1.data._id,
      parentType: "goal_products",
      team: GOAL_TEAM_13_GHI_LEAVER.data._id,
      iterationId: "1",
      startDateTime: moment().subtract(1, "d").format("YYYY-MM-DD"),
      joinGoalTime: moment().subtract(1, "d").format("YYYY-MM-DD"),
      endDateTime: moment().add(7, "days").format("YYYY-MM-DD"),
      endDate: moment().add(7, "days").format("YYYY-MM-DD"),
      trackingEndDateTime: moment().add(7, "days").format("YYYY-MM-DD"),
      disableTransactions: true,
      progressSyncedAt: moment(),
      rewardEligibility: [
        {
          milestone: grm.GOAL_REWARD_MILESTONE_15_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_16_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_17_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_18_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_19_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_20_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_21_GHI_REWARDS.data._id,
          isEligible: true
        },
      ],
      completed: {
        user_levelled_up: 199
      }
    },
} as IDatabaseItem

export const GOAL_PARTICIPATION_13 = {
  type: "mongo",
  modelName: "goal_participation",
  data:{
      _id: generateRandomMongoId(),
      status: "active",
      typesToTrack: [
        "user_levelled_up"
      ],
      autoClaimRewards: true,
      customerProductId: CPE_131_GHI_REWARDS.data.customer_product_id,
      userId: CUSTOMER_131_GHI_REWARDS.data.customerId,
      goal: GOAL_PRODUCTS_1.data._id,
      parentType: "goal_products",
      team: GOAL_TEAM_14.data._id,
      iterationId: "1",
      startDateTime: moment().subtract(1, "d").format("YYYY-MM-DD"),
      joinGoalTime: moment().subtract(1, "d").format("YYYY-MM-DD"),
      endDateTime: moment().add(7, "days").format("YYYY-MM-DD"),
      endDate: moment().add(7, "days").format("YYYY-MM-DD"),
      trackingEndDateTime: moment().add(7, "days").format("YYYY-MM-DD"),
      disableTransactions: true,
      progressSyncedAt: moment(),
      rewardEligibility: [
        {
          milestone: grm.GOAL_REWARD_MILESTONE_15_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_16_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_17_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_18_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_19_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_20_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_21_GHI_REWARDS.data._id,
          isEligible: true
        },
      ],
      completed: {
        user_levelled_up: 8
      }
    },
} as IDatabaseItem

export const GOAL_PARTICIPATION_14 = {
  type: "mongo",
  modelName: "goal_participation",
  data:{
      _id: generateRandomMongoId(),
      status: "active",
      typesToTrack: [
        "user_levelled_up"
      ],
      autoClaimRewards: true,
      customerProductId: CPE_133_GHI_FUTURE.data.customer_product_id,
      userId: CUSTOMER_133_GHI_FUTURE.data.customerId,
      goal: GOAL_PRODUCTS_1.data._id,
      parentType: "goal_products",
      team: GOAL_TEAM_15.data._id,
      iterationId: "1",
      startDateTime: moment().add(1, "weeks").format("YYYY-MM-DD"),
      joinGoalTime: moment().add(1, "weeks").format("YYYY-MM-DD"),
      endDateTime: moment().add(7, "days").format("YYYY-MM-DD"),
      endDate: moment().add(7, "days").format("YYYY-MM-DD"),
      trackingEndDateTime: moment().add(7, "days").format("YYYY-MM-DD"),
      disableTransactions: true,
      progressSyncedAt: moment(),
      rewardEligibility: [
        {
          milestone: grm.GOAL_REWARD_MILESTONE_15_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_16_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_17_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_18_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_19_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_20_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_21_GHI_REWARDS.data._id,
          isEligible: true
        },
      ],
      completed: {
        user_levelled_up: 0
      }
    },
} as IDatabaseItem

export const GOAL_PARTICIPATION_15_GHI_REWARDS = {
  type: "mongo",
  modelName: "goal_participation",
  data:{
      _id: generateRandomMongoId(),
      status: "active",
      typesToTrack: [
        "user_levelled_up"
      ],
      autoClaimRewards: true,
      customerProductId: CPE_134_GHI_REWARDS.data.customer_product_id,
      userId: CUSTOMER_134_GHI_REWARDS.data.customerId,
      goal: GOAL_PRODUCTS_1.data._id,
      parentType: "goal_products",
      team: GOAL_TEAM_16_GHI_REWARDS.data._id,
      iterationId: "1",
      startDateTime: moment().subtract(1, "d").format("YYYY-MM-DD"),
      joinGoalTime: moment().subtract(1, "d").format("YYYY-MM-DD"),
      endDateTime: moment().add(7, "days").format("YYYY-MM-DD"),
      endDate: moment().add(7, "days").format("YYYY-MM-DD"),
      trackingEndDateTime: moment().add(7, "days").format("YYYY-MM-DD"),
      disableTransactions: true,
      progressSyncedAt: moment(),
      rewardEligibility: [
        {
          milestone: grm.GOAL_REWARD_MILESTONE_15_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_16_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_17_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_18_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_19_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_20_GHI_REWARDS.data._id,
          isEligible: true
        },
        {
          milestone: grm.GOAL_REWARD_MILESTONE_21_GHI_REWARDS.data._id,
          isEligible: true
        },
      ],
      completed: {
        user_levelled_up: 4
      }
    },
} as IDatabaseItem