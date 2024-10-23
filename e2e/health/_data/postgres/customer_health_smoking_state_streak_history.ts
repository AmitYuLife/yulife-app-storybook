import { generateRandomTransformedUuid } from "@yu-life/yulife-bdd-framework"
import { SMOKING_STREAK_BENDER, SMOKING_STREAK_LEELA, SMOKING_STREAK_ZAPP, SMOKING_STREAK_ZOIDBERG } from "./customer_health_smoking_state_streak"
import { SMOKING_STATE_BENDER, SMOKING_STATE_LEELA, SMOKING_STATE_ZAPP, SMOKING_STATE_ZOIDBERG } from "./customer_health_smoking_state"
import moment from "moment"
import { v4 as uuid } from "uuid";

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
            claimedStreakDays: generateStreakDays(17)
        },
    }
}

export const SMOKING_STATE_STREAK_HISTORY_LEELA_02 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_streak_history_id : uuid(),
        customer_health_smoking_state_streak_id: SMOKING_STREAK_LEELA.data.customer_health_smoking_state_streak_id,
        action: "claim_reward",
        user_time : moment().subtract(45, "days").format(),
        event_date: moment().subtract(45, "days").format(),
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
            dailyExpense:1,
            amountUsedPerDay:12,
            smokingType:"both",
            triggers:["celebrate","financial stress"],
            motivations:["save_money","improve_health"],
        },
    }
}

export const SMOKING_STATE_STREAK_HISTORY_ZOIDBERG = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_streak_history_id : SMOKING_STREAK_ZOIDBERG.data.customer_health_smoking_state_streak_id,
        customer_health_smoking_state_streak_id: SMOKING_STREAK_ZOIDBERG.data.customer_health_smoking_state_streak_id,
        action: true,
        user_time : SMOKING_STREAK_ZOIDBERG.data.streak_start_user_time,
        event_date: SMOKING_STREAK_ZOIDBERG.data.streak_start_user_time,
        meta_data : {
            journeySessionId:SMOKING_STATE_ZOIDBERG.data.meta_data.journeySessionId,
            currency:"£",
            dailyExpense:5,
            amountUsedPerDay:8,
            smokingType:"both",
            triggers:["celebrate","financial stress"],
            motivations:["save_money","improve_health"],
            claimedStreakDays: generateStreakDays(10)
        },
    }
}

export const SMOKING_STATE_STREAK_HISTORY_ZAPP = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_streak_history_id : SMOKING_STREAK_ZAPP.data.customer_health_smoking_state_streak_id,
        customer_health_smoking_state_streak_id: SMOKING_STREAK_ZAPP.data.customer_health_smoking_state_streak_id,
        action: "claim_reward",
        user_time : SMOKING_STREAK_ZAPP.data.streak_start_user_time,
        event_date: SMOKING_STREAK_ZAPP.data.streak_start_user_time,
        meta_data : {
            journeySessionId:SMOKING_STATE_ZAPP.data.meta_data.journeySessionId,
            currency:"£",
            dailyExpense:5,
            amountUsedPerDay:8,
            smokingType:"both",
            triggers:["celebrate","financial stress"],
            motivations:["save_money","improve_health"],
            claimedStreakDays: generateStreakDays(27)
        },
    }
}