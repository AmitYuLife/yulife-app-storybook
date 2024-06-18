import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as cpe from "./customer_product_entity";
import moment from "moment";
import { CUSTOMER_31, CUSTOMER_34, CUSTOMER_94 } from "./customers";
import {
    BUSINESS_PRODUCT_13_GHI_REWARDS,
    BUSINESS_PRODUCT_3,
    BUSINESS_PRODUCT_4_GCI,
    BUSINESS_PRODUCT_4_GIP,
    BUSINESS_PRODUCT_4_RGL,
} from "./business_product";

const type = "postgres";
const modelName = "customer_business_product";

export const CGP_31 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_3.product.data.product_id,
        customer_product_id: cpe.CPE_31.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(3, "months").toDate(),
        data: {
            salary: 60000,
            country: "UK",
            date_of_birth: CUSTOMER_31.data.date_of_birth,
        },
    },
} as IDatabaseItem;

export const CGP_34_RGL = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_RGL.product.data.product_id,
        customer_product_id: cpe.CPE_34_RGL.data.customer_product_id,
        category_id: 1,
        start_date: moment().toDate(),
        data: {
            date_of_birth: CUSTOMER_34.data.date_of_birth,
            salary: 100000,
            country: "UK",
        },
    },
} as IDatabaseItem;

export const CGP_34_GIP = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_GIP.product.data.product_id,
        customer_product_id: cpe.CPE_34_GIP.data.customer_product_id,
        category_id: 1,
        start_date: moment().toDate(),
        data: {
            salary: 100000,
            country: "UK",
            date_of_birth: CUSTOMER_34.data.date_of_birth,
        },
    },
} as IDatabaseItem;

export const CGP_34_GCI = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_GCI.product.data.product_id,
        customer_product_id: cpe.CPE_34_GCI.data.customer_product_id,
        category_id: 1,
        start_date: moment().toDate(),
        data: {
            salary: 100000,
            country: "UK",
            date_of_birth: CUSTOMER_34.data.date_of_birth,
        },
    },
} as IDatabaseItem;

export const CGP_94_RGL = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_GIP.product.data.product_id,
        customer_product_id: cpe.CPE_94_GIP.data.customer_product_id,
        category_id: 1,
        start_date: moment().toDate(),
        data: {
            date_of_birth: CUSTOMER_94.data.date_of_birth,
            salary: 100000,
        },
    },
} as IDatabaseItem;

export const CBP_GHI_REWARDS = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        customer_product_id: cpe.CPE_116_GHI_REWARDS.data.customer_product_id,
        category_id: "1",
        start_date: "2023-04-26",
        archived: false,
        data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs", "externalMembershipNumber":"12121212"}',
    },
} as IDatabaseItem;

export const CBP_GHI_REWARDS_2 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        customer_product_id: cpe.CPE_117_GHI_REWARDS.data.customer_product_id,
        category_id: "1",
        start_date: "2023-04-26",
        archived: false,
        data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs"}',
    },
} as IDatabaseItem;
