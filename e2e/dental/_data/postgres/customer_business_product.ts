import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import {
    BUSINESS_PRODUCT_5_RGL,
    BUSINESS_PRODUCT_5_GIP,
    BUSINESS_PRODUCT_5_GCI,
    BUSINESS_PRODUCT_5_WB,
    BUSINESS_PRODUCT_4_GDental_CHOICE,
    BUSINESS_PRODUCT_10_GDent
} from "./business_product";
import {
    CUSTOMER_43,
    CUSTOMER_DENTAL_RENEW_2,
    CUSTOMER_125
} from "./customers";
import * as cpe from "./customer_product_entity";
import moment from "moment";

const type = "postgres";
const modelName = "customer_business_product";

export const CBP_GDENT_108 = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_10_GDent.product.data.product_id,
        customer_product_id: cpe.CPE_108_GDent.data.customer_product_id,
        category_id: 1,
        start_date: moment().add(1, "y").format("YYYY-MM-DD"),
        archived: false,
        data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs"}',
    },
} as IDatabaseItem;

export const CGP_125_GDental_Choice = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_4_GDental_CHOICE.product.data.product_id,
        customer_product_id: cpe.CPE_125_GDent.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(1, "months").format("YYYY-MM-DD"),
        data: {
            date_of_birth: CUSTOMER_125.data.date_of_birth,
            salary: 100000,
            country: "UK",
            externalMembershipNumber: "56565656",
        },
    },
} as IDatabaseItem;

export const CGP_DENTAL_RENEW_RGL = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_5_RGL.product.data.product_id,
        customer_product_id: cpe.CPE_DENTAL_RENEW_RGL.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(1, "weeks").format("YYYY-MM-DD"),
        data: {
            salary: 100000,
            country: "UK",
            date_of_birth: CUSTOMER_DENTAL_RENEW_2.data.date_of_birth,
        },
    },
} as IDatabaseItem;

export const CGP_DENTAL_RENEW_GIP = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_5_GIP.product.data.product_id,
        customer_product_id: cpe.CPE_DENTAL_RENEW_GIP.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(1, "weeks").format("YYYY-MM-DD"),
        data: {
            date_of_birth: CUSTOMER_DENTAL_RENEW_2.data.date_of_birth,
            salary: 100000,
            country: "UK",
        },
    },
} as IDatabaseItem;

export const CGP_DENTAL_RENEW_GCI = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_5_GCI.product.data.product_id,
        customer_product_id: cpe.CPE_DENTAL_RENEW_GCI.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(1, "weeks").format("YYYY-MM-DD"),
        data: {
            date_of_birth: CUSTOMER_DENTAL_RENEW_2.data.date_of_birth,
            salary: 100000,
            country: "UK",
        },
    },
} as IDatabaseItem;

export const CGP_DENTAl_RENEW_WELLBEING = {
    type,
    modelName,
    data: {
        business_product_id: BUSINESS_PRODUCT_5_WB.product.data.product_id,
        customer_product_id: cpe.CPE_DENTAL_RENEW_WELLBEING.data.customer_product_id,
        category_id: 1,
        start_date: moment().subtract(1, "weeks").format("YYYY-MM-DD"),
        data: {
            date_of_birth: CUSTOMER_43.data.date_of_birth,
            salary: 100000,
            country: "UK",
        },
    },
} as IDatabaseItem;
