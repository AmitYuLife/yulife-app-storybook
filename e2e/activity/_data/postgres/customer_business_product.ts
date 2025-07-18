import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as cpe from "./customer_product_entity";
import { BUSINESS_PRODUCT_13_GHI_REWARDS } from "./business_product";
import moment from "moment";

const type = "postgres";
const modelName = "customer_business_product";

export const CBP_GHI_LEAVER = {
  type,
  modelName,
  data: {
    business_product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
    customer_product_id: cpe.CPE_130_GHI_LEAVER.data.customer_product_id,
    category_id: "1",
    start_date: moment().subtract(1, "y").format("YYYY-MM-DD"),
    end_date: moment().subtract(1, "weeks").format("YYYY-MM-DD"),
    archived: false,
    data: '{"salary":10000,"workplacePostcode":"NW1 1LX","country":"GB","jobTitle":"Software Engineer","dateOfBirth":"2000-01-21","firstName":"Sarah","lastName":"Smith","sexAtBirth":"F","addressLineOne":"57 Market St","addressLineTwo":"Huddersfield","addressPostCode":"HD3 4HX","title":"Mrs"}',
  },
} as IDatabaseItem;
