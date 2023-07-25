
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_1 } from "../postgres/business";
import { CUSTOMER_86 } from "../postgres/customers";
import { SOCIAL_GROUP_1 } from "./social_groups";
import { SOCIAL_GROUP_LEADERBOARD_1, SOCIAL_GROUP_LEADERBOARD_2_STEPS, SOCIAL_GROUP_LEADERBOARD_7 } from "./social_group_leaderboards";
import { USER_40, USER_58, USER_67, USER_68, USER_71, USER_76, USER_86 } from "./users";

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_40 = {
    type:"mongo",
    modelName:"user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: USER_40.data.userId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_2_STEPS.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_58 = {
    type:"mongo",
    modelName:"user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: false,
        archived: false,
        isLocked: false,
        userId: USER_58.data.userId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_7.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_71 = {
    type:"mongo",
    modelName:"user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: USER_71.data.userId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_1.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_67 = {
    type:"mongo",
    modelName:"user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: USER_67.data.userId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_1.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_68 = {
    type:"mongo",
    modelName:"user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: USER_68.data.userId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_1.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_76 = {
    type:"mongo",
    modelName:"user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: false,
        archived: false,
        isLocked: false,
        userId: USER_76.data.userId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_1.data._id
    }
} as IDatabaseItem


export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_86 = {
    type:"mongo",
    modelName:"user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: false,
        archived: false,
        isLocked: false,
        userId: USER_86.data.userId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_1.data._id
    }
} as IDatabaseItem


