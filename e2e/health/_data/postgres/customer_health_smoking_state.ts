import { generateRandomPostgresId, generateRandomTransformedUuid } from "@yu-life/yulife-bdd-framework"
import { CUSTOMER_BENDER, CUSTOMER_LEELA } from "./customers"
import moment from "moment"
import { v4 as uuid } from "uuid";


const type= "postgres"
const modelName= "customer_health_smoking_state"

const generateStreakDays = (length: number): number[] => Array.from({ length }, (_, i) => i + 1)


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
            claimedStreakDays: generateStreakDays(25)
        },
        current_streak_start_user_time : moment().subtract(1, "day").format(),
        last_updated_streak_at_user_time : moment().subtract(1, "day").format(),
        current_streak : 25,
        longest_streak : 25,
        total_amount_avoided : 300,
        total_cost_saved : 32.5,
        total_days_smoke_free : 25,
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
        current_streak_start_user_time : moment().subtract(1, "day").format(),
        last_updated_streak_at_user_time : moment().subtract(1, "day").format(),
        current_streak : 8,
        longest_streak :13,
        total_amount_avoided : 30,
        total_cost_saved : 17.0,
        total_days_smoke_free : 8,
        archived: false,
    }
}