import moment from "moment"
import { v4 as uuid } from "uuid";
import { SMOKING_STATE_BENDER, SMOKING_STATE_LEELA, SMOKING_STATE_ZOIDBERG } from "./customer_health_smoking_state";


const type= "postgres"
const modelName= "customer_health_smoking_state_streak"

export const SMOKING_STREAK_LEELA = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_streak_id : uuid(),
        customer_health_smoking_state_id : SMOKING_STATE_LEELA.data.customer_health_smoking_state_id,
        is_latest: true,
        streak_start_user_time : moment().subtract(17, "days").format(),
        last_updated_streak_at_user_time : moment().subtract(1, "days").format(),
        streak_length: 17,
        archived: false,
    }
}

export const SMOKING_STREAK_BENDER = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_streak_id : uuid(),
        customer_health_smoking_state_id : SMOKING_STATE_BENDER.data.customer_health_smoking_state_id,
        is_latest: true,
        streak_start_user_time : moment().subtract(6, "days").format(),
        last_updated_streak_at_user_time : moment().subtract(1, "days").format(),
        streak_length: 6,
        archived: false,
    }
}

export const SMOKING_STREAK_ZOIDBERG = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_streak_id : uuid(),
        customer_health_smoking_state_id : SMOKING_STATE_ZOIDBERG.data.customer_health_smoking_state_id,
        is_latest: true,
        streak_start_user_time : moment().subtract(15, "days").format(),
        last_updated_streak_at_user_time : moment().subtract(5, "days").format(),
        streak_length: 10,
        archived: false,
    }
}