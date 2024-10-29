import { IDatabaseItem, generateRandomTransformedUuid } from "@yu-life/yulife-bdd-framework"

const type = "postgres"
const modelName = "business_background"

export const BUSINESS_BACKGROUND_THE_BEAR = {
    type,
    modelName,
    data:{
        business_background_id: generateRandomTransformedUuid(),
        companies_house_name: "The Bear",
        companies_house_size: "10-49",
        industry_type: "Hospitality",
        companies_house_registered_number: null,
        sic_codes:null,
        persons_with_significant_control: null,
        company_status:null,
    }
} as IDatabaseItem