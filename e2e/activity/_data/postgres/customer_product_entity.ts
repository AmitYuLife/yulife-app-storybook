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

export const CPE_PLI_3 = {
  type,
  modelName,
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

export const CPE_PLI_5 = {
  type,
  modelName,
  data: {
    customer_id: customer.CUSTOMER_PLI_5.data.customerId,
    customerProductId: "YUCPID0000000140",
    earn_rate: 10,
    start_date: "2022-07-28",
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    archived: false,
    created_at: "2022-07-28T11:52:03.774Z",
    created_by_id: null,
    modified_at: "2022-07-28T11:56:07.233Z",
    product_variant_id: "Covea_FIB_02_01",
    world_id: "ocean",
    taken_up: false,
  },
} as IDatabaseItem;

export const CPE_PLI_6 = {
  type,
  modelName,
  data: {
    customer_id: customer.CUSTOMER_46.data.customerId,
    customerProductId: "YUCPID0000000142",
    earn_rate: 10,
    start_date: "2022-07-28",
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    archived: false,
    created_at: "2022-07-28T11:52:03.774Z",
    created_by_id: null,
    modified_at: "2022-07-28T11:56:07.233Z",
    product_variant_id: "Covea_FIB_02_01",
    world_id: "ocean",
    taken_up: false,
  },
} as IDatabaseItem;

export const CPE_PLI_8 = {
  type,
  modelName,
  data: {
    customer_id: customer.CUSTOMER_PLI_7.data.customerId,
    customerProductId: "YUCPID0000000157",
    earn_rate: 0,
    start_date: "2022-10-04",
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    archived: false,
    archived_at: null,
    taken_up: null,
    created_at: "2022-10-04T10:37:20.339Z",
    created_by_id: null,
    modified_at: "2022-10-04T10:37:23.768Z",
    modified_by_id: "1.92.0",
    product_variant_id: "Covea_FIB_02_01",
    world_id: "ocean",
  },
} as IDatabaseItem;

export const CPE_PLI_9 = {
  type,
  modelName,
  data: {
    customer_id: customer.CUSTOMER_PLI_9.data.customerId,
    customerProductId: "YUCPID0000000158",
    earn_rate: 0,
    start_date: "2022-10-04",
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    archived: false,
    archived_at: null,
    taken_up: null,
    created_at: "2022-10-04T10:37:20.339Z",
    created_by_id: null,
    modified_at: "2022-10-04T10:37:23.768Z",
    modified_by_id: "1.92.0",
    product_variant_id: "Bupa_Dent_01_01",
    world_id: "ocean",
  },
} as IDatabaseItem;

export const CPE_PLI_10 = {
  type,
  modelName,
  data: {
    customer_id: customer.CUSTOMER_PLI_10.data.customerId,
    customerProductId: "YUCPID0000000159",
    earn_rate: 0,
    start_date: "2022-10-04",
    end_date: "2199-12-31",
    underwriting_step: null,
    is_banned_from_product: false,
    archived: false,
    archived_at: null,
    taken_up: null,
    created_at: "2022-10-04T10:37:20.339Z",
    created_by_id: null,
    modified_at: "2022-10-04T10:37:23.768Z",
    modified_by_id: "1.92.0",
    product_variant_id: "Covea_FIB_02_01",
    world_id: "forest",
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
