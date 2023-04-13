import { IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import { BUSINESS_PRODUCT_3, BUSINESS_PRODUCT_4_GCI, BUSINESS_PRODUCT_4_GIP, BUSINESS_PRODUCT_4_RGL, BUSINESS_PRODUCT_1_WB, BUSINESS_PRODUCT_4_GDental, BUSINESS_PRODUCT_ENDED, BUSINESS_PRODUCT_FUTURE} from "./business_product"
import { CPE_31 } from "./customer_product_entity"



const type = "postgres"
const modelName = "business_product_category"

export const BPC_1 = {
    type,
    modelName,
    data:{ 
        product_id: BUSINESS_PRODUCT_3.product.data.product_id,
        category_id:1,
        category_description: "All employees",
        earn_rate: 10,
        benefit_basis: "multiple_of_salary",
        multiple_or_amount: 6,
        benefit_definition: "Basic annual salary as at the date of death",
        min_entry_age: 16,
        eligibility_conditions: "All employees of the employer between the ages of 16 and the day before the State Pension Age. Entry is immediate upon commencement of employment.",
        category_name: "All employees"
    }
} as IDatabaseItem

export const BPC_4_RGL = {
    type,
    modelName,
    data:{
        product_id: BUSINESS_PRODUCT_4_RGL.product.data.product_id,
        category_id: 1,
        category_description: "All employees",
        earn_rate: 10,
        benefit_basis: "multiple_of_salary",
        multiple_or_amount: 9,
        benefit_definition: "Basic annual salary as at the date of death",
        min_entry_age: 16,
        eligibility_conditions: "All employees of the employer between the ages of 16 and the day before the State Pension Age. Entry is immediate upon commencement of employment.",
        category_name: "All employees"
    }
} as IDatabaseItem

export const BPC_4_GIP = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_4_GIP.product.data.product_id,
        category_id: 1,
        category_description: "All employees",
        earn_rate: 10,
        benefit_basis: "multiple_of_salary",
        multiple_or_amount: 9,
        benefit_definition: "Basic annual salary as at the date of death",
        min_entry_age: 16,
        eligibility_conditions: "All employees of the employer between the ages of 16 and the day before the State Pension Age. Entry is immediate upon commencement of employment.",
        category_name: "All employees"
    }
} as IDatabaseItem

export const BPC_4_GCI = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_4_GCI.product.data.product_id,
        category_id: 1,
        category_description: "All employees",
        earn_rate: 10,
        benefit_basis: "multiple_of_salary",
        multiple_or_amount: 9,
        benefit_definition: "Basic annual salary as at the date of death",
        min_entry_age: 16,
        eligibility_conditions: "All employees of the employer between the ages of 16 and the day before the State Pension Age. Entry is immediate upon commencement of employment.",
        category_name: "All employees"
    }
} as IDatabaseItem

export const BPC_6_GDental = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_4_GDental.product.data.product_id,
        category_id: 1,
        category_description: "All employees",
        earn_rate: 10,
        benefit_basis: "multiple_of_salary",
        multiple_or_amount: 9,
        benefit_definition: "Basic annual salary as at the date of death",
        min_entry_age: 16,
        eligibility_conditions: "All employees of the employer between the ages of 16 and the day before the State Pension Age. Entry is immediate upon commencement of employment.",
        category_name: "All employees"
    }
} as IDatabaseItem

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
        category_name: "All employees"
    }
} as IDatabaseItem


export const BPC_FUTURE = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_FUTURE.product.data.product_id,
        category_id: 1,
        category_description: "All employees",
        earn_rate: 10,
        benefit_basis: "multiple_of_salary",
        multiple_or_amount: 6,
        benefit_definition: "Basic annual salary as at the date of death",
        min_entry_age: 16,
        eligibility_conditions: "All employees of the employer between the ages of 16 and the day before the State Pension Age. Entry is immediate upon commencement of employment.",
        category_name: "All employees"
    }
} as IDatabaseItem
