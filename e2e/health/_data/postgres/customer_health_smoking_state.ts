import { generateRandomTransformedUuid } from "@yu-life/yulife-bdd-framework"
import { CUSTOMER_BENDER, CUSTOMER_LEELA, CUSTOMER_ZOIDBERG } from "./customers"
import { v4 as uuid } from "uuid";


const type= "postgres"
const modelName= "customer_health_smoking_state"



export const SMOKING_STATE_LEELA = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_id : uuid(),
        customer_id : CUSTOMER_LEELA.data.customerId,
        meta_data : {
            journeySessionId:generateRandomTransformedUuid(),
            currency:"£",
            dailyExpense:1.3,
            amountUsedPerDay:12,
            smokingType:"both",
            triggers:["celebrate","financial stress"],
            motivations:["save_money","improve_health"],
        },
        longest_streak : 25,
        total_amount_avoided : 204,
        total_cost_saved : 22.1,
        total_days_smoke_free : 17,
        archived: false,
    }
}

export const SMOKING_STATE_BENDER = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_id : uuid(),
        customer_id : CUSTOMER_BENDER.data.customerId,
        meta_data : {
            journeySessionId:generateRandomTransformedUuid(),
            currency:"£",
            dailyExpense:1,
            amountUsedPerDay:12,
            smokingType:"both",
            triggers:["celebrate","financial stress"],
            motivations:["save_money","improve_health"]
        },
        longest_streak :13,
        total_amount_avoided : 42,
        total_cost_saved : 6.0,
        total_days_smoke_free : 6,
        archived: false,
    }
}

export const SMOKING_STATE_ZOIDBERG = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_id : uuid(),
        customer_id : CUSTOMER_ZOIDBERG.data.customerId,
        meta_data : {
            journeySessionId:generateRandomTransformedUuid(),
            currency:"£",
            dailyExpense:5,
            amountUsedPerDay:8,
            smokingType:"both",
            triggers:["celebrate","financial stress"],
            motivations:["save_money","improve_health"]
        },
        longest_streak :10,
        total_amount_avoided : 80,
        total_cost_saved : 50.0,
        total_days_smoke_free : 10,
        archived: false,
    }
}