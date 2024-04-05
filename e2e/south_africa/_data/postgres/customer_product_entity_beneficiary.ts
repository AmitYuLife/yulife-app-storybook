import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import { CB_GrFun_SA_2_1, CB_GrFun_SA_2_2, CB_MeGL_SA_2, CB_SpGL_SA_2 } from "./customer_beneficiary";
import { CPE_GrFun_SA_1, CPE_GrFun_SA_2, CPE_MeGL_SA_2, CPE_SpGL_SA_2 } from "./customer_product_entity";


const type = "postgres";
const modelName = "customer_product_entity_beneficiary"

export const CPEB_MeGL_SA_2 = {
    type,
    modelName,
    data: {
        "customer_product_id" : CPE_MeGL_SA_2.data.customer_product_id,
        "beneficiary_id" : CB_MeGL_SA_2.data.beneficiary_id,
        "share_of_benefit" : 100.0,
    }
} as IDatabaseItem

export const CPEB_SpGL_SA_2 = {
    type,
    modelName,
    data: {
        "customer_product_id" : CPE_SpGL_SA_2.data.customer_product_id,
        "beneficiary_id" : CB_SpGL_SA_2.data.beneficiary_id,
        "share_of_benefit" : 50.0,
    }
} as IDatabaseItem

export const CPEB_GrFun_SA_2_1 = {
    type,
    modelName,
    data: {
        "customer_product_id" : CPE_GrFun_SA_2.data.customer_product_id,
        "beneficiary_id" : CB_GrFun_SA_2_1.data.beneficiary_id,
        "share_of_benefit" : 70.0,
    }
} as IDatabaseItem

export const CPEB_GrFun_SA_2_2 = {
    type,
    modelName,
    data: {
        "customer_product_id" : CPE_GrFun_SA_2.data.customer_product_id,
        "beneficiary_id" : CB_GrFun_SA_2_2.data.beneficiary_id,
        "share_of_benefit" : 30.0,
    }
} as IDatabaseItem
    