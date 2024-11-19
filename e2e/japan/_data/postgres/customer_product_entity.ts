import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from './customers';

const type = "postgres";
const modelName = "customer_product_entity";

export const CPE_Wellbeing_1 = {
  type,
  modelName,
  data: {
    customer_product_id: "YUCPID0000001100",
    customer_id: customer.CUSTOMER_1.data.customerId,
    earn_rate: 10,
    product_variant_id: "YuLife_Wellbeing_01_01",
    archived: false,
    taken_up: true,
  },
} as IDatabaseItem;
