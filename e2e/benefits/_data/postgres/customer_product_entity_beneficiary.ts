import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CPE_34_RGL } from "./customer_product_entity";
import { BENEFICIARY_34_1 } from "./customer_beneficiaries";

const type = "postgres";
const modelName = "customer_product_entity_beneficiary";

export const CPEB_RGL_34 = {
    type,
    modelName,
    data: {
        customer_product_id: CPE_34_RGL.data.customer_product_id,
        beneficiary_id: BENEFICIARY_34_1.data.beneficiary_id,
        share_of_benefit: 100,
    },
} as IDatabaseItem;
