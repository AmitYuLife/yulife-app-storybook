import { generateRandomPostgresId } from "@yu-life/yulife-bdd-framework";
import {  BUSINESS_PRODUCT_4_GDental, BUSINESS_PRODUCT_8_GHI } from "./business_product"

const type = "postgres"
const modelName = "business_product_category_benefit"


export const BPCB_1_GDental = {
    type,
    modelName,
    data: {
        "business_product_category_benefit_id" : generateRandomPostgresId(),
        "business_product_id" : BUSINESS_PRODUCT_4_GDental.product.data.product_id,
        "category_id" : "1",
        "default_product_version_benefit_set_id" :  "Level 4 | Single",
        "business_contribution" : null,
        "archived" : false,
        "archive_reason" : null,
        "archived_at" : null,
        "created_at" : "2023-02-23T14:01:39.326Z",
        "created_by_id" : null,
        "modified_at" : "2023-02-27T11:04:07.180Z",
        "modified_by_id" : null
    }
}


export const BPCB_8_GHI = {
    type,
    modelName,
    data: {
        "business_product_category_benefit_id" : generateRandomPostgresId(),
        "business_product_id" :  BUSINESS_PRODUCT_8_GHI.product.data.product_id,
        "category_id" : "1",
        "allowed_product_version_benefit_set_ids":["Select Key | Couple", "Select Key | Single Parent Family", "Select Key | Family"],
        "default_product_version_benefit_set_id" :"Select Key | Single",
        "business_contribution" : null,
        "archived" : false,
        "archive_reason" : null,
        "archived_at" : null,
        "created_at" : "2023-02-23T14:01:39.326Z",
        "created_by_id" : null,
        "modified_at" : "2023-02-27T11:04:07.180Z",
        "modified_by_id" : null
    }
}