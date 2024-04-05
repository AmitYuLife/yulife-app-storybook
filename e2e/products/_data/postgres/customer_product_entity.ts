import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "./customers";
import moment from "moment";

const type = "postgres";
const modelName = "customer_product_entity";

export const CPE_FUTURE_PRODUCT = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID00000001495",
        customer_id: customer.CUSTOMER_FUTURE_PRODUCT.data.customerId,
        earn_rate: 10,
        start_date: moment().add(2, "weeks"),
        underwriting_step: null,
        is_banned_from_product: false,
        taken_up: true,
        product_variant_id: "AIG_ReGL_01_01",
    },
} as IDatabaseItem;

export const CPE_123_GCI = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011399",
        customer_id: customer.CUSTOMER_123_MPP.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_GCI_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().subtract(1, "y").format("YYYY-MM-DD"),
    },
} as IDatabaseItem;

export const CPE_123_GDent = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011400",
        customer_id: customer.CUSTOMER_123_MPP.data.customerId,
        earn_rate: 0,
        product_variant_id: "Bupa_GDentPlan_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().add(7, "d").format("YYYY-MM-DD"),
    },
} as IDatabaseItem;

export const CPE_123_SaaS = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011401",
        customer_id: customer.CUSTOMER_123_MPP.data.customerId,
        earn_rate: 0,
        product_variant_id: "YuLife_SaaS_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().subtract(1, "y").format("YYYY-MM-DD"),
    },
} as IDatabaseItem;

export const CPE_123_GHI = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011402",
        customer_id: customer.CUSTOMER_123_MPP.data.customerId,
        earn_rate: 0,
        product_variant_id: "Bupa_GHealth_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().subtract(1, "y").format("YYYY-MM-DD"),
    },
} as IDatabaseItem;

export const CPE_123_PLI = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customer_id: customer.CUSTOMER_123_MPP.data.customerId,
        customerProductId: "YUCPID0000011403",
        earn_rate: 6,
        start_date: moment().subtract(1, "y").format("YYYY-MM-DD"),
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

export const CPE_123_RGL = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011404",
        customer_id: customer.CUSTOMER_123_MPP.data.customerId,
        earn_rate: 20,
        product_variant_id: "AIG_ReGL_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().add(1, "d").format("YYYY-MM-DD"),
    },
} as IDatabaseItem;

export const CPE_124_GCI = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011405",
        customer_id: customer.CUSTOMER_124_MPP.data.customerId,
        earn_rate: 10,
        product_variant_id: "AIG_GCI_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().subtract(1, "y").format("YYYY-MM-DD"),
    },
} as IDatabaseItem;

export const CPE_124_GDent = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011406",
        customer_id: customer.CUSTOMER_124_MPP.data.customerId,
        earn_rate: 0,
        product_variant_id: "Bupa_GDentPlan_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().add(7, "d").format("YYYY-MM-DD"),
    },
} as IDatabaseItem;

export const CPE_124_SaaS = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011407",
        customer_id: customer.CUSTOMER_124_MPP.data.customerId,
        earn_rate: 0,
        product_variant_id: "YuLife_SaaS_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().subtract(1, "y").format("YYYY-MM-DD"),
    },
} as IDatabaseItem;

export const CPE_124_GHI = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011408",
        customer_id: customer.CUSTOMER_124_MPP.data.customerId,
        earn_rate: 0,
        product_variant_id: "Bupa_GHealth_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().subtract(1, "y").format("YYYY-MM-DD"),
    },
} as IDatabaseItem;

export const CPE_124_PLI = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customer_id: customer.CUSTOMER_124_MPP.data.customerId,
        customer_product_id: "YUCPID0000011409",
        earn_rate: 6,
        start_date: moment().subtract(1, "y").format("YYYY-MM-DD"),
        end_date: "2199-12-31",
        underwriting_step: null,
        is_banned_from_product: false,
        archived: false,
        created_at: "2022-07-28T11:52:03.774Z",
        created_by_id: null,
        modified_at: "2022-07-28T11:56:07.233Z",
        product_variant_id: "Covea_FIB_02_01",
        world_id: "forest",
        taken_up: true,
    },
} as IDatabaseItem;

export const CPE_124_RGL = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011410",
        customer_id: customer.CUSTOMER_124_MPP.data.customerId,
        earn_rate: 20,
        product_variant_id: "AIG_ReGL_01_01",
        archived: false,
        taken_up: true,
        start_date: moment().add(1, "d").format("YYYY-MM-DD"),
    },
} as IDatabaseItem;
