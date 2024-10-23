import { generateRandomTransformedUuid } from "@yu-life/yulife-bdd-framework"
import { CUSTOMER_BENDER, CUSTOMER_LEELA, CUSTOMER_ZAPP, CUSTOMER_ZOIDBERG } from "./customers"
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
            weeklyExpense:1.3,
            amountUsedPerDay:12,
            smokingType:"both",
            triggers:["celebrate","financial stress"],
            motivations:["save_money","improve_health"],
        },
        longest_streak : 25,
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
            weeklyExpense:10,
            amountUsedPerDay:12,
            smokingType:"both",
            triggers:["celebrate","financial stress"],
            motivations:["save_money","improve_health"]
        },
        longest_streak :13,
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
            weeklyExpense:20,
            amountUsedPerDay:8,
            smokingType:"both",
            triggers:["celebrate","financial stress"],
            motivations:["save_money","improve_health"]
        },
        longest_streak :10,
        total_days_smoke_free : 10,
        archived: false,
    }
}

export const SMOKING_STATE_ZAPP = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_id : uuid(),
        customer_id : CUSTOMER_ZAPP.data.customerId,
        meta_data : {
            journeySessionId:generateRandomTransformedUuid(),
            currency:"£",
            weeklyExpense:5,
            amountUsedPerDay:8,
            smokingType:"both",
            triggers:["celebrate","financial stress"],
            motivations:["save_money","improve_health"]
        },
        longest_streak :27,
        total_days_smoke_free : 27,
        archived: false,
    }
}