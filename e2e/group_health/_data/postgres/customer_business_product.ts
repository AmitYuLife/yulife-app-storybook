import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as cpe from "./customer_product_entity";
import moment from "moment";
import {
    BUSINESS_PRODUCT_13_GHI_REWARDS,
    BUSINESS_PRODUCT_14_GHI,
    BUSINESS_PRODUCT_15_GHI_REWARDS,
    BUSINESS_PRODUCT_8_GHI,
    BUSINESS_PRODUCT_16_GHI_REWARDS,
    BUSINESS_PRODUCT_17_METLIFE_GIP,
} from "./business_product";

const type = "postgres";
const modelName = "customer_business_product";


export const CBP_GHI_FUTURE = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_8_GHI.product.data.product_id,
        customer_product_id: cpe.CPE_GHI_FUTURE.data.customer_product_id,
        category_id: "1",
        start_date: "2023-04-26",
        archived: false,
        data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs"}',
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

export const CBP_GHI_REWARDS_3 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        customer_product_id: cpe.CPE_118_GHI_REWARDS.data.customer_product_id,
        category_id: "1",
        start_date: "2023-04-26",
        archived: false,
        data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs"}',
    },
} as IDatabaseItem;

export const CBP_GHI_REWARDS_4 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        customer_product_id: cpe.CPE_119_GHI_REWARDS.data.customer_product_id,
        category_id: "1",
        start_date: "2023-04-26",
        archived: false,
        data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs"}',
    },
} as IDatabaseItem;

export const CBP_GHI_REWARDS_5 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        customer_product_id: cpe.CPE_120_GHI_REWARDS.data.customer_product_id,
        category_id: "1",
        start_date: "2023-04-26",
        archived: false,
        data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs"}',
    },
} as IDatabaseItem;

export const CBP_GHI_REWARDS_6 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        customer_product_id: cpe.CPE_121_GHI_REWARDS.data.customer_product_id,
        category_id: "1",
        start_date: "2023-04-26",
        archived: false,
        data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs"}',
    },
} as IDatabaseItem;

export const CBP_GHI_REWARDS_7 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        customer_product_id: cpe.CPE_127_GHI_REWARDS.data.customer_product_id,
        category_id: "1",
        start_date: "2023-04-26",
        archived: false,
        data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs"}',
    },
} as IDatabaseItem;

export const CBP_GHI_REWARDS_14 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_16_GHI_REWARDS.product.data.product_id,
        customer_product_id: cpe.CPE_137_GHI_REWARDS.data.customer_product_id,
        category_id: "1",
        start_date: moment().subtract(1, "years").format("YYYY-MM-DD"),
        archived: false,
        data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs", "externalMembershipNumber":"12121212"}',
    },
} as IDatabaseItem;

export const CBP_GHI_REWARDS_16 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_16_GHI_REWARDS.product.data.product_id,
        customer_product_id: cpe.CPE_140_GHI_REWARDS.data.customer_product_id,
        category_id: "1",
        start_date: moment().subtract(1, "years").format("YYYY-MM-DD"),
        archived: false,
        data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs", "externalMembershipNumber":"12121212"}',
    },
} as IDatabaseItem;

export const CBP_141_GIP_REWARDS = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_17_METLIFE_GIP.product.data.product_id,
        customer_product_id: cpe.CPE_141_GIP_REWARDS.data.customer_product_id,
        category_id: "1",
        start_date: moment().subtract(8, "months").format("YYYY-MM-DD"),
        archived: false,
        data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs", "externalMembershipNumber":"12121212"}',
    },
} as IDatabaseItem;

export const CBP_141_GHI_REWARDS = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        customer_product_id: cpe.CPE_141_GHI_REWARDS.data.customer_product_id,
        category_id: "1",
        start_date: moment().subtract(8, "months").format("YYYY-MM-DD"),
        archived: false,
        data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs", "externalMembershipNumber":"12121212"}',
    },
} as IDatabaseItem;
