import { IDatabaseItem } from "@yu-life/yulife-bdd-framework";
import {
    BUSINESS_PRODUCT_5_RGL,
    BUSINESS_PRODUCT_5_GIP,
    BUSINESS_PRODUCT_5_GCI,
    BUSINESS_PRODUCT_5_WB,
    BUSINESS_PRODUCT_4_GDental,
    BUSINESS_PRODUCT_4_GDental_CHOICE,
    BUSINESS_PRODUCT_10_GDent,
    BUSINESS_PRODUCT_9_GDent,
} from "./business_product";

const type = "postgres";
const modelName = "business_product_category";

export const BPC_5_WELLBEING = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_5_WB.product.data.product_id,
        category_id: 1,
        category_description: "All employees will have access to the YuLife app",
        earn_rate: 10,
        eligibility_conditions:
            "All employees of the employer between the ages of 16 and the day before the State Pension Age. Entry is immediate upon commencement of employment.",
        category_name: "App access only",
        version_id: 1,
        version_archived: false,
    },
} as IDatabaseItem;

export const BPC_5_RGL = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_5_RGL.product.data.product_id,
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

export const BPC_5_GIP = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_5_GIP.product.data.product_id,
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

export const BPC_5_GCI = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_5_GCI.product.data.product_id,
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
        eligibility_conditions:
            "All employees of the employer between the ages of 16 and the day before the State Pension Age. Entry is immediate upon commencement of employment.",
        category_name: "All employees",
        version_id: 1,
        version_archived: false,
    },
} as IDatabaseItem;

export const BPC_9_GDental = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_9_GDent.product.data.product_id,
        category_id: 1,
        category_description: "cat1",
        earn_rate: 0,
        enrolment_method: "internal",
        election_option: "opt-out",
        category_name: "All employees",
        is_closed: false,
        version_id: 1,
        version_archived: false,
    },
};

export const BPC_10_GDental = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_10_GDent.product.data.product_id,
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

export const BPC_10_GDental_Opt_out = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_10_GDent.product.data.product_id,
        category_id: 2,
        category_description: "cat2",
        earn_rate: 0,
        enrolment_method: "internal",
        election_option: "opt-out",
        category_name: "All employees",
        is_closed: false,
        version_id: 1,
        version_archived: false,
    },
};

export const BPC_4_GDental_Opt_out = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_4_GDental.product.data.product_id,
        category_id: 2,
        category_description: "cat2",
        earn_rate: 0,
        enrolment_method: "internal",
        election_option: "opt-out",
        category_name: "All employees",
        is_closed: false,
        version_id: 1,
        version_archived: false,
    },
};

export const BPC_9_GDental_Opt_out = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_9_GDent.product.data.product_id,
        category_id: 2,
        category_description: "cat2",
        earn_rate: 0,
        enrolment_method: "internal",
        election_option: "opt-in",
        category_name: "All employees",
        is_closed: false,
        version_id: 1,
        version_archived: false,
    },
};

export const BPC_125_GDental = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_4_GDental_CHOICE.product.data.product_id,
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
