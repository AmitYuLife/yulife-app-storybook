import { IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import { BUSINESS_PRODUCT_1_WB, BUSINESS_PRODUCT_ENDED } from "./business_product"

const type = "postgres"
const modelName = "business_product_category"

export const BPC_1_WELLBEING = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_1_WB.product.data.product_id,
        category_id: 1,
        category_description: "All employees will have access to the YuLife app",
        earn_rate: 10,
        eligibility_conditions: "All employees of the employer between the ages of 16 and the day before the State Pension Age. Entry is immediate upon commencement of employment.",
        category_name : "App access only",
        version_id: 1,
        version_archived: false
    }
} as IDatabaseItem

export const BPC_ENDED = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_ENDED.product.data.product_id,
        category_id: 1,
        category_description: "All employees",
        earn_rate: 10,
        benefit_basis: "multiple_of_salary",
        multiple_or_amount: 6,
        benefit_definition: "Basic annual salary as at the date of death",
        min_entry_age: 16,
        eligibility_conditions: "All employees of the employer between the ages of 16 and the day before the State Pension Age. Entry is immediate upon commencement of employment.",
        category_name: "All employees",
        version_id: 1,
        version_archived: false
    }
} as IDatabaseItem
