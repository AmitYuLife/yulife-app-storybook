import { generateRandomPostgresId, IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import { BUSINESS_ACCOUNT_3, BUSINESS_ACCOUNT_4 } from "./business"


const type = "postgres"
const modelName = "business_group_quote"

const generateRanomQuoteNumber = () =>{ return Math.random().toString().substr(2, 10);}

export const BUSINESS_GROUP_QUOTE_3 = {
    type,
    modelName,
    data:{
        quote_number_id: generateRanomQuoteNumber(),
        business_account_id: BUSINESS_ACCOUNT_3.data.business_account_id,
        benefit_basis: "multiple_of_salary",
        multiple_or_amount: 6,
        employees_count: 15,
        product_version_id: "AIG_GLI_01"
    }
} as IDatabaseItem

export const BUSINESS_GROUP_QUOTE_4_RGL = {
    type,
    modelName,
    data:{
        quote_number_id: generateRanomQuoteNumber(),
        business_account_id: BUSINESS_ACCOUNT_4.data.business_account_id,
        benefit_basis: "multiple_of_salary",
        multiple_or_amount: 9,
        employees_count: 6,
        product_version_id: "AIG_ReGL_01"
    }
} as IDatabaseItem

export const BUSINESS_GROUP_QUOTE_4_GIP = {
    type,
    modelName,
    data:{
        quote_number_id: generateRanomQuoteNumber(),
        business_account_id: BUSINESS_ACCOUNT_4.data.business_account_id,
        benefit_basis:"multiple_of_salary",
        multiple_or_amount: 9,
        employees_count: 6,
        product_version_id: "AIG_GIP_01"
    }
} as IDatabaseItem

export const BUSINESS_GROUP_QUOTE_4_GCI = {
    type,
    modelName,
    data:{
        quote_number_id: generateRanomQuoteNumber(),
        business_account_id: BUSINESS_ACCOUNT_4.data.business_account_id,
        benefit_basis: "multiple_of_salary",
        multiple_or_amount: 9,
        employees_count: 6,
        product_version_id: "AIG_GCI_01"
    }
} as IDatabaseItem