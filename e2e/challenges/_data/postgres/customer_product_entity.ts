import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import * as customer from "./customers";

const type = "postgres"
const modelName = "customer_product_entity"

export const CPE_1 = {
    type,
    modelName,
    data: {
        "customer_product_id": "YUCPID0000000032",
        customer_id: customer.CUSTOMER_9.data.customerId,
        "earn_rate": 20,
        product_variant_id: "Covea_FIB_01_01",
        "start_date": null,
        "end_date": null,
        "underwriting_step": null,
        "is_banned_from_product": false,
        "archived": false,
        "archived_at": null,
        "taken_up": null
    }
} as IDatabaseItem
