import { IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import moment = require('moment');
import { CUSTOMER_116_GHI_REWARDS, CUSTOMER_117_GHI_REWARDS, CUSTOMER_118_GHI_REWARDS, CUSTOMER_119_GHI_REWARDS, CUSTOMER_120_GHI_REWARDS, CUSTOMER_52, CUSTOMER_71, CUSTOMER_72, CUSTOMER_81 } from "../postgres/customers";
import { GOALS_2, GOALS_3, GOALS_4, GOALS_5 } from "./goals";
import { generateRandomMongoId } from "@yu-life/yulife-bdd-framework"
import { GOAL_PRODUCTS_1 } from "./goal_products";
import { CPE_116_GHI_REWARDS, CPE_117_GHI_REWARDS, CPE_118_GHI_REWARDS, CPE_119_GHI_REWARDS, CPE_120_GHI_REWARDS } from "../postgres/customer_product_entity";


export const GOAL_TEAM_1 = {
    type: "mongo",
    modelName: "goal_team",
    data:{
        _id: generateRandomMongoId(),
        goal: GOALS_2.data._id,
        teamName: CUSTOMER_52.data._id,
        createdAt: moment(),
        membersCount: 0,
        overallProgress: 0,
    },
} as IDatabaseItem

export const GOAL_TEAM_3 = {
    type: "mongo",
    modelName: "goal_team",
    data:{
        _id: generateRandomMongoId(),
        goal: GOALS_3.data._id,
        teamName: CUSTOMER_71.data._id,
        createdAt: moment(),
        membersCount: 0,
        overallProgress: 0,
    },
} as IDatabaseItem

export const GOAL_TEAM_4 = {
    type: "mongo",
    modelName: "goal_team",
    data:{
        _id: generateRandomMongoId(),
        goal: GOALS_4.data._id,
        teamName: CUSTOMER_72.data._id,
        createdAt: moment(),
        membersCount: 0,
        overallProgress: 0,
    },
} as IDatabaseItem

export const GOAL_TEAM_5 = {
    type: "mongo",
    modelName: "goal_team",
    data:{
        _id: generateRandomMongoId(),
        goal: GOALS_5.data._id,
        teamName: CUSTOMER_81.data._id,
        createdAt: moment().subtract(3, "days").format("YYYY-MM-DDTHH:mm:ss"),
        membersCount: 0,
        overallProgress: 0,
    },
} as IDatabaseItem

export const GOAL_TEAM_6_GHI_REWARDS = {
    type: "mongo",
    modelName: "goal_team",
    data:{
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        teamName: CUSTOMER_116_GHI_REWARDS.data._id,
        customerProductId: CPE_116_GHI_REWARDS.data.customer_product_id,
        parentType: "goal_products",
        iterationId: "1",
        createdAt: moment().subtract(3, "days").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().add(7, "days").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 4
          }
    },
} as IDatabaseItem

export const GOAL_TEAM_7_GHI_REWARDS = {
    type: "mongo",
    modelName: "goal_team",
    data:{
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        teamName: CUSTOMER_117_GHI_REWARDS.data._id,
        customerProductId: CPE_117_GHI_REWARDS.data.customer_product_id,
        parentType: "goal_products",
        iterationId: "1",
        createdAt: moment().subtract(3, "days").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().add(7, "days").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 9
          }
    },
} as IDatabaseItem

export const GOAL_TEAM_8_GHI_REWARDS = {
    type: "mongo",
    modelName: "goal_team",
    data:{
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        teamName: CUSTOMER_118_GHI_REWARDS.data._id,
        customerProductId: CPE_118_GHI_REWARDS.data.customer_product_id,
        parentType: "goal_products",
        iterationId: "1",
        createdAt: moment().subtract(3, "days").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().add(7, "days").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 49
          }
    },
} as IDatabaseItem

export const GOAL_TEAM_9_GHI_REWARDS = {
    type: "mongo",
    modelName: "goal_team",
    data:{
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        teamName: CUSTOMER_119_GHI_REWARDS.data._id,
        customerProductId: CPE_119_GHI_REWARDS.data.customer_product_id,
        parentType: "goal_products",
        iterationId: "1",
        createdAt: moment().subtract(3, "days").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().add(7, "days").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 99
          }
    },
} as IDatabaseItem

export const GOAL_TEAM_10_GHI_REWARDS = {
    type: "mongo",
    modelName: "goal_team",
    data:{
        _id: generateRandomMongoId(),
        goal: GOAL_PRODUCTS_1.data._id,
        teamName: CUSTOMER_120_GHI_REWARDS.data._id,
        customerProductId: CPE_120_GHI_REWARDS.data.customer_product_id,
        parentType: "goal_products",
        iterationId: "1",
        createdAt: moment().subtract(3, "days").format("YYYY-MM-DDTHH:mm:ss"),
        endDate: moment().add(7, "days").format("YYYY-MM-DD"),
        membersCount: 0,
        overallProgress: 0,
        completed: {
            user_levelled_up: 149
          }
    },
} as IDatabaseItem
