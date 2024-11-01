import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as grm from "./goal_reward_milestones";
import * as cpe from "../postgres/customer_product_entity";
import * as customers from "../postgres/customers";
import { GOAL_PRODUCTS_1, GOAL_PRODUCTS_3 } from "./goal_products";
import moment from "moment";
import * as gt from "./goal_team";

export const GOAL_PARTICIPATION_5_GHI_REWARDS = {
    type: "mongo",
    modelName: "goal_participation",
    data: {
        _id: generateRandomMongoId(),
        status: "active",
        typesToTrack: ["user_levelled_up"],
        autoClaimRewards: true,
        customerProductId: cpe.CPE_116_GHI_REWARDS.data.customer_product_id,
        customerProductIds: [cpe.CPE_116_GHI_REWARDS.data.customer_product_id],
        userId: customers.CUSTOMER_116_GHI_REWARDS.data.customerId,
        goal: GOAL_PRODUCTS_1.data._id,
        parentType: "goal_products",
        team: gt.GOAL_TEAM_6_GHI_REWARDS.data._id,
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
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_16_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_17_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_18_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_19_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_20_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_21_GHI_REWARDS.data._id,
                isEligible: true,
            },
        ],
        completed: {
            user_levelled_up: 4,
        },
    },
} as IDatabaseItem;

export const GOAL_PARTICIPATION_6_GHI_REWARDS = {
    type: "mongo",
    modelName: "goal_participation",
    data: {
        _id: generateRandomMongoId(),
        status: "active",
        typesToTrack: ["user_levelled_up"],
        autoClaimRewards: true,
        customerProductId: cpe.CPE_117_GHI_REWARDS.data.customer_product_id,
        customerProductIds: [cpe.CPE_117_GHI_REWARDS.data.customer_product_id],
        userId: customers.CUSTOMER_117_GHI_REWARDS.data.customerId,
        goal: GOAL_PRODUCTS_1.data._id,
        parentType: "goal_products",
        team: gt.GOAL_TEAM_7_GHI_REWARDS.data._id,
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
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_16_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_17_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_18_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_19_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_20_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_21_GHI_REWARDS.data._id,
                isEligible: true,
            },
        ],
        completed: {
            user_levelled_up: 9,
        },
    },
} as IDatabaseItem;

export const GOAL_PARTICIPATION_7_GHI_REWARDS = {
    type: "mongo",
    modelName: "goal_participation",
    data: {
        _id: generateRandomMongoId(),
        status: "active",
        typesToTrack: ["user_levelled_up"],
        autoClaimRewards: true,
        customerProductId: cpe.CPE_118_GHI_REWARDS.data.customer_product_id,
        customerProductIds: [cpe.CPE_118_GHI_REWARDS.data.customer_product_id],
        userId: customers.CUSTOMER_118_GHI_REWARDS.data.customerId,
        goal: GOAL_PRODUCTS_1.data._id,
        parentType: "goal_products",
        team: gt.GOAL_TEAM_8_GHI_REWARDS.data._id,
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
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_16_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_17_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_18_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_19_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_20_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_21_GHI_REWARDS.data._id,
                isEligible: true,
            },
        ],
        completed: {
            user_levelled_up: 49,
        },
    },
} as IDatabaseItem;

export const GOAL_PARTICIPATION_8_GHI_REWARDS = {
    type: "mongo",
    modelName: "goal_participation",
    data: {
        _id: generateRandomMongoId(),
        status: "active",
        typesToTrack: ["user_levelled_up"],
        autoClaimRewards: true,
        customerProductId: cpe.CPE_119_GHI_REWARDS.data.customer_product_id,
        customerProductIds: [cpe.CPE_119_GHI_REWARDS.data.customer_product_id],
        userId: customers.CUSTOMER_119_GHI_REWARDS.data.customerId,
        goal: GOAL_PRODUCTS_1.data._id,
        parentType: "goal_products",
        team: gt.GOAL_TEAM_9_GHI_REWARDS.data._id,
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
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_16_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_17_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_18_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_19_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_20_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_21_GHI_REWARDS.data._id,
                isEligible: true,
            },
        ],
        completed: {
            user_levelled_up: 99,
        },
    },
} as IDatabaseItem;

export const GOAL_PARTICIPATION_9_GHI_REWARDS = {
    type: "mongo",
    modelName: "goal_participation",
    data: {
        _id: generateRandomMongoId(),
        status: "active",
        typesToTrack: ["user_levelled_up"],
        autoClaimRewards: true,
        customerProductId: cpe.CPE_120_GHI_REWARDS.data.customer_product_id,
        customerProductIds: [cpe.CPE_120_GHI_REWARDS.data.customer_product_id],
        userId: customers.CUSTOMER_120_GHI_REWARDS.data.customerId,
        goal: GOAL_PRODUCTS_1.data._id,
        parentType: "goal_products",
        team: gt.GOAL_TEAM_10_GHI_REWARDS.data._id,
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
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_16_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_17_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_18_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_19_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_20_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_21_GHI_REWARDS.data._id,
                isEligible: true,
            },
        ],
        completed: {
            user_levelled_up: 149,
        },
    },
} as IDatabaseItem;

export const GOAL_PARTICIPATION_10_GHI_REWARDS = {
    type: "mongo",
    modelName: "goal_participation",
    data: {
        _id: generateRandomMongoId(),
        status: "active",
        typesToTrack: ["user_levelled_up"],
        autoClaimRewards: true,
        customerProductId: cpe.CPE_121_GHI_REWARDS.data.customer_product_id,
        customerProductIds: [cpe.CPE_121_GHI_REWARDS.data.customer_product_id],
        userId: customers.CUSTOMER_121_GHI_REWARDS.data.customerId,
        goal: GOAL_PRODUCTS_1.data._id,
        parentType: "goal_products",
        team: gt.GOAL_TEAM_11_GHI_REWARDS.data._id,
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
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_16_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_17_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_18_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_19_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_20_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_21_GHI_REWARDS.data._id,
                isEligible: true,
            },
        ],
        completed: {
            user_levelled_up: 199,
        },
    },
} as IDatabaseItem;

export const GOAL_PARTICIPATION_11_GHI_REWARDS = {
    type: "mongo",
    modelName: "goal_participation",
    data: {
        _id: generateRandomMongoId(),
        status: "active",
        typesToTrack: ["user_levelled_up"],
        autoClaimRewards: true,
        customerProductId: cpe.CPE_127_GHI_REWARDS.data.customer_product_id,
        customerProductIds: [cpe.CPE_127_GHI_REWARDS.data.customer_product_id],
        userId: customers.CUSTOMER_127_GHI_REWARDS.data.customerId,
        goal: GOAL_PRODUCTS_1.data._id,
        parentType: "goal_products",
        team: gt.GOAL_TEAM_12_GHI_REWARDS.data._id,
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
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_16_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_17_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_18_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_19_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_20_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_21_GHI_REWARDS.data._id,
                isEligible: true,
            },
        ],
        completed: {
            user_levelled_up: 199,
        },
    },
} as IDatabaseItem;

export const GOAL_PARTICIPATION_18 = {
    type: "mongo",
    modelName: "goal_participation",
    data: {
        _id: generateRandomMongoId(),
        status: "active",
        typesToTrack: ["user_levelled_up"],
        autoClaimRewards: true,
        customerProductId: cpe.CPE_137_GHI_REWARDS.data.customer_product_id,
        customerProductIds: [cpe.CPE_137_GHI_REWARDS.data.customer_product_id],
        userId: customers.CUSTOMER_137_GHI_REWARDS.data.customerId,
        goal: GOAL_PRODUCTS_3.data._id,
        parentType: "goal_products",
        team: gt.GOAL_TEAM_19.data._id,
        iterationId: "1",
        startDateTime: moment().subtract(1, "years").startOf("day").format("YYYY-MM-DD"),
        joinGoalTime: moment().subtract(1, "years").startOf("day").format("YYYY-MM-DD"),
        endDateTime: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().format("YYYY-MM-DD"),
        trackingEndDateTime: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        disableTransactions: true,
        progressSyncedAt: moment(),
        rewardEligibility: [
            {
                milestone: grm.GOAL_REWARD_MILESTONE_22_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_23_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_24_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_25_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_26_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_27_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_28_GHI_REWARDS.data._id,
                isEligible: true,
            },
        ],
        completed: {
            user_levelled_up: 175,
        },
    },
} as IDatabaseItem;

export const GOAL_PARTICIPATION_20 = {
    type: "mongo",
    modelName: "goal_participation",
    data: {
        _id: generateRandomMongoId(),
        status: "active",
        typesToTrack: ["user_levelled_up"],
        autoClaimRewards: true,
        customerProductId: cpe.CPE_140_GHI_REWARDS.data.customer_product_id,
        customerProductIds: [cpe.CPE_140_GHI_REWARDS.data.customer_product_id],
        userId: customers.CUSTOMER_140_GHI_REWARDS.data.customerId,
        goal: GOAL_PRODUCTS_3.data._id,
        parentType: "goal_products",
        team: gt.GOAL_TEAM_21.data._id,
        iterationId: "1",
        startDateTime: moment().subtract(1, "years").startOf("day").format("YYYY-MM-DD"),
        joinGoalTime: moment().subtract(1, "years").startOf("day").format("YYYY-MM-DD"),
        endDateTime: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().format("YYYY-MM-DD"),
        trackingEndDateTime: moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        disableTransactions: true,
        progressSyncedAt: moment(),
        rewardEligibility: [
            {
                milestone: grm.GOAL_REWARD_MILESTONE_22_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_23_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_24_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_25_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_26_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_27_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_28_GHI_REWARDS.data._id,
                isEligible: true,
            },
        ],
        completed: {
            user_levelled_up: 175,
        },
    },
} as IDatabaseItem;

export const GOAL_PARTICIPATION_21 = {
    type: "mongo",
    modelName: "goal_participation",
    data: {
        _id: generateRandomMongoId(),
        status: "active",
        typesToTrack: ["user_levelled_up"],
        autoClaimRewards: true,
        customerProductId: cpe.CPE_GHI_STARTED.data.customer_product_id,
        customerProductIds: [cpe.CPE_GHI_STARTED.data.customer_product_id],
        userId: customers.CUSTOMER_GHI_STARTED.data.customerId,
        goal: GOAL_PRODUCTS_1.data._id,
        parentType: "goal_products",
        team: gt.GOAL_TEAM_22.data._id,
        iterationId: "1",
        startDateTime: moment().subtract(1, "weeks").format("YYYY-MM-DD"),
        joinGoalTime: moment().subtract(1, "weeks").format("YYYY-MM-DD"),
        endDateTime: moment().add(7, "days").format("YYYY-MM-DD"),
        endDate: moment().add(7, "days").format("YYYY-MM-DD"),
        trackingEndDateTime: moment().add(7, "days").format("YYYY-MM-DD"),
        disableTransactions: true,
        progressSyncedAt: moment(),
        rewardEligibility: [
            {
                milestone: grm.GOAL_REWARD_MILESTONE_15_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_16_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_17_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_18_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_19_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_20_GHI_REWARDS.data._id,
                isEligible: true,
            },
            {
                milestone: grm.GOAL_REWARD_MILESTONE_21_GHI_REWARDS.data._id,
                isEligible: true,
            },
        ],
        completed: {
            user_levelled_up: 0,
        },
    },
} as IDatabaseItem;
