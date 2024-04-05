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

export const CPE_GHI_STARTED = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011376",
        customer_id: customer.CUSTOMER_GHI_STARTED.data.customerId,
        earn_rate: 10,
        start_date: "2023-05-05",
        end_date: "2199-12-31",
        is_banned_from_product: false,
        archived: false,
        taken_up: true,
        product_variant_id: "Bupa_GHealth_01_01",
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

export const CPE_118_GHI_REWARDS = {
    type,
    modelName,
    data: {
        customerId: customer.CUSTOMER_118_GHI_REWARDS.data.customerId,
        customer_product_id: "YUCPID0000011395",
        earn_rate: 0,
        start_date: moment().subtract(1, "y").format("YYYY-MM-DD"),
        end_date: "2199-12-31",
        is_banned_from_product: false,
        archived: false,
        taken_up: true,
        product_variant_id: "Bupa_GHealth_01_01",
    },
} as IDatabaseItem;

export const CPE_119_GHI_REWARDS = {
    type,
    modelName,
    data: {
        customerId: customer.CUSTOMER_119_GHI_REWARDS.data.customerId,
        customer_product_id: "YUCPID0000011396",
        earn_rate: 0,
        start_date: moment().subtract(1, "y").format("YYYY-MM-DD"),
        end_date: "2199-12-31",
        is_banned_from_product: false,
        archived: false,
        taken_up: true,
        product_variant_id: "Bupa_GHealth_01_01",
    },
} as IDatabaseItem;

export const CPE_120_GHI_REWARDS = {
    type,
    modelName,
    data: {
        customerId: customer.CUSTOMER_120_GHI_REWARDS.data.customerId,
        customer_product_id: "YUCPID0000011397",
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

export const CPE_138_WELLBEING = {
    type,
    modelName,
    data: {
        customer_product_id: "YUCPID0000011429",
        customer_id: customer.CUSTOMER_138.data.customerId,
        earn_rate: 10,
        product_variant_id: "YuLife_Wellbeing_01_01",
        archived: false,
        taken_up: true,
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
        start_date: moment().subtract(1, "years").format("YYYY-MM-DD"),
        is_banned_from_product: false,
        archived: false,
        taken_up: true,
        product_variant_id: "Bupa_GHealth_01_01",
    },
} as IDatabaseItem;
