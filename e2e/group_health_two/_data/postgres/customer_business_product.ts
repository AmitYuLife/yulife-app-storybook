import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as cpe from "./customer_product_entity";
import moment from "moment";
import {
    BUSINESS_PRODUCT_13_GHI_REWARDS,
    BUSINESS_PRODUCT_14_GHI,
    BUSINESS_PRODUCT_15_GHI_REWARDS,
    BUSINESS_PRODUCT_8_GHI,
    BUSINESS_PRODUCT_16_GHI_REWARDS,
    BUSINESS_PRODUCT_17_GHI_NO_START_DATE,
} from "./business_product";

const type = "postgres";
const modelName = "customer_business_product";


export const CBP_GHI_LEAVER = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        customer_product_id: cpe.CPE_130_GHI_LEAVER.data.customer_product_id,
        category_id: "1",
        start_date: moment().subtract(1, "y").format("YYYY-MM-DD"),
        end_date: moment().subtract(1, "weeks").format("YYYY-MM-DD"),
        archived: false,
        data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs"}',
    },
} as IDatabaseItem;

export const CBP_GHI_REWARDS_8 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        customer_product_id: cpe.CPE_131_GHI_REWARDS.data.customer_product_id,
        category_id: "1",
        start_date: "2023-04-26",
        archived: false,
        data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs", "externalMembershipNumber":"12121212"}',
    },
} as IDatabaseItem;

export const CBP_GHI_REWARDS_9 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        customer_product_id: cpe.CPE_133_GHI_FUTURE.data.customer_product_id,
        category_id: "1",
        start_date: moment().add(1, "weeks").format("YYYY-MM-DD"),
        archived: false,
        data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs", "externalMembershipNumber":"12121212"}',
    },
} as IDatabaseItem;

export const CBP_GHI_REWARDS_10 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        customer_product_id: cpe.CPE_134_GHI_REWARDS.data.customer_product_id,
        category_id: "1",
        start_date: "2023-04-26",
        archived: false,
        data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs", "externalMembershipNumber":"12121212"}',
    },
} as IDatabaseItem;

export const CBP_GHI_REWARDS_11 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_15_GHI_REWARDS.product.data.product_id,
        customer_product_id: cpe.CPE_134_GHI_REWARDS_2.data.customer_product_id,
        category_id: "1",
        start_date: "2023-04-26",
        archived: false,
        data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs", "externalMembershipNumber":"12121212"}',
    },
} as IDatabaseItem;

export const CBP_GHI_REWARDS_12 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        customer_product_id: cpe.CPE_135_GHI_FUTURE.data.customer_product_id,
        category_id: "1",
        start_date: moment().add(1, "weeks").format("YYYY-MM-DD"),
        archived: false,
        data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs", "externalMembershipNumber":"12121212"}',
    },
} as IDatabaseItem;

export const CBP_GHI_REWARDS_13 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        customer_product_id: cpe.CPE_136_GHI_REWARDS.data.customer_product_id,
        category_id: "1",
        start_date: moment().subtract(1, "weeks").format("YYYY-MM-DD"),
        archived: false,
        data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs", "externalMembershipNumber":"12121212"}',
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

export const CBP_GHI_REWARDS_15 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        customer_product_id: cpe.CPE_139_GHI_REWARDS.data.customer_product_id,
        category_id: "1",
        start_date: moment().subtract(1, "weeks").format("YYYY-MM-DD"),
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
        start_date: moment().subtract(11, "months").format("YYYY-MM-DD"),
        archived: false,
        data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs", "externalMembershipNumber":"12121212"}',
    },
} as IDatabaseItem;

export const CBP_GH_REMOVED = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_8_GHI.product.data.product_id,
        customer_product_id: cpe.CPE_GH_REMOVED.data.customer_product_id,
        category_id: "1",
        start_date: moment().subtract(1, "year").format("YYYY-MM-DD"),
        end_date: moment().subtract(4, "days").format("YYYY-MM-DD"),
        archived: false,
        data: '{"salary":25000000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Working 9-5","dateOfBirth":"1946-01-19","firstName":"Dolly","Parton":"Sakai","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs", "externalMembershipNumber":"12121212"}',
    },
} as IDatabaseItem;
