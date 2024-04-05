import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import {
    BUSINESS_PRODUCT_FUTURE,
    BUSINESS_PRODUCT_14_MPP_GDental,
    BUSINESS_PRODUCT_14_GCI,
    BUSINESS_PRODUCT_14_SAAS,
    BUSINESS_PRODUCT_14_GHI,
    BUSINESS_PRODUCT_14_RGL,
} from "./business_product";
import { CUSTOMER_FUTURE_PRODUCT, CUSTOMER_123_MPP, CUSTOMER_124_MPP } from "./customers";
import * as cpe from "./customer_product_entity";
import moment = require("moment");

const type = "postgres";
const modelName = "customer_business_product";

export const CGP_FUTURE_PRODUCT = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_FUTURE.product.data.product_id,
        customer_product_id: cpe.CPE_FUTURE_PRODUCT.data.customer_product_id,
        category_id: 1,
        start_date: moment().add(2, "weeks").toDate(),
        data: {
            salary: 60000,
            country: "UK",
            date_of_birth: CUSTOMER_FUTURE_PRODUCT.data.date_of_birth,
        },
    },
};

export const CBP_123_GCI = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_14_GCI.product.data.product_id,
        customer_product_id: cpe.CPE_123_GCI.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(1, "year").toDate(),
        data: {
            date_of_birth: CUSTOMER_123_MPP.data.date_of_birth,
            salary: 100000,
            country: "UK",
        },
    },
} as IDatabaseItem;

export const CBP_123_GDENT = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_14_MPP_GDental.product.data.product_id,
        customer_product_id: cpe.CPE_123_GDent.data.customer_product_id,
        category_id: 1,
        start_date: moment().add(1, "y").format("YYYY-MM-DD"),
        archived: false,
        data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs","enrolmentStarted":true,"enrolmentChoiceConfirmed":true,"enrolmentClosed":true}',
    },
} as IDatabaseItem;

export const CBP_123_SAAS = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_14_SAAS.product.data.product_id,
        customer_product_id: cpe.CPE_123_SaaS.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(1, "y").toDate(),
        archived: false,
        data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs","enrolmentStarted":true,"enrolmentChoiceConfirmed":true,"enrolmentClosed":true}',
    },
} as IDatabaseItem;

export const CBP_123_GHI = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_14_GHI.product.data.product_id,
        customer_product_id: cpe.CPE_123_GHI.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(1, "y").toDate(),
        archived: false,
        data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs","enrolmentStarted":true,"enrolmentChoiceConfirmed":true,"enrolmentClosed":true}',
    },
} as IDatabaseItem;

export const CBP_123_RGL = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_14_RGL.product.data.product_id,
        customer_product_id: cpe.CPE_123_RGL.data.customer_product_id,
        category_id: 1,
        start_date: moment().add(1, "d").toDate(),
        data: {
            date_of_birth: CUSTOMER_123_MPP.data.date_of_birth,
            salary: 100000,
            country: "UK",
        },
    },
} as IDatabaseItem;

export const CBP_124_GCI = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_14_GCI.product.data.product_id,
        customer_product_id: cpe.CPE_124_GCI.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(1, "year").toDate(),
        data: {
            date_of_birth: CUSTOMER_124_MPP.data.date_of_birth,
            salary: 100000,
            country: "UK",
        },
    },
} as IDatabaseItem;

export const CBP_124_GDENT = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_14_MPP_GDental.product.data.product_id,
        customer_product_id: cpe.CPE_124_GDent.data.customer_product_id,
        category_id: 1,
        start_date: moment().add(1, "y").format("YYYY-MM-DD"),
        archived: false,
        data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs","enrolmentStarted":true,"enrolmentChoiceConfirmed":true,"enrolmentClosed":true}',
    },
} as IDatabaseItem;

export const CBP_124_SAAS = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_14_SAAS.product.data.product_id,
        customer_product_id: cpe.CPE_124_SaaS.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(1, "y").toDate(),
        archived: false,
        data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs","enrolmentStarted":true,"enrolmentChoiceConfirmed":true,"enrolmentClosed":true}',
    },
} as IDatabaseItem;

export const CBP_124_GHI = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_14_GHI.product.data.product_id,
        customer_product_id: cpe.CPE_124_GHI.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(1, "y").toDate(),
        archived: false,
        data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs","enrolmentStarted":true,"enrolmentChoiceConfirmed":true,"enrolmentClosed":true}',
    },
} as IDatabaseItem;

export const CBP_124_RGL = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_14_RGL.product.data.product_id,
        customer_product_id: cpe.CPE_124_RGL.data.customer_product_id,
        category_id: 1,
        start_date: moment().add(1, "d").toDate(),
        data: {
            date_of_birth: CUSTOMER_124_MPP.data.date_of_birth,
            salary: 100000,
            country: "UK",
        },
    },
} as IDatabaseItem;
