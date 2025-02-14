import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "./customers";
import * as cpe from "./customer_product_entity";
import moment from "moment";
import { BUSINESS_PRODUCT_THE_BEAR_RGL } from "./business_product";

const type = "postgres";
const modelName = "customer_business_product";

export const CGP_CARMY = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_THE_BEAR_RGL.product.data.product_id,
    customer_product_id: cpe.CPE_CARMY.data.customer_product_id,
    category_id: 1,
    start_date: moment().subtract(3, "months").toDate(),
    data: {
      salary: 80000,
      country: "UK",
      date_of_birth: customer.CUSTOMER_CARMY.data.date_of_birth,
    },
  },
} as IDatabaseItem;
