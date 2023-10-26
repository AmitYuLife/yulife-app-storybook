
import { generateRandomMongoId, IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_ACCOUNT_1 } from "../postgres/business";
import { CUSTOMER_16, CUSTOMER_17, CUSTOMER_18, CUSTOMER_19, CUSTOMER_20, CUSTOMER_21, CUSTOMER_27, CUSTOMER_28, CUSTOMER_40, CUSTOMER_47, CUSTOMER_50, CUSTOMER_52, CUSTOMER_54, CUSTOMER_55, CUSTOMER_56, CUSTOMER_57, CUSTOMER_58, CUSTOMER_73, CUSTOMER_84, CUSTOMER_86, CUSTOMER_LEAVER } from "../postgres/customers";
import { SOCIAL_GROUP_1 } from "./social_groups";
import { SOCIAL_GROUP_LEADERBOARD_1, SOCIAL_GROUP_LEADERBOARD_2_STEPS, SOCIAL_GROUP_LEADERBOARD_7_STEPS, SOCIAL_GROUP_LEADERBOARD_7_SUDOKU, SOCIAL_GROUP_LEADERBOARD_C1_STEPS, SOCIAL_GROUP_LEADERBOARD_C1_SUDOKU, SOCIAL_GROUP_LEADERBOARD_C2_STEPS, SOCIAL_GROUP_LEADERBOARD_C3_STEPS, SOCIAL_GROUP_LEADERBOARD_C3_SUDOKU, SOCIAL_GROUP_LEADERBOARD_STEPS_1 } from "./social_group_leaderboards";
import { USER_20, USER_40, USER_58, USER_67, USER_68, USER_71, USER_76, USER_86 } from "./users";

const globalLeaversStepsId = "55366dfe40f828ef2775a91c"
const globalLeaversSudokuId = "5536849a6ce716c125256186"

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_20 = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: USER_20.data.userId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_2_STEPS.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_40 = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
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
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
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
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
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
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
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
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
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
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
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
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
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
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: false,
        archived: false,
        isLocked: false,
        userId: USER_86.data.userId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_1.data._id
    }
} as IDatabaseItem

// Daily Step Social Leaderboard Enrollments

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_18_C1_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: CUSTOMER_18.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_16_C1_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: false,
        archived: false,
        isLocked: false,
        userId: CUSTOMER_16.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_16_C1_SUDOKU = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: false,
        archived: false,
        isLocked: false,
        userId: CUSTOMER_16.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C1_SUDOKU.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_17_C1_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: CUSTOMER_17.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_17_C1_SUDOKU = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: false,
        archived: false,
        isLocked: false,
        userId: CUSTOMER_17.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C1_SUDOKU.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_19_C1_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: CUSTOMER_19.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_19_C2_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: CUSTOMER_19.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C2_STEPS.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_20_C2_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: CUSTOMER_20.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C2_STEPS.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_21_C1_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: CUSTOMER_21.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_21_C2_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: false,
        archived: false,
        isLocked: false,
        userId: CUSTOMER_21.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C2_STEPS.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_27_C1_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: CUSTOMER_27.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C3_STEPS.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_27_C1_SUDOKU = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: CUSTOMER_27.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C3_SUDOKU.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_28_C1_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: CUSTOMER_28.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C3_STEPS.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_40_C2_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: CUSTOMER_40.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C2_STEPS.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_47_C1_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: CUSTOMER_47.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_50_C1_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: CUSTOMER_50.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_52_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
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
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
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
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
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
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
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
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
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
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: CUSTOMER_58.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_7_STEPS.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_73_C1_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: CUSTOMER_73.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id
    }
} as IDatabaseItem

export const USER_SOCIAL_LEADERBOARD_ENROLLMENT_84_C1_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: CUSTOMER_84.data.customerId,
        socialGroupLeaderboard: SOCIAL_GROUP_LEADERBOARD_C1_STEPS.data._id
    }
} as IDatabaseItem

export const USER_LEAVER_STEPS = {
    type: "mongo",
    modelName: "user_social_leaderboard_enrolments",
    data: {
        _id: generateRandomMongoId(),
        consent: true,
        archived: false,
        isLocked: false,
        userId: CUSTOMER_LEAVER.data.customerId,
        socialGroupLeaderboard: globalLeaversStepsId
    }
} as IDatabaseItem


