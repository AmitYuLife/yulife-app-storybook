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

export const CRUR_9_BOOTS = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_131.data.userId,
        rewardId: rewards.CORE_REWARDS_BOOTS_GHI_REWARDS.data._id,
        state: "claimable",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_9_YORK = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_131.data.userId,
        rewardId: rewards.CORE_REWARDS_YORK_GHI_REWARDS.data._id,
        state: "claimable",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_9_URBAN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_131.data.userId,
        rewardId: rewards.CORE_REWARDS_URBAN_GHI_REWARDS.data._id,
        state: "claimable",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_9_BUPA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_131.data.userId,
        rewardId: rewards.CORE_REWARDS_BUPA_GHI_REWARDS.data._id,
        state: "claimable",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_9_LIVING_DNA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_131.data.userId,
        rewardId: rewards.CORE_REWARDS_LIVING_DNA_GHI_REWARDS.data._id,
        state: "claimable",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_9_GARMIN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_131.data.userId,
        rewardId: rewards.CORE_REWARDS_GARMIN_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_9_THRIVA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_131.data.userId,
        rewardId: rewards.CORE_REWARDS_THRIVA_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_10_BOOTS = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_133.data.userId,
        rewardId: rewards.CORE_REWARDS_BOOTS_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_10_YORK = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_133.data.userId,
        rewardId: rewards.CORE_REWARDS_YORK_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_10_URBAN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_133.data.userId,
        rewardId: rewards.CORE_REWARDS_URBAN_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_10_BUPA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_133.data.userId,
        rewardId: rewards.CORE_REWARDS_BUPA_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_10_LIVING_DNA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_133.data.userId,
        rewardId: rewards.CORE_REWARDS_LIVING_DNA_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_10_GARMIN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_133.data.userId,
        rewardId: rewards.CORE_REWARDS_GARMIN_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_10_THRIVA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_133.data.userId,
        rewardId: rewards.CORE_REWARDS_THRIVA_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_11_BOOTS = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_134.data.userId,
        rewardId: rewards.CORE_REWARDS_BOOTS_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_11_YORK = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_134.data.userId,
        rewardId: rewards.CORE_REWARDS_YORK_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_11_URBAN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_134.data.userId,
        rewardId: rewards.CORE_REWARDS_URBAN_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_11_BUPA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_134.data.userId,
        rewardId: rewards.CORE_REWARDS_BUPA_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_11_LIVING_DNA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_134.data.userId,
        rewardId: rewards.CORE_REWARDS_LIVING_DNA_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_11_GARMIN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_134.data.userId,
        rewardId: rewards.CORE_REWARDS_GARMIN_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_11_THRIVA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_134.data.userId,
        rewardId: rewards.CORE_REWARDS_THRIVA_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_12_BOOTS = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_135.data.userId,
        rewardId: rewards.CORE_REWARDS_BOOTS_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_12_YORK = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_135.data.userId,
        rewardId: rewards.CORE_REWARDS_YORK_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_12_URBAN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_135.data.userId,
        rewardId: rewards.CORE_REWARDS_URBAN_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_12_BUPA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_135.data.userId,
        rewardId: rewards.CORE_REWARDS_BUPA_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_12_LIVING_DNA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_135.data.userId,
        rewardId: rewards.CORE_REWARDS_LIVING_DNA_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_12_GARMIN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_135.data.userId,
        rewardId: rewards.CORE_REWARDS_GARMIN_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_12_THRIVA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_135.data.userId,
        rewardId: rewards.CORE_REWARDS_THRIVA_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_13_BOOTS = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_136.data.userId,
        rewardId: rewards.CORE_REWARDS_BOOTS_GHI_REWARDS.data._id,
        state: "claimable",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_13_YORK = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_136.data.userId,
        rewardId: rewards.CORE_REWARDS_YORK_GHI_REWARDS.data._id,
        state: "claimable",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_13_URBAN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_136.data.userId,
        rewardId: rewards.CORE_REWARDS_URBAN_GHI_REWARDS.data._id,
        state: "claimable",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_13_BUPA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_136.data.userId,
        rewardId: rewards.CORE_REWARDS_BUPA_GHI_REWARDS.data._id,
        state: "claimable",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_13_LIVING_DNA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_136.data.userId,
        rewardId: rewards.CORE_REWARDS_LIVING_DNA_GHI_REWARDS.data._id,
        state: "claimable",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_13_GARMIN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_136.data.userId,
        rewardId: rewards.CORE_REWARDS_GARMIN_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_13_THRIVA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_136.data.userId,
        rewardId: rewards.CORE_REWARDS_THRIVA_GHI_REWARDS.data._id,
        state: "claimable",
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

export const CRUR_15_BOOTS = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_139.data.userId,
        rewardId: rewards.CORE_REWARDS_BOOTS_GHI_REWARDS.data._id,
        state: "claimable",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_15_YORK = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_139.data.userId,
        rewardId: rewards.CORE_REWARDS_YORK_GHI_REWARDS.data._id,
        state: "claimable",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_15_URBAN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_139.data.userId,
        rewardId: rewards.CORE_REWARDS_URBAN_GHI_REWARDS.data._id,
        state: "claimable",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_15_BUPA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_139.data.userId,
        rewardId: rewards.CORE_REWARDS_BUPA_GHI_REWARDS.data._id,
        state: "claimable",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_15_LIVING_DNA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_139.data.userId,
        rewardId: rewards.CORE_REWARDS_LIVING_DNA_GHI_REWARDS.data._id,
        state: "claimable",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_15_GARMIN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_139.data.userId,
        rewardId: rewards.CORE_REWARDS_GARMIN_GHI_REWARDS.data._id,
        state: "claimable",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_15_THRIVA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_139.data.userId,
        rewardId: rewards.CORE_REWARDS_THRIVA_GHI_REWARDS.data._id,
        state: "claimable",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_16_BOOTS = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_140.data.userId,
        rewardId: rewards.CORE_REWARDS_BOOTS_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_16_YORK = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_140.data.userId,
        rewardId: rewards.CORE_REWARDS_YORK_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_16_URBAN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_140.data.userId,
        rewardId: rewards.CORE_REWARDS_URBAN_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_16_BUPA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_140.data.userId,
        rewardId: rewards.CORE_REWARDS_BUPA_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_16_LIVING_DNA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_140.data.userId,
        rewardId: rewards.CORE_REWARDS_LIVING_DNA_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_16_GARMIN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_140.data.userId,
        rewardId: rewards.CORE_REWARDS_GARMIN_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_16_THRIVA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_140.data.userId,
        rewardId: rewards.CORE_REWARDS_THRIVA_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;
