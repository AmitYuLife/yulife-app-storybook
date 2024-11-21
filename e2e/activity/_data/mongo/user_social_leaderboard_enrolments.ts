import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "../postgres/customers";
import {
    SOCIAL_GROUP_LEADERBOARD_1,
    SOCIAL_GROUP_LEADERBOARD_2_STEPS,
    SOCIAL_GROUP_LEADERBOARD_5_RULE_STEPS,
    SOCIAL_GROUP_LEADERBOARD_5_RULE_SUDOKU,
    SOCIAL_GROUP_LEADERBOARD_5_STEPS,
    SOCIAL_GROUP_LEADERBOARD_5_SUDOKU,
    SOCIAL_GROUP_LEADERBOARD_5_TAG_STEPS,
    SOCIAL_GROUP_LEADERBOARD_5_TAG_SUDOKU,
    SOCIAL_GROUP_LEADERBOARD_ACTIVE_STEPS,
    SOCIAL_GROUP_LEADERBOARD_ARCHIVED_STEPS,
    SOCIAL_GROUP_LEADERBOARD_BA3_STEPS,
    SOCIAL_GROUP_LEADERBOARD_C1_STEPS,
    SOCIAL_GROUP_LEADERBOARD_C1_SUDOKU,
    SOCIAL_GROUP_LEADERBOARD_C2_STEPS,
    SOCIAL_GROUP_LEADERBOARD_C3_STEPS,
    SOCIAL_GROUP_LEADERBOARD_C3_SUDOKU,
    SOCIAL_GROUP_LEADERBOARD_C4_STEPS,
    SOCIAL_GROUP_LEADERBOARD_CONSENT_STEPS,
    SOCIAL_GROUP_LEADERBOARD_LOCKED_STEPS,
} from "./social_group_leaderboards";
import { USER_20, USER_39, USER_40, USER_44, USER_71 } from "./users";

const globalLeaversStepsId = "55366dfe40f828ef2775a91c";
const globalLeaversSudokuId = "5536849a6ce716c125256186";

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_20 = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: USER_20.data.userId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_2_STEPS.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_40 = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: USER_40.data.userId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_2_STEPS.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_71 = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: USER_71.data.userId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_1.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_18_C1_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: customer.CUSTOMER_18.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_16_C1_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: false,
        archived: false,
        isLocked: false,
        userId: customer.CUSTOMER_16.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_16_C1_SUDOKU = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: false,
        archived: false,
        isLocked: false,
        userId: customer.CUSTOMER_16.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C1_SUDOKU.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_17_C1_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: customer.CUSTOMER_17.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_17_C1_SUDOKU = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: false,
        archived: false,
        isLocked: false,
        userId: customer.CUSTOMER_17.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C1_SUDOKU.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_19_C1_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: customer.CUSTOMER_19.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_19_C2_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: customer.CUSTOMER_19.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C2_STEPS.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_20_C2_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: customer.CUSTOMER_20.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C2_STEPS.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_21_C1_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: customer.CUSTOMER_21.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_21_C2_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: false,
        archived: false,
        isLocked: false,
        userId: customer.CUSTOMER_21.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C2_STEPS.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_CONCURRENT_ENROLLMENT_39_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: customer.CUSTOMER_39.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_BA3_STEPS.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_39_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: USER_39.data.userId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_5_STEPS.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_39_SUDOKU = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: false,
        archived: false,
        isLocked: false,
        userId: USER_39.data.userId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_5_SUDOKU.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_39_RULE_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: USER_39.data.userId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_5_RULE_STEPS.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_39_RULE_SUDOKU = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: false,
        archived: false,
        isLocked: false,
        userId: USER_39.data.userId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_5_RULE_SUDOKU.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_39_TAG_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: USER_39.data.userId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_5_TAG_STEPS.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_39_TAG_SUDOKU = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: false,
        archived: false,
        isLocked: false,
        userId: USER_39.data.userId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_5_TAG_SUDOKU.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_44_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: USER_44.data.userId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_5_STEPS.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_44_RULE_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: true,
        // Intentionally archived - mimics behaviour of employee info changing
        isLocked: false,
        userId: USER_44.data.userId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_5_RULE_STEPS.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_27_C1_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: customer.CUSTOMER_27.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C3_STEPS.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_27_C1_SUDOKU = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: customer.CUSTOMER_27.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C3_SUDOKU.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_28_C1_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: customer.CUSTOMER_28.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C3_STEPS.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_40_C2_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: customer.CUSTOMER_40.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C2_STEPS.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_47_C1_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: customer.CUSTOMER_47.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_50_C1_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: customer.CUSTOMER_50.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_73_BA3_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: customer.CUSTOMER_73.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_BA3_STEPS.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_73_C1_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: customer.CUSTOMER_73.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_84_C1_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: customer.CUSTOMER_84.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_90_C1_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: customer.CUSTOMER_90.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id,
},
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_90_C4_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: customer.CUSTOMER_90.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C4_STEPS.data._id,
},
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_138_ACTIVE_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: customer.CUSTOMER_138.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_ACTIVE_STEPS.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_138_LOCKED_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: false,
        archived: false,
        isLocked: true,
        userId: customer.CUSTOMER_138.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_LOCKED_STEPS.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_138_CONSENT_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: false,
        archived: false,
        isLocked: false,
        userId: customer.CUSTOMER_138.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_CONSENT_STEPS.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_138_ARCHIVED_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: true,
        isLocked: false,
        userId: customer.CUSTOMER_138.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_ARCHIVED_STEPS.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_139_ACTIVE_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: customer.CUSTOMER_139.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_ACTIVE_STEPS.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_139_LOCKED_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: customer.CUSTOMER_139.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_LOCKED_STEPS.data._id,
    },
} as IDatabaseItem;

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_139_CONSENT_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: customer.CUSTOMER_139.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_CONSENT_STEPS.data._id,
    },
} as IDatabaseItem;
