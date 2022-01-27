import { IDatabaseItem } from "@yu-life/yulife-bdd-framework"
import { BUSINESS_GROUP_QUOTE_3, BUSINESS_GROUP_QUOTE_4_GCI, BUSINESS_GROUP_QUOTE_4_GIP, BUSINESS_GROUP_QUOTE_4_RGL} from "./business_quote"


const type = "postgres"
const modelName = "business_product"

export const BUSINESS_PRODUCT_3 = {
    type,
    modelName,
    data:{
        product_id: "YUG0000001",
        quote_id: BUSINESS_GROUP_QUOTE_3.data.quote_id,
        policy_name: "Pawnee Council Policy",
        policy_start_date: "2021-01-05T00:00:00Z",
        policy_end_date: "2031-01-05T00:00:00Z",
        refresh_frequency: "Q",
        policy_review_date: "2031-01-05T00:00:00Z",
        benefit_type: "Group Life",
        premium_frequency: "Q",
        product_code_id: "YUG0000001"
    }
} as IDatabaseItem

export const BUSINESS_PRODUCT_4_RGL = {
    type,
    modelName,
    data:{
        product_id: "YUG0000002",
        quote_id: BUSINESS_GROUP_QUOTE_4_RGL.data.quote_id,
        policy_name: "Justice League Policy RGL",
        policy_start_date: "2020-02-02T00:00:00Z",
        policy_end_date: "2030-02-02T00:00:00Z",
        refresh_frequency: "Q",
        policy_review_date: "2030-02-02T00:00:00Z",
        benefit_type: "Group Life",
        premium_frequency: "Q",
        product_code_id: "YUG0000002"
    }
} as IDatabaseItem

export const BUSINESS_PRODUCT_4_GIP = {
    type,
    modelName,
    data: {
        product_id: "YUG0000003",
        quote_id: BUSINESS_GROUP_QUOTE_4_GIP.data.quote_id,
        policy_name: "Justice League Policy GIP",
        policy_start_date: "2020-02-02T00:00:00Z",
        policy_end_date: "2030-02-02T00:00:00Z",
        refresh_frequency: "Q",
        policy_review_date: "2030-02-02T00:00:00Z",
        benefit_type: "Group Health",
        premium_frequency: "Q",
        product_code_id: "YUG0000003"
    }
} as IDatabaseItem

export const BUSINESS_PRODUCT_4_GCI = {
    type,
    modelName,
    data: {
        product_id: "YUG0000004",
        quote_id: BUSINESS_GROUP_QUOTE_4_GCI.data.quote_id,
        policy_name: "Justice League Policy GCI",
        policy_start_date: "2020-02-02T00:00:00Z",
        policy_end_date: "2030-02-02T00:00:00Z",
        refresh_frequency: "Q",
        policy_review_date: "2030-02-02T00:00:00Z",
        benefit_type: "Group CIC",
        premium_frequency: "Q",
        product_code_id: "YUG0000004"
    }
} as IDatabaseItem