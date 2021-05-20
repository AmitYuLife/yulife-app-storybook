import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CPE_33_RGL, CPE_34_RGL } from "./customer_product_entity"
import { BENEFICIARY_33_1, BENEFICIARY_34_1 } from "./customer_beneficiaries"
import moment from "moment"

const type = "postgres"
const modelName = "customer_product_entity_beneficiary"

export const CPEB_RGL_33 = {
    type,
    modelName,
    data: {
        customer_product_id: CPE_33_RGL.data.customer_product_id,
        beneficiary_id: BENEFICIARY_33_1.data.beneficiary_id,
        share_of_benefit: 100,
    }
} as IDatabaseItem

export const CPEB_RGL_34 = {
    type,
    modelName,
    data: {
        customer_product_id: CPE_34_RGL.data.customer_product_id,
        beneficiary_id: BENEFICIARY_34_1.data.beneficiary_id,
        share_of_benefit: 100,
    }
} as IDatabaseItem