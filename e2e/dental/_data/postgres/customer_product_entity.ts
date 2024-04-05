import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "./customers";
import moment from "moment";

const type = "postgres";
const modelName = "customer_product_entity";

export const CPE_DENTAL_1 = {
    type,
    modelName,
    data: {
        customer_id: customer.CUSTOMER_DENTAL_1.data.customerId,
        customerProductId: "YUCPID0000000135",
        earn_rate: 10,
        productVariantId: "Bupa_Dent_01_03",
        startDate: moment().format(),
        endDate: moment("2199-12-31", "YYYY-MM-DD").format(),
        world_id: "forest",
        taken_up: true,
    },
} as IDatabaseItem;

export const CPE_DENTAL_2 = {
    type,
    modelName,
    data: {
        customer_id: customer.CUSTOMER_DENTAL_2.data.customerId,
        customerProductId: "YUCPID0000000136",
        earn_rate: 2,
        productVariantId: "Bupa_Dent_01_01",
        startDate: moment().format(),
        endDate: moment().add(7, "d").format(),
        world_id: "forest",
        taken_up: true,
    },
} as IDatabaseItem;

export const CPE_DENTAL_3 = {
    type,
    modelName,
    data: {
        customer_id: customer.CUSTOMER_45.data.customerId,
        customerProductId: "YUCPID0000000141",
        earn_rate: 6,
        productVariantId: "Bupa_Dent_01_03",
        startDate: moment().format(),
        endDate: moment("2199-12-31", "YYYY-MM-DD").format(),
        world_id: "ocean",
        taken_up: true,
    },
} as IDatabaseItem;

export const CPE_85 = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID00000001491",
        customer_id: customer.CUSTOMER_85.data.customerId,
        earn_rate: 10,
        start_date: "2023-03-10",
        end_date: "2199-12-31",
        underwriting_step: null,
        is_banned_from_product: false,
        archived: true,
        archived_at: null,
        taken_up: false,
        created_at: "2023-03-10T13:54:06.914Z",
        created_by_id: null,
        modified_at: "2023-03-10T17:27:47.678Z",
        modified_by_id: "1.114.0",
        product_variant_id: "Bupa_Dent_01_03",
        world_id: "forest",
    },
} as IDatabaseItem;

export const CPE_108_GDent = {
    type,
    modelName,
    data: {
        customerId: customer.CUSTOMER_108.data.customerId,
        customer_product_id: "YUCPID0000011392",
        earn_rate: 5,
        start_date: moment().add(1, "y").format("YYYY-MM-DD"),
        end_date: "2199-12-31",
        is_banned_from_product: false,
        archived: false,
        taken_up: true,
        product_variant_id: "Bupa_GDentPlan_01_01",
    },
} as IDatabaseItem;

export const CPE_125_GDent = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011411",
        customer_id: customer.CUSTOMER_125.data.customerId,
        earn_rate: 5,
        product_variant_id: "Bupa_GDentChoice_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().format("YYYY-MM-DD"),
    },
} as IDatabaseItem;

export const CPE_DENTAL_RENEW = {
    type,
    modelName,
    data: {
        customer_id: customer.CUSTOMER_DENTAL_RENEW.data.customerId,
        customerProductId: "YUCPID00000011419",
        earn_rate: 10,
        productVariantId: "Bupa_Dent_01_03",
        startDate: moment().add(30, "days").subtract(1, "years").format(),
        world_id: "forest",
        taken_up: true,
    },
} as IDatabaseItem;

export const CPE_DENTAL_RENEW_2 = {
    type,
    modelName,
    data: {
        customer_id: customer.CUSTOMER_DENTAL_RENEW_2.data.customerId,
        customerProductId: "YUCPID00000011420",
        earn_rate: 10,
        productVariantId: "Bupa_Dent_01_03",
        startDate: "2023-02-01",
        world_id: "forest",
        taken_up: true,
    },
} as IDatabaseItem;

export const CPE_DENTAL_RENEW_RGL = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011424",
        customer_id: customer.CUSTOMER_DENTAL_RENEW_2.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_ReGL_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().subtract(1, "weeks").format("YYYY-MM-DD"),
    },
} as IDatabaseItem;

export const CPE_DENTAL_RENEW_GIP = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011425",
        customer_id: customer.CUSTOMER_DENTAL_RENEW_2.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_GIP_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().subtract(1, "weeks").format("YYYY-MM-DD"),
    },
} as IDatabaseItem;

export const CPE_DENTAL_RENEW_GCI = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011426",
        customer_id: customer.CUSTOMER_DENTAL_RENEW_2.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_GCI_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().subtract(1, "weeks").format("YYYY-MM-DD"),
    },
} as IDatabaseItem;

export const CPE_DENTAL_RENEW_WELLBEING = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011427",
        customer_id: customer.CUSTOMER_DENTAL_RENEW_2.data.customerId,
        earn_rate: 10,
        product_variant_id: "YuLife_Wellbeing_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().subtract(1, "weeks").format("YYYY-MM-DD"),
    },
} as IDatabaseItem;
