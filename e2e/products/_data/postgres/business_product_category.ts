import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import {
    BUSINESS_PRODUCT_FUTURE,
    BUSINESS_PRODUCT_14_MPP_GDental,
    BUSINESS_PRODUCT_14_GCI,
    BUSINESS_PRODUCT_14_SAAS,
    BUSINESS_PRODUCT_14_GHI,
    BUSINESS_PRODUCT_14_RGL,
} from "./business_product";

const type = "postgres";
const modelName = "business_product_category";

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
        eligibility_conditions:
            "All employees of the employer between the ages of 16 and the day before the State Pension Age. Entry is immediate upon commencement of employment.",
        category_name: "All employees",
        version_id: 1,
        version_archived: false,
    },
} as IDatabaseItem;

export const BPC_14_GDental = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_14_MPP_GDental.product.data.product_id,
        category_id: 1,
        category_description: "cat1",
        earn_rate: 0,
        enrolment_method: "internal",
        election_option: "opt-in",
        category_name: "All employees",
        is_closed: false,
        version_id: 1,
        version_archived: false,
    },
};

export const BPC_14_GCI = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_14_GCI.product.data.product_id,
        category_id: 1,
        category_description: "All employees",
        earn_rate: 10,
        benefit_basis: "multiple_of_salary",
        multiple_or_amount: 9,
        benefit_definition: "Basic annual salary as at the date of death",
        min_entry_age: 16,
        eligibility_conditions:
            "All employees of the employer between the ages of 16 and the day before the State Pension Age. Entry is immediate upon commencement of employment.",
        category_name: "All employees",
        version_id: 1,
        version_archived: false,
    },
} as IDatabaseItem;

export const BPC_14_SAAS = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_14_SAAS.product.data.product_id,
        category_id: 1,
        category_description: "All employees",
        earn_rate: 0,
        benefit_basis: "multiple_of_salary",
        multiple_or_amount: 9,
        benefit_definition: "Basic annual salary as at the date of death",
        min_entry_age: 16,
        eligibility_conditions:
            "All employees of the employer between the ages of 16 and the day before the State Pension Age. Entry is immediate upon commencement of employment.",
        category_name: "All employees",
        version_id: 1,
        version_archived: false,
    },
} as IDatabaseItem;

export const BPC_14_GHI = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_14_GHI.product.data.product_id,
        category_id: 1,
        category_description: "All employees",
        earn_rate: 0,
        benefit_basis: "multiple_of_salary",
        multiple_or_amount: 9,
        benefit_definition: "Basic annual salary as at the date of death",
        min_entry_age: 16,
        eligibility_conditions:
            "All employees of the employer between the ages of 16 and the day before the State Pension Age. Entry is immediate upon commencement of employment.",
        category_name: "All employees",
        version_id: 1,
        version_archived: false,
    },
} as IDatabaseItem;

export const BPC_14_RGL = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_14_RGL.product.data.product_id,
        category_id: 1,
        category_description: "All employees",
        earn_rate: 10,
        benefit_basis: "multiple_of_salary",
        multiple_or_amount: 9,
        benefit_definition: "Basic annual salary as at the date of death",
        min_entry_age: 16,
        eligibility_conditions:
            "All employees of the employer between the ages of 16 and the day before the State Pension Age. Entry is immediate upon commencement of employment.",
        category_name: "All employees",
        version_id: 1,
        version_archived: false,
    },
} as IDatabaseItem;
