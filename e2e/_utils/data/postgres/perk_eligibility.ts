import { BUSINESS_PRODUCT_4_GIP, BUSINESS_PRODUCT_3, BUSINESS_PRODUCT_13_GHI_REWARDS} from "./business_product"
import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";


const type = "postgres"
const modelName = "perk_eligibility"

export const YUG0000003_FIIT_12_MONTH = {
    type,
    modelName,
    data:{
        "perk_eligibility_id" : "YUG0000003_FIIT_12_MONTH",
        "perk_id" : "FIIT_12_MONTH",
        "business_product_id" : BUSINESS_PRODUCT_4_GIP.product.data.product_id,
        "max_seats" : 2,
        "archived" : false,
        "modified_by_id" : null,
        "created_at" : null,
        "modified_at" : null,
    }
} as IDatabaseItem

export const YUG0000001_FIIT_12_MONTH = {
    type,
    modelName,
    data:{
        "perk_eligibility_id" : "YUG0000001_FIIT_12_MONTH",
        "perk_id" : "FIIT_12_MONTH",
        "business_product_id" : BUSINESS_PRODUCT_3.product.data.product_id,
        "max_seats" : 0,
        "archived" : false,
        "modified_by_id" : null,
        "created_at" : null,
        "modified_at" : null,
    }
} as IDatabaseItem

export const YUG0000003_BLUA_HEALTH = {
    type,
    modelName,
    data:{
        "perk_eligibility_id" : "YUG0000003_BLUA_HEALTH",
        "perk_id": "BUPA_HEALTH_INSURANCE_BLUA_HEALTH",
        "business_product_id" : BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        "max_seats" : 10,
        "archived" : false,
        "modified_by_id" : null,
        "created_at" : null,
        "modified_at" : null,
    }
} as IDatabaseItem
