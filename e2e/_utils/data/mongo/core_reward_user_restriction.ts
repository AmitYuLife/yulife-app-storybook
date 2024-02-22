import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework"
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import * as rewards from "./core_rewards"
import * as users from "./users"

export const CRUR_1_BOOTS = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_116.data.userId,
        "rewardId": rewards.CORE_REWARDS_BOOTS_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_1_YORK = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_116.data.userId,
        "rewardId": rewards.CORE_REWARDS_YORK_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_1_URBAN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_116.data.userId,
        "rewardId": rewards.CORE_REWARDS_URBAN_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_1_BUPA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_116.data.userId,
        "rewardId": rewards.CORE_REWARDS_BUPA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_1_LIVING_DNA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_116.data.userId,
        "rewardId": rewards.CORE_REWARDS_LIVING_DNA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_1_GARMIN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_116.data.userId,
        "rewardId": rewards.CORE_REWARDS_GARMIN_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_1_THRIVA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_116.data.userId,
        "rewardId": rewards.CORE_REWARDS_THRIVA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_2_BOOTS = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_117.data.userId,
        "rewardId": rewards.CORE_REWARDS_BOOTS_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_2_YORK = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_117.data.userId,
        "rewardId": rewards.CORE_REWARDS_YORK_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_2_URBAN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_117.data.userId,
        "rewardId": rewards.CORE_REWARDS_URBAN_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_2_BUPA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_117.data.userId,
        "rewardId": rewards.CORE_REWARDS_BUPA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_2_LIVING_DNA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_117.data.userId,
        "rewardId": rewards.CORE_REWARDS_LIVING_DNA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_2_GARMIN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_117.data.userId,
        "rewardId": rewards.CORE_REWARDS_GARMIN_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_2_THRIVA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_117.data.userId,
        "rewardId": rewards.CORE_REWARDS_THRIVA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_3_BOOTS = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_118.data.userId,
        "rewardId": rewards.CORE_REWARDS_BOOTS_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_3_YORK = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_118.data.userId,
        "rewardId": rewards.CORE_REWARDS_YORK_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_3_URBAN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_118.data.userId,
        "rewardId": rewards.CORE_REWARDS_URBAN_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_3_BUPA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_118.data.userId,
        "rewardId": rewards.CORE_REWARDS_BUPA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_3_LIVING_DNA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_118.data.userId,
        "rewardId": rewards.CORE_REWARDS_LIVING_DNA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_3_GARMIN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_118.data.userId,
        "rewardId": rewards.CORE_REWARDS_GARMIN_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_3_THRIVA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_118.data.userId,
        "rewardId": rewards.CORE_REWARDS_THRIVA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_4_BOOTS = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_119.data.userId,
        "rewardId": rewards.CORE_REWARDS_BOOTS_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_4_YORK = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_119.data.userId,
        "rewardId": rewards.CORE_REWARDS_YORK_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_4_URBAN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_119.data.userId,
        "rewardId": rewards.CORE_REWARDS_URBAN_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_4_BUPA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_119.data.userId,
        "rewardId": rewards.CORE_REWARDS_BUPA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_4_LIVING_DNA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_119.data.userId,
        "rewardId": rewards.CORE_REWARDS_LIVING_DNA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_4_GARMIN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_119.data.userId,
        "rewardId": rewards.CORE_REWARDS_GARMIN_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_4_THRIVA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_119.data.userId,
        "rewardId": rewards.CORE_REWARDS_THRIVA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_5_BOOTS = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_120.data.userId,
        "rewardId": rewards.CORE_REWARDS_BOOTS_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_5_YORK = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_120.data.userId,
        "rewardId": rewards.CORE_REWARDS_YORK_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_5_URBAN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_120.data.userId,
        "rewardId": rewards.CORE_REWARDS_URBAN_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_5_BUPA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_120.data.userId,
        "rewardId": rewards.CORE_REWARDS_BUPA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_5_LIVING_DNA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_120.data.userId,
        "rewardId": rewards.CORE_REWARDS_LIVING_DNA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_5_GARMIN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_120.data.userId,
        "rewardId": rewards.CORE_REWARDS_GARMIN_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_5_THRIVA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_120.data.userId,
        "rewardId": rewards.CORE_REWARDS_THRIVA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_6_BOOTS = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_121.data.userId,
        "rewardId": rewards.CORE_REWARDS_BOOTS_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_6_YORK = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_121.data.userId,
        "rewardId": rewards.CORE_REWARDS_YORK_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_6_URBAN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_121.data.userId,
        "rewardId": rewards.CORE_REWARDS_URBAN_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_6_BUPA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_121.data.userId,
        "rewardId": rewards.CORE_REWARDS_BUPA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_6_LIVING_DNA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_121.data.userId,
        "rewardId": rewards.CORE_REWARDS_LIVING_DNA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_6_GARMIN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_121.data.userId,
        "rewardId": rewards.CORE_REWARDS_GARMIN_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_6_THRIVA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_121.data.userId,
        "rewardId": rewards.CORE_REWARDS_THRIVA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_7_BOOTS = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_127.data.userId,
        "rewardId": rewards.CORE_REWARDS_BOOTS_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_7_YORK = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_127.data.userId,
        "rewardId": rewards.CORE_REWARDS_YORK_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_7_URBAN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_127.data.userId,
        "rewardId": rewards.CORE_REWARDS_URBAN_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_7_BUPA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_127.data.userId,
        "rewardId": rewards.CORE_REWARDS_BUPA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_7_LIVING_DNA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_127.data.userId,
        "rewardId": rewards.CORE_REWARDS_LIVING_DNA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_7_GARMIN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_127.data.userId,
        "rewardId": rewards.CORE_REWARDS_GARMIN_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_7_THRIVA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_127.data.userId,
        "rewardId": rewards.CORE_REWARDS_THRIVA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_8_BOOTS = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_130.data.userId,
        "rewardId": rewards.CORE_REWARDS_BOOTS_GHI_REWARDS.data._id, 
        "state": "claimable",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_8_YORK = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_130.data.userId,
        "rewardId": rewards.CORE_REWARDS_YORK_GHI_REWARDS.data._id, 
        "state": "claimable",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_8_URBAN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_130.data.userId,
        "rewardId": rewards.CORE_REWARDS_URBAN_GHI_REWARDS.data._id, 
        "state": "claimable",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_8_BUPA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_130.data.userId,
        "rewardId": rewards.CORE_REWARDS_BUPA_GHI_REWARDS.data._id, 
        "state": "claimable",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_8_LIVING_DNA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_130.data.userId,
        "rewardId": rewards.CORE_REWARDS_LIVING_DNA_GHI_REWARDS.data._id, 
        "state": "claimable",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_8_GARMIN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_130.data.userId,
        "rewardId": rewards.CORE_REWARDS_GARMIN_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_8_THRIVA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_130.data.userId,
        "rewardId": rewards.CORE_REWARDS_THRIVA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_9_BOOTS = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_131.data.userId,
        "rewardId": rewards.CORE_REWARDS_BOOTS_GHI_REWARDS.data._id, 
        "state": "claimable",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_9_YORK = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_131.data.userId,
        "rewardId": rewards.CORE_REWARDS_YORK_GHI_REWARDS.data._id, 
        "state": "claimable",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_9_URBAN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_131.data.userId,
        "rewardId": rewards.CORE_REWARDS_URBAN_GHI_REWARDS.data._id, 
        "state": "claimable",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_9_BUPA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_131.data.userId,
        "rewardId": rewards.CORE_REWARDS_BUPA_GHI_REWARDS.data._id, 
        "state": "claimable",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_9_LIVING_DNA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_131.data.userId,
        "rewardId": rewards.CORE_REWARDS_LIVING_DNA_GHI_REWARDS.data._id, 
        "state": "claimable",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_9_GARMIN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_131.data.userId,
        "rewardId": rewards.CORE_REWARDS_GARMIN_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_9_THRIVA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_131.data.userId,
        "rewardId": rewards.CORE_REWARDS_THRIVA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_10_BOOTS = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_133.data.userId,
        "rewardId": rewards.CORE_REWARDS_BOOTS_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_10_YORK = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_133.data.userId,
        "rewardId": rewards.CORE_REWARDS_YORK_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_10_URBAN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_133.data.userId,
        "rewardId": rewards.CORE_REWARDS_URBAN_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_10_BUPA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_133.data.userId,
        "rewardId": rewards.CORE_REWARDS_BUPA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_10_LIVING_DNA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_133.data.userId,
        "rewardId": rewards.CORE_REWARDS_LIVING_DNA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_10_GARMIN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_133.data.userId,
        "rewardId": rewards.CORE_REWARDS_GARMIN_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_10_THRIVA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_133.data.userId,
        "rewardId": rewards.CORE_REWARDS_THRIVA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_11_BOOTS = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_134.data.userId,
        "rewardId": rewards.CORE_REWARDS_BOOTS_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_11_YORK = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_134.data.userId,
        "rewardId": rewards.CORE_REWARDS_YORK_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_11_URBAN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_134.data.userId,
        "rewardId": rewards.CORE_REWARDS_URBAN_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_11_BUPA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_134.data.userId,
        "rewardId": rewards.CORE_REWARDS_BUPA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_11_LIVING_DNA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_134.data.userId,
        "rewardId": rewards.CORE_REWARDS_LIVING_DNA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_11_GARMIN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_134.data.userId,
        "rewardId": rewards.CORE_REWARDS_GARMIN_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_11_THRIVA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_134.data.userId,
        "rewardId": rewards.CORE_REWARDS_THRIVA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_12_BOOTS = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_135.data.userId,
        "rewardId": rewards.CORE_REWARDS_BOOTS_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_12_YORK = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_135.data.userId,
        "rewardId": rewards.CORE_REWARDS_YORK_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_12_URBAN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_135.data.userId,
        "rewardId": rewards.CORE_REWARDS_URBAN_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_12_BUPA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_135.data.userId,
        "rewardId": rewards.CORE_REWARDS_BUPA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_12_LIVING_DNA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_135.data.userId,
        "rewardId": rewards.CORE_REWARDS_LIVING_DNA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_12_GARMIN = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_135.data.userId,
        "rewardId": rewards.CORE_REWARDS_GARMIN_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;

export const CRUR_12_THRIVA = {
    type: "mongo",
    modelName: "core_reward_user_restriction",
    data: {
        "_id": generateRandomMongoId(),
        "userId": users.USER_135.data.userId,
        "rewardId": rewards.CORE_REWARDS_THRIVA_GHI_REWARDS.data._id, 
        "state": "tease",
        "source": "goal_products",
        "createdAt": moment(),
        "updatedAt": moment(),
        "__v": 0
    },
} as IDatabaseItem;
