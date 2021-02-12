import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CUSTOMER_10, CUSTOMER_9 } from "./customers";

export const CPE_1 = {
    type:"postgres",
    modelName:"customer_product_entity",
    data: {
        "customer_product_id": "YUCPID0000000032",
        "customer_id": CUSTOMER_9.data.customerId,
        "earn_rate": 20,
        "product_code": "YULFIB",
        "start_date": null,
        "end_date": null,
        "customer_journey_bookmark": null,
        "final_quote_reached": false,
        "archived": false,
        "archived_at": null,
        "sales_channel": null,
        "carrier": null,
        "taken_up": null,
        "accounted_for_join_date": null,
        "accounted_for_leave_date": null,
        "is_joiner": null,
    }
} as IDatabaseItem

