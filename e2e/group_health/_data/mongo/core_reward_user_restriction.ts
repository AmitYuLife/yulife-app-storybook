import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import * as rewards from "./core_rewards";
import * as users from "./users";

export const CRUR_1_BOOTS = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_116.data.userId,
        rewardId: rewards.CORE_REWARDS_BOOTS_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_1_YORK = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_116.data.userId,
        rewardId: rewards.CORE_REWARDS_YORK_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_1_URBAN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_116.data.userId,
        rewardId: rewards.CORE_REWARDS_URBAN_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_1_BUPA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_116.data.userId,
        rewardId: rewards.CORE_REWARDS_BUPA_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_1_LIVING_DNA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_116.data.userId,
        rewardId: rewards.CORE_REWARDS_LIVING_DNA_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_1_GARMIN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_116.data.userId,
        rewardId: rewards.CORE_REWARDS_GARMIN_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_1_THRIVA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_116.data.userId,
        rewardId: rewards.CORE_REWARDS_THRIVA_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_6_BOOTS = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_121.data.userId,
        rewardId: rewards.CORE_REWARDS_BOOTS_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_6_YORK = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_121.data.userId,
        rewardId: rewards.CORE_REWARDS_YORK_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_6_URBAN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_121.data.userId,
        rewardId: rewards.CORE_REWARDS_URBAN_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_6_BUPA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_121.data.userId,
        rewardId: rewards.CORE_REWARDS_BUPA_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_6_LIVING_DNA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_121.data.userId,
        rewardId: rewards.CORE_REWARDS_LIVING_DNA_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_6_GARMIN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_121.data.userId,
        rewardId: rewards.CORE_REWARDS_GARMIN_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_6_THRIVA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_121.data.userId,
        rewardId: rewards.CORE_REWARDS_THRIVA_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_7_BOOTS = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_127.data.userId,
        rewardId: rewards.CORE_REWARDS_BOOTS_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_7_YORK = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_127.data.userId,
        rewardId: rewards.CORE_REWARDS_YORK_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_7_URBAN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_127.data.userId,
        rewardId: rewards.CORE_REWARDS_URBAN_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_7_BUPA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_127.data.userId,
        rewardId: rewards.CORE_REWARDS_BUPA_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_7_LIVING_DNA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_127.data.userId,
        rewardId: rewards.CORE_REWARDS_LIVING_DNA_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_7_GARMIN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_127.data.userId,
        rewardId: rewards.CORE_REWARDS_GARMIN_GHI_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_7_THRIVA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_127.data.userId,
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

export const CRUR_17_BUPA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_141.data.userId,
        rewardId: rewards.CORE_REWARDS_BUPA_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_17_SCAN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_141.data.userId,
        rewardId: rewards.CORE_REWARDS_SCAN_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_17_MEDITOPIA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_141.data.userId,
        rewardId: rewards.CORE_REWARDS_MEDITOPIA_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_17_BETTERHELP = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_141.data.userId,
        rewardId: rewards.CORE_REWARDS_BETTERHELP_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_17_SKINVISION = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_141.data.userId,
        rewardId: rewards.CORE_REWARDS_SKINVISION_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_17_SLEEPCYCLE = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_141.data.userId,
        rewardId: rewards.CORE_REWARDS_SLEEPCYCLE_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_17_WITHINGS = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_141.data.userId,
        rewardId: rewards.CORE_REWARDS_WITHINGS_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_17_POCDOC = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_141.data.userId,
        rewardId: rewards.CORE_REWARDS_POCDOC_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_17_LIFESUM = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_141.data.userId,
        rewardId: rewards.CORE_REWARDS_LIFESUM_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_17_FIIT = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_141.data.userId,
        rewardId: rewards.CORE_REWARDS_FIIT_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_17_NIKE = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_141.data.userId,
        rewardId: rewards.CORE_REWARDS_NIKE_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_18_BUPA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_142.data.userId,
        rewardId: rewards.CORE_REWARDS_BUPA_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_18_SCAN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_142.data.userId,
        rewardId: rewards.CORE_REWARDS_SCAN_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_18_MEDITOPIA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_142.data.userId,
        rewardId: rewards.CORE_REWARDS_MEDITOPIA_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_18_BETTERHELP = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_142.data.userId,
        rewardId: rewards.CORE_REWARDS_BETTERHELP_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_18_SKINVISION = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_142.data.userId,
        rewardId: rewards.CORE_REWARDS_SKINVISION_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_18_SLEEPCYCLE = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_142.data.userId,
        rewardId: rewards.CORE_REWARDS_SLEEPCYCLE_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_18_WITHINGS = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_142.data.userId,
        rewardId: rewards.CORE_REWARDS_WITHINGS_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_18_POCDOC = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_142.data.userId,
        rewardId: rewards.CORE_REWARDS_POCDOC_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_18_LIFESUM = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_142.data.userId,
        rewardId: rewards.CORE_REWARDS_LIFESUM_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_18_FIIT = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_142.data.userId,
        rewardId: rewards.CORE_REWARDS_FIIT_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_18_NIKE = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_142.data.userId,
        rewardId: rewards.CORE_REWARDS_NIKE_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_19_BUPA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_143.data.userId,
        rewardId: rewards.CORE_REWARDS_BUPA_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_19_SCAN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_143.data.userId,
        rewardId: rewards.CORE_REWARDS_SCAN_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_19_MEDITOPIA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_143.data.userId,
        rewardId: rewards.CORE_REWARDS_MEDITOPIA_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_19_BETTERHELP = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_143.data.userId,
        rewardId: rewards.CORE_REWARDS_BETTERHELP_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_19_SKINVISION = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_143.data.userId,
        rewardId: rewards.CORE_REWARDS_SKINVISION_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_19_SLEEPCYCLE = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_143.data.userId,
        rewardId: rewards.CORE_REWARDS_SLEEPCYCLE_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_19_WITHINGS = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_143.data.userId,
        rewardId: rewards.CORE_REWARDS_WITHINGS_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_19_POCDOC = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_143.data.userId,
        rewardId: rewards.CORE_REWARDS_POCDOC_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_19_LIFESUM = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_143.data.userId,
        rewardId: rewards.CORE_REWARDS_LIFESUM_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_19_FIIT = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_143.data.userId,
        rewardId: rewards.CORE_REWARDS_FIIT_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;

export const CRUR_19_NIKE = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        _id: generateRandomMongoId(),
        userId: users.USER_143.data.userId,
        rewardId: rewards.CORE_REWARDS_NIKE_GIP_REWARDS.data._id,
        state: "tease",
        source: "goal_products",
        createdAt: moment(),
        updatedAt: moment(),
        __v: 0,
    },
} as IDatabaseItem;