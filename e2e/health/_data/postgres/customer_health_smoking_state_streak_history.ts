import { generateRandomTransformedUuid } from "@yu-life/yulife-bdd-framework"
import { SMOKING_STREAK_BENDER, SMOKING_STREAK_LEELA } from "./customer_health_smoking_state_streak"
import { SMOKING_STATE_BENDER, SMOKING_STATE_LEELA } from "./customer_health_smoking_state"

const type= "postgres"
const modelName= "customer_health_smoking_state_streak_history"

const generateStreakDays = (length: number): number[] => Array.from({ length }, (_, i) => i + 1)

export const SMOKING_STATE_STREAK_HISTORY_LEELA = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_streak_history_id : SMOKING_STREAK_LEELA.data.customer_health_smoking_state_streak_id,
        customer_health_smoking_state_streak_id: SMOKING_STREAK_LEELA.data.customer_health_smoking_state_streak_id,
        action: "claim_reward",
        user_time : SMOKING_STREAK_LEELA.data.streak_start_user_time,
        event_date: SMOKING_STREAK_LEELA.data.streak_start_user_time,
        meta_data : {
            journeySessionId:SMOKING_STATE_LEELA.data.meta_data.journeySessionId,
            currency:"£",
            dailyExpense:1.3,
            amountUsedPerDay:12,
            smokingType:"both",
            triggers:["celebrate","financial stress"],
            motivations:["save_money","improve_health"],
            claimedStreakDays: generateStreakDays(25)
        },
        archived: false,
    }
}

export const SMOKING_STATE_STREAK_HISTORY_BENDER = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_streak_history_id : SMOKING_STREAK_BENDER.data.customer_health_smoking_state_streak_id,
        customer_health_smoking_state_streak_id: SMOKING_STREAK_BENDER.data.customer_health_smoking_state_streak_id,
        action: true,
        user_time : SMOKING_STREAK_BENDER.data.streak_start_user_time,
        event_date: SMOKING_STREAK_BENDER.data.streak_start_user_time,
        meta_data : {
            journeySessionId:SMOKING_STATE_BENDER.data.meta_data.journeySessionId,
            currency:"£",
            dailyExpense:1.3,
            amountUsedPerDay:12,
            smokingType:"both",
            triggers:["celebrate","financial stress"],
            motivations:["save_money","improve_health"],
        },
        archived: false,
    }
}