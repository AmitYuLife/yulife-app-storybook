import { generateRandomTransformedUuid } from "@yu-life/yulife-bdd-framework";
import moment from "moment";
import {
  BUSINESS_PRODUCT_10_GDent,
  BUSINESS_PRODUCT_11_GDent,
  BUSINESS_PRODUCT_12_GDent,
} from "./business_product";

const type = "postgres";
const modelName = "business_product_enrolment_window";

export const BPEW_GDent_10 = {
  type,
  modelName,
  data: {
    enrolment_window_id: generateRandomTransformedUuid(),
    business_product_id: BUSINESS_PRODUCT_10_GDent.product.data.product_id,
    enrolment_start_date: moment().subtract(14, "d").format("YYYY-MM-DD"),
    enrolment_end_date: moment().subtract(1, "d").format("YYYY-MM-DD"),
    enrolment_type: "main",
  },
};

export const BPEW_GDent_11 = {
  type,
  modelName,
  data: {
    enrolment_window_id: generateRandomTransformedUuid(),
    business_product_id: BUSINESS_PRODUCT_11_GDent.product.data.product_id,
    enrolment_start_date: moment().add(1, "d").format("YYYY-MM-DD"),
    enrolment_end_date: moment().add(3, "d").format("YYYY-MM-DD"),
    enrolment_type: "main",
  },
};

export const BPEW_GDent_12 = {
  type,
  modelName,
  data: {
    enrolment_window_id: "08f5c3ab-322e-4adf-8b79-1a40a02aec95",
    business_product_id: BUSINESS_PRODUCT_12_GDent.product.data.product_id,
    enrolment_start_date: moment().subtract(1, "d").format("YYYY-MM-DD"),
    enrolment_end_date: moment().add(3, "d").format("YYYY-MM-DD"),
    enrolment_type: "main",
  },
};
