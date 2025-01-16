import { generateRandomPostgresId, generateRandomTransformedUuid } from "@yu-life/yulife-bdd-framework"
import { CUSTOMER_BENDER, CUSTOMER_LEELA, CUSTOMER_ZAPP, CUSTOMER_ZOIDBERG, CUSTOMER_AMY, CUSTOMER_HERMES, CUSTOMER_KIF } from "./customers"
import { v4 as uuid } from "uuid";


const type= "postgres"
const modelName= "customer_health_smoking_state"

const sharedFields = {
    currency: "£",
    weeklyExpense: 5,
    amountUsedPerDay: 8,
    smokingType: "both",
    triggers: ["celebrate", "financial stress"],
    motivations: ["save_money", "improve_health"],
}  



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

export const SMOKING_STATE_AMY = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_id : uuid(),
        customer_id : CUSTOMER_AMY.data.customerId,
        meta_data : {
            journeySessionId:generateRandomTransformedUuid(),
            sharedFields,
            claimedStreakDays:[1]
        },
        longest_streak :10,
        total_days_smoke_free : 2,
        archived: true,
    }
}

export const SMOKING_STATE_HERMES = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_id : 'b861abf4-a389-4798-a618-9c8835d765b7',
        customer_id : CUSTOMER_HERMES.data.customerId,
        meta_data : {
            journeySessionId:generateRandomTransformedUuid(),
            sharedFields,
            claimedStreakDays:[1]
        },
        longest_streak :40,
        total_days_smoke_free : 57,
        archived: true,
    }
}

export const SMOKING_STATE_HERMES_2 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_id : 'b861abf4-a389-4798-a618-9c8835d765b1',
        customer_id : CUSTOMER_HERMES.data.customerId,
        meta_data : {
            journeySessionId:generateRandomTransformedUuid(),
            sharedFields,
            claimedStreakDays:[1]
        },
        longest_streak :21,
        total_days_smoke_free : 18,
        archived: true,
    }
}

export const SMOKING_STATE_HERMES_3 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_id : 'b861abf4-a389-4798-a618-9c8835d765b2',
        customer_id : CUSTOMER_HERMES.data.customerId,
        meta_data : {
            journeySessionId:generateRandomTransformedUuid(),
            sharedFields,
            claimedStreakDays:[4]
        },
        longest_streak :5,
        total_days_smoke_free : 5,
        archived: true,
    }
}

export const SMOKING_STATE_HERMES_4 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_id : 'b861abf4-a389-4798-a618-9c8835d765b3',
        customer_id : CUSTOMER_HERMES.data.customerId,
        meta_data : {
            journeySessionId:generateRandomTransformedUuid(),
            sharedFields,
            claimedStreakDays:[1]
        },
        longest_streak :2,
        total_days_smoke_free : 2,
        archived: true,
    }
}

export const SMOKING_STATE_HERMES_5 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_id : 'b861abf4-a389-4798-a618-9c8835d765b9',
        customer_id : CUSTOMER_HERMES.data.customerId,
        meta_data : {
            journeySessionId:generateRandomTransformedUuid(),
            sharedFields,
            claimedStreakDays:[1]
        },
        longest_streak :2,
        total_days_smoke_free : 2,
        archived: true,
    }
}

export const SMOKING_STATE_HERMES_6 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_id : 'b861abf4-a389-4798-a618-9c8835d765b4',
        customer_id : CUSTOMER_HERMES.data.customerId,
        meta_data : {
            journeySessionId:generateRandomTransformedUuid(),
            sharedFields,
            claimedStreakDays:[0]
        },
        longest_streak :6,
        total_days_smoke_free : 6,
        archived: false,
    }
}

export const SMOKING_STATE_KIF = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_id : uuid(),
        customer_id : CUSTOMER_KIF.data.customerId,
        meta_data : {
            journeySessionId:generateRandomTransformedUuid(),
            sharedFields,
            claimedStreakDays:[1]
        },
        longest_streak :40,
        total_days_smoke_free : 57,
        archived: true,
    }
}

export const SMOKING_STATE_KIF_2 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_id : 'b861abf4-a389-4798-a618-9c8825d765b1',
        customer_id : CUSTOMER_KIF.data.customerId,
        meta_data : {
            journeySessionId:generateRandomTransformedUuid(),
            sharedFields,
            claimedStreakDays:[1]
        },
        longest_streak :21,
        total_days_smoke_free : 18,
        archived: true,
    }
}

export const SMOKING_STATE_KIF_3 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_id : 'b861abf4-a389-4798-a618-9c8435d765b2',
        customer_id : CUSTOMER_KIF.data.customerId,
        meta_data : {
            journeySessionId:generateRandomTransformedUuid(),
            sharedFields,
            claimedStreakDays:[4]
        },
        longest_streak :5,
        total_days_smoke_free : 5,
        archived: true,
    }
}

export const SMOKING_STATE_KIF_4 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_id : 'b861abf4-a389-4798-a618-9c8855d765b3',
        customer_id : CUSTOMER_KIF.data.customerId,
        meta_data : {
            journeySessionId:generateRandomTransformedUuid(),
            sharedFields,
            claimedStreakDays:[1]
        },
        longest_streak :2,
        total_days_smoke_free : 2,
        archived: true,
    }
}

export const SMOKING_STATE_KIF_5 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_id : 'b861abf4-a389-4798-a618-9c8865d765b9',
        customer_id : CUSTOMER_KIF.data.customerId,
        meta_data : {
            journeySessionId:generateRandomTransformedUuid(),
            sharedFields,
            claimedStreakDays:[1]
        },
        longest_streak :2,
        total_days_smoke_free : 2,
        archived: true,
    }
}

export const SMOKING_STATE_KIF_6 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_id : 'b861abf4-a389-4798-a618-9c8875d765b4',
        customer_id : CUSTOMER_KIF.data.customerId,
        meta_data : {
            journeySessionId:generateRandomTransformedUuid(),
            sharedFields,
            claimedStreakDays:[0]
        },
        longest_streak :6,
        total_days_smoke_free : 6,
        archived: true,
    }
}

export const SMOKING_STATE_KIF_7 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_id : 'b861abf4-a399-4798-a618-9c8875d765b4',
        customer_id : CUSTOMER_KIF.data.customerId,
        meta_data : {
            journeySessionId:generateRandomTransformedUuid(),
            sharedFields,
            claimedStreakDays:[0]
        },
        longest_streak :6,
        total_days_smoke_free : 6,
        archived: true,
    }
}

export const SMOKING_STATE_KIF_8 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_id : 'b361abf4-a389-4798-a618-9c8875d765b4',
        customer_id : CUSTOMER_KIF.data.customerId,
        meta_data : {
            journeySessionId:generateRandomTransformedUuid(),
            sharedFields,
            claimedStreakDays:[0]
        },
        longest_streak :6,
        total_days_smoke_free : 6,
        archived: true,
    }
}

export const SMOKING_STATE_KIF_9 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_id : 'b865abf4-a389-4798-a618-9c8875d765b4',
        customer_id : CUSTOMER_KIF.data.customerId,
        meta_data : {
            journeySessionId:generateRandomTransformedUuid(),
            sharedFields,
            claimedStreakDays:[0]
        },
        longest_streak :6,
        total_days_smoke_free : 6,
        archived: true,
    }
}

export const SMOKING_STATE_KIF_10 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_id : 'b161abf4-a389-4798-a618-9c8875d765b4',
        customer_id : CUSTOMER_KIF.data.customerId,
        meta_data : {
            journeySessionId:generateRandomTransformedUuid(),
            sharedFields,
            claimedStreakDays:[0]
        },
        longest_streak :6,
        total_days_smoke_free : 6,
        archived: true,
    }
}

export const SMOKING_STATE_KIF_11 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_id : 'b867abf4-a389-4798-a618-9c8875d765b4',
        customer_id : CUSTOMER_KIF.data.customerId,
        meta_data : {
            journeySessionId:generateRandomTransformedUuid(),
            sharedFields,
            claimedStreakDays:[0]
        },
        longest_streak :6,
        total_days_smoke_free : 6,
        archived: true,
    }
}

export const SMOKING_STATE_KIF_12 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_id : 'b861abf5-a389-4798-a618-9c8875d765b4',
        customer_id : CUSTOMER_KIF.data.customerId,
        meta_data : {
            journeySessionId:generateRandomTransformedUuid(),
            sharedFields,
            claimedStreakDays:[0]
        },
        longest_streak :6,
        total_days_smoke_free : 6,
        archived: true,
    }
}


export const SMOKING_STATE_KIF_13 = {
    type,
    modelName,
    data:{
        customer_health_smoking_state_id : 'b861abf4-a389-4798-a612-9c8835d765b7',
        customer_id : CUSTOMER_KIF.data.customerId,
        meta_data : {
            journeySessionId:generateRandomTransformedUuid(),
            sharedFields,
            claimedStreakDays:[1]
        },
        longest_streak :40,
        total_days_smoke_free : 57,
        archived: false,
    }
}

