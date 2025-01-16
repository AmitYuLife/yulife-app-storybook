import moment from "moment"
import { v4 as uuid } from "uuid";
import { SMOKING_STATE_BENDER, SMOKING_STATE_LEELA, SMOKING_STATE_ZAPP, SMOKING_STATE_ZOIDBERG, SMOKING_STATE_AMY, SMOKING_STATE_HERMES, SMOKING_STATE_HERMES_4, SMOKING_STATE_HERMES_6, SMOKING_STATE_HERMES_5, SMOKING_STATE_HERMES_3, SMOKING_STATE_HERMES_2, SMOKING_STATE_KIF, SMOKING_STATE_KIF_7, SMOKING_STATE_KIF_6, SMOKING_STATE_KIF_5, SMOKING_STATE_KIF_4, SMOKING_STATE_KIF_3, SMOKING_STATE_KIF_2, SMOKING_STATE_KIF_8, SMOKING_STATE_KIF_9, SMOKING_STATE_KIF_10, SMOKING_STATE_KIF_11, SMOKING_STATE_KIF_12, SMOKING_STATE_KIF_13 } from "./customer_health_smoking_state";


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

export const SMOKING_STREAK_ZAPP = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_streak_id : uuid(),
        customer_health_smoking_state_id : SMOKING_STATE_ZAPP.data.customer_health_smoking_state_id,
        is_latest: true,
        streak_start_user_time : moment().subtract(27, "days").format(),
        last_updated_streak_at_user_time : moment().subtract(1, "days").format(),
        streak_length: 27,
        archived: false,
    }
}

export const SMOKING_STREAK_AMY = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_streak_id : uuid(),
        customer_health_smoking_state_id : SMOKING_STATE_AMY.data.customer_health_smoking_state_id,
        is_latest: true,
        streak_start_user_time : moment().subtract(1, "days").format(),
        last_updated_streak_at_user_time : moment().subtract(1, "days").format(),
        streak_length: 1,
        archived: false,
    }
}

export const SMOKING_STREAK_HERMES = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_streak_id : uuid(),
        customer_health_smoking_state_id : SMOKING_STATE_HERMES.data.customer_health_smoking_state_id,
        is_latest: true,
        streak_start_user_time : moment().subtract(1, "days").format(),
        last_updated_streak_at_user_time : moment().subtract(1, "days").format(),
        streak_length: 1,
        archived: false,
    }
}

export const SMOKING_STREAK_HERMES_2 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_streak_id : uuid(),
        customer_health_smoking_state_id : SMOKING_STATE_HERMES_2.data.customer_health_smoking_state_id,
        is_latest: true,
        streak_start_user_time : moment().subtract(1, "days").format(),
        last_updated_streak_at_user_time : moment().subtract(1, "days").format(),
        streak_length: 1,
        archived: false,
    }
}

export const SMOKING_STREAK_HERMES_3 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_streak_id : uuid(),
        customer_health_smoking_state_id : SMOKING_STATE_HERMES_3.data.customer_health_smoking_state_id,
        is_latest: true,
        streak_start_user_time : moment().subtract(1, "days").format(),
        last_updated_streak_at_user_time : moment().subtract(1, "days").format(),
        streak_length: 1,
        archived: false,
    }
}

export const SMOKING_STREAK_HERMES_4 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_streak_id : uuid(),
        customer_health_smoking_state_id : SMOKING_STATE_HERMES_4.data.customer_health_smoking_state_id,
        is_latest: true,
        streak_start_user_time : moment().subtract(1, "days").format(),
        last_updated_streak_at_user_time : moment().subtract(1, "days").format(),
        streak_length: 1,
        archived: false,
    }
}

export const SMOKING_STREAK_HERMES_5 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_streak_id : uuid(),
        customer_health_smoking_state_id : SMOKING_STATE_HERMES_5.data.customer_health_smoking_state_id,
        is_latest: true,
        streak_start_user_time : moment().subtract(1, "days").format(),
        last_updated_streak_at_user_time : moment().subtract(1, "days").format(),
        streak_length: 1,
        archived: false,
    }
}

export const SMOKING_STREAK_HERMES_6 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_streak_id : uuid(),
        customer_health_smoking_state_id : SMOKING_STATE_HERMES_6.data.customer_health_smoking_state_id,
        is_latest: true,
        streak_start_user_time : moment().subtract(1, "days").format(),
        last_updated_streak_at_user_time : moment().subtract(1, "days").format(),
        streak_length: 6,
        archived: false,
    }
}

export const SMOKING_STREAK_KIF = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_streak_id : uuid(),
        customer_health_smoking_state_id : SMOKING_STATE_KIF.data.customer_health_smoking_state_id,
        is_latest: true,
        streak_start_user_time : moment().subtract(1, "days").format(),
        last_updated_streak_at_user_time : moment().subtract(1, "days").format(),
        streak_length: 1,
        archived: false,
    }
}

export const SMOKING_STREAK_KIF_2 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_streak_id : uuid(),
        customer_health_smoking_state_id : SMOKING_STATE_KIF_2.data.customer_health_smoking_state_id,
        is_latest: true,
        streak_start_user_time : moment().subtract(1, "days").format(),
        last_updated_streak_at_user_time : moment().subtract(1, "days").format(),
        streak_length: 1,
        archived: false,
    }
}

export const SMOKING_STREAK_KIF_3 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_streak_id : uuid(),
        customer_health_smoking_state_id : SMOKING_STATE_KIF_3.data.customer_health_smoking_state_id,
        is_latest: true,
        streak_start_user_time : moment().subtract(1, "days").format(),
        last_updated_streak_at_user_time : moment().subtract(1, "days").format(),
        streak_length: 1,
        archived: false,
    }
}

export const SMOKING_STREAK_KIF_4 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_streak_id : uuid(),
        customer_health_smoking_state_id : SMOKING_STATE_KIF_4.data.customer_health_smoking_state_id,
        is_latest: true,
        streak_start_user_time : moment().subtract(1, "days").format(),
        last_updated_streak_at_user_time : moment().subtract(1, "days").format(),
        streak_length: 1,
        archived: false,
    }
}

export const SMOKING_STREAK_KIF_5 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_streak_id : uuid(),
        customer_health_smoking_state_id : SMOKING_STATE_KIF_5.data.customer_health_smoking_state_id,
        is_latest: true,
        streak_start_user_time : moment().subtract(1, "days").format(),
        last_updated_streak_at_user_time : moment().subtract(1, "days").format(),
        streak_length: 1,
        archived: false,
    }
}

export const SMOKING_STREAK_KIF_6 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_streak_id : uuid(),
        customer_health_smoking_state_id : SMOKING_STATE_KIF_6.data.customer_health_smoking_state_id,
        is_latest: true,
        streak_start_user_time : moment().subtract(1, "days").format(),
        last_updated_streak_at_user_time : moment().subtract(1, "days").format(),
        streak_length: 1,
        archived: false,
    }
}

export const SMOKING_STREAK_KIF_7 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_streak_id : uuid(),
        customer_health_smoking_state_id : SMOKING_STATE_KIF_7.data.customer_health_smoking_state_id,
        is_latest: true,
        streak_start_user_time : moment().subtract(1, "days").format(),
        last_updated_streak_at_user_time : moment().subtract(1, "days").format(),
        streak_length: 1,
        archived: false,
    }
}

export const SMOKING_STREAK_KIF_8 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_streak_id : uuid(),
        customer_health_smoking_state_id : SMOKING_STATE_KIF_8.data.customer_health_smoking_state_id,
        is_latest: true,
        streak_start_user_time : moment().subtract(1, "days").format(),
        last_updated_streak_at_user_time : moment().subtract(1, "days").format(),
        streak_length: 1,
        archived: false,
    }
}

export const SMOKING_STREAK_KIF_9 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_streak_id : uuid(),
        customer_health_smoking_state_id : SMOKING_STATE_KIF_9.data.customer_health_smoking_state_id,
        is_latest: true,
        streak_start_user_time : moment().subtract(1, "days").format(),
        last_updated_streak_at_user_time : moment().subtract(1, "days").format(),
        streak_length: 1,
        archived: false,
    }
}

export const SMOKING_STREAK_KIF_10 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_streak_id : uuid(),
        customer_health_smoking_state_id : SMOKING_STATE_KIF_10.data.customer_health_smoking_state_id,
        is_latest: true,
        streak_start_user_time : moment().subtract(1, "days").format(),
        last_updated_streak_at_user_time : moment().subtract(1, "days").format(),
        streak_length: 1,
        archived: false,
    }
}

export const SMOKING_STREAK_KIF_11 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_streak_id : uuid(),
        customer_health_smoking_state_id : SMOKING_STATE_KIF_11.data.customer_health_smoking_state_id,
        is_latest: true,
        streak_start_user_time : moment().subtract(1, "days").format(),
        last_updated_streak_at_user_time : moment().subtract(1, "days").format(),
        streak_length: 1,
        archived: false,
    }
}

export const SMOKING_STREAK_KIF_12 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_streak_id : uuid(),
        customer_health_smoking_state_id : SMOKING_STATE_KIF_12.data.customer_health_smoking_state_id,
        is_latest: true,
        streak_start_user_time : moment().subtract(1, "days").format(),
        last_updated_streak_at_user_time : moment().subtract(1, "days").format(),
        streak_length: 1,
        archived: false,
    }
}

export const SMOKING_STREAK_KIF_13 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_streak_id : uuid(),
        customer_health_smoking_state_id : SMOKING_STATE_KIF_13.data.customer_health_smoking_state_id,
        is_latest: true,
        streak_start_user_time : moment().subtract(1, "days").format(),
        last_updated_streak_at_user_time : moment().subtract(1, "days").format(),
        streak_length: 13,
        archived: false,
    }
}