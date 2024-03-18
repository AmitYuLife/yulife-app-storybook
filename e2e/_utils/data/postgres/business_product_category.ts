import { IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import { BUSINESS_PRODUCT_3, BUSINESS_PRODUCT_4_GCI, BUSINESS_PRODUCT_4_GIP, BUSINESS_PRODUCT_4_RGL, BUSINESS_PRODUCT_1_WB, BUSINESS_PRODUCT_4_GDental, BUSINESS_PRODUCT_ENDED, BUSINESS_PRODUCT_FUTURE, BUSINESS_PRODUCT_8_GHI, BUSINESS_PRODUCT_9_GDent, BUSINESS_PRODUCT_10_GDent, BUSINESS_PRODUCT_11_GDent, BUSINESS_PRODUCT_12_GDent, BUSINESS_PRODUCT_13_GHI_REWARDS, BUSINESS_PRODUCT_14_MPP_GDental, BUSINESS_PRODUCT_14_GCI, BUSINESS_PRODUCT_14_SAAS, BUSINESS_PRODUCT_14_GHI, BUSINESS_PRODUCT_14_RGL, BUSINESS_PRODUCT_4_GDental_CHOICE, BUSINESS_PRODUCT_15_GHI_REWARDS, BUSINESS_PRODUCT_5_RGL, BUSINESS_PRODUCT_5_GIP, BUSINESS_PRODUCT_5_GCI, BUSINESS_PRODUCT_5_WB, BUSINESS_PRODUCT_16_GHI_REWARDS} from "./business_product"
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
        category_name: "All employees",
        version_id: 1,
        version_archived: false
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
        category_name: "All employees",
        version_id: 1,
        version_archived: false
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
        category_name: "All employees",
        version_id: 1,
        version_archived: false
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
        category_name: "All employees",
        version_id: 1,
        version_archived: false
    }
} as IDatabaseItem

export const BPC_5_WELLBEING = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_5_WB.product.data.product_id,
        category_id: 1,
        category_description: "All employees will have access to the YuLife app",
        earn_rate: 10,
        eligibility_conditions: "All employees of the employer between the ages of 16 and the day before the State Pension Age. Entry is immediate upon commencement of employment.",
        category_name : "App access only",
        version_id: 1,
        version_archived: false
    }
} as IDatabaseItem

export const BPC_5_RGL = {
    type,
    modelName,
    data:{
        product_id: BUSINESS_PRODUCT_5_RGL.product.data.product_id,
        category_id: 1,
        category_description: "All employees",
        earn_rate: 10,
        benefit_basis: "multiple_of_salary",
        multiple_or_amount: 9,
        benefit_definition: "Basic annual salary as at the date of death",
        min_entry_age: 16,
        eligibility_conditions: "All employees of the employer between the ages of 16 and the day before the State Pension Age. Entry is immediate upon commencement of employment.",
        category_name: "All employees",
        version_id: 1,
        version_archived: false
    }
} as IDatabaseItem

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
        eligibility_conditions: "All employees of the employer between the ages of 16 and the day before the State Pension Age. Entry is immediate upon commencement of employment.",
        category_name: "All employees",
        version_id: 1,
        version_archived: false
    }
} as IDatabaseItem

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
        eligibility_conditions: "All employees of the employer between the ages of 16 and the day before the State Pension Age. Entry is immediate upon commencement of employment.",
        category_name: "All employees",
        version_id: 1,
        version_archived: false
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
        category_name: "All employees",
        version_id: 1,
        version_archived: false
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
        category_name: "All employees",
        version_id: 1,
        version_archived: false
    }
} as IDatabaseItem


export const BPC_1_GHI_1 = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_8_GHI.product.data.product_id,
        category_id: 1,
        earn_rate: 2,
        category_description: "All employees",
        is_closed : false,
        category_name : "cat1",
        enrolment_method : "external",
        election_option : "opt-out",
        version_id: 1,
        version_archived: false
    }
}

export const BPC_9_GDental = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_9_GDent.product.data.product_id,
        category_id: 1,
        category_description: "cat1",
        earn_rate: 0,
        enrolment_method : "internal",
        election_option : "opt-out",
        category_name: "All employees",
        "is_closed" : false,
        version_id: 1,
        version_archived: false
    }
}

export const BPC_10_GDental = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_10_GDent.product.data.product_id,
        category_id: 1,
        category_description: "cat1",
        earn_rate: 0,
        enrolment_method : "internal",
        election_option : "opt-in",
        category_name: "All employees",
        "is_closed" : false,
        version_id: 1,
        version_archived: false
    }
}

export const BPC_11_GDental = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_11_GDent.product.data.product_id,
        category_id: 1,
        category_description: "cat1",
        earn_rate: 0,
        enrolment_method : "internal",
        election_option : "opt-in",
        category_name: "All employees",
        "is_closed" : false,
        version_id: 1,
        version_archived: false
    }
}

export const BPC_12_GDental = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_12_GDent.product.data.product_id,
        category_id: 1,
        category_description: "cat1",
        earn_rate: 0,
        enrolment_method : "internal",
        election_option : "opt-in",
        category_name: "All employees",
        "is_closed" : false,
        version_id: 1,
        version_archived: false
    }
}

export const BPC_10_GDental_Opt_out = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_10_GDent.product.data.product_id,
        category_id: 2,
        category_description: "cat2",
        earn_rate: 0,
        enrolment_method : "internal",
        election_option : "opt-out",
        category_name: "All employees",
        "is_closed" : false,
        version_id: 1,
        version_archived: false
    }
}

export const BPC_11_GDental_Opt_out = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_11_GDent.product.data.product_id,
        category_id: 2,
        category_description: "cat2",
        earn_rate: 0,
        enrolment_method : "internal",
        election_option : "opt-out",
        category_name: "All employees",
        "is_closed" : false,
        version_id: 1,
        version_archived: false
    }
}

export const BPC_12_GDental_Opt_out = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_12_GDent.product.data.product_id,
        category_id: 2,
        category_description: "cat2",
        earn_rate: 0,
        enrolment_method : "internal",
        election_option : "opt-out",
        category_name: "All employees",
        "is_closed" : false,
        version_id: 1,
        version_archived: false
    }
}

export const BPC_4_GDental_Opt_out = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_4_GDental.product.data.product_id,
        category_id: 2,
        category_description: "cat2",
        earn_rate: 0,
        enrolment_method : "internal",
        election_option : "opt-out",
        category_name: "All employees",
        "is_closed" : false,
        version_id: 1,
        version_archived: false
    }
}

export const BPC_9_GDental_Opt_out = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_9_GDent.product.data.product_id,
        category_id: 2,
        category_description: "cat2",
        earn_rate: 0,
        enrolment_method : "internal",
        election_option : "opt-in",
        category_name: "All employees",
        "is_closed" : false,
        version_id: 1,
        version_archived: false
    }
}

export const BPC_GHI_REWARDS = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_13_GHI_REWARDS.product.data.product_id,
        category_id: 1,
        earn_rate: 2,
        category_description: "All employees",
        is_closed : false,
        category_name : "cat1",
        enrolment_method : "external",
        election_option : "opt-out",
        version_id: 1,
        version_archived: false
    }
}

export const BPC_14_GDental = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_14_MPP_GDental.product.data.product_id,
        category_id: 1,
        category_description: "cat1",
        earn_rate: 0,
        enrolment_method : "internal",
        election_option : "opt-in",
        category_name: "All employees",
        "is_closed" : false,
        version_id: 1,
        version_archived: false
    }
}

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
        eligibility_conditions: "All employees of the employer between the ages of 16 and the day before the State Pension Age. Entry is immediate upon commencement of employment.",
        category_name: "All employees",
        version_id: 1,
        version_archived: false
    }
} as IDatabaseItem

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
        eligibility_conditions: "All employees of the employer between the ages of 16 and the day before the State Pension Age. Entry is immediate upon commencement of employment.",
        category_name: "All employees",
        version_id: 1,
        version_archived: false
    }
} as IDatabaseItem

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
        eligibility_conditions: "All employees of the employer between the ages of 16 and the day before the State Pension Age. Entry is immediate upon commencement of employment.",
        category_name: "All employees",
        version_id: 1,
        version_archived: false
    }
} as IDatabaseItem

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
        eligibility_conditions: "All employees of the employer between the ages of 16 and the day before the State Pension Age. Entry is immediate upon commencement of employment.",
        category_name: "All employees",
        version_id: 1,
        version_archived: false
    }
} as IDatabaseItem

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
        eligibility_conditions: "All employees of the employer between the ages of 16 and the day before the State Pension Age. Entry is immediate upon commencement of employment.",
        category_name: "All employees",
        version_id: 1,
        version_archived: false
    }
} as IDatabaseItem

export const BPC_GHI_REWARDS_2 = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_15_GHI_REWARDS.product.data.product_id,
        category_id: 1,
        earn_rate: 2,
        category_description: "All employees",
        is_closed : false,
        category_name : "cat1",
        enrolment_method : "external",
        election_option : "opt-out",
        version_id: 1,
        version_archived: false
    }
}

export const BPC_GHI_REWARDS_3 = {
    type,
    modelName,
    data: {
        product_id: BUSINESS_PRODUCT_16_GHI_REWARDS.product.data.product_id,
        category_id: 1,
        earn_rate: 2,
        category_description: "All employees",
        is_closed : false,
        category_name : "cat1",
        enrolment_method : "external",
        election_option : "opt-out",
        version_id: 1,
        version_archived: false
    }
}