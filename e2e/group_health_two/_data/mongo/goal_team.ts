import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import * as customers from "../postgres/customers";
import * as cpe from "../postgres/customer_product_entity";
import moment from "moment";
import { GOAL_PRODUCTS_1, GOAL_PRODUCTS_3 } from "./goal_products";

export const GOAL_TEAM_13_GHI_LEAVER = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        teamName: customers.CUSTOMER_130_GHI_LEAVER.data.customerId,
        customerProductId: cpe.CPE_130_GHI_LEAVER.data.customer_product_id,
        parentType: "goal_products",
        iterationId: "1",
        createdAt: moment().subtract(3, "days").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().add(7, "days").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 199,
        },
    },
} as IDatabaseItem;

export const GOAL_TEAM_14 = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        teamName: customers.CUSTOMER_131_GHI_REWARDS.data.customerId,
        customerProductId: cpe.CPE_131_GHI_REWARDS.data.customer_product_id,
        parentType: "goal_products",
        iterationId: "2",
        createdAt: moment().subtract(3, "days").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().add(7, "days").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 8,
        },
    },
} as IDatabaseItem;

export const GOAL_TEAM_15 = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        teamName: customers.CUSTOMER_133_GHI_FUTURE.data.customerId,
        customerProductId: cpe.CPE_133_GHI_FUTURE.data.customer_product_id,
        parentType: "goal_products",
        iterationId: "3",
        createdAt: moment().subtract(3, "days").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().add(14, "days").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 0,
        },
    },
} as IDatabaseItem;

export const GOAL_TEAM_16_GHI_REWARDS = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        teamName: customers.CUSTOMER_134_GHI_REWARDS.data.customerId,
        customerProductId: cpe.CPE_134_GHI_REWARDS.data.customer_product_id,
        parentType: "goal_products",
        iterationId: "4",
        createdAt: moment().subtract(3, "days").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().add(7, "days").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 4,
        },
    },
} as IDatabaseItem;

export const GOAL_TEAM_17 = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        teamName: customers.CUSTOMER_135_GHI_FUTURE.data.customerId,
        customerProductId: cpe.CPE_135_GHI_FUTURE.data.customer_product_id,
        parentType: "goal_products",
        iterationId: "5",
        createdAt: moment().subtract(3, "days").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().add(14, "days").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 0,
        },
    },
} as IDatabaseItem;

export const GOAL_TEAM_18 = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        teamName: customers.CUSTOMER_136_GHI_REWARDS.data.customerId,
        customerProductId: cpe.CPE_136_GHI_REWARDS.data.customer_product_id,
        parentType: "goal_products",
        iterationId: "6",
        createdAt: moment().subtract(3, "days").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().add(14, "days").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 8,
        },
    },
} as IDatabaseItem;

export const GOAL_TEAM_19 = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_3.data._id,
        teamName: customers.CUSTOMER_137_GHI_REWARDS.data.customerId,
        customerProductId: cpe.CPE_137_GHI_REWARDS.data.customer_product_id,
        parentType: "goal_products",
        iterationId: "7",
        createdAt: moment().subtract(1, "years").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().startOf("day").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 175,
        },
    },
} as IDatabaseItem;

export const GOAL_TEAM_20 = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        teamName: customers.CUSTOMER_139_GHI_REWARDS.data.customerId,
        customerProductId: cpe.CPE_139_GHI_REWARDS.data.customer_product_id,
        parentType: "goal_products",
        iterationId: "8",
        createdAt: moment().subtract(3, "days").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().add(14, "days").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 200,
        },
    },
} as IDatabaseItem;

export const GOAL_TEAM_21 = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_3.data._id,
        teamName: customers.CUSTOMER_140_GHI_REWARDS.data.customerId,
        customerProductId: cpe.CPE_140_GHI_REWARDS.data.customer_product_id,
        parentType: "goal_products",
        iterationId: "9",
        createdAt: moment().subtract(11, "months").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().startOf("day").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 0,
        },
    },
} as IDatabaseItem;

export const GOAL_TEAM_GH_REMOVED = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        teamName: customers.CUSTOMER_GH_REMOVED.data.customerId,
        customerProductId: cpe.CPE_GH_REMOVED.data.customer_product_id,
        parentType: "goal_products",
        iterationId: "11",
        createdAt: moment().subtract(3, "days").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().add(14, "months").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 3,
        completed: {
            user_levelled_up: 3,
        },
    },
} as IDatabaseItem;
