import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "./customers";

export const CPE_PLI_2 = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customer_id: customer.CUSTOMER_PLI_2.data.customerId,
        customerProductId: "YUCPID0000000137",
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

export const CPE_PLI_3 = {
    type: "postgres",
    modelName: "customer_product_entity",
    data: {
        customer_id: customer.CUSTOMER_PLI_3.data.customerId,
        customerProductId: "YUCPID0000000138",
        earn_rate: 6,
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
        taken_up: true,
    },
} as IDatabaseItem;

export const CPE_PLI_HOLDING = {
    type: "postgres",
    modelName: "customer_product_entity",
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
