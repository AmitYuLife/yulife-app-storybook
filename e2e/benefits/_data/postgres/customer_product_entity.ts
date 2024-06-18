import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "./customers";
import moment from "moment";

const type = "postgres";
const modelName = "customer_product_entity";

export const CPE_31 = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000031",
        customer_id: customer.CUSTOMER_31.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_ReGL_01_01",
        archived: false,
        taken_up: true,
    },
} as IDatabaseItem;

export const CPE_34_RGL = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000134",
        customer_id: customer.CUSTOMER_34.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_ReGL_01_01",
        archived: false,
        taken_up: true,
    },
} as IDatabaseItem;

export const CPE_34_GIP = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000234",
        customer_id: customer.CUSTOMER_34.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_GIP_01_01",
        archived: false,
        taken_up: true,
    },
} as IDatabaseItem;

export const CPE_34_GCI = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000343",
        customer_id: customer.CUSTOMER_34.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_GCI_01_01",
        archived: false,
        taken_up: true,
    },
} as IDatabaseItem;

export const CPE_94_GIP = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000000294",
        customer_id: customer.CUSTOMER_94.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_GIP_01_01",
        archived: false,
        taken_up: true,
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

export const CPE_117_GHI_REWARDS = {
    type,
    modelName,
    data: {
        customerId: customer.CUSTOMER_117_GHI_REWARDS.data.customerId,
        customer_product_id: "YUCPID0000011394",
        earn_rate: 0,
        start_date: moment().subtract(1, "y").format("YYYY-MM-DD"),
        end_date: "2199-12-31",
        is_banned_from_product: false,
        archived: false,
        taken_up: true,
        product_variant_id: "Bupa_GHealth_01_01",
    },
} as IDatabaseItem;

export const CPE_PLI_HOLDING = {
    type,
    modelName,
    data: {
        customer_id: customer.CUSTOMER_37.data.customerId,
        customerProductId: "YUCPID0000011423",
        earn_rate: 0,
        start_date: "2022-07-28",
        end_date: "2199-12-31",
        underwriting_step: null,
        is_banned_from_product: false,
        archived: false,
        created_at: "2022-07-28T11:52:03.774Z",
        created_by_id: null,
        modified_at: "2022-07-28T11:56:07.233Z",
        product_variant_id: "Covea_FIB_02_01",
        world_id: "forest",
        taken_up: false,
    },
} as IDatabaseItem;
