import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import * as rewards from "./core_rewards";
import * as users from "./users";

export const CRUR_8_BOOTS = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_130.data.userId,
        rewardId: rewards.CORE_REWARDS_BOOTS_GHI_REWARDS.data._id,
        state: "claimable",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_8_YORK = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_130.data.userId,
        rewardId: rewards.CORE_REWARDS_YORK_GHI_REWARDS.data._id,
        state: "claimable",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_8_URBAN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_130.data.userId,
        rewardId: rewards.CORE_REWARDS_URBAN_GHI_REWARDS.data._id,
        state: "claimable",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_8_BUPA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_130.data.userId,
        rewardId: rewards.CORE_REWARDS_BUPA_GHI_REWARDS.data._id,
        state: "claimable",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_8_LIVING_DNA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_130.data.userId,
        rewardId: rewards.CORE_REWARDS_LIVING_DNA_GHI_REWARDS.data._id,
        state: "claimable",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_8_GARMIN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_130.data.userId,
        rewardId: rewards.CORE_REWARDS_GARMIN_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_8_THRIVA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_130.data.userId,
        rewardId: rewards.CORE_REWARDS_THRIVA_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_14_BOOTS = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_137.data.userId,
        rewardId: rewards.CORE_REWARDS_BOOTS_GHI_REWARDS.data._id,
        state: "claimable",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_14_YORK = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_137.data.userId,
        rewardId: rewards.CORE_REWARDS_YORK_GHI_REWARDS.data._id,
        state: "claimable",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_14_URBAN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_137.data.userId,
        rewardId: rewards.CORE_REWARDS_URBAN_GHI_REWARDS.data._id,
        state: "claimable",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_14_BUPA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_137.data.userId,
        rewardId: rewards.CORE_REWARDS_BUPA_GHI_REWARDS.data._id,
        state: "claimable",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_14_LIVING_DNA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_137.data.userId,
        rewardId: rewards.CORE_REWARDS_LIVING_DNA_GHI_REWARDS.data._id,
        state: "claimable",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_14_GARMIN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_137.data.userId,
        rewardId: rewards.CORE_REWARDS_GARMIN_GHI_REWARDS.data._id,
        state: "claimable",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_14_THRIVA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_137.data.userId,
        rewardId: rewards.CORE_REWARDS_THRIVA_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;
