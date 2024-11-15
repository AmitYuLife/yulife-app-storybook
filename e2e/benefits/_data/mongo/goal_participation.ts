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
        customerProductId: [cpe.CPE_116_GHI_REWARDS.data.customer_product_id],
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
        customerProductId: [cpe.CPE_117_GHI_REWARDS.data.customer_product_id],
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
