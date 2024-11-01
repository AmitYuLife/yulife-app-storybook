import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework";
import * as customers from "../postgres/customers";
import * as cpe from "../postgres/customer_product_entity";
import moment from "moment";
import { GOAL_PRODUCTS_1, GOAL_PRODUCTS_3 } from "./goal_products";

export const GOAL_TEAM_6_GHI_REWARDS = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        teamName: customers.CUSTOMER_116_GHI_REWARDS.data.customerId,
        customerProductId: cpe.CPE_116_GHI_REWARDS.data.customer_product_id,
        parentType: "goal_products",
        iterationId: "1",
        createdAt: moment().subtract(3, "days").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().add(7, "days").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 4,
        },
    },
} as IDatabaseItem;

export const GOAL_TEAM_7_GHI_REWARDS = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        teamName: customers.CUSTOMER_117_GHI_REWARDS.data.customerId,
        customerProductId: cpe.CPE_117_GHI_REWARDS.data.customer_product_id,
        parentType: "goal_products",
        iterationId: "1",
        createdAt: moment().subtract(3, "days").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().add(7, "days").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 9,
        },
    },
} as IDatabaseItem;

export const GOAL_TEAM_8_GHI_REWARDS = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        teamName: customers.CUSTOMER_118_GHI_REWARDS.data.customerId,
        customerProductId: cpe.CPE_118_GHI_REWARDS.data.customer_product_id,
        parentType: "goal_products",
        iterationId: "1",
        createdAt: moment().subtract(3, "days").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().add(7, "days").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 49,
        },
    },
} as IDatabaseItem;

export const GOAL_TEAM_9_GHI_REWARDS = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        teamName: customers.CUSTOMER_119_GHI_REWARDS.data.customerId,
        customerProductId: cpe.CPE_119_GHI_REWARDS.data.customer_product_id,
        parentType: "goal_products",
        iterationId: "1",
        createdAt: moment().subtract(3, "days").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().add(7, "days").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 99,
        },
    },
} as IDatabaseItem;

export const GOAL_TEAM_10_GHI_REWARDS = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        teamName: customers.CUSTOMER_120_GHI_REWARDS.data.customerId,
        customerProductId: cpe.CPE_120_GHI_REWARDS.data.customer_product_id,
        parentType: "goal_products",
        iterationId: "1",
        createdAt: moment().subtract(3, "days").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().add(7, "days").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 149,
        },
    },
} as IDatabaseItem;

export const GOAL_TEAM_11_GHI_REWARDS = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        teamName: customers.CUSTOMER_121_GHI_REWARDS.data.customerId,
        customerProductId: cpe.CPE_121_GHI_REWARDS.data.customer_product_id,
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

export const GOAL_TEAM_12_GHI_REWARDS = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        teamName: customers.CUSTOMER_127_GHI_REWARDS.data.customerId,
        customerProductId: cpe.CPE_127_GHI_REWARDS.data.customer_product_id,
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

export const GOAL_TEAM_19 = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_3.data._id,
        teamName: customers.CUSTOMER_137_GHI_REWARDS.data.customerId,
        customerProductId: cpe.CPE_137_GHI_REWARDS.data.customer_product_id,
        parentType: "goal_products",
        iterationId: "1",
        createdAt: moment().subtract(1, "years").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().startOf("day").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 175,
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
        iterationId: "1",
        createdAt: moment().subtract(1, "years").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().startOf("day").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 0,
        },
    },
} as IDatabaseItem;

export const GOAL_TEAM_22 = {
    type: "mongo",
    modelName: "goal_team",
    data: {
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        teamName: customers.CUSTOMER_GHI_STARTED.data.customerId,
        customerProductId: cpe.CPE_GHI_STARTED.data.customer_product_id,
        parentType: "goal_products",
        iterationId: "1",
        createdAt: moment().subtract(7, "days").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().add(7, "days").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 0,
        },
    },
} as IDatabaseItem;
