import { generateRandomPostgresId, generateRandomTransformedUuid } from "@yu-life/yulife-bdd-framework"
import { CUSTOMER_104, CUSTOMER_5, CUSTOMER_93, CUSTOMER_98 } from "./customers"
import moment from "moment"

const type = "postgres"
const modelName = "journey_progression"

const moodMonitorSessionID_1 = generateRandomTransformedUuid()

export const JP_93_1 = {
    type,
    modelName,
    data: {
        "journey_progression_id" : generateRandomTransformedUuid(),
        "customer_id" : CUSTOMER_93.data.customerId,
        "journey_id" : "group_dental_enrolment",
        "journey_session_id" : "ca9c587f-8f1b-4128-b077-9e9d6ee3a598",
        "step_id" : "group_dental_enrolment_intro",
        "step_data" : "{\"enrolmentWindowId\":\"8568f6d2-0f39-4c5d-ba36-93df59c6f8ac\",\"customerProductId\":\"YUCPID0000000010\",\"employerBenefitName\":\"Level 1 | Single\",\"employerBenefitCostPence\":917,\"businessQuoteId\":\"1905133426\",\"electionOption\":\"opt-in\"}",
        "archived" : false,
    },
}

export const JP_93_2 = {
    type,
    modelName,
    data: {
        "journey_progression_id" : generateRandomTransformedUuid(),
        "customer_id" : CUSTOMER_93.data.customerId,
        "journey_id" : "group_dental_enrolment",
        "journey_session_id" : "ca9c587f-8f1b-4128-b077-9e9d6ee3a598",
        "step_id" : "group_dental_enrolment_select_package",
        "step_data" : "{\"selectedLevel\":\"Level 1\"}",
        "archived" : false,
    }
}

export const JP_93_3 = {
    type,
    modelName,
    data: {
        "journey_progression_id" : generateRandomTransformedUuid(),
        "customer_id" : CUSTOMER_93.data.customerId,
        "journey_id" : "group_dental_enrolment",
        "journey_session_id" : "ca9c587f-8f1b-4128-b077-9e9d6ee3a598",
        "step_id" : "group_dental_enrolment_select_scheme",
        "step_data" : "{\"selectedScheme\":\"Level 1 | Couple\",\"dependantsAllowed\":\"spouse\",\"selectedSchemeCostPence\":1835,\"selectedSchemeCostContributionPence\":918,\"selectedSchemeEarnRate\":4,\"employerBenefitCostPence\":917}",
        "archived" : false,
    }
}

export const JP_93_4 = {
    type,
    modelName,
    data: {
        "journey_progression_id" : generateRandomTransformedUuid(),
        "customer_id" : CUSTOMER_93.data.customerId,
        "journey_id" : "group_dental_enrolment",
        "journey_session_id" : "ca9c587f-8f1b-4128-b077-9e9d6ee3a598",
        "step_id" : "group_dental_enrolment_declare_spouse",
        "step_data" : "{\"spouseDependant\":[{\"firstName\":\"Steven\",\"lastName\":\"Desai\",\"sex\":\"F\",\"dateOfBirth\":\"1994-02-22\",\"type\":\"spouse\"}]}",
        "archived" : false,
    }
}

export const JP_93_5 = {
    type,
    modelName,
    data: {
        "journey_progression_id" : generateRandomTransformedUuid(),
        "customer_id" : CUSTOMER_93.data.customerId,
        "journey_id" : "group_dental_enrolment",
        "journey_session_id" : "ca9c587f-8f1b-4128-b077-9e9d6ee3a598",
        "step_id" : "group_dental_enrolment_summary",
        "step_data" : "{}",
        "archived" : false,
    },
}

export const JP_93_6 = {
    type,
    modelName,
    data: {
        "journey_progression_id" : generateRandomTransformedUuid(),
        "customer_id" : CUSTOMER_93.data.customerId,
        "journey_id" : "group_dental_enrolment",
        "journey_session_id" : "ca9c587f-8f1b-4128-b077-9e9d6ee3a598",
        "step_id" : "group_dental_enrolment_loading_summary",
        "step_data" : "{\"enrolmentChoiceConfirmed\":true}",
        "archived" : false,
    }
}

export const JP_93_7 = {
    type,
    modelName,
    data: {
        "journey_progression_id" : generateRandomTransformedUuid(),
        "customer_id" : CUSTOMER_93.data.customerId,
        "journey_id" : "group_dental_enrolment",
        "journey_session_id" : "ca9c587f-8f1b-4128-b077-9e9d6ee3a598",
        "step_id" : "group_dental_enrolment_choice_holding",
        "step_data" : "{}",
        "archived" : false,
    }
}

export const JP_98_1 = {
    type,
    modelName,
    data: {
        "journey_progression_id" : generateRandomTransformedUuid(),
        "customer_id" : CUSTOMER_104.data.customerId,
        "journey_id" : "group_dental_enrolment",
        "journey_session_id" : "67f085a3-8d1e-40bf-b402-a022873b380e",
        "step_id" : "group_dental_enrolment_intro",
        "step_data" : "{\"enrolmentWindowId\":\"08f5c3ab-322e-4adf-8b79-1a40a02aec95\",\"customerProductId\":\"YUCPID0000011382\",\"employerBenefitName\":\"Level 1 | Single\",\"employerBenefitCostPence\":917,\"businessQuoteId\":\"GOYT9B8HK3\",\"electionOption\":\"opt-out\"}",
        "archived" : false,
    }
}

export const JP_98_2 = {
    type,
    modelName,
    data: {
        "journey_progression_id" : generateRandomTransformedUuid(),
        "customer_id" : CUSTOMER_104.data.customerId,
        "journey_id" : "group_dental_enrolment",
        "journey_session_id" : "67f085a3-8d1e-40bf-b402-a022873b380e",
        "step_id" : "group_dental_enrolment_select_package",
        "step_data" : "{\"selectedLevel\":\"Level 1\"}",
        "archived" : false,
    }
}
export const JP_98_3 = {
    type,
    modelName,
    data: {
        "journey_progression_id" : generateRandomTransformedUuid(),
        "customer_id" : CUSTOMER_104.data.customerId,
        "journey_id" : "group_dental_enrolment",
        "journey_session_id" : "67f085a3-8d1e-40bf-b402-a022873b380e",
        "step_id" : "group_dental_enrolment_confirm_opt_out",
        "step_data" : "{\"optedOut\":true}",
        "archived" : false,
    }
}

export const JP_98_4 = {
    type,
    modelName,
    data: {
        "journey_progression_id" : generateRandomTransformedUuid(),
        "customer_id" : CUSTOMER_104.data.customerId,
        "journey_id" : "group_dental_enrolment",
        "journey_session_id" : "67f085a3-8d1e-40bf-b402-a022873b380e",
        "step_id" : "group_dental_enrolment_loading_summary",
        "step_data" : "{\"enrolmentChoiceConfirmed\":true}",
        "archived" : false,
    }
}

export const JP_98_5 = {
    type,
    modelName,
    data: {
        "journey_progression_id" : generateRandomTransformedUuid(),
        "customer_id" : CUSTOMER_104.data.customerId,
        "journey_id" : "group_dental_enrolment",
        "journey_session_id" : "67f085a3-8d1e-40bf-b402-a022873b380e",
        "step_id" : "group_dental_enrolment_choice_holding",
        "step_data" : "{}",
        "archived" : false,
    }
}

    
export const MM1 = {
    type,
    modelName,
    data:{
    "journey_progression_id": generateRandomTransformedUuid(),
    "customer_id": CUSTOMER_5.data.customerId,
    "journey_id": "daily_survey",
    "journey_session_id": moodMonitorSessionID_1,
    "step_id": "daily_survey_intro",
    "step_data": "{}",
    "archived":false
    }
}

export const MM1_UPDATE = {
    type,
    modelName,
    updateKey: 'journey_progression_id',
    data: {
        "journey_progression_id": MM1.data.journey_progression_id,
        "created_at": moment().subtract(2, "days").format(),
        "modified_at": moment().subtract(2, "days").format(),
    }
}


export const MM2 = {
    type,
    modelName,
    data: {
    "journey_progression_id": generateRandomTransformedUuid(),
    "customer_id": CUSTOMER_5.data.customerId,
    "journey_id": "daily_survey",
    "journey_session_id": moodMonitorSessionID_1,
    "step_id": "daily_survey_rested_today",
    "step_data": "{\"yuCoinRewardDay\":true,\"question1\":\"1\"}",
    "archived": false,
    }
}

export const MM2_UPDATE = {
    type,
    modelName,
    updateKey: 'journey_progression_id',
    data: {
        "journey_progression_id": MM2.data.journey_progression_id,
        "created_at": moment().subtract(2, "days").format(),
        "modified_at": moment().subtract(2, "days").format(),
    }
}

export const MM3 = {
    type,
    modelName,
    data: {
    "journey_progression_id": generateRandomTransformedUuid(),
    "customer_id": CUSTOMER_5.data.customerId,
    "journey_id": "daily_survey",
    "journey_session_id": moodMonitorSessionID_1,
    "step_id": "daily_survey_your_day_so_far",
    "step_data": "{\"yuCoinRewardDay\":true,\"question2\":\"2\"}",
    "archived": false,
    }
}

export const MM3_UPDATE = {
    type,
    modelName,
    updateKey: 'journey_progression_id',
    data: {
        "journey_progression_id": MM3.data.journey_progression_id,
        "created_at": moment().subtract(2, "days").format(),
        "modified_at": moment().subtract(2, "days").format(),
    }
}


export const MM4 = {
    type,
    modelName,
    data: {
    "journey_progression_id": generateRandomTransformedUuid(),
    "customer_id": CUSTOMER_5.data.customerId,
    "journey_id": "daily_survey",
    "journey_session_id": moodMonitorSessionID_1,
    "step_id": "daily_survey_how_you_feel_today",
    "step_data": "{\"yuCoinRewardDay\":true,\"question3\":\"Happy\"}",
    "archived": false,
    }
}

export const MM4_UPDATE = {
    type,
    modelName,
    updateKey: 'journey_progression_id',
    data: {
        "journey_progression_id": MM4.data.journey_progression_id,
        "created_at": moment().subtract(2, "days").format(),
        "modified_at": moment().subtract(2, "days").format(),
    }
}


export const MM5 = {
    type,
    modelName,
    data: {
    "journey_progression_id": generateRandomTransformedUuid(),
    "customer_id": CUSTOMER_5.data.customerId,
    "journey_id": "daily_survey",
    "journey_session_id": moodMonitorSessionID_1,
    "step_id": "daily_survey_how_you_felt_this_week",
    "step_data": "{\"yuCoinRewardDay\":true}",
    "archived": false,
    }
}

export const MM5_UPDATE = {
    type,
    modelName,
    updateKey: 'journey_progression_id',
    data: {
        "journey_progression_id": MM5.data.journey_progression_id,
        "created_at": moment().subtract(2, "days").format(),
        "modified_at": moment().subtract(2, "days").format(),
    }
}

export const MM6 = {
    type,
    modelName,
    data: {
        "journey_progression_id": generateRandomTransformedUuid(),
        "customer_id": CUSTOMER_5.data.customerId,
        "journey_id": "daily_survey",
        "journey_session_id": moodMonitorSessionID_1,
        "step_id": "daily_survey_mood_history",
        "step_data": "{}",
        "archived": false,
    }
}

export const MM6_UPDATE = {
    type,
    modelName,
    updateKey:'journey_progression_id',
    data: {
    "journey_progression_id": MM6.data.journey_progression_id,
    "created_at": moment().subtract(2, "days").format(),
    "modified_at": moment().subtract(2, "days").format(),
    }
}
