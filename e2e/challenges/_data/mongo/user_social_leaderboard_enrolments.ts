
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_52, CUSTOMER_54, CUSTOMER_55, CUSTOMER_56, CUSTOMER_57, CUSTOMER_58, CUSTOMER_84 } from "../postgres/customers";
import { SOCIAL_GROUP_LEADERBOARD_1, SOCIAL_GROUP_LEADERBOARD_7_STEPS, SOCIAL_GROUP_LEADERBOARD_7_SUDOKU, SOCIAL_GROUP_LEADERBOARD_C1_STEPS, SOCIAL_GROUP_LEADERBOARD_STEPS_1 } from "./social_group_leaderboards";
import { USER_58, USER_67, USER_68, USER_71, USER_76, USER_86 } from "./users";

const type = "mongo";
const modelName = "user_social_leaderboard_enrolments";

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_58 = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        consent: false,
        archived: false,
        isLocked: false,
        userId: USER_58.data.userId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_7_SUDOKU.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_71 = {
    type,
    modelName,
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
    type,
    modelName,
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
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: USER_68.data.userId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_1.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_76_STEPS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        consent: false,
        archived: false,
        isLocked: false,
        userId: USER_76.data.userId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_STEPS_1.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_76_SUDOKU = {
    type,
    modelName,
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
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        consent: false,
        archived: false,
        isLocked: false,
        userId: USER_86.data.userId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_1.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_52_STEPS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: CUSTOMER_52.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_7_STEPS.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_54_STEPS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: CUSTOMER_54.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_7_STEPS.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_55_STEPS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: CUSTOMER_55.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_7_STEPS.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_56_STEPS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: CUSTOMER_56.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_7_STEPS.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_57_STEPS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: CUSTOMER_57.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_7_STEPS.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_58_STEPS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: CUSTOMER_58.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_7_STEPS.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_84_C1_STEPS = {
    type,
    modelName,
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: CUSTOMER_84.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id
    }
} as IDatabaseItem
