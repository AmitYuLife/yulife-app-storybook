import { IDatabaseItem, generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import { CUSTOMER_71, CUSTOMER_137_GHI_REWARDS, CUSTOMER_130_GHI_LEAVER } from "../postgres/customers";
import { GOALS_3 } from "./goals";
import { GOAL_TEAM_3, GOAL_TEAM_19, GOAL_TEAM_13_GHI_LEAVER } from "./goal_team";
import { GOAL_PRODUCTS_1, GOAL_PRODUCTS_3 } from "./goal_products";
import * as grm from "./goal_reward_milestones";
import { CPE_130_GHI_LEAVER, CPE_137_GHI_REWARDS } from "../postgres/customer_product_entity";

export const GOAL_PARTICIPATION_3 = {
    type: "mongo",
    modelName: "goal_participation",
    data: {
        status: "active",
        typesToTrack: ["passive_challenge_cycling"],
        synchronousProgress: true,
        userId: CUSTOMER_71.data.customerId,
        goal: GOALS_3.data._id,
        parentType: "goals",
        team: GOAL_TEAM_3.data._id,
        startDateTime: moment().format("YYYY-MM-DDTHH:mm:ss"),
        endDateTime: moment().add(7, "days").format("YYYY-MM-DDTHH:mm:ss"),
        trackingEndDateTime: moment().add(8, "days").format("YYYY-MM-DDTHH:mm:ss"),
        progressSyncedAt: moment(),
        participationId: null,
    },
} as IDatabaseItem;

export const GOAL_PARTICIPATION_12_GHI_LEAVER = {
    type: "mongo",
    modelName: "goal_participation",
    data: {
        _id: generateRandomMongoId(),
        status: "active",
        typesToTrack: ["user_levelled_up"],
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
        customerProductId: CPE_137_GHI_REWARDS.data.customer_product_id,
        userId: CUSTOMER_137_GHI_REWARDS.data.customerId,
        goal: GOAL_PRODUCTS_3.data._id,
        parentType: "goal_products",
        team: GOAL_TEAM_19.data._id,
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
