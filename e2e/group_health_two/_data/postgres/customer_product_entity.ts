import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "./customers";
import moment from "moment";

const type = "postgres";
const modelName = "customer_product_entity";

export const CPE_130_GHI_LEAVER = {
    type,
    modelName,
    data: {
        customerId: customer.CUSTOMER_130_GHI_LEAVER.data.customerId,
        customer_product_id: "YUCPID0000011414",
        earn_rate: 0,
        start_date: moment().subtract(1, "y").format("YYYY-MM-DD"),
        end_date: moment().subtract(1, "weeks").format("YYYY-MM-DD"),
        is_banned_from_product: false,
        archived: false,
        taken_up: true,
        product_variant_id: "Bupa_GHealth_01_01",
    },
} as IDatabaseItem;

export const CPE_131_GHI_REWARDS = {
    type,
    modelName,
    data: {
        customerId: customer.CUSTOMER_131_GHI_REWARDS.data.customerId,
        customer_product_id: "YUCPID0000011415",
        earn_rate: 0,
        start_date: moment().subtract(1, "y").format("YYYY-MM-DD"),
        end_date: "2199-12-31",
        is_banned_from_product: false,
        archived: false,
        taken_up: true,
        product_variant_id: "Bupa_GHealth_01_01",
    },
} as IDatabaseItem;

export const CPE_133_GHI_FUTURE = {
    type,
    modelName,
    data: {
        customerId: customer.CUSTOMER_133_GHI_FUTURE.data.customerId,
        customer_product_id: "YUCPID0000011416",
        earn_rate: 0,
        start_date: moment().add(1, "weeks").format("YYYY-MM-DD"),
        end_date: "2199-12-31",
        is_banned_from_product: false,
        archived: false,
        taken_up: true,
        product_variant_id: "Bupa_GHealth_01_01",
    },
} as IDatabaseItem;

export const CPE_134_GHI_REWARDS = {
    type,
    modelName,
    data: {
        customerId: customer.CUSTOMER_134_GHI_REWARDS.data.customerId,
        customer_product_id: "YUCPID0000011417",
        earn_rate: 0,
        start_date: moment().subtract(1, "y").format("YYYY-MM-DD"),
        end_date: "2199-12-31",
        is_banned_from_product: false,
        archived: false,
        taken_up: true,
        product_variant_id: "Bupa_GHealth_01_01",
    },
} as IDatabaseItem;

export const CPE_134_GHI_REWARDS_2 = {
    type,
    modelName,
    data: {
        customerId: customer.CUSTOMER_134_GHI_REWARDS.data.customerId,
        customer_product_id: "YUCPID0000011418",
        earn_rate: 0,
        start_date: moment().subtract(1, "y").format("YYYY-MM-DD"),
        end_date: "2199-12-31",
        is_banned_from_product: false,
        archived: false,
        taken_up: true,
        product_variant_id: "Bupa_GHealth_01_01",
    },
} as IDatabaseItem;

export const CPE_135_GHI_FUTURE = {
    type,
    modelName,
    data: {
        customerId: customer.CUSTOMER_135_GHI_FUTURE.data.customerId,
        customer_product_id: "YUCPID0000011421",
        earn_rate: 0,
        start_date: moment().add(1, "weeks").format("YYYY-MM-DD"),
        end_date: "2199-12-31",
        is_banned_from_product: false,
        archived: false,
        taken_up: true,
        product_variant_id: "Bupa_GHealth_01_01",
    },
} as IDatabaseItem;

export const CPE_136_GHI_REWARDS = {
    type,
    modelName,
    data: {
        customerId: customer.CUSTOMER_136_GHI_REWARDS.data.customerId,
        customer_product_id: "YUCPID0000011422",
        earn_rate: 0,
        start_date: moment().subtract(1, "weeks").format("YYYY-MM-DD"),
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

export const CPE_139_GHI_REWARDS = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customerId: customer.CUSTOMER_139_GHI_REWARDS.data.customerId,
        customer_product_id: "YUCPID0000011430",
        earn_rate: 0,
        start_date: moment().subtract(1, "weeks").format("YYYY-MM-DD"),
        end_date: "2199-12-31",
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
        start_date: moment().subtract(11, "months").format("YYYY-MM-DD"),
        is_banned_from_product: false,
        archived: false,
        taken_up: true,
        product_variant_id: "Bupa_GHealth_01_01",
    },
} as IDatabaseItem;

export const CPE_GH_REMOVED = {
    type,
    modelName,
    data: {
        customerId: customer.CUSTOMER_GH_REMOVED.data.customerId,
        customer_product_id: "YUCPID0000083528",
        earn_rate: 0,
        start_date: moment().subtract(1, "year").format("YYYY-MM-DD"),
        end_date: moment().subtract(4, "days").format("YYYY-MM-DD"),
        is_banned_from_product: true,
        archived: false,
        taken_up: true,
        product_variant_id: "Bupa_GHealth_01_01",
    },
} as IDatabaseItem;
