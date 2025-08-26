import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "./customers";
import moment from "moment";

const type = "postgres";
const modelName = "customer_product_entity";

export const CPE_5_GHI_REWARDS = {
  type,
  modelName,
  data: {
    customerId: customer.CUSTOMER_5.data.customerId,
    customer_product_id: "YUCPID0000011428",
    earn_rate: 0,
    start_date: moment().subtract(1, "years").format("YYYY-MM-DD"),
    is_banned_from_product: false,
    archived: false,
    taken_up: true,
    product_variant_id: "Bupa_GHealth_01_01",
  },
} as IDatabaseItem;
