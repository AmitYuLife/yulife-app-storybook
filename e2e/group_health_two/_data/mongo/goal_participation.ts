import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as grm from "./goal_reward_milestones";
import * as cpe from "../postgres/customer_product_entity";
import * as customers from "../postgres/customers";
import { GOAL_PRODUCTS_1, GOAL_PRODUCTS_3 } from "./goal_products";
import moment from "moment";
import * as gt from "./goal_team";

export const GOAL_PARTICIPATION_12_GHI_LEAVER = {
    type: "mongo",
    modelName: "goal_participation",
    data: {
        _id: generateRandomMongoId(),
        status: "active",
        typesToTrack: ["user_levelled_up"],
        autoClaimRewards: true,
        customerProductId: cpe.CPE_130_GHI_LEAVER.data.customer_product_id,
        customerProductIds: [cpe.CPE_130_GHI_LEAVER.data.customer_product_id],
        userId: customers.CUSTOMER_130_GHI_LEAVER.data.customerId,
        goal: GOAL_PRODUCTS_1.data._id,
        parentType: "goal_products",
        team: gt.GOAL_TEAM_13_GHI_LEAVER.data._id,
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

export const GOAL_PARTICIPATION_13 = {
    type: "mongo",
    modelName: "goal_participation",
    data: {
        _id: generateRandomMongoId(),
        status: "active",
        typesToTrack: ["user_levelled_up"],
        autoClaimRewards: true,
        customerProductId: cpe.CPE_131_GHI_REWARDS.data.customer_product_id,
        customerProductIds: [cpe.CPE_131_GHI_REWARDS.data.customer_product_id],
        userId: customers.CUSTOMER_131_GHI_REWARDS.data.customerId,
        goal: GOAL_PRODUCTS_1.data._id,
        parentType: "goal_products",
        team: gt.GOAL_TEAM_14.data._id,
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
            user_levelled_up: 8,
        },
    },
} as IDatabaseItem;

export const GOAL_PARTICIPATION_14 = {
    type: "mongo",
    modelName: "goal_participation",
    data: {
        _id: generateRandomMongoId(),
        status: "active",
        typesToTrack: ["user_levelled_up"],
        autoClaimRewards: true,
        customerProductId: cpe.CPE_133_GHI_FUTURE.data.customer_product_id,
        customerProductIds: [cpe.CPE_133_GHI_FUTURE.data.customer_product_id],
        userId: customers.CUSTOMER_133_GHI_FUTURE.data.customerId,
        goal: GOAL_PRODUCTS_1.data._id,
        parentType: "goal_products",
        team: gt.GOAL_TEAM_15.data._id,
        iterationId: "1",
        startDateTime: moment().add(1, "weeks").format("YYYY-MM-DD"),
        joinGoalTime: moment().add(1, "weeks").format("YYYY-MM-DD"),
        endDateTime: moment().add(14, "days").format("YYYY-MM-DD"),
        endDate: moment().add(14, "days").format("YYYY-MM-DD"),
        trackingEndDateTime: moment().add(14, "days").format("YYYY-MM-DD"),
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

export const GOAL_PARTICIPATION_15_GHI_REWARDS = {
    type: "mongo",
    modelName: "goal_participation",
    data: {
        _id: generateRandomMongoId(),
        status: "active",
        typesToTrack: ["user_levelled_up"],
        autoClaimRewards: true,
        customerProductId: cpe.CPE_134_GHI_REWARDS.data.customer_product_id,
        customerProductIds: [cpe.CPE_134_GHI_REWARDS.data.customer_product_id],
        userId: customers.CUSTOMER_134_GHI_REWARDS.data.customerId,
        goal: GOAL_PRODUCTS_1.data._id,
        parentType: "goal_products",
        team: gt.GOAL_TEAM_16_GHI_REWARDS.data._id,
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

export const GOAL_PARTICIPATION_16 = {
    type: "mongo",
    modelName: "goal_participation",
    data: {
        _id: generateRandomMongoId(),
        status: "active",
        typesToTrack: ["user_levelled_up"],
        autoClaimRewards: true,
        customerProductId: cpe.CPE_135_GHI_FUTURE.data.customer_product_id,
        customerProductIds: [cpe.CPE_135_GHI_FUTURE.data.customer_product_id],
        userId: customers.CUSTOMER_135_GHI_FUTURE.data.customerId,
        goal: GOAL_PRODUCTS_1.data._id,
        parentType: "goal_products",
        team: gt.GOAL_TEAM_17.data._id,
        iterationId: "1",
        startDateTime: moment().add(1, "weeks").format("YYYY-MM-DD"),
        joinGoalTime: moment().add(1, "weeks").format("YYYY-MM-DD"),
        endDateTime: moment().add(14, "days").format("YYYY-MM-DD"),
        endDate: moment().add(14, "days").format("YYYY-MM-DD"),
        trackingEndDateTime: moment().add(14, "days").format("YYYY-MM-DD"),
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

export const GOAL_PARTICIPATION_17 = {
    type: "mongo",
    modelName: "goal_participation",
    data: {
        _id: generateRandomMongoId(),
        status: "active",
        typesToTrack: ["user_levelled_up"],
        autoClaimRewards: true,
        customerProductId: cpe.CPE_136_GHI_REWARDS.data.customer_product_id,
        customerProductIds: [cpe.CPE_136_GHI_REWARDS.data.customer_product_id],
        userId: customers.CUSTOMER_136_GHI_REWARDS.data.customerId,
        goal: GOAL_PRODUCTS_1.data._id,
        parentType: "goal_products",
        team: gt.GOAL_TEAM_18.data._id,
        iterationId: "1",
        startDateTime: moment().subtract(1, "weeks").format("YYYY-MM-DD"),
        joinGoalTime: moment().subtract(1, "weeks").format("YYYY-MM-DD"),
        endDateTime: moment().add(14, "days").format("YYYY-MM-DD"),
        endDate: moment().add(14, "days").format("YYYY-MM-DD"),
        trackingEndDateTime: moment().add(14, "days").format("YYYY-MM-DD"),
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
            user_levelled_up: 8,
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

export const GOAL_PARTICIPATION_19 = {
    type: "mongo",
    modelName: "goal_participation",
    data: {
        _id: generateRandomMongoId(),
        status: "active",
        typesToTrack: ["user_levelled_up"],
        autoClaimRewards: true,
        customerProductId: cpe.CPE_139_GHI_REWARDS.data.customer_product_id,
        customerProductIds: [cpe.CPE_139_GHI_REWARDS.data.customer_product_id],
        userId: customers.CUSTOMER_139_GHI_REWARDS.data.customerId,
        goal: GOAL_PRODUCTS_1.data._id,
        parentType: "goal_products",
        team: gt.GOAL_TEAM_20.data._id,
        iterationId: "1",
        startDateTime: moment().subtract(1, "weeks").format("YYYY-MM-DD"),
        joinGoalTime: moment().subtract(1, "weeks").format("YYYY-MM-DD"),
        endDateTime: moment().add(14, "days").format("YYYY-MM-DD"),
        endDate: moment().add(14, "days").format("YYYY-MM-DD"),
        trackingEndDateTime: moment().add(14, "days").format("YYYY-MM-DD"),
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
            user_levelled_up: 200,
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
        startDateTime: moment().subtract(11, "months").startOf("day").format("YYYY-MM-DD"),
        joinGoalTime: moment().subtract(11, "months").startOf("day").format("YYYY-MM-DD"),
        endDateTime: moment().add(1, "month").startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().add(1, "month").format("YYYY-MM-DD"),
        trackingEndDateTime: moment().add(1, "month").startOf("day").format("YYYY-MM-DDTHH:mm:ss"),
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
            user_levelled_up: 197,
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
        customerProductId: cpe.CPE_141_GHI.data.customer_product_id,
        customerProductIds: [cpe.CPE_141_GHI.data.customer_product_id],
        userId: customers.CUSTOMER_141_GHI.data.customerId,
        goal: GOAL_PRODUCTS_1.data._id,
        parentType: "goal_products",
        team: gt.GOAL_TEAM_22.data._id,
        iterationId: "1",
        startDateTime: moment().add(2, "months").format("YYYY-MM-DD"),
        joinGoalTime: moment().add(2, "months").format("YYYY-MM-DD"),
        endDateTime: moment().add(14, "months").format("YYYY-MM-DD"),
        endDate: moment().add(14, "months").format("YYYY-MM-DD"),
        trackingEndDateTime: moment().add(14, "months").format("YYYY-MM-DD"),
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


export const GOAL_PARTICIPATION_GH_REMOVED = {
    type: "mongo",
    modelName: "goal_participation",
    data: {
        _id: generateRandomMongoId(),
        status: "active",
        typesToTrack: ["user_levelled_up"],
        autoClaimRewards: true,
        customerProductId: cpe.CPE_GH_REMOVED.data.customer_product_id,
        customerProductIds: [cpe.CPE_GH_REMOVED.data.customer_product_id],
        userId: customers.CUSTOMER_GH_REMOVED.data.customerId,
        goal: GOAL_PRODUCTS_1.data._id,
        parentType: "goal_products",
        team: gt.GOAL_TEAM_GH_REMOVED.data._id,
        iterationId: "1",
        startDateTime: moment().add(2, "months").format("YYYY-MM-DD"),
        joinGoalTime: moment().add(2, "months").format("YYYY-MM-DD"),
        endDateTime: moment().add(14, "months").format("YYYY-MM-DD"),
        endDate: moment().add(14, "months").format("YYYY-MM-DD"),
        trackingEndDateTime: moment().add(14, "months").format("YYYY-MM-DD"),
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
