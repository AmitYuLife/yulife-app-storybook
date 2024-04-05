import { generateRandomPostgresId } from "@yu-life/yulife-bdd-framework";
import { BUSINESS_PRODUCT_10_GDent, BUSINESS_PRODUCT_11_GDent, BUSINESS_PRODUCT_12_GDent, BUSINESS_PRODUCT_4_GDental, BUSINESS_PRODUCT_4_GDental_CHOICE, BUSINESS_PRODUCT_8_GHI, BUSINESS_PRODUCT_9_GDent } from "./business_product"

const type = "postgres"
const modelName = "business_product_category_version_benefit"

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
        "benefit_set_product_version_id" :"Bupa_GDentPlan_01",
        "modified_by_id" : null,
        "version_id": 1
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
        "benefit_set_product_version_id":"Bupa_GHealth_01",
        "modified_by_id" : null,
        "version_id": 1
    }
}

export const BPCB_9_GDental = {
    type,
    modelName,
    data: {
        "business_product_category_benefit_id" : generateRandomPostgresId(),
        "business_product_id" :  BUSINESS_PRODUCT_9_GDent.product.data.product_id,
        "category_id" : "1",
        "allowed_product_version_benefit_set_ids":["Level 1 | Couple", "Level 1 | Single Parent Family", "Level 1 | Family","Level 2 | Single", "Level 2 | Couple", "Level 2 | Single Parent Family", "Level 2 | Family", "Level 3 | Single", "Level 3 | Couple", "Level 3 | Single Parent Family", "Level 3 | Family", "Level 4 | Single", "Level 4 | Couple", "Level 4 | Single Parent Family", "Level 4 | Family", "Level 5 | Single", "Level 5 | Couple", "Level 5 | Single Parent Family", "Level 5 | Family"],
        "default_product_version_benefit_set_id" :"Level 1 | Single",
        "business_contribution" : null,
        "benefit_set_product_version_id" :"Bupa_GDentPlan_01",
        "archived" : false,
        "version_id": 1
    }
}

export const BPCB_10_GDental = {
    type,
    modelName,
    data: {
        "business_product_category_benefit_id" : generateRandomPostgresId(),
        "business_product_id" :  BUSINESS_PRODUCT_10_GDent.product.data.product_id,
        "category_id" : "1",
        "allowed_product_version_benefit_set_ids":["Level 1 | Couple", "Level 1 | Single Parent Family", "Level 1 | Family","Level 2 | Single", "Level 2 | Couple", "Level 2 | Single Parent Family", "Level 2 | Family", "Level 3 | Single", "Level 3 | Couple", "Level 3 | Single Parent Family", "Level 3 | Family", "Level 4 | Single", "Level 4 | Couple", "Level 4 | Single Parent Family", "Level 4 | Family", "Level 5 | Single", "Level 5 | Couple", "Level 5 | Single Parent Family", "Level 5 | Family"],
        "default_product_version_benefit_set_id" :"Level 1 | Single",
        "business_contribution" : null,
        "benefit_set_product_version_id" :"Bupa_GDentPlan_01",
        "archived" : false,
        "version_id": 1
    }
}

export const BPCB_11_GDental = {
    type,
    modelName,
    data: {
        "business_product_category_benefit_id" : generateRandomPostgresId(),
        "business_product_id" :  BUSINESS_PRODUCT_11_GDent.product.data.product_id,
        "category_id" : "1",
        "allowed_product_version_benefit_set_ids":["Level 1 | Couple", "Level 1 | Single Parent Family", "Level 1 | Family","Level 2 | Single", "Level 2 | Couple", "Level 2 | Single Parent Family", "Level 2 | Family", "Level 3 | Single", "Level 3 | Couple", "Level 3 | Single Parent Family", "Level 3 | Family", "Level 4 | Single", "Level 4 | Couple", "Level 4 | Single Parent Family", "Level 4 | Family", "Level 5 | Single", "Level 5 | Couple", "Level 5 | Single Parent Family", "Level 5 | Family"],
        "default_product_version_benefit_set_id" :"Level 1 | Single",
        "business_contribution" : null,
        "benefit_set_product_version_id" :"Bupa_GDentPlan_01",
        "archived" : false,
        "version_id": 1
    }
}

export const BPCB_12_GDental = {
    type,
    modelName,
    data: {
        "business_product_category_benefit_id" : generateRandomPostgresId(),
        "business_product_id" :  BUSINESS_PRODUCT_12_GDent.product.data.product_id,
        "category_id" : "1",
        "allowed_product_version_benefit_set_ids":["Level 1 | Couple", "Level 1 | Single Parent Family", "Level 1 | Family","Level 2 | Single", "Level 2 | Couple", "Level 2 | Single Parent Family", "Level 2 | Family", "Level 3 | Single", "Level 3 | Couple", "Level 3 | Single Parent Family", "Level 3 | Family", "Level 4 | Single", "Level 4 | Couple", "Level 4 | Single Parent Family", "Level 4 | Family", "Level 5 | Single", "Level 5 | Couple", "Level 5 | Single Parent Family", "Level 5 | Family"],
        "default_product_version_benefit_set_id" :"Level 1 | Single",
        "business_contribution" : null,
        "benefit_set_product_version_id" :"Bupa_GDentPlan_01",
        "archived" : false,
        "version_id": 1
    }
}

export const BPCB_10_GDental_Opt_out = {
    type,
    modelName,
    data: {
        "business_product_category_benefit_id" : generateRandomPostgresId(),
        "business_product_id" :  BUSINESS_PRODUCT_10_GDent.product.data.product_id,
        "category_id" : "2",
        "allowed_product_version_benefit_set_ids":["Level 1 | Couple", "Level 1 | Single Parent Family", "Level 1 | Family","Level 2 | Single", "Level 2 | Couple", "Level 2 | Single Parent Family", "Level 2 | Family", "Level 3 | Single", "Level 3 | Couple", "Level 3 | Single Parent Family", "Level 3 | Family", "Level 4 | Single", "Level 4 | Couple", "Level 4 | Single Parent Family", "Level 4 | Family", "Level 5 | Single", "Level 5 | Couple", "Level 5 | Single Parent Family", "Level 5 | Family"],
        "default_product_version_benefit_set_id" :"Level 1 | Single",
        "business_contribution" : null,
        "benefit_set_product_version_id" :"Bupa_GDentPlan_01",
        "archived" : false,
        "version_id": 1
    }
}

export const BPCB_11_GDental_Opt_out = {
    type,
    modelName,
    data: {
        "business_product_category_benefit_id" : generateRandomPostgresId(),
        "business_product_id" :  BUSINESS_PRODUCT_11_GDent.product.data.product_id,
        "category_id" : "2",
        "allowed_product_version_benefit_set_ids":["Level 1 | Couple", "Level 1 | Single Parent Family", "Level 1 | Family","Level 2 | Single", "Level 2 | Couple", "Level 2 | Single Parent Family", "Level 2 | Family", "Level 3 | Single", "Level 3 | Couple", "Level 3 | Single Parent Family", "Level 3 | Family", "Level 4 | Single", "Level 4 | Couple", "Level 4 | Single Parent Family", "Level 4 | Family", "Level 5 | Single", "Level 5 | Couple", "Level 5 | Single Parent Family", "Level 5 | Family"],
        "default_product_version_benefit_set_id" :"Level 1 | Single",
        "business_contribution" : null,
        "benefit_set_product_version_id" :"Bupa_GDentPlan_01",
        "archived" : false,
        "version_id": 1
    }
}

export const BPCB_12_GDental_Opt_out = {
    type,
    modelName,
    data: {
        "business_product_category_benefit_id" : generateRandomPostgresId(),
        "business_product_id" :  BUSINESS_PRODUCT_12_GDent.product.data.product_id,
        "category_id" : "2",
        "allowed_product_version_benefit_set_ids":["Level 1 | Couple", "Level 1 | Single Parent Family", "Level 1 | Family","Level 2 | Single", "Level 2 | Couple", "Level 2 | Single Parent Family", "Level 2 | Family", "Level 3 | Single", "Level 3 | Couple", "Level 3 | Single Parent Family", "Level 3 | Family", "Level 4 | Single", "Level 4 | Couple", "Level 4 | Single Parent Family", "Level 4 | Family", "Level 5 | Single", "Level 5 | Couple", "Level 5 | Single Parent Family", "Level 5 | Family"],
        "default_product_version_benefit_set_id" :"Level 1 | Single",
        "business_contribution" : null,
        "benefit_set_product_version_id" :"Bupa_GDentPlan_01",
        "archived" : false,
        "version_id": 1
    }
}

export const BPCB_4_GDental_Opt_out = {
    type,
    modelName,
    data: {
        "business_product_category_benefit_id" : generateRandomPostgresId(),
        "business_product_id" :  BUSINESS_PRODUCT_4_GDental.product.data.product_id,
        "category_id" : "2",
        "allowed_product_version_benefit_set_ids":["Level 1 | Couple", "Level 1 | Single Parent Family", "Level 1 | Family","Level 2 | Single", "Level 2 | Couple", "Level 2 | Single Parent Family", "Level 2 | Family", "Level 3 | Single", "Level 3 | Couple", "Level 3 | Single Parent Family", "Level 3 | Family", "Level 4 | Single", "Level 4 | Couple", "Level 4 | Single Parent Family", "Level 4 | Family", "Level 5 | Single", "Level 5 | Couple", "Level 5 | Single Parent Family", "Level 5 | Family"],
        "default_product_version_benefit_set_id" :"Level 1 | Single",
        "business_contribution" : null,
        "benefit_set_product_version_id" :"Bupa_GDentPlan_01",
        "archived" : false,
        "version_id": 1
    }
}

export const BPCB_125_GDental = {
    type,
    modelName,
    data: {
        "business_product_category_benefit_id" : generateRandomPostgresId(),
        "business_product_id" : BUSINESS_PRODUCT_4_GDental_CHOICE.product.data.product_id,
        "category_id" : "1",
        "default_product_version_benefit_set_id" :  "Choice 4 | Single",
        "business_contribution" : null,
        "archived" : false,
        "archive_reason" : null,
        "archived_at" : null,
        "created_at" : "2023-02-23T14:01:39.326Z",
        "created_by_id" : null,
        "modified_at" : "2023-02-27T11:04:07.180Z",
        "benefit_set_product_version_id" :"Bupa_GDentChoice_01",
        "modified_by_id" : null,
        "version_id": 1
    }
}
