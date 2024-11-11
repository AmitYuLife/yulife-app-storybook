import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "./customers";
import moment from "moment";

const type = "postgres";
const modelName = "customer_product_entity";

export const CPE_GHI_FUTURE = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011375",
        customer_id: customer.CUSTOMER_GHI.data.customerId,
        earn_rate: 10,
        start_date: "2024-05-05",
        end_date: "2199-12-31",
        is_banned_from_product: false,
        archived: false,
        taken_up: true,
        product_variant_id: "Bupa_GHealth_01_01",
    },
} as IDatabaseItem;

export const CPE_116_GHI_REWARDS = {
    type,
    modelName,
    data: {
        customerId: customer.CUSTOMER_116_GHI_REWARDS.data.customerId,
        customer_product_id: "YUCPID0000011393",
        earn_rate: 0,
        start_date: moment().subtract(1, "y").format("YYYY-MM-DD"),
        end_date: "2199-12-31",
        is_banned_from_product: false,
        archived: false,
        taken_up: true,
        product_variant_id: "Bupa_GHealth_01_01",
    },
} as IDatabaseItem;

export const CPE_121_GHI_REWARDS = {
    type,
    modelName,
    data: {
        customerId: customer.CUSTOMER_121_GHI_REWARDS.data.customerId,
        customer_product_id: "YUCPID0000011398",
        earn_rate: 0,
        start_date: moment().subtract(1, "y").format("YYYY-MM-DD"),
        end_date: "2199-12-31",
        is_banned_from_product: false,
        archived: false,
        taken_up: true,
        product_variant_id: "Bupa_GHealth_01_01",
    },
} as IDatabaseItem;

export const CPE_127_GHI_REWARDS = {
    type,
    modelName,
    data: {
        customerId: customer.CUSTOMER_127_GHI_REWARDS.data.customerId,
        customer_product_id: "YUCPID0000011413",
        earn_rate: 0,
        start_date: moment().subtract(1, "y").format("YYYY-MM-DD"),
        end_date: "2199-12-31",
        is_banned_from_product: false,
        archived: false,
        taken_up: true,
        product_variant_id: "Bupa_GHealth_01_01",
    },
} as IDatabaseItem;

export const CPE_137_GHI_REWARDS = {
    type,
    modelName,
    data: {
        customerId: customer.CUSTOMER_137_GHI_REWARDS.data.customerId,
        customer_product_id: "YUCPID0000011428",
        earn_rate: 0,
        start_date: moment().subtract(1, "years").format("YYYY-MM-DD"),
        is_banned_from_product: false,
        archived: false,
        taken_up: true,
        product_variant_id: "Bupa_GHealth_01_01",
    },
} as IDatabaseItem;

export const CPE_140_GHI_REWARDS = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customerId: customer.CUSTOMER_140_GHI_REWARDS.data.customerId,
        customer_product_id: "YUCPID0000011431",
        earn_rate: 0,
        start_date: moment().subtract(1, "years").format("YYYY-MM-DD"),
        is_banned_from_product: false,
        archived: false,
        taken_up: true,
        product_variant_id: "Bupa_GHealth_01_01",
    },
} as IDatabaseItem;

export const CPE_141_GIP_REWARDS = {
    type,
    modelName,
    data: {
        customerId: customer.CUSTOMER_141.data.customerId,
        customer_product_id: "YUCPID0000011432",
        earn_rate: 0,
        start_date: moment().subtract(8, "months").format("YYYY-MM-DD"),
        end_date: "2199-12-31",
        is_banned_from_product: false,
        archived: false,
        taken_up: true,
        product_variant_id: "MetLife_GIP_UM_01_01",
    },
} as IDatabaseItem;

export const CPE_141_GHI_REWARDS = {
    type,
    modelName,
    data: {
        customerId: customer.CUSTOMER_141.data.customerId,
        customer_product_id: "YUCPID0000011433",
        earn_rate: 0,
        start_date: moment().subtract(8, "months").format("YYYY-MM-DD"),
        end_date: "2199-12-31",
        is_banned_from_product: false,
        archived: false,
        taken_up: true,
        product_variant_id: "Bupa_GHealth_01_01",
    },
} as IDatabaseItem;
